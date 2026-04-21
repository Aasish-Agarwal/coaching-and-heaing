import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-serif text-lg font-semibold">Shweta Anand</span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shweta Anand. All rights reserved.
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
