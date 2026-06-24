"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif andalanmu

interface DresscodeItem {
  day: string;
  status: string;
  deskripsi: string;
  warna: "orange" | "brown";
}

// Data default bawaan asli kamu (Sistem Fallback)
const defaultDays: DresscodeItem[] = [
  { day: "Day 1", status: "Coming Soon", deskripsi: "Akan diumumkan setelah pendaftaran ditutup", warna: "orange" },
  { day: "Day 2", status: "Coming Soon", deskripsi: "Akan diumumkan setelah pendaftaran ditutup", warna: "brown" },
  { day: "Day 3", status: "Coming Soon", deskripsi: "Akan diumumkan setelah pendaftaran ditutup", warna: "orange" },
];

export default function DresscodeDiklat() {
  const [days, setDays] = useState<DresscodeItem[]>(defaultDays);

  // Mengambil informasi aturan pakaian dari Sanity
  useEffect(() => {
    async function fetchDresscode() {
      try {
        // Mengurutkan berdasarkan abjad/nama hari (Day 1, Day 2, dst)
        const query = `*[_type == "dresscodediklat"] | order(day asc){ day, status, deskripsi, warna }`;
        const data = await client.fetch(query);
        
        if (data && data.length > 0) {
          setDays(data);
        }
      } catch (error) {
        console.error("Gagal memuat data dresscode dari Sanity:", error);
      }
    }
    fetchDresscode();
  }, []);

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Persiapan
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Dresscode TONGSIS
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Informasi mengenai dresscode akan diumumkan setelah masa pendaftaran berakhir.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {days.map((item) => {
            const isOrange = item.warna === "orange";

            return (
              <div
                key={item.day}
                className={`group relative overflow-hidden bg-white rounded-[2rem] border-2 border-dashed p-10 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-2
                  ${isOrange 
                    ? "border-gray-200 hover:border-[#F27405]/40 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                    : "border-gray-200 hover:border-[#A6691F]/40 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"
                  }`}
              >
                {/* Overlay Transparan saat Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${isOrange ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

                {/* Wadah Ikon Minimalis Outline-Only */}
                <div className={`w-16 h-16 rounded-3xl border-2 bg-transparent flex items-center justify-center transition-all duration-300
                  ${isOrange 
                    ? "border-[#F27405]/15 group-hover:border-[#F27405] group-hover:bg-[#F27405]/5" 
                    : "border-[#A6691F]/15 group-hover:border-[#A6691F] group-hover:bg-[#A6691F]/5"
                  }`}
                >
                  <span className="text-3xl">👕</span>
                </div>

                <h3 className="font-extrabold text-xl text-[#0D0D0D] relative z-10">{item.day}</h3>
                
                {/* Badge Status Outline-Only Minimalis */}
                <span className={`text-[10px] font-extrabold border bg-transparent px-4 py-1.5 rounded-full tracking-wider uppercase relative z-10 transition-all duration-300
                  ${isOrange 
                    ? "border-[#F27405]/30 text-[#F27405]" 
                    : "border-[#A6691F]/20 text-[#A6691F] group-hover:border-[#A6691F]/40"
                  }`}
                >
                  {item.status}
                </span>

                <p className="text-sm text-gray-400 mt-2 font-medium relative z-10">
                  {item.deskripsi}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}