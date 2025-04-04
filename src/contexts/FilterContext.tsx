
import React, { createContext, useContext, useState, ReactNode } from "react";
import { regions, equipmentTypes, certifications } from "@/data/driversData";

interface FilterContextType {
  selectedRegions: string[];
  selectedEquipment: string[];
  selectedCertifications: string[];
  searchQuery: string;
  stateQuery: string;
  toggleRegion: (region: string) => void;
  toggleEquipment: (equipment: string) => void;
  toggleCertification: (certification: string) => void;
  setSearchQuery: (query: string) => void;
  setStateQuery: (query: string) => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [stateQuery, setStateQuery] = useState("");

  const toggleRegion = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  const toggleEquipment = (equipment: string) => {
    setSelectedEquipment(prev => 
      prev.includes(equipment)
        ? prev.filter(e => e !== equipment)
        : [...prev, equipment]
    );
  };

  const toggleCertification = (certification: string) => {
    setSelectedCertifications(prev => 
      prev.includes(certification)
        ? prev.filter(c => c !== certification)
        : [...prev, certification]
    );
  };

  const clearFilters = () => {
    setSelectedRegions([]);
    setSelectedEquipment([]);
    setSelectedCertifications([]);
    setSearchQuery("");
    setStateQuery("");
  };

  return (
    <FilterContext.Provider value={{
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
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
