import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star, Youtube } from "lucide-react";

const newsItems = [
  {
    id: 8,
    title: "On The Go Crypto Review",
    date: "2025-04-27",
    summary: "Check out the latest review of Buckazoids by On The Go Crypto.",
    content: "Watch this comprehensive review of Buckazoids by On The Go Crypto, released April 27, 2025.",
    link: "https://www.youtube.com/watch?v=pyNpp_hzBig",
    isVideo: true,
    image: "/lovable-uploads/c8da9402-84a5-4da6-836f-7d9fa0403aca.png"
  },
  {
    id: 7,
    title: "Understanding Buckazoids: A Deep Dive",
    date: "2025-04-24",
    summary: "Take a deep dive into the world of Buckazoids in this comprehensive video analysis.",
    content: "Watch this detailed exploration of Buckazoids and its potential impact on the future of digital currency.",
    link: "https://www.youtube.com/watch?v=df-4_z4-LEs",
    isVideo: true,
    image: "/lovable-uploads/d9f0ae70-a734-4c3b-b98d-49dc6634e314.png"
  },
  {
    id: 6,
    title: "The Road to Las Vegas",
    date: "2025-04-25",
    summary: "Another groundbreaking insight from @frequencycheck as we explore the journey towards Las Vegas.",
    content: "Discover the latest developments and future plans as Buckazoids continues its journey towards Las Vegas.",
    link: "https://x.com/frequencycheck/status/1915845379817673001",
    image: "/lovable-uploads/7b525e14-60d7-451c-8c1c-06536d930655.png"
  },
  {
    id: 4,
    title: "Buckazoids Now Listed on MoonerHive Exchange",
    date: "2025-04-22",
    summary: "Buckazoids ($BUCKAZOIDS) has been successfully listed on the MoonerHive exchange platform, expanding its accessibility to traders.",
    content: "Exciting news for the Buckazoids community as the token makes its debut on MoonerHive exchange. This listing marks another milestone in Buckazoids' journey to wider adoption.",
    link: "https://x.com/MoonerHive/status/1914539912910561695",
    image: "/lovable-uploads/de079870-5764-42d2-9bbb-d5d6c2634a6b.png"
  },
  {
    id: 5,
    title: "A Field Trip into the Future",
    date: "2025-04-21",
    summary: "Another Mic drop from @frequencycheck. If this one doesn't make you a believer we dont know what will.",
    content: "Explore this fascinating journey into the future of digital currency with @frequencycheck's latest insights.",
    link: "https://x.com/frequencycheck/status/1913670288598073398",
    image: "/lovable-uploads/e6e06d2d-cca2-4094-9501-426eae197aad.png"
  },
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
    summary: "The one and only @frequencycheck delivers a data-packed, fact-filled explosion of insights. You slapped yourself for missing Bitcoin, don't make the same mistake with $Buckazoids.",
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
          {item.image ? (
            <div className="w-full h-48 relative flex bg-black">
              <div className="flex-grow bg-black"></div>
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full max-w-[70%] object-contain"
              />
              <div className="flex-grow bg-black"></div>
            </div>
          ) : item.isVideo && (
            <div className="w-full h-48 relative flex items-center justify-center bg-gray-900">
              <Youtube className="w-12 h-12 text-red-600" />
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
              {item.isVideo ? "Watch Video" : "Read Full Article"} <ExternalLink className="h-4 w-4" />
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
