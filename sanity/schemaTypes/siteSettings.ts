import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Pengaturan Utama Website",
  type: "document",
  fields: [
    defineField({
      name: "tahunPelaksanaan",
      title: "Tahun Pelaksanaan TONGSIS",
      type: "string",
      initialValue: "2026",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkOprec",
      title: "Link Utama Pendaftaran Open Recruitment",
      type: "url",
      description: "Satu link untuk semua tombol Oprec (Navbar, Hero, & CTA Tengah Halaman)",
    }),
    defineField({
      name: "linkDiklat",
      title: "Link Utama Pendaftaran Diklat TONGSIS",
      type: "url",
      description: "Satu link untuk semua tombol Diklat (Navbar, Hero, & CTA Tengah Halaman)",
    }),
  ],
});