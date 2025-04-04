
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useElementOnScreen } from "@/utils/animations";
import { cn } from "@/lib/utils";
import { Search, UserCheck, TruckIcon, CheckCircle } from "lucide-react";

const HowItWorksPage = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.2 });
  
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-white" />,
      title: "Search for Drivers",
      description: "Browse our extensive database of certified pilot car operators across North America. Filter by location, certifications, and availability to find the perfect match for your oversized load.",
      delay: 100,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <UserCheck className="w-10 h-10 text-white" />,
      title: "Connect with Professionals",
      description: "Review detailed profiles with ratings, experience, certifications, and available equipment. Verify credentials and ensure they meet your specific transportation requirements.",
      delay: 200,
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: <TruckIcon className="w-10 h-10 text-white" />,
      title: "Book Your Escort",
      description: "Once you've found the right pilot car operator, book them directly through our platform. Coordinate schedules, discuss route details, and finalize all arrangements in one place.",
      delay: 300,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      title: "Complete Your Transport",
      description: "With your professional pilot car escort confirmed, transport your oversized load safely and efficiently. After the job is complete, leave a review to help other companies find great operators.",
      delay: 400,
      color: "from-green-500 to-green-600"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section 
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
                <span className="inline-block py-1 px-3 bg-accent-500/20 text-accent-500 rounded-full text-sm font-medium mb-4">Simple Process</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">How PilotPath Works</h1>
                <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-3xl mx-auto">
                  Our platform connects transportation companies with professional pilot car operators through a streamlined, efficient process designed to save you time and ensure safety.
                </p>
              </div>
              
              <div className="space-y-16 md:space-y-24">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "grid md:grid-cols-2 gap-8 items-center transition-all duration-700 transform",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    )}
                    style={{ transitionDelay: `${step.delay}ms` }}
                  >
                    <div className={cn(
                      "glass-card p-10 rounded-xl shadow-xl flex items-center justify-center",
                      index % 2 !== 0 ? "md:order-2" : "md:order-1"
                    )}>
                      <div className={cn(
                        "w-24 h-24 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br",
                        step.color
                      )}>
                        {step.icon}
                      </div>
                    </div>
                    <div className={index % 2 !== 0 ? "md:order-1" : "md:order-2"}>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-lg mr-4">
                          {index + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-lg text-pilot-600 dark:text-pilot-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div 
                className={cn(
                  "mt-24 glass-card p-10 text-center transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: "500ms" }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to find a pilot car driver?</h3>
                <p className="text-lg text-pilot-600 dark:text-pilot-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of transportation companies that use PilotPath to find reliable pilot car operators for their oversized loads.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a 
                    href="/drivers" 
                    className="inline-block bg-accent-500 hover:bg-accent-600 text-white py-3 px-8 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Find Drivers Now
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-block bg-white hover:bg-gray-100 text-pilot-900 py-3 px-8 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
