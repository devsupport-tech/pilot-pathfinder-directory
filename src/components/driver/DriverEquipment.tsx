
import { Wrench, Check } from "lucide-react";

interface DriverEquipmentProps {
  equipment: string[];
}

const DriverEquipment = ({ equipment }: DriverEquipmentProps) => {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-2 flex items-center">
        <Wrench size={16} className="mr-1 text-accent-500" />
        Equipment
      </h4>
      <ul className="text-sm space-y-1">
        {equipment.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <Check size={14} className="mr-1 mt-0.5 text-green-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverEquipment;
