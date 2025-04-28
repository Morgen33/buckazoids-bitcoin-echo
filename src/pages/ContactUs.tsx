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
import { Mail, MessageSquare } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#fff9f2]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-buckazoid-navy bg-clip-text">Get in Touch</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions about Buckazoids? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 bg-[#fff3e2] p-8 rounded-2xl shadow-lg border border-buckazoids-orange/10">
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

            <div className="md:col-span-2 bg-[#f7931a] p-8 rounded-2xl text-white space-y-6">
              <div className="space-y-2">
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

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 mt-1 text-buckazoids-orange" />
                  <div>
                    <h3 className="font-medium">Community Support</h3>
                    <p className="text-gray-300 text-sm">
                      Our community is here to help you 24/7. Join our Discord for real-time support.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1 text-buckazoids-orange" />
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-gray-300 text-sm">
                      For business inquiries and partnerships, we typically respond within 24 hours.
                    </p>
                  </div>
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
