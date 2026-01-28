import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { BedDouble, CheckCircle, AlertCircle, User, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const bedTypes = [
  { type: "General Ward", available: 25, total: 40, price: "₹1,500/day", icon: "🛏️" },
  { type: "Semi-Private", available: 8, total: 15, price: "₹3,000/day", icon: "🏥" },
  { type: "Private Room", available: 4, total: 10, price: "₹5,000/day", icon: "🏨" },
  { type: "ICU", available: 3, total: 10, price: "₹8,000/day", icon: "❤️‍🩹" },
  { type: "PICU (Pediatric ICU)", available: 2, total: 5, price: "₹7,000/day", icon: "👶" },
  { type: "NICU", available: 4, total: 8, price: "₹6,000/day", icon: "🍼" },
];

const BedBooking = () => {
  const { toast } = useToast();
  const [selectedBed, setSelectedBed] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    gender: "",
    admissionDate: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bed Request Submitted!",
      description: "Our team will contact you shortly to confirm availability.",
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-hospital">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center card-hospital"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Bed Request Submitted!
              </h2>
              <p className="text-muted-foreground mb-6">
                Our admission team will contact you within 2 hours to confirm bed availability and complete the admission process.
              </p>
              <div className="bg-muted/50 rounded-xl p-4 text-left space-y-2 mb-6">
                <p><strong>Bed Type:</strong> {selectedBed}</p>
                <p><strong>Patient:</strong> {formData.name}</p>
                <p><strong>Admission Date:</strong> {formData.admissionDate}</p>
                <p><strong>Contact:</strong> {formData.mobile}</p>
              </div>
              <Button onClick={() => { setSubmitted(false); setShowForm(false); setSelectedBed(null); }}>
                Make Another Request
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent py-16">
        <div className="container-hospital">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BedDouble className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bed Availability & Booking
            </h1>
            <p className="text-muted-foreground">
              Check real-time bed availability and request admission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bed Availability */}
      <section className="section-padding">
        <div className="container-hospital">
          {!showForm ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {bedTypes.map((bed, i) => (
                  <motion.div
                    key={bed.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setSelectedBed(bed.type)}
                    className={`card-hospital cursor-pointer transition-all ${selectedBed === bed.type ? "ring-2 ring-primary border-primary" : ""
                      } ${bed.available === 0 ? "opacity-60" : ""}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{bed.icon}</span>
                      {bed.available > 0 ? (
                        <span className="flex items-center gap-1 text-sm text-secondary font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Available
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-destructive font-medium">
                          <AlertCircle className="w-4 h-4" />
                          Full
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{bed.type}</h3>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Availability</span>
                        <span className="font-medium text-foreground">{bed.available} / {bed.total}</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${bed.available === 0 ? "bg-destructive" : bed.available < 5 ? "bg-yellow-500" : "bg-secondary"
                            }`}
                          style={{ width: `${(bed.available / bed.total) * 100}%` }}
                        />
                      </div>
                    </div>

                    <p className="text-primary font-semibold">{bed.price}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => setShowForm(true)}
                  disabled={!selectedBed}
                  className="btn-primary gap-2"
                >
                  <BedDouble className="w-5 h-5" />
                  Request {selectedBed || "Bed"} Booking
                </Button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto"
            >
              <div className="mb-6">
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  ← Back to Bed Selection
                </Button>
              </div>

              <div className="card-hospital">
                <div className="flex items-center gap-3 mb-6">
                  <BedDouble className="w-6 h-6 text-primary" />
                  <div>
                    <h2 className="font-heading font-bold text-xl">Request {selectedBed}</h2>
                    <p className="text-sm text-muted-foreground">Fill in patient details</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Patient Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Mobile *</label>
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
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Age *</label>
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
                      <label className="block text-sm font-medium text-foreground mb-2">Gender *</label>
                      <Select
                        value={formData.gender}
                        onValueChange={(v) => setFormData({ ...formData, gender: v })}
                      >
                        <SelectTrigger className="w-full h-12">
                          <SelectValue placeholder="Select" />
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
                    <label className="block text-sm font-medium text-foreground mb-2">Expected Admission Date *</label>
                    <Input
                      type="date"
                      value={formData.admissionDate}
                      onChange={(e) => setFormData({ ...formData, admissionDate: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Reason for Admission</label>
                    <Textarea
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Medical condition or reason for admission"
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary"
                    disabled={!formData.name || !formData.mobile || !formData.age || !formData.gender || !formData.admissionDate}
                  >
                    Submit Bed Request
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BedBooking;
