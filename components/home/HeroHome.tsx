"use client";

export default function HeroHome() {
  return (
    /* PERBAIKAN MUTLAK: pt-40 dinaikkan menjadi pt-48 (192px) untuk memastikan 
       elemen teratas beneran punya benteng jarak yang tebal dari bawah navbar */
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-48 pb-24 px-4 text-center overflow-hidden bg-[#F2F2F2] -mt-20">
      
      {/* ─── AMBIENT BLOB EFFECT LAYER ─── */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full bg-[#F27405]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#A6691F]/8 blur-[100px]" />

      {/* ─── HERO CONTENT LAYER ─── */}
      {/* Menggunakan gap vertikal yang konsisten (space-y) agar antar elemen saling menjaga jarak */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-6">

        {/* 1. Badge Teratas — Sekarang dijamin turun dan punya ruang napas */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F]"></span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            UKM-F RISET FISIB UTM
          </span>
        </div>

        {/* 2. Heading Hitam Sambutan */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D0D0D] tracking-tight pt-2 animate-fade-in">
          Selamat Datang, Calon Anggota Baru
        </h2>

        {/* 3. Title Utama Gradasi */}
        <div className="pt-2">
          <h1 className="font-heading text-6xl md:text-8xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F27405] via-[#e06600] to-[#A6691F] transition-all duration-500 ease-out hover:scale-105 cursor-pointer inline-block">
            TONGSIS 2026
          </h1>
          
          {/* Subtitle Arti Akronim */}
          <p className="mt-4 text-xs md:text-sm text-gray-400 max-w-full font-bold uppercase tracking-wide whitespace-nowrap font-sans">
            Training of Good Skill of People to Imagination and Smarter
          </p>
        </div>

        {/* Description */}
        <p className="pt-2 text-[#0D0D0D] max-w-2xl text-base md:text-lg leading-relaxed font-sans font-medium">
          Riset itu bukan cuma tugas kuliah yang dikumpulin terus dilupain. Di <span className="font-extrabold text-[#F27405]">UKM-F RISET FISIB UTM</span>? 
          riset adalah cara kita ngerti dunia — dan ngerti diri sendiri. TONGSIS 2026 adalah pintu masukmu ke komunitas ini.
          Pengalaman belajar, eksplorasi, dan pengembangan diri yang nggak bakal kamu temuin di tempat lain. Tinggal pilih langkah pertamamu di bawah.
        </p>

        {/* Scroll/Divider Indicator */}
        <div className="pt-6 flex flex-col items-center gap-3 text-gray-400">
          <span className="text-[10px] font-bold font-sans text-gray-500 uppercase tracking-widest">🔍 Kamu ada di tahap mana sekarang?</span>
          <div className="h-10 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}