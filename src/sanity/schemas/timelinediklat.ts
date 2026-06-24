import { defineType, defineField } from 'sanity'

export const timelinediklat = defineType({
  name: 'timelinediklat',
  title: 'Alur Timeline Diklat',
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
      title: 'Judul Tahapan Diklat',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tanggal',
      title: 'Keterangan Tanggal / Status',
      type: 'string',
      description: 'Contoh: Akan Diumumkan atau 25 - 27 Oktober',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi Singkat Kegiatan',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status Tahapan saat Ini',
      type: 'string',
      options: {
        list: [
          { title: 'Aktif (Sedang Berjalan & Berkedip)', value: 'aktif' },
          { title: 'Akan Datang (Belum Mulai)', value: 'akan-datang' },
        ],
        layout: 'radio',
      },
      initialValue: 'akan-datang',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'warna',
      title: 'Tema Warna Badge',
      type: 'string',
      options: {
        list: [
          { title: 'Oranye (FISIB)', value: 'orange' },
          { title: 'Cokelat Emas (Riset)', value: 'brown' },
        ],
        layout: 'radio',
      },
      initialValue: 'brown',
      validation: (Rule) => Rule.required(),
    }),
  ],
})