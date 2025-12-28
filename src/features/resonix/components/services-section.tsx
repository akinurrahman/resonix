import { SERVICES } from '../constants';
import type { Service } from '../types';

export function ServicesSection() {
  return (
    <section id="services" className="bg-accent/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <h3 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            What We Offer
          </h3>
          <p className="text-muted-foreground text-lg">
            Comprehensive web solutions tailored to your business needs. From design to development
            and ongoing support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service: Service) => (
            <div
              key={service.id}
              className="group bg-background border-border hover:border-primary/50 rounded-xl border p-8 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h4 className="text-foreground group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>

              {/* Learn More Link */}
              <div className="text-primary mt-6 flex items-center text-sm font-medium transition-all group-hover:gap-2">
                <span>Learn more</span>
                <svg
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
