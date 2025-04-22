
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
    link: "https://x.com/frequencycheck/status/1912231457332031925",
    image: "/lovable-uploads/5e8e18ed-016f-4a80-910d-93b285e71d67.png"
  },
  {
    id: 3,
    title: "The Mystery Surrounding Bitcoin's Creator May Soon Be Solved — Buckazoids",
    date: "2025-03-29",
    summary: "The writer's path: An intriguing exploration into the connection between Buckazoids and the mysterious origins of Bitcoin's creator.",
    content: "A fascinating article examining the potential links between Buckazoids and the identity of Bitcoin's creator, Satoshi Nakamoto.",
    link: "https://medium.com/@viam_/the-mystery-surrounding-bitcoins-creator-may-soon-be-solved-c7e110ed31d4",
    image: "/lovable-uploads/8c044af7-a957-4d2d-beea-81f3afaffcf3.png"
  }
];

export const NewsList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
      {newsItems.map((item) => (
        <Card 
          key={item.id}
          className="w-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
        >
          {item.image && (
            <div className="w-full h-48 relative flex bg-[#feb73f]">
              <div className="flex-grow"></div>
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full max-w-[70%] object-contain"
              />
              <div className="flex-grow"></div>
            </div>
          )}
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-3 text-buckazoids-orange">
              <Star className="h-5 w-5" />
              <time className="text-xs font-medium">{item.date}</time>
            </div>
            <CardTitle className="text-xl font-bold text-buckazoid-navy hover:text-buckazoids-blue transition-colors">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
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
