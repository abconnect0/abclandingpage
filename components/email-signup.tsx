import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InboxIcon as EnvelopeIcon } from "lucide-react"

export default function EmailSignup() {
  return (
    <Card className="border-purple-800/30 bg-card">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
          <EnvelopeIcon className="h-6 w-6 text-purple-300" />
        </div>
        <CardTitle className="text-2xl gradient-text">Join the early access list</CardTitle>
        <CardDescription className="text-purple-200">
          Get exclusive access to new features and updates before anyone else.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="border-purple-800/30 bg-purple-900/20 text-white placeholder:text-purple-400 focus-visible:ring-purple-500"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Sign Up for Exclusive Features
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center">
        <p className="text-xs text-muted-foreground mx-auto">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  )
}
