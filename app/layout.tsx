import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 1. Inisialisasi font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Mendefinisikan variabel CSS
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space", // Mendefinisikan variabel CSS
});

export const metadata: Metadata = {
  title: "TONGSIS 2026 — UKMF RISET FISIB UTM",
  description:
    "Training of Good Skill of People to Imagination and Smarter — Diklat Anggota Baru UKM-F Riset FISIB UTM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* 
       2. Terapkan variabel font ke tag <html> agar dapat 
       diakses oleh seluruh komponen di dalam aplikasi
    */
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      {/* 
          3. 'font-sans' akan merujuk ke Inter (diatur di globals.css)
          4. 'antialiased' memastikan teks terlihat halus di semua browser
      */}
      <body className="antialiased font-sans">
        <Navbar />
        <div className="pt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}