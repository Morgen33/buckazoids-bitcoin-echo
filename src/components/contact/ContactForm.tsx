
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="md:col-span-1 bg-[#fff3e2] p-8 rounded-2xl shadow-lg border border-buckazoids-orange/10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-buckazoid-navy font-medium mb-1">Name</label>
          <Input 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Your name" 
            className="bg-white/80 border-buckazoids-orange/20 focus:border-buckazoids-orange transition-colors"
            required 
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-buckazoid-navy font-medium mb-1">Email</label>
          <Input 
            id="email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="your@email.com" 
            className="bg-white/80 border-buckazoids-orange/20 focus:border-buckazoids-orange transition-colors"
            required 
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-buckazoid-navy font-medium mb-1">Message</label>
          <Textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Your message here..." 
            className="min-h-[150px] bg-white/80 border-buckazoids-orange/20 focus:border-buckazoids-orange transition-colors"
            required 
          />
        </div>
        
        <div className="flex justify-center my-4">
          {/* Placeholder for where reCAPTCHA was */}
          <div className="h-8 flex items-center justify-center">
            <span className="text-xs text-gray-500">Privacy protected form</span>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-[#f7931a] hover:bg-[#f7931a]/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
          disabled={isSubmitting}
        >
          <Mail className="mr-2 h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
