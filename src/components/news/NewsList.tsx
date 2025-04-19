
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "The Greatest Discovery in Crypto History Has Just Been Uncovered",
    date: "2025-04-15",
    summary: "A fascinating analysis of Buckazoids' role in early digital currency history.",
    content: "Check out this detailed analysis of Buckazoids and its historical significance in digital currency evolution.",
    link: "https://x.com/frequencycheck/status/1912231457332031925"
  }
];

export const NewsList = () => {
  return (
    <div className="flex justify-center items-center">
      <Card className="max-w-3xl w-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-buckazoid-navy/5 to-buckazoid-blue/10 border border-buckazoid-blue/20">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-3 text-buckazoids-orange">
            <Star className="h-6 w-6" />
            <time className="text-sm font-medium">{newsItems[0].date}</time>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold text-buckazoid-navy hover:text-buckazoids-blue transition-colors">
            {newsItems[0].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            {newsItems[0].summary}
          </p>
          <p className="text-gray-500">
            {newsItems[0].content}
          </p>
          <a 
            href={newsItems[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-buckazoids-orange hover:text-buckazoids-yellow transition-colors text-lg font-medium"
          >
            Read Full Article <ExternalLink className="h-5 w-5" />
          </a>
        </CardContent>
      </Card>
    </div>
  );
};
