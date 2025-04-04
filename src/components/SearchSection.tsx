
import { useElementOnScreen } from "@/utils/animations";
import { cn } from "@/lib/utils";
import SearchForm from "./search/SearchForm";

const SearchSection = () => {
  const { containerRef, isVisible } = useElementOnScreen();
  
  return (
    <section 
      id="search" 
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-pilot-50 to-white dark:from-pilot-900 dark:to-pilot-800"
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "max-w-6xl mx-auto transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Ideal Pilot Car Driver</h2>
            <p className="text-lg text-pilot-600 dark:text-pilot-300 max-w-2xl mx-auto">
              Search our extensive network of certified, professional pilot car operators across North America.
            </p>
          </div>
          
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
