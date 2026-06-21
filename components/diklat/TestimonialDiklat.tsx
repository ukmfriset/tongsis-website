"use client";

import { useState } from "react";

export default function TestimonialDiklat() {
  const [active, setActive] = useState(0);

  const testimoni = [
    { nama: "Alumni A", prodi: "Ilmu Komunikasi • 2021", quote: "TONGSIS itu bukan cuma diklat biasa. Di sinilah aku pertama kali ngerasain arti kekeluargaan yang sesungguhnya di kampus." },
    { nama: "Alumni B", prodi: "Sosiologi • 2022", quote: "Capek? Iya. Seru? Banget! TONGSIS bikin aku kenal orang-orang luar biasa yang sampai sekarang masih jadi sahabat terbaik." },
    { nama: "Alumni C", prodi: "Psikologi • 2023", quote: "Tiga hari yang mengubah cara pandangku tentang organisasi dan pertemanan. Highly recommended untuk semua calon anggota baru!" },
    { nama: "Alumni D", prodi: "Hukum • 2022", quote: "Pengalaman yang sangat berharga. Saya belajar banyak tentang riset dan bagaimana bekerja dalam tim yang suportif." },
    { nama: "Alumni E", prodi: "Ekonomi • 2023", quote: "TONGSIS membuka wawasan saya tentang pentingnya penalaran dan riset di dunia akademik. Wajib diikuti!" },
    { nama: "Alumni F", prodi: "Sastra • 2021", quote: "Organisasi yang hangat dan inspiratif. Saya merasa menemukan rumah kedua di sini. Teruslah berkarya untuk RISET!" },
  ];

  const prev = () => setActive((prev) => (prev - 3 < 0 ? testimoni.length - 3 : prev - 3));
  const next = () => setActive((prev) => (prev + 3 >= testimoni.length ? 0 : prev + 3));

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">Kata Mereka</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">Apa Kata Mereka Tentang TONGSIS?</h2>
        </div>

        {/* Carousel Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((offset) => {
            const index = (active + offset) % testimoni.length;
            const item = testimoni[index];
            const initials = item.nama.split(" ").map((w) => w[0]).slice(0, 2).join("");
            
            const isViolet = index % 2 === 0;
            const borderColor = isViolet ? "border-violet-200" : "border-cyan-200";
            const hoverShadow = isViolet ? "hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)]" : "hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.2)]";
            const hoverBg = isViolet ? "bg-violet-600" : "bg-cyan-600";
            const iconBg = isViolet ? "from-violet-500 to-violet-400" : "from-cyan-500 to-cyan-400";

            return (
              <div
                key={`${item.nama}-${offset}`}
                className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-500 hover:-translate-y-2 ${borderColor} ${hoverShadow}`}
              >
                {/* Hover Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 ${hoverBg}`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center text-white font-black text-xl shadow-lg mx-auto mb-6`}>
                    {initials}
                  </div>
                  <div className="text-center">
                    <span className="text-5xl text-gray-200 font-serif">"</span>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed italic line-clamp-6">{item.quote}</p>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <p className="font-extrabold text-[#0B1026]">{item.nama}</p>
                      <p className="text-xs text-gray-400 mt-1 font-medium">{item.prodi}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigasi */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-violet-500 hover:text-violet-600 transition-all">←</button>
          <div className="flex gap-2">
            {[0, 1].map((i) => (
              <button 
                key={i} 
                onClick={() => setActive(i * 3)} 
                className={`h-2 rounded-full transition-all duration-300 ${active / 3 === i ? "w-8 bg-violet-500" : "w-2 bg-gray-300"}`} 
              />
            ))}
          </div>
          <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-violet-500 hover:text-violet-600 transition-all">→</button>
        </div>
      </div>
    </section>
  );
}