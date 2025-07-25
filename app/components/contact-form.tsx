
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Send, Check } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    venue: '',
    guestCount: '',
    budget: '',
    message: '',
    contactMethod: 'email'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData)
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-muted/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 glow-accent">
            <Check className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="font-deco text-2xl mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your consultation request has been received. Koni will personally review your 
              information and respond within 24 hours with available times and next steps.
            </p>
            <div className="text-sm text-muted-foreground">
              <strong>What's Next:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Koni will review your event details</li>
                <li>• You'll receive a personal response within 24 hours</li>
                <li>• We'll schedule your complimentary consultation</li>
                <li>• Together we'll create your perfect floral vision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking-form" className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl mb-6">
            Book Your <span className="text-accent">Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your event and we'll create a custom proposal just for you
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 lg:p-12 glow-accent">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-caps text-accent mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-caps text-accent mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-caps text-accent mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="(214) 555-0123"
                />
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-caps text-accent mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eventType" className="block text-sm font-caps text-accent mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="elopement">Elopement</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="celebration">Celebration/Party</option>
                  <option value="subscription">Flower Subscription</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="guestCount" className="block text-sm font-caps text-accent mb-2">
                  Guest Count
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select guest count</option>
                  <option value="under-25">Under 25</option>
                  <option value="25-50">25-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-150">100-150</option>
                  <option value="over-150">Over 150</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="venue" className="block text-sm font-caps text-accent mb-2">
                  Venue Name
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Venue name or location"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-caps text-accent mb-2">
                  Floral Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-1500">$1,000 - $1,500</option>
                  <option value="1500-2000">$1,500 - $2,000</option>
                  <option value="2000-3000">$2,000 - $3,000</option>
                  <option value="over-3000">Over $3,000</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-caps text-accent mb-2">
                Tell Us About Your Vision
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-vertical"
                placeholder="Describe your style, color preferences, inspiration, or any specific requests..."
              />
            </div>

            {/* Contact Preference */}
            <div>
              <label className="block text-sm font-caps text-accent mb-2">
                Preferred Contact Method
              </label>
              <div className="flex space-x-6">
                {['email', 'phone', 'whatsapp'].map((method) => (
                  <label key={method} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod === method}
                      onChange={handleChange}
                      className="text-accent focus:ring-accent"
                    />
                    <span className="text-sm capitalize">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-6">
              <Button 
                type="submit" 
                variant="glow" 
                size="lg" 
                disabled={isSubmitting}
                className="min-h-[48px] px-12 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Book My Consultation
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Free consultation • No obligation • Response within 24 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
