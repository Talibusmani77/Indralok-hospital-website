import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { User, Star, Calendar, Clock, Award, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctorsData = {
  "1": {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "Gastroenterology",
    qualification: "MBBS, MD, DM (Gastroenterology)",
    experience: "15+ Years",
    rating: 4.9,
    fees: "₹500",
    bio: "Dr. Rajesh Kumar is a highly experienced gastroenterologist with over 15 years of expertise in treating digestive disorders. He completed his DM in Gastroenterology from a premier medical institution and has successfully treated thousands of patients.",
    expertise: [
      "Upper & Lower GI Endoscopy",
      "ERCP & Therapeutic Endoscopy",
      "Liver Disease Management",
      "Inflammatory Bowel Disease",
      "Pancreatic Disorders",
      "Gastrointestinal Cancers",
    ],
    education: [
      "DM (Gastroenterology) - AIIMS, New Delhi",
      "MD (Medicine) - King George's Medical University",
      "MBBS - BHU, Varanasi",
    ],
    opdTimings: [
      { day: "Monday", time: "10:00 AM - 2:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 2:00 PM" },
      { day: "Friday", time: "10:00 AM - 2:00 PM" },
    ],
  },
  "2": {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Pediatrics",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "12+ Years",
    rating: 4.8,
    fees: "₹400",
    bio: "Dr. Priya Sharma is a compassionate pediatrician dedicated to the health and well-being of children. With 12 years of experience, she specializes in newborn care, child development, and pediatric emergency medicine.",
    expertise: [
      "Newborn & Neonatal Care",
      "Childhood Immunizations",
      "Growth & Development Assessment",
      "Pediatric Infections",
      "Childhood Asthma & Allergies",
      "Nutritional Counseling",
    ],
    education: [
      "MD (Pediatrics) - Lady Hardinge Medical College",
      "MBBS - Moti Lal Nehru Medical College",
    ],
    opdTimings: [
      { day: "Monday", time: "9:00 AM - 1:00 PM" },
      { day: "Tuesday", time: "4:00 PM - 7:00 PM" },
      { day: "Thursday", time: "9:00 AM - 1:00 PM" },
      { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    ],
  },
  "3": {
    id: 3,
    name: "Dr. Amit Verma",
    specialty: "Gastroenterology",
    qualification: "MBBS, DNB (Gastroenterology)",
    experience: "10+ Years",
    rating: 4.7,
    fees: "₹450",
    bio: "Dr. Amit Verma is a skilled gastroenterologist with expertise in advanced endoscopic procedures. He is known for his patient-friendly approach and has extensive experience in managing complex GI conditions.",
    expertise: [
      "Diagnostic Endoscopy",
      "Colonoscopy & Polypectomy",
      "Hepatitis Management",
      "GERD Treatment",
      "Peptic Ulcer Disease",
      "Fatty Liver Disease",
    ],
    education: [
      "DNB (Gastroenterology) - Sir Ganga Ram Hospital",
      "MBBS - GSVM Medical College, Kanpur",
    ],
    opdTimings: [
      { day: "Tuesday", time: "10:00 AM - 2:00 PM" },
      { day: "Thursday", time: "10:00 AM - 2:00 PM" },
      { day: "Saturday", time: "10:00 AM - 1:00 PM" },
    ],
  },
  "4": {
    id: 4,
    name: "Dr. Neha Singh",
    specialty: "Pediatrics",
    qualification: "MBBS, DCH, MD",
    experience: "8+ Years",
    rating: 4.9,
    fees: "₹350",
    bio: "Dr. Neha Singh is a dedicated pediatrician with a special interest in child development and preventive care. She creates a warm and friendly environment that puts children at ease during their visits.",
    expertise: [
      "Well-child Checkups",
      "Vaccination Programs",
      "Pediatric Fever Management",
      "Developmental Screening",
      "Childhood Nutrition",
      "Common Pediatric Illnesses",
    ],
    education: [
      "MD (Pediatrics) - King George's Medical University",
      "DCH - BRD Medical College",
      "MBBS - BRD Medical College, Gorakhpur",
    ],
    opdTimings: [
      { day: "Monday", time: "4:00 PM - 7:00 PM" },
      { day: "Wednesday", time: "4:00 PM - 7:00 PM" },
      { day: "Friday", time: "4:00 PM - 7:00 PM" },
      { day: "Saturday", time: "10:00 AM - 1:00 PM" },
    ],
  },
};

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData[id as keyof typeof doctorsData];

  if (!doctor) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold">Doctor not found</h1>
          <Link to="/doctors" className="text-primary mt-4 inline-block">Go back to doctors</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent py-16">
        <div className="container-hospital">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0"
            >
              <User className="w-20 h-20 text-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">{doctor.name}</h1>
              <p className="text-xl text-primary font-medium mb-2">{doctor.specialty}</p>
              <p className="text-muted-foreground mb-4">{doctor.qualification}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  {doctor.rating} Rating
                </span>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5" />
                  {doctor.experience}
                </span>
                <span className="text-foreground font-medium">Fees: {doctor.fees}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:ml-auto"
            >
              <Link to="/appointments">
                <Button size="lg" className="btn-primary gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-hospital">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-hospital"
              >
                <h2 className="font-heading font-bold text-xl text-foreground mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
              </motion.div>

              {/* Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-hospital"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h2 className="font-heading font-bold text-xl text-foreground">Areas of Expertise</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {doctor.expertise.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-hospital"
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h2 className="font-heading font-bold text-xl text-foreground">Education</h2>
                </div>
                <div className="space-y-3">
                  {doctor.education.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* OPD Timings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-hospital"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h2 className="font-heading font-bold text-xl text-foreground">OPD Timings</h2>
                </div>
                <div className="space-y-3">
                  {doctor.opdTimings.map((slot, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{slot.day}</span>
                      <span className="text-muted-foreground text-sm">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Book CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-hospital bg-primary/5 border-primary/20"
              >
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Need an Appointment?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a consultation with {doctor.name} today.
                </p>
                <Link to="/appointments">
                  <Button className="w-full btn-primary gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DoctorProfile;
