import Container from "@/components/ui/Container";
import { navigation } from "@/constants/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-white transition hover:text-blue-400"
        >
          Tarunender
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-slate-500">
          &copy; {year} Tarunender Singh. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
