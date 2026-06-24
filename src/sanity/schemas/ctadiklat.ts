import { defineType, defineField } from 'sanity'

export const ctadiklat = defineType({
  name: 'ctadiklat',
  title: 'CP Diklat TONGSIS',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Konfigurasi',
      type: 'string',
      initialValue: 'Pengaturan Kontak Diklat',
      hidden: true, // Kolom ini tetap tersembunyi agar dashboard rapi
    }),
    
    // ❌ Field linkPendaftaran resmi dihapus karena sudah terpusat di siteSettings

    defineField({
      name: 'cp1_nama',
      title: 'Nama Narahubung 1',
      type: 'string',
      initialValue: 'Dinda',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cp1_nomor',
      title: 'Nomor WA Narahubung 1',
      type: 'string',
      description: 'Contoh format: 0857-3019-7634',
      initialValue: '0857-3019-7634',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cp1_link',
      title: 'Link WA Direct Narahubung 1',
      type: 'url',
      description: 'Contoh format: https://wa.me/6285730197634',
      initialValue: 'https://wa.me/6285730197634',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cp2_nama',
      title: 'Nama Narahubung 2',
      type: 'string',
      initialValue: 'Roicha',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cp2_nomor',
      title: 'Nomor WA Narahubung 2',
      type: 'string',
      description: 'Contoh format: 0882-0091-0179',
      initialValue: '0882-0091-0179',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cp2_link',
      title: 'Link WA Direct Narahubung 2',
      type: 'url',
      description: 'Contoh format: https://wa.me/6288200910179',
      initialValue: 'https://wa.me/6288200910179',
      validation: (Rule) => Rule.required(),
    }),
  ],
})