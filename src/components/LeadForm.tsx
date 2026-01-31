import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Mail, Loader2, Send, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  whatsappNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number").optional().or(z.literal("")),
  fullAddress: z.string().min(10, "Please enter complete address").max(500),
  city: z.string().min(2, "City is required").max(100),
  systemSize: z.enum(["1kW", "2kW", "3kW", "5kW", "10kW+"], {
    required_error: "Please select system size",
  }),
  monthlyBill: z.string().max(50).optional(),
  message: z.string().max(1000).optional(),
  sendViaWhatsapp: z.boolean().default(false),
  sendViaEmail: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      whatsappNumber: "",
      fullAddress: "",
      city: "",
      systemSize: undefined,
      monthlyBill: "",
      message: "",
      sendViaWhatsapp: false,
      sendViaEmail: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
 // Save to database
const { error } = await supabase.from("leads").insert({
  name: data.fullName,
  phone: data.mobileNumber,
  email: data.email || null,
  city: data.city,
  system_size: data.systemSize,
  monthly_electricity_bill: data.monthlyBill || null,
  message: data.message || null,
  whatsapp_number: data.whatsappNumber || null,
  full_address: data.fullAddress || null,
  send_via_whatsapp: data.sendViaWhatsapp,
  send_via_email: data.sendViaEmail,
  source: data.sendViaWhatsapp ? "whatsapp" : "website",
});

if (error) {
  console.error("Supabase insert error:", error);
  throw error;
// ===== OPEN EMAIL APP =====
const subject = encodeURIComponent("Solar Installation Inquiry");

const body = encodeURIComponent(`
Hello BSEAS Team,

I am interested in solar installation.

Name: ${data.fullName}
Phone: ${data.mobileNumber}
Email: ${data.email || "N/A"}
City: ${data.city}
System Size: ${data.systemSize}
Monthly Electricity Bill: ₹${data.monthlyBill || "N/A"}

Message:
${data.message || ""}

Regards,
${data.fullName}
`);

window.location.href = `mailto:bidyabkasolarenergy@gmail.com?subject=${subject}&body=${body}`;


}


      // Handle WhatsApp submission
      if (data.sendViaWhatsapp) {
        const whatsappMessage = encodeURIComponent(
          `*New Solar Inquiry*\n\n` +
          `*Name:* ${data.fullName}\n` +
          `*Mobile:* ${data.mobileNumber}\n` +
          `*WhatsApp:* ${data.whatsappNumber || data.mobileNumber}\n` +
          `*Address:* ${data.fullAddress}\n` +
          `*City:* ${data.city}\n` +
          `*System Size:* ${data.systemSize}\n` +
          `*Monthly Bill:* ${data.monthlyBill || "Not specified"}\n` +
          `*Message:* ${data.message || "No additional message"}`
        );
        window.open(`https://wa.me/919337784113?text=${whatsappMessage}`, "_blank");
      }

      toast({
        title: "Application Submitted Successfully! ✓",
        description: "Our team will contact you within 24 hours.",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="section-padding eco-pattern relative overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Free Site Survey</span>
            </motion.div>
            <h2 className="section-title text-foreground mb-4">
              Apply for <span className="gradient-text">Solar Subsidy</span>
            </h2>
            <p className="section-subtitle">
              Fill the form below and get a free site survey
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-strong p-7 md:p-10 rounded-3xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          className="h-12 rounded-xl border-border/50 focus:border-primary input-glow" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Numbers */}
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Mobile Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="10-digit mobile" 
                            className="h-12 rounded-xl border-border/50 focus:border-primary input-glow"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsappNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">WhatsApp Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="If different from mobile" 
                            className="h-12 rounded-xl border-border/50 focus:border-primary input-glow"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Address */}
                <FormField
                  control={form.control}
                  name="fullAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Full Address *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="House No, Street, Locality, District, PIN" 
                          className="rounded-xl border-border/50 focus:border-primary input-glow min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* City & System Size */}
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">City *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your city" 
                            className="h-12 rounded-xl border-border/50 focus:border-primary input-glow"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="systemSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">System Size Required *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl border-border/50 focus:border-primary">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-xl">
                            <SelectItem value="1kW">1 kW (₹30,000 Subsidy)</SelectItem>
                            <SelectItem value="2kW">2 kW (₹60,000 Subsidy)</SelectItem>
                            <SelectItem value="3kW">3 kW (₹78,000 Subsidy)</SelectItem>
                            <SelectItem value="5kW">5 kW (₹78,000 Subsidy)</SelectItem>
                            <SelectItem value="10kW+">10 kW+ (Commercial)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Monthly Bill */}
                <FormField
                  control={form.control}
                  name="monthlyBill"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Monthly Electricity Bill (approx)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., ₹2,000" 
                          className="h-12 rounded-xl border-border/50 focus:border-primary input-glow"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Additional Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific requirements or questions?" 
                          className="rounded-xl border-border/50 focus:border-primary input-glow min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submission Options */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 space-y-4">
                  <p className="text-sm font-bold text-foreground">
                    Send inquiry via:
                  </p>
                  <FormField
                    control={form.control}
                    name="sendViaWhatsapp"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-primary data-[state=checked]:bg-primary"
                          />
                        </FormControl>
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <MessageCircle className="w-4 h-4 text-secondary" />
                          Send via WhatsApp
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sendViaEmail"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-primary data-[state=checked]:bg-primary"
                          />
                        </FormControl>
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Mail className="w-4 h-4 text-primary" />
                          Send via Email (Coming Soon)
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
