"use client";

import Link from "next/link";

export default function ChoiceCardsHome() {
  return (
    <section className="px-4 pb-32 pt-16 bg-[#F8F9FC]">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 01 - Nuansa Violet */}
          <Link
            href="/open-recruitment"
            className="group relative rounded-3xl border border-violet-100 bg-gradient-to-br from-white to-violet-50/50 p-8 overflow-hidden transition-all duration-300 hover:border-violet-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100/60 rounded-full blur-2xl group-hover:bg-violet-200/60 transition-colors"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-400 flex items-center justify-center mb-6 text-white font-bold">
                01
              </div>
              <h2 className="text-xl font-bold text-[#0B1026] mb-2">
                OpRec Anggota Baru 2026
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Mulai perjalananmu di sini! Daftar sebagai calon anggota dan kenali UKMF RISET FISIB UTM lebih dekat.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 group-hover:gap-3 transition-all">
                Daftar Sekarang
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Card 02 - Nuansa Cyan */}
          <Link
            href="/diklat"
            className="group relative rounded-3xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50/50 p-8 overflow-hidden transition-all duration-300 hover:border-cyan-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/60 rounded-full blur-2xl group-hover:bg-cyan-200/60 transition-colors"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center mb-6 text-white font-bold">
                02
              </div>
              <h2 className="text-xl font-bold text-[#0B1026] mb-2">
                Diklat TONGSIS 2026
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Selamat datang, calon anggota! 🎉 Akses seluruh informasi dan panduan yang diperlukan untuk mengikuti Diklat TONGSIS 2026.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 group-hover:gap-3 transition-all">
                Lihat Panduan
                <span>→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}