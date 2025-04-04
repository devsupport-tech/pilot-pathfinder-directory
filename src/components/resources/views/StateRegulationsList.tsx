
import { MapPin, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { StateRegulation } from "../types";

interface StateRegulationsListProps {
  states: StateRegulation[];
  onSelectState: (stateCode: string) => void;
  onViewTypeChange: (viewType: string) => void;
}

const StateRegulationsList = ({ states, onSelectState, onViewTypeChange }: StateRegulationsListProps) => {
  if (states.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <MapPin size={48} className="text-pilot-300 mb-4" />
        <h3 className="text-lg font-semibold mb-2">No states found</h3>
        <p className="text-pilot-500 max-w-md">
          We couldn't find any matching states. Try a different search term or browse the complete list.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {states.map((state) => (
        <Card key={state.stateCode} className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Flag size={18} className="text-accent-500" />
              {state.stateName} ({state.stateCode})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                  <p className="text-xs font-medium text-pilot-500">Height</p>
                  <p className="text-sm">{state.heightRequirement}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-pilot-500">Width</p>
                  <p className="text-sm">{state.widthRequirement}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-pilot-500">Length</p>
                  <p className="text-sm">{state.lengthRequirement}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-pilot-500">Certification</p>
                  <p className="text-sm">{state.certificationRequired ? "Required" : "Not Required"}</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs font-medium text-pilot-500 mb-1">Pilot Car Requirements</p>
                <ul className="text-sm space-y-1">
                  {state.pilotRequirements.slice(0, 2).map((req, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="rounded-full bg-accent-100 text-accent-700 text-xs px-2 py-0.5 font-medium mt-0.5">
                        {req.dimension.toUpperCase()}
                      </span>
                      <span>
                        {req.threshold}: {req.escorts} escort{req.escorts > 1 ? 's' : ''} ({req.position})
                      </span>
                    </li>
                  ))}
                  {state.pilotRequirements.length > 2 && (
                    <li className="text-xs text-accent-600">+ {state.pilotRequirements.length - 2} more requirements</li>
                  )}
                </ul>
              </div>
              
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    onSelectState(state.stateCode);
                    onViewTypeChange("detail");
                  }}
                >
                  View Full {state.stateName} Requirements
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StateRegulationsList;
