
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSearch = () => {
    const searchElement = document.getElementById('search');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pilot-800/80 to-pilot-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616432043562-3e294062739e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80')] bg-cover bg-center z-0"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-8 relative z-20">
        <div className="max-w-4xl">
          <div 
            className={cn(
              "space-y-6 transition-all duration-1000 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <span 
              className="inline-block py-1 px-3 bg-accent-500/20 text-accent-500 rounded-full text-sm font-medium backdrop-blur-sm border border-accent-500/30"
              style={{ transitionDelay: "200ms" }}
            >
              Pilot Car Directory
            </span>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ transitionDelay: "300ms" }}
            >
              Connect with Professional <span className="text-accent-500">Pilot Car Drivers</span> Nationwide
            </h1>
            
            <p 
              className="text-lg md:text-xl text-white/80 max-w-3xl"
              style={{ transitionDelay: "400ms" }}
            >
              Find reliable, certified pilot car operators to ensure safe transport for your oversize loads and specialized cargo across North America.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              style={{ transitionDelay: "500ms" }}
            >
              <Button 
                onClick={scrollToSearch}
                size="lg" 
                className="bg-accent-500 hover:bg-accent-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Find Drivers Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 text-lg"
                asChild
              >
                <Link to="/driver-signup">Register as Driver</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 transition-opacity duration-1000 cursor-pointer z-20",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onClick={scrollToSearch}
        style={{ transitionDelay: "700ms" }}
      >
        <span className="text-sm text-white/70">Scroll to discover</span>
        <ChevronDown className="text-white animate-bounce" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
