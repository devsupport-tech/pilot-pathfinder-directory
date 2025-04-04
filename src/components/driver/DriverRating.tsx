
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface DriverRatingProps {
  rating: number;
  reviewCount: number;
  showReviewCount?: boolean;
  showExperience?: boolean;
  yearsExperience?: number;
  size?: "sm" | "md";
}

const DriverRating = ({ 
  rating, 
  reviewCount, 
  showReviewCount = true, 
  showExperience = false,
  yearsExperience,
  size = "sm" 
}: DriverRatingProps) => {
  const starSize = size === "sm" ? 14 : 16;
  
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={starSize}
            className={cn(
              i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
              "mr-0.5"
            )}
          />
        ))}
      </div>
      <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
      
      {showReviewCount && (
        <>
          <span className="mx-1 text-pilot-300">•</span>
          <span className="text-sm text-pilot-600 dark:text-pilot-300">{reviewCount} reviews</span>
        </>
      )}
      
      {showExperience && yearsExperience && (
        <>
          <span className="mx-1 text-pilot-300">•</span>
          <span className="text-sm">{yearsExperience} years exp.</span>
        </>
      )}
    </div>
  );
};

export default DriverRating;
