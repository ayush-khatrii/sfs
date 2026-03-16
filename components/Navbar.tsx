"use client"
import { useState } from "react"
import { MenuIcon, SearchIcon, XIcon } from "lucide-react"
import Link from "next/link"

type NavigationItem = {
  title: string
  href: string
}

const navigationData: NavigationItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-[78px] bg-background border-b border-border/50 shadow">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">

        {/* ── Left nav (desktop) ── */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[13.5px] font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-[13.5px] font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
        </nav>

        {/* ── Center logo (desktop) ── */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <img
            src="/sfs-logo-png.png"
            alt="Shivaantra Freight Solutions"
            className="h-36 w-auto object-contain"
          />
        </Link>

        {/* ── Mobile logo ── */}
        <Link href="/" className="md:hidden">
          <img
            src="/sfs-logo-png.png"
            alt="Shivaantra Freight Solutions"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* ── Right nav (desktop) ── */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-8">
            <Link href="/about" className="text-[13.5px] font-medium text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-[13.5px] font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search button */}
          <button
            aria-label="Search"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <SearchIcon className="w-4 h-4" />
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="text-[13px] font-semibold px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-80 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>

        {/* ── Mobile actions ── */}
        <div className="flex md:hidden items-center gap-2">
          <button
            aria-label="Search"
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
          >
            <SearchIcon className="w-4 h-4" />
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
          >
            {mobileOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-0.5">
            {navigationData.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block text-center text-sm font-semibold px-3 py-2.5 rounded-lg bg-foreground text-background"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar