import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import Section from "@/components/ui/Section";
import { RESUME_URL } from "@/constants/resume";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Available for Opportunities
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl xl:text-8xl">
            Hi, I'm
            <br />
            <span className="text-blue-500">
              Tarunender Singh
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400 md:text-xl">
            I'm a front-end developer with 6+ years of experience building fast,
            scalable and responsive web applications using React, Next.js,
            JavaScript and WordPress, with a strong focus on performance and
            user experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <a href="#projects">
                <Button size="lg">
                  Explore My Work
                </Button>
              </a>
            </Magnetic>

            <Magnetic>
              <a href={RESUME_URL} download target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline">
                  Download CV
                </Button>
              </a>
            </Magnetic>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "React.js",
              "Next.js",
              "JavaScript",
              "WordPress",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-slate-300 backdrop-blur-lg transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        {/* Right */}
<div className="relative flex justify-center">
  {/* Background Glow */}
  <div className="absolute -top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

  {/* Browser Window */}
  <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
    {/* Browser Header */}
    <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
      <span className="h-3 w-3 rounded-full bg-red-400" />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-400" />

      <div className="ml-4 rounded-full bg-slate-800 px-4 py-1 text-xs text-slate-400">
        coupongini.com
      </div>
    </div>

    {/* Preview */}
    <div className="space-y-6 p-8">
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/images/projects/coupongini.png"
          alt="Coupongini project preview"
          className="w-full"
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">
          Coupongini
        </h3>

        <p className="mt-2 text-slate-400">
          A responsive coupons and deals platform built
          with React.js, Next.js and Bootstrap.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {[
          "React.js",
          "Next.js",
          "Bootstrap",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>
      </div>
    </Section>
  );
}