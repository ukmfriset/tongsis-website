"use client";

import Link from "next/link";

export default function ChoiceCardsHome() {
  return (
    <section className="px-4 pb-32 pt-16 bg-[#F2F2F2]">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 01 - Nuansa Orange FISIB */}
          <Link
            href="/open-recruitment"
            className="group relative rounded-[2rem] border border-[#F27405]/10 bg-gradient-to-br from-white to-[#F27405]/5 p-8 overflow-hidden transition-all duration-300 hover:border-[#F27405]/30 hover:shadow-xl hover:shadow-[#F27405]/5 hover:-translate-y-1"
          >
            {/* Background Pendaran Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F27405]/10 rounded-full blur-2xl group-hover:bg-[#F27405]/20 transition-colors"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F27405] to-[#ff8c21] flex items-center justify-center mb-6 text-white font-extrabold">
                01
              </div>
              <h2 className="text-xl font-extrabold text-[#0D0D0D] mb-2">
                OPEN RECRUITMENT 2026
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Belum daftar? Ini titik awalmu. Isi formulir, kenalan sama keluarga besar UKM-F Riset, dan masuk ke lingkungan yang beneran ngedukung kamu tumbuh. Ini bukan sekadar daftar nama — ini awal dari sesuatu yang lebih besar.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#F27405] group-hover:gap-3 transition-all">
                Daftar Sekarang
                <span>→</span>
              </div>
            </div>
          </Link>

          {/* Card 02 - Nuansa Cokelat/Emas Riset */}
          <Link
            href="/diklat"
            className="group relative rounded-[2rem] border border-[#A6691F]/10 bg-gradient-to-br from-white to-[#A6691F]/5 p-8 overflow-hidden transition-all duration-300 hover:border-[#A6691F]/30 hover:shadow-xl hover:shadow-[#A6691F]/5 hover:-translate-y-1"
          >
            {/* Background Pendaran Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A6691F]/10 rounded-full blur-2xl group-hover:bg-[#A6691F]/20 transition-colors"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#A6691F] to-[#c28132] flex items-center justify-center mb-6 text-white font-extrabold">
                02
              </div>
              <h2 className="text-xl font-extrabold text-[#0D0D0D] mb-2">
                DIKLAT TONGSIS 2026
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Udah lolos seleksi? Nice, selamat! 🎉 Sekarang saatnya lanjut ke tahap berikutnya. Di sini ada semua info yang kamu butuhkan — jadwal, perlengkapan, sampai hal-hal penting yang perlu kamu tahu sebelum diklat dimulai.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#A6691F] group-hover:gap-3 transition-all">
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