"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif akurat andalanmu

interface TestimoniItem {
  nama: string;
  prodi: string;
  quote: string;
}

// Data default bawaan asli kamu (Sistem Fallback)
const defaultTestimoni: TestimoniItem[] = [
  { nama: "Ahmad Hisyam Mubarok", prodi: "Ketua Umum UKM-F Riset 2025", quote: "Mengikuti UKM-F RISET selama tiga periode merupakan sebuah perjalanan yang penuh warna, tantangan, dan pembelajaran. UKM-F RISET bukan hanya sekadar organisasi, tetapi rumah kedua yang membentuk karakter, memperluas jaringan, dan memperkaya pengalaman." },
  { nama: "Sumarsono", prodi: "Staff PLP UKM-F Riset", quote: "Aku menemukan sebuah tempat yang nyaman, hangat dan penuh dengan pelukan kebahagiaan. Tempat yang mengajarkanku tentang banyak hal mengenai rasa kekeluargaan dan ilmu tentang kepenulisan. Terimakasih UKMF Riset sudah menemani separuh perjalanan hidupku." },
  { nama: "Rangga Prashagi", prodi: "Co POSDM UKM-F Riset 2025", quote: "Organisasi pertama saya di kampus yaitu UKM-F Riset dimana disini saya mendapatkan banyak pengalaman serta relasi dan dalam UKM-F Riset inilah saya merasakan arti kekeluargaan yang bisa mensupport serta mendorong saya untuk dapat terus berkembang." },
  { nama: "Listya", prodi: "Ketua Umum 2021", quote: "UKMF Riset bagi saya tidak hanya sebuah organisasi, tidak hanya sebuah keluarga, namun tempat yang sebenar-benarnya belajar. Tidak luput orang-orangnya yang selalu membuat jatuh cinta lagi dan lagi." },
  { nama: "Mawan", prodi: "Ketua Umum 2017", quote: "Riset, merupakan UKMF yang bergerak di bidang penelitian and penalaran, tapi kita tidak belajar itu saja di sana, banyak sekali pengalaman yang bisa kita ambil. Riset sebagai rumah untuk kembali pulang, selamat berproses." },
  { nama: "Zuhay", prodi: "Kepala Departemen Litbang 2017", quote: "Selama di RISET saya banyak belajar terutama tentang penelitian. Karena sudah masuk RISET, jangan mau hanya mengambil satu manfaat, jadilah orang 'serakah' di organisasi ini — ambillah semua manfaatnya." },
  { nama: "Sugiati", prodi: "Ketua Umum 2023", quote: "Memilih UKM-F Riset sebagai rumah kedua merupakan pilihan yang tidak salah dalam hidup saya. Di sini saya menemukan tentang arti menerima, ikhlas, dan memberi. Selalu membuat saya nyaman." },
  { nama: "Vina Amalia", prodi: "Anggota Aktif 2021", quote: "Riset adalah organisasi satu-satunya saya di kampus. Di sini saya menemukan keluarga baru, pengalaman baru. Dan di sini saya banyak belajar." },
  { nama: "Samsul Muarif", prodi: "Ketua Umum 2024", quote: "UKM-F RISET merupakan wadah yang tepat bagi mahasiswa untuk belajar, mengukir karya, dan meraih prestasi bersama. Tempat untuk berdialektika, bercengkrama, dan bertukar cerita.", },
];

export default function TestimonialOprec() {
  const [active, setActive] = useState(0);
  const [testimoni, setTestimoni] = useState<TestimoniItem[]>(defaultTestimoni);

  // Ambil data testimoni dari Sanity
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const query = `*[_type == "testimonial"] | order(_createdAt asc) { nama, prodi, quote }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setTestimoni(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data testimoni dari Sanity:", error);
      }
    }
    fetchTestimonials();
  }, []);

  const prev = () => setActive((prev) => (prev - 3 < 0 ? testimoni.length - 3 : prev - 3));
  const next = () => setActive((prev) => (prev + 3 >= testimoni.length ? 0 : prev + 3));

  // Menghitung jumlah dot navigasi secara dinamis berdasarkan total data
  const dotCount = Math.ceil(testimoni.length / 3);

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">Kata Mereka</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">Cerita Dari Mereka Yang Pernah Menjalani</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Every single person has a different story. Tapi satu hal yang pasti: mereka tumbuh, belajar, dan berproses penuh arti selama di UKM-F Riset.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {[0, 1, 2].map((offset) => {
            const index = (active + offset) % testimoni.length;
            const item = testimoni[index];
            if (!item) return null;

            const initials = item.nama.split(" ").map((w) => w[0]).slice(0, 2).join("");
            
            const isOrange = index % 2 === 0;
            const accentColor = isOrange ? "#F27405" : "#A6691F";
            const borderColor = isOrange ? "hover:border-[#F27405]/30" : "hover:border-[#A6691F]/30";
            const hoverShadow = isOrange ? "hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" : "hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]";
            const iconBorder = isOrange ? "border-[#F27405]/20 group-hover:border-[#F27405] text-[#F27405]" : "border-[#A6691F]/20 group-hover:border-[#A6691F] text-[#A6691F]";

            return (
              <div
                key={`${item.nama}-${offset}`}
                className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border border-gray-100 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${borderColor} ${hoverShadow}`}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300"
                  style={{ backgroundColor: accentColor }}
                ></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Wadah Inisial */}
                    <div className={`w-16 h-16 rounded-2xl border-2 bg-transparent flex items-center justify-center font-black text-xl transition-all duration-300 mx-auto mb-6 ${iconBorder}`}>
                      {initials}
                    </div>
                    
                    {/* Isi Testimoni */}
                    <div className="text-center">
                      <span className="text-5xl text-gray-200 font-serif leading-none block h-5">"</span>
                      <p className="mt-4 text-gray-600 text-sm leading-relaxed italic min-h-[11rem] md:min-h-[13rem]">
                        {item.quote}
                      </p>
                    </div>
                  </div>

                  {/* Profil Tokoh */}
                  <div className="text-center mt-8 pt-6 border-t border-gray-100">
                    <p className="font-extrabold text-[#0D0D0D]">{item.nama}</p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">{item.prodi}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Slider */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#F27405] hover:text-[#F27405] transition-all">←</button>
          <div className="flex gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i * 3)} 
                className={`h-2 rounded-full transition-all duration-300 ${Math.floor(active / 3) === i ? "w-8 bg-[#F27405]" : "w-2 bg-gray-300"}`} 
              />
            ))}
          </div>
          <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#F27405] hover:text-[#F27405] transition-all">→</button>
        </div>
      </div>
    </section>
  );
}