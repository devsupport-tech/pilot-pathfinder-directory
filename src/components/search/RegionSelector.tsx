
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { regions } from "@/data/driversData";

interface RegionSelectorProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const RegionSelector = ({ selectedRegion, setSelectedRegion }: RegionSelectorProps) => {
  const [openRegions, setOpenRegions] = useState(false);
  
  return (
    <Popover open={openRegions} onOpenChange={setOpenRegions}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openRegions}
          className="w-full justify-between h-12 border-0 shadow-none bg-white/50 dark:bg-black/10 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-black/20 focus-visible:ring-1 focus-visible:ring-accent-500"
        >
          {selectedRegion ? selectedRegion : "Select operating region"}
          <ChevronDown size={16} className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 max-h-[300px] overflow-auto">
        <Command>
          <CommandInput placeholder="Search regions..." />
          <CommandList>
            <CommandEmpty>No region found.</CommandEmpty>
            <CommandGroup heading="Regions">
              {regions.map((region) => (
                <CommandItem
                  key={region}
                  value={region}
                  onSelect={(currentValue) => {
                    setSelectedRegion(currentValue === selectedRegion ? "" : currentValue);
                    setOpenRegions(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedRegion === region ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {region}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default RegionSelector;
