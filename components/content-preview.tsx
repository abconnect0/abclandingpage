"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PlayIcon, PauseIcon, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

export default function ContentPreview() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [activeTab, setActiveTab] = useState("featured")

  const featuredContent = [
    {
      id: "video1",
      title: "DJ ZWavy Live Set",
      creator: "DJ ZWavy",
      description: "Live DJ set from last weekend's downtown event",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "45:12",
    },
    {
      id: "video2",
      title: "Custom Rug Making Process",
      creator: "JohnnyRugz",
      description: "Watch the process of creating a custom cartoon rug",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "12:34",
    },
    {
      id: "video3",
      title: "Office Space Tour",
      creator: "Avery Burell",
      description: "Virtual tour of our downtown office and event spaces",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "08:21",
    },
  ]

  const liveContent = [
    {
      id: "live1",
      title: "DJ ZWavy - Live Now",
      creator: "DJ ZWavy",
      description: "Streaming live from Studio 54",
      thumbnail: "/placeholder.svg?height=200&width=350",
      viewers: "243",
    },
  ]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-purple-800/30 bg-card">
        <div className="relative aspect-video bg-slate-900">
          <Image src="/placeholder.svg?height=500&width=900" alt="Video thumbnail" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-full bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50 hover:text-white"
              onClick={togglePlay}
            >
              {isPlaying ? <PauseIcon className="h-8 w-8" /> : <PlayIcon className="h-8 w-8" />}
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
            <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-white">12:34 / 45:12</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-black/20 hover:text-white"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-white">DJ ZWavy Live Set</CardTitle>
          <CardDescription className="text-purple-300">Live DJ set from last weekend's downtown event</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden relative">
              <Image src="/placeholder.svg?height=40&width=40" alt="DJ ZWavy" fill className="object-cover" />
            </div>
            <div>
              <p className="font-medium text-white">DJ ZWavy</p>
              <p className="text-sm text-muted-foreground">12.5K community followers</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto border-purple-700 text-purple-200 hover:bg-purple-800/30"
            >
              Follow
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="featured" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 bg-purple-900/50">
          <TabsTrigger
            value="featured"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-purple-200"
          >
            Featured
          </TabsTrigger>
          <TabsTrigger
            value="live"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-purple-200"
          >
            Live Now
          </TabsTrigger>
        </TabsList>
        <TabsContent value="featured" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredContent.map((content) => (
              <Card key={content.id} className="overflow-hidden border-purple-800/30 bg-card">
                <div className="relative aspect-video bg-slate-900">
                  <Image
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 rounded">
                    {content.duration}
                  </div>
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-base text-white">{content.title}</CardTitle>
                  <CardDescription className="text-xs text-purple-300">{content.creator}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="live" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {liveContent.map((content) => (
              <Card key={content.id} className="overflow-hidden border-purple-800/30 bg-card">
                <div className="relative aspect-video bg-slate-900">
                  <Image
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                    LIVE
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 rounded">
                    {content.viewers} watching
                  </div>
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-base text-white">{content.title}</CardTitle>
                  <CardDescription className="text-xs text-purple-300">{content.creator}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
