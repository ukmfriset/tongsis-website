"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "../../src/sanity/client"; // Jalur relatif andalanmu

interface GalleryItem {
  label: string;
  gambarUrl: string | null;
  aksen: "orange" | "brown";
}

// Data default bawaan asli kamu (Sistem Fallback Gradasi)
const defaultKegiatan: GalleryItem[] = [
  { label: "Seminar Nasional", gambarUrl: null, aksen: "orange" },
  { label: "Penelitian", gambarUrl: null, aksen: "brown" },
  { label: "Pelatihan Kepenulisan", gambarUrl: null, aksen: "orange" },
  { label: "Webinar Nasional", gambarUrl: null, aksen: "brown" },
  { label: "Rapat Anggota", gambarUrl: null, aksen: "orange" },
  { label: "Kunjungan Ilmiah", gambarUrl: null, aksen: "brown" },
];

export default function GalleryOprec() {
  const [kegiatan, setKegiatan] = useState<GalleryItem[]>(defaultKegiatan);

  // Ambil data dokumentasi dari Sanity
  useEffect(() => {
    async function fetchGallery() {
      try {
        // Trik GROQ: .asset->url langsung mengubah id gambar Sanity menjadi link URL mentah
        const query = `*[_type == "gallery"] | order(_createdAt asc) {
          label,
          "gambarUrl": gambar.asset->url,
          aksen
        }`;
        const data = await client.fetch(query);
        
        if (data && data.length > 0) {
          setKegiatan(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data dokumentasi dari Sanity:", error);
      }
    }
    fetchGallery();
  }, []);

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Dokumentasi Kegiatan
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Belajar, Berkarya, dan Bertumbuh Bersama
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Berbagai kegiatan kami hadir untuk mengembangkan wawasan, keterampilan, dan pengalaman anggota, baik di bidang akademik maupun organisasi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {kegiatan.map((item, index) => {
            // Tentukan warna placeholder berdasarkan index & tema aksen pilihan
            const fallbackGradient = item.aksen === "orange"
              ? "from-[#F27405]/20 to-[#F27405]/5"
              : "from-[#A6691F]/20 to-[#A6691F]/5";

            return (
              <div
                key={index}
                className={`group relative aspect-[4/3] rounded-[2rem] bg-white border border-gray-100 overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:-translate-y-2
                  ${item.aksen === "orange"
                    ? "hover:border-[#F27405]/30 hover:shadow-[0_20px_40px_-15px_rgba(242,116,5,0.12)]"
                    : "hover:border-[#A6691F]/30 hover:shadow-[0_20px_40px_-15px_rgba(166,105,31,0.12)]"
                  }`}
              >
                {/* LOGIKA GAMBAR: Jika ada gambarUrl pakai Next.js Image, jika tidak ada pakai Gradasi */}
                {item.gambarUrl ? (
                  <Image
                    src={item.gambarUrl}
                    alt={item.label}
                    fill
                    sizes="(max-w-768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} transition-transform duration-700 group-hover:scale-110`}></div>
                )}
                
                {/* Gradient Overlay Gelap */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/20 to-transparent opacity-80 transition-opacity group-hover:opacity-70 z-10"></div>
                
                {/* Icon Kamera Outline-Only */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className={`w-14 h-14 rounded-full border-2 bg-transparent flex items-center justify-center text-xl transition-all duration-500 group-hover:scale-110
                    ${item.aksen === "orange"
                      ? "border-[#F27405]/20 group-hover:border-[#F27405] group-hover:bg-white/50"
                      : "border-[#A6691F]/20 group-hover:border-[#A6691F] group-hover:bg-white/50"
                    }`}
                  >
                    <span className="opacity-40 group-hover:opacity-100 transition-opacity">📷</span>
                  </div>
                </div>

                {/* Label Kegiatan */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-extrabold text-white tracking-wide block">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}