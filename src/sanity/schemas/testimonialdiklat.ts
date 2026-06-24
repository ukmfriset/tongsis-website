import { defineType, defineField } from 'sanity'

export const testimonialdiklat = defineType({
  name: 'testimonialdiklat', // <-- Nama unik khusus pembeda database diklat
  title: 'Daftar Testimoni Diklat',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Lengkap Alumni Diklat',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prodi',
      title: 'Program Studi & Angkatan',
      type: 'string',
      description: 'Contoh: Sosiologi • 2022',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Isi Kesaksian / Testimoni',
      type: 'text',
      description: 'Kalimat kesan pesan alumni khusus selama mengikuti kegiatan TONGSIS.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})