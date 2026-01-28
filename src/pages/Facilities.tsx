import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { HeartPulse, Syringe, Microscope, Pill, Stethoscope, Baby, MonitorCheck, TestTube, CheckCircle2 } from "lucide-react";

const facilities = [
  {
    icon: HeartPulse,
    name: "Intensive Care Unit (ICU)",
    description: "Our state-of-the-art ICU is equipped with advanced life support systems, continuous monitoring, and ventilator support. Staffed 24/7 by trained intensivists and nurses dedicated to providing critical care.",
    features: ["10 Bed Capacity", "Ventilator Support", "Continuous Monitoring", "24/7 Specialist Care"],
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop&auto=format",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Syringe,
    name: "Operation Theatre",
    description: "Modern operation theatres with laminar airflow, advanced surgical equipment, and anesthesia support for various surgical procedures. Our OTs maintain the highest standards of sterility and safety.",
    features: ["Laminar Airflow", "Advanced Equipment", "Endoscopy Suite", "Minor OT"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop&auto=format",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Microscope,
    name: "Diagnostic Laboratory",
    description: "Fully equipped pathology laboratory offering comprehensive diagnostic services including blood tests, biochemistry, and microbiology. Quick and accurate results with modern automated analyzers.",
    features: ["Pathology", "Biochemistry", "Microbiology", "Quick Reports"],
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop&auto=format",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: MonitorCheck,
    name: "Radiology & Imaging",
    description: "Complete imaging services including digital X-ray, ultrasound, and other diagnostic imaging modalities for accurate diagnosis. Same-day reports available for most procedures.",
    features: ["Digital X-Ray", "Ultrasound", "ECG/Echo", "Same Day Reports"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop&auto=format",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Baby,
    name: "NICU & PICU",
    description: "Specialized intensive care units for newborns (NICU) and children (PICU) with incubators, warmers, and pediatric life support. Expert neonatologists and pediatric intensivists on call.",
    features: ["Incubators", "Warmers", "Phototherapy", "Pediatric ICU"],
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop&auto=format",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Stethoscope,
    name: "Endoscopy Suite",
    description: "Dedicated endoscopy suite for upper GI endoscopy, colonoscopy, and other gastrointestinal procedures with HD visualization. Therapeutic procedures including ERCP available.",
    features: ["HD Endoscopy", "Colonoscopy", "ERCP", "Therapeutic Procedures"],
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=600&fit=crop&auto=format",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Pill,
    name: "24/7 Pharmacy",
    description: "In-house pharmacy stocked with essential medicines and supplies, available round the clock for patient convenience. Competitive pricing and expert pharmaceutical guidance.",
    features: ["24/7 Availability", "All Medicines", "Affordable Prices", "Prescription Services"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop&auto=format",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: TestTube,
    name: "Blood Bank",
    description: "Well-maintained blood bank facility ensuring availability of blood and blood products for emergency and surgical needs. Component separation and cross-matching services available.",
    features: ["Blood Storage", "Component Separation", "Cross Matching", "Emergency Supply"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&auto=format",
    color: "from-indigo-500 to-indigo-600",
  },
];

const Facilities = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&h=1080&fit=crop&auto=format"
            alt="Medical Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/50 to-secondary/40" />
        </div>

        {/* Hero Content */}
        <div className="container-hospital relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 border border-white/30">
              Our Facilities
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              World-Class Medical Infrastructure
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              State-of-the-art facilities and modern equipment to provide you with the best healthcare experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-white">
        <div className="container-hospital">
          <div className="space-y-20">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Icon Badge Overlay */}
                      <div className={`absolute top-6 left-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center`}>
                        <facility.icon className="w-10 h-10 text-primary" />
                      </div>
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${facility.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold mb-4 uppercase tracking-wider">
                      Facility
                    </span>
                    <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                      {facility.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {facility.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-gray-900 text-lg mb-4">Key Features:</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {facility.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className={`h-1 w-24 bg-gradient-to-r ${facility.color} rounded-full`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
