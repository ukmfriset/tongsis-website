"use client";

import Link from "next/link";

export default function WorksOprec() {
  const categories = [
    { icon: "📰", warna: "orange", judul: "Artikel", deskripsi: "Tulisan yang membahas berbagai isu sosial dan akademik dengan sudut pandang mahasiswa.", href: "https://www.ukmfriset.or.id/category/artikel" },
    { icon: "📖", warna: "brown", judul: "Cerpen", deskripsi: "Cerita yang lahir dari ide, pengalaman, dan cara pandang mahasiswa.", href: "https://www.ukmfriset.or.id/category/cerpen" },
    { icon: "📝", warna: "orange", judul: "Essay", deskripsi: "Tulisan kritis yang menyampaikan gagasan, argumen, dan perspektif baru.", href: "https://www.ukmfriset.or.id/category/essay" },
    { icon: "✒️", warna: "brown", judul: "Puisi", deskripsi: "ERuang untuk mengekspresikan ide dan perasaan melalui kata-kata.", href: "https://www.ukmfriset.or.id/category/puisi" },
  ];

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Hasil Karya
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Apa Yang Kita Hasilkan?<br/>Bukan hanya tugas kuliah
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Anggota UKM-F Riset aktif menciptakan karya berupa tulisan ilmiah, esai, cerita, hingga karya kreatif lainnya.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((item) => (
            <Link
              key={item.judul}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 
              ${item.warna === "orange" 
                ? "border-gray-100 hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                : "border-gray-100 hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"}`}
            >
              {/* Overlay Transparan saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${item.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              {/* Wadah Icon Minimalis (Outline-Only) */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 bg-transparent transition-all duration-300 mb-6
                ${item.warna === "orange" 
                  ? "border-[#F27405]/20 group-hover:border-[#F27405] group-hover:shadow-md group-hover:shadow-[#F27405]/10" 
                  : "border-[#A6691F]/20 group-hover:border-[#A6691F] group-hover:shadow-md group-hover:shadow-[#A6691F]/10"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="relative z-10 font-extrabold text-[#0D0D0D] text-lg mb-2">{item.judul}</h3>
              <p className="relative z-10 text-sm text-gray-500 leading-relaxed mb-6 font-medium min-h-[4rem]">{item.deskripsi}</p>
              
              {/* Teks Tautan */}
              <div className={`relative z-10 text-xs font-bold inline-flex items-center gap-1 transition-all group-hover:gap-2 ${
                item.warna === "orange" ? "text-[#F27405]" : "text-[#A6691F]"
              }`}>
                Lihat karya <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="https://www.ukmfriset.or.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F27405] to-[#A6691F] px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-[#F27405]/20 transition-all hover:scale-105 hover:shadow-[#F27405]/30"
          >
            Kunjungi Website UKM-F Riset <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}