
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DriverCard } from "@/components/driver";
import { drivers as allDrivers } from "@/data/drivers";
import { useElementOnScreen } from "@/utils/animations";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const FeaturedDrivers = () => {
  const [visibleDrivers, setVisibleDrivers] = useState(3);
  const { containerRef, isVisible } = useElementOnScreen();
  const featuredDrivers = allDrivers.filter(driver => driver.featured);
  
  const showMoreDrivers = () => {
    setVisibleDrivers(prev => Math.min(prev + 3, allDrivers.length));
  };
  
  return (
    <section 
      className="py-24 bg-white dark:bg-pilot-800"
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "max-w-6xl mx-auto transition-all duration-700 delay-100",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Pilot Car Drivers</h2>
              <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-2xl">
                Meet our top-rated, experienced pilot car operators ready to ensure safe transport for your oversized loads.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/drivers">
                <Button 
                  variant="outline" 
                  className="group border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white transition-colors"
                >
                  View All Drivers
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allDrivers.slice(0, visibleDrivers).map((driver, index) => (
              <div 
                key={driver.id}
                className={cn(
                  "transition-all duration-500 transform",
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10",
                  `delay-[${index * 100}ms]`
                )}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <DriverCard 
                  driver={driver} 
                  featured={driver.featured}
                />
              </div>
            ))}
          </div>
          
          {visibleDrivers < allDrivers.length && (
            <div className="mt-12 text-center">
              <Button 
                onClick={showMoreDrivers}
                variant="outline"
                className="px-8 border-pilot-300 dark:border-pilot-600 hover:bg-pilot-100 dark:hover:bg-pilot-700 transition-colors"
              >
                Load More Drivers
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrivers;
