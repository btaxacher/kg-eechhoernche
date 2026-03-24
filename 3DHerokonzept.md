# 3D Hero Scroll-Animation — Konzepte & Gemini-Prompts

> 5 Premium-Konzepte fuer eine Apple-Style 3D Scroll-Animation auf der KG Eechhoernche Website.
> Jedes Konzept enthält: Beschreibung, Gemini-Bildgenerierungsprompt, detaillierte Scroll-Animationsplanung
> und **KI-Video-Animationsprompts** (Veo 3 / Kling / Runway Gen-3) als Alternative zur Code-Implementation.

## Referenz: Bestehendes Branding

- **Logo:** Handgezeichnetes Eichhoernchen mit rot-weiss gestreifter Narrenkappe, goldener Schelle am Zipfel, sitzend auf einem Tannenzweig
- **Farben:** Karnevalsrot (#C41E3A), Warmgold (#D4A843), Cremeweiss (#FBF8F3), Dunkelbraun (#3A2518)
- **Motto:** "...denn mir sinn all nur Minsche"
- **Verein:** Karnevalsgesellschaft Ett'schelder Eechhoernche von 2002 e.V., Schleiden-Ettelscheid, Eifel

---

## Konzept 1: "Der Goldene Eechhoernche" — 3D Maskottchen Product Reveal

### Idee

Ein hyperdetailliertes 3D-gerendertes Eichhoernchen-Maskottchen in voller Karnevalsmontur — inspiriert vom Original-Logo, aber als modernes 3D Character Design. Das Eichhoernchen traegt eine opulente rot-goldene Narrenkappe, haelt ein Zepter und hat einen kunstvollen Karnevalsorden auf der Brust. Apple AirPods Max-Style: extreme Nahaufnahme → Zoom Out → 360°-Rotation.

### Benoetigt werden: 1 Hauptbild + 2 Alternativwinkel

**Hauptbild (Frontalansicht):**

### Gemini Prompt — Hauptbild

```
Create a hyper-detailed 3D rendered character illustration of a cartoon squirrel mascot for a German carnival society. The squirrel should look friendly, proud, and festive — NOT realistic, but a stylized 3D character (think Pixar/Disney quality).

SQUIRREL CHARACTER DETAILS:
- Warm chestnut-brown fur with a lighter cream-colored belly and chest
- Large, expressive amber-brown eyes with a confident, joyful sparkle
- Bushy, voluminous tail curling upward elegantly behind the body
- Slightly anthropomorphic posture: sitting upright on hind legs, chest puffed out proudly
- Small, rounded ears with tufts of fur at the tips
- Tiny pink nose, subtle smile showing two small front teeth

CARNIVAL COSTUME & ACCESSORIES:
- Wearing an ornate jester's hat (Narrenkappe) with red and white vertical stripes, the fabric should look like rich velvet with a slight sheen
- The hat has THREE pointed tips, each ending with a polished golden bell (Schelle) that gleams in the light
- Around the neck: a thick golden chain with an elaborate carnival medal (Orden) hanging from it — the medal is circular, gold with red enamel accents, featuring an engraved acorn in the center surrounded by oak leaf ornaments
- In the right paw: holding a small golden scepter (Narrenzepter) with a miniature jester's head finial at the top
- A red satin sash draped diagonally across the chest, embroidered with golden thread reading "KG Eechhoernche" in an elegant script font
- Sitting on a decorative green fir branch (Tannenzweig) with realistic pine needles

LIGHTING & ATMOSPHERE:
- Studio lighting setup: key light from upper-left (warm golden tone), fill light from right (soft white), rim light from behind (golden glow creating a subtle halo effect around the fur)
- The fur should catch the light beautifully, showing individual hair strands at the edges (subsurface scattering effect)
- Background: pure solid black (#000000) — no gradients, no environment, just the character floating in a void
- The golden elements (bells, medal, scepter, embroidery) should have realistic metallic reflections with warm highlights

CAMERA & COMPOSITION:
- Camera angle: slightly below eye level, looking up at the squirrel (hero angle, makes the character look majestic)
- The squirrel fills approximately 70% of the frame height
- Sharp focus on the face and medal, with very subtle depth-of-field blur on the tail tip
- High resolution, photorealistic 3D rendering quality
- Aspect ratio: 16:9 landscape orientation
- Total image size: at least 2560x1440 pixels

STYLE REFERENCE:
- Quality level of Pixar character renders or high-end mobile game character art
- Clean, polished surfaces — no grunge, no noise, no film grain
- Rich, saturated colors — the red should be deep crimson, the gold should be warm and lustrous
- The overall feeling should be: premium, festive, proud, and slightly whimsical
```

### Scroll-Animation — "Product Reveal"

**Gesamtlaenge:** 5 Scroll-Viewports (500vh sticky section)

**Phase 1 — Extreme Close-Up (0%-20% Scroll)**
- Start: Das Bild ist extrem hereingezoomt — man sieht NUR die Augen und die Nase des Eichhoernchens, formatfuellend
- CSS: `transform: scale(5)` auf dem Bild, `translate` zentriert auf die Augenpartie
- Die goldenen Reflexe in den Augen glitzern (subtile CSS-Animation, `mix-blend-mode: screen` Overlay)
- Hintergrund: absolut schwarz
- Kein Text sichtbar

**Phase 2 — Zoom Out (20%-45% Scroll)**
- Scroll-gesteuert: `scale` geht von 5.0 auf 1.0 (exponentielles Easing)
- Gleichzeitig dreht sich das Bild leicht: `rotateY` von -15deg auf 0deg (als ob man es gerade rueckt)
- Bei 30% Scroll: Text "Session 2024/2025" faded als goldener Badge oben rechts ein (`opacity: 0→1`, `translateY: -20px→0`)
- Bei 40%: Der Vereinsname "KG Ett'schelder Eechhoernche" erscheint links in grosser Schrift, Buchstabe fuer Buchstabe (staggered letter animation, 30ms Delay pro Buchstabe)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration)

**Phase 3 — Schwebend + Rotation (45%-65% Scroll)**
- Das Eichhoernchen schwebt nun frei im schwarzen Raum, zentriert
- Sanfte `rotateY`-Animation: 0deg → 25deg → -15deg → 0deg (als ob man es von allen Seiten begutachtet)
- Gleichzeitig: subtiles vertikales Schweben (`translateY: ±8px`, `sin`-basiert)
- Text links: "von 2002 e.V." gleitet ein
- Text rechts: Das Motto "...denn mir sinn all nur Minsche" erscheint in goldener Serifenschrift, Zeichen fuer Zeichen (Typewriter-Effekt)
- Goldene Partikel (sehr dezent, 15-20 Stueck) schweben langsam im Hintergrund nach oben

**Phase 4 — Zurueckweichen + Content Reveal (65%-85% Scroll)**
- Das Eichhoernchen skaliert herunter auf `scale(0.6)` und bewegt sich nach oben (`translateY: -30vh`)
- Gleichzeitig: der schwarze Hintergrund faded zu Cremeweiss (`background: #000 → #FBF8F3`)
- Von unten schiebt sich der eigentliche Website-Content (Teaser-Grid) herein
- Das Eichhoernchen wird zum "schwebenden Element" ueber dem Content
- Alle Texte aus Phase 2-3 faden aus

**Phase 5 — Aufloesung + Scroll-Freigabe (85%-100% Scroll)**
- Das Eichhoernchen skaliert weiter herunter auf `scale(0.15)` und bewegt sich in die obere linke Ecke (wo es als Logo im Header landet)
- `opacity` geht auf 0 in den letzten 5%
- Der Header faded ein
- Die sticky-Section wird freigegeben, normales Scrollen beginnt
- Uebergang ist nahtlos: der User merkt kaum, wann die Animation endet und die normale Seite beginnt

**Technische Umsetzung:**
- Framer Motion `useScroll()` + `useTransform()` auf einem `sticky`-Container
- Ein `<div style="height: 500vh">` als Scroll-Trigger-Container
- Das Bild ist ein `position: sticky; top: 0` Element darin
- Alle Transformationen ueber `useTransform(scrollYProgress, [input], [output])` gesteuert
- Goldene Partikel: `framer-motion` AnimatePresence mit randomisierten y-Positionen
- Buchstaben-Animation: `motion.span` pro Zeichen mit `staggerChildren: 0.03`

### KI-Video-Animation — Prompt (Konzept 1)

**Empfohlenes Tool:** Veo 3 (beste 3D-Objekt-Konsistenz und Kamerakontrolle)
**Alternativ:** Kling 2.0 (Image-to-Video Modus mit dem Gemini-generierten Bild als Startframe)

**Video-Parameter:**
- Dauer: 8-10 Sekunden (wird auf der Website scroll-gesteuert abgespielt, nicht in Echtzeit)
- Aufloesung: 4K (3840x2160) oder mindestens 1080p
- FPS: 30 (wird frameweise per Scroll angesteuert = 240-300 Frames)
- Format: MP4 (H.264/H.265) — direkt als `<video>` einbindbar, KEIN GIF noetig
- Stil: Photorealistic 3D render, studio lighting, **warm cream background (#FBF8F3)**

> **WICHTIG — Scroll-Animation Kontext (gilt fuer ALLE Video-Prompts):**
> Dieses Video wird NICHT normal abgespielt, sondern Frame-fuer-Frame per Scroll gesteuert. Deshalb:
> - KEINE Lens Flares, Lichtblitze oder dramatischen Lichtaenderungen
> - KEINE schnellen Bewegungen oder abrupten Cuts
> - KEIN Motion Blur
> - Beleuchtung muss KONSTANT bleiben ueber das gesamte Video
> - Bewegungen muessen gleichmaessig und kontinuierlich sein
> - Jeder einzelne Frame muss fuer sich gut aussehen (wird ggf. "eingefroren" angezeigt)

**Veo 3 Prompt:**

```
IMPORTANT TECHNICAL CONTEXT: This video will NOT be played normally. It will be embedded in a website and controlled FRAME-BY-FRAME via scroll position (like Apple product pages). Every single frame must look clean and complete on its own. Therefore: NO lens flares, NO light flashes, NO motion blur, NO sudden transitions, NO flickering effects. Lighting must remain PERFECTLY CONSISTENT throughout. All movements must be ultra-smooth and continuous with no sudden speed changes.

A 3D cartoon squirrel mascot wearing a red-and-white striped jester's hat with golden bells. The squirrel has warm brown fur, amber eyes, holds a golden scepter, and wears a golden carnival medal on its chest.

BACKGROUND: Warm cream white (#FBF8F3) — a soft, clean off-white with a very slight warm yellowish tint. NOT pure white, NOT black. This solid cream background must remain consistent and unchanged throughout the entire video.

The camera starts in an EXTREME CLOSE-UP on the squirrel's eyes — only the amber iris with warm reflections are visible, filling the entire frame. The cream background peeks through at the edges.

Over the next 3 seconds, the camera SLOWLY PULLS BACK in a smooth, continuous dolly-out movement at a perfectly constant deceleration rate. The nose appears, then the full face, then the jester's hat, then the medal and scepter become visible, then the full body sitting on a pine branch. The zoom-out is gradual and never stops abruptly.

Once fully revealed (at the 3-second mark), the squirrel begins a SLOW 360-DEGREE ROTATION — the camera orbits smoothly around the character at a constant angular velocity, showing the profile from the left, then the back with the bushy tail curling upward, then the right profile, returning to the front. The rotation takes 4 seconds and is perfectly smooth with zero acceleration changes.

During the final 2 seconds, the camera slowly dollies back further as the squirrel gently floats upward. A few subtle golden particles drift slowly upward in the background (very small, very slow, no sparkle effects). The squirrel shrinks to about 30% of the frame against the cream background.

Camera movement: smooth dolly on a virtual track, no handheld shake, no wobble. Lighting: consistent warm golden key light from upper-left that does NOT change in intensity or position at any point. The golden elements (bells, medal, scepter) have soft warm reflections — no harsh specular pings or glints that would flicker during scroll. Pixar-quality 3D rendering style. Clean, soft shadows.
```

**Kling 2.0 Prompt (Image-to-Video):**
> Nutze das Gemini-generierte Maskottchen-Bild als Startframe.

```
SCROLL-CONTROLLED VIDEO — every frame must be individually clean, no motion blur, no flashes, constant lighting.

Starting from this image, animate the following: The camera slowly pulls back from an extreme close-up of the squirrel's eyes to reveal the full character. Then the squirrel rotates 360 degrees around its vertical axis, showing all sides. Warm, consistent studio lighting on cream white background (#FBF8F3). A few subtle golden particles float slowly upward. The rotation is perfectly smooth at constant speed, like a turntable. Camera orbits the subject smoothly. No lens flares, no light changes, no motion blur. Duration: 8 seconds.
```

---

## Konzept 2: "Karnevalswappen" — Heraldisches 3D-Wappen Entfaltung

### Idee

Ein imposantes, dreidimensionales Karnevalswappen/Siegel — wie eine Mischung aus mittelalterlicher Heraldik und luxurioesem Branding. In der Mitte das Eichhoernchen als stilisierte goldene Silhouette, umgeben von Eichenlaub, roten Samtdrapierungen und Karnevalssymbolen. Die Scroll-Animation: Das Wappen startet als flache goldene Muenze und entfaltet sich Stueck fuer Stueck in voller 3D-Pracht.

### Gemini Prompt

```
Create a highly detailed 3D render of an ornate heraldic carnival crest (Karnevalswappen) for a German carnival society called "KG Eechhoernche".

CENTRAL ELEMENT — SQUIRREL EMBLEM:
- A stylized squirrel silhouette in polished gold, shown in profile (facing right), sitting upright with tail curling upward
- The squirrel wears a tiny jester's hat (Narrenkappe) with three points
- Rendered as a raised relief (bas-relief) on the central shield surface, as if hammered from gold metal
- The squirrel is sitting on a small branch with oak leaves

SHIELD SHAPE & MATERIAL:
- Classic heraldic shield shape (pointed at bottom, curved top edge)
- The shield surface is deep crimson red enamel (like a luxury car paint: glossy, flawless, with subtle reflections)
- Bordered by a thick ornate gold frame with intricate scroll-work (Rococo style volutes and C-curves)
- The gold has a warm, antique patina — not bright yellow but rich, aged gold with darker recesses

SURROUNDING ORNAMENTS (arranged symmetrically):
- TOP: A large, ornate golden crown (Narrenkrone) sits atop the shield, with red velvet visible inside the crown and small bells at each point
- LEFT & RIGHT: Cascading oak leaf garlands in gold, mixed with acorns, flowing down both sides of the shield
- LEFT & RIGHT (outer): Rich crimson red velvet fabric draping down from behind the crown, with golden tassels at the bottom — the fabric has realistic folds, wrinkles, and light interaction
- BOTTOM: A golden ribbon/banner unfurling below the shield with the text "von 2002 e.V." engraved in an elegant serif font
- BEHIND THE SHIELD: Two crossed golden scepters (Narrenzepter) peeking out diagonally from behind the shield

DECORATIVE DETAILS:
- Small carnival masks (Venetian half-masks) integrated into the gold scroll-work at the upper left and upper right corners
- Tiny golden bells scattered throughout the ornamental frame
- A single golden acorn hanging from each bottom corner of the ribbon
- Subtle diamond/gem accents at key intersection points of the gold frame (deep red rubies)

LIGHTING & RENDERING:
- Dramatic three-point studio lighting: warm golden key light from above-left, cool fill light from right, subtle golden rim light from behind
- The gold should have realistic metallic shader: warm specular highlights, soft reflections, anisotropic stretching on curved surfaces
- The red enamel should show deep, lustrous reflections like polished lacquer
- Volumetric light rays coming from behind the crown, giving it a divine/majestic aura
- Subtle dust particles floating in the light beams (very few, very small)

BACKGROUND:
- Solid pure black background (#000000)
- No environment, no floor reflection — the crest floats in a void
- The only light sources illuminate the crest itself

CAMERA & COMPOSITION:
- Dead-center composition, perfectly symmetrical
- Camera straight on (0 degree angle), no perspective distortion
- The entire crest (crown to banner bottom) fills about 85% of the frame height
- Slight depth of field: sharp on the shield center, very subtle blur on the outermost oak leaves
- Aspect ratio: 9:16 portrait orientation (for mobile-first hero)
- Resolution: at least 1440x2560 pixels

STYLE:
- Hyper-realistic 3D render, NOT cartoon, NOT flat
- Quality level comparable to luxury brand advertising (Rolex, Louis Vuitton level of detail)
- The overall mood should be: majestic, prestigious, ceremonial, timeless
- Think: "What if a carnival society had a coat of arms made by Faberge?"
```

### Scroll-Animation — "Wappen-Entfaltung"

**Gesamtlaenge:** 6 Scroll-Viewports (600vh sticky section)

**Phase 1 — Goldene Muenze (0%-15% Scroll)**
- Start: Das gesamte Wappen ist zusammengepresst auf eine kleine, kreisrunde Form (wie eine Goldmuenze, ca. 120px Durchmesser)
- Zentriert auf dem Bildschirm, schwarzer Hintergrund
- Die "Muenze" hat einen subtilen goldenen Schimmer (animiertes radial-gradient als Overlay)
- `clip-path: circle(60px)` auf dem Bild
- Langsame Rotation: `rotateY` animiert durchgehend (1 Umdrehung pro 3 Sekunden) — es sieht aus wie eine sich drehende Muenze
- Kein Text, kein UI

**Phase 2 — Expansion des Schildes (15%-35% Scroll)**
- Der `clip-path: circle()` expandiert scroll-gesteuert von 60px auf den vollen Schildbereich
- Gleichzeitig stoppt die Y-Rotation (geht von akuellem Winkel auf 0deg)
- Das Bild skaliert von `scale(0.3)` auf `scale(0.8)`
- Die Expansion passiert nicht gleichmaessig — erst schnell, dann langsamer (Easing: `easeOutExpo`)
- Bei 25%: Ein goldener Lichtblitz (flash) — `opacity: 0→1→0` eines weissen/goldenen Overlays in 200ms
- Danach ist der zentrale Schild mit Eichhoernchen sichtbar, aber die aeusseren Ornamente sind noch nicht da

**Phase 3 — Ornamente entfalten sich (35%-55% Scroll)**
- Die Ornamente "wachsen" heraus aus den Raendern des Schildes:
  - 35%-40%: Die goldene Umrandung/Scrollwork erscheint (Scale-Animation von 0→1 mit `transform-origin: center`)
  - 40%-45%: Die Eichenlaub-Girlanden links und rechts wachsen nach unten (`clip-path: inset()` von oben nach unten)
  - 45%-50%: Die roten Samtdrapierungen fallen herab (von oben herein, `translateY: -100%→0`, mit `ease-out` wie fallendes Tuch)
  - 50%-55%: Die Krone oben senkt sich von oben herab (`translateY: -50px→0`, `scale: 1.2→1.0`)
- Jedes Element hat einen kleinen "Landing-Bounce" (overshoot easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`)
- Subtiles goldenes Partikelleuchten bei jedem "Landing"

**Phase 4 — Banner + Text (55%-70% Scroll)**
- Das untere Banner entrollt sich (von der Mitte nach links und rechts: `scaleX: 0→1`)
- Der Text "von 2002 e.V." erscheint Buchstabe fuer Buchstabe auf dem Banner
- Oberhalb des Wappens: "KG Ett'schelder Eechhoernche" faded ein, grosse goldene Schrift
- Unterhalb: "...denn mir sinn all nur Minsche" in kursiver Serifenschrift
- Die gekreuzten Zepter hinter dem Schild fahren diagonal herein

**Phase 5 — Zurueckweichen + Hintergrundwechsel (70%-90% Scroll)**
- Das gesamte Wappen skaliert auf `scale(0.45)` und bewegt sich in die obere Bildhaelfte
- Schwarzer Hintergrund faded zu Cremeweiss
- Von unten gleitet der Seiteninhalt herein
- Das Wappen bekommt einen subtilen `drop-shadow` der sich verstaerkt (schwebt ueber dem Content)

**Phase 6 — Aufloesung (90%-100% Scroll)**
- Das Wappen faded aus (`opacity: 1→0`) oder schrumpft in den Header hinein
- Normaler Scroll wird freigegeben
- Nahtloser Uebergang

**Technische Umsetzung:**
- Das Wappen-Bild wird als einzelnes Asset geladen, aber die "Entfaltung" wird durch geschickte `clip-path`-Animationen simuliert
- Alternativ: Das Bild in 5-6 Ebenen zerlegen (Hintergrund-Tuch, Schild, Ornamente, Krone, Banner) und jede Ebene separat animieren — dafuer muessten 5-6 separate Bilder generiert werden (jeweils mit Transparenz)
- Framer Motion `useScroll()` + `useTransform()` auf sticky-Container
- Goldener Partikeleffekt: Canvas-Element oder Framer Motion AnimatePresence

### KI-Video-Animation — Prompt (Konzept 2)

**Empfohlenes Tool:** Kling 2.0 (hervorragend bei Objekt-Transformationen und Morphing-Effekten)
**Alternativ:** Veo 3 (fuer die Krone-/Ornament-Entfaltung)

**Video-Parameter:**
- Dauer: 10-12 Sekunden
- Aufloesung: 4K (3840x2160) oder 1080p
- FPS: 30 (300-360 Frames fuer Scroll-Steuerung)
- Format: MP4 (H.264/H.265) — direkt als `<video>` einbindbar, KEIN GIF
- Stil: Hyper-realistic 3D, luxury branding aesthetic, **warm cream background (#FBF8F3)**

**Veo 3 Prompt:**

```
IMPORTANT TECHNICAL CONTEXT: This video will be played FRAME-BY-FRAME via scroll position on a website (not as a normal video). Every frame must look clean on its own. NO lens flares, NO light flashes, NO motion blur, NO sudden brightness changes. Lighting must stay PERFECTLY CONSISTENT. All movements must be ultra-smooth and continuous.

A transformation sequence of an ornate golden carnival crest (heraldic coat of arms) on a warm cream white background (#FBF8F3 — soft off-white with slight warm tint). Consistent warm golden lighting from above-left, soft and even.

The video begins with a small golden COIN rotating slowly in the center of the frame — it's flat, circular, catching the soft warm light as it rotates on its vertical axis at a constant speed. The coin gleams with warm 18k gold reflections.

At the 2-second mark, the coin gradually STOPS rotating and faces the camera (smooth deceleration, no sudden stop). The coin then begins to smoothly TRANSFORM and EXPAND — it morphs continuously from a flat circle into a detailed heraldic shield shape. The crimson red enamel surface becomes visible as the gold border grows ornate Rococo scroll-work. The transition is gradual, never sudden.

Between seconds 3-6, the ornamental elements smoothly UNFOLD from behind the shield in sequence: first, golden oak leaf garlands grow downward on both sides at a steady pace. Then rich crimson red velvet fabric drapes descend gently from above with smooth cloth motion. Finally, an elaborate golden crown descends slowly from above and settles softly on top of the shield.

Between seconds 6-8, crossed golden scepters slide smoothly and diagonally out from behind the shield. A golden ribbon unfurls below the shield with the text "von 2002 e.V." becoming legible. Small golden bells appear in the decorative frame.

The final 3 seconds: the fully assembled crest hovers with a very gentle, slow floating motion. The camera slowly pulls back to reveal the full crest — a golden squirrel silhouette is visible in relief on the crimson shield center. Cream background remains clean and consistent.

Style: luxury brand advertising quality. Every gold surface has soft warm metallic reflections (no harsh specular pings). The red enamel has deep, glass-like depth. Camera movement is smooth and deliberate. No handheld shake. No dramatic light effects.
```

**Kling 2.0 Prompt (Image-to-Video):**
> Nutze das Gemini-generierte Wappen-Bild als Endframe (letztes Bild der Sequenz).

```
SCROLL-CONTROLLED VIDEO — every frame must be individually clean, no motion blur, no flashes, constant lighting.

Create a reverse-reveal animation ending at this image. Start with a small slowly rotating golden coin in the center of a cream white background (#FBF8F3). The coin smoothly stops rotating and transforms into this ornate heraldic crest. The ornaments, velvet draping, crown, and golden details unfold and materialize piece by piece over 10 seconds. Consistent warm golden lighting throughout — no flashes, no flickering, no dramatic light changes. Every movement is smooth and continuous. Luxury advertising quality.
```

---

## Konzept 3: "Eifel Karnevalsnacht" — Immersive Parallax-Szene

### Idee

Eine magische naechtliche Karnevalsszene im Eifel-Dorf Ettelscheid. Fachwerkhaeuser mit goldenen Lichtern, Konfetti in der Luft, ein Karnevalszug mit Festwagen — und auf dem Hauptwagen thront das Eichhoernchen-Maskottchen. Tiefe Parallax-Ebenen erzeugen beim Scrollen ein echtes Gefuehl von Raeumlichkeit. Storytelling-Ansatz: von stiller Nacht zur Karnevals-Explosion.

### WICHTIG: Fuer dieses Konzept werden 5 separate Bilder benoetigt (Parallax-Ebenen)

### Gemini Prompt — Ebene 1: Himmel & Berge (Hinterste Ebene)

```
Create a digital painting of a night sky over the Eifel mountains in Germany. This is the BACKGROUND LAYER of a parallax scene — it must have a TRANSPARENT lower third (the mountains should fade into transparency at the bottom).

SKY:
- Deep midnight blue gradient: darker at top (almost black), transitioning to deep navy blue, then to a warm dark purple near the horizon
- A large, luminous full moon in the upper right quadrant — slightly golden-tinted, with visible crater details, surrounded by a soft atmospheric glow/halo
- Stars scattered across the sky: a mix of bright stars and dimmer ones, creating realistic star density. Include one prominent star cluster
- Thin, wispy clouds drifting across the lower portion of the sky, partially lit by moonlight (silver edges)
- 2-3 shooting stars / thin light trails in the upper portion

MOUNTAINS:
- Rolling, gentle Eifel hill silhouettes along the lower third of the image
- 3-4 layers of hills, each slightly lighter in tone (atmospheric perspective)
- Closest hills: deep navy-black silhouettes with barely visible tree line textures
- Furthest hills: slightly lighter, more purple-tinted
- The hills should FADE TO FULL TRANSPARENCY at the very bottom edge (alpha gradient from opaque to transparent over the bottom 15% of the image)

ATMOSPHERE:
- A warm golden glow on the horizon where the village (not visible in this layer) would be — just the reflected light pollution creating an amber warmth on the lowest clouds
- The overall mood: serene, expectant, magical — the calm before the carnival storm

STYLE:
- Digital painting / illustration style — NOT photorealistic, but richly detailed
- Painterly brushstrokes visible on close inspection
- Color palette: deep blues, purples, silver, touches of warm gold at the horizon
- Similar to: Studio Ghibli background art quality, or high-end children's book illustration

FORMAT:
- Aspect ratio: 21:9 ultra-wide (2560x1097 pixels minimum)
- PNG format with TRANSPARENCY (alpha channel) at the bottom
- The sky and mountains should occupy the full width and about 85% of the height, with the bottom 15% fading to transparent
```

### Gemini Prompt — Ebene 2: Dorf-Silhouette (Mittlere Ebene)

```
Create a digital illustration of a small German Eifel village at night during carnival season. This is a MIDDLE LAYER for a parallax scene — the sky area (upper 40%) must be FULLY TRANSPARENT and the bottom edge must also FADE TO TRANSPARENT.

VILLAGE ARCHITECTURE:
- A charming row of 8-12 traditional German half-timbered houses (Fachwerkhaeuser), varying in height and width
- The houses have steep, dark slate roofs with snow remnants
- Timber frame details visible: dark wooden beams on white/cream plastered walls
- A small stone church with a pointed steeple slightly left of center, taller than the surrounding houses
- A few bare winter trees between the houses
- All buildings should look warmly inhabited: every window glows with warm amber-orange light from inside

CARNIVAL DECORATIONS:
- Colorful paper lanterns (red, gold, green) strung between the houses on thin wires
- Small carnival flags and pennants (triangular, in red-white-gold) hanging from the lantern wires
- A few houses have carnival garlands (Girlanden) around their doors
- The church steeple has a golden light on top

LIGHTING:
- The primary light source is the warm window glow and the string lanterns
- The buildings cast a warm ambient light onto the cobblestone street below
- Subtle golden light spill on the facades from the lanterns
- The overall palette is warm against the cold night: amber windows, golden lanterns, dark blue shadows

GROUND/STREET:
- Old cobblestone street in the foreground, wet and reflective (puddles reflecting the lantern lights)
- The street surface should FADE TO TRANSPARENCY at the very bottom of the image

SKY AREA:
- The upper 40% of the image must be COMPLETELY TRANSPARENT (pure alpha). The rooftops and church steeple extend into this transparent area.

STYLE:
- Warm, inviting digital illustration — painterly but detailed
- Think: European picture book illustration meets holiday card
- Rich warm tones: amber, gold, burnt orange for lights; deep blue, navy for shadows
- NOT flat/vector style — should have painted depth and atmosphere

FORMAT:
- Aspect ratio: 21:9 ultra-wide (2560x1097 pixels minimum)
- PNG with full alpha channel transparency (top 40% and bottom 10% transparent)
```

### Gemini Prompt — Ebene 3: Karnevalszug + Maskottchen (Vorderste Ebene)

```
Create a vibrant digital illustration of a German carnival parade (Karnevalszug) scene. This is the FOREGROUND LAYER of a parallax effect — the upper 55% of the image must be TRANSPARENT, and the bottom should show the parade from a low camera angle.

MAIN FLOAT (FESTWAGEN):
- A colorful carnival float (Karnevalswagen) in the center of the composition
- The float's base is decorated in red and gold, with painted oak leaf patterns
- ON TOP OF THE FLOAT: A large, joyful cartoon squirrel mascot (the club mascot) sitting proudly on a golden throne
  - The squirrel wears a red-and-white striped jester's hat (Narrenkappe) with golden bells
  - It holds a golden scepter in one paw and waves with the other
  - The squirrel is approximately 1.5x human height on the float (it's a figure/statue, not real)
  - Warm spotlights illuminate the mascot from below, creating dramatic uplighting
- The float is being pulled (the pulling mechanism is off-screen to the left)

CROWD & ATMOSPHERE:
- Silhouettes of carnival-goers (Jecken) in the immediate foreground: people in colorful costumes, some with face paint, wearing pointed hats, waving
- The crowd is shown from behind/below (we're looking up at the parade float)
- People are throwing their hands up, some holding drinks, some throwing confetti
- Small children on shoulders of parents

CONFETTI & EFFECTS:
- MASSIVE amounts of colorful confetti and streamers (Luftschlangen) filling the air
- The confetti should be in carnival colors: red, gold, white, green, with some pink and blue
- Some longer paper streamers curling through the air
- A few "Kamelle" (thrown sweets/candies) mid-air

LIGHTING:
- Dramatic festival lighting: the float has built-in golden spotlights
- Warm ambient glow from the celebration
- The crowd silhouettes are backlit by the float's lights

TRANSPARENCY:
- Upper 55% of image: COMPLETELY TRANSPARENT (alpha = 0)
- The parade elements should start appearing from around the 45% mark and build density toward the bottom
- The very bottom 5%: slight transparency fade-out

STYLE:
- Energetic, vibrant digital illustration
- Bold, saturated colors — this is the most colorful layer
- Dynamic composition with implied movement (confetti flying, people gesturing)
- Slightly stylized, festive, joyful mood

FORMAT:
- Aspect ratio: 21:9 ultra-wide (2560x1097 pixels minimum)
- PNG with full alpha channel
```

### Gemini Prompt — Ebene 4: Konfetti-Overlay (Ueberste Ebene)

```
Create a transparent overlay of carnival confetti and streamers (Luftschlangen) scattered across the frame. This is the TOPMOST PARALLAX LAYER that will float in front of everything else.

CONFETTI DETAILS:
- Various sizes of confetti pieces: small circles, rectangles, stars, and tiny hearts
- Colors: predominantly gold, crimson red, white, with accents of forest green and royal blue
- Some pieces are sharp and in-focus (in the "near" depth), others are large and blurry (extremely close to "camera", with heavy Gaussian blur, creating a bokeh-like depth effect)
- Mix of flat confetti and curling streamers (long ribbon-like pieces that twist and curl)
- About 40-60 pieces total, distributed unevenly across the frame (slightly denser on the sides, sparser in the center so the middle layers show through)

STREAMERS:
- 5-8 longer paper streamers in gold and red, spiraling elegantly
- Some partially unrolled, some tightly curled
- They should look like they're floating/falling through the air

BACKGROUND:
- ENTIRELY TRANSPARENT — this is a pure overlay layer. Every pixel that is not a confetti piece or streamer must be fully transparent (alpha = 0)

LIGHTING:
- Each confetti piece catches light differently: some have bright specular highlights (gold foil pieces), others are matte paper
- The gold pieces should genuinely sparkle/gleam
- Subtle warm tint on all pieces (as if lit by golden festival lighting)

FORMAT:
- Aspect ratio: 21:9 ultra-wide (2560x1097 pixels minimum)
- PNG with FULL alpha transparency
- This layer will be composited on top of other layers in a web application
```

### Scroll-Animation — "Immersive Parallax-Erzaehlung"

**Gesamtlaenge:** 7 Scroll-Viewports (700vh sticky section)

**Phase 1 — Stille Nacht (0%-15% Scroll)**
- Sichtbar: NUR Ebene 1 (Himmel & Berge)
- Der Mond leuchtet sanft, Sterne funkeln (CSS `animation: twinkle`)
- Leiser visueller Eindruck: Ruhe, Erwartung
- Text: Nichts — nur die Natur
- Parallax: Ebene 1 bewegt sich kaum (2% der Scroll-Geschwindigkeit)

**Phase 2 — Das Dorf erscheint (15%-30% Scroll)**
- Ebene 2 (Dorf) schiebt sich von unten herein (`translateY: 100%→0`)
- Die Geschwindigkeit ist langsamer als der Scroll — es fuehlt sich an, als ob man auf das Dorf zufliegt
- Die Fensterlichter "gehen an" — starten dunkel und werden warm (CSS `filter: brightness()`)
- Bei 25%: Die Laternenlichter beginnen zu schimmern
- Parallax-Differenz: Ebene 1 bewegt sich mit 15% Scroll-Speed, Ebene 2 mit 40%
- Text bei 28%: "Ettelscheid, Eifel" in dezenter weisser Schrift, unten links

**Phase 3 — Der Karnevalszug (30%-50% Scroll)**
- Ebene 3 (Parade) faehrt von rechts herein (`translateX: 100%→0`)
- Gleichzeitig zoomt die gesamte Szene leicht heran (`scale: 1→1.15`)
- Die Parade bewegt sich langsam von rechts nach links waehrend des Scrollens
- Bei 40%: Ebene 4 (Konfetti) erscheint — einzelne Stuecke fallen von oben herein
- Parallax-Speeds: Ebene 1: 10%, Ebene 2: 35%, Ebene 3: 60%, Ebene 4: 90%
- Sound-Vorschlag: optional, leises Karnevals-"Tusch" (kann als Option implementiert werden)

**Phase 4 — Karnevals-Hoehepunkt (50%-65% Scroll)**
- Alle 4 Ebenen sichtbar, volle Parallax-Tiefe
- Konfetti-Dichte nimmt zu (zusaetzliche CSS-generierte Konfetti-Partikel)
- Der Zoom geht auf `scale: 1.3` — man ist mittendrin
- Das Eichhoernchen-Maskottchen auf dem Wagen ist nun prominenter sichtbar
- Text-Overlay (zentriert, gross): "KG Ett'schelder Eechhoernche" in goldener Schrift mit `text-shadow` Glow
- Darunter: "...denn mir sinn all nur Minsche" in weisser Serifenschrift
- Die Texte haben `backdrop-filter: blur(4px)` fuer Lesbarkeit

**Phase 5 — Fokus auf das Maskottchen (65%-80% Scroll)**
- Alle Ebenen ausser dem Maskottchen-Bereich werden dunkel (`filter: brightness(0.3)`)
- Ein Spotlight-Effekt (radial-gradient Overlay) fokussiert auf das Eichhoernchen
- Der Zoom geht auf `scale: 2.0` und zentriert auf das Maskottchen
- CTA-Buttons erscheinen: "Termine & Events" und "Mitglied werden"

**Phase 6 — Transition zur Website (80%-100% Scroll)**
- Der Spotlight expandiert bis der gesamte Hintergrund weiss wird
- Alle Parallax-Ebenen faden aus
- Die Website-Header und Content gleiten ein
- Nahtloser Uebergang zur normalen Seite

**Technische Umsetzung:**
- 4 `<div>`-Ebenen mit `position: absolute`, je mit eigenem `useTransform()` fuer Parallax
- Aeusserer Container: `position: sticky; top: 0; height: 100vh` innerhalb von `height: 700vh`
- Jede Ebene hat eigene `translateX`, `translateY`, `scale` Transformationen basierend auf `scrollYProgress`
- Konfetti-Ebene: Kombination aus Bild-Asset + dynamisch generierten CSS-Partikeln (`@keyframes confetti-fall`)
- Performance: `will-change: transform` auf allen Ebenen, GPU-beschleunigt

### KI-Video-Animation — Prompt (Konzept 3)

**Empfohlenes Tool:** Veo 3 (beste Szenen-Kohaerenz und Kamerafahrten durch komplexe Umgebungen)
**Alternativ:** Runway Gen-3 Alpha Turbo (gute Landschafts-Szenen)

**Video-Parameter:**
- Dauer: 12-15 Sekunden (laengste Sequenz — erzaehlerisch)
- Aufloesung: 4K (3840x2160)
- FPS: 24 (cinematic look, 288-360 Frames)
- Format: MP4 (H.264/H.265) — direkt als `<video>` einbindbar, KEIN GIF
- Stil: Digitale Illustration / Painterly (Studio Ghibli meets europaeische Buchillustration)

> **Hinweis Hintergrund:** Konzept 3 ist eine Nachtszene — hier ist ein dunkler/naechtlicher Hintergrund thematisch korrekt (kein Cremeweiss). Der Uebergang zur hellen Website passiert erst in den letzten Frames (Fade zu Cremeweiss).

**WICHTIG:** Bei diesem Konzept gibt es zwei Ansaetze:
1. **Ein einzelnes Video** (einfacher) — eine Kamerafahrt durch die gesamte Szene
2. **4 separate Videos** (aufwendiger, aber bessere Parallax-Kontrolle) — je ein Video pro Ebene

**Ansatz 1: Einzelnes Cinematic Video**

**Veo 3 Prompt:**

```
IMPORTANT TECHNICAL CONTEXT: This video will be played FRAME-BY-FRAME via scroll position on a website. Every frame must look clean on its own. NO sudden brightness changes, NO lens flares, NO motion blur. All camera movement must be ultra-smooth and continuous — the user will "scrub" through this video slowly. Lighting within each scene section must remain consistent.

A magical camera flight through a small German Eifel village on carnival night. Painterly digital illustration style, warm and atmospheric like a Studio Ghibli film. NOT photorealistic — rich, painted look with visible artistic brushwork.

SCENE SETUP: A charming village of half-timbered houses (Fachwerkhaeuser) nestled in rolling Eifel hills under a starlit night sky with a large golden moon. Warm glowing windows and colorful paper lanterns strung between buildings.

CAMERA MOVEMENT (continuous single smooth shot — no cuts, no jumps):

0-3 seconds: The camera starts high above, looking down at distant dark mountain silhouettes against a deep blue star-filled sky. A luminous full moon glows in the upper right. The camera slowly and smoothly TILTS DOWN and begins to DESCEND at a constant gentle speed toward a warm golden glow on the horizon.

3-6 seconds: The camera continues descending and moving FORWARD at a steady pace. The village rooftops come into view — steep dark slate roofs, a church steeple with a golden light. Colorful carnival lanterns (red, gold, green) strung between buildings sway gently. Windows glow with warm amber light. Carnival flags flutter gently.

6-9 seconds: The camera glides smoothly down to STREET LEVEL and pushes through the cobblestone village street at a steady pace. A CARNIVAL PARADE comes into view — a colorful float decorated in red and gold. On top sits a large, joyful cartoon squirrel mascot wearing a red-and-white jester's hat with golden bells, holding a golden scepter and waving. Crowds of people in colorful carnival costumes line the streets.

9-12 seconds: Confetti gradually fills the air — red, gold, white, green streamers and confetti drift through the frame (appearing smoothly, not as a sudden explosion). The camera pushes CLOSER to the squirrel mascot at a constant pace. The atmosphere is celebration — energy, color, joy. Consistent warm golden lighting.

12-14 seconds: The camera smoothly ZOOMS IN on the squirrel mascot's face. The background gradually softens into a warm bokeh of lantern lights and confetti. The squirrel's amber eyes are warm and inviting.

14-15 seconds: The warm golden tones gradually BRIGHTEN and transition smoothly to a warm cream-white (#FBF8F3) — creating a seamless bridge to the website background color. The final frame is clean cream-white.

Color palette: deep midnight blues for sky, warm ambers and golds for lights, crimson reds for carnival decorations, cream whites for house walls. Rich, saturated, magical atmosphere. All transitions are gradual — nothing happens suddenly.
```

**Ansatz 2: Separate Ebenen-Videos (fuer echten Parallax)**

Wenn du separate Videos fuer jede Ebene generieren willst (um sie dann mit unterschiedlichen Scroll-Geschwindigkeiten zu steuern), nutze diese Prompts:

> Alle Ebenen-Prompts enthalten den Scroll-Kontext: konstantes Licht, keine Flares, smooth Bewegungen.

**Ebene 1 — Himmel (Veo 3):**
```
SCROLL-CONTROLLED VIDEO — frame-by-frame playback, every frame must be clean, no flashes, no motion blur.

A slow, gentle time-lapse of a starlit night sky over dark mountain silhouettes. Deep midnight blue to purple gradient. A large golden moon glows in the upper right with a soft, steady halo — no pulsing or flickering. Stars are steady pinpoints of light. Thin wispy clouds drift very slowly across the sky, lit silver by moonlight. The mountains are dark silhouettes at the bottom. Digital painting style, atmospheric and serene. 15 seconds, extremely slow and smooth movement. Consistent lighting throughout.
```

**Ebene 2 — Dorf (Veo 3):**
```
SCROLL-CONTROLLED VIDEO — frame-by-frame playback, every frame must be clean, no flashes, no motion blur.

A row of charming German half-timbered houses at night. The windows have a steady warm amber glow (not flickering). Colorful paper lanterns (red, gold, green) strung between the buildings sway very gently and slowly in a light breeze. Carnival flags move subtly. A church steeple rises above the houses. Cobblestone street below has soft reflections of the warm lantern light. Digital illustration style, warm and inviting. 15 seconds of gentle, continuous atmospheric animation. All light sources remain at constant brightness. Smooth, slow movements only.
```

**Ebene 3 — Karnevalszug (Veo 3):**
```
SCROLL-CONTROLLED VIDEO — frame-by-frame playback, every frame must be clean, no flashes, no motion blur.

A German carnival parade float moving slowly and steadily from right to left at a constant speed. The float is decorated in red and gold with a large cartoon squirrel mascot sitting on a golden throne on top, wearing a jester's hat with golden bells, waving in a smooth, repeating motion. Crowd silhouettes in the foreground. Confetti and streamers drift slowly and continuously through the air (not exploding, just floating steadily). Warm consistent golden lighting on the float. Vibrant digital illustration style. 15 seconds, smooth continuous movement at constant speed.
```

**Ebene 4 — Konfetti-Overlay (Veo 3):**
```
SCROLL-CONTROLLED VIDEO — frame-by-frame playback, every frame must be clean, no flashes, no motion blur.

Colorful carnival confetti and paper streamers falling and floating slowly through the air against a completely black background. Confetti in red, gold, white, green — small circles, rectangles, stars. Some pieces closer to camera with soft depth-of-field blur, others sharp and detailed. Long curling gold and red streamers drift through the frame. The confetti falls at a slow, steady pace with smooth physics — no sudden movements. Warm golden light on the pieces is consistent and even throughout (no sparkle flashes, no glinting). 15 seconds of continuous, smooth falling confetti. Pure black background.
```

---

## Konzept 4: "Premium Karnevalsorden" — Luxury Product Shot

### Idee

Ein extrem detaillierter Macro-Shot eines fiktiven Premium-Karnevalsordens der KG Eechhoernche — gefilmt wie ein Luxus-Uhren-Werbespot. Goldgraviertes Eichhoernchen, rote Emaille, feinste Handwerkskunst. Die Scroll-Animation: Apple Watch Ultra-Style, der Orden dreht sich im Raum und zeigt jeden Detail.

### Gemini Prompt

```
Create a hyper-realistic macro photograph of a premium carnival medal (Karnevalsorden) for a German carnival society. This should look EXACTLY like a luxury watch advertisement — the same level of detail, lighting perfection, and material quality.

MEDAL SHAPE & STRUCTURE:
- Overall shape: circular, approximately 80mm diameter, with ornate scalloped edges (12 scallops, each tipped with a tiny golden ball)
- The medal has substantial thickness (about 5mm) — it should look heavy and solid, not flat
- A triangular fabric ribbon is attached at the top: red satin with two thin golden stripes along each edge
- The ribbon is folded into a precise V-shape (like a military decoration) with a golden pin-bar at the top

FRONT FACE — DETAILED DESIGN:
- OUTER RING: A raised golden border (18k gold color) with engraved text running clockwise: "KARNEVALSGESELLSCHAFT ETT'SCHELDER EECHHOERNCHE" — the letters are slightly raised, with micro-beveled edges that catch the light
- Between the text start and end: a small engraved acorn as a separator
- INNER FIELD: Deep crimson red vitreous enamel (like cloisonne), perfectly smooth, glossy, with incredible depth of color — you can almost see INTO the enamel
- CENTER MOTIF: A raised gold squirrel in profile (facing right), sitting on an oak branch with 3 leaves and 2 acorns. The squirrel wears a tiny jester's hat. Every hair strand of the tail is individually engraved. The detail level should be breathtaking — like a Swiss watch dial
- BOTTOM OF INNER FIELD: The year "2024" engraved in a small golden cartouche
- Between outer ring and inner field: a ring of 22 tiny golden dots (representing the 22 years since founding)

MATERIAL QUALITIES:
- The gold should look like REAL 18k gold: warm, slightly rosy tone, with mirror-like reflections on flat surfaces and softer satin finish on curved surfaces
- The red enamel should have the depth of real vitreous enamel: glossy, glass-like, with subtle color variation when viewed at angle
- The ribbon should show realistic satin fabric weave texture, with the characteristic sheen of silk satin
- The pin mechanism on the back (partially visible at the top) should be functional-looking stainless steel

LIGHTING SETUP:
- Primary: Large, soft key light from the upper left (60 degree angle), creating a beautiful graduated highlight across the gold surface
- Secondary: Subtle fill from the lower right to open up shadows
- Accent: A sharp specular highlight on the gold rim at the 2 o'clock position (creates a "hero sparkle")
- The lighting should create the characteristic "Rolex dial" gradient across the enamel surface — darker at the edges, luminous in the center
- NO harsh shadows — everything should be elegant and controlled

BACKGROUND:
- Pure black (#000000), completely featureless
- A very subtle dark gradient directly beneath the medal suggests a surface (like it's lying on black velvet), but barely visible
- No reflections, no environment — product photography void

CAMERA:
- Macro lens perspective — as if shot with a 100mm macro at f/4
- Very slight depth of field: the center of the medal is tack-sharp, the edges of the ribbon go slightly soft
- The medal is shot at approximately 15 degrees from straight-on — very slightly angled to create depth without losing the front design
- The medal is centered in the frame, occupying about 65% of the frame width
- Aspect ratio: 16:9 landscape
- Resolution: 2560x1440 pixels minimum

POST-PROCESSING FEEL:
- Clean, clinical product photography — no vintage effects, no grain, no color grading
- Perfect white balance (neutral to slightly warm)
- Micro-contrast enhanced to bring out engraving details
- The overall impression should be: "This is a $5,000 collectible piece, not a party trinket"
```

### Scroll-Animation — "Luxury Product Showcase"

**Gesamtlaenge:** 5 Scroll-Viewports (500vh sticky section)

**Phase 1 — Darkness + Lichtpunkt (0%-10% Scroll)**
- Komplett schwarzer Bildschirm
- Ein einzelner, kleiner Lichtpunkt (goldener Glare) erscheint in der Mitte
- Der Punkt pulsiert sanft (`scale: 0.8→1.2`, `opacity: 0.6→1.0`)
- Er waechst langsam mit dem Scroll

**Phase 2 — Orden-Reveal aus dem Licht (10%-30% Scroll)**
- Der Lichtpunkt expandiert (`scale: 1→50`) und wird zum Bild
- Das Bild startet EXTREM hereingezoomt — man sieht nur die gravierte Eichhoernchen-Silhouette im Zentrum, formatfuellend
- Die Gravurdetails sind unglaublich scharf sichtbar — man sieht jede einzelne Fellstruktur
- Scroll-gesteuert: `scale` geht von `8.0` auf `1.0` (smooth Easing)
- Gleichzeitig: leichte `rotateZ` von 5deg auf 0deg (der Orden "richtet sich aus")
- Bei 20%: Text "Session 2024/2025" erscheint als goldene Praegung am oberen Bildrand
- Bei 25%: "KG Ett'schelder Eechhoernche" in eleganter Serifenschrift unter dem Orden

**Phase 3 — Langsame Rotation (30%-55% Scroll)**
- Der Orden dreht sich langsam: `rotateY` von 0deg auf 180deg
- Waehrend der Drehung veraendern sich die Lichtreflexionen (CSS `background-position` Animation auf einem Glare-Overlay)
- Bei 90deg (ca. 42% Scroll): Man sieht die Kante — duenn, golden, edel
- Bei 180deg: Die Rueckseite ist sichtbar — hier koennte eine alternative Grafik sein (z.B. die Rueckseite mit Gravur "22 Jahre" oder das Vereinslogo)
- Alternativ: Statt einer echten Rueckseite wird die Rotation bei 170deg gestoppt und umgekehrt
- Goldene Lichtreflexionen wandern ueber die Oberflaeche (animiertes `linear-gradient` Overlay mit `mix-blend-mode: overlay`)

**Phase 4 — Schwebendes Produkt + Details (55%-75% Scroll)**
- Der Orden schwebt leicht (`translateY: ±5px`, sinusfoermig)
- Um den Orden herum erscheinen Detail-Callouts (wie bei Apple-Produktseiten):
  - Linie vom Eichhoernchen → "Handgraviertes Eichhoernchen-Motiv"
  - Linie vom Rand → "22 goldene Punkte — fuer jedes Vereinsjahr"
  - Linie von der Emaille → "Tiefe Karnevalsrot-Emaille"
- Jeder Callout faded nacheinander ein (staggered, 300ms Abstand)
- Die Linien sind duenn, golden, und "wachsen" von der Quelle zum Text

**Phase 5 — Aufloesung zur Website (75%-100% Scroll)**
- Callouts faden aus
- Der Orden skaliert auf `scale(0.4)` und bewegt sich nach oben
- Background faded von schwarz zu Cremeweiss
- Die "echten" Karnevalsorden-Karten der Seite erscheinen darunter
- Der animierte Orden laesst sich nahtlos in die Orden-Galerie integrieren
- Scroll-Freigabe

**Technische Umsetzung:**
- Ein einzelnes hochaufgeloestes Bild
- Rotation wird ueber CSS `perspective` + `rotateY` simuliert (fuer echte 3D-Rotation brauchte man ein 3D-Modell oder eine Bildsequenz)
- Alternativ: 36 Bilder des Ordens in 10-Grad-Schritten generieren und als Scroll-gesteuerte Bildsequenz abspielen (wie Apple es macht)
- Lichtreflexionen: animiertes `<div>` mit `linear-gradient` + `mix-blend-mode: screen`
- Callout-Linien: SVG `<line>` Elemente mit `stroke-dashoffset` Animation
- Framer Motion fuer alle scroll-basierten Transformationen

### KI-Video-Animation — Prompt (Konzept 4)

**Empfohlenes Tool:** Runway Gen-3 Alpha (hervorragend bei Macro-Aufnahmen und Produktfotografie-Stil)
**Alternativ:** Veo 3 (fuer die Rotation), Kling 2.0 (Image-to-Video mit dem Gemini-Bild)

**Video-Parameter:**
- Dauer: 8-10 Sekunden
- Aufloesung: 4K (3840x2160) — Macro-Detail braucht hohe Aufloesung
- FPS: 30 (240-300 Frames)
- Format: MP4 (H.264/H.265) — direkt als `<video>` einbindbar, KEIN GIF
- Stil: Luxury product photography, macro lens, studio lighting, **warm cream background (#FBF8F3)**

**Veo 3 Prompt:**

```
IMPORTANT TECHNICAL CONTEXT: This video will be played FRAME-BY-FRAME via scroll position on a website. Every frame must look clean and complete on its own. NO lens flares, NO light flashes, NO pulsing effects, NO motion blur, NO sudden brightness changes. Lighting must remain PERFECTLY CONSISTENT throughout. All movements must be ultra-smooth and continuous.

A luxury product video of an ornate golden carnival medal (Karnevalsorden) floating against a warm cream white background (#FBF8F3 — soft off-white with a slight warm tint). Shot like a luxury watch advertisement — obsessive detail, perfect lighting.

The medal is circular with scalloped golden edges, deep crimson red enamel center, and a raised gold squirrel motif. A red satin ribbon with gold stripes is attached at the top in a V-shape. The gold has warm 18k tones.

CAMERA SEQUENCE:

0-2 seconds: Start with an EXTREME MACRO close-up of the medal's center — the engraved gold squirrel fills the entire frame. Individual engraving lines and the texture of hammered gold are visible. The camera holds perfectly steady. Consistent warm lighting from the start — no fade-in from black.

2-5 seconds: The camera begins a SMOOTH, CONTINUOUS PULL-BACK at a constant deceleration rate. The full medal face gradually becomes visible — the golden border with engraved text, the ring of tiny golden dots, the red enamel field. As the camera pulls back, it simultaneously begins a SLOW ORBIT — rotating around the medal clockwise at a constant angular velocity.

5-7 seconds: The camera continues orbiting smoothly. At the 90-degree point, we see the medal's EDGE — thin, golden, precisely machined. Continuing the orbit, we see the BACK — smooth gold with a subtle engraved year. The warm light creates soft, consistent reflections that move smoothly across the gold surfaces as the angle changes (no sharp glints or flashes).

7-9 seconds: The orbit smoothly completes back to the front face. The camera has pulled back to show the full medal with ribbon against the cream background. The medal hovers with the subtlest floating motion — barely perceptible.

9-10 seconds: The camera holds position. The medal continues its very gentle hover. Clean, still composition on cream background. A natural end point.

LIGHTING: Soft, even key light from upper-left creating a graduated warm highlight across the gold. Soft fill from right. No sharp specular pings or flashes — only smooth, graduated metallic reflections that shift gradually with the camera orbit. The red enamel shows deep, consistent reflections. Cream background is evenly lit throughout.

CAMERA: Macro lens feel — shallow depth of field, tack-sharp center, edges slightly soft. Perfectly smooth movement at constant speeds. Zero shake. Clinical precision.
```

**Runway Gen-3 Prompt (Image-to-Video):**
> Nutze das Gemini-generierte Orden-Bild als Referenzframe.

```
SCROLL-CONTROLLED VIDEO — frame-by-frame playback, every frame must be individually clean, no flashes, constant lighting.

Transform this luxury medal image into a product video. The medal rotates slowly in 3D space against a warm cream white background (#FBF8F3), completing a full 360-degree rotation over 8 seconds at constant speed. Macro lens perspective with shallow depth of field. Soft golden reflections shift smoothly across the surface as it turns — no sudden glints or flashes. The crimson enamel changes subtly at each angle. Smooth, clinical camera orbit at constant angular velocity. Consistent warm lighting throughout.
```

---

## Konzept 5: "Narrenkappe im Rampenlicht" — Cinematic Object Hero

### Idee

Ein fotorealistischer 3D-Render einer opulenten Narrenkappe (Karnevals-Narrenmutze) — die Vereinskappe der KG Eechhoernche. Roter Samt, goldene Stickereien mit dem Eichhoernchen-Emblem, Gloekcklchen an den Zipfeln. Dramatic Spotlight auf schwarzem Hintergrund. Die Scroll-Animation: Die Kappe schwebt von oben herab, dreht sich, offenbart das gestickte Emblem, und man "fliegt" schliesslich durch die Oeffnung hindurch in die Website.

### Gemini Prompt

```
Create a stunning, photorealistic 3D render of a premium carnival jester's hat (Narrenkappe / Narrenmütze) for a German carnival society. This should look like a high-end fashion photography shot — the hat is the hero object.

HAT DESIGN & SHAPE:
- Traditional German Narrenkappe with THREE distinct pointed tips (Zipfel), each curving upward and slightly outward
- The hat is generously sized, as if made for an adult — not a toy, but a real ceremonial headpiece
- The base of the hat has a wide, structured brim/headband that sits on the head, about 4cm tall
- Each of the three points is approximately 30cm long, gradually tapering to a rounded tip

FABRIC & MATERIAL:
- Primary fabric: LUXURIOUS crimson red velvet — deep, rich, with visible velvet nap that changes direction and catches light differently across the surface. The velvet should look touchable, warm, and expensive
- The headband/brim: covered in gold brocade fabric with a subtle damask pattern woven in
- Interior (visible at the brim edge): cream-colored silk lining, just barely visible

EMBROIDERY & DECORATIONS:
- FRONT CENTER of the headband: A large, elaborate embroidered squirrel emblem (about 8cm wide)
  - The squirrel is embroidered in metallic gold thread (Goldstickerei / goldwork embroidery)
  - It sits in profile on a branch, with its bushy tail curling up
  - It wears a tiny embroidered jester's hat (meta!)
  - Surrounding the squirrel: embroidered oak leaves and acorns in gold and green silk thread
  - Below the squirrel: "KG EECHHOERNCHE" in embroidered gold capital letters, slightly arched
  - Above: "2002" in smaller gold numerals
  - The embroidery has visible texture — raised satin stitches, French knots for the acorns, long-and-short stitch for the fur

- ALONG EACH TIP: A spiral pattern of gold braid (Goldborte/Tresse) winding from base to tip
- AT EACH TIP: A polished golden bell (Schelle), approximately 2cm diameter, with a functional-looking clapper visible inside. The bells should gleam — highly reflective gold metal
- WHERE TIPS MEET THE BASE: Three golden buttons, each embossed with a tiny acorn

ADDITIONAL DETAILS:
- A few loose metallic gold threads catching the light at the embroidery edges (adding realism)
- The velvet shows subtle wear-marks at the brim edge (suggesting this is a real, cherished ceremonial piece, not brand new)
- One tip curves slightly differently than the others (handmade imperfection)

LIGHTING:
- DRAMATIC single spotlight from above-left, creating a theatrical/stage effect
- Volumetric light: visible golden light rays cutting through darkness, like a theater spotlight cone
- The velvet creates beautiful light-and-shadow interplay: the nap direction creates bright and dark zones
- The golden elements (bells, braid, embroidery) catch the spotlight intensely — they should GLOW
- Deep, rich shadows on the right side and underneath the hat
- A very subtle secondary fill light from the right (barely there, just to prevent pure black shadows)
- Tiny dust particles visible in the spotlight beam (adds atmosphere and scale)

BACKGROUND:
- Pure black void (#000000)
- No floor, no surface — the hat appears to float in space, lit only by the dramatic spotlight
- The volumetric light creates a subtle cone shape behind/around the hat

CAMERA & COMPOSITION:
- Camera angle: slightly below and to the left, looking UP at the hat (approximately 20 degrees below horizontal and 15 degrees to the left)
- This angle makes the hat look imposing and majestic
- The hat is slightly tilted (5 degrees to the right) for dynamic composition
- The embroidered squirrel on the headband is clearly visible and in sharp focus
- Depth of field: sharp on the embroidery and closest bell, the furthest tip is slightly out of focus
- The hat fills about 75% of the frame
- Aspect ratio: 16:9 landscape
- Resolution: 2560x1440 pixels minimum

MOOD & STYLE:
- Photorealistic 3D render — should be indistinguishable from a real photograph at first glance
- The mood is: theatrical, ceremonial, premium, slightly mysterious
- Think: "A museum exhibit spotlight on a priceless cultural artifact"
- Color palette: deep crimson, rich gold, warm black — regal and warm
- NO cartoon elements, NO flatness — this should feel REAL and TANGIBLE
```

### Scroll-Animation — "Cinematic Hat Drop"

**Gesamtlaenge:** 6 Scroll-Viewports (600vh sticky section)

**Phase 1 — Spotlight aus der Dunkelheit (0%-10% Scroll)**
- Komplett schwarzer Bildschirm
- Ein kegelfoermiger Lichtspot faehrt langsam von oben herunter (wie ein Theaterscheinwerfer, der angeht)
- Der Lichtkegel ist leer — noch kein Objekt sichtbar
- Subtile Staubpartikel im Lichtstrahl (CSS `@keyframes float`)
- Das erzeugt Spannung: "Was kommt jetzt?"

**Phase 2 — Die Kappe senkt sich herab (10%-30% Scroll)**
- Die Narrenkappe faehrt von oberhalb des Viewports langsam in den Spotlight hinein
- `translateY: -100vh → 0` (scroll-gesteuert, `easeOutExpo`)
- Waehrend sie herabsinkt, schaukelt sie leicht (`rotateZ: -3deg → 2deg → 0deg`, pendelt aus)
- Die Gloeckchen an den Zipfeln schwingen leicht mit (separate, verzoegerte Rotation der Gloeckchen-Bereiche)
- Bei 20%: Die Kappe ist mittig im Spotlight angekommen
- Die Volumetric-Light-Rays (CSS `conic-gradient` + `mix-blend-mode: screen`) werden staerker

**Phase 3 — Langsame Drehung + Emblem-Reveal (30%-50% Scroll)**
- Die Kappe dreht sich langsam: `rotateY: 0deg → 360deg` (eine volle Umdrehung ueber 20% Scroll)
- Bei 35% (ca. 90deg): Man sieht die Kappe von der Seite — die Zipfel und Gloeckchen im Profil
- Bei 42% (ca. 200deg): Die Rueckseite — hier koennte man alternativ ein "Est. 2002" Emblem sehen
- Bei 48% (ca. 340deg): Fast zurueck zur Front — das Eichhoernchen-Emblem kommt in Sicht
- Bei 50%: Genau frontal, die Drehung stoppt
- Waehrend der Drehung: `scale` geht leicht von 1.0 auf 1.2 (man kommt naeher)
- Goldener Glare wandert ueber die Oberflaeche mit der Drehung

**Phase 4 — Zoom auf das Emblem (50%-65% Scroll)**
- Starker Zoom: `scale: 1.2 → 3.5`, zentriert auf das gestickte Eichhoernchen-Emblem
- Man sieht die Stickerei in unglaublichem Detail — die einzelnen Goldstiche, die Textur
- Text erscheint neben dem Emblem: "KG Ett'schelder Eechhoernche" in goldener Schrift
- Darunter: "Karnevalsgesellschaft von 2002 e.V."
- Darunter: "...denn mir sinn all nur Minsche" in Kursiv-Serif

**Phase 5 — "Fly-Through" Transition (65%-85% Scroll)**
- Der Zoom verstaerkt sich weiter: `scale: 3.5 → 15`
- Man "fliegt" in die Kappe hinein — die rote Samtstruktur wird immer groesser
- Die Textur loest sich auf in ein warmes, rotes Leuchten
- Das Rot uebergeht nahtlos in die Primaerfarbe der Website
- Ab 75%: Das Rot faded zu Cremeweiss
- Der Website-Content beginnt von unten einzufahren
- Es fuehlt sich an wie ein Portal — man fliegt DURCH die Kappe hindurch in die Website

**Phase 6 — Website-Arrival (85%-100% Scroll)**
- Der Hintergrund ist nun Cremeweiss
- Der Header erscheint (mit dem kleinen Logo in der Ecke — Bezug zur Kappe!)
- Die Hero-Texte und CTA-Buttons positionieren sich
- Sticky-Section endet, normaler Scroll beginnt
- Optional: ganz kurzes "Gloeckchen-Klingeln" Sound-Effekt beim Uebergang

**Technische Umsetzung:**
- Fuer die 360°-Drehung: idealerweise eine Bildsequenz (36-72 Frames) → scroll-gesteuertes Frame-Switching (wie Apple)
- Alternativ: CSS `perspective` + `rotateY` auf einem flachen Bild (weniger realistisch, aber einfacher)
- Der "Fly-Through" ist ein reiner Scale + Opacity + Hintergrund-Farbwechsel-Trick
- Spotlight-Effekt: Ein `<div>` mit `radial-gradient(circle at 50% 30%, rgba(255,215,0,0.15), transparent 60%)`
- Staubpartikel: Framer Motion `AnimatePresence` mit 20-30 kleinen `motion.div`-Elementen
- Gloeckchen-Schwingen: `rotateZ` mit Spring-Physics (`framer-motion` spring)

### KI-Video-Animation — Prompt (Konzept 5)

**Empfohlenes Tool:** Veo 3 (beste Kamerabewegung und Depth-of-Field Kontrolle)
**Alternativ:** Kling 2.0 (gute Stoff-/Textilphysik)

**Video-Parameter:**
- Dauer: 10-12 Sekunden
- Aufloesung: 4K (3840x2160)
- FPS: 30 (300-360 Frames)
- Format: MP4 (H.264/H.265) — direkt als `<video>` einbindbar, KEIN GIF
- Stil: Photorealistic 3D, warm cream background mit Spotlight-Effekt

> **Hinweis Hintergrund:** Konzept 5 nutzt einen Spotlight-Effekt — der Hintergrund startet warm-dunkel (nicht schwarz, eher tiefes Warmbraun/Dunkelrot) und endet bei Cremeweiss. Der Spotlight ist subtil und gleichmaessig, nicht dramatisch wechselnd.

**Veo 3 Prompt:**

```
IMPORTANT TECHNICAL CONTEXT: This video will be played FRAME-BY-FRAME via scroll position on a website. Every frame must look clean and complete on its own. NO lens flares, NO sudden light flashes, NO motion blur, NO pulsing effects. Lighting changes must be extremely gradual (over many seconds, not sudden). All movements must be ultra-smooth and continuous. The user will "scrub" through this video by scrolling.

A reveal of a premium carnival jester's hat (Narrenkappe). Photorealistic quality — the hat looks like a real object. Rich crimson red velvet fabric, golden embroidery, three pointed tips each ending with a polished golden bell.

BACKGROUND: Warm dark tone (#3A2518, deep warm brown) that gradually transitions to warm cream white (#FBF8F3) by the end of the video. The transition is so slow and gradual it's barely noticeable frame-to-frame. A soft, warm, even light illuminates the scene from above-left — NOT a dramatic spotlight cone, but a gentle, consistent warm light source.

SEQUENCE:

0-2 seconds: The warm dark background is visible. The jester's hat enters the frame from the top, descending slowly and steadily downward. As it descends, it sways very gently (a subtle pendulum, ±3 degrees maximum). The golden bells at the tips move slightly with a smooth delay. The warm light catches the red velvet evenly. No sudden flashes from the bells — just smooth, soft golden reflections.

2-4 seconds: The hat arrives at CENTER FRAME and the gentle swaying smoothly dampens to stillness. The hat is now stationary, well-lit against the warm dark background. The red velvet texture is rich and beautiful under the even warm lighting.

4-7 seconds: The camera begins a SLOW 360-DEGREE ORBIT around the hat at a perfectly constant angular velocity. The hat is shown from every angle: the golden braid spiraling up each tip, the detailed golden embroidery on the headband showing a squirrel emblem with "KG EECHHOERNCHE" in gold thread, the cream silk lining at the brim. The warm light creates smooth, gradually shifting reflections on the gold surfaces — no sudden glints. The background is slowly, imperceptibly lightening.

7-9 seconds: The orbit completes back to the front. The camera smoothly pushes FORWARD, ZOOMING IN on the headband embroidery. The embroidered squirrel becomes large and detailed — individual gold threads, satin stitches, acorn French knots. The velvet texture goes into soft bokeh. Camera movement is steady and smooth.

9-11 seconds: The camera continues pushing smoothly FORWARD through the embroidery — the red velvet texture fills the frame gradually. The deep crimson color becomes all-encompassing.

11-12 seconds: The warm crimson smoothly and very gradually brightens to warm cream-white (#FBF8F3). The transition happens evenly over the full second — no sudden white flash. The final frame is clean, even cream-white.

LIGHTING: Consistent warm golden light from upper-left. The light intensity does NOT change throughout the video — only the background color slowly transitions. Soft shadows, no harsh specular highlights. The golden elements have warm, even metallic reflections that shift smoothly with camera angle but never flash or ping.
```

**Kling 2.0 Prompt (Image-to-Video):**
> Nutze das Gemini-generierte Narrenkappe-Bild als Mittelpunkt-Frame.

```
SCROLL-CONTROLLED VIDEO — frame-by-frame playback, every frame must be individually clean, no flashes, constant lighting.

Starting from this image of a carnival jester's hat: Animate the hat descending slowly from above with very gentle swaying that smoothly dampens. The golden bells move subtly — soft warm reflections only, no sharp glints. Then the camera orbits smoothly around the hat at constant speed showing all angles — the velvet texture shifts gradually, golden embroidery has even warm glow. Then zoom smoothly into the embroidered squirrel emblem on the headband in macro detail. Continue zooming through the fabric until the red velvet fills the screen and transitions gradually to warm cream-white (#FBF8F3). Warm background throughout (dark warm brown to cream). Consistent even lighting. 12 seconds.
```

---

## Empfehlung & Vergleich

| Kriterium | Konzept 1 Maskottchen | Konzept 2 Wappen | Konzept 3 Parallax | Konzept 4 Orden | Konzept 5 Kappe |
|-----------|:---:|:---:|:---:|:---:|:---:|
| WOW-Faktor | +++++ | ++++ | +++++ | ++++ | +++++ |
| Technische Komplexitaet | Mittel | Hoch | Sehr hoch | Mittel | Hoch |
| Mobile Performance | Gut | Gut | Kritisch | Sehr gut | Gut |
| Bilder benoetigt | 1-3 | 1 (oder 5-6 Ebenen) | 4-5 | 1 (oder 36 Frames) | 1 (oder 36-72 Frames) |
| Markenidentitaet | Sehr stark | Stark | Mittel | Stark | Stark |
| Apple-Vibe | +++++ | +++ | ++++ | +++++ | +++++ |
| Umsetzungszeit | 2-3 Tage | 3-4 Tage | 5-7 Tage | 2-3 Tage | 3-4 Tage |

### Meine Top-Empfehlung: Konzept 1 "Der Goldene Eechhoernche" ODER Konzept 5 "Narrenkappe"

**Konzept 1** ist der sicherste Gewinn: Ein einziges starkes Bild, die Scroll-Animation ist mit Framer Motion gut umsetzbar, und das Eichhoernchen-Maskottchen staerkt die Markenidentitaet enorm. Es ist das Konzept mit dem besten Verhaeltnis von Aufwand zu WOW.

**Konzept 5** hat den staerksten "Apple-Vibe" durch den Fly-Through-Effekt und erzeugt ein immersives Erlebnis. Der Aufwand ist etwas hoeher (idealerweise Bildsequenz fuer die Rotation), aber das Ergebnis waere spektakulaer.

**Konzept 3** (Parallax) ist das aufwendigste, aber auch das erzaehlerischste — perfekt, wenn die Website eine "Reise nach Ettelscheid" vermitteln soll.

---

## KI-Video vs. Code-Animation — Vergleich

| Kriterium | KI-Video (Veo 3 / Kling / Runway) | Code-Animation (Framer Motion / CSS) |
|-----------|:---:|:---:|
| **Visueller Realismus** | +++++ Photorealistisch, echte 3D-Rotation | +++ Auf Scale/Translate/Opacity beschraenkt |
| **Entwicklungszeit** | 1-2h (Prompt + Generierung + Einbindung) | 2-5 Tage (Framer Motion, Scroll-Logic, Testing) |
| **Dateigrösse** | 5-30 MB pro Video (muss optimiert werden) | ~0 KB (nur Code) |
| **Mobile Performance** | Mittel (Video-Dekodierung braucht GPU) | Gut (CSS-Transforms sind GPU-beschleunigt) |
| **Interaktivitaet** | Eingeschraenkt (nur Scroll→Time Mapping) | Voll (jede Eigenschaft scroll-steuerbar) |
| **Anpassbarkeit** | Gering (neues Video = neuer Prompt) | Hoch (Code-Aenderungen jederzeit) |
| **Text-Overlays** | Separat in HTML/CSS ueber dem Video | Nativ integriert |
| **Apple-Vibe** | +++++ Apple nutzt exakt diese Technik | ++++ Gut, aber weniger cinematisch |
| **Ladezeit (First Paint)** | Laenger (Video muss preloaden) | Sofort (Bild + CSS) |
| **SEO / Accessibility** | Neutral (Video = dekorativ, Text in HTML) | Neutral |

**Empfehlung:** Kombinierter Ansatz — KI-Video fuer die Hauptanimation (Rotation, Kamerafahrt, Reveal) und Code (Framer Motion) fuer die Text-Overlays, CTAs und den Uebergang zur Website.

---

## Scroll-Video-Integration — Technisches Konzept

So bindet Apple (und andere Premium-Sites) Videos scroll-gesteuert ein:

### Prinzip

Das Video wird **nicht normal abgespielt**, sondern die aktuelle Frame-Position (`currentTime`) wird an den Scroll-Fortschritt (`scrollYProgress`) gebunden. Der User "scrollt" durch das Video — wie ein Daumenkino.

### Implementierung (Next.js + Framer Motion)

```tsx
'use client'

import { useRef, useEffect } from 'react'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Video-Zeit an Scroll-Progress binden
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const video = videoRef.current
    if (!video || !video.duration) return
    video.currentTime = progress * video.duration
  })

  return (
    // Aeusserer Container definiert die Scroll-Laenge
    <div ref={containerRef} style={{ height: '500vh' }}>
      {/* Sticky-Container haelt das Video im Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/hero-animation.mp4"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        {/* Text-Overlays als separate HTML-Ebene */}
        {/* Hier koennen Framer Motion Elemente ueber dem Video liegen */}
      </div>
    </div>
  )
}
```

### Video-Optimierung fuer Scroll-Steuerung

**Wichtig:** Normale MP4-Videos sind nicht fuer frameweises Seeking optimiert. Apple nutzt dafuer spezielle Techniken:

1. **Kurze Keyframe-Intervalle:** Das Video muss mit sehr haeufigen Keyframes encodiert werden (jeder Frame = Keyframe, oder alle 1-2 Frames). Sonst "springt" das Seeking.

   ```bash
   # FFmpeg: Video mit Keyframe auf jedem Frame encodieren
   ffmpeg -i input.mp4 -c:v libx264 -x264-params keyint=1:scenecut=0 -crf 18 -preset slow -an output-scroll.mp4
   ```

2. **Alternativ: Bildsequenz statt Video** — Einzelbilder (WebP/AVIF) laden und per Canvas rendern:

   ```bash
   # Video in Einzelframes exportieren
   ffmpeg -i input.mp4 -vf "fps=30,scale=1920:1080" frames/frame_%04d.webp
   ```

   Dann per `<canvas>` und `drawImage()` den passenden Frame zum Scroll-Progress zeichnen.

3. **WebCodecs API (modern):** Fuer maximale Performance kann die WebCodecs API genutzt werden, um Frames direkt zu dekodieren — das ist was Apple intern macht.

### Performance-Tipps

- **Preload:** `<video preload="auto">` oder `<link rel="preload" as="video">`
- **Aufloesung:** 1080p reicht fuer die meisten Bildschirme, 4K nur fuer Retina-Displays
- **Kompression:** CRF 18-22 ist ein guter Kompromiss aus Qualitaet und Dateigroesse
- **Kein Audio:** `muted` und `-an` beim Encoding — spart Dateigroesse
- **Mobile:** Auf Mobilgeraeten ggf. ein niedrigerer-aufgeloestes Video laden (`<source media="(max-width: 768px)">`)
- **Fallback:** Fuer langsame Verbindungen ein statisches Bild als Fallback bereitstellen

### Ordnerstruktur fuer Video-Assets

```
public/
  videos/
    hero-animation.mp4          # Vollversion (1080p, scroll-optimiert)
    hero-animation-4k.mp4       # 4K Version (optional, fuer Retina)
    hero-animation-mobile.mp4   # Mobile Version (720p)
  images/
    hero/
      3d/
        hero-fallback.webp      # Statisches Fallback-Bild
        hero-poster.webp        # Poster-Frame fuer Video-Element
```

---

## KI-Video-Tool Vergleich

| Tool | Staerke | Max. Dauer | Max. Aufloesung | Image-to-Video | Preis (ca.) |
|------|---------|:---:|:---:|:---:|---:|
| **Veo 3** (Google) | Beste 3D-Konsistenz, Kamerakontrolle, Szenen-Kohaerenz | 8s (erweiterbar) | 4K | Ja | $0.50-1/Video |
| **Kling 2.0** (Kuaishou) | Gute Objekt-Transformation, Stoff-Physik | 10s | 1080p | Ja (stark!) | $0.30-0.50/Video |
| **Runway Gen-3 Alpha** | Beste Macro-Qualitaet, Produktfotografie-Stil | 10s | 4K | Ja | $0.50-2/Video |
| **Pika 2.0** | Schnell, guenstig, gut fuer einfachere Animationen | 4s | 1080p | Ja | $0.10-0.20/Video |
| **Hailuo (MiniMax)** | Gute Allround-Qualitaet, realistisch | 6s | 1080p | Ja | $0.20-0.40/Video |

**Empfehlung pro Konzept:**

- Konzept 1 (Maskottchen): **Veo 3** — braucht konsistentes 3D-Character ueber die gesamte Rotation
- Konzept 2 (Wappen): **Kling 2.0** — stark bei Transformationen (Muenze → Wappen)
- Konzept 3 (Parallax): **Veo 3** — beste Szenen-Kohaerenz fuer die Kamerafahrt durch das Dorf
- Konzept 4 (Orden): **Runway Gen-3** — Macro-Produktfotografie ist deren Staerke
- Konzept 5 (Kappe): **Veo 3** — komplexe Kamerabewegung + Stoff-Rendering + Fly-Through

---

## Naechste Schritte

1. Konzept auswaehlen (oder 2 zum Testen)
2. Gemini-Prompts ausfuehren und Bilder generieren
3. **Bild als Startframe** in das gewaehlte Video-Tool (Veo 3 / Kling / Runway) laden
4. **Video-Prompt** ausfuehren und Animation generieren
5. Video mit FFmpeg fuer Scroll-Steuerung optimieren (Keyframes auf jeden Frame)
6. Video in `public/videos/` ablegen, Fallback-Bild in `public/images/hero/3d/`
7. Scroll-Video-Komponente implementieren (`src/components/sections/hero-3d-video.tsx`)
8. Text-Overlays und CTAs als Framer Motion Layer ueber dem Video
9. A/B-Test: Bestehenden Hero vs. neuen Video-Hero vergleichen
