
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DriverNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Driver Not Found</h1>
          <p className="mb-6">The driver you're looking for doesn't exist or has been removed.</p>
          <Link to="/drivers">
            <Button>Return to Drivers</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DriverNotFound;
