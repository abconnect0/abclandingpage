"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ShoppingBagIcon, PlayIcon, MapPinIcon, StarIcon, UsersIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CommunityMembers() {
  const [activeCategory, setActiveCategory] = useState("all")

  const communityMembers = [
    {
      id: "avery",
      name: "Avery Burell",
      title: "Property Rental",
      description: "Business office + event space for rent. Perfect for meetings, workshops, and social gatherings.",
      image: "/placeholder.svg?height=240&width=400",
      instagram: "@averyspaces",
      location: "Downtown",
      category: "spaces",
      rating: 4.8,
      reviews: 32,
      featured: true,
      actions: [
        { label: "Book Space", icon: <CalendarIcon className="h-4 w-4" /> },
        { label: "View Gallery", icon: <ShoppingBagIcon className="h-4 w-4" /> },
      ],
    },
    {
      id: "djzwavy",
      name: "DJ ZWavy",
      title: "Live DJ & Events",
      description: "Live sets, party bookings, stream playlists. Bringing the energy to any event.",
      image: "/placeholder.svg?height=240&width=400",
      instagram: "@djzwavy",
      location: "Midtown",
      category: "entertainment",
      rating: 4.9,
      reviews: 47,
      featured: true,
      actions: [
        { label: "Book Event", icon: <CalendarIcon className="h-4 w-4" /> },
        { label: "Stream Music", icon: <PlayIcon className="h-4 w-4" /> },
      ],
    },
    {
      id: "johnnyrugz",
      name: "JohnnyRugz",
      title: "Custom Rugs",
      description: "Handmade rugs, logos, cartoon characters. Custom designs for your space.",
      image: "/placeholder.svg?height=240&width=400",
      instagram: "@johnnyrugz",
      location: "Arts District",
      category: "crafts",
      rating: 4.7,
      reviews: 28,
      featured: false,
      actions: [
        { label: "Shop Store", icon: <ShoppingBagIcon className="h-4 w-4" /> },
        { label: "Custom Order", icon: <CalendarIcon className="h-4 w-4" /> },
      ],
    },
    {
      id: "thornton",
      name: "Coach Thornton",
      title: "Fitness Training",
      description: "Personal training, group classes, and nutrition coaching for all fitness levels.",
      image: "/placeholder.svg?height=240&width=400",
      instagram: "@coachthornton",
      location: "Westside",
      category: "fitness",
      rating: 4.9,
      reviews: 56,
      featured: true,
      actions: [
        { label: "Book Session", icon: <CalendarIcon className="h-4 w-4" /> },
        { label: "Watch Workouts", icon: <PlayIcon className="h-4 w-4" /> },
      ],
    },
    {
      id: "stylesbyray",
      name: "Styles by Ray",
      title: "Hair Stylist",
      description: "Cuts, color, and styling for all hair types. Specializing in natural hair care.",
      image: "/placeholder.svg?height=240&width=400",
      instagram: "@stylesbyray",
      location: "Eastside",
      category: "beauty",
      rating: 4.6,
      reviews: 41,
      featured: false,
      actions: [
        { label: "Book Appointment", icon: <CalendarIcon className="h-4 w-4" /> },
        { label: "View Portfolio", icon: <ShoppingBagIcon className="h-4 w-4" /> },
      ],
    },
    {
      id: "localfoods",
      name: "Local Harvest",
      title: "Organic Produce",
      description: "Farm-to-table organic produce, locally sourced and sustainably grown.",
      image: "/placeholder.svg?height=240&width=400",
      instagram: "@localharvest",
      location: "Farmers Market",
      category: "food",
      rating: 4.8,
      reviews: 38,
      featured: false,
      actions: [
        { label: "Shop Products", icon: <ShoppingBagIcon className="h-4 w-4" /> },
        { label: "Delivery Info", icon: <MapPinIcon className="h-4 w-4" /> },
      ],
    },
  ]

  const categories = [
    { id: "all", label: "All Members" },
    { id: "spaces", label: "Spaces" },
    { id: "entertainment", label: "Entertainment" },
    { id: "crafts", label: "Crafts" },
    { id: "fitness", label: "Fitness" },
    { id: "beauty", label: "Beauty" },
    { id: "food", label: "Food" },
  ]

  const filteredMembers =
    activeCategory === "all"
      ? communityMembers
      : communityMembers.filter((member) => member.category === activeCategory)

  return (
    <div className="space-y-8">
      <Tabs defaultValue="grid" className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`mr-2 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-700 text-purple-200 hover:bg-purple-800/30"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
          <TabsList className="bg-purple-900/50">
            <TabsTrigger
              value="grid"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-purple-200"
            >
              Grid View
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-purple-200"
            >
              List View
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="group overflow-hidden border-purple-800/30 bg-card h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent z-10"></div>
                  {member.featured && (
                    <div className="absolute top-2 left-2 z-20">
                      <Badge className="bg-orange-500 hover:bg-orange-600">Featured</Badge>
                    </div>
                  )}
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    <StarIcon className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    <span>{member.rating}</span>
                    <span className="text-white/70">({member.reviews})</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{member.name}</CardTitle>
                      <CardDescription className="text-purple-300 font-medium">{member.title}</CardDescription>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPinIcon className="h-3 w-3 mr-1" />
                      {member.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-sm text-purple-200 mb-2">{member.description}</p>
                  <p className="text-xs text-muted-foreground">Instagram: {member.instagram}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {member.actions.map((action) => (
                    <Button
                      key={action.label}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-700 text-purple-200 hover:bg-purple-800/30"
                    >
                      <span className="flex items-center gap-1">
                        {action.icon}
                        {action.label}
                      </span>
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <div className="space-y-4">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden border-purple-800/30 bg-card">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                    {member.featured && (
                      <div className="absolute top-2 left-2 z-20">
                        <Badge className="bg-orange-500 hover:bg-orange-600">Featured</Badge>
                      </div>
                    )}
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-white">{member.name}</h3>
                        <p className="text-purple-300 font-medium">{member.title}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-xs">
                          <MapPinIcon className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span className="text-muted-foreground">{member.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-medium text-white">{member.rating}</span>
                          <span className="text-muted-foreground">({member.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-purple-200 mb-2 flex-grow">{member.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xs text-muted-foreground">Instagram: {member.instagram}</p>
                      <div className="flex gap-2">
                        {member.actions.map((action) => (
                          <Button
                            key={action.label}
                            variant="outline"
                            size="sm"
                            className="border-purple-700 text-purple-200 hover:bg-purple-800/30"
                          >
                            <span className="flex items-center gap-1">
                              {action.icon}
                              {action.label}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Button className="bg-purple-600 hover:bg-purple-700">
          <UsersIcon className="h-4 w-4 mr-2" />
          View All Community Members
        </Button>
      </div>
    </div>
  )
}
