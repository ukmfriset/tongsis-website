"use client";

import Link from "next/link";

export default function CommitteeDiklat() {
  return (
    /* PERBAIKAN: Mengubah bg-white menjadi bg-[#F2F2F2] agar serasi dengan alur atas halaman */
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl text-center">
        {/* Header */}
        <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
          Panitia
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
          Orang-Orang di Balik<br/>TONGSIS 2026
        </h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          Mereka yang udah kerja keras biar pengalaman kamu di TONGSIS jadi sesuatu yang berkesan.
        </p>

        {/* Committee Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => {
            const isOrange = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border border-gray-100 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2
                  ${isOrange 
                    ? "hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                    : "hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"
                  }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${isOrange ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

                {/* Avatar Placeholder */}
                <div className={`w-24 h-24 rounded-3xl border-2 bg-transparent flex items-center justify-center text-3xl overflow-hidden transition-all duration-300
                  ${isOrange 
                    ? "border-[#F27405]/15 text-[#F27405] group-hover:border-[#F27405] group-hover:bg-[#F27405]/5" 
                    : "border-[#A6691F]/15 text-[#A6691F] group-hover:border-[#A6691F] group-hover:bg-[#A6691F]/5"
                  }`}
                >
                  👤
                </div>

                <div className="space-y-3 relative z-10 flex flex-col items-center w-full">
                  <p className="font-extrabold text-[#0D0D0D] text-sm">Nama Panitia {i}</p>
                  <span className={`text-[10px] font-extrabold border bg-transparent px-4 py-1 rounded-full uppercase tracking-wider transition-all duration-300 inline-block
                    ${isOrange 
                      ? "border-[#F27405]/30 text-[#F27405]" 
                      : "border-[#A6691F]/20 text-[#A6691F] group-hover:border-[#A6691F]/40"
                    }`}
                  >
                    Divisi
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-10">dan masih banyak lagi...</p>

        {/* Action Button */}
        <div className="mt-12">
          <Link
            href="/committee"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] px-10 py-4 text-sm font-extrabold text-white transition-all hover:scale-105 shadow-xl shadow-[#F27405]/20 hover:shadow-[#F27405]/30"
          >
            Lihat Semua Panitia <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}