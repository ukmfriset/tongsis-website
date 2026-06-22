import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space", 
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
    /* PERBAIKAN SAKTI TAILWIND v4: 
       1. Menambahkan 'h-full' pada html agar window viewports terbaca 100% oleh browser.
       2. Mengubah 'min-h-screen' pada body menjadi 'min-h-full' agar pembagian flexbox tidak kaku. */
    <html 
      lang="id" 
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased font-sans bg-background text-foreground min-h-full flex flex-col">
        {/* Navbar sticky */}
        <Navbar />
        
        {/* PERBAIKAN: Menambahkan 'flex flex-col w-full' agar children di dalamnya 
            bisa mengeksekusi perhitungan unit 'vh' secara presisi dari atas sampai bawah */}
        <div className="pt-0 flex-1 flex flex-col w-full">
          {children}
        </div>
        
        <Footer />

        {/* Tombol Back to Top */}
        <BackToTop />
      </body>
    </html>
  );
}