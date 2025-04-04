
interface StateMap {
  [key: string]: string;
}

// Map of state names to abbreviations
export const stateToAbbreviation: StateMap = {
  "alabama": "AL",
  "alaska": "AK",
  "arizona": "AZ",
  "arkansas": "AR",
  "california": "CA",
  "colorado": "CO",
  "connecticut": "CT",
  "delaware": "DE",
  "florida": "FL",
  "georgia": "GA",
  "hawaii": "HI",
  "idaho": "ID",
  "illinois": "IL",
  "indiana": "IN",
  "iowa": "IA",
  "kansas": "KS",
  "kentucky": "KY",
  "louisiana": "LA",
  "maine": "ME",
  "maryland": "MD",
  "massachusetts": "MA",
  "michigan": "MI",
  "minnesota": "MN",
  "mississippi": "MS",
  "missouri": "MO",
  "montana": "MT",
  "nebraska": "NE",
  "nevada": "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  "ohio": "OH",
  "oklahoma": "OK",
  "oregon": "OR",
  "pennsylvania": "PA",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  "tennessee": "TN",
  "texas": "TX",
  "utah": "UT",
  "vermont": "VT",
  "virginia": "VA",
  "washington": "WA",
  "west virginia": "WV",
  "wisconsin": "WI",
  "wyoming": "WY",
  "district of columbia": "DC",
  "american samoa": "AS",
  "guam": "GU",
  "northern mariana islands": "MP",
  "puerto rico": "PR",
  "us virgin islands": "VI",
};

// Map of abbreviations to state names
export const abbreviationToState: StateMap = 
  Object.entries(stateToAbbreviation).reduce((acc, [state, abbr]) => {
    acc[abbr.toLowerCase()] = state;
    return acc;
  }, {} as StateMap);

// Function to check if a string is a state abbreviation
export const isStateAbbreviation = (query: string): boolean => {
  return query.length === 2 && query.toUpperCase() in abbreviationToState;
};

// Get state full name from abbreviation
export const getStateFromAbbreviation = (abbr: string): string | null => {
  const key = abbr.toUpperCase();
  return abbreviationToState[key.toLowerCase()] || null;
};

// Get state abbreviation from full name
export const getAbbreviationFromState = (state: string): string | null => {
  const key = state.toLowerCase();
  return stateToAbbreviation[key] || null;
};
