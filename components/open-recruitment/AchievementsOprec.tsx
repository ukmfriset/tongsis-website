"use client";

import { useState, useEffect, useRef } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif akurat andalanmu

// Interface tipe data untuk TypeScript yang disesuaikan
interface AchievementItem {
  name: string;
  info: string;
  title: string;
  badge: string;
}

// Data default bawaan baru sesuai permintaan Anda (Sistem Fallback)
const defaultAchievements: AchievementItem[] = [
  { badge: "🌍 Internasional", title: "Google Student Ambassador 2026", name: "Lia Nur Khasanah", info: "UKM-F Riset FISIB UTM" },
  { badge: "🏅 Nasional", title: "Juara Harapan 1 Festival KOMPAS 2025", name: "Lia Nur Khasanah", info: "UKM-F Riset FISIB UTM" },
  { badge: "🥉 Nasional", title: "Bronze Medal at NESCO 2 Malang 2026", name: "Isni Hosiyah Robbi", info: "UKM-F Riset FISIB UTM" },
  { badge: "🥉 Nasional", title: "Bronze Medal at IGNITE FUTURE FEST National Essay 2026", name: "Sofiatun Kholifah", info: "UKM-F Riset FISIB UTM" },
  { badge: "🎓 Kampus", title: "Juara 2 Mawapres Kategori Pratama FISIB", name: "Lucky Tri Kusuma", info: "UKM-F Riset FISIB UTM" },
  { badge: "🎓 Kampus", title: "Juara 3 Mawapres Kategori Utama FISIB", name: "Rangga Prashagi", info: "UKM-F Riset FISIB UTM" },
  { badge: "🎓 Kampus", title: "Juara Harapan 1 Mawapres Kategori Utama FISIB", name: "Muhammad", info: "UKM-F Riset FISIB UTM" },
  { badge: "🌍 Internasional", title: "Juara 1 Lomba Poster Tingkat Internasional (Gold Medal) - Olimpiade Bimbingan dan Konseling XII 2026", name: "Fitri Sugi Ayuni", info: "UKM-F Riset FISIB UTM" },
  { badge: "🌍 Internasional", title: "Juara 2 Lomba Essai Tingkat Internasional (Silver Medal) - Olimpiade Bimbingan dan Konseling XII 2026", name: "Fitri Sugi Ayuni", info: "UKM-F Riset FISIB UTM" },
  { badge: "🎓 Kampus", title: "Best Personality - Duta Kampus Putra Potre UTM 2026", name: "Thoyyibatul Insani", info: "UKM-F Riset FISIB UTM" },
  { badge: "🏆 Nasional", title: "1st Kejuaraan Nasional Cheerleading Team Premier All Star Jawa Timur", name: "Ibra Kusuma Dandi", info: "UKM-F Riset FISIB UTM" },
  { badge: "🏆 Nasional", title: "Lolos Pendanaan Simbelmawa 2026", name: "Margaretha Diah A.T & Rangga Prashagi", info: "UKM-F Riset FISIB UTM" }
];

export default function AchievementsOprac() {
  const [achievements, setAchievements] = useState<AchievementItem[]>(defaultAchievements);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Ambil data prestasi dari Sanity
  useEffect(() => {
    async function fetchAchievements() {
      try {
        const query = `*[_type == "achievement"] | order(_createdAt desc) {
          name,
          info,
          title,
          badge
        }`;
        const data = await client.fetch(query);

        if (data && data.length > 0) {
          setAchievements(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data prestasi dari Sanity:", error);
      }
    }
    fetchAchievements();
  }, []);

  // Helper untuk mendapatkan ikon berdasarkan kata kunci di badge
  const getBadgeIcon = (badgeText: string) => {
    if (badgeText.includes("Internasional") || badgeText.includes("🌍")) return "🌍";
    if (badgeText.includes("Kampus") || badgeText.includes("🎓")) return "🎓";
    if (badgeText.includes("Nasional") || badgeText.includes("🏅") || badgeText.includes("🥉") || badgeText.includes("🏆")) return "🏆";
    return "⭐";
  };

  // Fungsi untuk menggeser carousel ke kiri/kanan berdasarkan lebar container
  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Bukti Nyata
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Bukan Sekadar Rencana, Ini Hasilnya
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Anggota UKM-F Riset telah menghasilkan berbagai karya dan pencapaian di tingkat regional hingga internasional.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-2 md:px-10">
          {/* Tombol Navigasi Kiri */}
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 hidden md:flex items-center justify-center text-[#0D0D0D] hover:bg-[#F27405] hover:text-white transition-all duration-300 focus:outline-none"
            aria-label="Geser ke Kiri"
          >
            ❮
          </button>

          {/* Tombol Navigasi Kanan */}
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 hidden md:flex items-center justify-center text-[#0D0D0D] hover:bg-[#F27405] hover:text-white transition-all duration-300 focus:outline-none"
            aria-label="Geser ke Kanan"
          >
            ❯
          </button>

          {/* Wrapper Grid dengan Scroll Horizontal */}
          <div
            ref={scrollRef}
            className="grid grid-flow-col grid-rows-1 md:grid-rows-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-4 auto-cols-[85%] sm:auto-cols-[350px] md:auto-cols-[calc((100%-3rem)/3)]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {achievements.map((item, index) => (
              <div
                key={index}
                className="w-full h-full bg-white p-6 rounded-2xl shadow-md border border-gray-100 snap-start flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#F27405]">
                    <span>{getBadgeIcon(item.badge)}</span>
                    {item.badge}
                  </span>
                  <h3 className="mt-4 font-bold text-gray-900 line-clamp-2 text-base">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="font-bold text-sm text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Lihat Semua Karya */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://ukmfriset.or.id/prestasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-[#F27405] rounded-full hover:bg-[#d96604] transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Lihat Semua Prestasi &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
