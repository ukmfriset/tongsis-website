"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import { client } from "@/src/sanity/client"; // Menggunakan jalur absolut root alias andalanmu
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudioPage = pathname.startsWith("/studio");

  // State default (Warna awal bawaan aslimu & Tahun default)
  const [theme, setTheme] = useState({
    accentFrom: "#F27405",
    accentTo: "#A6691F",
    fontHeading: "Space Grotesk",
    fontBody: "Inter"
  });
  
  const [tahunTampil, setTahunTampil] = useState("2026");

  // Ambil konfigurasi visual & pengaturan utama dari Sanity secara bersamaan
  useEffect(() => {
    async function fetchSanityData() {
      try {
        // Ambil data tema dinamis
        const themeQuery = `*[_type == "themeSettings"][0]{ accentFrom, accentTo, fontHeading, fontBody }`;
        const themeData = await client.fetch(themeQuery);
        if (themeData) {
          setTheme({
            accentFrom: themeData.accentFrom || "#F27405",
            accentTo: themeData.accentTo || "#A6691F",
            fontHeading: themeData.fontHeading || "Space Grotesk",
            fontBody: themeData.fontBody || "Inter"
          });
        }

        // Ambil data tahun pelaksanaan dari pengaturan utama website (siteSettings)
        const settingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]{ tahunPelaksanaan }`;
        const settingsData = await client.fetch(settingsQuery);
        if (settingsData?.tahunPelaksanaan) {
          setTahunTampil(settingsData.tahunPelaksanaan);
        }
      } catch (error) {
        console.error("Gagal memuat data dinamis dari Sanity:", error);
      }
    }
    fetchSanityData();
  }, []);

  // Ubah spasi jadi tanda + untuk format URL Google Fonts
  const formatFontName = (name: string) => name.replace(/\s+/g, "+");

  return (
    <html lang="id">
      <head>
        {/* ─── TITLE MAKSIMAL KAPITAL SESUAI PILIHANMU ─── */}
        <title>{`TONGSIS ${tahunTampil} - UKM-F RISET FISIB UTM`}</title>
        <meta name="description" content={`Training of Good Skill of People to Imagination and Smarter ${tahunTampil} - Ruang belajar riset, berdiskusi, dan berkarya bersama UKM-F RISET FISIB UTM.`} />
        <link rel="icon" href="/favicon.ico" />

        {/* Mengunduh font Google secara dinamis berdasarkan pilihan di Sanity */}
        <link
          href={`https://fonts.googleapis.com/css2?family=${formatFontName(theme.fontBody)}:wght@300;400;500;600;700&family=${formatFontName(theme.fontHeading)}:wght@600;700;800&display=swap`}
          rel="stylesheet"
        />
        
        {/* Menyuntikkan warna HEX & nama font langsung ke variabel CSS root secara real-time */}
        <style>{`
          :root {
            --accent-from: ${theme.accentFrom} !important;
            --accent-to: ${theme.accentTo} !important;
          }
          body, p, a, span, li, button, input, textarea {
            font-family: '${theme.fontBody}', sans-serif !important;
          }
          h1, h2, h3, h4, h5, h6, .font-heading {
            font-family: '${theme.fontHeading}', sans-serif !important;
          }
        `}</style>
      </head>
      
      <body className="antialiased min-h-screen flex flex-col">
        {!isStudioPage && <Navbar />}
        <main className="flex-grow">{children}</main>
        {!isStudioPage && <Footer />}
      </body>
    </html>
  );
}