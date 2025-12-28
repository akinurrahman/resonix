import { BRAND } from '../constants';

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-primary text-sm font-semibold tracking-wide uppercase">
                About Resonix
              </h2>
              <h3 className="text-foreground text-3xl font-bold sm:text-4xl lg:text-5xl">
                Your Partner in Digital Success
              </h3>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">{BRAND.mission}</p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 mt-1 rounded-full p-1">
                  <svg
                    className="text-primary h-4 w-4"
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
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Quality First</h4>
                  <p className="text-muted-foreground">
                    We never compromise on quality. Every project receives our full attention and
                    expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 mt-1 rounded-full p-1">
                  <svg
                    className="text-primary h-4 w-4"
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
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Efficient Delivery</h4>
                  <p className="text-muted-foreground">
                    We value your time. Our streamlined process ensures timely delivery without
                    sacrificing quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 mt-1 rounded-full p-1">
                  <svg
                    className="text-primary h-4 w-4"
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
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Reliable Support</h4>
                  <p className="text-muted-foreground">
                    We&apos;re here for you beyond launch. Ongoing support and maintenance keep your
                    site running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="from-primary/20 via-primary/10 to-background border-border aspect-square overflow-hidden rounded-2xl border bg-gradient-to-br">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid h-full w-full grid-cols-2 gap-4 p-8">
                  <div className="bg-background/80 border-border flex flex-col justify-center rounded-lg border p-6 backdrop-blur">
                    <div className="text-foreground text-3xl font-bold">5+</div>
                    <div className="text-muted-foreground text-sm">Years Experience</div>
                  </div>
                  <div className="bg-background/80 border-border flex flex-col justify-center rounded-lg border p-6 backdrop-blur">
                    <div className="text-foreground text-3xl font-bold">15+</div>
                    <div className="text-muted-foreground text-sm">Projects Delivered</div>
                  </div>
                  <div className="bg-background/80 border-border flex flex-col justify-center rounded-lg border p-6 backdrop-blur">
                    <div className="text-foreground text-3xl font-bold">100%</div>
                    <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                  </div>
                  <div className="bg-background/80 border-border flex flex-col justify-center rounded-lg border p-6 backdrop-blur">
                    <div className="text-foreground text-3xl font-bold">24/7</div>
                    <div className="text-muted-foreground text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
