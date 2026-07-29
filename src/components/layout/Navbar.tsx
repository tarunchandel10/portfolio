import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Magnetic from "@/components/ui/Magnetic";
import { navigation } from "@/constants/navigation";
import { RESUME_URL } from "@/constants/resume";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-slate-900/60 px-8 shadow-lg backdrop-blur-xl">
          {/* Logo */}
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight text-white transition hover:text-blue-400"
          >
            Tarunender
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:block">
            <Magnetic strength={0.5}>
              <a href={RESUME_URL} download target="_blank" rel="noreferrer">
                <Button size="sm">Resume</Button>
              </a>
            </Magnetic>
          </div>
        </div>
      </Container>
    </header>
  );
}