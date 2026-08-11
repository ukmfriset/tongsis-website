import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-06-23", // Menggunakan format ISO tanggal sekarang
  useCdn: false, // Set false saat production agar data ter-update instant tanpa delay cache
});