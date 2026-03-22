"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navigationItems } from "@/lib/data/navigation";
import type { NavItem } from "@/lib/data/navigation";

function DesktopNavItem({ item }: { readonly item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-48 rounded-lg border bg-card p-1.5 shadow-lg">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  item,
  onClose,
}: {
  readonly item: NavItem;
  readonly onClose: () => void;
}) {
  return (
    <div>
      <Link
        href={item.href}
        className="block px-3 py-3 text-base font-medium text-foreground transition-colors hover:text-primary"
        onClick={onClose}
      >
        {item.label}
      </Link>
      {item.children && (
        <div className="ml-4 border-l-2 border-primary/20 pl-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              onClick={onClose}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-lg font-bold">🐿️</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-foreground">
              KG Ett&apos;schelder
            </p>
            <p className="text-xs font-medium text-primary">Eechhörnche</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <DesktopNavItem key={item.href} item={item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden">
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Menü</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="text-primary">Navigation</SheetTitle>
            <nav className="mt-6 flex flex-col gap-1">
              {navigationItems.map((item) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
