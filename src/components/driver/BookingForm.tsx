
import { FormEvent, useState } from "react";
import { Calendar, MapPin, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  driverName: string;
  isAvailable?: boolean;
}

const BookingForm = ({ driverName, isAvailable = true }: BookingFormProps) => {
  const { toast } = useToast();
  const [bookingDate, setBookingDate] = useState<string>("");

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Booking Request Sent!",
      description: `Your booking request for ${bookingDate ? bookingDate : "the selected date"} has been sent to ${driverName}.`,
    });
  };

  return (
    <div className="bg-white dark:bg-pilot-800 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Book {driverName}</h2>
      
      {!isAvailable && (
        <div className="mb-4 p-3 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex items-start gap-3">
          <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-red-800 dark:text-red-300 font-medium">
              Driver is currently unavailable
            </p>
            <p className="text-xs text-red-700 dark:text-red-400 mt-1">
              You can still submit your booking request, but please note that the driver may not be available for the requested dates.
            </p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleBookingSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
            <input 
              type="text" 
              id="company" 
              className="w-full rounded-md border border-pilot-200 dark:border-pilot-700 bg-white dark:bg-pilot-900 p-2"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium mb-1">Start Date</label>
              <div className="relative">
                <input 
                  type="date" 
                  id="startDate" 
                  className="w-full rounded-md border border-pilot-200 dark:border-pilot-700 bg-white dark:bg-pilot-900 p-2"
                  required
                  onChange={(e) => setBookingDate(e.target.value)}
                />
                <Calendar size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pilot-400" />
              </div>
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium mb-1">End Date</label>
              <div className="relative">
                <input 
                  type="date" 
                  id="endDate" 
                  className="w-full rounded-md border border-pilot-200 dark:border-pilot-700 bg-white dark:bg-pilot-900 p-2"
                  required
                />
                <Calendar size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pilot-400" />
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
            <div className="relative">
              <input 
                type="text" 
                id="location" 
                className="w-full rounded-md border border-pilot-200 dark:border-pilot-700 bg-white dark:bg-pilot-900 p-2"
                required
                placeholder="Start and end location"
              />
              <MapPin size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pilot-400" />
            </div>
          </div>
          
          <div>
            <label htmlFor="details" className="block text-sm font-medium mb-1">Trip Details</label>
            <textarea 
              id="details" 
              rows={4} 
              className="w-full rounded-md border border-pilot-200 dark:border-pilot-700 bg-white dark:bg-pilot-900 p-2"
              placeholder="Describe your transport needs, load type, and any special requirements"
              required
            ></textarea>
          </div>
          
          <Button 
            type="submit" 
            className={cn(
              "w-full",
              isAvailable 
                ? "bg-accent-500 hover:bg-accent-600" 
                : "bg-accent-500/80 hover:bg-accent-600/80"
            )}
          >
            {isAvailable ? "Request Booking" : "Request Booking (Driver Unavailable)"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
