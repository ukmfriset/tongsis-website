"use client";

import Link from "next/link";

export default function CTADiklat() {
  return (
    /* PERBAIKAN: Mengubah bg-white menjadi bg-[#F2F2F2] agar kontras dengan SponsorDiklat di atasnya */
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-3xl">
        {/* Main CTA Box - Gradasi Orange FISIB ke Cokelat Emas Riset */}
        <div className="rounded-[2rem] bg-gradient-to-br from-[#F27405] to-[#A6691F] p-12 md:p-16 text-center shadow-2xl shadow-[#F27405]/15">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ini Langkah Terakhirmu Sebelum Resmi Jadi Bagian dari Kita.
          </h2>
          <p className="mt-6 text-white/90 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Kamu udah buktiin diri di seleksi. Sekarang tinggal satu langkah lagi. Jangan sampai ini yang bikin kamu ketinggalan sesuatu yang beneran bermakna.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="rounded-full bg-white px-10 py-4 text-sm font-extrabold text-[#F27405] transition-all hover:scale-105 hover:shadow-lg hover:shadow-black/10"
            >
              Daftar TONGSIS Sekarang →
            </Link>
            <Link
              href="/open-recruitment"
              className="rounded-full border-2 border-white/30 px-10 py-4 text-sm font-extrabold text-white transition-all hover:bg-white/10"
            >
              ← Kembali ke Halaman Oprec
            </Link>
          </div>
        </div>

        {/* Contact Person Section - Terlihat stand-out karena bg container utama sudah off-white */}
        <div className="mt-8 bg-white rounded-[2rem] p-8 border border-gray-100 text-center shadow-sm">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">
            Ada yang mau ditanyain? Hubungi panitia langsung ya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/6285730197634"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-transparent border border-gray-200 px-8 py-4 text-sm font-extrabold text-[#0D0D0D]/80 hover:border-[#F27405] hover:bg-[#F27405]/5 transition-all min-w-[12rem]"
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity">💬</span> Dinda
            </Link>
            <Link
              href="https://wa.me/6288200910179"
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-transparent border border-gray-200 px-8 py-4 text-sm font-extrabold text-[#0D0D0D]/80 hover:border-[#A6691F] hover:bg-[#A6691F]/5 transition-all min-w-[12rem]"
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity">💬</span> Roicha
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}