"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { client } from "../src/sanity/client"; // Pastikan path client sanity kamu benar

// Interface data Sanity
interface NavbarData {
  tahunPelaksanaan?: string;
  linkOprec?: string;
  linkDiklat?: string;
}

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
  const [isOpen, setIsOpen] = useState(false);
  
  // State untuk menampung data dari Sanity secara dinamis
  const [sanityData, setSanityData] = useState<NavbarData | null>(null);

  // Ambil data Sanity saat Navbar di-render pertama kali
  useEffect(() => {
    async function fetchNavData() {
      try {
        const query = `*[_type == "siteSettings"][0]{ tahunPelaksanaan, linkOprec, linkDiklat }`;
        const data = await client.fetch(query);
        if (data) setSanityData(data);
      } catch (error) {
        console.error("Gagal mengambil data navbar dari Sanity:", error);
      }
    }
    fetchNavData();
  }, []);

  const isOprec = pathname === "/open-recruitment";
  const isDiklat = pathname === "/diklat";

  const navLinks = isOprec ? oprecAnchors : isDiklat ? diklatAnchors : pageLinks;

  // SYSTEM FALLBACK: Pakai link dari Sanity, kalau kosong balik ke hash default bawaanmu
  const ctaHref = isOprec
    ? sanityData?.linkOprec || "#daftar"
    : isDiklat
    ? sanityData?.linkDiklat || "#daftar-tongsis"
    : "#pilih";

  const ctaLabel = isOprec
    ? "Daftar Sekarang"
    : isDiklat
    ? "Daftar TONGSIS"
    : "Pilih Jalurmu ↓";

  // SYSTEM FALLBACK: Pakai tahun dari Sanity, kalau kosong balik ke teks default "2026"
  const tahunTampil = sanityData?.tahunPelaksanaan || "2026";
  const isExternalCta = ctaHref.startsWith("http");

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo - Otomatis berubah kalau isi di Sanity diganti */}
        <Link href="/" className="flex items-center gap-1 select-none group" onClick={() => setIsOpen(false)}>
          <span className="font-black text-lg text-[#0D0D0D] tracking-tight">
            TONGSIS
          </span>
          <span className="font-black text-lg text-[#F27405] tracking-tight group-hover:text-[#A6691F] transition-colors duration-300">
            {tahunTampil}
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isPageActive = !item.href.startsWith("#") && pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold tracking-wide transition-colors duration-200 relative py-2
                  ${isPageActive ? "text-[#F27405]" : "text-gray-500 hover:text-[#0D0D0D]"}`}
              >
                {item.name}
                {isPageActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F27405] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            href={ctaHref}
            target={isExternalCta ? "_blank" : undefined}
            rel={isExternalCta ? "noopener noreferrer" : undefined}
            className="rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] px-6 py-2.5 text-sm font-extrabold text-white transition-all hover:scale-105 shadow-md shadow-[#F27405]/10 hover:shadow-[#F27405]/20"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle menu"
          className="flex md:hidden flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 focus:outline-none"
        >
          <span className={`h-0.5 w-6 rounded-full bg-[#0D0D0D] transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 rounded-full bg-[#0D0D0D] transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded-full bg-[#0D0D0D] transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU PANEL */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((item) => {
            const isPageActive = !item.href.startsWith("#") && pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-extrabold tracking-wide py-2 border-b border-gray-50 transition-colors
                  ${isPageActive ? "text-[#F27405]" : "text-gray-600 hover:text-[#0D0D0D]"}`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* MOBILE CTA BUTTON */}
          <div className="pt-2">
            <Link
              href={ctaHref}
              target={isExternalCta ? "_blank" : undefined}
              rel={isExternalCta ? "noopener noreferrer" : undefined}
              onClick={() => setIsOpen(false)}
              className="block text-center rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] py-3 text-sm font-extrabold text-white shadow-md shadow-[#F27405]/10"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}