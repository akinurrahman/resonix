import { CLIENTS } from '../constants';
import type { Client } from '../types';

export function ClientsSection() {
  return (
    <section id="clients" className="bg-accent/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
            Our Clients
          </h2>
          <h3 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trusted by Leading Businesses
          </h3>
          <p className="text-muted-foreground text-lg">
            We&apos;re proud to partner with forward-thinking organizations that value quality and
            innovation.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {CLIENTS.map((client: Client) => (
            <div
              key={client.id}
              className="bg-background border-border hover:border-primary/50 group flex items-center justify-center rounded-xl border p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center">
                {/* Logo Placeholder */}
                <div className="from-primary/20 to-primary/10 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br transition-transform group-hover:scale-110">
                  <span className="text-primary text-2xl font-bold">{client.name.charAt(0)}</span>
                </div>
                <div className="text-foreground text-sm font-medium">{client.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic">
            &quot;Partnering with businesses to create digital experiences that matter&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
