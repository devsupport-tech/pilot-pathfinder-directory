
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface DriverAvatarProps {
  avatar: string;
  name: string;
  availableNow: boolean;
  size?: "sm" | "md" | "lg";
}

const DriverAvatar = ({ avatar, name, availableNow, size = "sm" }: DriverAvatarProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24"
  };
  
  return (
    <div className="relative">
      <img 
        src={avatar} 
        alt={name} 
        className={cn(
          sizeClasses[size],
          "rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm"
        )}
      />
      {availableNow && (
        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-5 h-5 border-2 border-white dark:border-gray-800 flex items-center justify-center" title="Available now">
          <Check size={12} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default DriverAvatar;
