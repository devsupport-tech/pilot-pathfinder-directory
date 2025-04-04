
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, MapPin, Search as SearchIcon } from "lucide-react";
import RegionSelector from "./RegionSelector";
import AdvancedFilters from "./AdvancedFilters";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [isAvailableNow, setIsAvailableNow] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const handleSearch = () => {
    // Navigate to drivers page with search parameters
    const searchParams = new URLSearchParams();
    
    if (location) {
      searchParams.append('state', location);
    }
    
    if (selectedRegion) {
      searchParams.append('region', selectedRegion);
    }
    
    if (isAvailableNow) {
      searchParams.append('available', 'true');
    }
    
    navigate(`/drivers?${searchParams.toString()}`);
  };
  
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Location Search */}
        <div className="md:col-span-5 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MapPin size={18} className="text-pilot-400" />
          </div>
          <Input 
            placeholder="State name or abbreviation (CA, TX, etc.)" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12 border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-accent-500"
          />
        </div>
        
        {/* Region Select */}
        <div className="md:col-span-4">
          <RegionSelector 
            selectedRegion={selectedRegion} 
            setSelectedRegion={setSelectedRegion} 
          />
        </div>
        
        {/* Search Button */}
        <div className="md:col-span-3 flex space-x-2">
          <Button 
            className="w-full h-12 bg-accent-500 hover:bg-accent-600 text-white space-x-2"
            onClick={handleSearch}
          >
            <SearchIcon size={18} />
            <span>Search</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-12 border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-black/20"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
          </Button>
        </div>
      </div>
      
      {/* Advanced Filters */}
      {showFilters && (
        <AdvancedFilters 
          isAvailableNow={isAvailableNow}
          setIsAvailableNow={setIsAvailableNow}
        />
      )}
    </div>
  );
};

export default SearchForm;
