import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Award, Clock } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "Gastroenterology",
    qualification: "MBBS, MD, DM (Gastro)",
    experience: "15+ Years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Pediatrics",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "12+ Years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=800&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    specialty: "Gastroenterology",
    qualification: "MBBS, DNB (Gastro)",
    experience: "10+ Years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Dr. Neha Singh",
    specialty: "Pediatrics",
    qualification: "MBBS, DCH, MD",
    experience: "8+ Years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&auto=format",
  },
];

const DoctorsPreview = () => {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-0" />
      
      <div className="container-hospital relative z-10">
        <SectionHeader
          badge="Our Doctors"
          title="Meet Our Expert Medical Team"
          subtitle="Our doctors are highly skilled professionals dedicated to providing exceptional healthcare."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link to={`/doctors/${doctor.id}`} className="block group">
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Doctor Image - Full Portrait */}
                  <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Floating Badge - Rating */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
                    </div>

                    {/* Specialty Badge */}
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg">
                      <span className="text-xs font-semibold text-white">{doctor.specialty}</span>
                    </div>
                  </div>

                  {/* Doctor Info Card - Overlapping Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-5 transition-all duration-500">
                    {/* Name & Primary Info */}
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-1">{doctor.qualification}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium">{doctor.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <Award className="w-4 h-4 text-secondary" />
                        <span className="font-medium">Expert</span>
                      </div>
                    </div>

                    {/* Hover Arrow Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Profile</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/doctors">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90 group">
              View All Doctors
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsPreview;