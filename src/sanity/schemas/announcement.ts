import { defineType, defineField } from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Pengaturan Pengumuman Hasil',
  type: 'document',
  fields: [
    defineField({
      name: 'status',
      title: 'Status Pengumuman',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming (Belum Diumumkan)', value: 'upcoming' },
          { title: 'Open (Sudah Diumumkan)', value: 'open' },
          { title: 'Passed (Sudah Selesai)', value: 'passed' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'upcoming',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkPengumuman',
      title: 'Link URL Pengumuman (Opsional)',
      type: 'url',
      description: 'Masukkan link pengumuman (misal link Bitly atau Google Drive). Hanya aktif jika status di atas dipilih "Open".',
    }),
  ],
})