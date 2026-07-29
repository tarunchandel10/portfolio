import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <Heading
        heading="Skills"
        subtitle="Technologies and tools I work with regularly."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/30"
          >
            <h3 className="text-xl font-bold text-white">{category.title}</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
