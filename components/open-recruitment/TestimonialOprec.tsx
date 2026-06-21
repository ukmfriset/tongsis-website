"use client";

import { useState } from "react";

export default function TestimonialOprec() {
  const [active, setActive] = useState(0);

  const testimoni = [
    { nama: "Ahmad Hisyam Mubarok", prodi: "Ketua Umum UKM-F Riset 2025", quote: "Mengikuti UKM-F RISET selama tiga periode merupakan sebuah perjalanan yang penuh warna, tantangan, dan pembelajaran. UKM-F RISET bukan hanya sekadar organisasi, tetapi rumah kedua yang membentuk karakter, memperluas jaringan, dan memperkaya pengalaman." },
    { nama: "Sumarsono", prodi: "Staff PLP UKM-F Riset", quote: "Aku menemukan sebuah tempat yang nyaman, hangat dan penuh dengan pelukan kebahagiaan. Tempat yang mengajarkanku tentang banyak hal mengenai rasa kekeluargaan dan ilmu tentang kepenulisan. Terimakasih UKMF Riset sudah menemani separuh perjalanan hidupku." },
    { nama: "Rangga Prashagi", prodi: "Co POSDM UKM-F Riset 2025", quote: "Organisasi pertama saya di kampus yaitu UKM-F Riset dimana disini saya mendapatkan banyak pengalaman serta relasi dan dalam UKM-F Riset inilah saya merasakan arti kekeluargaan yang bisa mensupport serta mendorong saya untuk dapat terus berkembang." },
    { nama: "Listya", prodi: "Ketua Umum 2021", quote: "UKMF Riset bagi saya tidak hanya sebuah organisasi, tidak hanya sebuah keluarga, namun tempat yang sebenar-benarnya belajar. Tidak luput orang-orangnya yang selalu membuat jatuh cinta lagi dan lagi." },
    { nama: "Mawan", prodi: "Ketua Umum 2017", quote: "Riset, merupakan UKMF yang bergerak di bidang penelitian dan penalaran, tapi kita tidak belajar itu saja di sana, banyak sekali pengalaman yang bisa kita ambil. Riset sebagai rumah untuk kembali pulang, selamat berproses." },
    { nama: "Zuhay", prodi: "Kepala Departemen Litbang 2017", quote: "Selama di RISET saya banyak belajar terutama tentang penelitian. Karena sudah masuk RISET, jangan mau hanya mengambil satu manfaat, jadilah orang 'serakah' di organisasi ini — ambillah semua manfaatnya." },
    { nama: "Sugiati", prodi: "Ketua Umum 2023", quote: "Memilih UKM-F Riset sebagai rumah kedua merupakan pilihan yang tidak salah dalam hidup saya. Di sini saya menemukan tentang arti menerima, ikhlas, dan memberi. Selalu membuat saya nyaman." },
    { nama: "Vina Amalia", prodi: "Anggota Aktif 2021", quote: "Riset adalah organisasi satu-satunya saya di kampus. Di sini saya menemukan keluarga baru, pengalaman baru. Dan di sini saya banyak belajar." },
    { nama: "Samsul Muarif", prodi: "Ketua Umum 2024", quote: "UKM-F RISET merupakan wadah yang tepat bagi mahasiswa untuk belajar, mengukir karya, dan meraih prestasi bersama. Tempat untuk berdialektika, bercengkrama, dan bertukar cerita.", },
  ];

  const prev = () => setActive((prev) => (prev - 3 < 0 ? testimoni.length - 3 : prev - 3));
  const next = () => setActive((prev) => (prev + 3 >= testimoni.length ? 0 : prev + 3));

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">Kata Mereka</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">Testimoni Anggota</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((offset) => {
            const index = (active + offset) % testimoni.length;
            const item = testimoni[index];
            const initials = item.nama.split(" ").map((w) => w[0]).slice(0, 2).join("");
            
            // Logika selang-seling warna (Violet dan Cyan)
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
                {/* Overlay warna saat hover */}
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

        {/* Navigation tetap sama */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-violet-500 hover:text-violet-600 transition-all">←</button>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <button key={i} onClick={() => setActive(i * 3)} className={`h-2 rounded-full transition-all duration-300 ${active / 3 === i ? "w-8 bg-violet-500" : "w-2 bg-gray-300"}`} />
            ))}
          </div>
          <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-violet-500 hover:text-violet-600 transition-all">→</button>
        </div>
      </div>
    </section>
  );
}