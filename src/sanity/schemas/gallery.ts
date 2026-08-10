import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Dokumentasi Kegiatan',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Nama / Judul Kegiatan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gambar',
      title: 'Foto Kegiatan',
      type: 'image',
      options: {
        hotspot: true, // Biar bisa crop area fokus foto langsung di Sanity
      },
    }),
    defineField({
      name: 'aksen',
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