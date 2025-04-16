import Image from "next/image"
import Link from "next/link"
import { HandshakeIcon, ArrowRightIcon, UsersIcon, HeartIcon, GlobeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import PricingTiers from "@/components/pricing-tiers"
import CommunityMembers from "@/components/community-members"
import Testimonials from "@/components/testimonials"
import EmailSignup from "@/components/email-signup"
import TelegramGroup from "@/components/telegram-group"
import ContentPreview from "@/components/content-preview"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-800/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 gradient-bg rounded-full opacity-80"></div>
              <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                <HandshakeIcon className="h-4 w-4 text-purple-400" />
              </div>
            </div>
            <span className="font-bold text-xl">Any Business Connect Inc.</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-purple-200 hover:text-white">
              About
            </Link>
            <Link href="#features" className="text-sm font-medium text-purple-200 hover:text-white">
              Features
            </Link>
            <Link href="#community" className="text-sm font-medium text-purple-200 hover:text-white">
              Community
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-purple-200 hover:text-white">
              Testimonials
            </Link>
          </nav>
          <div className="hidden md:flex gap-3">
            <Button variant="outline" size="sm" className="border-purple-700 text-purple-200 hover:bg-purple-800/30">
              About Us
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Join Free
            </Button>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-purple-700 text-purple-200 hover:bg-purple-800/30"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 gradient-bg opacity-20"></div>
          <div className="container relative grid md:grid-cols-2 gap-6 py-12 md:py-24 lg:py-32 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
                Building Stronger Communities Through Local Connections
              </h1>
              <p className="text-xl text-purple-200">
                Join a thriving ecosystem where local creators, businesses, and customers come together to support each
                other and grow.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Join Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-700 text-purple-200 hover:bg-purple-800/30"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl border border-purple-800/30">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Local business network"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 dark-gradient-bg">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-purple-900/50 px-3 py-1 text-sm text-purple-300">
                  <span className="font-medium">About Us</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">What Is ABC?</h2>
                <p className="text-purple-200 text-lg">
                  We're a network connecting local creators, owners, brands and entrepreneurs. Whether you host events,
                  create art, or promote music — ABC helps you grow your audience and business.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-purple-900/50 p-2 text-purple-300">
                      <UsersIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Community First</h3>
                      <p className="text-sm text-purple-200">Build meaningful local connections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-mint-900/50 p-2 text-mint-300">
                      <GlobeIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Local Focus</h3>
                      <p className="text-sm text-purple-200">Support businesses in your area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-orange-900/50 p-2 text-orange-300">
                      <HeartIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Shared Growth</h3>
                      <p className="text-sm text-purple-200">Succeed together, not alone</p>
                    </div>
                  </div>
                </div>
                <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                  View Features <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-purple-800/30">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community of creators"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features/Pricing Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">Membership Plans</h2>
              <p className="text-purple-200 max-w-2xl mx-auto">
                Select the perfect plan for your needs, whether you're just getting started or running a full business.
              </p>
            </div>

            <PricingTiers />
          </div>
        </section>

        {/* Content Preview Section */}
        <section id="content-preview" className="py-16 md:py-24 dark-gradient-bg">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">Preview Our Content</h2>
              <p className="text-purple-200 max-w-2xl mx-auto">
                Get a taste of the amazing content our creators are sharing on the platform.
              </p>
            </div>

            <ContentPreview />
          </div>
        </section>

        {/* Featured Creators Section */}
        <section id="community" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">Our Community</h2>
              <p className="text-purple-200 max-w-2xl mx-auto">
                Meet some of our outstanding local community members and businesses making an impact together.
              </p>
            </div>

            <CommunityMembers />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 dark-gradient-bg">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">What Our Community Says</h2>
              <p className="text-purple-200 max-w-2xl mx-auto">
                Hear from the creators and businesses who have found success with Any Business Connect.
              </p>
            </div>

            <Testimonials />
          </div>
        </section>

        {/* Telegram Group Section */}
        <section id="telegram" className="py-16 md:py-24 bg-purple-900/30 relative">
          <div className="absolute inset-0 gradient-bg opacity-10"></div>
          <div className="container relative">
            <TelegramGroup />
          </div>
        </section>

        {/* Email Signup Section */}
        <section id="signup" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <EmailSignup />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-purple-900/50">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">About ABC</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-purple-300 hover:text-white">
                    Telegram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-purple-800/30">
            <p className="text-sm text-purple-300">
              © {new Date().getFullYear()} Any Business Connect Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-purple-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-purple-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-purple-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m22 8-6 4 6 4V8Z" />
                  <rect width="14" height="16" x="2" y="4" rx="2" />
                  <path d="M6 12h4" />
                  <path d="M10 8v8" />
                </svg>
                <span className="sr-only">Telegram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
