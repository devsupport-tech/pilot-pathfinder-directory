
import { FormEvent, useState } from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ContactFormProps {
  driverName: string;
  phone?: string;
  email?: string;
}

type ContactMethod = "email" | "text" | "both";

const ContactForm = ({ driverName, phone, email }: ContactFormProps) => {
  const { toast } = useToast();
  const [contactMethod, setContactMethod] = useState<ContactMethod>(
    email && !phone ? "email" : phone && !email ? "text" : "both"
  );
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const method = contactMethod;
    
    toast({
      title: "Message Sent!",
      description: `Your ${getMethodText(method)} to ${driverName} has been sent. They'll get back to you shortly.`,
    });
  };
  
  const getMethodText = (method: ContactMethod): string => {
    switch (method) {
      case "email": return "email";
      case "text": return "text message";
      case "both": return "message";
      default: return "message";
    }
  };
  
  // Check if the driver has provided contact methods
  const hasContactInfo = !!(phone || email);
  const showMethodSelector = !!(phone && email);

  return (
    <div className="bg-white dark:bg-pilot-800 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Contact {driverName}</h2>
      
      {hasContactInfo && (
        <div className="mb-6 grid gap-2">
          {phone && (
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-accent-500" />
              <span>{phone}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-accent-500" />
              <span>{email}</span>
            </div>
          )}
        </div>
      )}
      
      <form onSubmit={handleContactSubmit}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <Input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <Input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          
          {contactMethod === "text" || contactMethod === "both" ? (
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Your Phone Number</label>
              <Input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber"
                placeholder="Your phone number for text messages"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required={contactMethod === "text" || contactMethod === "both"}
              />
            </div>
          ) : null}
          
          {showMethodSelector && (
            <div className="py-2">
              <label className="block text-sm font-medium mb-2">How would you like to be contacted?</label>
              <RadioGroup 
                value={contactMethod} 
                onValueChange={(value) => setContactMethod(value as ContactMethod)}
                className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                {email && (
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="option-email" />
                    <Label htmlFor="option-email" className="flex items-center cursor-pointer">
                      <Mail size={16} className="mr-1.5 text-accent-500" />
                      Email only
                    </Label>
                  </div>
                )}
                
                {phone && (
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="option-text" />
                    <Label htmlFor="option-text" className="flex items-center cursor-pointer">
                      <MessageSquare size={16} className="mr-1.5 text-accent-500" />
                      Text only
                    </Label>
                  </div>
                )}
                
                {email && phone && (
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="option-both" />
                    <Label htmlFor="option-both" className="flex items-center cursor-pointer">
                      <Phone size={16} className="mr-1.5 text-accent-500" />
                      Both email & text
                    </Label>
                  </div>
                )}
              </RadioGroup>
            </div>
          )}
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
            <Input 
              type="text" 
              id="subject" 
              name="subject"
              placeholder="Message subject"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows={4} 
              className="w-full rounded-md border border-pilot-200 dark:border-pilot-700 bg-white dark:bg-pilot-900 p-2"
              placeholder="Your message to the driver"
              required
            ></textarea>
          </div>
          
          <Button type="submit" className="w-full">Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
