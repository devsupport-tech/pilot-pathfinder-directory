
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface DriverRegionsProps {
  regions: string[];
  className?: string;
  variant?: "compact" | "expanded";
}

const DriverRegions = ({ regions, className, variant = "expanded" }: DriverRegionsProps) => {
  return (
    <div className={cn(
      variant === "expanded" ? "bg-pilot-50 dark:bg-pilot-800/50 p-3 rounded-lg" : "",
      className
    )}>
      <h4 className="text-sm font-semibold mb-2 flex items-center">
        <Shield size={16} className="mr-1 text-accent-500" />
        Operating Regions
      </h4>
      <div className="flex flex-wrap gap-2">
        {regions.map((region, idx) => (
          <span 
            key={idx} 
            className={cn(
              "inline-block text-xs px-2 py-1 rounded",
              variant === "expanded" 
                ? "bg-white dark:bg-pilot-700" 
                : "bg-pilot-50 dark:bg-pilot-800"
            )}
          >
            {region}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DriverRegions;
