"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif akurat andalanmu

interface TimelineStep {
  no: string;
  judul: string;
  tanggal: string;
  deskripsi: string;
  warna: "orange" | "brown";
}

// Data default bawaan asli kamu (Sistem Fallback)
const defaultSteps: TimelineStep[] = [
  { no: "01", judul: "Pendaftaran", tanggal: "Akan Diumumkan", deskripsi: "Isi formulir pendaftaran secara online sesuai petunjuk yang tersedia.", warna: "orange" },
  { no: "02", judul: "Test Tulis", tanggal: "Akan Diumumkan", deskripsi: "Tes penalaran dan kemampuan kepenulisan untuk melihat cara berpikir dan kemampuan menyampaikan gagasan.", warna: "brown" },
  { no: "03", judul: "Wawancara", tanggal: "Akan Diumumkan", deskripsi: "Sesi diskusi untuk mengenal motivasi, minat, dan komitmen calon anggota.", warna: "orange" },
  { no: "04", judul: "Pengumuman", tanggal: "Akan Diumumkan", deskripsi: "Hasil seleksi akan diumumkan sesuai jadwal yang telah ditentukan.", warna: "brown" },
  { no: "05", judul: "Pendaftaran TONGSIS", tanggal: "Akan Diumumkan", deskripsi: "Peserta yang dinyatakan lolos dapat melanjutkan ke tahap berikutnya.", warna: "orange" },
  { no: "06", judul: "Pra Diklat", tanggal: "Akan Diumumkan", deskripsi: "Rangkaian kegiatan persiapan sebelum pelaksanaan Diklat TONGSIS.", warna: "brown" },
  { no: "07", judul: "Diklat TONGSIS", tanggal: "Akan Diumumkan", deskripsi: "Tahap pembinaan dan pengembangan kapasitas anggota baru.", warna: "orange" },
  { no: "08", judul: "Resmi Jadi Anggota", tanggal: "Akan Diumumkan", deskripsi: "Selamat datang di UKM-F Riset FISIB UTM.", warna: "brown" },
];

export default function TimelineOprec() {
  const [steps, setSteps] = useState<TimelineStep[]>(defaultSteps);

  // Ambil data alur timeline dari Sanity
  useEffect(() => {
    async function fetchTimeline() {
      try {
        // Mengurutkan berdasarkan nomor langkah agar urutannya presisi (01, 02, dst)
        const query = `*[_type == "timeline"] | order(no asc) {
          no,
          judul,
          tanggal,
          deskripsi,
          warna
        }`;
        const data = await client.fetch(query);
        
        if (data && data.length > 0) {
          setSteps(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data timeline dari Sanity:", error);
      }
    }
    fetchTimeline();
  }, []);

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">Tahapan Seleksi</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">Alur Open Recruitment 2026</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Proses seleksi dirancang untuk membantu kami mengenal calon anggota lebih dekat. Setiap tahap akan diumumkan secara terbuka dan transparan.
          </p>
        </div>

        {/* Grid Layout Fleksibel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.no} 
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1
                ${step.warna === "orange" 
                  ? "hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                  : "hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"
                }`}
            >
              {/* Overlay Transparan saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${step.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              <div className="relative z-10 flex justify-between items-center mb-6">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{step.no}</span>
                
                {/* Badge Status Tanggal Minimalis (Outline-Only) */}
                <span className={`text-[10px] font-extrabold border bg-transparent px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-300
                  ${step.warna === "orange" 
                    ? "border-[#F27405]/20 text-[#F27405] group-hover:border-[#F27405]" 
                    : "border-[#A6691F]/20 text-[#A6691F] group-hover:border-[#A6691F]"
                  }`}
                >
                  {step.tanggal}
                </span>
              </div>
              
              <h3 className="relative z-10 font-extrabold text-[#0D0D0D] text-lg mb-2">{step.judul}</h3>
              <p className="relative z-10 text-sm text-gray-500 leading-relaxed font-medium">{step.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}