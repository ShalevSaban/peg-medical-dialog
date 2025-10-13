import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.company || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual email service)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="mb-4">Ready to Expand Your Market Reach?</h2>
          <p className="text-lg text-muted-foreground">
            Partner with PEG Medical for expert guidance in medical device business development.
            Let's explore how we can help you achieve your international growth objectives.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 items-stretch shadow-2xl rounded-2xl overflow-hidden">
          {/* Left: Dark Blue with Contact Info */}
          <div className="bg-gradient-to-br from-primary via-primary to-primary/90 p-12 md:p-16 lg:p-24 flex flex-col justify-between text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

            <div className="max-w-lg animate-fade-in-up relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-white/90 text-lg mb-12 leading-relaxed">
                We're here to discuss your vision and explore partnership opportunities that drive success in the medical device industry.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/20 p-3 rounded-lg group-hover:bg-secondary/30 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-lg">Email Us</div>
                    <a
                      href="mailto:peg-medical@netvision.net.il"
                      className="text-white/90 hover:text-white transition-colors text-base hover:underline"
                    >
                      peg-medical@netvision.net.il
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/20 p-3 rounded-lg group-hover:bg-secondary/30 transition-colors">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-lg">Global Presence</div>
                    <div className="text-white/90 space-y-2 text-base">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>Israel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>Florida, USA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <span>United Kingdom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: White with Form */}
          <div className="bg-white p-12 md:p-16 lg:p-24 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="max-w-lg w-full animate-fade-in-up delay-100 flex flex-col h-full">
              <div className="space-y-5 flex-grow">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold mb-2 text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full text-base h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-base font-semibold mb-2 text-foreground">
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Your Company"
                      className="w-full text-base h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold mb-2 text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full text-base h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-base font-semibold mb-2 text-foreground">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full text-base h-12 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <label htmlFor="message" className="block text-base font-semibold mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your business development needs, market expansion goals, or partnership opportunities..."
                    className="w-full h-full min-h-[150px] text-base border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full text-lg h-14 font-semibold shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Your Message..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
