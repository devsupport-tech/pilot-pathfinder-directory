
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { Driver } from "@/data/driversData";
import {
  DriverAvatar,
  DriverInfo,
  DriverStats,
  DriverCertifications,
  DriverRegions,
} from "./index";
import { BadgeCheck } from "lucide-react";

interface DriverCardProps {
  driver: Driver;
  featured?: boolean;
}

const DriverCard = ({ driver, featured }: DriverCardProps) => {
  return (
    <Link 
      to={`/drivers/${driver.id}`} 
      className={cn(
        "group block relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1",
        featured 
          ? "bg-gradient-to-br from-white to-accent-50 dark:from-pilot-800 dark:to-accent-900/20 border-2 border-accent-500/30" 
          : "bg-white dark:bg-pilot-800/80 border border-gray-100 dark:border-pilot-700"
      )}
    >
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-accent-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
            <BadgeCheck size={14} />
            <span>FEATURED</span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0">
            <div className={cn(
              "p-1 rounded-full",
              featured ? "bg-gradient-to-br from-accent-300/20 to-accent-500/20" : "bg-gray-50 dark:bg-pilot-700/50"
            )}>
              <DriverAvatar 
                avatar={driver.avatar} 
                name={driver.name} 
                availableNow={driver.availableNow} 
                size={featured ? "md" : "sm"}
              />
            </div>
          </div>
          
          <div className="flex-1">
            <DriverInfo 
              name={driver.name}
              baseLocation={driver.baseLocation}
              rating={driver.rating}
              reviewCount={driver.reviewCount}
            />
          </div>
        </div>
        
        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700">
          <DriverStats 
            yearsExperience={driver.yearsExperience}
            vehicleType={driver.vehicleType}
            hourlyRate={driver.hourlyRate}
          />
        </div>
        
        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700">
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">About</h4>
            <p className="text-sm text-pilot-600 dark:text-pilot-300 line-clamp-2">{driver.bio}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DriverCertifications certifications={driver.certifications} />
            <DriverRegions regions={driver.operatingRegions} variant="compact" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DriverCard;
