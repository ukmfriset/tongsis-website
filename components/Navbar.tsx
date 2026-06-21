"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/open-recruitment", label: "Open Recruitment" },
    { href: "/diklat", label: "Diklat TONGSIS" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <div
        className={`mx-auto max-w-5xl border bg-white/70 backdrop-blur-2xl transition-all duration-500 ${
          isOpen ? "rounded-3xl" : "rounded-full"
        } ${
          scrolled
            ? "border-violet-100 shadow-xl shadow-violet-500/10"
            : "border-transparent shadow-none"
        }`}
      >
        <div className="hidden items-center justify-between px-8 py-3 md:flex">
          <Link href="/" className="font-extrabold tracking-tighter text-[#0B1026] text-lg hover:scale-105 transition-transform">
            TONGSIS <span className="text-violet-600">2026</span>
          </Link>

          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-violet-600 ${
                  pathname === link.href
                    ? "text-violet-600 font-bold scale-105"
                    : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/open-recruitment"
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105"
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-6 py-3">
            <Link href="/" className="font-extrabold tracking-tighter text-[#0B1026] text-lg">
              TONGSIS 2026
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-6 bg-[#0B1026] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-[#0B1026] ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-[#0B1026] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-gray-100 px-6 py-6 animate-in slide-in-from-top-4">
              <nav className="flex flex-col gap-4 text-center">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium ${
                      pathname === link.href ? "text-violet-600 font-bold" : "text-gray-500"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2">
                  <Link
                    href="/open-recruitment"
                    className="block rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-3 text-center text-sm font-bold text-white shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}