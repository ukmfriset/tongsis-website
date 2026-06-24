"use client";

export default function HeroHome() {
  return (
    /* PERBAIKAN TOTAL SINKRONISASI MOBILE: 
       - Di HP (default): Diubah dari pt-32 menjadi pt-40 (160px) agar badge teratas lolos sempurna dari jeratan navbar sticky.
       - Di Laptop (md:): Kembali menggunakan pt-48 yang kokoh untuk tampilan desktop. */
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-40 md:pt-48 pb-16 md:pb-24 px-4 text-center overflow-hidden bg-[#F2F2F2] -mt-20">
      
      {/* ─── AMBIENT BLOB EFFECT LAYER ─── */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full bg-[#F27405]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#A6691F]/8 blur-[100px]" />

      {/* ─── HERO CONTENT LAYER ─── */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-4 md:space-y-6">

        {/* 1. Badge Teratas — Aman, tidak akan kepotong navbar lagi */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F]"></span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            UKM-F RISET FISIB UTM
          </span>
        </div>

        {/* 2. Heading Hitam Sambutan */}
        <h2 className="text-xl md:text-3xl font-extrabold text-[#0D0D0D] tracking-tight pt-2 animate-fade-in">
          Selamat Datang, Calon Anggota Baru 👋
        </h2>

        {/* 3. Title Utama Gradasi — SOLUSI ISOLASI LAYER DENGAN FONT-HEADING */}
        <div className="pt-2 w-full">
          <div className="inline-block transition-transform duration-500 ease-out hover:scale-105 cursor-pointer">
            <h1 className="font-heading text-5xl md:text-8xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F27405] via-[#e06600] to-[#A6691F]">
              TONGSIS 2026
            </h1>
          </div>
          
          {/* Subtitle Arti Akronim */}
          <p className="mt-4 text-[10px] md:text-sm text-gray-400 max-w-md md:max-w-full mx-auto font-bold uppercase tracking-wide whitespace-normal font-sans break-words">
            Training of Good Skill of People to Imagination and Smarter
          </p>
        </div>

        {/* Description */}
        <p className="pt-2 text-[#0D0D0D] max-w-2xl text-sm md:text-lg leading-relaxed font-sans font-medium px-2 md:px-0">
          Riset adalah proses memahami persoalan, mengembangkan ide, dan menciptakan solusi. Melalui TONGSIS 2026, kamu akan mengenal lebih dekat <span className="font-extrabold text-[#F27405]">UKM-F RISET FISIB UTM</span> sebagai ruang belajar, berdiskusi, dan berkarya bersama.
        </p>

        {/* Scroll/Divider Indicator */}
        <div className="pt-4 md:pt-6 flex flex-col items-center gap-3 text-gray-400">
          <span className="text-[10px] font-bold font-sans text-gray-500 uppercase tracking-widest px-4">🔍 Kamu berada di tahap yang mana?</span>
          <div className="h-8 md:h-10 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}