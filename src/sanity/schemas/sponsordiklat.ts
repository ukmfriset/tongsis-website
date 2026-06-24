import { defineType, defineField } from 'sanity'

export const sponsordiklat = defineType({
  name: 'sponsordiklat',
  title: 'Daftar Sponsor & Mitra',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Perusahaan / Mitra',
      type: 'string',
      description: 'Contoh: Media Partner A, Toko Buku B',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Mitra',
      type: 'image',
      description: 'Unggah file logo transparan format PNG/SVG demi hasil terbaik.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkKerjasama',
      title: 'Link Khusus Mitra (Opsional)',
      type: 'url',
      description: 'Masukkan link website/Instagram sponsor jika ada.',
    }),
  ],
})