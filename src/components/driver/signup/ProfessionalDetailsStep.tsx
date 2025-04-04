
import { Control } from "react-hook-form";
import { Truck } from "lucide-react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DriverSignupFormValues } from "./types";

interface ProfessionalDetailsStepProps {
  control: Control<DriverSignupFormValues>;
}

const ProfessionalDetailsStep = ({ control }: ProfessionalDetailsStepProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center">
        <Truck className="mr-2 text-accent-500" size={20} />
        Professional Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="baseCity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base City</FormLabel>
              <FormControl>
                <Input placeholder="Atlanta" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="baseState"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base State</FormLabel>
              <FormControl>
                <Input placeholder="GA" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="yearsExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years of Experience</FormLabel>
              <FormControl>
                <Input type="number" min="0" placeholder="5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="hourlyRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hourly Rate ($)</FormLabel>
              <FormControl>
                <Input type="number" min="0" placeholder="65" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="vehicleType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vehicle Type</FormLabel>
            <FormControl>
              <Input placeholder="Ford F-150 with High-Visibility Equipment" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us about your experience as a pilot car operator..." 
                className="min-h-[120px]"
                {...field} 
              />
            </FormControl>
            <FormDescription>
              Briefly describe your experience and specialties (30-500 characters)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ProfessionalDetailsStep;
