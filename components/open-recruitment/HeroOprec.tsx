"use client";

import Link from "next/link";

export default function HeroOprec() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-10 pb-10 text-center overflow-hidden bg-[#F8F9FC]">
      
      {/* Background Decorative Blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl mix-blend-multiply"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl mix-blend-multiply"></div>

      {/* Konten Utama - flex-1 memastikan konten di tengah secara vertikal */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full max-w-4xl">

        {/* Badge Pendaftaran */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/60 backdrop-blur-md px-4 py-1.5 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="text-xs font-bold text-violet-700 uppercase tracking-widest">
            Pendaftaran Dibuka 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0B1026] leading-tight tracking-tighter">
          Cari Tempat untuk Bertumbuh dan Berkarya?
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 transition-transform duration-500 ease-out hover:scale-105 cursor-pointer">
            UKMF RISET FISIB UTM
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-gray-600 max-w-xl text-base md:text-lg leading-relaxed font-medium">
          Yuk jadi bagian dari keluarga besar UKMF RISET FISIB UTM! 
          Tempat di mana rasa ingin tahu bertemu dengan kolaborasi nyata.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/daftar"
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105 hover:shadow-violet-500/40"
          >
            Daftar Sekarang
          </Link>
          <Link
            href="#tentang"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-gray-700 border border-gray-200 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-3 text-gray-400">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll untuk detail</span>
          <div className="h-10 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}