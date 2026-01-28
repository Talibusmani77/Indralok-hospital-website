import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Calendar, User, Phone, Mail, Stethoscope, Clock, CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const departments = [
  { value: "gastroenterology", label: "Gastroenterology" },
  { value: "pediatrics", label: "Pediatrics" },
];

const doctors = {
  gastroenterology: [
    { value: "dr-rajesh-kumar", label: "Dr. Rajesh Kumar" },
    { value: "dr-amit-verma", label: "Dr. Amit Verma" },
  ],
  pediatrics: [
    { value: "dr-priya-sharma", label: "Dr. Priya Sharma" },
    { value: "dr-neha-singh", label: "Dr. Neha Singh" },
  ],
};

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM",
];

const Appointments = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    mobile: "",
    email: "",
    age: "",
    gender: "",
    reason: "",
  });

  const availableDoctors = formData.department ? doctors[formData.department as keyof typeof doctors] || [] : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Requested!",
      description: "We'll confirm your appointment shortly via SMS/Email.",
    });
    setStep(5);
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop&auto=format"
            alt="Book Appointment"
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold border border-white/30">
                Book Appointment
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Schedule Your Visit
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Book an appointment with our expert doctors in just a few simple steps. We're here to take care of your health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-hospital">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Choose Your Time</h3>
              <p className="text-gray-600 text-sm">
                Select a convenient date and time slot that works for you
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600 text-sm">
                Book with highly qualified specialists in various departments
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Instant Confirmation</h3>
              <p className="text-gray-600 text-sm">
                Get quick confirmation via SMS and email notification
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-hospital">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 md:gap-4">
              {["Department", "Doctor", "Date & Time", "Details"].map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step > i + 1
                        ? "bg-green-500 text-white"
                        : step === i + 1
                          ? "bg-primary text-white ring-4 ring-primary/20"
                          : "bg-gray-200 text-gray-400"
                      }`}
                  >
                    {step > i + 1 ? <CheckCircle className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className={`hidden sm:block text-sm font-medium ${step === i + 1 ? "text-gray-900" : "text-gray-500"}`}>
                    {label}
                  </span>
                  {i < 3 && <ChevronRight className="w-4 h-4 text-gray-400 hidden md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-hospital">
          <div className="max-w-3xl mx-auto">
            {step === 5 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-white rounded-2xl shadow-xl p-12"
              >
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
                  Appointment Request Submitted!
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Thank you for booking with us. Our team will contact you shortly to confirm your appointment.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 text-left space-y-3 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Department:</span>
                    <span className="font-semibold text-gray-900">{formData.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Doctor:</span>
                    <span className="font-semibold text-gray-900">{formData.doctor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold text-gray-900">{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold text-gray-900">{formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Patient:</span>
                    <span className="font-semibold text-gray-900">{formData.name}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => {
                    setStep(1);
                    setFormData({ department: "", doctor: "", date: "", time: "", name: "", mobile: "", email: "", age: "", gender: "", reason: "" });
                  }}
                  className="gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Another Appointment
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                  {/* Step 1: Department */}
                  {step === 1 && (
                    <>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Stethoscope className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-heading font-bold text-2xl text-gray-900">Select Department</h2>
                          <p className="text-gray-600 text-sm">Choose the medical specialty you need</p>
                        </div>
                      </div>
                      <Select
                        value={formData.department}
                        onValueChange={(v) => setFormData({ ...formData, department: v, doctor: "" })}
                      >
                        <SelectTrigger className="w-full h-14 text-base">
                          <SelectValue placeholder="Choose a department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((d) => (
                            <SelectItem key={d.value} value={d.value} className="text-base">{d.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </>
                  )}

                  {/* Step 2: Doctor */}
                  {step === 2 && (
                    <>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-heading font-bold text-2xl text-gray-900">Select Doctor</h2>
                          <p className="text-gray-600 text-sm">Choose your preferred specialist</p>
                        </div>
                      </div>
                      <Select
                        value={formData.doctor}
                        onValueChange={(v) => setFormData({ ...formData, doctor: v })}
                      >
                        <SelectTrigger className="w-full h-14 text-base">
                          <SelectValue placeholder="Choose a doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableDoctors.map((d) => (
                            <SelectItem key={d.value} value={d.value} className="text-base">{d.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </>
                  )}

                  {/* Step 3: Date & Time */}
                  {step === 3 && (
                    <>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-heading font-bold text-2xl text-gray-900">Select Date & Time</h2>
                          <p className="text-gray-600 text-sm">Pick a convenient appointment slot</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-3">Appointment Date</label>
                          <Input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            min={new Date().toISOString().split("T")[0]}
                            className="h-14 text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-3">Time Slot</label>
                          <Select
                            value={formData.time}
                            onValueChange={(v) => setFormData({ ...formData, time: v })}
                          >
                            <SelectTrigger className="w-full h-14 text-base">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((t) => (
                                <SelectItem key={t} value={t} className="text-base">{t}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 4: Patient Details */}
                  {step === 4 && (
                    <>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-heading font-bold text-2xl text-gray-900">Patient Details</h2>
                          <p className="text-gray-600 text-sm">Provide your contact information</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                            <Input
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Enter full name"
                              required
                              className="h-12"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Mobile Number *</label>
                            <Input
                              value={formData.mobile}
                              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                              required
                              className="h-12"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            className="h-12"
                          />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Age *</label>
                            <Input
                              type="number"
                              value={formData.age}
                              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                              placeholder="Age"
                              required
                              className="h-12"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Gender *</label>
                            <Select
                              value={formData.gender}
                              onValueChange={(v) => setFormData({ ...formData, gender: v })}
                            >
                              <SelectTrigger className="w-full h-12">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Reason for Visit</label>
                          <Textarea
                            value={formData.reason}
                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            placeholder="Briefly describe your symptoms or reason for visit"
                            className="min-h-[120px]"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-10 pt-8 border-t border-gray-200">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep} size="lg">
                        Previous
                      </Button>
                    ) : (
                      <div />
                    )}
                    {step < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        disabled={
                          (step === 1 && !formData.department) ||
                          (step === 2 && !formData.doctor) ||
                          (step === 3 && (!formData.date || !formData.time))
                        }
                        size="lg"
                        className="gap-2"
                      >
                        Continue
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={!formData.name || !formData.mobile || !formData.age || !formData.gender}
                        size="lg"
                        className="gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Submit Appointment
                      </Button>
                    )}
                  </div>
                </motion.div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Appointments;
