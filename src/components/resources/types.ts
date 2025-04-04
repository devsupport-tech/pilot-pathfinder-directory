
export type PilotRequirement = {
  dimension: "width" | "height" | "length" | "weight";
  threshold: string;
  escorts: number;
  position: "front" | "rear" | "both" | "varies";
  notes?: string;
};

export type StateRegulation = {
  stateCode: string;
  stateName: string;
  heightRequirement: string;
  widthRequirement: string;
  lengthRequirement: string;
  certificationRequired: boolean;
  trainingHours: number;
  renewalPeriod: string;
  specialRequirements: string[];
  pilotRequirements: PilotRequirement[];
  permitInfo: string;
  authority: string;
  contactInfo: string;
};
