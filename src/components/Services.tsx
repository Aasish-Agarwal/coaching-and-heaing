import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Sun, Moon } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Energy Healing",
      description: "Gentle yet powerful sessions to clear blockages and restore your natural vitality.",
      icon: <SparklesIcon />,
      color: "bg-stone-50"
    },
    {
      title: "Intuitive Coaching",
      description: "Deep-dive conversations to uncover your truth and create a life of alignment.",
      icon: <HeartIcon />,
      color: "bg-stone-100"
    },
    {
      title: "Mindfulness Mentoring",
      description: "Practical tools and meditations to cultivate presence and peace in daily life.",
      icon: <SunIcon />,
      color: "bg-stone-50"
    },
    {
      title: "Spiritual Integration",
      description: "Support for navigating awakenings and integrating spiritual insights into reality.",
      icon: <MoonIcon />,
      color: "bg-stone-100"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">How we can <span className="serif-italic">work together</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each session is a sacred space tailored to your unique needs, combining ancient wisdom with modern psychological insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`border-none ${service.color} hover:shadow-xl transition-all duration-500 h-full`}>
                <CardContent className="pt-10 pb-8 px-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SparklesIcon() {
  return <Leaf className="w-8 h-8 text-stone-600" />;
}

function HeartIcon() {
  return <Heart className="w-8 h-8 text-stone-600" />;
}

function SunIcon() {
  return <Sun className="w-8 h-8 text-stone-600" />;
}

function MoonIcon() {
  return <Moon className="w-8 h-8 text-stone-600" />;
}
