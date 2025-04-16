"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export default function AppointmentBooking() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [provider, setProvider] = useState<string>("")
  const [step, setStep] = useState(1)
  const [bookingComplete, setBookingComplete] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1 && date && timeSlot && provider) {
      setStep(2)
    } else if (step === 2) {
      setBookingComplete(true)
    }
  }

  const providers = [
    { id: "avery", name: "Avery Burell - Property Rental" },
    { id: "djzwavy", name: "DJ ZWavy - Live DJ & Events" },
    { id: "johnnyrugz", name: "JohnnyRugz - Custom Rugs" },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  if (bookingComplete) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-xl">Booking Confirmed!</CardTitle>
          <CardDescription>Your appointment has been scheduled successfully.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Provider:</span>
              <span className="text-sm">{providers.find((p) => p.id === provider)?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Date:</span>
              <span className="text-sm">{date?.toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Time:</span>
              <span className="text-sm">{timeSlot}</span>
            </div>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            A confirmation email has been sent to your inbox with all the details.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              setStep(1)
              setBookingComplete(false)
              setDate(undefined)
              setTimeSlot("")
              setProvider("")
            }}
            className="w-full"
          >
            Book Another Appointment
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{step === 1 ? "Select Date & Time" : "Your Information"}</CardTitle>
        <CardDescription>
          {step === 1
            ? "Choose a provider, date and time slot for your appointment"
            : "Fill in your details to complete the booking"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="provider">Select Provider</Label>
                <Select value={provider} onValueChange={setProvider} required>
                  <SelectTrigger id="provider">
                    <SelectValue placeholder="Select a provider" />
                  </SelectTrigger>
                  <SelectContent>
                    {providers.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Select Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="border rounded-md"
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Select Time</Label>
                <Select value={timeSlot} onValueChange={setTimeSlot} required>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea id="notes" />
              </div>
            </>
          )}

          <div className="flex justify-between pt-2">
            {step === 2 && (
              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
            )}
            <Button type="submit" className={step === 1 ? "w-full" : "ml-auto"}>
              {step === 1 ? "Continue" : "Confirm Booking"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
