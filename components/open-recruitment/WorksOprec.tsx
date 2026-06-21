"use client";

import Link from "next/link";

export default function WorksOprec() {
  const categories = [
    { icon: "📰", warna: "violet", judul: "Artikel", deskripsi: "Tulisan artikel ilmiah populer karya anggota seputar isu sosial dan akademik.", href: "https://www.ukmfriset.or.id/category/artikel" },
    { icon: "📖", warna: "cyan", judul: "Cerpen", deskripsi: "Karya cerita pendek hasil kreativitas anggota UKM-F Riset di bidang sastra.", href: "https://www.ukmfriset.or.id/category/cerpen" },
    { icon: "📝", warna: "violet", judul: "Essay", deskripsi: "Kumpulan esai ilmiah anggota yang membahas gagasan dan pandangan kritis.", href: "https://www.ukmfriset.or.id/category/essay" },
    { icon: "✒️", warna: "cyan", judul: "Puisi", deskripsi: "Karya puisi yang ditulis anggota sebagai bentuk ekspresi dan kreativitas.", href: "https://www.ukmfriset.or.id/category/puisi" },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Hasil Karya
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Karya-karya Riset
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Anggota UKM-F Riset aktif menghasilkan karya nyata — bukan cuma belajar teori.
            Jelajahi karya-karya mereka di website resmi UKM-F Riset.
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
              ${item.warna === "violet" 
                ? "border-gray-100 hover:border-violet-300 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)]" 
                : "border-gray-100 hover:border-cyan-300 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.15)]"}`}
            >
              {/* Overlay Warna saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 ${item.warna === "violet" ? "bg-violet-600" : "bg-cyan-600"}`}></div>

              <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg transition-transform duration-300 group-hover:scale-105 ${
                item.warna === "violet" ? "bg-violet-500 shadow-violet-200 text-white" : "bg-cyan-500 shadow-cyan-200 text-white"
              }`}>
                {item.icon}
              </div>
              <h3 className="relative z-10 font-extrabold text-[#0B1026] text-lg mb-2">{item.judul}</h3>
              <p className="relative z-10 text-sm text-gray-500 leading-relaxed mb-6">{item.deskripsi}</p>
              
              <div className={`relative z-10 text-xs font-bold inline-flex items-center gap-1 transition-all group-hover:gap-2 ${
                item.warna === "violet" ? "text-violet-600" : "text-cyan-600"
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
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105 hover:shadow-violet-500/40"
          >
            Kunjungi Website UKM-F Riset <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}