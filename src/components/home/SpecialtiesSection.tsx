import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, Baby, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

const specialties = [
  {
    icon: Stethoscope,
    name: "Gastroenterology",
    description: "Comprehensive care for digestive health, liver diseases, and gastrointestinal disorders. Our specialists use advanced endoscopy and cutting-edge treatments.",
    features: ["Endoscopy & Colonoscopy", "Liver Disease Treatment", "IBD Management", "GERD Treatment"],
    href: "/departments/gastroenterology",
    color: "primary",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=400&fit=crop&auto=format",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description: "Complete child healthcare from newborn care to adolescent medicine. We provide vaccinations, growth monitoring, and specialized pediatric treatments.",
    features: ["Newborn Care", "Vaccinations", "Growth Monitoring", "Pediatric Emergency"],
    href: "/departments/pediatrics",
    color: "secondary",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=400&fit=crop&auto=format",
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-hospital">
        <SectionHeader
          badge="Our Specialties"
          title="Expert Care in Key Medical Fields"
          subtitle="We specialize in gastroenterology and pediatrics, providing world-class healthcare with compassion and expertise."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map((specialty, i) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="card-hospital h-full flex flex-col overflow-hidden p-0">
                {/* Specialty Image */}
                <div className="w-full h-56 overflow-hidden bg-gray-200">
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className={`w-16 h-16 rounded-2xl ${specialty.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} flex items-center justify-center mb-6`}>
                    <specialty.icon className={`w-8 h-8 ${specialty.color === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{specialty.name}</h3>
                  <p className="text-muted-foreground mb-6">{specialty.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
                    {specialty.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className={`w-2 h-2 rounded-full ${specialty.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={specialty.href}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;