import { useInView } from "@/hooks/useInView";
import { ArrowRight, Download, Github, Code2, Paintbrush, Linkedin, Atom, Database, Terminal, Globe2 } from "lucide-react";
import { LeetCodeIcon } from "@/components/icons/LeetCode";

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {kicker && <p className="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>}
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container grid md:grid-cols-2 gap-8 items-center py-24 md:py-32">
        <div className="animate-fade-in-up [animation-delay:120ms]">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Frontend Developer</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.1]">
            Hi, I’m <span className="text-primary">LALIT</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            I craft clean, performant, and delightful web experiences with modern JavaScript, React, and beautiful UI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-foreground/90 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
        <div className="relative animate-fade-in-up [animation-delay:250ms]">
          <div className="aspect-square rounded-full border-4 border-primary/20 p-1">
            <img
              src="https://picsum.photos/seed/lalit/800/800"
              alt="Profile placeholder"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <img
            src="https://picsum.photos/seed/about/900/700"
            alt="About placeholder"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
        <div className={`transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
          <SectionTitle kicker="About" title="A bit about me" />
          <p className="text-muted-foreground leading-relaxed">
            I’m a frontend developer focused on building accessible, responsive, and elegant interfaces. I enjoy turning
            complex problems into intuitive, delightful experiences. Currently exploring micro-interactions, animations,
            and performance-first architectures.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/80">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Pixel-perfect UI</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Accessibility</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Performance</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: Paintbrush },
    { name: "JavaScript", icon: Code2 },
    { name: "ReactJS", icon: Atom },
    { name: "SQL", icon: Database },
    { name: "Linux", icon: Terminal },
    { name: "C++", icon: Code2 },
    { name: "C", icon: Code2 },
    { name: "GitHub", icon: Github },
  ];
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28 bg-accent/20">
      <div className="container">
        <SectionTitle kicker="Skills" title="Tech I work with" subtitle="Hover to see the vibe" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group rounded-xl border border-border bg-card p-5 text-center transition-transform hover:scale-[1.03] hover:shadow-lg"
            >
              <s.icon className="mx-auto h-7 w-7 text-primary transition-transform group-hover:-translate-y-0.5" />
              <div className="mt-2 text-sm font-medium">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const items = Array.from({ length: 4 }).map((_, i) => ({
    img: `https://picsum.photos/seed/p${i + 1}/600/400`,
    title: `Garbage Project ${i + 1}`,
    desc: "A fake project proving nothing with stylish vibes and smooth hover animations.",
    href: "#",
  }));

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionTitle kicker="Projects" title="Selected work" subtitle="Sample cards with garbage images and links" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:scale-[1.02] hover:shadow-xl">
              <div className="overflow-hidden">
                <img src={p.img} alt="Project placeholder" className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4">
                  <a href={p.href} className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-primary-foreground shadow-sm hover:opacity-90">look</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionTitle kicker="Contact" title="Let's build something" subtitle="Placeholder form with smooth focus animations" />
        <div className="grid md:grid-cols-2 gap-10">
          <form
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("This form is a placeholder. Connect your backend to make it work.");
            }}
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <input
                  id="name"
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-primary/40"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-primary/40"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-primary/40"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="font-semibold">Connect</h4>
              <p className="mt-1 text-sm text-muted-foreground">Reach out via any platform below. These are fake links for now.</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                    <LeetCodeIcon className="h-4 w-4" />
                    <span>LeetCode</span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent">
                    <Globe2 className="h-4 w-4" />
                    <span>Portfolio</span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="font-semibold">Location</h4>
              <p className="mt-1 text-sm text-muted-foreground">Somewhere on Earth, writing clean code and brewing coffee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
