"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif andalanmu
import imageUrlBuilder from "@sanity/image-url";

// Solusi aman: menanam builder image url mandiri langsung di dalam komponen
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface SponsorItem {
  nama: string;
  logo?: any;
  linkKerjasama?: string;
}

// Data fallback bawaan asli kamu kalau data Sanity masih kosong
const defaultSponsors: SponsorItem[] = [
  { nama: "Sponsor 1" },
  { nama: "Sponsor 2" },
  { nama: "Sponsor 3" },
  { nama: "Sponsor 4" },
];

export default function SponsorDiklat() {
  const [sponsors, setSponsors] = useState<SponsorItem[]>(defaultSponsors);

  // Ambil data logo & nama sponsor dari Sanity
  useEffect(() => {
    async function fetchSponsors() {
      try {
        const query = `*[_type == "sponsordiklat"]{ nama, logo, linkKerjasama }`;
        const data = await client.fetch(query);
        
        if (data && data.length > 0) {
          setSponsors(data);
        }
      } catch (error) {
        console.error("Gagal memuat data sponsor diklat dari Sanity:", error);
      }
    }
    fetchSponsors();
  }, []);

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Didukung Oleh
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Mitra TONGSIS
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Terima kasih kepada seluruh mitra yang mendukung pelaksanaan TONGSIS.
          </p>
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sponsors.map((item, index) => {
            // Logika pembagian aksen selang-seling warna tim berdasarkan urutan list
            const isOrange = index % 2 === 0;
            const Wrapper = item.linkKerjasama ? "a" : "div";

            return (
              <Wrapper
                key={index}
                href={item.linkKerjasama || undefined}
                target={item.linkKerjasama ? "_blank" : undefined}
                rel={item.linkKerjasama ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden bg-white rounded-[2rem] border-2 border-dashed border-gray-200 p-6 flex items-center justify-center min-h-[7rem] transition-all duration-300 hover:-translate-y-1 cursor-pointer
                  ${isOrange 
                    ? "hover:border-[#F27405]/40 hover:shadow-[0_15px_35px_-10px_rgba(242,116,5,0.08)]" 
                    : "hover:border-[#A6691F]/40 hover:shadow-[0_15px_35px_-10px_rgba(166,105,31,0.08)]"
                  }`}
              >
                {/* Overlay Transparan saat Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${isOrange ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

                {/* LOGIKA MERENDER LOGO ATAU TEKS */}
                {item.logo ? (
                  <img
                    src={urlFor(item.logo).url()}
                    alt={item.nama}
                    className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                ) : (
                  <p className={`text-xs font-extrabold uppercase tracking-widest text-gray-300 transition-colors duration-300 relative z-10 text-center
                    ${isOrange ? "group-hover:text-[#F27405]" : "group-hover:text-[#A6691F]"}`}
                  >
                    Logo {item.nama}
                  </p>
                )}
              </Wrapper>
            );
          })}
        </div>

        {/* CTA Section / Tautan Kerjasama */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Tertarik menjadi mitra TONGSIS?{" "}
            <a 
              href="#" 
              className="ml-1 font-extrabold text-[#F27405] hover:text-[#A6691F] underline transition-colors"
            >
              Hubungi panitia untuk informasi kerja sama.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}