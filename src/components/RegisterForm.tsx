
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, User, Mail, Phone, Building, MessageSquare } from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessRevenue: "",
    yearsInBusiness: "",
    goals: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Application Received",
        description: "Your application for Dr. Stephen's Inner Circle Mentorship has been submitted successfully. We'll be in touch soon.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-premium-900/50 border border-gold-500/20 backdrop-blur-lg p-6 shadow-lg text-center">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-4">
            <CheckCircle2 size={64} className="text-gold-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
          <p className="text-gray-300 mb-6">
            Thank you for your interest in the Inner Circle Mentorship. Dr. Stephen and his team will personally review your application
            and contact you soon with next steps.
          </p>
          <p className="text-gold-400 mb-8 italic">
            "The difference between where you are and where you want to be is the people you meet and the books you read." - Dr. Stephen Akintayo
          </p>
          <Button 
            className="premium-button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Return to Top
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-premium-900/50 border border-gold-500/20 backdrop-blur-lg p-6 shadow-lg">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-gold-300 font-medium">Full Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <User size={16} />
              </span>
              <Input
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="premium-form-input pl-10"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gold-300 font-medium">Email Address</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Mail size={16} />
              </span>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="premium-form-input pl-10"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm text-gold-300 font-medium">Phone Number</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Phone size={16} />
              </span>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="premium-form-input pl-10"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm text-gold-300 font-medium">Company Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Building size={16} />
              </span>
              <Input
                id="company"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
                className="premium-form-input pl-10"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="businessRevenue" className="text-sm text-gold-300 font-medium">Annual Business Revenue</label>
              <select
                id="businessRevenue"
                name="businessRevenue"
                value={formData.businessRevenue}
                onChange={handleChange}
                required
                className="premium-form-input w-full h-10 rounded-md"
              >
                <option value="" disabled>Select Revenue Range</option>
                <option value="0-10M">₦0 - ₦10M</option>
                <option value="10M-50M">₦10M - ₦50M</option>
                <option value="50M-100M">₦50M - ₦100M</option>
                <option value="100M-500M">₦100M - ₦500M</option>
                <option value="500M-1B">₦500M - ₦1B</option>
                <option value="1B+">₦1B+</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="yearsInBusiness" className="text-sm text-gold-300 font-medium">Years in Business</label>
              <select
                id="yearsInBusiness"
                name="yearsInBusiness"
                value={formData.yearsInBusiness}
                onChange={handleChange}
                required
                className="premium-form-input w-full h-10 rounded-md"
              >
                <option value="" disabled>Select Years</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="goals" className="text-sm text-gold-300 font-medium">Primary Goal for Mentorship</label>
            <select
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              required
              className="premium-form-input w-full h-10 rounded-md"
            >
              <option value="" disabled>Select Primary Goal</option>
              <option value="scale">Scale my business</option>
              <option value="investment">Access to investment opportunities</option>
              <option value="network">Build a high-level network</option>
              <option value="systems">Create business systems</option>
              <option value="legacy">Build generational wealth/legacy</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gold-300 font-medium">Why do you want to join Dr. Stephen's Inner Circle?</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <MessageSquare size={16} />
              </span>
              <Textarea
                id="message"
                name="message"
                placeholder="Share why you want to join the Inner Circle Mentorship and what you hope to achieve..."
                value={formData.message}
                onChange={handleChange}
                required
                className="premium-form-input pl-10 min-h-[120px]"
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="premium-button w-full animate-pulse-glow py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing Your Application..." : "Submit Application for Review"}
          </Button>
          
          <p className="text-sm text-gray-400 text-center pt-2">
            By applying, you agree to be contacted about the mentorship program.<br />
            <span className="text-gold-400">Only serious applications will be considered due to limited availability.</span>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
