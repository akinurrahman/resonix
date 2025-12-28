'use client';

import { useState } from 'react';

import { TESTIMONIALS } from '../constants';

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
            Client Reviews
          </h2>
          <h3 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h3>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped
            succeed.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="bg-background border-border rounded-2xl border p-8 shadow-lg sm:p-12">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg className="text-primary/20 h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-6">
              <p className="text-foreground text-xl leading-relaxed sm:text-2xl">
                &quot;{TESTIMONIALS[activeIndex].content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="from-primary/20 to-primary/10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br">
                  <span className="text-primary text-xl font-bold">
                    {TESTIMONIALS[activeIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-foreground font-semibold">
                    {TESTIMONIALS[activeIndex].author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {TESTIMONIALS[activeIndex].designation}
                    {TESTIMONIALS[activeIndex].company && (
                      <> at {TESTIMONIALS[activeIndex].company}</>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="bg-background border-border hover:bg-accent hover:border-primary/50 flex h-12 w-12 items-center justify-center rounded-full border transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                className="text-foreground h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-background border-border hover:bg-accent hover:border-primary/50 flex h-12 w-12 items-center justify-center rounded-full border transition-all"
              aria-label="Next testimonial"
            >
              <svg
                className="text-foreground h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
