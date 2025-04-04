
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Filter, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DriverFilters } from "@/components/driver";
import DriverGrid from "@/components/driver/DriverGrid";
import { drivers } from "@/data/drivers";
import { FilterProvider } from "@/contexts/FilterContext";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const Drivers = () => {
  const isMobile = useIsMobile();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <FilterProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <section className="py-8 md:py-12 bg-white dark:bg-pilot-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Find Pilot Car Drivers</h1>
                <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-3xl mb-6 md:mb-8">
                  Browse our network of professional pilot car operators. Filter by region, equipment, and certifications to find the perfect match for your transport needs.
                </p>
                
                {isMobile ? (
                  // Mobile layout with drawer
                  <>
                    <div className="mb-4 flex justify-between items-center">
                      <Drawer>
                        <DrawerTrigger asChild>
                          <Button 
                            className="flex items-center gap-2"
                            variant="outline"
                          >
                            <Filter size={16} />
                            <span>Filters</span>
                          </Button>
                        </DrawerTrigger>
                        <DrawerContent className="h-[80vh] p-4">
                          <div className="h-full overflow-auto pb-20">
                            <DriverFilters />
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </div>
                    <DriverGrid drivers={drivers} />
                  </>
                ) : (
                  // Desktop layout with sidebar
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/4">
                      <DriverFilters />
                    </div>
                    
                    <div className="w-full lg:w-3/4">
                      <DriverGrid drivers={drivers} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </FilterProvider>
  );
};

export default Drivers;
