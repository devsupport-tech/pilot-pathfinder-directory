
import { Control } from "react-hook-form";
import { FileText } from "lucide-react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { DriverSignupFormValues } from "./types";

interface ReviewSubmitStepProps {
  control: Control<DriverSignupFormValues>;
}

const ReviewSubmitStep = ({ control }: ReviewSubmitStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center">
        <FileText className="mr-2 text-accent-500" size={20} />
        Review & Submit
      </h2>
      
      <p className="text-pilot-600 dark:text-pilot-300">
        Please review your information. Once submitted, our team will review your application 
        and get back to you shortly. By submitting this form, you agree to our terms and conditions.
      </p>

      <FormField
        control={control}
        name="termsAccepted"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I agree to the terms and conditions
              </FormLabel>
              <FormDescription>
                By checking this box, you confirm that all information provided is accurate.
              </FormDescription>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ReviewSubmitStep;
