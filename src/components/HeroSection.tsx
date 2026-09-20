import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import heroCarPoster from "@/assets/hero-car-poster.webp";
import { SakuraCanvas } from "@/components/SakuraCanvas";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked parallax & smooth section blending
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax scale & fade out as user scrolls towards next section
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.45, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[105vh] flex items-center justify-center overflow-hidden"
    >
      {/* ─── Animated Video & 8K Enhanced Background ─── */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroCarPoster}
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-car-loop.mp4" type="video/mp4" />
          {/* Fallback to high-res poster */}
          <img
            src={heroCarPoster}
            alt="BMW M-Performance in Sakura Sunset"
            className="w-full h-full object-cover object-center"
          />
        </video>
      </motion.div>

      {/* ─── Seamless Multi-Stop Theme Blending Overlays ─── */}
      {/* 1. Global ambient tone for light and dark modes */}
      <div className="absolute inset-0 bg-background/55 dark:bg-background/65 backdrop-blur-[0.5px] pointer-events-none transition-colors duration-500" />

      {/* 2. Top vignette for navbar contrast */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background/90 via-background/40 to-transparent pointer-events-none" />

      {/* 3. Floating glowing accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/15 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/15 blur-[140px] animate-pulse-glow pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* 4. Interactive falling Sakura petals (matching the car livery & cherry blossoms) */}
      <SakuraCanvas />

      {/* 5. Deep bottom feather gradient that merges 100% seamlessly into #about section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 md:h-96 bg-gradient-to-t from-background via-background/80 via-background/40 to-transparent pointer-events-none z-10" />

      {/* ─── Hero Content ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 container mx-auto px-4 text-center pt-20 pb-16"
      >
        {/* Welcome Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/30 mb-6 shadow-sm"
        >
          <Sparkles size={14} className="text-primary animate-pulse" />
          <span className="text-primary font-medium tracking-widest uppercase text-xs">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-sm"
        >
          Hi, I'm{" "}
          <span className="gradient-text drop-shadow-md">Mahesh</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/90 dark:text-muted-foreground mb-4 font-medium max-w-3xl mx-auto"
        >
          Full-Stack &amp; Mobile Developer &bull; Fastify &amp; React Native &bull; AI-Native Product Builder
        </motion.p>

        {/* Bio paragraph with soft glass backdrop for pristine legibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            I ship production software end-to-end — frontend, backend, databases, APIs, testing, and deployment.
            Experienced in building scalable platforms (RK Connect, Victory Bazars) and passionate about AI-native products where models interact with real users, data, and workflows.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-primary-foreground bg-primary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 group"
          >
            View Projects
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://drive.google.com/file/d/1PLTNIwEIMeOimhi1vjPARwKtQohRVU4U/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-border/80 glass-card text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-sm"
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
