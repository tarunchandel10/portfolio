import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const stats = [
  { label: "Years of Experience", value: "6+" },
  { label: "Websites Shipped", value: "100+" },
  { label: "Companies", value: "6" },
];

export default function About() {
  return (
    <Section id="about">
      <Heading
        heading="About Me"
        subtitle="A little about who I am and how I work."
      />

      <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: Photo */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute -top-8 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <img
              src="/profile-picture.png"
              alt="Tarunender Singh"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: Bio */}
        <div>
          <p className="text-lg leading-8 text-slate-400">
            I'm a creative, detail-oriented front-end developer with over 6
            years of experience delivering high-quality, responsive web
            solutions — from modern React and Next.js applications to
            WordPress and Umbraco-driven sites. I've worked with teams across
            India, the UAE and beyond, building CRM interfaces, e-commerce
            storefronts, and marketing platforms.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I care about clean, scalable components and interfaces that feel
            effortless to use, and I enjoy collaborating closely with
            designers and backend teams to ship performant, maintainable
            products.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-lg"
              >
                <div className="text-2xl font-bold text-blue-400 md:text-3xl">
                  {stat.value}
                </div>

                <div className="mt-1 text-xs text-slate-400 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
