
interface DriverStatsProps {
  yearsExperience: number;
  vehicleType: string;
  hourlyRate?: number;
}

const DriverStats = ({ yearsExperience, vehicleType, hourlyRate }: DriverStatsProps) => {
  // Truncate vehicle type to remove "with" and anything after
  const truncatedVehicleType = vehicleType.split(" with")[0];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
      <div className="flex flex-col">
        <span className="text-pilot-500 dark:text-pilot-400 text-xs uppercase">Experience</span>
        <span className="font-medium">{yearsExperience} years</span>
      </div>
      
      <div className="flex flex-col">
        <span className="text-pilot-500 dark:text-pilot-400 text-xs uppercase">Vehicle</span>
        <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">{truncatedVehicleType}</span>
      </div>
      
      {hourlyRate && (
        <div className="flex flex-col">
          <span className="text-pilot-500 dark:text-pilot-400 text-xs uppercase">Rate</span>
          <span className="font-medium">${hourlyRate}/hr</span>
        </div>
      )}
    </div>
  );
};

export default DriverStats;
