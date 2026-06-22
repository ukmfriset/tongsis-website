"use client";

import Link from "next/link";

export default function CTAOprec() {
  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-3xl">
        {/* CTA Block - Gradasi Orange FISIB ke Cokelat Emas Riset */}
        <div className="rounded-[2rem] bg-gradient-to-br from-[#F27405] to-[#A6691F] p-12 text-center shadow-xl shadow-[#F27405]/15 mb-10">
          <h2 className="text-4xl font-extrabold text-white leading-tight tracking-tight">
            Ayo, Jangan Nunda Terus.
          </h2>
          <p className="mt-6 text-white/90 max-w-lg mx-auto text-lg leading-relaxed font-medium">
            Satu langkah kecil: isi formulir. Satu dampak besar: perjalanan yang bakal kamu syukuri.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="rounded-full bg-white px-10 py-4 text-sm font-extrabold text-[#F27405] transition-all hover:scale-105 hover:shadow-lg hover:shadow-black/10"
            >
              Gas Daftar Sekarang
            </a>
            <a 
              href="https://www.ukmfriset.or.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full border border-white/30 px-10 py-4 text-sm font-extrabold text-white transition-all hover:bg-white/10"
            >
              Lihat Website UKM-F Riset
            </a>
          </div>
        </div>

        {/* Contact Person Box - Gaya Minimalis Outline-Only */}
        <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm text-center">
          <p className="text-gray-500 text-xs font-bold mb-6 uppercase tracking-widest">Ada pertanyaan? Hubungi langsung ya:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {[
              { nama: "Dinda", nomor: "0857-3019-7634", link: "https://wa.me/6285730197634", warna: "orange" },
              { nama: "Roicha", nomor: "0882-0091-0179", link: "https://wa.me/6288200910179", warna: "brown" },
            ].map((cp, idx) => (
              <a
                key={idx}
                href={cp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-1 p-4 rounded-2xl border border-gray-100 bg-transparent transition-all min-w-[12rem]
                  ${cp.warna === "orange" 
                    ? "hover:border-[#F27405] hover:bg-[#F27405]/5" 
                    : "hover:border-[#A6691F] hover:bg-[#A6691F]/5"
                  }`}
              >
                <span className="font-extrabold text-[#0D0D0D] transition-colors">{cp.nama}</span>
                <span className={`text-xs text-gray-500 font-bold transition-colors
                  ${cp.warna === "orange" ? "group-hover:text-[#F27405]" : "group-hover:text-[#A6691F]"}`}
                >
                  {cp.nomor}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}