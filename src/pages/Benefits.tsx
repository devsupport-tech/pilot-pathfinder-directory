
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useElementOnScreen } from "@/utils/animations";
import { cn } from "@/lib/utils";
import { ShieldCheck, Zap, Clock, MapPin, Award, Users, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BenefitsPage = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.2 });
  
  const benefitCategories = [
    {
      title: "For Transportation Companies",
      description: "Benefits for businesses that need pilot car services for their oversized loads",
      benefits: [
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "Verified Professionals",
          description: "All drivers are verified with proper certifications and experience, ensuring safety compliance."
        },
        {
          icon: <MapPin className="w-6 h-6" />,
          title: "Nationwide Coverage",
          description: "Access to pilot car operators across North America for interstate and cross-country transport."
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Quick Booking",
          description: "Find and book pilot car drivers quickly, even for urgent and last-minute transport needs."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Quality Ratings",
          description: "Review driver ratings and feedback from other transportation companies before booking."
        }
      ]
    },
    {
      title: "For Pilot Car Operators",
      description: "Benefits for professional drivers who provide escort services",
      benefits: [
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Increased Visibility",
          description: "Get discovered by transportation companies looking for your specific qualifications and equipment."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Direct Connections",
          description: "Connect directly with potential clients without intermediaries, building your business network."
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Flexible Scheduling",
          description: "Manage your own availability and accept jobs that fit your schedule and preferred routes."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Build Your Reputation",
          description: "Collect verified reviews and ratings to showcase your professionalism and build your business."
        }
      ]
    }
  ];
  
  const testimonials = [
    {
      quote: "PilotPath has revolutionized how we find qualified pilot car operators. The search filters make it easy to find drivers with the exact certifications we need for specialized loads.",
      author: "Sarah Johnson",
      position: "Logistics Manager at TransCorp Shipping"
    },
    {
      quote: "As a pilot car operator, I've doubled my business since joining PilotPath. The platform connects me with quality clients that need my specific skills and certifications.",
      author: "Michael Rodriguez",
      position: "Independent Pilot Car Operator"
    },
    {
      quote: "The nationwide coverage PilotPath offers has been invaluable for our cross-country hauls. We can find reliable operators in any region with just a few clicks.",
      author: "David Williams",
      position: "Operations Director at Heavy Haul Logistics"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section 
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Benefits of Using Our Platform</h1>
                <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-3xl mx-auto">
                  Discover why both transportation companies and pilot car operators trust PilotPath as the industry's leading connection platform.
                </p>
              </div>
              
              {benefitCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-20">
                  <div 
                    className={cn(
                      "mb-10 transition-all duration-700 transform",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{category.title}</h2>
                    <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {category.benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className={cn(
                          "transition-all duration-700 transform",
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}
                        style={{ transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms` }}
                      >
                        <Card className="h-full hover-lift bg-white/50 dark:bg-pilot-800/50 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="text-accent-500 mb-4">
                              {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-pilot-600 dark:text-pilot-300">{benefit.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div 
                className={cn(
                  "my-20 transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-10"
                )}
              >
                <Separator className="mb-16" />
                
                <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card 
                      key={index}
                      className={cn(
                        "bg-white dark:bg-pilot-800 hover-lift transition-all duration-700 transform",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      )}
                      style={{ transitionDelay: `${800 + (index * 100)}ms` }}
                    >
                      <CardContent className="p-8">
                        <div className="text-4xl text-accent-500 mb-4">"</div>
                        <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                        <div>
                          <p className="font-bold">{testimonial.author}</p>
                          <p className="text-sm text-pilot-600 dark:text-pilot-300">{testimonial.position}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div 
                className={cn(
                  "mt-16 p-8 bg-gradient-to-r from-pilot-900 to-pilot-800 rounded-lg shadow-lg text-white relative overflow-hidden transition-all duration-700 transform",
                  isVisible ? "opacity-100 translate-y-0 delay-900" : "opacity-0 translate-y-10"
                )}
              >
                {/* Abstract decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full -mt-20 -mr-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full -mb-16 -ml-16 blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Ready to experience these benefits?</h3>
                    <p className="text-white/80 max-w-2xl">
                      Join thousands of users already saving time and ensuring safety with our platform.
                    </p>
                  </div>
                  <a 
                    href="/drivers" 
                    className="flex items-center gap-2 flex-shrink-0 bg-white text-pilot-900 hover:bg-accent-500 hover:text-white py-3 px-8 rounded-full font-medium transition-colors shadow-lg"
                  >
                    Get Started <ArrowRight size={16} />
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

export default BenefitsPage;
