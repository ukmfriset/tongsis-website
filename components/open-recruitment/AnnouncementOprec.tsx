"use client";

import { useState } from "react";

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
  // Ubah status di sini untuk testing ("upcoming" | "open" | "passed")
  const status = "upcoming" as OprecStatus;

  const statusConfig: Record<OprecStatus, StatusDetail> = {
    upcoming: {
      badge: "Belum Diumumkan",
      badgeStyle: "border-gray-300 text-gray-500",
      btnStyle: "bg-gray-100 text-gray-400 cursor-not-allowed",
      btnLabel: "Belum Diumumkan",
      link: null,
      info: "Pengumuman akan dibuka setelah seluruh tahap seleksi selesai. Pantengin terus halaman ini — jangan sampai ketinggalan!",
      borderStyle: "border-gray-200/60",
      hoverShadow: "hover:border-gray-300/80 hover:shadow-xl hover:shadow-gray-400/5",
    },
    open: {
      badge: "Sudah Diumumkan",
      badgeStyle: "border-[#F27405]/30 text-[#F27405]",
      btnStyle: "bg-gradient-to-r from-[#F27405] to-[#A6691F] text-white shadow-lg shadow-[#F27405]/20 hover:scale-105 active:scale-95",
      btnLabel: "Lihat Pengumuman",
      link: "https://bit.ly/pengumuman-oprec-riset",
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

  const config = statusConfig[status];

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
            <span className={`h-2 w-2 rounded-full ${status === "open" ? "bg-[#F27405] animate-pulse" : "bg-gray-400"}`}></span>
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
          Untuk pertanyaan lebih lanjut, silakan hubungi narahubung resmi kami.
        </p>
      </div>
    </section>
  );
}