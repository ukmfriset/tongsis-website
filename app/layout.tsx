"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import { client } from "../src/sanity/client"; // Jalur relatif akurat andalanmu
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudioPage = pathname.startsWith("/studio");

  // State default (Warna awal bawaan aslimu)
  const [theme, setTheme] = useState({
    accentFrom: "#F27405",
    accentTo: "#A6691F",
    fontHeading: "Space Grotesk",
    fontBody: "Inter"
  });

  // Ambil konfigurasi visual dari Sanity
  useEffect(() => {
    async function fetchTheme() {
      try {
        const query = `*[_type == "themeSettings"][0]{ accentFrom, accentTo, fontHeading, fontBody }`;
        const data = await client.fetch(query);
        if (data) {
          setTheme({
            accentFrom: data.accentFrom || "#F27405",
            accentTo: data.accentTo || "#A6691F",
            fontHeading: data.fontHeading || "Space Grotesk",
            fontBody: data.fontBody || "Inter"
          });
        }
      } catch (error) {
        console.error("Gagal memuat tema dinamis dari Sanity:", error);
      }
    }
    fetchTheme();
  }, []);

  // Ubah spasi jadi tanda + untuk format URL Google Fonts
  const formatFontName = (name: string) => name.replace(/\s+/g, "+");

  return (
    <html lang="id">
      <head>
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