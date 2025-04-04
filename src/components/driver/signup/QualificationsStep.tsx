
import { Control } from "react-hook-form";
import { Award, MapPin, Wrench } from "lucide-react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { regions } from "@/data/regions";
import { certifications } from "@/data/certifications";
import { equipmentTypes } from "@/data/equipment";
import { DriverSignupFormValues } from "./types";

interface QualificationsStepProps {
  control: Control<DriverSignupFormValues>;
}

const QualificationsStep = ({ control }: QualificationsStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold flex items-center">
        <Award className="mr-2 text-accent-500" size={20} />
        Qualifications
      </h2>

      <FormField
        control={control}
        name="operatingRegions"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base flex items-center">
                <MapPin className="mr-2 text-accent-500" size={16} />
                Operating Regions
              </FormLabel>
              <FormDescription>
                Select all regions where you operate
              </FormDescription>
              <FormMessage />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {regions.map((region) => (
                <FormField
                  key={region}
                  control={control}
                  name="operatingRegions"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={region}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(region)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, region])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== region
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {region}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="certifications"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base flex items-center">
                <Award className="mr-2 text-accent-500" size={16} />
                Certifications
              </FormLabel>
              <FormDescription>
                Select all certifications you currently hold
              </FormDescription>
              <FormMessage />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {certifications.map((cert) => (
                <FormField
                  key={cert}
                  control={control}
                  name="certifications"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={cert}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(cert)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, cert])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== cert
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {cert}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="equipment"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base flex items-center">
                <Wrench className="mr-2 text-accent-500" size={16} />
                Equipment
              </FormLabel>
              <FormDescription>
                Select all equipment you have available
              </FormDescription>
              <FormMessage />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {equipmentTypes.map((equipment) => (
                <FormField
                  key={equipment}
                  control={control}
                  name="equipment"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={equipment}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(equipment)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, equipment])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== equipment
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {equipment}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default QualificationsStep;
