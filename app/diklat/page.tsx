import HeroDiklat from "@/components/diklat/HeroDiklat"
import WhatIsDiklat from "@/components/diklat/WhatIsDiklat"
import TimelineDiklat from "@/components/diklat/TimelineDiklat"
import WhyJoinDiklat from "@/components/diklat/WhyJoinDiklat"
import BenefitDiklat from "@/components/diklat/BenefitDiklat"
import InfoDiklat from "@/components/diklat/InfoDiklat"
import DresscodeDiklat from "@/components/diklat/DresscodeDiklat"
import TestimonialDiklat from "@/components/diklat/TestimonialDiklat"
import GalleryDiklat from "@/components/diklat/GalleryDiklat"
import SponsorDiklat from "@/components/diklat/SponsorDiklat"
import CTADiklat from "@/components/diklat/CTADiklat"

export default function DiklatPage() {
  return (
    <main className="bg-white">
      <HeroDiklat />

      <section id="tentang">
        <WhatIsDiklat />
      </section>

      <section id="timeline">
        <TimelineDiklat />
      </section>

      <WhyJoinDiklat />

      <section id="benefit">
        <BenefitDiklat />
      </section>

      <section id="testimoni">
        <TestimonialDiklat />
      </section>

      <GalleryDiklat />

      <section id="info">
        <InfoDiklat />
      </section>

      <DresscodeDiklat />
      <SponsorDiklat />

      <section id="daftar-tongsis">
        <CTADiklat />
      </section>
    </main>
  )
}