import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Pengaturan Utama Website",
  type: "document",
  fields: [
    // ══════════════════════════════════════════════════════════════
    // 1. GLOBAL / ALL SECTIONS
    // ══════════════════════════════════════════════════════════════
    defineField({
      name: "tahunPelaksanaan",
      title: "Tahun Pelaksanaan TONGSIS",
      type: "string",
      initialValue: "2026",
      validation: (Rule) => Rule.required(),
      fieldset: "global",
    }),

    // ══════════════════════════════════════════════════════════════
    // 2. OPEN RECRUITMENT PAGE
    // ══════════════════════════════════════════════════════════════
    defineField({
      name: "linkOprec",
      title: "Link Pendaftaran Open Recruitment",
      type: "url",
      fieldset: "oprec",
    }),
    defineField({
      name: "statusPengumumanOprec",
      title: "Status Pengumuman Kelulusan Oprec",
      type: "string",
      options: { list: ["Belum Dirilis", "Sudah Dirilis"] },
      initialValue: "Belum Dirilis",
      fieldset: "oprec",
    }),
    defineField({
      name: "filePengumumanOprec",
      title: "File/Link Pengumuman Peserta Diterima",
      type: "file",
      description: "Upload PDF Hasil Seleksi atau Link Pengumuman",
      fieldset: "oprec",
    }),
    defineField({
      name: "syaratOprec",
      title: "Syarat & Ketentuan Oprec",
      type: "array",
      of: [{ type: "string" }],
      fieldset: "oprec",
    }),
    defineField({
      name: "timelineOprec",
      title: "Timeline Oprec",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "agenda", title: "Nama Agenda", type: "string" },
            { name: "tanggal", title: "Tanggal", type: "string" },
            { name: "status", title: "Status", type: "string", options: { list: ["Selesai", "Berlangsung", "Mendatang"] } }
          ]
        }
      ],
      fieldset: "oprec",
    }),
    defineField({
      name: "juaraRiset",
      title: "Daftar Juara / Prestasi Riset",
      description: "Untuk dipajang di halaman Oprec sebagai penarik minat",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "namaJuara", title: "Prestasi / Juara Keberapa", type: "string", description: "Contoh: Juara 1 KTI Nasional" },
            { name: "namaTim", title: "Nama Mahasiswa / Tim", type: "string" },
            { name: "event", title: "Nama Event / Lomba", type: "string" }
          ]
        }
      ],
      fieldset: "oprec",
    }),
    defineField({
      name: "testimoniOprec",
      title: "Testimoni Alumni Oprec",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "nama", title: "Nama Alumni", type: "string" },
            { name: "angkatan", title: "Angkatan / Jabatan", type: "string" },
            { name: "pesan", title: "Pesan Testimoni", type: "text" },
            { name: "foto", title: "Foto", type: "image", options: { hotspot: true } }
          ]
        }
      ],
      fieldset: "oprec",
    }),
    defineField({
      name: "galleryOprec",
      title: "Gallery Foto Kegiatan Oprec",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      fieldset: "oprec",
    }),
    defineField({
      name: "cpOprec",
      title: "Contact Person Oprec",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "nama", title: "Nama Panitia", type: "string" },
            { name: "nomorWa", title: "Nomor WhatsApp", type: "string", description: "Contoh: 085730197634" }
          ]
        }
      ],
      fieldset: "oprec",
    }),

    // ══════════════════════════════════════════════════════════════
    // 3. DIKLAT PAGE
    // ══════════════════════════════════════════════════════════════
    defineField({
      name: "linkDiklat",
      title: "Link Pendaftaran Diklat",
      type: "url",
      fieldset: "diklat",
    }),
    defineField({
      name: "infoPentingDiklat",
      title: "Informasi Penting Diklat",
      description: "Catatan krusial/pengumuman mendadak untuk peserta diklat",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "diklat",
    }),
    defineField({
      name: "dresscodeDiklat",
      title: "Ketentuan Dresscode",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "hari", title: "Hari / Sesi", type: "string", description: "Contoh: Hari Pertama (Indoor)" },
            { name: "ketentuan", title: "Aturan Pakaian", type: "text" }
          ]
        }
      ],
      fieldset: "diklat",
    }),
    defineField({
      name: "timelineDiklat",
      title: "Timeline Diklat",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "agenda", title: "Nama Agenda", type: "string" },
            { name: "tanggal", title: "Tanggal & Waktu", type: "string" },
            { name: "status", title: "Status", type: "string", options: { list: ["Selesai", "Berlangsung", "Mendatang"] } }
          ]
        }
      ],
      fieldset: "diklat",
    }),
    defineField({
      name: "testimoniDiklat",
      title: "Testimoni Peserta Diklat Terdahulu",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "nama", title: "Nama", type: "string" },
            { name: "kesan", title: "Kesan & Pesan Ikut Diklat", type: "text" }
          ]
        }
      ],
      fieldset: "diklat",
    }),
    defineField({
      name: "sponsors",
      title: "Logo Sponsor & Partners",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "namaSponsor", title: "Nama Sponsor", type: "string" },
            { name: "logo", title: "Logo", type: "image", options: { hotspot: true } }
          ]
        }
      ],
      fieldset: "diklat",
    }),
    defineField({
      name: "cpDiklat",
      title: "Contact Person Diklat",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "nama", title: "Nama Panitia", type: "string" },
            { name: "nomorWa", title: "Nomor WhatsApp", type: "string" }
          ]
        }
      ],
      fieldset: "diklat",
    }),
  ],

  // Grouping menu/tab di dalam dashboard biar gak kepanjangan ke bawah
  fieldsets: [
    { name: "global", title: "🌍 Umum (All Sections)" },
    { name: "oprec", title: "📣 Halaman Open Recruitment" },
    { name: "diklat", title: "🎓 Halaman Diklat" },
  ],
});