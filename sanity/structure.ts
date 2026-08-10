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
            .title('Kelola Komponen Diklat')
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
                .id('diklatInfoMenu-Unique') // Mengunci ID Unik agar infodiklat tidak eror lagi!
                .title('📌 Informasi Pelaksanaan Diklat')
                .child(S.documentTypeList('infodiklat').title('Informasi Pelaksanaan Diklat')),

              S.listItem()
                .id('diklatDresscodeMenu-Unique') // Dresscode kamu aman terpasang di sini
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
                
              // 🟢 KALO NEXT MAU NAMBAH MENU DIKLAT BARU, TINGGAL COPAST DI BAWAH SINI, BRO!
            ])
        ),

      // ==========================================
      // 4. KELOMPOK PENGATURAN TAMPILAN GLOBAL
      // ==========================================
      S.listItem()
        .id('groupGlobalDesign')
        .title('🎨 Desain & Tampilan')
        .child(
          S.list()
            .title('Pengaturan Estetika')
            .items([
              S.listItem()
                .id('singletonThemeSettings')
                .title('🎨 Pengaturan Tema & Font Global')
                .schemaType('themeSettings')
                .child(
                  S.document()
                    .schemaType('themeSettings')
                    .documentId('themeSettings')
                    .title('Konfigurasi Tema & Font Global')
                ),
            ])
        ),
    ])