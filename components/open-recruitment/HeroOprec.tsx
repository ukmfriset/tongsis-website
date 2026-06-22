"use client";

import Link from "next/link";

export default function HeroOprec() {
  return (
    /* PERBAIKAN: Mengubah pt-36 menjadi pt-44 agar dorongan atas lebih kuat, 
       serta memastikan justify-start aktif mendominasi */
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-44 pb-16 px-4 text-center overflow-hidden bg-[#F2F2F2] -mt-20">
      
      {/* ─── AMBIENT BLOB EFFECT LAYER ─── */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full bg-[#F27405]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#A6691F]/8 blur-[100px]" />

      {/* ─── KONTEN UTAMA ─── */}
      {/* PERBAIKAN: Menghapus properti 'justify-center' dan 'flex-1' dari div pembungkus ini 
          supaya konten teks tidak dipaksa membagi ruang ke atas secara otomatis */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">

        {/* Badge Pendaftaran - Sekarang dijamin turun penuh dan terlihat utuh */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F27405]/10 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27405] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27405]"></span>
          </span>
          <span className="text-xs font-bold text-[#F27405] uppercase tracking-widest">
            Pendaftaran Dibuka 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0D0D0D] leading-tight tracking-tighter max-w-3xl">
          Energimu Kebanyakan? Saluriin di Sini
          <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F27405] via-[#e06600] to-[#A6691F] transition-transform duration-500 ease-out hover:scale-105 cursor-pointer inline-block">
            UKM-F RISET FISIB UTM
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-gray-600 max-w-xl text-base md:text-lg leading-relaxed font-medium">
           UKM-F Riset FISIB UTM buat kamu yang otaknya nggak bisa diem — yang suka nanya "kenapa?" lebih dari sekali, suka mikir kritis, dan pengin karyanya dilihat dunia (bukan cuma dosen).
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/daftar"
            className="rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] px-8 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#F27405]/20 transition-all hover:scale-105 hover:shadow-[#F27405]/30"
          >
            Gas, Daftar Sekarang →
          </Link>
          <Link
            href="#tentang"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-extrabold text-[#0D0D0D]/80 border border-gray-200 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Scroll dulu, kenalan dulu ↓
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-3 text-gray-400">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Scroll untuk detail</span>
          <div className="h-10 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}