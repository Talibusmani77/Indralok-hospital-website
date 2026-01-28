import { motion } from "framer-motion";
import { Stethoscope, Microscope, Clock, Heart, Shield, Award } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const reasons = [
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description: "Highly qualified specialists with years of experience in gastroenterology and pediatrics.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop&auto=format",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description: "State-of-the-art medical equipment and cutting-edge diagnostic facilities.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop&auto=format",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services with rapid response ambulance.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop&auto=format",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Patient-centered approach with personalized treatment plans.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&auto=format",
  },
  {
    icon: Shield,
    title: "Safe & Hygienic",
    description: "Strict infection control protocols and sterilized environments.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=600&fit=crop&auto=format",
  },
  {
    icon: Award,
    title: "Trusted Legacy",
    description: "Years of excellence serving the Gorakhpur community with dedication.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&auto=format",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container-hospital">
        <SectionHeader
          badge="Why Choose Us"
          title="Your Health, Our Priority"
          subtitle="At Indralok Hospital, we combine medical expertise with compassionate care to deliver the best healthcare experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl overflow-hidden border border-border/50 hover:shadow-medical hover:border-primary/20 transition-all duration-300 min-h-[200px]"
            >
              {/* Background Image with Dark Overlay for Text Readability */}
              <div className="absolute inset-0 z-0">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-75"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors shadow-lg">
                  <reason.icon className="w-7 h-7 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2 drop-shadow-md">{reason.title}</h3>
                <p className="text-white/90 text-sm drop-shadow-md">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;