import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src="/images/IMG20260409101613.jpg" 
            alt="Authenticity" 
            className="rounded-3xl warm-shadow w-full aspect-[4/5] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 bg-background p-8 rounded-2xl warm-shadow hidden lg:block max-w-xs">
            <p className="font-serif italic text-lg leading-relaxed">
              "Healing is not about becoming someone else, but about coming home to who you've always been."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8">The path to <span className="serif-italic">authenticity.</span></h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              My journey began in the quiet spaces of self-reflection and the loud challenges of corporate life. I realized that true success wasn't measured by titles, but by the depth of one's peace and the clarity of one's purpose.
            </p>
            <p>
              With over a decade of experience in energy work and transformational coaching, I've dedicated my life to helping others shed the layers of expectation and rediscover their innate brilliance.
            </p>
            <p>
              I believe in a grounded approach to spirituality—one that honors the mystical while remaining deeply practical for the world we live in today.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">Certified Life Coach</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">Reiki Master</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">Meditation Guide</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">NLP Practitioner</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal">TODO</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
