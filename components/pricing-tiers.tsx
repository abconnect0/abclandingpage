import { CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingTiers() {
  const tiers = [
    {
      name: "Basic Plan",
      description: "Perfect for individuals just getting started",
      features: [
        "Basic profile page",
        "Messaging with other users",
        "Watch free content",
        "Community access",
        "Limited analytics",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium Plan",
      description: "For community members looking to grow their audience",
      features: [
        "Enhanced profile customization",
        "Advanced booking tools",
        "Detailed analytics dashboard",
        "Stream content to followers",
        "Priority support",
        "No platform fees on bookings",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business Plan",
      description: "For established businesses and professionals",
      features: [
        "Full storefront customization",
        "Advanced appointment scheduling",
        "Featured promotion in search",
        "Multiple team members",
        "API access",
        "Dedicated account manager",
        "Custom branding",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={`flex flex-col bg-card border-purple-800/30 ${
            tier.popular ? "border-purple-500 shadow-lg shadow-purple-500/20 relative overflow-hidden" : ""
          }`}
        >
          {tier.popular && (
            <div className="absolute top-0 right-0">
              <div className="text-xs font-medium bg-purple-600 text-white py-1 px-3 rounded-bl-lg">Most Popular</div>
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-white">{tier.name}</CardTitle>
            <CardDescription className="mt-2 text-purple-200">{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className={`w-full ${tier.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}
              variant={tier.popular ? "default" : "outline"}
            >
              {tier.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
