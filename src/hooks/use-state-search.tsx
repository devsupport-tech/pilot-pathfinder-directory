
import { useState, useEffect } from "react";
import { Driver } from "@/types/driver";
import { abbreviationToState, isStateAbbreviation } from "@/utils/stateAbbreviations";

export function useStateSearch(drivers: Driver[]) {
  // State for tracking the search query
  const [stateQuery, setStateQuery] = useState("");
  const [filteredByState, setFilteredByState] = useState<Driver[]>(drivers);

  // Filter drivers by state name or abbreviation
  useEffect(() => {
    if (!stateQuery.trim()) {
      setFilteredByState(drivers);
      return;
    }

    const query = stateQuery.toLowerCase().trim();
    
    // Check if the query is potentially a state abbreviation (2 characters)
    const isAbbreviation = isStateAbbreviation(query);
    const stateFromAbbr = isAbbreviation ? abbreviationToState[query.toLowerCase()] : null;
    
    const filtered = drivers.filter(driver => {
      // Match by state name 
      const stateMatch = driver.baseLocation.state.toLowerCase().includes(query);
      
      // Match by abbreviation (if query is an abbreviation)
      const abbrMatch = isAbbreviation && 
        driver.baseLocation.state.toLowerCase() === stateFromAbbr;
      
      // Match in operating regions (by name or abbreviation)
      const regionMatch = driver.operatingRegions.some(region => 
        region.toLowerCase().includes(query) || 
        (isAbbreviation && region.toLowerCase() === stateFromAbbr)
      );
      
      return stateMatch || abbrMatch || regionMatch;
    });
    
    setFilteredByState(filtered);
  }, [stateQuery, drivers]);

  return {
    stateQuery,
    setStateQuery,
    filteredByState
  };
}
