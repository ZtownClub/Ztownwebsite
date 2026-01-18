import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone} from "lucide-react";
import { submitContactForm } from "@/services/api";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await submitContactForm(data);
      
      toast({
        title: "Message sent!",
        description: response.message || "We'll get back to you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <section className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
          
          <div className="container relative mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-up animation-delay-100">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div className="glass-card rounded-3xl p-8 md:p-10 gradient-border animate-fade-up animation-delay-200 relative z-20">
                <form onSubmit={handleSubmit} className="space-y-6 relative z-30">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2 relative z-30">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        name="name"
                        placeholder="Your name"
                        required
                        maxLength={100}
                        className="bg-secondary/50 border-border/50 focus:border-primary relative z-30"
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2 relative z-30">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        maxLength={255}
                        className="bg-secondary/50 border-border/50 focus:border-primary relative z-30"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative z-30">
                    <label className="text-sm font-medium">Subject</label>
                    <Input
                      name="subject"
                      placeholder="What's this about?"
                      required
                      maxLength={200}
                      className="bg-secondary/50 border-border/50 focus:border-primary relative z-30"
                    />
                  </div>

                  <div className="space-y-2 relative z-30">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us more..."
                      rows={5}
                      required
                      maxLength={1000}
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none relative z-30"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 lg:pt-10 animate-fade-up animation-delay-300">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of these channels. Our team is here to help you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">connectztown@gmail.com</p>
                    </div>
                  </div>
<div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
      <Phone className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h3 className="font-semibold mb-1">Phone</h3>
      <p className="text-muted-foreground">9929894791, 9389820899 , 9758076000</p>
    </div>
  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Gurugram, Haryana, India</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="glass-card rounded-2xl p-6 mt-8">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Business Hours:</strong>
                    <br />
                    Monday - Friday: 11:00 AM - 11:00 PM IST
                    <br />
                    Sunday: 11:00 AM - 5:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
