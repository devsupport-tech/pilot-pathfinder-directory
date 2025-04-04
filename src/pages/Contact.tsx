
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useElementOnScreen } from "@/utils/animations";
import { cn } from "@/lib/utils";
import { MessageSquare, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    console.log("Form submitted:", formData);
    toast.success("Your message has been sent! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Our team typically responds within 24 hours",
      contact: "support@pilotpath.com",
      action: "Email Us",
      link: "mailto:support@pilotpath.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm EST",
      contact: "(555) 123-4567",
      action: "Call Now",
      link: "tel:+15551234567"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Available during business hours",
      contact: "Start a conversation",
      action: "Start Chat",
      link: "#"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section 
          ref={containerRef}
          className="py-24 bg-gradient-to-b from-white to-pilot-50 dark:from-pilot-800 dark:to-pilot-900"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div 
                className={cn(
                  "text-center mb-16 transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <span className="inline-block py-1 px-3 bg-accent-500/20 text-accent-500 rounded-full text-sm font-medium mb-4">Get In Touch</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-3xl mx-auto">
                  Have questions about our platform or need assistance? Our support team is here to help you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className={cn(
                      "hover-lift transition-all duration-700 transform",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 mb-4">
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                      <p className="text-pilot-600 dark:text-pilot-300 mb-3">{method.description}</p>
                      <p className="font-medium mb-4">{method.contact}</p>
                      <a 
                        href={method.link} 
                        className="text-accent-500 hover:text-accent-600 font-medium flex items-center gap-1"
                      >
                        {method.action} <Send size={14} />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div 
                  className={cn(
                    "lg:col-span-2 transition-all duration-700 transform",
                    isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
                  )}
                >
                  <div className="bg-white dark:bg-pilot-800 p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Office Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="text-accent-500 mt-1">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Headquarters</h3>
                          <p className="text-pilot-600 dark:text-pilot-300">
                            123 Transport Avenue<br />
                            Suite 456<br />
                            Chicago, IL 60601
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="text-accent-500 mt-1">
                          <Clock size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Business Hours</h3>
                          <p className="text-pilot-600 dark:text-pilot-300">
                            Monday - Friday: 8am - 5pm EST<br />
                            Saturday: 9am - 1pm EST<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "lg:col-span-3 transition-all duration-700 transform",
                    isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-10"
                  )}
                >
                  <div className="bg-white dark:bg-pilot-800 p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                          <Input 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
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
                            placeholder="Your email address"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                        <Input 
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <Textarea 
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Provide details about your inquiry..."
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-accent-500 hover:bg-accent-600 text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              
              <div 
                className={cn(
                  "mt-16 text-center transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-10"
                )}
              >
                <h2 className="text-2xl font-bold mb-4">We look forward to hearing from you!</h2>
                <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-2xl mx-auto">
                  Whether you have questions about our services, need technical support, or want to provide feedback, 
                  we're always here to listen and help.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
