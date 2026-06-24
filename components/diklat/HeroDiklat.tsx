"use client";

import Link from "next/link";

export default function HeroDiklat() {
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

        {/* Badge Status Minimalis (Outline-Only) */}
        <div className="mb-4 md:mb-2 inline-flex items-center gap-2 rounded-full border border-[#F27405]/20 bg-transparent px-5 md:px-6 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F27405] animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-[#F27405] uppercase">
            Pendaftaran TONGSIS 2026 Dibuka
          </span>
        </div>

        {/* Heading — PERBAIKAN: Menghapus properti inline-block yang duplikat */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-[#0D0D0D] leading-[1.15] md:leading-[1.1] tracking-tighter max-w-3xl px-2 md:px-0">
          Selamat, Kamu Lolos!🎉<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27405] to-[#A6691F] pb-1 block mt-2 transition-transform duration-500 ease-out hover:scale-105 cursor-pointer">
            Saatnya Melangkah
          </span> ke Tahap Berikutnya
        </h1>

        {/* Description */}
        <p className="max-w-xl text-sm md:text-lg leading-relaxed font-sans font-medium text-gray-600 px-2 md:px-0">
          TONGSIS 2026 menjadi awal perjalananmu bersama UKM-F Riset melalui berbagai pengalaman belajar, pengembangan diri, dan kebersamaan.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
          <Link
            href="#"
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