import { defineType, defineField } from 'sanity'

export const gallerydiklat = defineType({
  name: 'gallerydiklat',
  title: 'Dokumentasi Diklat TONGSIS',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Judul Momen / Kegiatan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gambar', // Kita pakai tipe image asli Sanity
      title: 'Upload Foto Dokumentasi',
      type: 'image',
      description: 'Unggah foto dokumentasi kegiatan asli jika sudah ada.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aksen',
      title: 'Tema Aksen Warna Kartu',
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