import { Link } from "react-router-dom";
import { ChevronLeft, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DriverAvatar, 
  DriverInfo, 
  DriverCertifications,
  DriverRegions,
  DriverEquipment
} from "@/components/driver";
import { useToast } from "@/components/ui/use-toast";
import type { Driver } from "@/types/driver";

interface DriverProfileProps {
  driver: Driver;
}

const DriverProfile = ({ driver }: DriverProfileProps) => {
  const { toast } = useToast();

  return (
    <div className="bg-white dark:bg-pilot-800 rounded-xl shadow-sm p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 lg:w-1/4">
          <DriverAvatar 
            avatar={driver.avatar} 
            name={driver.name} 
            availableNow={driver.availableNow}
            size="lg" 
          />
          
          <div className="mt-4">
            <DriverInfo 
              name={driver.name}
              baseLocation={driver.baseLocation}
              rating={driver.rating}
              reviewCount={driver.reviewCount}
              yearsExperience={driver.yearsExperience}
              showExperience={true}
              variant="card"
            />
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-4 w-full"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              toast({
                title: "Link Copied!",
                description: "Driver profile link copied to clipboard.",
              });
            }}
          >
            <Share2 size={14} className="mr-2" />
            Share Profile
          </Button>
        </div>
        
        <div className="md:w-2/3 lg:w-3/4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">{driver.name}</h1>
            <p className="text-pilot-600 dark:text-pilot-300">{driver.bio}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-pilot-500 mb-1">Hourly Rate</div>
                <div className="text-xl font-bold">${driver.hourlyRate}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-pilot-500 mb-1">Experience</div>
                <div className="text-xl font-bold">{driver.yearsExperience} years</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="text-sm font-medium text-pilot-500 mb-1">Vehicle</div>
                <div className="text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                  {driver.vehicleType.split(" with")[0]}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="certifications" className="mt-8">
            <TabsList>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="regions">Operating Regions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="certifications" className="py-4">
              <DriverCertifications certifications={driver.certifications} showYears={true} />
            </TabsContent>
            
            <TabsContent value="equipment" className="py-4">
              <DriverEquipment equipment={driver.equipment} />
            </TabsContent>
            
            <TabsContent value="regions" className="py-4">
              <DriverRegions regions={driver.operatingRegions} variant="expanded" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
