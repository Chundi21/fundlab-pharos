import { Button } from "@/components/ui/button"
import { FileText, Users, Milestone, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const HowItWorksComponent = () => {
  return (
    <section id="how-it-works" className="w-full">
      <div className="container mx-auto px-4">
        {/* How to Launch a Campaign */}
        <div className="mt-20">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 text-center">How to Launch a Campaign</h3>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base text-center mb-12">
            Bringing your research to life is simple with FUNDLAB. Follow these steps to secure funding and engage with
            a global community of backers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Light Bulb Image */}
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative w-64 h-72 md:w-[510px] md:h-[634px]">
                <Image
                  src="/assets/campaignImage.png"
                  alt="Light bulb with research diagrams"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-8 md:gap-16 order-1 md:order-2 place-self-center">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B49BE] rounded-md flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2 text-xl">
                    <FileText className="h-4 w-4 text-[#5B49BE]" />
                    Submit Your Proposal
                  </h4>
                  <p className="text-white/70 text-sm mt-1">
                    Create a detailed research proposal, including objectives, milestones, and funding goals. Our
                    platform helps establish credibility and quality work.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B49BE] rounded-md flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2 text-xl">
                    <Users className="h-4 w-4 text-[#5B49BE]" />
                    Get Community Approval
                  </h4>
                  <p className="text-white/70 text-sm mt-1">
                    Your proposal is reviewed by the community and fit for validation. Experts vote and provide feedback
                    before your campaign goes live.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B49BE] rounded-md flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2 text-xl">
                    <Milestone className="h-4 w-4 text-[#5B49BE]" />
                    Secure Funding Through Milestones
                  </h4>
                  <p className="text-white/70 text-sm mt-1">
                    Funds are distributed based on completed and verified research milestones, ensuring accountability
                    and progress.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5B49BE] rounded-md flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2 text-xl">
                    <MessageCircle className="h-4 w-4 text-[#5B49BE]" />
                    Engage with Your Backers
                  </h4>
                  <p className="text-white/70 text-sm mt-1">
                    Keep backers updated with progress reports, NFT rewards access, and updates on your groundbreaking
                    research.
                  </p>
                </div>
              </div>

              {/* Launch Button */}
              <div className="pt-4 mx-auto md:mx-0">
                <Link href="/create-campaign">
                <Button className="bg-[#5B49BE] hover:bg-[#4C3DB2] group transition">
                  Launch Campaign
                  <span className="ml-2 group-hover:-rotate-45">→</span>
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksComponent