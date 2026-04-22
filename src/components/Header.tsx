import { motion } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Story", href: "#story" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="font-serif text-xl font-semibold tracking-tight">
Winners In Action Now</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link"
            >
              {item.name}
            </motion.a>
          ))}
          <Button variant="outline" className="rounded-full px-6" asChild>
            <a href="https://calendly.com/wianinternational/1on1" target="_blank" rel="noopener noreferrer">
              Book a Session
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b border-border overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-lg font-serif"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full rounded-full mt-4">Book a Session</Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
