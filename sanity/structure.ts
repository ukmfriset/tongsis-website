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
      // 3. KELOMPOK KONTEN DIKLAT TONGSIS
      // ==========================================
      S.listItem()
        .id('exclusiveGroupDiklatTongsis') 
        .title('🎓 Konten Diklat TONGSIS')
        .child(
          S.list()
            .title('Kelola Komponen Diklat')
            .items([
              
              S.documentTypeListItem('timelinediklat')
                .title('⏳ Alur Timeline Diklat'),
                
              S.documentTypeListItem('testimonialdiklat')
                .title('💬 Daftar Testimoni Diklat TONGSIS'),

              S.documentTypeListItem('gallerydiklat')
                .title('📷 Dokumentasi Kegiatan TONGSIS'), // <-- Jangan lupa tanda koma di ujung ini!

              S.documentTypeListItem('infodiklat')
                .title('📌 Informasi Pelaksanaan Diklat'),
              
              S.documentTypeListItem('infodiklat')
                .title('📌 Informasi Pelaksanaan Diklat'),
              
              S.documentTypeListItem('sponsordiklat')
                .title('🤝 Daftar Sponsor & Mitra Diklat'),
              S.listItem()
                .id('singletonCtaDiklat')
                .title('🔗 Link Pendaftaran & CP Diklat')
                .schemaType('ctadiklat')
                .child(
                  S.document()
                    .schemaType('ctadiklat')
                    .documentId('ctadiklat')
                    .title('Link Pendaftaran & CP Utama Diklat')
                ),
                
              // 🟢 KALO NEXT MAU NAMBAH MENU DIKLAT BARU, MASUKKAN DI SINI, BRO! 👇
              // Contoh format pengetikan (buka tanda komentar jika ingin dipakai):
              // S.documentTypeListItem('NAMA_SKEMA_BARU').title('📌 JUDUL_MENU_BEBAS'),
              
              // 🟢 JANGAN MELEWATI BATAS INI SAAT MENAMBAH ITEM BARU 👆
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