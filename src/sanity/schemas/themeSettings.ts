import { defineType, defineField } from 'sanity'

export const themeSettings = defineType({
  name: 'themeSettings',
  title: 'Pengaturan Tema & Font Global',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Konfigurasi',
      type: 'string',
      initialValue: 'Pengaturan Tampilan Utama Web',
      hidden: true,
    }),
    // --- GRUP WARNA ---
    defineField({
      name: 'accentFrom',
      title: 'Warna Utama (Aksen Awal Gradasi)',
      type: 'string',
      description: 'Masukkan kode HEX warna. Contoh: #F27405',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accentTo',
      title: 'Warna Sekunder (Aksen Akhir Gradasi)',
      type: 'string',
      description: 'Masukkan kode HEX warna. Contoh: #A6691F',
      validation: (Rule) => Rule.required(),
    }),
    // --- GRUP FONT BEBAS (Ubah Jadi Tipe String Biasa) ---
    defineField({
      name: 'fontHeading',
      title: 'Font Judul (Heading)',
      type: 'string',
      description: 'Ketik nama font dari Google Fonts secara persis. Contoh: Poppins, Oswald, Playfair Display',
      initialValue: 'Space Grotesk',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fontBody',
      title: 'Font Teks Biasa (Body)',
      type: 'string',
      description: 'Ketik nama font dari Google Fonts secara persis. Contoh: Roboto, Open Sans, Plus Jakarta Sans',
      initialValue: 'Inter',
      validation: (Rule) => Rule.required(),
    }),
  ],
})