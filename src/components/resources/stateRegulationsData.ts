
import { StateRegulation } from "./types";

// State regulations data with pilot requirements
export const stateRegulationsData: StateRegulation[] = [
  {
    stateCode: "CA",
    stateName: "California",
    heightRequirement: "14' and over",
    widthRequirement: "12' and over",
    lengthRequirement: "125' and over",
    certificationRequired: true,
    trainingHours: 8,
    renewalPeriod: "2 years",
    specialRequirements: [
      "Specific pole requirements for height measurements",
      "Two-way radio communication",
      "Special lighting requirements for night escorts"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "12' to 14'",
        escorts: 1,
        position: "front",
        notes: "Front escort required on 2-lane highways"
      },
      {
        dimension: "width",
        threshold: "Over 14'",
        escorts: 2,
        position: "both",
        notes: "Front and rear escorts required on all highways"
      },
      {
        dimension: "height",
        threshold: "Over 14'",
        escorts: 1,
        position: "front",
        notes: "Height pole required"
      }
    ],
    permitInfo: "Permits required for all oversized loads, valid for single trip or annual",
    authority: "California Department of Transportation (Caltrans)",
    contactInfo: "(916) 654-6799 or permits@dot.ca.gov"
  },
  {
    stateCode: "TX",
    stateName: "Texas",
    heightRequirement: "17' and over",
    widthRequirement: "14' and over",
    lengthRequirement: "110' and over",
    certificationRequired: true,
    trainingHours: 6,
    renewalPeriod: "3 years",
    specialRequirements: [
      "Yellow flashing lights required on all escort vehicles",
      "Special permits for night movement",
      "Specific signage requirements"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "14' to 16'",
        escorts: 1,
        position: "front",
        notes: "Front escort required on all highways"
      },
      {
        dimension: "width",
        threshold: "Over 16'",
        escorts: 2,
        position: "both",
        notes: "Front and rear escorts required on all highways"
      },
      {
        dimension: "length",
        threshold: "Over 110'",
        escorts: 1,
        position: "rear",
        notes: "Rear escort required on all highways"
      }
    ],
    permitInfo: "Online permit system available 24/7 with processing fees varying by permit type",
    authority: "Texas Department of Motor Vehicles",
    contactInfo: "(800) 299-1700 or MCD_Permits@TxDMV.gov"
  },
  {
    stateCode: "FL",
    stateName: "Florida",
    heightRequirement: "14'6\" and over",
    widthRequirement: "12'6\" and over",
    lengthRequirement: "95' and over",
    certificationRequired: true,
    trainingHours: 8,
    renewalPeriod: "2 years",
    specialRequirements: [
      "Different requirements for urban vs. rural routes",
      "Weekend movement restrictions in tourist areas",
      "Height pole requirements for front escort"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "12'6\" to 14'",
        escorts: 1,
        position: "front",
        notes: "Front escort on 2-lane highways, rear escort on multi-lane highways"
      },
      {
        dimension: "width",
        threshold: "Over 14'",
        escorts: 2,
        position: "both",
        notes: "Front and rear escorts required on all highways"
      },
      {
        dimension: "height",
        threshold: "Over 14'6\"",
        escorts: 1,
        position: "front",
        notes: "Height pole required, additional escorts for bridges"
      }
    ],
    permitInfo: "Permits valid for 5-7 days with specific route restrictions",
    authority: "Florida Department of Transportation",
    contactInfo: "(850) 410-5777 or FL511@dot.state.fl.us"
  },
  {
    stateCode: "NY",
    stateName: "New York",
    heightRequirement: "13'6\" and over",
    widthRequirement: "12' and over",
    lengthRequirement: "100' and over",
    certificationRequired: true,
    trainingHours: 10,
    renewalPeriod: "1 year",
    specialRequirements: [
      "Special permits for bridges in NYC",
      "Specific route restrictions in urban areas",
      "Additional escorts for certain parkways"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "12' to 14'",
        escorts: 1,
        position: "front",
        notes: "Front escort on all roads"
      },
      {
        dimension: "width",
        threshold: "Over 14'",
        escorts: 2,
        position: "both",
        notes: "Police escort may be required in NYC"
      },
      {
        dimension: "height",
        threshold: "Over 13'6\"",
        escorts: 1,
        position: "front",
        notes: "Height pole and route survey required"
      }
    ],
    permitInfo: "Special NYC permits required in addition to state permits",
    authority: "New York State Department of Transportation",
    contactInfo: "(518) 485-2999 or perm.oper@dot.ny.gov"
  },
  {
    stateCode: "WA",
    stateName: "Washington",
    heightRequirement: "14'6\" and over",
    widthRequirement: "14' and over",
    lengthRequirement: "105' and over",
    certificationRequired: true,
    trainingHours: 8,
    renewalPeriod: "3 years",
    specialRequirements: [
      "Height pole required for loads over 14'6\"",
      "Front and rear escorts for super loads",
      "Special mountain passage procedures"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "14' to 16'",
        escorts: 1,
        position: "front",
        notes: "Front escort on 2-lane roads, rear escort on multilane"
      },
      {
        dimension: "width",
        threshold: "Over 16'",
        escorts: 2,
        position: "both",
        notes: "Additional safety measures for mountain passes"
      },
      {
        dimension: "height",
        threshold: "Over 14'6\"",
        escorts: 1,
        position: "front",
        notes: "Route survey and height pole required"
      }
    ],
    permitInfo: "Monthly, annual, and single-trip permits available with varying fees",
    authority: "Washington State Department of Transportation",
    contactInfo: "(360) 704-6340 or CommercialVehicleServices@wsdot.wa.gov"
  },
  {
    stateCode: "CO",
    stateName: "Colorado",
    heightRequirement: "16' and over",
    widthRequirement: "13' and over",
    lengthRequirement: "110' and over",
    certificationRequired: true,
    trainingHours: 8,
    renewalPeriod: "3 years",
    specialRequirements: [
      "Special mountain corridor requirements",
      "Seasonal route restrictions",
      "Extra escorts for steep grade highways"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "13' to 15'",
        escorts: 1,
        position: "front",
        notes: "Front escort on 2-lane roads"
      },
      {
        dimension: "width",
        threshold: "Over 15'",
        escorts: 2,
        position: "both",
        notes: "Additional escorts for mountain corridors"
      },
      {
        dimension: "height",
        threshold: "Over 16'",
        escorts: 1,
        position: "front",
        notes: "Route survey required with utility notification"
      }
    ],
    permitInfo: "Special mountain corridor permits required with seasonal restrictions",
    authority: "Colorado Department of Transportation",
    contactInfo: "(303) 757-9539 or dot_cvo@state.co.us"
  },
  {
    stateCode: "GA",
    stateName: "Georgia",
    heightRequirement: "15'6\" and over",
    widthRequirement: "12'6\" and over",
    lengthRequirement: "100' and over",
    certificationRequired: true,
    trainingHours: 6,
    renewalPeriod: "2 years",
    specialRequirements: [
      "Front and rear escorts for loads exceeding width limits",
      "Urban area movement time restrictions",
      "Special permits for certain counties"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "12'6\" to 14'",
        escorts: 1,
        position: "front",
        notes: "Front escort on 2-lane roads"
      },
      {
        dimension: "width",
        threshold: "Over 14'",
        escorts: 2,
        position: "both",
        notes: "Front and rear escorts on all roads"
      },
      {
        dimension: "height",
        threshold: "Over 15'6\"",
        escorts: 1,
        position: "front",
        notes: "Height pole and route survey required"
      }
    ],
    permitInfo: "Annual permits available for specific dimensions, single trip for larger loads",
    authority: "Georgia Department of Public Safety",
    contactInfo: "(404) 624-7244 or overdimensional@gsp.net"
  },
  {
    stateCode: "PA",
    stateName: "Pennsylvania",
    heightRequirement: "14' and over",
    widthRequirement: "13' and over",
    lengthRequirement: "90' and over",
    certificationRequired: true,
    trainingHours: 8,
    renewalPeriod: "1 year",
    specialRequirements: [
      "Tunnel restriction notifications required",
      "Special routing through historic districts",
      "Additional requirements for turnpike travel"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "13' to 16'",
        escorts: 1,
        position: "front",
        notes: "Front escort on 2-lane roads, rear on multi-lane"
      },
      {
        dimension: "width",
        threshold: "Over 16'",
        escorts: 2,
        position: "both",
        notes: "Police escort may be required in urban areas"
      },
      {
        dimension: "height",
        threshold: "Over 14'",
        escorts: 1,
        position: "front",
        notes: "Route survey and utility coordination required"
      }
    ],
    permitInfo: "Special permits required for PA Turnpike in addition to state permits",
    authority: "Pennsylvania Department of Transportation",
    contactInfo: "(717) 787-4680 or ra-pdscospecialpermit@pa.gov"
  },
  {
    stateCode: "OH",
    stateName: "Ohio",
    heightRequirement: "14'6\" and over",
    widthRequirement: "13' and over",
    lengthRequirement: "95' and over",
    certificationRequired: true,
    trainingHours: 6,
    renewalPeriod: "2 years",
    specialRequirements: [
      "Urban vs rural escort requirements differ",
      "Special high-visibility markings on escort vehicles",
      "Additional lighting requirements"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "13' to 14'6\"",
        escorts: 1,
        position: "front",
        notes: "Front escort on 2-lane roads"
      },
      {
        dimension: "width",
        threshold: "Over 14'6\"",
        escorts: 2,
        position: "both",
        notes: "Front and rear escorts on all roads"
      },
      {
        dimension: "height",
        threshold: "Over 14'6\"",
        escorts: 1,
        position: "front",
        notes: "Height pole required with utility notification"
      }
    ],
    permitInfo: "Permits available online with varying duration options",
    authority: "Ohio Department of Transportation",
    contactInfo: "(614) 351-2300 or ODOT.OS.Central.Office@dot.ohio.gov"
  },
  {
    stateCode: "IL",
    stateName: "Illinois",
    heightRequirement: "14'6\" and over",
    widthRequirement: "12' and over",
    lengthRequirement: "100' and over",
    certificationRequired: true,
    trainingHours: 8,
    renewalPeriod: "2 years",
    specialRequirements: [
      "Chicago metro area has separate requirements",
      "Special bridge crossing procedures",
      "Route survey documentation requirements"
    ],
    pilotRequirements: [
      {
        dimension: "width",
        threshold: "12' to 14'",
        escorts: 1,
        position: "front",
        notes: "Front escort on 2-lane highways"
      },
      {
        dimension: "width",
        threshold: "Over 14'",
        escorts: 2,
        position: "both",
        notes: "Chicago city limits may require police escorts"
      },
      {
        dimension: "height",
        threshold: "Over 14'6\"",
        escorts: 1,
        position: "front",
        notes: "Height pole and route survey required"
      }
    ],
    permitInfo: "City of Chicago requires separate permits from state permits",
    authority: "Illinois Department of Transportation",
    contactInfo: "(217) 782-6271 or DOT.PermitOffice@illinois.gov"
  }
];
