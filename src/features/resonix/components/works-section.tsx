import { ProjectCard } from '@/features/resonix/components/project-card';

import { PROJECTS } from '../constants';
import type { Project } from '../types';

export function WorksSection() {
  return (
    <section id="works" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
            Our Work
          </h2>
          <h3 className="text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Recent Projects
          </h3>
          <p className="text-muted-foreground text-lg">
            A showcase of our latest work. Each project reflects our commitment to quality,
            innovation, and client satisfaction.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project: Project) => (
            <ProjectCard
              key={project._id}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
