"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import { CheckIcon } from "lucide-react"

export default function TelegramGroup() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("t.me/ABCLocal")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6 text-white">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">Join Our Community</h2>
        <p className="text-xl text-purple-200">
          Connect with other creatives, get featured, and find new opportunities in our active Telegram community.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-purple-900/50 p-1 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>Get real-time updates on local events</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-purple-900/50 p-1 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>Connect with other local creators and businesses</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-purple-900/50 p-1 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>Share your work and get feedback</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-purple-900/50 p-1 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>Exclusive offers and opportunities</span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Join Telegram Group
          </Button>
          <div className="relative">
            <Input
              className="bg-purple-900/20 border-purple-800/30 text-white placeholder:text-purple-400 pr-24"
              placeholder="t.me/ABCLocal"
              readOnly
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1 h-8 text-purple-200 hover:bg-purple-800/30"
              onClick={handleCopy}
            >
              {copied ? <CheckIcon className="h-4 w-4 mr-1" /> : null}
              {copied ? "Copied!" : "Copy Link"}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl border border-purple-800/30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-400/10 z-10"></div>
        <Image src="/placeholder.svg?height=400&width=400" alt="Telegram community" fill className="object-cover" />
      </div>
    </div>
  )
}
