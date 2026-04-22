import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Contact() {
  const socials = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/lifecoachshweta/", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/the.shweta.anand.way#", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/channel/UCy4pteQhEE_NmT50IcNsoDA", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/shweta-anand-lion-886aba13/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Let's <span className="serif-italic">connect.</span></h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Whether you have a question or are ready to begin your transformation, I'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Mail className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:shweta.anand@wianinternational.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    shweta.anand@wianinternational.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <MapPin className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Global Online Sessions & In-person Retreats</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {socials.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform text-stone-600 hover:text-stone-900"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl warm-shadow"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" className="bg-stone-50 border-none h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="Your email" className="bg-stone-50 border-none h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can I help?" className="bg-stone-50 border-none h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell me a bit about your journey..." className="bg-stone-50 border-none min-h-[150px]" />
              </div>
              <Button className="w-full h-14 rounded-full text-lg">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
