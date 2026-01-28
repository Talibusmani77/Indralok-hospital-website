import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-hospital py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Indralok Hospital</h3>
                <p className="text-xs text-background/60">Gastro & Pediatric Care</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Providing compassionate healthcare with modern medical excellence. Your trusted partner for gastroenterology and pediatric care in Gorakhpur.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Doctors", href: "/doctors" },
                { name: "Departments", href: "/departments" },
                { name: "Facilities", href: "/facilities" },
                { name: "Patient Resources", href: "/patient-resources" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Gastroenterology", href: "/departments/gastroenterology" },
                { name: "Pediatrics", href: "/departments/pediatrics" },
                { name: "Emergency Care", href: "/emergency" },
                { name: "Diagnostics", href: "/facilities" },
                { name: "Bed Booking", href: "/bed-booking" },
                { name: "Appointments", href: "/appointments" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70">Indralok Hospital, Medical Road, Gorakhpur, Uttar Pradesh 273001</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-background/70">
                  <p>+91-XXX-XXX-XXXX</p>
                  <p className="text-destructive font-medium">Emergency: +91-XXX-XXX-XXXX</p>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-background/70">info@indralokhospital.com</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div className="text-background/70">
                  <p>OPD: Mon - Sat, 9:00 AM - 8:00 PM</p>
                  <p>Emergency: 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-hospital py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2024 Indralok Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
