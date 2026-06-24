"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "../../src/sanity/client"; // Jalur relatif andalanmu

interface CTAData {
  linkPendaftaran: string;
  cp1_nama: string;
  cp1_nomor: string;
  cp1_link: string;
  cp2_nama: string;
  cp2_nomor: string;
  cp2_link: string;
}

// Data default bawaan asli kamu (System Fallback)
const defaultCTA: CTAData = {
  linkPendaftaran: "#",
  cp1_nama: "Dinda",
  cp1_nomor: "0857-3019-7634",
  cp1_link: "https://wa.me/6285730197634",
  cp2_nama: "Roicha",
  cp2_nomor: "0882-0091-0179",
  cp2_link: "https://wa.me/6288200910179",
};

export default function CTADiklat() {
  const [cta, setCta] = useState<CTAData>(defaultCTA);

  // Ambil data tautan tunggal dari dokumen ID 'ctadiklat'
  useEffect(() => {
    async function fetchCTAData() {
      try {
        const query = `*[_type == "ctadiklat" && _id == "ctadiklat"][0]{
          linkPendaftaran,
          cp1_nama,
          cp1_nomor,
          cp1_link,
          cp2_nama,
          cp2_nomor,
          cp2_link
        }`;
        const data = await client.fetch(query);
        if (data) {
          setCta(data);
        }
      } catch (error) {
        console.error("Gagal memuat data tautan CTA Diklat dari Sanity:", error);
      }
    }
    fetchCTAData();
  }, []);

  // Memetakan data CP agar bisa di-looping selang-seling warna dengan estetik
  const contactPersons = [
    { nama: cta.cp1_nama, nomor: cta.cp1_nomor, link: cta.cp1_link, warna: "orange" },
    { nama: cta.cp2_nama, nomor: cta.cp2_nomor, link: cta.cp2_link, warna: "brown" },
  ];

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">
        
        {/* Main CTA Box - Gradasi Orange FISIB ke Cokelat Emas Riset */}
        <div className="rounded-[2rem] bg-gradient-to-br from-[#F27405] to-[#A6691F] p-12 md:p-16 text-center shadow-2xl shadow-[#F27405]/15">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Siap Melanjutkan Perjalananmu?
          </h2>
          <p className="mt-6 text-white/90 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Kamu telah menyelesaikan satu tahap penting. Kini saatnya melangkah ke tahap berikutnya dan menjadi bagian dari UKM-F Riset FISIB UTM.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cta.linkPendaftaran}
              className="rounded-full bg-white px-10 py-4 text-sm font-extrabold text-[#F27405] transition-all hover:scale-105 hover:shadow-lg hover:shadow-black/10"
            >
              Daftar TONGSIS Sekarang →
            </Link>
            <Link
              href="/open-recruitment"
              className="rounded-full border-2 border-white/30 px-10 py-4 text-sm font-extrabold text-white transition-all hover:bg-white/10"
            >
              ← Kembali ke Halaman Open Recruitment
            </Link>
          </div>
        </div>

        {/* Contact Person Box - Gaya Minimalis Outline-Only */}
        <div className="mt-8 bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm text-center">
          <p className="text-gray-500 text-xs font-bold mb-6 uppercase tracking-widest">
            Ada Pertanyaan? Hubungi narahubung resmi kami:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {contactPersons.map((cp, idx) => (
              <a
                key={idx}
                href={cp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-1 p-4 rounded-2xl border border-gray-100 bg-transparent transition-all min-w-[12rem]
                  ${cp.warna === "orange" 
                    ? "hover:border-[#F27405] hover:bg-[#F27405]/5" 
                    : "hover:border-[#A6691F] hover:bg-[#A6691F]/5"
                  }`}
              >
                <span className="font-extrabold text-[#0D0D0D] transition-colors">{cp.nama}</span>
                <span className={`text-xs text-gray-500 font-bold transition-colors
                  ${cp.warna === "orange" ? "group-hover:text-[#F27405]" : "group-hover:text-[#A6691F]"}`}
                >
                  {cp.nomor}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}