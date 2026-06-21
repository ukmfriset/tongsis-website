import HeroOprec from "@/components/open-recruitment/HeroOprec"
import AboutOprec from "@/components/open-recruitment/AboutOprec"
import WhyJoinOprec from "@/components/open-recruitment/WhyJoinOprec"
import AchievementsOprec from "@/components/open-recruitment/AchievementsOprec"
import WorksOprec from "@/components/open-recruitment/WorksOprec"
import GalleryOprec from "@/components/open-recruitment/GalleryOprec"
import TestimonialOprec from "@/components/open-recruitment/TestimonialOprec"
import TimelineOprec from "@/components/open-recruitment/TimelineOprec"
import AnnouncementOprec from "@/components/open-recruitment/AnnouncementOprec"
import RequirementsOprec from "@/components/open-recruitment/RequirementsOprec"
import CTAOprec from "@/components/open-recruitment/CTAOprec"

export default function OpenRecruitmentPage() {
  return (
    <main className="bg-white">
      <HeroOprec />
      <AboutOprec />
      <WhyJoinOprec />
      <AchievementsOprec />
      <WorksOprec />
      <TestimonialOprec />
      <GalleryOprec />
      <RequirementsOprec />
      <TimelineOprec />
      <AnnouncementOprec />
      <CTAOprec />
    </main>
  )
}