"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Anchor links yang muncul saat di halaman /open-recruitment
const oprecAnchors = [
  { name: "Tentang", href: "#tentang" },
  { name: "Persyaratan", href: "#persyaratan" },
  { name: "Timeline", href: "#timeline" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Prestasi", href: "#prestasi" },
];

// Anchor links yang muncul saat di halaman /diklat
const diklatAnchors = [
  { name: "Tentang", href: "#tentang" },
  { name: "Timeline", href: "#timeline" },
  { name: "Benefit", href: "#benefit" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Info Penting", href: "#info" },
];

// Link halaman utama (muncul di halaman selain oprec/diklat)
const pageLinks = [
  { name: "Open Recruitment", href: "/open-recruitment" },
  { name: "Diklat TONGSIS", href: "/diklat" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isOprec = pathname === "/open-recruitment";
  const isDiklat = pathname === "/diklat";

  // Tentukan link tengah berdasarkan halaman aktif
  const navLinks = isOprec
    ? oprecAnchors
    : isDiklat
    ? diklatAnchors
    : pageLinks;

  // CTA button target berdasarkan halaman
  const ctaHref = isOprec
    ? "#daftar"
    : isDiklat
    ? "#daftar-tongsis"
    : "#pilih";

  const ctaLabel = isOprec
    ? "Daftar Sekarang"
    : isDiklat
    ? "Daftar TONGSIS"
    : "Pilih Jalurmu ↓";

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 select-none group">
          <span className="font-black text-lg text-[#0D0D0D] tracking-tight">
            TONGSIS
          </span>
          <span className="font-black text-lg text-[#F27405] tracking-tight group-hover:text-[#A6691F] transition-colors duration-300">
            2026
          </span>
        </Link>

        {/* Nav Links — anchor atau halaman, tergantung konteks */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isPageActive =
              !item.href.startsWith("#") && pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold tracking-wide transition-colors duration-200 relative py-2
                  ${
                    isPageActive
                      ? "text-[#F27405]"
                      : "text-gray-500 hover:text-[#0D0D0D]"
                  }`}
              >
                {item.name}
                {isPageActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F27405] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href={ctaHref}
          className="rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] px-6 py-2.5 text-sm font-extrabold text-white transition-all hover:scale-105 shadow-md shadow-[#F27405]/10 hover:shadow-[#F27405]/20"
        >
          {ctaLabel}
        </Link>

      </div>
    </nav>
  );
}