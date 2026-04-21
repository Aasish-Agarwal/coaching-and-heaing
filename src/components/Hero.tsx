import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-stone-100/50 rounded-l-[100px]" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 left-10 -z-10 w-64 h-64 bg-stone-200 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-stone-100 text-stone-600 text-sm font-medium mb-6"
          >
            Holistic Healing & Conscious Coaching
          </motion.span>
          <h1 className="text-6xl md:text-7xl font-serif leading-[1.1] mb-6">
            Reconnect with your <span className="serif-italic">inner essence.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            I help high-achievers and seekers navigate life transitions, heal emotional wounds, and align with their soul's purpose through authentic energy work and intuitive coaching.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg">
              Start Your Journey
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-lg group">
              Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://picsum.photos/seed/healing-meditation/800/1000" 
              alt="Meshweta Anand" 
              className="pill-image warm-shadow w-full max-w-md mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-stone-200 rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-stone-200 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
