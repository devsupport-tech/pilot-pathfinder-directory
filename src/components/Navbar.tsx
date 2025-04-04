
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-8 py-4",
        isScrolled
          ? "bg-white/80 dark:bg-pilot-900/80 backdrop-blur-lg shadow-subtle"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-accent-500 rounded-md flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <div className="w-4 h-1 bg-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight">PilotPath</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/drivers" 
              className={cn(
                "hover:text-accent-500 transition-colors",
                location.pathname === "/drivers" && "text-accent-500"
              )}
            >
              Find Drivers
            </Link>
            <Link 
              to="/how-it-works" 
              className={cn(
                "hover:text-accent-500 transition-colors",
                location.pathname === "/how-it-works" && "text-accent-500"
              )}
            >
              How It Works
            </Link>
            <Link 
              to="/benefits" 
              className={cn(
                "hover:text-accent-500 transition-colors",
                location.pathname === "/benefits" && "text-accent-500"
              )}
            >
              Benefits
            </Link>
            <Link 
              to="/resources" 
              className={cn(
                "hover:text-accent-500 transition-colors",
                location.pathname === "/resources" && "text-accent-500"
              )}
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "hover:text-accent-500 transition-colors",
                location.pathname === "/contact" && "text-accent-500"
              )}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggle />
            <Button variant="outline" size="sm" className="rounded-full px-6" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button size="sm" className="rounded-full px-6 bg-accent-500 hover:bg-accent-600" asChild>
              <Link to="/driver-signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <DarkModeToggle />
            <button
              className="ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-white/95 dark:bg-pilot-900/95 backdrop-blur-md shadow-lg p-4 rounded-b-lg border-t border-gray-100 dark:border-gray-800 animate-slide-down">
            <div className="flex flex-col space-y-4 py-2">
              <Link 
                to="/drivers" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                  location.pathname === "/drivers" && "text-accent-500 bg-gray-100 dark:bg-gray-800"
                )}
              >
                Find Drivers
              </Link>
              <Link 
                to="/how-it-works" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                  location.pathname === "/how-it-works" && "text-accent-500 bg-gray-100 dark:bg-gray-800"
                )}
              >
                How It Works
              </Link>
              <Link 
                to="/benefits" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                  location.pathname === "/benefits" && "text-accent-500 bg-gray-100 dark:bg-gray-800"
                )}
              >
                Benefits
              </Link>
              <Link 
                to="/resources" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                  location.pathname === "/resources" && "text-accent-500 bg-gray-100 dark:bg-gray-800"
                )}
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                  location.pathname === "/contact" && "text-accent-500 bg-gray-100 dark:bg-gray-800"
                )}
              >
                Contact
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="outline" className="w-full justify-center rounded-full" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                <Button className="w-full justify-center rounded-full bg-accent-500 hover:bg-accent-600" asChild>
                  <Link to="/driver-signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
