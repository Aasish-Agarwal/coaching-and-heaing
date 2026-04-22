import { Sparkles, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  const socials = [
    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/shwetalifecoach/", label: "Instagram" },
    { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/the.shweta.anand.way#", label: "Facebook" },
    { icon: <Youtube className="w-4 h-4" />, href: "https://www.youtube.com/@the-shweta-anand-way", label: "YouTube" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/shweta-anand-lion-886aba13/", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-serif text-lg font-semibold">Shweta Anand</span>
          </div>
          
          <div className="flex gap-6">
            {socials.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-stone-50 rounded-full"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-8 text-sm font-medium">
            <button 
              onClick={() => setActiveModal("privacy")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveModal("terms")}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50">
          © {new Date().getFullYear()} Shweta Anand. All rights reserved.
        </div>
      </div>

      <LegalModal 
        isOpen={activeModal === "privacy"} 
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        type="privacy"
      />
      
      <LegalModal 
        isOpen={activeModal === "terms"} 
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
        type="terms"
      />
    </footer>
  );
}
