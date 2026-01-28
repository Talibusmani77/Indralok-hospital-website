import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Phone, AlertTriangle, Ambulance, Clock, MapPin, Activity, Heart, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";

const emergencyServices = [
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency medical services with experienced doctors and nurses ready to handle any critical situation.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=600&fit=crop&auto=format",
  },
  {
    icon: Ambulance,
    title: "Advanced Ambulance Service",
    description: "Fully equipped ambulances with life support systems, trained paramedics, and GPS tracking for rapid response.",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&h=600&fit=crop&auto=format",
  },
  {
    icon: Activity,
    title: "Trauma Care Unit",
    description: "State-of-the-art trauma care facility with advanced equipment for handling accidents and critical injuries.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop&auto=format",
  },
  {
    icon: Heart,
    title: "Cardiac Emergency",
    description: "Specialized cardiac emergency care with defibrillators, ECG monitoring, and expert cardiologists on standby.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop&auto=format",
  },
];

const Emergency = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1920&h=1080&fit=crop&auto=format"
            alt="Emergency Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-red-600/60 to-red-600/50" />
        </div>

        {/* Hero Content */}
        <div className="container-hospital relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                <Siren className="w-8 h-8 text-white" />
              </div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold border border-white/30">
                Emergency Services
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              24/7 Emergency Care
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Immediate medical attention when you need it most. Our emergency department is always ready to serve you.
            </p>

            {/* Emergency Contact Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="tel:+91XXXXXXXXXX">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 gap-2 text-lg font-bold shadow-xl">
                  <Phone className="w-6 h-6" />
                  Call: +91-XXX-XXX-XXXX
                </Button>
              </a>
              <a href="tel:+91XXXXXXXXXX">
                <Button size="lg" variant="outline" className="border-white text-red-600 hover:bg-white/10 hover:text-white gap-2">
                  <Ambulance className="w-5 h-5" />
                  Request Ambulance
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contacts Section - Prominent at Top */}
      <section className="py-16 bg-white">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Emergency Hotline - Main focus */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-10 text-white shadow-2xl"
              >
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center animate-pulse shrink-0">
                    <Phone className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-sm font-semibold mb-4 rounded-full">
                      24/7 Critical Emergency Line
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold mb-4">Emergency Hotline</h3>
                    <a href="tel:+91XXXXXXXXXX" className="block text-4xl md:text-6xl font-black hover:text-white/90 transition-colors">
                      +91-XXX-XXX-XXXX
                    </a>
                  </div>
                </div>
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              </motion.div>

              {/* Ambulance & Quick Contact */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-orange-500 rounded-2xl p-8 text-white shadow-xl flex items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Ambulance className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Ambulance Service</h4>
                    <a href="tel:+91XXXXXXXXXX" className="text-2xl font-black">+91-XXX-XXX-XXXX</a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl flex items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Reception / Help</h4>
                    <a href="tel:+91XXXXXXXXXX" className="text-2xl font-black">+91-XXX-XXX-XXXX</a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Stats/Features Row */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Clock, text: "24/7 Availability", color: "text-red-600" },
                { icon: MapPin, text: "Near Highway", color: "text-blue-600" },
                { icon: AlertTriangle, text: "Trauma Experts", color: "text-orange-600" },
                { icon: Activity, text: "Advanced ICU", color: "text-green-600" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors">
                  <item.icon className={`w-8 h-8 mb-3 ${item.color}`} />
                  <p className="font-semibold text-gray-900">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Services - Alternating Layout */}
      <section className="section-padding bg-white">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 text-sm font-semibold mb-4">
              Our Emergency Services
            </span>
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Emergency Care
            </h2>
            <p className="text-lg text-gray-600">
              Equipped with advanced medical technology and staffed by experienced professionals.
            </p>
          </motion.div>

          <div className="space-y-20">
            {emergencyServices.map((service, i) => (
              <motion.div
                key={service.title}
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
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <service.icon className="w-10 h-10 text-red-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold mb-4 uppercase tracking-wider">
                      Emergency Service
                    </span>
                    <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="grid lg:grid-cols-2">
              {/* Map */}
              <div className="h-[400px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2893461234567!2d83.3653!3d26.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ1JzM4LjIiTiA4M8KwMjEnNTUuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hospital Location"
                />
              </div>

              {/* Contact Info */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <h2 className="font-heading font-bold text-2xl text-gray-900">Find Us</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">
                      Indralok Hospital<br />
                      Medical Road, Near XYZ Circle<br />
                      Gorakhpur, Uttar Pradesh 273001
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Get Directions</h3>
                    <p className="text-gray-600 mb-4">
                      Located in the heart of Gorakhpur, easily accessible from all major areas.
                    </p>
                    <Button variant="outline" className="gap-2">
                      <MapPin className="w-4 h-4" />
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Emergency;
