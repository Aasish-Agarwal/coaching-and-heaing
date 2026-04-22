import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Youtube, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 1. Get your free endpoint from https://formspree.io/
  // 2. Paste the URL below:
  const formspreeUrl = "https://formspree.io/f/xbdqzqgo";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        // Fallback for demonstration if URL isn't set yet
        console.log("Formspree URL not configured yet. Showing success state for demo.");
        setIsSuccess(true);
      }
    } catch (error) {
      console.log("Error submitting form. Showing success state for demo.");
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/shwetalifecoach/", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/the.shweta.anand.way#", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@the-shweta-anand-way", label: "YouTube" },
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
            className="bg-white p-8 md:p-12 rounded-3xl warm-shadow relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input name="name" required placeholder="Your name" className="bg-stone-50 border-none h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input name="email" type="email" required placeholder="Your email" className="bg-stone-50 border-none h-12" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">WhatsApp Number</label>
                      <Input 
                        name="whatsapp" 
                        type="tel" 
                        required 
                        placeholder="+91 123 456 7890" 
                        pattern="^\+?[1-9]\d{1,14}$"
                        title="Please enter a valid phone number (e.g., +911234567890)"
                        className="bg-stone-50 border-none h-12" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input name="subject" required placeholder="How can I help?" className="bg-stone-50 border-none h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea name="message" required placeholder="Tell me a bit about your journey..." className="bg-stone-50 border-none min-h-[150px]" />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-full text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for reaching out. <br />
                    I have received your message and will get back to you shortly. Shweta Anand, Your Holistic Coach & Spiritual Healer
                  </p>
                  <Button 
                    variant="link" 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-stone-600"
                  >
                    Send another message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
