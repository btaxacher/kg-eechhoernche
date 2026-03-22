/**
 * Download-Script für Bilder von der alten eechhoernche.de Website.
 * Versucht zuerst die Original-URL, dann die Wayback Machine als Fallback.
 *
 * Usage: node scripts/download-images.mjs
 */

import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { join, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public", "images");

const BASE_URL = "http://www.eechhoernche.de";
const WAYBACK_PREFIX = "https://web.archive.org/web/2024";

// All known pages to crawl for images
const PAGES = [
  "/kopf.htm",
  "/home.htm",
  "/menue.htm",
  "/fuss.htm",
  "/ueber_uns.htm",
  "/wie_alles_begann.htm",
  "/unsere_tollitaeten.htm",
  "/ordenmenue.htm",
  "/unsere_Gruppen_menue.htm",
  "/tanzgarde.htm",
  "/links.htm",
  "/impressum.htm",
  "/Kontaktformular.html",
  "/Datenschutz.html",
  "/termine_intern.htm",
  "/termine_extern.htm",
  "/ueber_uns_menue.htm",
  "/menue_termine.htm",
  "/jahresbeitrag.htm",
];

// Orden single pages
for (let year = 2002; year <= 2019; year++) {
  const ext = year >= 2015 ? ".html" : ".htm";
  PAGES.push(`/${year}${ext}`);
}

// Target directories
const DIRS = [
  "logo",
  "hero",
  "dreigestirn",
  "orden",
  "gruppen",
  "vorstand",
  "banner",
  "misc",
];

async function ensureDirs() {
  for (const dir of DIRS) {
    const path = join(PUBLIC, dir);
    if (!existsSync(path)) {
      await mkdir(path, { recursive: true });
    }
  }
}

async function tryFetch(url, timeoutMs = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return res;
  } catch {
    clearTimeout(timer);
    return null;
  }
}

async function downloadImage(imageUrl, targetPath) {
  if (existsSync(targetPath)) {
    console.log(`  SKIP (exists): ${basename(targetPath)}`);
    return true;
  }

  // Try original URL
  let res = await tryFetch(imageUrl);

  // Fallback: Wayback Machine
  if (!res) {
    const waybackUrl = `${WAYBACK_PREFIX}/${imageUrl}`;
    console.log(`  Trying Wayback: ${waybackUrl}`);
    res = await tryFetch(waybackUrl);
  }

  if (!res) {
    console.log(`  FAIL: ${imageUrl}`);
    return false;
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(targetPath, buffer);
  console.log(`  OK: ${basename(targetPath)} (${buffer.length} bytes)`);
  return true;
}

function categorizeImage(src) {
  const lower = src.toLowerCase();
  if (lower.includes("kopf") || lower.includes("banner") || lower.includes("header")) return "hero";
  if (lower.includes("orden") || /\/20\d{2}\.(jpg|png|gif)/i.test(lower)) return "orden";
  if (lower.includes("dreigestirn") || lower.includes("prinz") || lower.includes("tollit")) return "dreigestirn";
  if (lower.includes("garde") || lower.includes("joana") || lower.includes("maskott") || lower.includes("gruppe")) return "gruppen";
  if (lower.includes("eechh") || lower.includes("logo") || lower.includes("squirrel")) return "logo";
  if (lower.includes("vorstand") || lower.includes("vosi")) return "vorstand";
  if (lower.includes("menue") || lower.includes("button") || lower.includes("nav")) return "misc";
  return "misc";
}

async function fetchPageImages(pageUrl) {
  // Since we can't use Playwright in a simple script,
  // we'll fetch the HTML and parse img tags with regex
  const res = await tryFetch(pageUrl);
  if (!res) {
    // Try wayback
    const waybackRes = await tryFetch(`${WAYBACK_PREFIX}/${pageUrl}`);
    if (!waybackRes) return [];
    const html = await waybackRes.text();
    return extractImageUrls(html, pageUrl);
  }
  const html = await res.text();
  return extractImageUrls(html, pageUrl);
}

function extractImageUrls(html, pageUrl) {
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  const bgRegex = /background(?:-image)?:\s*url\(["']?([^"')]+)["']?\)/gi;
  const urls = new Set();

  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    urls.add(match[1]);
  }
  while ((match = bgRegex.exec(html)) !== null) {
    urls.add(match[1]);
  }

  // Convert relative URLs to absolute
  return [...urls]
    .filter(
      (u) =>
        !u.startsWith("data:") &&
        !u.includes("counter-go.de") &&
        !u.includes("web.archive.org/static") &&
        /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(u)
    )
    .map((u) => {
      if (u.startsWith("http")) return u;
      if (u.startsWith("/")) return `${BASE_URL}${u}`;
      // Relative path
      const pagePath = pageUrl.replace(/\/[^/]*$/, "/");
      return `${pagePath}${u}`;
    });
}

async function main() {
  console.log("=== KG Eechhörnche Image Downloader ===\n");
  await ensureDirs();

  // Check if original site is reachable
  const siteCheck = await tryFetch(BASE_URL, 5000);
  const useWayback = !siteCheck;
  if (useWayback) {
    console.log("Original site offline. Using Wayback Machine as fallback.\n");
  } else {
    console.log("Original site reachable!\n");
  }

  const allImageUrls = new Set();
  const downloaded = [];
  const failed = [];

  // Collect image URLs from all pages
  for (const page of PAGES) {
    const pageUrl = `${BASE_URL}${page}`;
    console.log(`Scanning: ${page}`);
    const images = await fetchPageImages(pageUrl);
    for (const img of images) {
      allImageUrls.add(img);
    }
  }

  console.log(`\nFound ${allImageUrls.size} unique images.\n`);

  // Download each image
  for (const imageUrl of allImageUrls) {
    const filename = basename(new URL(imageUrl).pathname);
    const category = categorizeImage(imageUrl);
    const targetPath = join(PUBLIC, category, filename);

    console.log(`Downloading: ${filename} → ${category}/`);
    const success = await downloadImage(imageUrl, targetPath);
    if (success) {
      downloaded.push({ url: imageUrl, path: `images/${category}/${filename}`, category });
    } else {
      failed.push(imageUrl);
    }
  }

  // Write manifest
  const manifest = { downloaded, failed, timestamp: new Date().toISOString() };
  await writeFile(
    join(PUBLIC, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\n=== Done ===`);
  console.log(`Downloaded: ${downloaded.length}`);
  console.log(`Failed: ${failed.length}`);
  console.log(`Manifest: public/images/manifest.json`);
}

main().catch(console.error);
