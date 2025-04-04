
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useElementOnScreen } from "@/utils/animations";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
        duration: 5000
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="py-24 bg-white dark:bg-pilot-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={cn(
              "text-center mb-16 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-2xl mx-auto">
              Have questions about our pilot car directory? Get in touch with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              className={cn(
                "transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
            >
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-pilot-600 dark:text-pilot-300 mb-8">
                  Whether you're a transportation company looking for pilot car services or a pilot car operator interested in joining our directory, we're here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-accent-500/10 text-accent-500 p-3 rounded-full mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-pilot-600 dark:text-pilot-300">info@pilotpath.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-accent-500/10 text-accent-500 p-3 rounded-full mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <p className="text-pilot-600 dark:text-pilot-300">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-accent-500/10 text-accent-500 p-3 rounded-full mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Our Office</h4>
                      <p className="text-pilot-600 dark:text-pilot-300">
                        123 Transport Way<br />
                        Suite 456<br />
                        Dallas, TX 75201
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className={cn(
                "transition-all duration-700 transform",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}
            >
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-accent-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-accent-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-accent-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-accent-500"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent-500 hover:bg-accent-600 text-white w-full py-6 flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
