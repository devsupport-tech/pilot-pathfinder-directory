
import { Driver } from "@/types/driver";

export const drivers: Driver[] = [
  {
    id: "d1",
    name: "Michael Thompson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.9,
    reviewCount: 145,
    yearsExperience: 12,
    baseLocation: {
      city: "Dallas",
      state: "TX",
      region: "South"
    },
    operatingRegions: ["South", "Midwest", "Southwest"],
    vehicleType: "Ford F-150 with High-Visibility Equipment",
    availableNow: true,
    certifications: [
      {
        name: "Pilot/Escort Vehicle Operator",
        issuer: "Texas DOT",
        year: 2010
      },
      {
        name: "Flagging Certification",
        issuer: "National Safety Council",
        year: 2011
      }
    ],
    equipment: ["High-Pole Indicator", "Strobe Lights", "CB Radio", "DOT Signs"],
    bio: "Professional pilot car operator with over 12 years of experience. Specialized in oversize loads and heavy equipment transport across southern states.",
    hourlyRate: 65,
    featured: true
  },
  {
    id: "d2",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.8,
    reviewCount: 112,
    yearsExperience: 8,
    baseLocation: {
      city: "Atlanta",
      state: "GA",
      region: "Southeast"
    },
    operatingRegions: ["Southeast", "East Coast", "Midwest"],
    vehicleType: "Chevy Silverado with Warning Systems",
    availableNow: false,
    certifications: [
      {
        name: "Pilot Car Certification",
        issuer: "Georgia DOT",
        year: 2015
      },
      {
        name: "Advanced Safety Operations",
        issuer: "Oversize Load Safety Council",
        year: 2017
      }
    ],
    equipment: ["Height Pole", "Safety Flags", "CB Radio", "GPS Tracking", "Dash Cameras"],
    bio: "Detail-oriented pilot car operator with perfect safety record. Specializing in route planning and hazard identification for oversize loads.",
    hourlyRate: 68,
    featured: true
  },
  {
    id: "d3",
    name: "Robert Martinez",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.7,
    reviewCount: 98,
    yearsExperience: 15,
    baseLocation: {
      city: "Phoenix",
      state: "AZ",
      region: "Southwest"
    },
    operatingRegions: ["Southwest", "West Coast", "Rocky Mountains"],
    vehicleType: "RAM 2500 with Full Safety Package",
    availableNow: true,
    certifications: [
      {
        name: "Commercial Escort Certification",
        issuer: "Arizona DOT",
        year: 2008
      },
      {
        name: "Highway Safety Specialist",
        issuer: "Federal Highway Administration",
        year: 2010
      }
    ],
    equipment: ["Height Pole", "Strobe Beacon", "CB Radio", "Traffic Control Signs", "Weather Monitoring"],
    bio: "Veteran pilot car operator covering the western United States. Expert in mountain routes and challenging terrain navigation.",
    hourlyRate: 72,
    featured: true
  },
  {
    id: "d4",
    name: "Jennifer Williams",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.9,
    reviewCount: 78,
    yearsExperience: 6,
    baseLocation: {
      city: "Denver",
      state: "CO",
      region: "Rocky Mountains"
    },
    operatingRegions: ["Rocky Mountains", "Midwest", "Northwest"],
    vehicleType: "Toyota Tundra with Winter Safety Package",
    availableNow: true,
    certifications: [
      {
        name: "Pilot Vehicle Escort",
        issuer: "Colorado DOT",
        year: 2017
      },
      {
        name: "Winter Driving Specialist",
        issuer: "Mountain Transport Safety Council",
        year: 2018
      }
    ],
    equipment: ["Height Pole", "LED Beacons", "CB Radio", "GPS Navigation", "Winter Safety Kit"],
    bio: "Specialized in mountain pass navigation and winter operations. Comprehensive knowledge of regulations across multiple states.",
    hourlyRate: 70
  },
  {
    id: "d5",
    name: "David Clark",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.6,
    reviewCount: 63,
    yearsExperience: 10,
    baseLocation: {
      city: "Seattle",
      state: "WA",
      region: "Northwest"
    },
    operatingRegions: ["Northwest", "West Coast", "Western Canada"],
    vehicleType: "Ford F-250 with Communication Suite",
    availableNow: false,
    certifications: [
      {
        name: "Pilot Car Operator",
        issuer: "Washington State DOT",
        year: 2013
      },
      {
        name: "International Border Crossing Specialist",
        issuer: "North American Transport Safety Association",
        year: 2016
      }
    ],
    equipment: ["Height Pole", "Warning Lights", "Multi-Channel CB", "Satellite Communication", "Dash Cameras"],
    bio: "Experienced in cross-border operations between US and Canada. Knowledgeable about varying regulations and permit requirements.",
    hourlyRate: 75
  },
  {
    id: "d6",
    name: "Lisa Rodriguez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.8,
    reviewCount: 91,
    yearsExperience: 9,
    baseLocation: {
      city: "Houston",
      state: "TX",
      region: "South"
    },
    operatingRegions: ["South", "Gulf Coast", "Southeast"],
    vehicleType: "Chevrolet Tahoe with Full Safety Equipment",
    availableNow: true,
    certifications: [
      {
        name: "Commercial Pilot Car Certification",
        issuer: "Texas DOT",
        year: 2014
      },
      {
        name: "Hazardous Materials Transport Safety",
        issuer: "Transport Safety Institute",
        year: 2016
      }
    ],
    equipment: ["Height Pole", "Warning Lights", "CB Radio", "Weather Radar", "First Response Kit"],
    bio: "Specialized in escort services for hazardous materials and sensitive cargo. Extensive knowledge of Gulf Coast routes and regulations.",
    hourlyRate: 67
  }
];
