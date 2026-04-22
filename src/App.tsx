import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        {/* Story Section */}
        <section id="story" className="py-24 bg-stone-900 text-stone-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-8">My <span className="serif-italic">philosophy.</span></h2>
              <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  I believe that every individual carries a unique blueprint for their own healing. My role is not to "fix" you, but to hold a mirror to your own strength and provide the tools to clear the static that prevents you from hearing your own intuition.
                </p>
                <p>
                  Authenticity is the highest vibration. When we stop performing and start being, the world opens up in ways we never thought possible.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-stone-700/50" />
              <div className="absolute inset-4 rounded-full border border-stone-800 animate-[pulse_4s_infinite]" />
              <div className="w-[85%] h-[85%] rounded-full overflow-hidden relative z-10 border-2 border-stone-800/50">
                <img 
                  src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Zen stones and water" 
                  className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 transition-opacity duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
