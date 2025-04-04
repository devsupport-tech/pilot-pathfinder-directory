
export interface Location {
  city: string;
  state: string;
  region?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface Driver {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  baseLocation: Location;
  operatingRegions: string[];
  vehicleType: string;
  availableNow: boolean;
  certifications: Certification[];
  equipment: string[];
  phone?: string;
  email?: string;
  bio: string;
  hourlyRate?: number;
  featured?: boolean;
}
