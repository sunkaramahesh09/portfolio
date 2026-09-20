import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import foreverImage from "../assets/forever.png";
import pizzaImage from "../assets/pizza.png";
import motoMusicImage from "../assets/motomusic.jpg";
import deepfakeImage from "../assets/deepfake.jpg";
import aiStudyImage from "../assets/aistudy.png";

const projects = [
  {
    title: "AI.Prof – Your AI Study Companion",
    badge: "Flagship • AI & RAG",
    description:
      "AI-powered learning platform where users create Spaces and Projects, upload PDF materials, interact with a grounded AI Tutor, take adaptive quizzes, track concept mastery, and receive personalized recommendations. Features a production RAG pipeline using PDF chunking, Gemini embeddings, PostgreSQL/pgvector retrieval, and async document processing with pg-boss.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Gemini Embeddings",
      "PostgreSQL",
      "pgvector",
      "pg-boss",
      "RAG",
    ],
    live: "https://ai-study-companion-ruby.vercel.app/",
    github: "https://github.com/sunkaramahesh09/ai-study-companion",
    image: aiStudyImage,
  },
  {
    title: "Pizzonex – Full-Stack Pizza Ordering Platform",
    badge: "Full-Stack Web App",
    description:
      "Built and deployed a full-stack pizza ordering platform with a custom interactive pizza builder, real-time preview, cart & checkout, order tracking with status updates, email-verified authentication, and admin inventory dashboard. Independently deployed on Vercel with reproducible database seeding.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
    ],
    live: "https://pizzonex.vercel.app/",
    github: "https://github.com/sunkaramahesh09/pizzonex",
    image: pizzaImage,
  },
  {
    title: "Moto Music – Offline Android Music Player",
    badge: "Open Source • Android",
    description:
      "Built and shipped a signed public release of an ad-free, offline Android music player with zero network permissions. Covered by 55 unit tests with GitHub Actions CI running tests, lint, and assemble on every push. Profiled with dumpsys gfxinfo on 120 Hz device, optimizing janky frames from 64.9% down to 11.5% with R8.",
    tech: [
      "Android",
      "Java / Kotlin",
      "GitHub Actions CI",
      "dumpsys gfxinfo",
      "R8 Optimization",
      "Unit Testing",
    ],
    live: "https://github.com/sunkaramahesh09/moto-music/releases/tag/v0.1.0",
    github: "https://github.com/sunkaramahesh09/moto-music",
    image: motoMusicImage,
  },
  {
    title: "Deepfake Image Detection System",
    badge: "Andhra University Hackathon 2026",
    description:
      "Designed an ML-based system to classify images as AI-generated or real using a model trained on image manipulation patterns. Engineered an end-to-end pipeline covering data preprocessing, model integration, and a responsive web UI for real-time upload and prediction display.",
    tech: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Deepfake Detection",
      "Web UI",
    ],
    github: "https://github.com/sunkaramahesh09/deepfake_detection1",
    image: deepfakeImage,
  },
  {
    title: "Forever – Full Stack E-Commerce Platform",
    badge: "MERN Platform",
    description:
      "Developed a scalable MERN application with user authentication, dynamic shopping cart, product management, and an admin operations module. Designed REST APIs and structured MongoDB schemas with role-based access control (RBAC) and JWT authentication.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    live: "https://forever-frontend-nu-seven.vercel.app/",
    github: "https://github.com/sunkaramahesh09/forever",
    image: foreverImage,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Projects &amp; Open Source
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover-glow group flex flex-col justify-between"
            >
              <div>
                {/* Preview image */}
                <div className="relative h-56 overflow-hidden bg-muted/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.badge && (
                    <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-primary border border-border/50 flex items-center gap-1 shadow-sm">
                      <Sparkles size={12} />
                      {project.badge}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex gap-4 border-t border-border/30 mt-auto pt-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
