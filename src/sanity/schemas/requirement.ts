import { defineType, defineField } from 'sanity'

export const requirement = defineType({
  name: 'requirement',
  title: 'Syarat Pendaftaran',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      title: 'Judul Persyaratan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detail',
      title: 'Detail Penjelasan',
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