import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Stethoscope, BedDouble, AlertTriangle } from "lucide-react";

const actions = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule your visit with our specialists",
    href: "/appointments",
    color: "bg-primary",
  },
  {
    icon: Stethoscope,
    title: "Find a Doctor",
    description: "Browse our expert medical team",
    href: "/doctors",
    color: "bg-secondary",
  },
  {
    icon: BedDouble,
    title: "Bed Availability",
    description: "Check real-time bed status",
    href: "/bed-booking",
    color: "bg-primary",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "24/7 emergency care available",
    href: "/emergency",
    color: "bg-destructive",
  },
];

const QuickActions = () => {
  return (
    <section className="py-6 -mt-20 relative z-20">
      <div className="container-hospital">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={action.href}
                className="card-hospital flex items-center gap-4 hover:border-primary/30"
              >
                <div className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center shrink-0`}>
                  <action.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
