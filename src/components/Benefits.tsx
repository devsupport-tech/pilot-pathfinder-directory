
import { useElementOnScreen } from "@/utils/animations";
import { cn } from "@/lib/utils";
import { Badge, ShieldCheck, Zap, Clock, Map, Award, Users } from "lucide-react";

const Benefits = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.2 });
  
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Verified Professionals",
      description: "All drivers in our directory are verified professionals with proper certifications and experience.",
      delay: 100
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Nationwide Coverage",
      description: "Access to pilot car operators across North America for interstate and cross-country transport.",
      delay: 200
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Booking",
      description: "Find and book pilot car drivers quickly, even for urgent and last-minute transport needs.",
      delay: 300
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Streamlined Process",
      description: "Simplified search and booking process saves time and reduces administrative overhead.",
      delay: 400
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Ratings",
      description: "Review driver ratings and feedback from other transportation companies before booking.",
      delay: 500
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Direct Communication",
      description: "Connect directly with drivers to discuss specific requirements for your load.",
      delay: 600
    }
  ];
  
  return (
    <section 
      id="benefits" 
      ref={containerRef}
      className="py-24 bg-pilot-50 dark:bg-pilot-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={cn(
              "text-center mb-16 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="inline-block py-1 px-3 bg-accent-500/20 text-accent-500 rounded-full text-sm font-medium mb-4">The PilotPath Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Using Our Directory</h2>
            <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-2xl mx-auto">
              Discover why transportation companies trust PilotPath for finding qualified pilot car operators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${benefit.delay}ms` }}
              >
                <div className="glass-card p-6 h-full hover-lift">
                  <div className="text-accent-500 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-pilot-600 dark:text-pilot-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className={cn(
              "mt-16 p-8 bg-gradient-to-r from-pilot-900 to-pilot-800 rounded-lg shadow-lg text-white relative overflow-hidden transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "700ms" }}
          >
            {/* Abstract decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full -mt-20 -mr-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full -mb-16 -ml-16 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Ready to streamline your pilot car hiring?</h3>
                <p className="text-white/80 max-w-2xl">
                  Join thousands of transportation companies saving time and ensuring safety with our pilot car directory.
                </p>
              </div>
              <a 
                href="#" 
                className="flex-shrink-0 bg-white text-pilot-900 hover:bg-accent-500 hover:text-white py-3 px-8 rounded-full font-medium transition-colors shadow-lg"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
