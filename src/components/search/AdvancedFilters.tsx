
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { certifications } from "@/data/certifications";
import { equipmentTypes } from "@/data/equipment";

interface AdvancedFiltersProps {
  isAvailableNow: boolean;
  setIsAvailableNow: (value: boolean) => void;
}

const AdvancedFilters = ({ isAvailableNow, setIsAvailableNow }: AdvancedFiltersProps) => {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
      <div>
        <label className="block text-sm font-medium mb-2">Certification</label>
        <Select>
          <SelectTrigger className="w-full h-10 border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm focus:ring-1 focus:ring-accent-500">
            <SelectValue placeholder="Any certification" />
          </SelectTrigger>
          <SelectContent>
            {certifications.map((cert) => (
              <SelectItem key={cert} value={cert}>{cert}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Equipment</label>
        <Select>
          <SelectTrigger className="w-full h-10 border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm focus:ring-1 focus:ring-accent-500">
            <SelectValue placeholder="Any equipment" />
          </SelectTrigger>
          <SelectContent>
            {equipmentTypes.map((equipment) => (
              <SelectItem key={equipment} value={equipment}>{equipment}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-end">
        <div className="w-full">
          <label className="flex items-center h-10 space-x-2 text-sm font-medium cursor-pointer">
            <input
              type="checkbox"
              checked={isAvailableNow}
              onChange={() => setIsAvailableNow(!isAvailableNow)}
              className="rounded text-accent-500 focus:ring-accent-500"
            />
            <span>Available now</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;
