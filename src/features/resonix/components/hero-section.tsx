interface HeroSectionProps {
  onRequestDemo: () => void;
  onViewWork: () => void;
}

export function HeroSection({ onRequestDemo, onViewWork }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4 pt-16 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div className="from-primary/5 via-background to-background absolute inset-0 -z-10 bg-gradient-to-br" />

      <div className="container mx-auto max-w-5xl text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-foreground block">Digital Excellence,</span>
            <span className="from-primary via-primary/80 to-primary/60 block bg-gradient-to-r bg-clip-text text-transparent">
              Delivered On Demand
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed sm:text-xl md:text-2xl">
            We craft high-quality web solutions that elevate your business. Professional, efficient,
            and tailored to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <button
              onClick={onRequestDemo}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg px-8 py-4 text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl sm:w-auto"
            >
              Request a Demo
            </button>
            <button
              onClick={onViewWork}
              className="bg-background border-border text-foreground hover:bg-accent hover:border-primary/50 w-full rounded-lg border-2 px-8 py-4 text-lg font-semibold transition-all sm:w-auto"
            >
              View Our Work
            </button>
          </div>

          {/* Trust indicators */}
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-8 pt-12 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="text-primary h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Quality Assured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-primary h-5 w-5"
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
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="text-primary h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Cost Effective</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <svg
          className="text-muted-foreground h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
