"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif akurat andalanmu

// Interface tipe data untuk TypeScript
interface AchievementItem {
  nama: string;
  prodi: string;
  prestasi: string;
  level: "Nasional" | "Regional";
}

// Data default bawaan asli kamu (Sistem Fallback)
const defaultAchievements: AchievementItem[] = [
  { nama: "Nama Anggota 1", prodi: "Ilmu Komunikasi • 2022", prestasi: "Juara 1 LKTI Nasional Bidang Sosial", level: "Nasional" },
  { nama: "Nama Anggota 2", prodi: "Sosiologi • 2021", prestasi: "Juara 2 Essay Competition Tingkat Regional", level: "Regional" },
  { nama: "Nama Anggota 3", prodi: "Sastra Inggris • 2022", prestasi: "Lolos PKM-RE Pendanaan Kemendikbud", level: "Nasional" },
  { nama: "Nama Anggota 4", prodi: "Psikologi • 2023", prestasi: "Juara 3 LKTI Regional Jawa Timur", level: "Regional" },
  { nama: "Nama Anggota 5", prodi: "Ilmu Komunikasi • 2021", prestasi: "Best Paper Conference Ilmiah Nasional", level: "Nasional" },
  { nama: "Nama Anggota 6", prodi: "Sosiologi • 2022", prestasi: "Finalis PKM-K Pekan Ilmiah Mahasiswa", level: "Nasional" },
];

export default function AchievementsOprec() {
  const [achievements, setAchievements] = useState<AchievementItem[]>(defaultAchievements);

  // Ambil data prestasi dari Sanity
  useEffect(() => {
    async function fetchAchievements() {
      try {
        // Mengambil semua data dengan dokumen tipe 'achievement'
        const query = `*[_type == "achievement"] | order(_createdAt desc) {
          nama,
          prodi,
          prestasi,
          level
        }`;
        const data = await client.fetch(query);
        
        // Jika di Sanity ada isinya, pakai data Sanity. Jika kosong, pertahankan default.
        if (data && data.length > 0) {
          setAchievements(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data prestasi dari Sanity:", error);
      }
    }
    fetchAchievements();
  }, []);

  const levelIcon: Record<string, string> = { Nasional: "🏆", Regional: "🥈" };

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Bukti Nyata
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Bukan Sekadar Rencana, Ini Hasilnya
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Anggota UKM-F Riset telah menghasilkan berbagai karya dan pencapaian di tingkat regional hingga nasional.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 
              ${item.level === "Nasional" 
                ? "border-gray-100 hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                : "border-gray-100 hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"}`}
            >
              {/* Overlay Transparan saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${item.level === "Nasional" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              {/* Icon & Level Badge */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                
                {/* Wadah Icon Minimalis (Outline-Only) */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 bg-transparent transition-all duration-300 
                  ${item.level === "Nasional" 
                    ? "border-[#F27405]/20 group-hover:border-[#F27405] group-hover:shadow-md group-hover:shadow-[#F27405]/10" 
                    : "border-[#A6691F]/20 group-hover:border-[#A6691F] group-hover:shadow-md group-hover:shadow-[#A6691F]/10"
                  }`}
                >
                  {levelIcon[item.level] || "🏆"}
                </div>

                {/* Badge Keterangan Level */}
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  item.level === "Nasional" 
                    ? "bg-[#F27405]/10 text-[#F27405]" 
                    : "bg-[#A6691F]/10 text-[#A6691F]"
                }`}>
                  {item.level}
                </span>
              </div>

              {/* Prestasi */}
              <h4 className="relative z-10 font-extrabold text-[#0D0D0D] text-lg leading-snug mb-6 min-h-[3.5rem]">
                {item.prestasi}
              </h4>

              {/* Profil */}
              <div className="relative z-10 pt-6 border-t border-gray-100">
                <p className="font-extrabold text-[#0D0D0D] text-sm">{item.nama}</p>
                <p className="text-xs text-gray-500 font-medium mt-1">{item.prodi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}