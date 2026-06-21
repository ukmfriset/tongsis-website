"use client";

import Link from "next/link";

type OprecStatus = "upcoming" | "open" | "passed";

interface StatusDetail {
  badge: string;
  badgeStyle: string;
  btnStyle: string;
  btnLabel: string;
  link: string | null;
  info: string;
  borderStyle: string;
}

export default function AnnouncementOprec() {
  const status = "upcoming" as OprecStatus;

  const statusConfig: Record<OprecStatus, StatusDetail> = {
    upcoming: {
      badge: "Belum Diumumkan",
      badgeStyle: "bg-gray-100 text-gray-500",
      btnStyle: "bg-gray-100 text-gray-400 cursor-not-allowed",
      btnLabel: "Belum Diumumkan",
      link: null,
      info: "Pengumuman akan dibuka setelah seluruh tahap seleksi selesai. Pantau terus halaman ini untuk update terbaru!",
      borderStyle: "border-gray-100",
    },
    open: {
      badge: "Sudah Diumumkan",
      badgeStyle: "bg-violet-50 text-violet-600",
      btnStyle: "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:scale-105 active:scale-95",
      btnLabel: "Lihat Pengumuman",
      link: "https://bit.ly/pengumuman-oprec-riset",
      info: "Pengumuman sudah tersedia! Klik tombol di bawah untuk melihat daftar calon anggota baru yang diterima.",
      borderStyle: "border-violet-200",
    },
    passed: {
      badge: "Sudah Selesai",
      badgeStyle: "bg-gray-100 text-gray-500",
      btnStyle: "bg-gray-100 text-gray-400 cursor-not-allowed",
      btnLabel: "Pendaftaran Ditutup",
      link: null,
      info: "Periode open recruitment ini sudah berakhir. Sampai jumpa di batch berikutnya!",
      borderStyle: "border-gray-100",
    },
  };

  const config = statusConfig[status];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
          Hasil Seleksi
        </span>
        <h2 className="mt-4 text-4xl font-extrabold text-[#0B1026] tracking-tight">
          Pengumuman Peserta Diterima
        </h2>

        {/* Card Announcement */}
        <div className={`mt-12 bg-white rounded-[2rem] border-2 p-10 transition-all duration-300 hover:shadow-xl ${config.borderStyle}`}>
          <span className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest ${config.badgeStyle}`}>
            <span className={`h-2 w-2 rounded-full ${status === "open" ? "bg-violet-500 animate-pulse" : "bg-gray-400"}`}></span>
            {config.badge}
          </span>

          <p className="text-gray-600 leading-relaxed mb-10 max-w-sm mx-auto">
            {config.info}
          </p>

          {config.link ? (
            <a
              href={config.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-bold transition-all duration-300 ${config.btnStyle}`}
            >
              {config.btnLabel} <span>→</span>
            </a>
          ) : (
            <button
              disabled
              className={`inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-bold ${config.btnStyle}`}
            >
              🔒 {config.btnLabel}
            </button>
          )}
        </div>

        <p className="mt-8 text-xs text-gray-400 font-medium">
          Untuk pertanyaan lebih lanjut, silakan hubungi narahubung resmi kami.
        </p>
      </div>
    </section>
  );
}