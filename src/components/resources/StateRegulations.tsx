
import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, FileText } from "lucide-react";
import { isStateAbbreviation } from "@/utils/stateAbbreviations";
import { stateRegulationsData } from "./stateRegulationsData";
import { StateRegulation } from "./types";
import StateRegulationsList from "./views/StateRegulationsList";
import StateRegulationsTable from "./views/StateRegulationsTable";
import StateRegulationsDetail from "./views/StateRegulationsDetail";

const StateRegulations = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [viewType, setViewType] = useState<string>("list");
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Filter states based on search term
  const filteredStates = useMemo(() => {
    if (!searchTerm.trim()) return stateRegulationsData;

    const term = searchTerm.toLowerCase().trim();
    
    // Check if search is a state abbreviation or name
    if (isStateAbbreviation(term)) {
      return stateRegulationsData.filter(state => 
        state.stateCode.toLowerCase() === term
      );
    } else {
      return stateRegulationsData.filter(state => 
        state.stateName.toLowerCase().includes(term)
      );
    }
  }, [searchTerm]);

  // Get detailed state data when a state is selected
  const selectedStateData = useMemo(() => {
    if (!selectedState) return null;
    return stateRegulationsData.find(state => state.stateCode === selectedState) || null;
  }, [selectedState]);

  const handleSelectState = (stateCode: string) => {
    setSelectedState(stateCode);
  };

  const handleViewTypeChange = (newViewType: string) => {
    setViewType(newViewType);
  };

  const handleBackToList = () => {
    setSelectedState(null);
    setViewType("list");
  };
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText size={20} className="text-accent-500" />
            <span>Pilot Car Requirements by State</span>
          </CardTitle>
          <CardDescription>
            View detailed escort vehicle regulations and requirements for each state
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pilot-400" size={18} />
                <Input
                  placeholder="Search by state name or abbreviation"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Tabs value={viewType} onValueChange={setViewType} className="min-w-[150px]">
                <TabsList className="w-full">
                  <TabsTrigger value="list">List</TabsTrigger>
                  <TabsTrigger value="table">Table</TabsTrigger>
                  <TabsTrigger value="detail">Detail</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="mt-6">
            <TabsContent value="list" className="pt-2">
              <StateRegulationsList 
                states={filteredStates} 
                onSelectState={handleSelectState} 
                onViewTypeChange={handleViewTypeChange} 
              />
            </TabsContent>
            
            <TabsContent value="table">
              <StateRegulationsTable 
                states={filteredStates} 
                onSelectState={handleSelectState} 
                onViewTypeChange={handleViewTypeChange} 
              />
            </TabsContent>

            <TabsContent value="detail">
              <StateRegulationsDetail 
                selectedStateData={selectedStateData} 
                onBackToList={handleBackToList} 
              />
            </TabsContent>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StateRegulations;
