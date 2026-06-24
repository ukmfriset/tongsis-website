"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif akurat andalanmu

interface DiklatStep {
  no: string;
  judul: string;
  tanggal: string;
  deskripsi: string;
  status: "aktif" | "akan-datang";
  warna: "orange" | "brown";
}

// Data default bawaan asli kamu (Sistem Fallback)
const defaultSteps: DiklatStep[] = [
  {
    no: "01",
    judul: "Pendaftaran TONGSIS",
    tanggal: "Akan Diumumkan",
    deskripsi: "Peserta yang dinyatakan lolos open recruitment dapat melanjutkan dengan mengisi formulir pendaftaran TONGSIS.",
    status: "aktif",
    warna: "orange",
  },
  {
    no: "02",
    judul: "Pra Diklat",
    tanggal: "Akan Diumumkan",
    deskripsi: "Rangkaian kegiatan persiapan yang membantu peserta mengenal teknis dan agenda kegiatan sebelum diklat utama berlangsung.",
    status: "akan-datang",
    warna: "brown",
  },
  {
    no: "03",
    judul: "Diklat TONGSIS",
    tanggal: "Akan Diumumkan",
    deskripsi: "Kegiatan inti yang berisi pembekalan materi, pengembangan karakter, kegiatan kelompok, dan pelantikan anggota baru.",
    status: "akan-datang",
    warna: "brown",
  },
];

export default function TimelineDiklat() {
  const [steps, setSteps] = useState<DiklatStep[]>(defaultSteps);

  // Ambil data alur pendaftaran diklat dari Sanity secara real-time
  useEffect(() => {
    async function fetchDiklatTimeline() {
      try {
        // Diurutkan berdasarkan nomor urut (01, 02, dst) secara ascending
        const query = `*[_type == "timelinediklat"] | order(no asc) {
          no,
          judul,
          tanggal,
          deskripsi,
          status,
          warna
        }`;
        const data = await client.fetch(query);
        
        if (data && data.length > 0) {
          setSteps(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data timeline diklat dari Sanity:", error);
      }
    }
    fetchDiklatTimeline();
  }, []);

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Tahapan
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Tiga Tahap Menuju Keanggotaan Resmi
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto leading-relaxed font-medium">
            Berikut rangkaian kegiatan yang akan kamu ikuti sebelum resmi menjadi anggota UKM-F Riset.
          </p>
        </div>

        {/* List Vertikal */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div 
              key={step.no} 
              className={`group relative overflow-hidden bg-white p-8 rounded-[2rem] border transition-all duration-300
                ${step.status === "aktif" 
                  ? "border-[#F27405]/40 shadow-xl shadow-[#F27405]/5" 
                  : "border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] hover:border-gray-200"
                }`}
            >
              {/* Overlay halus untuk kartu aktif saat di-hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${step.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex gap-4 items-start">
                  {/* Nomor Urut (Kotak Minimalis) */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-black text-lg transition-all duration-300 border-2
                    ${step.status === "aktif" 
                      ? "bg-[#F27405] border-[#F27405] text-white shadow-md shadow-[#F27405]/10" 
                      : "bg-transparent border-gray-200 text-gray-400 group-hover:border-gray-300"
                    }`}
                  >
                    {step.no}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0D0D0D] text-lg">{step.judul}</h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed font-medium">{step.deskripsi}</p>
                  </div>
                </div>

                {/* Badge Tanggal Minimalis (Outline-Only) */}
                <div className="sm:text-right self-start sm:self-center">
                  <span className={`text-[11px] font-extrabold border bg-transparent px-3 py-1.5 rounded-full uppercase tracking-wider transition-all duration-300 whitespace-nowrap
                    ${step.warna === "orange" 
                      ? "border-[#F27405]/30 text-[#F27405]" 
                      : "border-[#A6691F]/20 text-[#A6691F] group-hover:border-[#A6691F]/40"
                    }`}
                  >
                    {step.tanggal}
                  </span>
                </div>
              </div>
              
              {/* Status Indicator Sinyal Berkedip untuk Tahap Aktif */}
              {step.status === "aktif" && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27405] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F27405]"></span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}