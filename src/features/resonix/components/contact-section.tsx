'use client';

import type { UseFormReturn } from 'react-hook-form';

import { CONTACT_INFO } from '../constants';
import type { ContactFormValues } from '../validators';

interface ContactSectionProps {
  form: UseFormReturn<ContactFormValues>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  onSubmit: (data: ContactFormValues) => void;
}

export function ContactSection({
  form,
  isSubmitting,
  submitStatus,
  onSubmit,
}: ContactSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
            Get in Touch
          </h2>
          <h3 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something Great Together
          </h3>
          <p className="text-muted-foreground text-lg">
            Ready to start your project? Reach out to us and let&apos;s discuss how we can help
            bring your vision to life.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-background border-border rounded-2xl border p-8 sm:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="text-foreground mb-2 block text-sm font-medium">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="bg-background border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="text-foreground mb-2 block text-sm font-medium">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="bg-background border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="text-foreground mb-2 block text-sm font-medium">
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="bg-background border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="text-foreground mb-2 block text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className="bg-background border-border focus:ring-primary w-full resize-none rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg px-8 py-4 font-semibold transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-foreground mb-6 text-2xl font-bold">Contact Information</h4>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-foreground mb-1 font-semibold">Address</div>
                    <p className="text-muted-foreground">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-foreground mb-1 font-semibold">Phone</div>
                    <div className="space-y-1">
                      {CONTACT_INFO.phones.map((phone, index) => (
                        <p key={index} className="text-muted-foreground">
                          {phone}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-foreground mb-1 font-semibold">Email</div>
                    <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-accent/50 border-border rounded-xl border p-6">
              <h5 className="text-foreground mb-3 font-semibold">Business Hours</h5>
              <div className="text-muted-foreground space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
