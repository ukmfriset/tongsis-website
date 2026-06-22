"use client";

export default function WhatIsDiklat() {
  return (
    /* Jarak bawah dikurangi sedikit dari pb-40 menjadi pb-32 agar tidak kejauhan */
    <section id="tongsis" className="pt-24 pb-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Tentang Diklat
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Wait, TONGSIS Itu Apa?
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            <span className="text-[#F27405] font-extrabold">TONGSIS</span>{" "}
            <span className="text-gray-400 italic font-normal">
              (Training of Good Skill of People to Imagination and Smarter)
            </span>{" "}
            adalah program Diklat Anggota Baru UKM-F Riset FISIB UTM yang dirancang buat satu tujuan: ngenalin kamu ke dunia riset dan organisasi ini — secara mendalam, bukan sekadar formalitas. Di sini kamu bakal dibekali skill dasar riset, ketemu orang-orang yang bakal jadi circle barumu, dan — yang paling penting — mulai ngerasain sendiri arti jadi bagian dari UKM-F Riset.
          </p>
        </div>

      </div>
    </section>
  );
}