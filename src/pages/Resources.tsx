
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IndustryNewsFeed from "@/components/resources/IndustryNewsFeed";
import SafetyGuidelines from "@/components/resources/SafetyGuidelines";
import StateRegulations from "@/components/resources/StateRegulations";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Resources</h1>
            <p className="text-pilot-600 dark:text-pilot-400 mb-8">
              Stay informed with the latest news, safety guidelines, and state regulations
            </p>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                <TabsTrigger value="news">Industry News</TabsTrigger>
                <TabsTrigger value="safety">Safety Guidelines</TabsTrigger>
                <TabsTrigger value="regulations">State Regulations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="news" className="pt-4">
                <IndustryNewsFeed />
              </TabsContent>
              
              <TabsContent value="safety" className="pt-4">
                <SafetyGuidelines />
              </TabsContent>
              
              <TabsContent value="regulations" className="pt-4">
                <StateRegulations />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
