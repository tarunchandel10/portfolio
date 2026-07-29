import { ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import { GithubIcon } from "@/components/ui/icons";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <Heading
        heading="Projects"
        subtitle="A selection of things I've designed and built."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/30"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="px-3 py-1 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
