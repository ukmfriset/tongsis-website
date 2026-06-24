import { type SchemaTypeDefinition } from 'sanity'

// 1. Impor skema bawaan asli kamu yang ada di folder luar yang sama
import { siteSettings } from './siteSettings' 

// 2. Impor semua skema baru dengan melompat ke dalam folder src/sanity/schemas/
import { achievement } from '../../src/sanity/schemas/achievement'
import { announcement } from '../../src/sanity/schemas/announcement'
import { ctaoprec } from '../../src/sanity/schemas/ctaoprec'
import { gallery } from '../../src/sanity/schemas/gallery'
import { requirement } from '../../src/sanity/schemas/requirement'
import { testimonial } from '../../src/sanity/schemas/testimonial'
import { themeSettings } from '../../src/sanity/schemas/themeSettings'
import { timeline } from '../../src/sanity/schemas/timeline'
import { timelinediklat } from '../../src/sanity/schemas/timelinediklat'
import { testimonialdiklat } from '../../src/sanity/schemas/testimonialdiklat'
import { gallerydiklat } from '../../src/sanity/schemas/gallerydiklat'
import { infodiklat } from '../../src/sanity/schemas/infodiklat'
import { dresscodediklat } from '../../src/sanity/schemas/dresscodediklat'
import { sponsordiklat } from '../../src/sanity/schemas/sponsordiklat'
import { ctadiklat } from '../../src/sanity/schemas/ctadiklat'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings, 
    achievement,   
    announcement,
    ctaoprec,
    gallery,
    requirement,
    testimonial,
    themeSettings,
    timeline,      // <-- Pastikan ada koma di sini, bro!
    timelinediklat,
    testimonialdiklat,
    gallerydiklat,
    infodiklat,
    dresscodediklat,
    sponsordiklat,
    ctadiklat,
  ],
}