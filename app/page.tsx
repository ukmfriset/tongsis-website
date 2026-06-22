import HeroHome from "@/components/home/HeroHome"
import ChoiceCardsHome from "@/components/home/ChoiceCardsHome"

export default function Home() {
  return (
    <main className="bg-white">
      <HeroHome />
      <section id="pilih">
        <ChoiceCardsHome />
      </section>
    </main>
  )
}