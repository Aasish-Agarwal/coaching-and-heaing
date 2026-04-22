import { motion } from "motion/react";
import { Quote, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  // Replace this with your actual Google Reviews link
  const googleReviewsUrl = "https://www.google.com/search?sca_esv=8b90a2d696e076c2&sxsrf=ANbL-n4mQGLPFdRDrmL0mRl3soWEWjiuFA:1776834656070&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWSJed6sHc5-fajkNiPT3akUpNyZEoCQeLCvfL0kMe3SAMB5x8t6XsY2pn_dEvKL-yJVDIr8cwVhO4eJSGjF-uQ9qhzw3FEcMrZT6QRNqdBlitlPYw%3D%3D&q=WIAN+INTERNATIONAL+Reviews&sa=X&ved=2ahUKEwitrf_z2ICUAxXcUGwGHTQwGcoQ0bkNegQILhAF&biw=1280&bih=585&dpr=1.5"
  const testimonials = [
    {
      text: "Connecting with Shweta Maam was like connecting with one of those guiding angels who is always by our side, taking care of ourselves without even being asked for and healing and nourishing us with her pious energy through out.",
      author: "Sunita Uniyal",
      role: "Academician",
      rating: 5,
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      text: "Thank you is a small word for expressing my words for you mam....your sessions were really really helpful for me for past few days I'm feeling like something is out from my body, from past so many months I used to feel like something is sitting on my shoulder, but after talking to you after meeting you after attending your sessions, now I can feel I'm a little relaxed, all becoz of you...Thank you so so so much..for being with me like a friend, best friend, supporter, teacher, angel and a mother ❤️ I love you ❤️❤️I'm grateful that I met you ✨💕",
      author: "Ishika Saini",
      role: "Media Professional",
      rating: 5,
      image: "https://picsum.photos/seed/david/100/100"
    },
    {
      text: "She is truly a divine blessing , she helps listens you like your mother , sister , friend.... And tell u the life truths no sugar coating.... I love the healing session with her , once again thank you mam 💕",
      author: "Harshita Khambra",
      role: "Hospitality Professional",
      rating: 5,
      image: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Kind <span className="serif-italic">words.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl warm-shadow relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-stone-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-stone-600 text-stone-600" />
                ))}
              </div>
              <p className="text-lg mb-8 relative z-10 leading-relaxed italic flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-serif font-bold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button 
            asChild
            variant="outline" 
            className="rounded-full px-8 h-12 text-base group"
          >
            <a 
              href={googleReviewsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View all on Google <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
