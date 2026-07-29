import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <Heading
        heading="Experience"
        subtitle="Where I've worked and what I've built along the way."
      />

      <div className="relative mt-14 space-y-10 border-l border-white/10 pl-8">
        {experiences.map((exp) => (
          <div key={`${exp.role}-${exp.company}`} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/30">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>

                <span className="text-sm font-medium text-blue-400">
                  {exp.duration}
                </span>
              </div>

              <div className="mt-1 text-sm font-medium text-slate-400">
                {exp.company} &middot; {exp.location}
              </div>

              <p className="mt-4 leading-7 text-slate-400">
                {exp.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {exp.tech.map((tech) => (
                  <Badge key={tech} className="px-3 py-1 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
