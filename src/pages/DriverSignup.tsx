
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DriverSignupForm from "@/components/driver/DriverSignupForm";

const DriverSignup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-8 md:py-12 bg-white dark:bg-pilot-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Driver Sign Up</h1>
              <p className="text-lg text-pilot-600 dark:text-pilot-300 mb-6 md:mb-8">
                Join our network of professional pilot car operators. Complete the form below to create your profile and start getting job requests.
              </p>
              
              <DriverSignupForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DriverSignup;
