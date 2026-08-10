"use client";

import { useState, useEffect } from "react";
import { client } from "../../src/sanity/client"; // Jalur relatif akurat andalanmu

type OprecStatus = "upcoming" | "open" | "passed";

interface StatusDetail {
  badge: string;
  badgeStyle: string;
  btnStyle: string;
  btnLabel: string;
  link: string | null;
  info: string;
  borderStyle: string;
  hoverShadow: string;
}

export default function AnnouncementOprec() {
  // State dinamis untuk menampung status dan link dari Sanity
  const [currentStatus, setCurrentStatus] = useState<OprecStatus>("upcoming");
  const [externalLink, setExternalLink] = useState<string | null>(null);

  // Ambil data pengaturan pengumuman dari Sanity
  useEffect(() => {
    async function fetchAnnouncementSettings() {
      try {
        // Ambil data dokumen pertama bertipe 'announcement'
        const query = `*[_type == "announcement"][0]{ status, linkPengumuman }`;
        const data = await client.fetch(query);
        
        if (data) {
          if (data.status) setCurrentStatus(data.status as OprecStatus);
          if (data.linkPengumuman) setExternalLink(data.linkPengumuman);
        }
      } catch (error) {
        console.error("Gagal mengambil data pengumuman dari Sanity:", error);
      }
    }
    fetchAnnouncementSettings();
  }, []);

  const statusConfig: Record<OprecStatus, StatusDetail> = {
    upcoming: {
      badge: "Belum Diumumkan",
      badgeStyle: "border-gray-300 text-gray-500",
      btnStyle: "bg-gray-100 text-gray-400 cursor-not-allowed",
      btnLabel: "Belum Diumumkan",
      link: null,
      info: "Pengumuman akan tersedia setelah seluruh tahapan seleksi selesai dilaksanakan.",
      borderStyle: "border-gray-200/60",
      hoverShadow: "hover:border-gray-300/80 hover:shadow-xl hover:shadow-gray-400/5",
    },
    open: {
      badge: "Sudah Diumumkan",
      badgeStyle: "border-[#F27405]/30 text-[#F27405]",
      btnStyle: "bg-gradient-to-r from-[#F27405] to-[#A6691F] text-white shadow-lg shadow-[#F27405]/20 hover:scale-105 active:scale-95",
      btnLabel: "Lihat Pengumuman",
      // Menggunakan link dinamis dari Sanity, fallback ke link asal jika kosong
      link: externalLink || "https://bit.ly/pengumuman-oprec-riset",
      info: "Pengumuman sudah tersedia! Klik tombol di bawah untuk melihat daftar calon anggota baru yang diterima.",
      borderStyle: "border-[#F27405]/10",
      hoverShadow: "hover:border-[#F27405]/30 hover:shadow-xl hover:shadow-[#F27405]/12",
    },
    passed: {
      badge: "Sudah Selesai",
      badgeStyle: "border-gray-300 text-gray-500",
      btnStyle: "bg-gray-100 text-gray-400 cursor-not-allowed",
      btnLabel: "Pendaftaran Ditutup",
      link: null,
      info: "Periode open recruitment ini sudah berakhir. Sampai jumpa di batch berikutnya!",
      borderStyle: "border-gray-200/60",
      hoverShadow: "hover:border-gray-300/80 hover:shadow-xl hover:shadow-gray-400/5",
    },
  };

  const config = statusConfig[currentStatus];

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
          Hasil Seleksi
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
          Pengumuman Peserta Diterima
        </h2>

        {/* Card Announcement */}
        <div className={`mt-12 bg-white rounded-[2rem] border-2 p-10 transition-all duration-500 ${config.borderStyle} ${config.hoverShadow}`}>
          
          {/* Badge Status Minimalis (Outline-Only) */}
          <span className={`inline-flex items-center gap-2 text-xs font-extrabold border bg-transparent px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest ${config.badgeStyle}`}>
            <span className={`h-2 w-2 rounded-full ${currentStatus === "open" ? "bg-[#F27405] animate-pulse" : "bg-gray-400"}`}></span>
            {config.badge}
          </span>

          <p className="text-gray-600 leading-relaxed mb-10 max-w-md mx-auto font-medium">
            {config.info}
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            {config.link ? (
              <a
                href={config.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-extrabold transition-all duration-300 ${config.btnStyle}`}
              >
                {config.btnLabel} <span>→</span>
              </a>
            ) : (
              <button
                disabled
                className={`inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-extrabold transition-all duration-300 ${config.btnStyle}`}
              >
                🔒 {config.btnLabel}
              </button>
            )}
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500 font-bold uppercase tracking-wider">
          Untuk informasi lebih lanjut, silakan menghubungi narahubung yang tersedia.
        </p>
      </div>
    </section>
  );
}