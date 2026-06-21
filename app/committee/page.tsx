import HeroCommittee from "@/components/committee/HeroCommittee"
import LeaderCommittee from "@/components/committee/LeaderCommittee"
import DivisionsCommittee from "@/components/committee/DivisionsCommittee"
import MessageCommittee from "@/components/committee/MessageCommittee"
import BackCTACommittee from "@/components/committee/BackCTACommittee"

export default function CommitteePage() {
  return (
    <main className="bg-white">
      <HeroCommittee />
      <LeaderCommittee />
      <DivisionsCommittee />
      <MessageCommittee />
      <BackCTACommittee />
    </main>
  )
}