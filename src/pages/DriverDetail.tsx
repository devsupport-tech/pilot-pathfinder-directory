
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Clock, Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { drivers } from "@/data/drivers";
import { 
  DriverProfile,
  ContactForm,
  BookingForm,
  DriverNotFound
} from "@/components/driver";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const DriverDetail = () => {
  const { driverId } = useParams();
  const driver = drivers.find(d => d.id === driverId);
  const { toast } = useToast();
  const [isAvailable, setIsAvailable] = useState(driver?.availableNow || false);
  
  if (!driver) {
    return <DriverNotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/drivers" className="inline-flex items-center text-accent-500 hover:text-accent-600 mb-6">
              <ChevronLeft size={16} />
              <span className="ml-1">Back to all drivers</span>
            </Link>
            
            <div className="bg-white dark:bg-pilot-800 rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <div className={`rounded-full p-1.5 ${isAvailable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {isAvailable ? <Check size={18} /> : <X size={18} />}
                  </div>
                  <div>
                    <h3 className="font-medium">Driver Status</h3>
                    <p className={`text-sm ${isAvailable ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}`}>
                      {isAvailable ? 'Available for booking' : 'Not available for booking'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-pilot-500" />
                  <span className="text-sm text-pilot-500">Availability updates daily via text</span>
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={isAvailable}
                      disabled={true}
                    />
                    <span className="text-sm font-medium">
                      {isAvailable ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <DriverProfile driver={{...driver, availableNow: isAvailable}} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactForm 
                driverName={driver.name} 
                phone={driver.phone} 
                email={driver.email} 
              />
              
              <BookingForm 
                driverName={driver.name} 
                isAvailable={isAvailable}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DriverDetail;
