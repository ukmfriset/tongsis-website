import { defineType, defineField } from 'sanity'

export const infodiklat = defineType({
  name: 'infodiklat',
  title: 'Informasi Pelaksanaan Diklat',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Ikon / Emoji',
      type: 'string',
      description: 'Contoh: 💰, 🕐, 📍',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'judul',
      title: 'Judul Blok Informasi',
      type: 'string',
      description: 'Contoh: Pembayaran, Waktu, atau Tempat',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'warna',
      title: 'Tema Warna Kartu',
      type: 'string',
      options: {
        list: [
          { title: 'Oranye (FISIB)', value: 'orange' },
          { title: 'Cokelat Emas (Riset)', value: 'brown' },
        ],
        layout: 'radio',
      },
      initialValue: 'orange',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Poin-Poin Informasi (List)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tambahkan baris rincian informasi untuk bagian ini.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})