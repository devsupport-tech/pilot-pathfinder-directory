
import { useElementOnScreen } from "@/utils/animations";
import { cn } from "@/lib/utils";
import { Search, UserCheck, TruckIcon, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.2 });
  
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Search",
      description: "Find qualified pilot car drivers based on location, certifications, and availability.",
      delay: 100,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: "Connect",
      description: "Review profiles, ratings, and experience to select the right pilot car operator.",
      delay: 200,
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: <TruckIcon className="w-8 h-8 text-white" />,
      title: "Book",
      description: "Schedule and confirm your pilot car escort directly through the platform.",
      delay: 300,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Transport",
      description: "Complete your oversized load transport safely with professional pilot car assistance.",
      delay: 400,
      color: "from-green-500 to-green-600"
    }
  ];
  
  return (
    <section 
      id="how-it-works" 
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-white to-pilot-50 dark:from-pilot-800 dark:to-pilot-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={cn(
              "text-center mb-16 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How PilotPath Works</h2>
            <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-2xl mx-auto">
              Our platform connects you with professional pilot car operators in just a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                <div className="glass-card p-6 h-full flex flex-col items-center text-center hover-lift">
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br shadow-lg",
                    step.color
                  )}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-pilot-600 dark:text-pilot-300">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#CBD2D9" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className={cn(
              "mt-16 glass-card p-8 text-center transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to find a pilot car driver?</h3>
            <p className="text-lg text-pilot-600 dark:text-pilot-300 mb-6 max-w-3xl mx-auto">
              Join thousands of transportation companies that use PilotPath to find reliable pilot car operators for their oversized loads.
            </p>
            <a 
              href="#search" 
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white py-3 px-8 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Find Drivers Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
