import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeartPulse, Syringe, Microscope, Pill, ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

const facilities = [
  {
    icon: HeartPulse,
    name: "Intensive Care Unit",
    description: "24/7 ICU with advanced life support systems and continuous monitoring for critical patient care.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&auto=format",
    color: "from-red-500/90 to-red-600/90",
    iconColor: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Syringe,
    name: "Operation Theatre",
    description: "Fully equipped modern OT with advanced surgical equipment and expert surgical team available round the clock.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop&auto=format",
    color: "from-blue-500/90 to-blue-600/90",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Microscope,
    name: "Diagnostics",
    description: "Complete diagnostic services including pathology, radiology, imaging, and advanced laboratory testing.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop&auto=format",
    color: "from-purple-500/90 to-purple-600/90",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Pill,
    name: "Pharmacy",
    description: "In-house pharmacy with 24/7 availability of essential medicines and expert pharmaceutical guidance.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop&auto=format",
    color: "from-green-500/90 to-green-600/90",
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/3 rounded-full blur-3xl" />
      
      <div className="container-hospital relative z-10">
        <SectionHeader
          badge="Our Facilities"
          title="World-Class Medical Infrastructure"
          subtitle="Equipped with modern technology and facilities to provide comprehensive healthcare services."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white">
                {/* Facility Image */}
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Badge - Top Left */}
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg`}>
                    <facility.icon className={`w-6 h-6 ${facility.iconColor}`} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/facilities">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow group">
              Explore All Facilities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;