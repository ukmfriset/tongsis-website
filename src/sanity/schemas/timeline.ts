import { defineType, defineField } from 'sanity'

export const timeline = defineType({
  name: 'timeline',
  title: 'Alur Timeline Oprec',
  type: 'document',
  fields: [
    defineField({
      name: 'no',
      title: 'Nomor Urutan (Dua Digit)',
      type: 'string',
      description: 'Contoh: 01, 02, 03',
      validation: (Rule) => Rule.required().max(2),
    }),
    defineField({
      name: 'judul',
      title: 'Judul Tahapan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tanggal',
      title: 'Keterangan Tanggal / Status',
      type: 'string',
      description: 'Contoh: 12 - 15 Oktober atau Akan Diumumkan',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi Singkat',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'warna',
      title: 'Tema Warna Aksen',
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
  ],
})