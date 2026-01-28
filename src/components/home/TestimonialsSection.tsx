import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const testimonials = [
    {
        id: 1,
        name: "Ramesh Gupta",
        location: "Gorakhpur",
        rating: 5,
        text: "Excellent care at Indralok Hospital. Dr. Kumar treated my digestive issues with great expertise. The staff was very supportive and the facilities are top-notch.",
    },
    {
        id: 2,
        name: "Sunita Devi",
        location: "Deoria",
        rating: 5,
        text: "My child received the best pediatric care here. Dr. Priya is wonderful with children. The hospital maintains high standards of hygiene and cleanliness.",
    },
    {
        id: 3,
        name: "Ajay Mishra",
        location: "Gorakhpur",
        rating: 5,
        text: "The emergency services saved my father's life. Quick response, professional doctors, and state-of-the-art ICU facilities. Highly recommended!",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container-hospital">
                <SectionHeader
                    badge="Testimonials"
                    title="What Our Patients Say"
                    subtitle="Real stories from real patients who trusted us with their healthcare needs."
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="card-hospital relative"
                        >
                            <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10" />

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
