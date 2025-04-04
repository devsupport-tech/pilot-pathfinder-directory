
import { z } from "zod";

export const driverSignupFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  baseCity: z.string().min(2, { message: "City is required" }),
  baseState: z.string().min(2, { message: "State is required" }),
  yearsExperience: z.string().min(1, { message: "Years of experience is required" }),
  vehicleType: z.string().min(3, { message: "Vehicle information is required" }),
  bio: z.string().min(30, { message: "Bio must be at least 30 characters" }).max(500, { message: "Bio must not exceed 500 characters" }),
  operatingRegions: z.array(z.string()).min(1, { message: "Please select at least one operating region" }),
  certifications: z.array(z.string()).min(1, { message: "Please select at least one certification" }),
  equipment: z.array(z.string()).min(1, { message: "Please select at least one equipment type" }),
  hourlyRate: z.string().min(1, { message: "Hourly rate is required" }),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type DriverSignupFormValues = z.infer<typeof driverSignupFormSchema>;
