"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/src/sanity/client"; // Jalur absolut root alias andalanmu

interface HeroDiklatData {
  tahunPelaksanaan?: string;
  linkDiklat?: string;
}

export default function HeroDiklat() {
  const [sanityData, setSanityData] = useState<HeroDiklatData | null>(null);

  // Ambil data dari pusat kendali global (siteSettings)
  useEffect(() => {
    async function fetchHeroData() {
      try {
        const query = `*[_type == "siteSettings" && _id == "siteSettings"][0]{ tahunPelaksanaan, linkDiklat }`;
        const data = await client.fetch(query);
        if (data) setSanityData(data);
      } catch (error) {
        console.error("Gagal mengambil data Hero Diklat dari Sanity:", error);
      }
    }
    fetchHeroData();
  }, []);

  // SYSTEM FALLBACK: Jika di Sanity masih kosong, otomatis pakai data default bawaanmu
  const tahunTampil = sanityData?.tahunPelaksanaan || "2026";
  const ctaHref = sanityData?.linkDiklat || "#";
  const isExternalCta = ctaHref.startsWith("http");

  return (
    /* SINKRONISASI ELEMEN DIKLAT MOBILE:
       - pt-40 di HP memastikan judul dan badge aman dari tabrakan header putih.
       - md:pt-[24vh] tetap presisi mengunci tampilan tengah saat di laptop. */
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-40 md:pt-[24vh] pb-16 md:pb-[16vh] px-4 text-center overflow-hidden bg-[#F2F2F2] -mt-20">
      
      {/* ─── AMBIENT BLOB EFFECT LAYER (POSISI TERKUNCI) ─── */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full bg-[#F27405]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#A6691F]/8 blur-[100px]" />

      {/* ─── KONTEN UTAMA ─── */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-4 md:space-y-6">

        {/* Badge Status Minimalis (Outline-Only) — Tahun dinamis dari Sanity */}
        <div className="mb-4 md:mb-2 inline-flex items-center gap-2 rounded-full border border-[#F27405]/20 bg-transparent px-5 md:px-6 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F27405] animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-[#F27405] uppercase">
            Pendaftaran TONGSIS {tahunTampil} Dibuka
          </span>
        </div>

        {/* Heading — FIX SELEKTIF: TULISAN HITAM TETAP DIAM, HANYA GRADASI YANG MEMBESAR TANPA BERUBAH FONT */}
        <h1 className="font-heading text-4xl md:text-7xl font-extrabold text-[#0D0D0D] leading-[1.15] md:leading-[1.1] tracking-tighter max-w-3xl px-2 md:px-0">
          Selamat, Kamu Lolos!🎉<br />
          <span className="inline-block transition-transform duration-500 ease-out hover:scale-105 cursor-pointer mt-2">
            <span className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#F27405] to-[#A6691F] pb-1 block">
              Perjalananmu Baru Saja Dimulai
            </span>
          </span>
        </h1>

        {/* Description — Tahun dinamis dari Sanity */}
        <p className="max-w-xl text-sm md:text-lg leading-relaxed font-sans font-medium text-gray-600 px-2 md:px-0">
          TONGSIS {tahunTampil} menjadi awal perjalananmu bersama UKM-F Riset melalui berbagai pengalaman belajar, pengembangan diri, dan kebersamaan.
        </p>

        {/* Action Buttons — Link pendaftaran dikontrol 1 pintu dari Sanity */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
          <Link
            href={ctaHref}
            target={isExternalCta ? "_blank" : undefined}
            rel={isExternalCta ? "noopener noreferrer" : undefined}
            className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] px-10 py-3.5 md:py-4 text-sm font-extrabold text-white transition-all hover:scale-105 shadow-xl shadow-[#F27405]/20"
          >
            Gas, Daftar TONGSIS →
          </Link>
          <Link
            href="#tongsis"
            className="w-full sm:w-auto text-center rounded-full border border-gray-200 bg-white px-10 py-3.5 md:py-4 text-sm font-extrabold text-[#0D0D0D]/80 transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Scroll dulu, baca dulu ↓
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-6 flex flex-col items-center gap-2 text-gray-400 hidden sm:flex">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Scroll ke bawah</span>
          <div className="h-10 w-0.5 bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}