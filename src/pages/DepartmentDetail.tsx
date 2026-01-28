import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Stethoscope, Baby, CheckCircle2, User, Calendar, ArrowRight, Award, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const departmentData = {
  gastroenterology: {
    icon: Stethoscope,
    name: "Gastroenterology",
    headline: "Expert Digestive Health Care",
    description: "Our gastroenterology department provides comprehensive care for all digestive system disorders. From routine screenings to complex procedures, our expert team is here to help.",
    overview: "The Department of Gastroenterology at Indralok Hospital is equipped with state-of-the-art endoscopy suites and advanced diagnostic equipment. Our team of experienced gastroenterologists provides expert care for a wide range of digestive health conditions.",
    heroImage: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=600&fit=crop&auto=format",
    serviceImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop&auto=format",
    conditions: [
      "Acid Reflux (GERD)",
      "Irritable Bowel Syndrome (IBS)",
      "Inflammatory Bowel Disease (IBD)",
      "Liver Diseases",
      "Peptic Ulcers",
      "Celiac Disease",
      "Pancreatitis",
      "Gallbladder Disorders",
    ],
    procedures: [
      "Upper GI Endoscopy",
      "Colonoscopy",
      "ERCP",
      "Liver Biopsy",
      "Capsule Endoscopy",
      "Polypectomy",
    ],
    technology: [
      "HD Endoscopy Systems",
      "Advanced Imaging",
      "Minimally Invasive Techniques",
      "Computerized Diagnostics",
    ],
    doctors: [
      { id: 1, name: "Dr. Rajesh Kumar", qualification: "MBBS, MD, DM (Gastro)", experience: "15+ Years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&auto=format" },
      { id: 3, name: "Dr. Amit Verma", qualification: "MBBS, DNB (Gastro)", experience: "10+ Years", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&auto=format" },
    ],
    color: "primary",
  },
  pediatrics: {
    icon: Baby,
    name: "Pediatrics",
    headline: "Caring for Your Little Ones",
    description: "Our pediatrics department offers complete healthcare for children from birth to adolescence. We provide preventive care, treatment, and specialized services in a child-friendly environment.",
    overview: "The Pediatrics Department at Indralok Hospital is dedicated to providing comprehensive healthcare for infants, children, and adolescents. Our child-friendly environment and experienced pediatricians ensure the best care for your children.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=600&fit=crop&auto=format",
    serviceImage: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop&auto=format",
    conditions: [
      "Common Childhood Illnesses",
      "Respiratory Infections",
      "Allergies & Asthma",
      "Growth Disorders",
      "Nutritional Deficiencies",
      "Developmental Delays",
      "Childhood Diabetes",
      "Skin Conditions",
    ],
    procedures: [
      "Vaccinations",
      "Growth Monitoring",
      "Developmental Screening",
      "Allergy Testing",
      "Nebulization",
      "Pediatric Emergency Care",
    ],
    technology: [
      "Child-friendly Equipment",
      "Digital Growth Charts",
      "Pediatric Monitoring Systems",
      "Play Therapy Facilities",
    ],
    doctors: [
      { id: 2, name: "Dr. Priya Sharma", qualification: "MBBS, MD (Pediatrics)", experience: "12+ Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&auto=format" },
      { id: 4, name: "Dr. Neha Singh", qualification: "MBBS, DCH, MD", experience: "8+ Years", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&auto=format" },
    ],
    color: "secondary",
  },
};

const DepartmentDetail = () => {
  const { slug } = useParams();
  const dept = departmentData[slug as keyof typeof departmentData];

  if (!dept) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold">Department not found</h1>
          <Link to="/departments" className="text-primary mt-4 inline-block">Go back to departments</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={dept.heroImage}
            alt={dept.name}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${dept.color === 'primary' ? 'from-primary/70 via-primary/50 to-primary/40' : 'from-secondary/70 via-secondary/50 to-secondary/40'}`} />
        </div>

        {/* Hero Content */}
        <div className="container-hospital relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <dept.icon className={`w-8 h-8 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold border border-white/30">
                Department
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {dept.name}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {dept.headline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white shadow-lg -mt-12 relative z-20">
        <div className="container-hospital">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className={`w-6 h-6 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <p className="font-bold text-2xl text-gray-900 mb-1">{dept.doctors.length}</p>
              <p className="text-sm text-gray-600">Expert Specialists</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className={`w-6 h-6 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <p className="font-bold text-2xl text-gray-900 mb-1">{dept.procedures.length}+</p>
              <p className="text-sm text-gray-600">Procedures Offered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className={`w-6 h-6 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              </div>
              <p className="font-bold text-2xl text-gray-900 mb-1">24/7</p>
              <p className="text-sm text-gray-600">Emergency Care</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-hospital">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={`inline-block px-3 py-1 ${dept.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} text-xs font-semibold mb-4 uppercase tracking-wider`}>
                About the Department
              </span>
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {dept.overview}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {dept.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={dept.serviceImage}
                  alt={`${dept.name} Services`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions & Procedures */}
      <section className="section-padding bg-white">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive medical services and treatments for a wide range of conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Conditions We Treat</h3>
              <div className="space-y-3">
                {dept.conditions.map((condition) => (
                  <div key={condition} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Procedures & Services</h3>
              <div className="space-y-3">
                {dept.procedures.map((procedure) => (
                  <div key={procedure} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{procedure}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technology Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-5xl mx-auto"
          >
            <div className={`${dept.color === 'primary' ? 'bg-primary/5' : 'bg-secondary/5'} rounded-2xl p-8`}>
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Advanced Technology</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {dept.technology.map((tech) => (
                  <div key={tech} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <div className={`w-2 h-2 rounded-full ${dept.color === 'primary' ? 'bg-primary' : 'bg-secondary'} flex-shrink-0`} />
                    <span className="text-gray-700 text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className={`inline-block px-3 py-1 ${dept.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} text-xs font-semibold mb-4 uppercase tracking-wider`}>
              Our Team
            </span>
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Meet Our {dept.name} Specialists
            </h2>
            <p className="text-lg text-gray-600">
              Expert doctors dedicated to providing the highest quality care
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {dept.doctors.map((doctor, i) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/doctors/${doctor.id}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Doctor Image */}
                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Doctor Info */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{doctor.qualification}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className={`w-4 h-4 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                          <span className="text-sm font-medium text-gray-700">{doctor.experience}</span>
                        </div>
                        <ArrowRight className={`w-5 h-5 ${dept.color === 'primary' ? 'text-primary' : 'text-secondary'} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

export default DepartmentDetail;