
import { Phone, Mail } from "lucide-react";

interface DriverContactInfoProps {
  phone?: string;
  email?: string;
}

const DriverContactInfo = ({ phone, email }: DriverContactInfoProps) => {
  if (!phone && !email) return null;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
  );
};

export default DriverContactInfo;
