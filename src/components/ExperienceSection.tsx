import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Users } from "lucide-react";

interface TimelineItem {
  type: "experience" | "education" | "leadership";
  title: string;
  org: string;
  period: string;
  desc?: string;
  bullets?: string[];
  tech?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "experience",
    title: "Freelance Full Stack Developer",
    org: "RK Connect (RK Infra Projects Pvt. Ltd.)",
    period: "Jul 2026 – Present",
    desc: "Designed and built RK Connect end-to-end — a production mobile + web platform replacing paper registers for a road-construction company across 5 user roles.",
    bullets: [
      "Built Fastify + TypeScript backend with Drizzle ORM on PostgreSQL (Supabase), Argon2id auth, session tokens & role-and-scope RBAC guard with audit logging across 30+ endpoints.",
      "Developed offline-first React Native (Expo) field app with SQLite outbox/sync engine for idempotent batch sync without internet.",
      "Built React + Vite management dashboard (approvals, stock, cost-per-activity reporting, CSV export) & automated Expo EAS releases.",
    ],
    tech: ["Fastify", "TypeScript", "React Native", "PostgreSQL", "Drizzle ORM", "SQLite", "Expo EAS"],
  },
  {
    type: "experience",
    title: "Software Development Intern",
    org: "Victory Bazars Pvt. Ltd.",
    period: "May 2026 – Present",
    desc: "Developing a grocery e-commerce platform supporting 85,000+ SKUs, inventory, ordering, and admin operations.",
    bullets: [
      "Building customer mobile app, admin dashboard, and backend APIs (catalog, inventory, orders) with Cloudinary and JWT auth.",
      "Implemented order-lifecycle backend modules: a concurrency-safe inventory reservation engine using row-level locking, payment-first checkout with idempotent Razorpay processing and webhook signature verification, and an order state machine.",
      "Designing RESTful APIs, integrating Cloudinary for media management, and optimizing caching and state management with Redis.",
    ],
    tech: ["React Native", "React.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "Razorpay", "Cloudinary"],
  },
  {
    type: "education",
    title: "B.Tech in Computer Science and Engineering",
    org: "RGUKT Srikakulam",
    period: "2023 – 2027",
    desc: "CGPA: 8.40 • Core focus on Data Structures & Algorithms, Full-Stack Architecture, and System Design.",
  },
  {
    type: "education",
    title: "Pre-University Course (MPC)",
    org: "RGUKT Srikakulam",
    period: "2021 – 2023",
    desc: "CGPA: 9.32",
  },
  {
    type: "education",
    title: "Secondary Education",
    org: "Bhashyam Educational Institutions",
    period: "2021",
    desc: "CGPA: 10.00",
  },
  {
    type: "leadership",
    title: "Training & Placement Cell Coordinator",
    org: "RGUKT Srikakulam",
    period: "Extracurricular",
    desc: "Assisted in campus recruitment activities and student-industry engagement.",
  },
  {
    type: "leadership",
    title: "Hospitality Coordinator",
    org: "RGUKT Srikakulam",
    period: "Extracurricular",
    desc: "Managed end-to-end operations for 2 events at the college annual technical fest.",
  },
];


const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Journey</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30 z-10" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="glass-card rounded-xl p-5 hover-glow">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === "education" ? (
                      <GraduationCap size={16} className="text-primary" />
                    ) : item.type === "leadership" ? (
                      <Users size={16} className="text-primary" />
                    ) : (
                      <Briefcase size={16} className="text-secondary" />
                    )}
                    <span className="text-xs text-muted-foreground font-medium">{item.period}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-primary/80 mb-2">{item.org}</p>
                  {item.desc && (
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.desc}</p>
                  )}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="space-y-1.5 my-2.5">
                      {item.bullets.map((b, bi) => (
                        <li key={bi} className="text-xs text-muted-foreground/90 leading-relaxed flex items-start gap-1.5">
                          <span className="text-primary mt-1 text-[8px]">&bull;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-border/40">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
