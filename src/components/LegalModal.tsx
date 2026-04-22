import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: "privacy" | "terms";
}

export default function LegalModal({ isOpen, onClose, title, type }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-x-auto md:top-[10%] md:bottom-[10%] md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl bg-background rounded-3xl z-[101] shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between bg-stone-50">
              <h2 className="text-2xl font-serif">{title}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-stone-200 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 md:p-12 prose prose-stone max-w-none">
              {type === "privacy" ? (
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground">Last Updated: April 2026</p>
                  <p>Your privacy is of the utmost importance to us. This Privacy Policy describes how Shweta Anand ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website or engage in our coaching and healing services.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">1. Information We Collect</h3>
                  <p>We collect information that you provide directly to us through our contact form, including your name, email address, WhatsApp number, and any message you send. When you book a session via Calendly, we may collect booking details and contact info.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">2. How We Use Your Information</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To provide and manage our coaching and healing services.</li>
                    <li>To communicate with you regarding your inquiries or scheduled sessions.</li>
                    <li>To improve our website and client experience.</li>
                    <li>To send occasional updates or newsletters (only if you have opted in).</li>
                  </ul>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">3. Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to maintain the security of your personal information. However, no transmission over the internet or electronic storage is 100% secure.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">4. Sharing Your Information</h3>
                  <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website or servicing you (such as Formspree or Calendly), as long as those parties agree to keep this information confidential.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">5. Your Rights</h3>
                  <p>You have the right to request access to the personal information we hold about you, to request that your information be corrected or deleted, and to withdraw consent at any time.</p>
                </div>
              ) : (
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground">Last Updated: April 2026</p>
                  <p>Welcome to the Shweta Anand Coaching & Healing website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">1. Scope of Services</h3>
                  <p>Shweta Anand provides holistic coaching, energy healing, and spiritual mentoring. These services are intended for personal growth and spiritual development. They are not a substitute for professional medical advice, diagnosis, or treatment.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">2. Booking and Cancellations</h3>
                  <p>All sessions must be booked in advance. If you need to cancel or reschedule, please provide at least 24 hours' notice. Cancellations made with less than 24 hours' notice may be subject to a fee.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">3. Code of Conduct</h3>
                  <p>We maintain a sacred and respectful space for all clients. Any behavior deemed disrespectful, harassing, or inappropriate will result in the immediate termination of services without refund.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">4. Intellectual Property</h3>
                  <p>All content on this website, including text, designs, and images, is the property of Shweta Anand and is protected by copyright laws. You may not reproduce or reuse content without explicit written permission.</p>
                  
                  <h3 className="text-foreground font-serif text-xl border-b pb-2 pt-4">5. Limitation of Liability</h3>
                  <p>Under no circumstances shall Shweta Anand be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services or website.</p>
                </div>
              )}
            </div>
            
            <div className="p-6 bg-stone-50 border-t flex justify-center">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors font-medium"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
