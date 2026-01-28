import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Heart, Stethoscope, Baby, Calendar, BedDouble, AlertTriangle, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const departments = [
  { name: "Gastroenterology", href: "/departments/gastroenterology", icon: Stethoscope, description: "Digestive health & liver care" },
  { name: "Pediatrics", href: "/departments/pediatrics", icon: Baby, description: "Complete child healthcare" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Departments", href: "/departments", hasMega: true },
  { name: "Doctors", href: "/doctors" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm max-w-7xl">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Emergency: +91-XXX-XXX-XXXX
            </span>
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/appointments" className="hover:underline">Book Appointment</Link>
            <span>|</span>
            <Link to="/bed-booking" className="hover:underline">Bed Availability</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-4 flex-shrink-0">
              <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Indralok Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-heading font-bold text-base md:text-2xl text-[#7B1E1E] leading-tight">
                  INDRALOK
                </h1>
                <p className="text-[9px] md:text-xs text-muted-foreground leading-tight">
                  GASTRO & CHILD HEALTH CLINIC
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasMega ? (
                    <button
                      className={`nav-link flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname.includes("/departments") ? "text-primary" : "text-gray-700"
                      }`}
                      onMouseEnter={() => setDepartmentsOpen(true)}
                      onMouseLeave={() => setDepartmentsOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`nav-link py-2 text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname === item.href ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mega Menu for Departments */}
                  {item.hasMega && (
                    <AnimatePresence>
                      {departmentsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100]"
                          onMouseEnter={() => setDepartmentsOpen(true)}
                          onMouseLeave={() => setDepartmentsOpen(false)}
                        >
                          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 min-w-[400px]">
                            <h3 className="font-heading font-semibold text-gray-900 mb-4">Our Departments</h3>
                            <div className="grid gap-3">
                              {departments.map((dept) => (
                                <Link
                                  key={dept.name}
                                  to={dept.href}
                                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                                >
                                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                                    <dept.icon className="w-6 h-6 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-gray-900">{dept.name}</p>
                                    <p className="text-sm text-gray-500">{dept.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <Link
                              to="/departments"
                              className="block mt-4 pt-4 border-t border-gray-200 text-center text-primary font-medium hover:underline"
                            >
                              View All Departments →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/emergency">
                <Button variant="destructive" size="sm" className="gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Emergency
                </Button>
              </Link>
              <Link to="/appointments">
                <Button className="btn-primary gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Sliding from Right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-[101] lg:hidden overflow-y-auto"
            >
              {/* Header with Logo */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/logo.png"
                      alt="Indralok Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-lg text-[#7B1E1E] leading-tight">INDRALOK</h2>
                    <p className="text-[10px] text-muted-foreground leading-tight">GASTRO & CHILD HEALTH CLINIC</p>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="p-4 md:p-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasMega ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors font-medium text-left text-sm md:text-base"
                          onClick={() => setDepartmentsOpen(!departmentsOpen)}
                        >
                          <span className="flex items-center gap-3">
                            <Stethoscope className="w-5 h-5 text-primary flex-shrink-0" />
                            {item.name}
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${departmentsOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {departmentsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 mt-1 overflow-hidden"
                            >
                              {departments.map((dept) => (
                                <Link
                                  key={dept.name}
                                  to={dept.href}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <dept.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                  <div className="min-w-0">
                                    <p className="font-medium text-sm">{dept.name}</p>
                                    <p className="text-xs text-gray-500 truncate">{dept.description}</p>
                                  </div>
                                </Link>
                              ))}
                              <Link
                                to="/departments"
                                className="block p-3 text-center text-primary font-medium hover:underline text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                View All Departments →
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center gap-3 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors font-medium text-sm md:text-base ${
                          location.pathname === item.href ? "bg-primary/10 text-primary" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name === "Home" && <Heart className="w-5 h-5 flex-shrink-0" />}
                        {item.name === "About" && <Building className="w-5 h-5 flex-shrink-0" />}
                        {item.name === "Doctors" && <Stethoscope className="w-5 h-5 flex-shrink-0" />}
                        {item.name === "Facilities" && <BedDouble className="w-5 h-5 flex-shrink-0" />}
                        {item.name === "Contact" && <Phone className="w-5 h-5 flex-shrink-0" />}
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Buttons - Increased gap on mobile */}
              <div className="p-4 md:p-6 space-y-4 md:space-y-3 border-t border-gray-200">
                <Link to="/emergency" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="destructive" className="w-full gap-2 text-sm md:text-base py-5 md:py-6">
                    <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
                    Emergency Call
                  </Button>
                </Link>
                <Link to="/appointments" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full btn-primary gap-2 text-sm md:text-base py-5 md:py-6">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/bed-booking" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full gap-2 text-sm md:text-base py-5 md:py-6">
                    <BedDouble className="w-4 h-4 md:w-5 md:h-5" />
                    Check Bed Availability
                  </Button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Emergency Contact</p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91-XXX-XXX-XXXX
                </p>
                <p className="text-xs text-gray-500 mt-3">Mon - Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;