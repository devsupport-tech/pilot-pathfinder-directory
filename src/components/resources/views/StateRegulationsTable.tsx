
import { Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { StateRegulation } from "../types";

interface StateRegulationsTableProps {
  states: StateRegulation[];
  onSelectState: (stateCode: string) => void;
  onViewTypeChange: (viewType: string) => void;
}

const StateRegulationsTable = ({ states, onSelectState, onViewTypeChange }: StateRegulationsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>State</TableHead>
            <TableHead>Width Requirement</TableHead>
            <TableHead>Height Requirement</TableHead>
            <TableHead>Length Requirement</TableHead>
            <TableHead>Cert. Required</TableHead>
            <TableHead>Training</TableHead>
            <TableHead>Renewal</TableHead>
            <TableHead className="text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {states.map((state) => (
            <TableRow 
              key={state.stateCode} 
              className="cursor-pointer hover:bg-accent-50 dark:hover:bg-accent-950/10" 
              onClick={() => {
                onSelectState(state.stateCode);
                onViewTypeChange("detail");
              }}
            >
              <TableCell className="font-medium">{state.stateName} ({state.stateCode})</TableCell>
              <TableCell>{state.widthRequirement}</TableCell>
              <TableCell>{state.heightRequirement}</TableCell>
              <TableCell>{state.lengthRequirement}</TableCell>
              <TableCell>{state.certificationRequired ? "Required" : "Not Required"}</TableCell>
              <TableCell>{state.trainingHours} hours</TableCell>
              <TableCell>{state.renewalPeriod}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Info size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StateRegulationsTable;
