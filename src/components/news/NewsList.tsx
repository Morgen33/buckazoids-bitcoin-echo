import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Support Buckazoids to be the Next Rising Star on MEXC",
    date: "2025-04-17",
    summary: "Join the MEXC Rising Star S3 campaign and help Buckazoids secure its place on one of the leading cryptocurrency exchanges.",
    content: "Get involved in the MEXC Rising Star Season 3 initiative and support Buckazoids' journey to be listed on MEXC exchange. Your participation can make a difference!",
    link: "https://x.com/TrenchSniper69/status/1912965612407775713",
    image: "/lovable-uploads/2e54fe60-c3d8-4ffd-b251-38a77b5f170d.png"
  },
  {
    id: 2,
    title: "The Greatest Discovery in Crypto History Has Just Been Uncovered",
    date: "2025-04-15",
    summary: "A fascinating analysis of Buckazoids' role in early digital currency history.",
    content: "Check out this detailed analysis of Buckazoids and its historical significance in digital currency evolution.",
    link: "https://x.com/frequencycheck/status/1912231457332031925"
  }
];

export const NewsList = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto">
      {newsItems.map((item) => (
        <Card 
          key={item.id}
          className="w-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-buckazoid-navy/5 to-buckazoid-blue/10 border border-buckazoid-blue/20"
        >
          <CardHeader className="space-y-2 pb-2">
            <div className="flex items-center gap-3 text-buckazoids-orange">
              <Star className="h-5 w-5" />
              <time className="text-xs font-medium">{item.date}</time>
            </div>
            <CardTitle className="text-xl font-bold text-buckazoid-navy hover:text-buckazoids-blue transition-colors">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {item.image && (
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.summary}
            </p>
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-buckazoids-orange hover:text-buckazoids-yellow transition-colors text-sm font-medium"
            >
              Read Full Article <ExternalLink className="h-4 w-4" />
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
