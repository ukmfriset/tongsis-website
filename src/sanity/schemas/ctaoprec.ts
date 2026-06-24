import { defineType, defineField } from 'sanity'

export const ctaoprec = defineType({
  name: 'ctaoprec',
  title: 'Pengaturan Kontak Oprec',
  type: 'document',
  fields: [
    // ❌ Field linkDaftar resmi dihapus karena sudah terpusat di siteSettings
    
    defineField({
      name: 'contactPersons',
      title: 'Daftar Narahubung (CP)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nama', title: 'Nama CP', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'nomor', title: 'Nomor WhatsApp', type: 'string', description: 'Contoh: 0857-3019-7634', validation: (Rule) => Rule.required() },
            { name: 'link', title: 'Link wa.me', type: 'url', description: 'Contoh: https://wa.me/6285730197634', validation: (Rule) => Rule.required() },
            {
              name: 'warna',
              title: 'Aksen Warna',
              type: 'string',
              options: {
                list: [
                  { title: 'Oranye (FISIB)', value: 'orange' },
                  { title: 'Cokelat Emas (Riset)', value: 'brown' },
                ],
                layout: 'radio',
              },
              initialValue: 'orange',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})