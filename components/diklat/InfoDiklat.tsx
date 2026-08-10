"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif andalanmu

interface InfoItem {
  icon: string;
  judul: string;
  warna: "orange" | "brown";
  items: string[];
}

// Data default bawaan asli kamu (Sistem Fallback)
const defaultInfo: InfoItem[] = [
  {
    icon: "💰",
    judul: "Pembayaran",
    warna: "orange",
    items: [
      "Biaya pendaftaran: Rp XX.XXX",
      "Pembayaran melalui rekening panitia",
      "Konfirmasi via WhatsApp",
      "Batas bayar: Akan Diumumkan",
    ],
  },
  {
    icon: "🕐",
    judul: "Waktu",
    warna: "brown",
    items: [
      "Pra Diklat: Akan Diumumkan",
      "Diklat Utama: Akan Diumumkan",
      "Pelantikan: Akan Diumumkan",
      "Durasi: 3 hari 2 malam",
    ],
  },
  {
    icon: "📍",
    judul: "Tempat",
    warna: "orange",
    items: [
      "Lokasi: TBA (akan diumumkan)",
      "Area: Sekitar Bangkalan, Madura",
      "Transportasi: Mandiri",
      "Update info via panitia",
    ],
  },
];

export default function InfoDiklat() {
  const [info, setInfo] = useState<InfoItem[]>(defaultInfo);

  // Ambil rincian info pelaksanaan dari Sanity secara real-time
  useEffect(() => {
    async function fetchInfoDiklat() {
      try {
        const query = `*[_type == "infodiklat"]{ icon, judul, warna, items }`;
        const data = await client.fetch(query);
        
        if (data && data.length > 0) {
          setInfo(data);
        }
      } catch (error) {
        console.error("Gagal memuat data informasi pelaksanaan dari Sanity:", error);
      }
    }
    fetchInfoDiklat();
  }, []);

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Info Penting
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Informasi Pelaksanaan
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Pembayaran, Waktu, dan Lokasi
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.map((item) => {
            const isOrange = item.warna === "orange";

            return (
              <div 
                key={item.judul} 
                className={`group relative overflow-hidden bg-white rounded-[2rem] border p-8 transition-all duration-300 hover:-translate-y-2
                  ${isOrange 
                    ? "border-gray-100 hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                    : "border-gray-100 hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"
                  }`}
              >
                {/* Overlay Transparan saat Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${isOrange ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

                {/* Header Kartu: Ikon & Judul */}
                <div className="relative z-10 flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl border-2 bg-transparent flex items-center justify-center text-2xl transition-all duration-300
                    ${isOrange 
                      ? "border-[#F27405]/20 text-[#F27405] group-hover:border-[#F27405] group-hover:bg-[#F27405]/5" 
                      : "border-[#A6691F]/20 text-[#A6691F] group-hover:border-[#A6691F] group-hover:bg-[#A6691F]/5"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-extrabold text-[#0D0D0D] text-lg">{item.judul}</h3>
                </div>
                
                {/* Daftar Item Info */}
                <div className="relative z-10 flex flex-col gap-4">
                  {item.items && item.items.map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`mt-1.5 text-[10px] transition-colors duration-300
                        ${isOrange ? "text-[#F27405]" : "text-[#A6691F]"}`}
                      >
                        ●
                      </span>
                      <p className="text-sm text-gray-500 leading-relaxed font-semibold">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}