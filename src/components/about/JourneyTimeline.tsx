
import { History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const JourneyTimeline = () => {
  return (
    <Card className="mb-12 border-2 border-[#045c94]/20 shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <History className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#02314d]">A Journey Through Time</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For nearly 8 years, our team has been deeply immersed in the study of Bitcoin, 
              cryptocurrencies, and the enigma of Satoshi Nakamoto, the mysterious creator of Bitcoin.
              Our journey through the crypto world has seen us dive into meme coins, market trends,
              and witness the global mass adoption of digital currencies.
            </p>
            <p className="text-[#02314d] font-semibold text-lg">
              However, everything changed over the past 20 days.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneyTimeline;
