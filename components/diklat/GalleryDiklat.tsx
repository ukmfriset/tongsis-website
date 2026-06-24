"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif andalanmu
import imageUrlBuilder from "@sanity/image-url"; // Library builder bawaan dari node_modules

// Solusi Mutlak: Membuat fungsi urlFor mandiri di dalam komponen agar anti-eror linting/path
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface GalleryItem {
  label: string;
  aksen: "orange" | "brown";
  gambar?: any; // Referensi gambar dari Sanity cloud
  warna?: string; // Fallback gradasi lokal
}

// Data default bawaan asli kamu (Akan muncul selama database Sanity kosong)
const defaultPhotos: GalleryItem[] = [
  { label: "Pembukaan TONGSIS", warna: "from-[#F27405]/10 to-[#F27405]/5", aksen: "orange" },
  { label: "Sesi Materi", warna: "from-[#A6691F]/10 to-[#A6691F]/5", aksen: "brown" },
  { label: "Outbound", warna: "from-[#F27405]/10 to-[#A6691F]/5", aksen: "orange" },
  { label: "Games & Ice Breaking", warna: "from-[#A6691F]/10 to-[#F27405]/5", aksen: "brown" },
  { label: "Malam Keakraban", warna: "from-[#F27405]/10 to-[#F27405]/5", aksen: "orange" },
  { label: "Pelantikan Anggota", warna: "from-[#A6691F]/10 to-[#A6691F]/5", aksen: "brown" },
];

export default function GalleryDiklat() {
  const [photos, setPhotos] = useState<GalleryItem[]>(defaultPhotos);

  // Mengambil data dari Sanity secara dinamis
  useEffect(() => {
    async function fetchGallery() {
      try {
        const query = `*[_type == "gallerydiklat"]{ label, aksen, gambar }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setPhotos(data);
        }
      } catch (error) {
        console.error("Gagal memuat data dokumentasi diklat dari Sanity:", error);
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
            Dokumentasi
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Sekilas Kegiatan TONGSIS
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Berbagai momen pembelajaran, kebersamaan, dan pengembangan diri yang menjadi bagian dari perjalanan peserta TONGSIS.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((item, index) => {
            // Tentukan gradasi warna default berdasarkan pilihan aksen kartu
            const fallbackGradient = item.warna 
              ? item.warna 
              : item.aksen === "orange" 
                ? "from-[#F27405]/10 to-[#F27405]/5" 
                : "from-[#A6691F]/10 to-[#A6691F]/5";

            return (
              <div
                key={index}
                className={`group relative aspect-[4/3] rounded-[2rem] bg-white border border-gray-100 overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:-translate-y-2
                  ${item.aksen === "orange"
                    ? "hover:border-[#F27405]/30 hover:shadow-[0_20px_40px_-15px_rgba(242,116,5,0.12)]"
                    : "hover:border-[#A6691F]/30 hover:shadow-[0_20px_40px_-15px_rgba(166,105,31,0.12)]"
                  }`}
              >
                {/* JIKA FOTO DI UPLOAD, MUNCULKAN GAMBARNYA. JIKA BELUM, MUNCULKAN GRADASI ESTETIK */}
                {item.gambar ? (
                  <img
                    src={urlFor(item.gambar).url()}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} transition-transform duration-700 group-hover:scale-110`}></div>
                )}
                
                {/* Gradient Overlay Gelap Arang untuk Keterbacaan Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/20 to-transparent opacity-80 transition-opacity group-hover:opacity-70 z-10"></div>
                
                {/* Icon Kamera Minimalis */}
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

                {/* Label Judul Foto */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-extrabold text-white tracking-wide block">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-12 font-bold uppercase tracking-wider">
          *Foto akan diupdate setelah pelaksanaan TONGSIS selesai
        </p>

      </div>
    </section>
  );
}