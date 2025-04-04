
import { Check } from "lucide-react";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress = ({ currentStep, totalSteps }: FormProgressProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div 
            key={i} 
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
              i + 1 === currentStep 
                ? 'border-accent-500 bg-accent-500 text-white' 
                : i + 1 < currentStep 
                  ? 'border-accent-500 bg-white dark:bg-pilot-900 text-accent-500' 
                  : 'border-gray-300 bg-gray-100 dark:bg-pilot-800 dark:border-gray-700 text-gray-500'
            }`}
          >
            {i + 1 < currentStep ? <Check size={18} /> : i + 1}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
        <div 
          className="bg-accent-500 h-2 rounded-full transition-all" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FormProgress;
