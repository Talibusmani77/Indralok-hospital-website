import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Star, Calendar, Filter, Award, Clock, GraduationCap, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "Gastroenterology",
    qualification: "MBBS, MD, DM (Gastro)",
    experience: "15+ Years",
    rating: 4.9,
    availableDays: ["Mon", "Wed", "Fri"],
    fees: "₹500",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&auto=format",
    patients: "2000+",
    specialization: "Digestive Health Expert",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Pediatrics",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "12+ Years",
    rating: 4.8,
    availableDays: ["Mon", "Tue", "Thu", "Sat"],
    fees: "₹400",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=800&fit=crop&auto=format",
    patients: "1800+",
    specialization: "Child Healthcare Specialist",
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    specialty: "Gastroenterology",
    qualification: "MBBS, DNB (Gastro)",
    experience: "10+ Years",
    rating: 4.7,
    availableDays: ["Tue", "Thu", "Sat"],
    fees: "₹450",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop&auto=format",
    patients: "1500+",
    specialization: "Liver Disease Expert",
  },
  {
    id: 4,
    name: "Dr. Neha Singh",
    specialty: "Pediatrics",
    qualification: "MBBS, DCH, MD",
    experience: "8+ Years",
    rating: 4.9,
    availableDays: ["Mon", "Wed", "Fri", "Sat"],
    fees: "₹350",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&auto=format",
    patients: "1200+",
    specialization: "Newborn Care Specialist",
  },
];

const Doctors = () => {
  const [filter, setFilter] = useState("all");

  const filteredDoctors = filter === "all"
    ? doctors
    : doctors.filter(d => d.specialty.toLowerCase() === filter);

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=1080&fit=crop&auto=format"
            alt="Our Medical Team"
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
              Our Medical Experts
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Our Expert Medical Team
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Our doctors are highly qualified professionals committed to providing exceptional healthcare with compassion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container-hospital">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by:</span>
            {["all", "gastroenterology", "pediatrics"].map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f)}
                className="capitalize"
              >
                {f === "all" ? "All Departments" : f}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="container-hospital">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor, i) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/doctors/${doctor.id}`} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Doctor Image */}
                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
                      </div>

                      {/* Specialty Badge */}
                      <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                        <span className="text-xs font-semibold text-white">{doctor.specialty}</span>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-6">
                      {/* Name & Specialization */}
                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">{doctor.specialization}</p>

                      {/* Qualification */}
                      <div className="flex items-start gap-2 mb-3">
                        <GraduationCap className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600 line-clamp-2">{doctor.qualification}</p>
                      </div>

                      {/* Experience & Patients */}
                      <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-secondary" />
                          <div>
                            <p className="text-xs text-gray-500">Experience</p>
                            <p className="text-sm font-semibold text-gray-900">{doctor.experience}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-secondary" />
                          <div>
                            <p className="text-xs text-gray-500">Patients</p>
                            <p className="text-sm font-semibold text-gray-900">{doctor.patients}</p>
                          </div>
                        </div>
                      </div>

                      {/* Available Days */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Available Days</p>
                        <div className="flex flex-wrap gap-1.5">
                          {doctor.availableDays.map((day) => (
                            <span key={day} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium">
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Consultation Fee */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">Consultation Fee</span>
                        <span className="text-lg font-bold text-gray-900">{doctor.fees}</span>
                      </div>

                      {/* Book Button */}
                      <Button className="w-full gap-2 group-hover:shadow-lg transition-shadow">
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Doctors;