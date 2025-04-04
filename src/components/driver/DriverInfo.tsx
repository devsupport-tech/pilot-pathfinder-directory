
import { MapPin } from "lucide-react";
import { DriverRating } from "./index";

interface DriverInfoProps {
  name: string;
  baseLocation: {
    city: string;
    state: string;
  };
  rating: number;
  reviewCount: number;
  yearsExperience?: number;
  showExperience?: boolean;
  variant?: "card" | "dialog";
}

const DriverInfo = ({ 
  name, 
  baseLocation, 
  rating, 
  reviewCount, 
  yearsExperience,
  showExperience = false,
  variant = "card" 
}: DriverInfoProps) => {
  const nameSize = variant === "card" ? "text-lg" : "text-xl";
  
  return (
    <div>
      <h3 className={`${nameSize} font-semibold mb-1 group-hover:text-accent-500 transition-colors`}>
        {name}
      </h3>
      <div className="flex items-center text-sm text-pilot-600 dark:text-pilot-300 mb-2">
        <MapPin size={variant === "card" ? 14 : 16} className="mr-1" />
        <span>{baseLocation.city}, {baseLocation.state}</span>
      </div>
      
      <DriverRating 
        rating={rating} 
        reviewCount={reviewCount} 
        size={variant === "card" ? "sm" : "md"}
        showExperience={showExperience}
        yearsExperience={yearsExperience}
      />
    </div>
  );
};

export default DriverInfo;
