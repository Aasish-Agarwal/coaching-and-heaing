import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Meshweta has a gift for seeing through the noise. Her sessions helped me find clarity during a major career shift.",
      author: "Sarah J.",
      role: "Creative Director"
    },
    {
      quote: "The energy work was unlike anything I've experienced. I felt a profound sense of peace that lasted for weeks.",
      author: "David M.",
      role: "Entrepreneur"
    },
    {
      quote: "She doesn't just coach; she heals. Her intuitive approach helped me uncover patterns I'd been stuck in for years.",
      author: "Elena R.",
      role: "Wellness Practitioner"
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Kind <span className="serif-italic">words.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl warm-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-stone-100" />
              <p className="text-lg mb-8 relative z-10 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-serif font-bold">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
