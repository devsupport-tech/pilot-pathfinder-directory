
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Drivers from "./pages/Drivers";
import DriverDetail from "./pages/DriverDetail";
import DriverSignup from "./pages/DriverSignup";
import Login from "./pages/Login";
import HowItWorks from "./pages/HowItWorks";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => {
  // Initialize dark mode based on user preference or system preference
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (storedDarkMode === "true" || (storedDarkMode === null && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/:driverId" element={<DriverDetail />} />
            <Route path="/driver-signup" element={<DriverSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
