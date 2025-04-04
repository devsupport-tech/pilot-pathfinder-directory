
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pilot-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Newsletter Signup */}
          <div className="glass-card bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-white/70">
                  Subscribe to our newsletter for the latest updates, industry news, and driver availability alerts.
                </p>
              </div>
              <div>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent-500"
                  />
                  <Button className="bg-accent-500 hover:bg-accent-600 text-white">
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent-500 rounded-md flex items-center justify-center">
                  <div className="w-4 h-1 bg-white rounded-full"></div>
                </div>
                <span className="font-bold text-xl">PilotPath</span>
              </Link>
              <p className="text-white/70 mb-6">
                Connecting logistics companies with professional pilot car operators nationwide for safe, efficient transport.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-accent-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-accent-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-accent-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-accent-500 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Home</Link>
                </li>
                <li>
                  <Link to="/drivers" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Find Drivers</Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-white/70 hover:text-accent-500 transition-colors inline-block">How It Works</Link>
                </li>
                <li>
                  <Link to="/benefits" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Benefits</Link>
                </li>
                <li>
                  <Link to="/resources" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Resources</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/resources" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Industry News</Link>
                </li>
                <li>
                  <Link to="/resources?tab=safety" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Safety Guidelines</Link>
                </li>
                <li>
                  <Link to="/resources?tab=regulations" className="text-white/70 hover:text-accent-500 transition-colors inline-block">State Regulations</Link>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-accent-500 transition-colors inline-block">For Drivers</a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-accent-500 transition-colors inline-block">For Companies</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-accent-500" />
                  <span className="text-white/70">info@pilotpath.com</span>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Help Center</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Support Ticket</Link>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-accent-500 transition-colors inline-block">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} PilotPath. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
