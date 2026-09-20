import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium mb-4 tracking-widest uppercase text-sm"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Mahesh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-4 font-medium"
        >
          Full-Stack &amp; Mobile Developer &bull; Fastify &amp; React Native &bull; AI-Native Product Builder
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I ship production software end-to-end — frontend, backend, databases, APIs, testing, and deployment.
          Experienced in building scalable platforms (RK Connect, Victory Bazars) and passionate about AI-native products where models interact with real users, data, and workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-primary-foreground bg-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="https://drive.google.com/file/d/1PLTNIwEIMeOimhi1vjPARwKtQohRVU4U/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-border text-foreground hover:border-primary/50 hover:bg-muted/50 transition-all duration-300"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Handles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <a
            href="https://github.com/sunkaramahesh09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card hover-glow border border-border/70 text-foreground/90 hover:text-primary hover:border-primary/50 text-sm font-medium transition-all duration-300 shadow-sm group"
          >
            <Github size={18} className="text-primary group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mahesh-sunkara-83b15b29a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card hover-glow border border-border/70 text-foreground/90 hover:text-primary hover:border-primary/50 text-sm font-medium transition-all duration-300 shadow-sm group"
          >
            <Linkedin size={18} className="text-primary group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
