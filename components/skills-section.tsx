export function SkillsSection() {
  const skills = {
    frontend: [
      { id: 1, title: "React", img: "" },
      { id: 2, title: "Next.js", img: "" },
      { id: 3, title: "TypeScript", img: "" },
      { id: 4, title: "Tailwind CSS", img: "" },
      { id: 4, title: "Bootstrap", img: "" },
      { id: 5, title: "HTML", img: "" },
      { id: 6, title: "CSS", img: "" },
      { id: 6, title: "JavaScript", img: "" },
      { id: 6, title: "JavaScript", img: "" },
      { id: 6, title: "JavaScript", img: "" },
    ],
    backend: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
    ],
    tools: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Testing"],
  };

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Technical Skills
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Frontend Development
            </h3>
            <ul className="space-y-3">
              {skills.frontend.map((skill) => (
                <li
                  key={skill.id}
                  className="text-base text-foreground md:text-lg"
                >
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Backend Development
            </h3>
            <ul className="space-y-3">
              {skills.backend.map((skill) => (
                <li
                  key={skill}
                  className="text-base text-foreground md:text-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Tools & Technologies
            </h3>
            <ul className="space-y-3">
              {skills.tools.map((skill) => (
                <li
                  key={skill}
                  className="text-base text-foreground md:text-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
