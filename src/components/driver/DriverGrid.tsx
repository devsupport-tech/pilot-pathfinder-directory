
import { useState, useEffect } from "react";
import { DriverCard } from "@/components/driver";
import { Driver } from "@/types/driver";
import { useFilters } from "@/contexts/FilterContext";
import { Button } from "@/components/ui/button";

interface DriverGridProps {
  drivers: Driver[];
}

const DriverGrid = ({ drivers }: DriverGridProps) => {
  const { 
    selectedRegions, 
    selectedEquipment, 
    selectedCertifications,
    searchQuery,
    stateQuery
  } = useFilters();
  
  const [visibleDrivers, setVisibleDrivers] = useState(6);
  const [filteredDrivers, setFilteredDrivers] = useState<Driver[]>(drivers);
  
  useEffect(() => {
    const filtered = drivers.filter(driver => {
      // Apply search filter
      const searchMatch = searchQuery === "" || 
        driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.baseLocation.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.baseLocation.state.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Apply state filter
      const stateMatch = stateQuery === "" ||
        driver.baseLocation.state.toLowerCase().includes(stateQuery.toLowerCase()) ||
        driver.operatingRegions.some(region => 
          region.toLowerCase().includes(stateQuery.toLowerCase())
        );
      
      // Apply region filter
      const regionMatch = selectedRegions.length === 0 || 
        driver.operatingRegions.some(region => selectedRegions.includes(region));
      
      // Apply equipment filter
      const equipmentMatch = selectedEquipment.length === 0 || 
        driver.equipment.some(eq => selectedEquipment.includes(eq));
      
      // Apply certification filter
      const certMatch = selectedCertifications.length === 0 || 
        driver.certifications.some(cert => selectedCertifications.includes(cert.name));
      
      return searchMatch && stateMatch && regionMatch && equipmentMatch && certMatch;
    });
    
    setFilteredDrivers(filtered);
    setVisibleDrivers(6); // Reset pagination when filters change
  }, [drivers, selectedRegions, selectedEquipment, selectedCertifications, searchQuery, stateQuery]);
  
  const showMoreDrivers = () => {
    setVisibleDrivers(prev => Math.min(prev + 6, filteredDrivers.length));
  };
  
  if (filteredDrivers.length === 0) {
    return (
      <div className="text-center py-12 bg-white/50 dark:bg-pilot-700/30 rounded-lg">
        <h3 className="text-lg font-medium mb-2">No drivers found</h3>
        <p className="text-pilot-600 dark:text-pilot-400 mb-4">Try adjusting your filters or search criteria</p>
        <Button variant="outline" onClick={clearFilters} className="text-accent-500 border-accent-500">
          Clear all filters
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDrivers.slice(0, visibleDrivers).map((driver) => (
          <DriverCard 
            key={driver.id} 
            driver={driver} 
            featured={driver.featured}
          />
        ))}
      </div>
      
      {visibleDrivers < filteredDrivers.length && (
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
  );

  function clearFilters() {
    const { clearFilters: resetFilters } = useFilters();
    resetFilters();
  }
};

export default DriverGrid;
