import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Management Website')
    .items([
      // ==========================================
      // 1. PENGATURAN UTAMA WEBSITE (SINGLETON)
      // ==========================================
      S.listItem()
        .id('mainWebsiteSettings')
        .title('Pengaturan Utama Website')
        .schemaType('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Pengaturan Utama Website')
        ),
      
      S.divider(), // Garis Pembatas

      // ==========================================
      // 2. KELOMPOK KONTEN OPEN RECRUITMENT (OPREC)
      // ==========================================
      S.listItem()
        .id('groupOprecContent')
        .title('📢 Konten Open Recruitment')
        .child(
          S.list()
            .title('Kelola Komponen Oprec')
            .items([
              S.documentTypeListItem('achievement')
                .title('🏆 Daftar Prestasi Oprec'),

              S.documentTypeListItem('testimonial')
                .title('💬 Daftar Testimoni Oprec'),

              S.documentTypeListItem('gallery')
                .title('📷 Dokumentasi Kegiatan (Gallery)'),

              S.documentTypeListItem('requirement')
                .title('📌 Syarat Pendaftaran'),

              S.documentTypeListItem('timeline')
                .title('⏳ Alur Timeline Oprec'),

              S.listItem()
                .id('singletonAnnouncement')
                .title('📢 Pengumuman Hasil')
                .schemaType('announcement')
                .child(
                  S.document()
                    .schemaType('announcement')
                    .documentId('announcement')
                    .title('Pengaturan Pengumuman Hasil')
                ),

              S.listItem()
                .id('singletonCtaOprec')
                .title('🔗 Link Pendaftaran & CP')
                .schemaType('ctaoprec')
                .child(
                  S.document()
                    .schemaType('ctaoprec')
                    .documentId('ctaoprec')
                    .title('Link Pendaftaran & CP Utama')
                ),
            ])
        ),

      // ==========================================
      // 3. KELOMPOK KONTEN DIKLAT TONGSIS (AMBLES & BERSIH)
      // ==========================================
      S.listItem()
        .id('exclusiveGroupDiklatTongsis') 
        .title('🎓 Konten Diklat TONGSIS')
        .child(
          S.list()
            .title('Kelola Komponen Oprec')
            .items([
              
              S.listItem()
                .id('diklatTimelineMenu-Unique')
                .title('⏳ Alur Timeline Diklat')
                .child(S.documentTypeList('timelinediklat').title('Alur Timeline Diklat')),
                
              S.listItem()
                .id('diklatTestimonialMenu-Unique')
                .title('💬 Daftar Testimoni Diklat TONGSIS')
                .child(S.documentTypeList('testimonialdiklat').title('Testimoni Diklat TONGSIS')),

              S.listItem()
                .id('diklatGalleryMenu-Unique')
                .title('📷 Dokumentasi Kegiatan TONGSIS')
                .child(S.documentTypeList('gallerydiklat').title('Dokumentasi Kegiatan TONGSIS')),

              S.listItem()
                .id('diklatInfoMenu-Unique')
                .title('📌 Informasi Pelaksanaan Diklat')
                .child(S.documentTypeList('infodiklat').title('Informasi Pelaksanaan Diklat')),

              S.listItem()
                .id('diklatDresscodeMenu-Unique')
                .title('👕 Dresscode Kegiatan Diklat')
                .child(S.documentTypeList('dresscodediklat').title('Dresscode Kegiatan Diklat')),
                
              S.listItem()
                .id('diklatSponsorMenu-Unique')
                .title('🤝 Daftar Sponsor & Mitra Diklat')
                .child(S.documentTypeList('sponsordiklat').title('Daftar Sponsor & Mitra Diklat')),

              S.listItem()
                .id('singletonCtaDiklat-Unique')
                .title('🔗 Link Pendaftaran & CP Diklat')
                .schemaType('ctadiklat')
                .child(
                  S.document()
                    .schemaType('ctadiklat')
                    .documentId('ctadiklat')
                    .title('Link Pendaftaran & CP Utama Diklat')
                ),
            ])
        ),
    ])