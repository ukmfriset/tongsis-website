import { client } from "@/src/sanity/client";
import { Metadata } from "next";

// Fungsi dinamis untuk generate judul tab browser dari Sanity siteSettings
export async function generateMetadata(): Promise<Metadata> {
  try {
    // Mengambil nilai tahunPelaksanaan secara real-time dari skema siteSettings kamu
    const query = `*[_type == "siteSettings" && _id == "siteSettings"][0]{ tahunPelaksanaan }`;
    const data = await client.fetch(query);
    
    // Ambil tahun dari Sanity, kalau kosong otomatis fallback ke "2026"
    const tahun = data?.tahunPelaksanaan || "2026";

    return {
      title: `TONGSIS ${tahun} - UKM-F Riset FISIB UTM`,
      description: `Training of Good Skill of People to Imagination and Smarter ${tahun} - Ruang belajar riset, berdiskusi, dan berkarya bersama UKM-F Riset FISIB UTM.`,
      icons: {
        icon: "/favicon.ico", // Mengarah ke gambar logo di folder public/favicon.ico
      },
    };
  } catch (error) {
    console.error("Gagal mengambil metadata dari Sanity:", error);
    // Fallback darurat jika koneksi Sanity bermasalah saat build/request
    return {
      title: "TONGSIS 2026 - UKM-F RISET FISIB UTM",
      description: "Training of Good Skill of People to Imagination and Smarter - UKM-F Riset FISIB UTM",
      icons: {
        icon: "/favicon.ico",
      },
    };
  }
}