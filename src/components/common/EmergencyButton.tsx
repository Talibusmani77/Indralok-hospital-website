import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EmergencyButton = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <Link
        to="/emergency"
        className="floating-emergency flex items-center justify-center"
        aria-label="Emergency Contact"
      >
        <Phone className="w-6 h-6" />
      </Link>
    </motion.div>
  );
};

export default EmergencyButton;
