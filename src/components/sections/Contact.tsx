import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import Magnetic from "@/components/ui/Magnetic";
import Section from "@/components/ui/Section";
import { social } from "@/data/social";

const links = [
  { label: "Email", href: `mailto:${social.email}`, icon: Mail },
  { label: "WhatsApp", href: social.whatsapp, icon: WhatsappIcon },
  { label: "GitHub", href: social.github, icon: GithubIcon },
  { label: "LinkedIn", href: social.linkedin, icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-8 py-16 text-center backdrop-blur-xl md:px-16">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        <Heading
          align="center"
          heading="Let's Work Together"
          subtitle="Have a project in mind or just want to say hello? My inbox is always open."
          className="relative"
        />

        <div className="relative mt-10 flex justify-center">
          <Magnetic>
            <a href={`mailto:${social.email}`}>
              <Button size="lg">Say Hello</Button>
            </a>
          </Magnetic>
        </div>

        <div className="relative mt-10 flex justify-center gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <Magnetic key={label} strength={0.6}>
              <a
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </Section>
  );
}
