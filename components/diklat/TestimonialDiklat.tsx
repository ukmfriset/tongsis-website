"use client";

import { useState, useEffect } from "react";
// Impor fungsi client bawaan proyek kamu
import { client } from "../../src/sanity/client"; 

interface TestiItem {
  nama: string;
  prodi: string;
  quote: string;
}

// 1. Data default ditaruh di luar sebagai 'Fallback' jika Sanity kosong
const defaultTestimoni: TestiItem[] = [
  { nama: "Alumni A", prodi: "Ilmu Komunikasi • 2021", quote: "TONGSIS itu bukan cuma diklat biasa. Di sinilah aku pertama kali ngerasain arti kekeluargaan yang sesungguhnya di kampus." },
  { nama: "Alumni B", prodi: "Sosiologi • 2022", quote: "Capek? Iya. Seru? Banget! TONGSIS bikin aku kenal orang-orang luar biasa yang sampai sekarang masih jadi sahabat terbaik." },
  { nama: "Alumni C", prodi: "Psikologi • 2023", quote: "Tiga hari yang mengubah cara pandangku tentang organisasi and pertemanan. Highly recommended untuk semua calon anggota baru!" },
  { nama: "Alumni D", prodi: "Hukum • 2022", quote: "Pengalaman yang sangat berharga. Saya belajar banyak tentang riset dan bagaimana bekerja dalam tim yang suportif." },
  { nama: "Alumni E", prodi: "Ekonomi • 2023", quote: "TONGSIS membuka wawasan saya tentang pentingnya penalaran dan riset di dunia akademik. Wajib diikuti!" },
  { nama: "Alumni F", prodi: "Sastra • 2021", quote: "Organisasi yang hangat dan inspiratif. Saya merasa menemukan rumah kedua di sini. Teruslah berkarya untuk RISET!" },
];

export default function TestimonialDiklat() {
  const [active, setActive] = useState(0);
  // 2. State utama menampung data array testimoni
  const [testimoni, setTestimoni] = useState<TestiItem[]>(defaultTestimoni);

  // 3. BAGIAN UTAMA: Mengambil data khusus dari tipe 'testimonialdiklat' di Sanity
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const query = `*[_type == "testimonialdiklat"]{ nama, prodi, quote }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setTestimoni(data);
        }
      } catch (error) {
        console.error("Gagal memuat data testimoni diklat dari Sanity:", error);
      }
    }
    fetchTestimonials();
  }, []);

  // Logika navigasi carousel dinamis
  const prev = () => setActive((prev) => (prev - 3 < 0 ? Math.max(0, testimoni.length - 3) : prev - 3));
  const next = () => setActive((prev) => (prev + 3 >= testimoni.length ? 0 : prev + 3));

  // Menghitung jumlah titik navigasi buletan di bawah
  const totalDots = Math.ceil(testimoni.length / 3);

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Kata Mereka
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Cerita Dari Alumni TONGSIS
          </h2>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {[0, 1, 2].map((offset) => {
            const index = (active + offset) % testimoni.length;
            const item = testimoni[index];
            if (!item) return null; // Mencegah eror bila data kurang dari 3 item

            // Membuat inisial huruf nama depan-belakang secara aman
            const initials = item.nama
              ? item.nama.split(" ").map((w) => w[0]).slice(0, 2).join("")
              : "AN";
            
            const isOrange = index % 2 === 0;

            return (
              <div
                key={`${item.nama}-${offset}`}
                className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border border-gray-100 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2
                  ${isOrange 
                    ? "hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                    : "hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"
                  }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${isOrange ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl border-2 bg-transparent flex items-center justify-center font-black text-xl transition-all duration-300 mx-auto mb-6
                      ${isOrange 
                        ? "border-[#F27405]/20 text-[#F27405] group-hover:border-[#F27405]" 
                        : "border-[#A6691F]/20 text-[#A6691F] group-hover:border-[#A6691F]"
                      }`}
                    >
                      {initials}
                    </div>
                    
                    <div className="text-center">
                      <span className="text-5xl text-gray-200 font-serif leading-none block h-5">"</span>
                      <p className="mt-4 text-gray-600 text-sm leading-relaxed italic font-medium min-h-[9rem]">{item.quote}</p>
                    </div>
                  </div>

                  <div className="text-center mt-8 pt-6 border-t border-gray-100">
                    <p className="font-extrabold text-[#0D0D0D]">{item.nama}</p>
                    <p className="text-xs text-gray-500 mt-1 font-semibold">{item.prodi}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigasi / Tombol Kontrol (Hanya muncul jika jumlah data lebih dari 3) */}
        {testimoni.length > 3 && (
          <div className="flex items-center justify-center gap-6 mt-16">
            <button 
              onClick={prev} 
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#F27405] hover:text-[#F27405] hover:bg-[#F27405]/5 transition-all font-bold"
            >
              ←
            </button>
            
            {/* Indikator Titik Paginasi Dinamis */}
            <div className="flex gap-2">
              {Array.from({ length: totalDots }).map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActive(i * 3)} 
                  className={`h-2 rounded-full transition-all duration-300 ${Math.floor(active / 3) === i ? "w-8 bg-[#F27405]" : "w-2 bg-gray-300"}`} 
                />
              ))}
            </div>
            
            <button 
              onClick={next} 
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#F27405] hover:text-[#F27405] hover:bg-[#F27405]/5 transition-all font-bold"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}