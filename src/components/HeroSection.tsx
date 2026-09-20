import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import samuraiPoster from "@/assets/samurai-poster.webp";
import { MomijiLeavesCanvas } from "@/components/MomijiLeavesCanvas";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked smooth section blending (no camera zoom)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Dissolve video background smoothly into next section on scroll
  const bgOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.4, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[105vh] flex items-center justify-center overflow-hidden"
    >
      {/* ─── 8K Enhanced Living Animated Video (Steady Camera, Pure In-Scene Animation) ─── */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={samuraiPoster}
          className="w-full h-full object-cover object-center contrast-[1.15] saturate-[1.2] brightness-[0.96] dark:brightness-[0.88]"
        >
          <source src="/samurai-loop.mp4" type="video/mp4" />
          {/* Fallback to 8K high-res poster */}
          <img
            src={samuraiPoster}
            alt="Meditating Samurai under Red Maple Tree"
            className="w-full h-full object-cover object-center contrast-[1.15] saturate-[1.2] brightness-[0.96] dark:brightness-[0.88]"
          />
        </video>
      </motion.div>

      {/* ─── Seamless Multi-Stop Theme Blending Overlays ─── */}
      {/* 1. Subtle radial vignette to focus center contrast without washing out the artwork */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/40 pointer-events-none" />

      {/* 2. Top vignette for navbar contrast */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/80 via-background/30 to-transparent pointer-events-none" />

      {/* 3. Subtle ambient crimson glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-red-600/10 blur-[140px] animate-pulse-glow pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* 4. Interactive falling Momiji (Red Japanese Maple) leaves */}
      <MomijiLeavesCanvas />

      {/* 5. Deep bottom feather gradient that merges 100% seamlessly into #about section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-80 bg-gradient-to-t from-background via-background/80 via-background/30 to-transparent pointer-events-none z-10" />

      {/* ─── High-Contrast Hero Content Card ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 container mx-auto px-4 max-w-4xl text-center pt-24 pb-16"
      >
        <div className="glass-card backdrop-blur-2xl bg-background/80 dark:bg-background/70 border border-border/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-black/10 dark:shadow-black/50">
          {/* Welcome Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6 shadow-sm"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-primary font-semibold tracking-widest uppercase text-xs">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-foreground"
          >
            Hi, I'm{" "}
            <span className="gradient-text drop-shadow-md">Mahesh</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-foreground font-semibold mb-4 max-w-2xl mx-auto"
          >
            Full-Stack &amp; Mobile Developer &bull; Fastify &amp; React Native &bull; AI-Native Product Builder
          </motion.p>

          {/* Bio paragraph with rich dark contrast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <p className="text-foreground/80 dark:text-foreground/75 leading-relaxed text-sm sm:text-base font-normal">
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-primary-foreground bg-primary hover:opacity-95 transition-all duration-300 shadow-lg shadow-primary/30 group"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1PLTNIwEIMeOimhi1vjPARwKtQohRVU4U/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium border border-border/90 bg-card hover:bg-muted/70 text-foreground transition-all duration-300 shadow-sm"
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
            className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-border/50"
          >
            <a
              href="https://github.com/sunkaramahesh09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card hover:bg-muted/80 border border-border/80 text-foreground hover:text-primary text-sm font-semibold transition-all duration-300 shadow-sm group"
            >
              <Github size={18} className="text-primary group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-sunkara-83b15b29a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card hover:bg-muted/80 border border-border/80 text-foreground hover:text-primary text-sm font-semibold transition-all duration-300 shadow-sm group"
            >
              <Linkedin size={18} className="text-primary group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
