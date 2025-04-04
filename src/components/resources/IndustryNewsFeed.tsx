
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { ArrowUpRight, Newspaper, Rss } from "lucide-react";

type NewsItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  source: string;
  url: string;
};

// Mock news items for demonstration
const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "New Oversize Load Regulations Coming in 2024",
    description: "The Department of Transportation has announced new regulations for oversize loads that will take effect in January 2024.",
    date: "2023-11-15",
    source: "Transport Weekly",
    url: "#",
  },
  {
    id: "2",
    title: "Pilot Car Industry Growing Amid Infrastructure Projects",
    description: "The demand for qualified pilot car operators is increasing as major infrastructure projects commence across the country.",
    date: "2023-10-28",
    source: "Logistics Today",
    url: "#",
  },
  {
    id: "3",
    title: "Safety Technology Advances for Escort Vehicles",
    description: "New safety technologies are being developed specifically for pilot cars to improve visibility and communication during transport.",
    date: "2023-10-12",
    source: "Tech in Transport",
    url: "#",
  },
  {
    id: "4",
    title: "Industry Leaders Advocate for Standardized Training",
    description: "Major transportation companies are pushing for standardized national training requirements for pilot car operators.",
    date: "2023-09-30",
    source: "Transport News Network",
    url: "#",
  },
];

const IndustryNewsFeed = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(mockNews);
  const [rssUrl, setRssUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // For demonstration purposes - in a real app this would fetch from the RSS feed
  const handleAddFeed = () => {
    if (!rssUrl) {
      toast({
        title: "Error",
        description: "Please enter an RSS feed URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setRssUrl("");
      toast({
        title: "Feed Added",
        description: "The RSS feed has been added successfully",
      });
    }, 1500);
  };

  // Format the date string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rss size={20} className="text-accent-500" />
            <span>Industry News Feed</span>
          </CardTitle>
          <CardDescription>
            Get the latest news from the transportation and pilot car industry
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <p className="text-sm text-pilot-600 dark:text-pilot-400">
              Add an RSS feed URL to customize your news feed
            </p>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Enter RSS feed URL"
                value={rssUrl}
                onChange={(e) => setRssUrl(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleAddFeed} disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Feed"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Newspaper size={20} className="text-accent-500" />
          <h2 className="text-xl font-semibold">Latest Updates</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>{item.source}</span>
                  <span className="text-sm text-pilot-500">{formatDate(item.date)}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-pilot-700 dark:text-pilot-300">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="text-accent-500 flex items-center gap-1 ml-auto" asChild>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Read More <ArrowUpRight size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryNewsFeed;
