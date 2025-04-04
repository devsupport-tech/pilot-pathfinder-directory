
import { MapPin, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { StateRegulation } from "../types";

interface StateRegulationsDetailProps {
  selectedStateData: StateRegulation | null;
  onBackToList: () => void;
}

const StateRegulationsDetail = ({ selectedStateData, onBackToList }: StateRegulationsDetailProps) => {
  if (!selectedStateData) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <MapPin size={48} className="text-pilot-300 mb-4" />
        <h3 className="text-lg font-semibold mb-2">Select a State</h3>
        <p className="text-pilot-500 max-w-md">
          Please select a state from the list or table view to see detailed requirements.
        </p>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={onBackToList}
        >
          View All States
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="inline-block bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300 rounded-md px-2 py-1 text-sm font-bold">
            {selectedStateData.stateCode}
          </span>
          {selectedStateData.stateName} Pilot Car Requirements
        </h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBackToList}
        >
          Back to List
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Dimensional Thresholds</CardTitle>
            <CardDescription>
              When pilot cars are required based on load dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-2 text-sm">
                <div className="font-medium">Dimension</div>
                <div className="font-medium">Threshold</div>
                <div className="font-medium">Escorts</div>
                <div className="font-medium">Position</div>
              </div>
              {selectedStateData.pilotRequirements.map((req, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-2 text-sm py-2 border-b dark:border-gray-700 last:border-0">
                  <div className="capitalize">
                    <Badge variant="outline" className="capitalize">
                      {req.dimension}
                    </Badge>
                  </div>
                  <div>{req.threshold}</div>
                  <div>{req.escorts}</div>
                  <div className="capitalize">{req.position}</div>
                </div>
              ))}
            </div>
            {selectedStateData.pilotRequirements.some(req => req.notes) && (
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="notes">
                  <AccordionTrigger className="text-sm">
                    View Additional Notes
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm list-disc pl-5">
                      {selectedStateData.pilotRequirements
                        .filter(req => req.notes)
                        .map((req, idx) => (
                          <li key={idx}>
                            <span className="font-medium capitalize">{req.dimension}</span> ({req.threshold}): {req.notes}
                          </li>
                        ))
                      }
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Certification & Requirements</CardTitle>
            <CardDescription>
              Escort certification and special requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-pilot-500">Certification</p>
                  <p className="text-sm font-medium mt-1">
                    {selectedStateData.certificationRequired ? (
                      <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                        Required
                      </span>
                    ) : (
                      <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <span className="inline-block h-2 w-2 rounded-full bg-amber-500"></span>
                        Not Required
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-pilot-500">Training Hours</p>
                  <p className="text-sm mt-1">{selectedStateData.trainingHours} hours</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-pilot-500">Renewal Period</p>
                  <p className="text-sm mt-1">{selectedStateData.renewalPeriod}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-pilot-500">Authority</p>
                  <p className="text-sm mt-1">{selectedStateData.authority}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-pilot-500 mb-1">Special Requirements</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {selectedStateData.specialRequirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertTriangle size={18} className="text-amber-500" />
            Permitting Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">{selectedStateData.permitInfo}</p>
          <div>
            <p className="text-xs font-medium text-pilot-500 mb-1">Contact Information</p>
            <p className="text-sm">{selectedStateData.contactInfo}</p>
          </div>
          <div className="pt-2">
            <p className="text-xs text-pilot-500 italic">
              Last updated: July 2023. Regulations may change - always verify current requirements with state authorities.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StateRegulationsDetail;
