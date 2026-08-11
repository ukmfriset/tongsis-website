import { defineType, defineField } from 'sanity'

export const achievement = defineType({
  name: 'achievement',
  title: 'Daftar Prestasi',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Anggota / Tim',
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
      name: 'prestasi',
      title: 'Pencapaian / Prestasi',
      type: 'string',
      description: 'Contoh: Juara 1 LKTI Nasional Bidang Sosial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Tingkat Prestasi',
      type: 'string',
      options: {
        list: [
          { title: 'Nasional', value: 'Nasional' },
          { title: 'Regional', value: 'Regional' },
        ],
        layout: 'radio',
      },
      initialValue: 'Nasional',
      validation: (Rule) => Rule.required(),
    }),
  ],
})