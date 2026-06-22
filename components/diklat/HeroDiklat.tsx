"use client";

import Link from "next/link";

export default function HeroDiklat() {
  return (
    /* PERBAIKAN SINKRONISASI TAILWIND v4:
       1. Menggunakan justify-start (rata atas) dikombinasikan dengan padding berbasis viewport height (vh).
       2. pt-[24vh] memaksa badge & judul turun sejauh 24% dari tinggi layar, dijamin aman di bawah sticky navbar.
       3. pb-[16vh] memotong sisa ruang kosong di bawah sebesar 16% agar layout halaman mengalir simetris. */
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-[24vh] pb-[16vh] px-4 text-center overflow-hidden bg-[#F2F2F2] -mt-20">
      
      {/* ─── AMBIENT BLOB EFFECT LAYER (POSISI TERKUNCI) ─── */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full bg-[#F27405]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#A6691F]/8 blur-[100px]" />

      {/* ─── KONTEN UTAMA ─── */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">

        {/* Badge Status Minimalis (Outline-Only) */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F27405]/20 bg-transparent px-6 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F27405] animate-pulse"></span>
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#F27405] uppercase">
            Pendaftaran TONGSIS 2026 Dibuka
          </span>
        </div>

        {/* Heading dengan Gradasi Orange ke Cokelat Emas */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0D0D0D] leading-[1.1] tracking-tighter max-w-3xl">
          Selamat, Kamu Lolos!🎉 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27405] to-[#A6691F] pb-1 block mt-2 transition-transform duration-500 ease-out hover:scale-105 cursor-pointer inline-block">
            Satu Langkah Lagi
          </span> Bagian Keluarga Kita
        </h1>

        {/* Description */}
        <p className="mt-8 text-gray-600 max-w-xl text-lg leading-relaxed font-medium">
          Seleksinya udah kelar, dan kamu ada di sini. Sekarang saatnya ikut TONGSIS 2026 — Diklat Anggota Baru UKM-F Riset FISIB UTM yang bakal jadi awal dari perjalanan risetmu yang sesungguhnya.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] px-10 py-4 text-sm font-extrabold text-white transition-all hover:scale-105 shadow-xl shadow-[#F27405]/20"
          >
            Gas, Daftar TONGSIS →
          </Link>
          <Link
            href="#tongsis"
            className="rounded-full border border-gray-200 bg-white px-10 py-4 text-sm font-extrabold text-[#0D0D0D]/80 transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Scroll dulu, baca dulu ↓
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Scroll ke bawah</span>
          <div className="h-10 w-0.5 bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}