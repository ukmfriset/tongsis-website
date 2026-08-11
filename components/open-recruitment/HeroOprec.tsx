"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/src/sanity/client"; // Jalur absolut root alias andalanmu

interface HeroOprecData {
  tahunPelaksanaan?: string;
  linkOprec?: string;
}

export default function HeroOprec() {
  const [sanityData, setSanityData] = useState<HeroOprecData | null>(null);

  // Ambil data dari pusat kendali (siteSettings)
  useEffect(() => {
    async function fetchHeroData() {
      try {
        const query = `*[_type == "siteSettings" && _id == "siteSettings"][0]{ tahunPelaksanaan, linkOprec }`;
        const data = await client.fetch(query);
        if (data) setSanityData(data);
      } catch (error) {
        console.error("Gagal mengambil data Hero Oprec dari Sanity:", error);
      }
    }
    fetchHeroData();
  }, []);

  // SYSTEM FALLBACK: Jika di Sanity masih kosong, otomatis pakai data default bawaanmu
  const tahunTampil = sanityData?.tahunPelaksanaan || "2026";
  const ctaHref = sanityData?.linkOprec || "/daftar";
  const isExternalCta = ctaHref.startsWith("http");

  return (
    /* JURUS PAMUNGKAS KHUSUS HERO OPREC:
      1. Mengubah pt-40 menjadi pt-48 khusus di layar mobile. Karena teks judul Oprec ini paling panjang (3 baris), 
      bemper atasnya wajib kita tebalkan jadi pt-48 agar badge-nya lolos total ke bawah navbar.
      2. md:pt-44 tetap aman dipertahankan untuk tampilan desktop/laptop agar tidak jomplang. */
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-48 md:pt-44 pb-16 px-4 text-center overflow-hidden bg-[#F2F2F2] -mt-20">
      
      {/* ─── AMBIENT BLOB EFFECT LAYER ─── */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full bg-[#F27405]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#A6691F]/8 blur-[100px]" />

      {/* ─── KONTEN UTAMA ─── */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto space-y-4 md:space-y-6">

        {/* Badge Pendaftaran — Tahun dinamis dari Sanity */}
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#F27405]/10 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27405] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27405]"></span>
          </span>
          <span className="text-xs font-bold text-[#F27405] uppercase tracking-widest">
            Pendaftaran Dibuka {tahunTampil}
          </span>
        </div>

        {/* Heading — FIX SELEKTIF: TULISAN HITAM TETAP DIAM, HANYA GRADASI YANG MEMBESAR TANPA BERUBAH FONT */}
        <h1 className="font-heading text-4xl md:text-7xl font-extrabold text-[#0D0D0D] leading-[1.15] md:leading-tight tracking-tighter max-w-3xl px-2 md:px-0">
          Rasa Ingin Tahu adalah <br className="hidden md:inline" />
          <span className="inline-block transition-transform duration-500 ease-out hover:scale-105 cursor-pointer mt-2 md:mt-4">
            <span className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#F27405] via-[#e06600] to-[#A6691F] pb-1 block">
              Awal Segalanya
            </span>
          </span>
        </h1>

        {/* Subtitle/Description */}
        <p className="max-w-xl text-sm md:text-lg leading-relaxed font-sans font-medium text-gray-600 px-2 md:px-0">
           Buat kamu yang suka bertanya dan mencari tahu. UKM-F RISET FISIB UTM adalah ruang untuk belajar riset, berdiskusi, dan berkarya bersama. Tempat ide berkembang, kemampuan bertumbuh, dan karya memberi dampak.
         </p>

        {/* Action Buttons — Link dinamis mengikuti pusat kendali Sanity */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
          <Link
            href={ctaHref}
            target={isExternalCta ? "_blank" : undefined}
            rel={isExternalCta ? "noopener noreferrer" : undefined}
            className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] px-8 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#F27405]/20 transition-all hover:scale-105 hover:shadow-[#F27405]/30"
          >
            Daftar Sekarang →
          </Link>
          <Link
            href="#tentang"
            className="w-full sm:w-auto text-center rounded-full bg-white px-8 py-3.5 text-sm font-extrabold text-[#0D0D0D]/80 border border-gray-200 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Scroll dulu, kenalan lebih dekat ↓
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-4 flex flex-col items-center gap-3 text-gray-400 hidden sm:flex">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Scroll untuk detail</span>
          <div className="h-10 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}