import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Daftar Testimoni',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Tokoh',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prodi',
      title: 'Jabatan / Prodi / Angkatan',
      type: 'string',
      description: 'Contoh: Ketua Umum UKM-F Riset 2025',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Isi Testimoni (Quote)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})