"use client";

import { useState } from "react";
import { Button } from "@/components/button"
import { preferredTokens } from "@/constants/addresses/preferred-tokens";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useWeb3React } from "@web3-react/core";
import NotConnectedWalletButton from "@/components/WalletButtons/NotConnected";
import { useNewCampaign } from "@/hooks/write/useNewCampaign";
import { retrievePreferredToken } from "@/functions/misc-functions";


const CreateCampaign = () => {
  const { account } = useWeb3React()
  const createNewCampaign = useNewCampaign()
  const [formValues, setFormValues] = useState({
    title: "",
    imageLink: "",
    description: "",
    token: "",
    goal: "",
    deadline: "",
    decimal: 6,
  })

  function updateFormValues(e: any) {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <main className="bg-[url('/assets/Campaign.jpg') bg-cover bg-center container py-40">
      <div className="text-center mb-10">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Start Your Research Campaign
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Get the funding you need to turn your research into reality. FUNDLAB connects you with a 
              global community of supporters who believe in your vision.
            </p>
          </div>
      <div className="grid md:grid-cols-2 items-start gap-12">
        <section className="space-y-10">
          <aside className="space-y-3">
          <div className="space-y-8">
              <div>
                <h2 className="text-white text-xl font-semibold mb-3">How it Works</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Submit your campaign by providing key details about your research, funding goals, and 
                  milestones. Once submitted, our AI-powered system and community will review and verify your project for authenticity 
                  and feasibility. Approved campaigns receive funding through crypto, fiat, or NFTs, as your team verified 
                  research milestones. Funds are released through smart contracts, ensuring transparency and accountability.
                </p>
              </div>
              
              <div>
                <h2 className="text-white text-xl font-semibold mb-3">Tips for a Successful Campaign</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  To maximize your chances of funding success, be clear and concise in your 
                  description so that everyone understands. Set realistic and achievable 
                  milestones with associated progress. Include your team&apos;s qualifications and experience, especially in 
                  scientific disciplines like medicine, NFT, or early-stage ventures. 
                  Use high-quality images and videos to make your campaign more compelling and trustworthy.
                </p>
                <p className="text-white/70 text-sm mt-2">
                  Need help? Read Our <span className="text-[#5B49BE] cursor-pointer">Campaign Guide</span>
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="relative flex flex-col bg-[#2A2A3A]/80 border rounded-xl p-4 sm:p-6 lg:p-10 border-gray-700 bg-white/5 space-y-10">
          <div className="grid gap-4 lg:gap-6">
            {/* Preferred Token */}
            <div>
              <label htmlFor="preferredToken" className="block mb-2 text-sm font-medium text-white">Preferred Token</label>

              <Select onValueChange={(value) => {
                setFormValues({
                  ...formValues,
                  token: value,
                  decimal: retrievePreferredToken(value)?.decimal
                })
              }}>
                <SelectTrigger className="text-box text-base py-3">
                  <SelectValue placeholder="Preferred Token" />
                </SelectTrigger>

                <SelectContent>
                  {preferredTokens.map((token, index) => (
                    <SelectItem key={index} value={token.address}>{token.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Campaign Title */}
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Campaign Title</label>
              
              <input type="text" id="title" value={formValues.title} onChange={updateFormValues} className="text-box" placeholder="Enter campaign title"
              />
            </div>

            {/* Campaign Description */}
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
              
              <textarea id="description" className="text-box" placeholder="Describe your campaign" onChange={updateFormValues} value={formValues.description}></textarea>
            </div>

            {/* Campaign Image */}
            <div>
              <label htmlFor="imageLink" className="block mb-2 text-sm font-medium text-white">Campaign Image</label>
              
              <input type="url" id="imageLink" value={formValues.imageLink} onChange={updateFormValues} className="text-box" placeholder="Enter link to campaign image"
              />
            </div>

            {/* Funding Goal */}
            <div>
              <label htmlFor="goal" className="block mb-2 text-sm font-medium text-white">Funding Goal</label>
              
              <input type="number" id="goal" value={formValues.goal} onChange={updateFormValues} className="text-box" placeholder="Enter the funding goal" />
            </div>

            {/* Campaign Duration */}
            <div>
              <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-white">Campaign Deadline</label>
              
              <input type="datetime-local" id="deadline" value={formValues.deadline} onChange={updateFormValues} className="text-box" min={new Date().toISOString().slice(0, 16)} />
            </div>
          </div>

          {!account ?
            <NotConnectedWalletButton buttonClass="w-full rounded py-4" />
          :
            <Button className="btn bg-[#5B49BE] hover:bg-[#4C3DB2] py-4" onClick={() => {
              createNewCampaign(formValues).then(response => {
                if (response === true) {
                  setFormValues({
                    title: "",
                    imageLink: "",
                    description: "",
                    token: "",
                    goal: "",
                    deadline: "",
                    decimal: 6,
                  })
                }
              })
            }}>Create Campaign</Button>
          }
        </section>
      </div>
    </main>
  )
}

export default CreateCampaign