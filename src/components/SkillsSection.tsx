import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Languages",
    skills: ["Java (DSA)", "TypeScript", "Python", "JavaScript", "C", "SQL"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React.js", "React Native (Expo)", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend & APIs",
    skills: ["Fastify", "Node.js", "Express.js", "Drizzle ORM", "REST APIs"],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "pgvector", "Supabase", "MongoDB", "SQLite", "Redis", "MySQL"],
  },
  {
    title: "AI-Native & Tooling",
    skills: ["RAG", "Gemini Embeddings", "Claude", "Cursor", "GitHub Copilot", "Prompt Engineering", "LLM APIs"],
  },
  {
    title: "Testing & DevOps",
    skills: ["Unit Testing", "GitHub Actions CI", "Docker", "Expo EAS", "Vercel", "Postman", "Cloudinary"],
  },
  {
    title: "Security & Auth",
    skills: ["Argon2id", "JWT", "bcrypt.js", "RBAC", "Session Tokens", "Audit Logging"],
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks", "SDLC"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-glow group"
            >
              <h3 className="font-display font-bold text-lg mb-4 gradient-text">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-muted/50 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
