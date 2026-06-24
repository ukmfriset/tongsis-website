"use client";

import Link from "next/link";

export default function HeroOprec() {
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

        {/* Badge Pendaftaran — Aman, tidak akan kepotong setengah lagi */}
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#F27405]/10 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27405] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27405]"></span>
          </span>
          <span className="text-xs font-bold text-[#F27405] uppercase tracking-widest">
            Pendaftaran Dibuka 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-[#0D0D0D] leading-[1.15] md:leading-tight tracking-tighter max-w-3xl px-2 md:px-0">
          Punya Rasa Ingin Tahu Lebih? Mulai Dari Sini. <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27405] via-[#e06600] to-[#A6691F] pb-1 block mt-2 md:mt-4 transition-transform duration-500 ease-out hover:scale-105 cursor-pointer inline-block">
            UKM-F RISET FISIB UTM
          </span>
        </h1>

        {/* Subtitle/Description */}
        <p className="max-w-xl text-sm md:text-lg leading-relaxed font-sans font-medium text-gray-600 px-2 md:px-0">
           Buat kamu yang suka bertanya, suka mencari tahu, dan percaya kalau ide kecil bisa berkembang jadi karya besar.
           UKM-F Riset FISIB UTM hadir untuk mahasiswa yang ingin belajar riset, menulis, berdiskusi, dan menciptakan karya yang punya dampak.
           Bukan cuma tentang hasil akhir, tapi tentang proses berkembang bersama orang-orang yang punya semangat yang sama.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
          <Link
            href="/daftar"
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