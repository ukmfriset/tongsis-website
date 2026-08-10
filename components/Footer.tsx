"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "../src/sanity/client"; // Jalur relatif akurat sesuai struktur foldermu
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/ukmfriset" },
  { icon: FaXTwitter, href: "https://www.x.com/ukmfriset" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@ukmfriset" },
  { icon: FaYoutube, href: "https://www.youtube.com/@ukmfriset" },
  { icon: FaFacebook, href: "https://www.facebook.com/ukmfriset" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/ukmfriset" },
];

export default function Footer() {
  const [tahunPelaksanaan, setTahunPelaksanaan] = useState<string>("2026");

  // Ambil data tahun pelaksanaan dari Sanity secara real-time
  useEffect(() => {
    async function fetchTahun() {
      try {
        const query = `*[_type == "siteSettings"][0]{ tahunPelaksanaan }`;
        const data = await client.fetch(query);
        if (data?.tahunPelaksanaan) {
          setTahunPelaksanaan(data.tahunPelaksanaan);
        }
      } catch (error) {
        console.error("Gagal mengambil data tahun untuk footer:", error);
      }
    }
    fetchTahun();
  }, []);

  return (
    <footer className="relative border-t border-gray-100 bg-white px-6 pt-20 pb-10 overflow-hidden">
      
      {/* Background Decorative Blobs (Orange FISIB & Cokelat Emas Riset) */}
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#F27405]/5 blur-[100px]"></div>
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#A6691F]/5 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3 border-b border-gray-100 pb-16">
          
          {/* Section 1: Logo & Branding */}
          <div>
            <div className="mb-6">
              <Image
                src="/semangat-berkarya.png" 
                alt="Logo UKM-F Riset"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </div>
            {/* REVISI DINAMIS: Menggunakan variabel tahunPelaksanaan dari Sanity */}
            <h3 className="text-xl font-extrabold text-[#0D0D0D]">TONGSIS {tahunPelaksanaan}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#8C8C8C] max-w-xs font-medium">
              Training of Good Skill of People to Imagination and Smarter — 
              UKM-F RISET FISIB UTM.
            </p>
          </div>

          {/* Section 2: Contact & Secretariat */}
          <div>
            <h4 className="font-extrabold text-[#0D0D0D] mb-4 text-sm uppercase tracking-wider">Info & Kontak</h4>
            <div className="space-y-3 text-sm text-[#0D0D0D]/80 font-medium">
              <p>Whatsapp: <span className="text-[#A6691F]">+62 851-6115-3723</span></p>
              <p>Email: <span className="text-[#A6691F]">halo@ukmfriset.or.id</span></p>
              <p className="pt-2 italic text-[#8C8C8C] font-normal">Fakultas Ilmu Sosial dan Ilmu Budaya<br/>Universitas Trunodjoyo Madura<br/>Jl. Raya Telang PO BOX 2 Kamal, Bangkalan</p>
            </div>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h4 className="font-extrabold text-[#0D0D0D] mb-4 text-sm uppercase tracking-wider">Ikuti Kami</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F2F2F2] text-[#0D0D0D]/60 hover:bg-[#F27405] hover:text-white hover:shadow-lg hover:shadow-[#F27405]/20 transition-all text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            {/* REVISI DINAMIS: Tahun dinamis diselaraskan ke dalam teks copyright */}
            TONGSIS © {tahunPelaksanaan} All Rights Reserved • Departemen Informasi dan Komunikasi • UKM-F Riset FISIB UTM
          </p>
        </div>
      </div>
    </footer>
  );
}