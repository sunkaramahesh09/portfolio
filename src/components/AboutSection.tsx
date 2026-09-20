import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, ShieldCheck, Sparkles } from "lucide-react";
import maheshSketch from "@/assets/mahesh-sketch.jpg";

const strengths = [
  { icon: Code2, label: "Full-Stack & Mobile", desc: "Fastify, React.js, React Native (Expo), TypeScript" },
  { icon: Database, label: "Offline-First & Databases", desc: "PostgreSQL, Supabase, SQLite outbox sync, Redis, Drizzle" },
  { icon: ShieldCheck, label: "Security & Architecture", desc: "Argon2id, Session tokens, RBAC, Audit Logging, REST APIs" },
  { icon: Sparkles, label: "AI-Assisted & DevOps", desc: "Claude, Cursor, Docker, GitHub Actions CI, Expo EAS" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Turning Ideas Into <span className="gradient-text">Production Software</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl -z-10 group-hover:from-primary/50 group-hover:to-secondary/50 transition-all duration-500" />
              {/* Card */}
              <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl glass-card glow-effect overflow-hidden">
                <img
                  src={maheshSketch}
                  alt="Mahesh Sunkara – pencil sketch portrait"
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                  style={{ mixBlendMode: "luminosity", filter: "contrast(1.08) brightness(0.92)" }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                {/* Gradient border shimmer on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, hsl(265 90% 65% / 0.08), hsl(220 70% 55% / 0.08))" }} />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Computer Science undergraduate (2027) at RGUKT Srikakulam who ships production software end to end — frontend, backend, databases, APIs, testing, and deployment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Currently working as a Software Development Intern at Victory Bazars and freelance developer of RK Connect, a production multi-role platform in daily use. I build with AI tooling daily and am focused on creating AI-native products where models interact seamlessly with real users, data, and production workflows.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 hover-glow"
                >
                  <s.icon className="text-primary mb-2" size={20} />
                  <p className="font-display font-semibold text-sm text-foreground">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
