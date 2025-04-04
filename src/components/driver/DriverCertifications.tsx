
import { Award, Check } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: number;
}

interface DriverCertificationsProps {
  certifications: Certification[];
  showYears?: boolean;
}

const DriverCertifications = ({ certifications, showYears = false }: DriverCertificationsProps) => {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-2 flex items-center">
        <Award size={16} className="mr-1 text-accent-500" />
        Certifications
      </h4>
      <ul className="text-sm space-y-1">
        {certifications.map((cert, idx) => (
          <li key={idx} className="flex items-start">
            <Check size={14} className="mr-1 mt-0.5 text-green-500" />
            <span>
              {cert.name}
              {showYears && ` (${cert.year})`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverCertifications;
