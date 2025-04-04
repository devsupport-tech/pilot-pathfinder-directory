
import { useState } from "react";
import { X, Filter, ChevronDown, ChevronUp, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { regions } from "@/data/regions";
import { equipmentTypes } from "@/data/equipment";
import { certifications } from "@/data/certifications";
import { useFilters } from "@/contexts/FilterContext";
import { cn } from "@/lib/utils";

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  toggleItem: (item: string) => void;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const FilterSection = ({ title, items, selectedItems, toggleItem, isExpanded, toggleExpand }: FilterSectionProps) => {
  return (
    <div className="mb-4">
      <button 
        className="flex items-center justify-between w-full text-left px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
        onClick={toggleExpand}
      >
        <span className="font-medium">{title}</span>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isExpanded && (
        <div className="mt-2 pl-2 max-h-60 overflow-y-auto">
          {items.map((item) => (
            <div key={item} className="flex items-center py-1">
              <button
                className="flex items-center hover:text-accent-500 w-full"
                onClick={() => toggleItem(item)}
              >
                <div className={cn(
                  "w-4 h-4 mr-2 flex items-center justify-center border rounded",
                  selectedItems.includes(item) 
                    ? "bg-accent-500 border-accent-500" 
                    : "border-gray-300 dark:border-gray-600"
                )}>
                  {selectedItems.includes(item) && (
                    <Check size={12} className="text-white" />
                  )}
                </div>
                <span className="text-sm">{item}</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DriverFilters = () => {
  const { 
    selectedRegions, 
    selectedEquipment, 
    selectedCertifications,
    searchQuery,
    stateQuery,
    toggleRegion, 
    toggleEquipment, 
    toggleCertification,
    setSearchQuery,
    setStateQuery,
    clearFilters
  } = useFilters();
  
  const [expandedSections, setExpandedSections] = useState({
    regions: true,
    equipment: false,
    certifications: false
  });
  
  const toggleSection = (section: 'regions' | 'equipment' | 'certifications') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const activeFilterCount = selectedRegions.length + selectedEquipment.length + selectedCertifications.length + 
    (searchQuery ? 1 : 0) + (stateQuery ? 1 : 0);
  
  return (
    <div className="bg-white dark:bg-pilot-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center">
          <Filter size={18} className="mr-2 text-accent-500" />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-2 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </h3>
        
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Clear all
          </Button>
        )}
      </div>
      
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search drivers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>
      
      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <MapPin size={16} className="text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search by state name or abbreviation..."
          value={stateQuery}
          onChange={(e) => setStateQuery(e.target.value)}
          className="w-full pl-10"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Try "California" or "CA", "New York" or "NY"
        </p>
      </div>
      
      <Separator className="my-4" />
      
      <FilterSection
        title="Regions"
        items={regions}
        selectedItems={selectedRegions}
        toggleItem={toggleRegion}
        isExpanded={expandedSections.regions}
        toggleExpand={() => toggleSection('regions')}
      />
      
      <FilterSection
        title="Equipment"
        items={equipmentTypes}
        selectedItems={selectedEquipment}
        toggleItem={toggleEquipment}
        isExpanded={expandedSections.equipment}
        toggleExpand={() => toggleSection('equipment')}
      />
      
      <FilterSection
        title="Certifications"
        items={certifications}
        selectedItems={selectedCertifications}
        toggleItem={toggleCertification}
        isExpanded={expandedSections.certifications}
        toggleExpand={() => toggleSection('certifications')}
      />
    </div>
  );
};

export default DriverFilters;
