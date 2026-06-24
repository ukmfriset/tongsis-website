import { defineType, defineField } from 'sanity'

export const dresscodediklat = defineType({
  name: 'dresscodediklat',
  title: 'Dresscode Kegiatan Diklat',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Nama Hari / Sesi',
      type: 'string',
      description: 'Contoh: Day 1, Day 2, atau Pra-Diklat',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status / Detail Pakaian',
      type: 'string',
      description: 'Isi dengan "Coming Soon" atau rincian pakaian jika sudah fix.',
      initialValue: 'Coming Soon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Keterangan Tambahan',
      type: 'string',
      description: 'Contoh: "Membawa salinan berkas" atau "Akan diumumkan setelah pendaftaran ditutup"',
      initialValue: 'Akan diumumkan setelah pendaftaran ditutup',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'warna',
      title: 'Aksen Warna Kartu',
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