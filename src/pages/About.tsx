import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, Users, Building, Sparkles, Shield, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Image Background */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop&auto=format"
            alt="Indralok Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/40" />
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
              About Indralok Hospital
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Committed to Your Health & Well-being
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Serving the Gorakhpur community with compassionate care and modern medical excellence for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-black overflow-hidden relative">
        <div className="w-full aspect-video h-[500px] md:h-[700px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* Stats Bar */}
      {/* <section className="bg-white shadow-lg -mt-20 relative z-20">
        <div className="container-hospital">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {[
              { icon: Users, value: "15,000+", label: "Patients Treated", color: "text-blue-600" },
              { icon: Award, value: "20+", label: "Expert Doctors", color: "text-green-600" },
              { icon: Building, value: "100+", label: "Beds Available", color: "text-purple-600" },
              { icon: Heart, value: "15+", label: "Years of Service", color: "text-red-600" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <p className="font-heading font-bold text-4xl text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-hospital">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Healing & Excellence
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Established in 2005, Indralok Hospital has grown to become one of the leading healthcare facilities in Eastern Uttar Pradesh. We specialize in gastroenterology and pediatrics, providing comprehensive medical services to patients of all ages.
                </p>
                <p>
                  Our state-of-the-art facility is equipped with the latest medical technology and staffed by a team of highly qualified doctors, nurses, and support staff who are dedicated to delivering exceptional patient care.
                </p>
                <p>
                  We believe in treating every patient with dignity, respect, and compassion. Our patient-centered approach ensures that you receive personalized care tailored to your unique health needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop&auto=format"
                  alt="Hospital Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Award-Winning Care</p>
                    <p className="text-sm text-gray-600">Recognized for excellence in healthcare services</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-hospital">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 p-10 text-white shadow-xl"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-3xl mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  To be the most trusted and preferred healthcare destination in Eastern Uttar Pradesh, known for our clinical excellence, compassionate care, and commitment to improving the health and well-being of our community.
                </p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-green-600 p-10 text-white shadow-xl"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-3xl mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  To provide high-quality, affordable, and accessible healthcare services with a focus on patient safety, clinical excellence, and compassionate care. We strive to continuously improve our services and adopt the latest medical advancements.
                </p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600">
              Our core values guide everything we do at Indralok Hospital, ensuring excellence in every aspect of care.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                desc: "We treat every patient with empathy, kindness, and understanding.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Sparkles,
                title: "Excellence",
                desc: "We strive for the highest standards in medical care and service.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "We maintain honesty and transparency in all our interactions.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "We embrace new technologies and medical advancements.",
                color: "from-purple-500 to-violet-500"
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-primary/20">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section className="section-padding bg-primary">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Healthcare Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of satisfied patients who trust Indralok Hospital for their healthcare needs. Your health and well-being are our top priorities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointments">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 text-base font-semibold shadow-xl">
                  <TrendingUp className="w-5 h-5" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 hover:text-white gap-2 text-base">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;