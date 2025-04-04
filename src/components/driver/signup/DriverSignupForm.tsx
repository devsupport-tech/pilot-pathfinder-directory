
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormProgress } from "./index";
import { PersonalInfoStep } from "./index";
import { ProfessionalDetailsStep } from "./index";
import { QualificationsStep } from "./index";
import { ReviewSubmitStep } from "./index";
import { driverSignupFormSchema, DriverSignupFormValues } from "./types";

const DriverSignupForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const form = useForm<DriverSignupFormValues>({
    resolver: zodResolver(driverSignupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      baseCity: "",
      baseState: "",
      yearsExperience: "",
      vehicleType: "",
      bio: "",
      operatingRegions: [],
      certifications: [],
      equipment: [],
      hourlyRate: "",
      termsAccepted: false,
    },
  });

  const onSubmit = (data: DriverSignupFormValues) => {
    console.log("Form submitted:", data);
    
    toast.success("Your application has been submitted successfully!", {
      description: "We'll review your information and get back to you shortly."
    });
    
    setTimeout(() => {
      navigate("/drivers");
    }, 2000);
  };

  const nextStep = async () => {
    const fieldsToValidate = {
      1: ["name", "email", "phone"],
      2: ["baseCity", "baseState", "yearsExperience", "vehicleType", "bio"],
      3: ["operatingRegions", "certifications", "equipment", "hourlyRate"],
      4: ["termsAccepted"],
    }[step];

    const isValid = await form.trigger(fieldsToValidate as any);
    if (isValid) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <PersonalInfoStep control={form.control} />;
      case 2:
        return <ProfessionalDetailsStep control={form.control} />;
      case 3:
        return <QualificationsStep control={form.control} />;
      case 4:
        return <ReviewSubmitStep control={form.control} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-pilot-900 rounded-lg shadow-md p-6 md:p-8">
      <FormProgress currentStep={step} totalSteps={totalSteps} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {renderStepContent()}

          <div className="flex justify-between mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            ) : (
              <div></div>
            )}

            {step < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit">
                Submit Application
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DriverSignupForm;
