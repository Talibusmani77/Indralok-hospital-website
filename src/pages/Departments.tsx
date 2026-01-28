import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Stethoscope, Baby, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const departments = [
  {
    icon: Stethoscope,
    name: "Gastroenterology",
    description: "Comprehensive care for digestive health, liver diseases, and gastrointestinal disorders. Our specialists use advanced endoscopy and cutting-edge treatments.",
    services: ["Endoscopy", "Colonoscopy", "Liver Treatment", "GERD Management", "IBD Care", "Pancreatic Disorders"],
    href: "/departments/gastroenterology",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop&auto=format",
    color: "primary",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description: "Complete child healthcare from newborn care to adolescent medicine. We provide vaccinations, growth monitoring, and specialized pediatric treatments.",
    services: ["Newborn Care", "Vaccinations", "Growth Monitoring", "Pediatric Emergency", "Nutrition Counseling", "Developmental Assessment"],
    href: "/departments/pediatrics",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop&auto=format",
    color: "secondary",
  },
];

const Departments = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container-hospital relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold mb-6">
              Our Departments
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Medical Care in Key Specialties
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We specialize in gastroenterology and pediatrics, providing expert care with state-of-the-art facilities and compassionate professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-white">
        <div className="container-hospital">
          <div className="space-y-16">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Icon Badge Overlay */}
                      <div className="absolute top-6 left-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <dept.icon className={`w-10 h-10 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className={`inline-block px-3 py-1 ${dept.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} text-xs font-semibold mb-4 uppercase tracking-wider`}>
                      Department
                    </span>
                    <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                      {dept.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {dept.description}
                    </p>

                    {/* Services List */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-gray-900 text-lg mb-4">Our Services Include:</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {dept.services.map((service) => (
                          <div key={service} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link to={dept.href}>
                      <Button size="lg" className={`gap-2 ${dept.color === 'primary' ? 'btn-primary' : 'bg-secondary hover:bg-secondary/90'} shadow-lg hover:shadow-xl transition-all`}>
                        Learn More About {dept.name}
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl font-bold mb-6">
              Need Medical Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our experienced team is ready to provide you with the best possible care. Schedule an appointment today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointments">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-2 text-base font-semibold shadow-xl">
                  Book an Appointment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/doctors">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2 text-base">
                  Meet Our Doctors
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Departments;