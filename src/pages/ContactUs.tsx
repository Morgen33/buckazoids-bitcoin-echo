
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MessageSquare, Twitter, Github, Youtube, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          ...values,
          captchaToken,
        },
      });

      if (error) throw new Error(error.message);

      toast.success("Message sent successfully!");
      form.reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff9f2]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-buckazoid-navy">Join Our Community</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Connect with fellow Buckazoid enthusiasts, developers, and crypto historians to explore 
              this rediscovered piece of digital currency history.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Twitter Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Twitter className="text-[#02314d] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#02314d] mb-4">Twitter</h3>
              <p className="text-gray-600 mb-6">
                Follow us for the latest updates, community events, and discussions about Buckazoids and crypto history.
              </p>
              <Button 
                className="bg-[#02314d] hover:bg-buckazoid-orange text-white"
                onClick={() => window.open('https://x.com/BuckazoidsSOL', '_blank')}
              >
                Follow @Buckazoids
              </Button>
            </div>

            {/* Documentation Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Twitter className="text-buckazoid-orange w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-buckazoid-orange mb-4">Documenting Buckazoids</h3>
              <p className="text-gray-600 mb-6">
                Explore the rich lore and history of Buckazoids through our dedicated documentation channel.
              </p>
              <Button 
                className="bg-buckazoid-orange hover:bg-buckazoid-yellow text-white"
                onClick={() => window.open('https://x.com/@59Buckazoids', '_blank')}
              >
                Follow @59Buckazoids
              </Button>
            </div>

            {/* White Paper Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Github className="text-[#02314d] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#02314d] mb-4">White Paper</h3>
              <p className="text-gray-600 mb-6">
                Read our comprehensive white paper to understand the history and vision behind the Buckazoids project.
              </p>
              <Button 
                className="bg-[#02314d] hover:bg-buckazoid-orange text-white"
                onClick={() => window.open('https://github.com/Buckazoidscto/Buckazoids-white-paper-', '_blank')}
              >
                View White Paper
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:col-span-1 bg-[#fff3e2] p-8 rounded-2xl shadow-lg border border-buckazoids-orange/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-buckazoid-navy font-medium">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="bg-white/80 border-buckazoids-orange/20 focus:border-buckazoids-orange transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-buckazoid-navy font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            type="email" 
                            {...field}
                            className="bg-white/80 border-buckazoids-orange/20 focus:border-buckazoids-orange transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-buckazoid-navy font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..."
                            className="min-h-[150px] bg-white/80 border-buckazoids-orange/20 focus:border-buckazoids-orange transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-center my-4">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    />
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
              </Form>
            </div>

            <div className="md:col-span-1 bg-[#f7931a] p-8 rounded-2xl text-white space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Connect With Us</h2>
                <p className="text-white/90">
                  Join our growing community and stay updated with the latest news and developments.
                </p>
                <p className="text-white/90 mt-4">
                  Find us on X {" "}
                  <a 
                    href="https://x.com/BuckazoidsSOL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                  >
                    @BuckazoidsSOL
                  </a>
                  {" "} and send a DM for faster response.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <MessageSquare className="w-5 h-5 text-white" />
                  <h3 className="font-medium">Community Support</h3>
                  <p className="text-gray-100 text-sm">
                    Join our Discord for real-time support.
                  </p>
                </div>
                <div className="space-y-2">
                  <Mail className="w-5 h-5 text-white" />
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-gray-100 text-sm">
                    We respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
