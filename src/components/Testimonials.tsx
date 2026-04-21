import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Connecting with Shweta Maam was like connecting with one of those guiding angels who is always by our side, taking care of ourselves without even being asked for and healing and nourishing us with her pious energy through out.",
      author: "Sunita Uniyal",
      role: "Academician"
    },
    {
      quote: "Thank you is a small word for expressing my words for you mam....your sessions were really really helpful for me for past few days I'm feeling like something is out from my body, from past so many months I used to feel like something is sitting on my shoulder, but after talking to you after meeting you after attending your sessions, now I can feel I'm a little relaxed, all becoz of you...Thank you so so so much..for being with me like a friend, best friend, supporter, teacher, angel and a mother ❤️ I love you ❤️❤️I'm grateful that I met you ✨💕",
      author: "Ishika Saini",
      role: "Media Professional"
    },
    {
      quote: "She is truly a divine blessing , she helps listens you like your mother , sister , friend.... And tell u the life truths no sugar coating.... I love the healing session with her , once again thank you mam 💕",
      author: "Harshita Khambra",
      role: "Hospitality Professional"
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
