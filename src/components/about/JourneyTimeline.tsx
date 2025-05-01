
import { History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const JourneyTimeline = () => {
  return (
    <Card className="mb-12 border-2 border-[#045c94]/20 shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <History className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#02314d]">A Journey Through Time (That You're a Part Of)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You've been deep in crypto. Scrolling charts, chasing memecoins, wondering who the hell Satoshi Nakamoto really is. 
              Maybe even kicking yourself for missing Bitcoin when it was just a whisper on the internet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But what if we told you the answers — or at least the origin story — were hiding in plain sight all along?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sit back. Relax. You're not just reading about history — you're stepping into it.
            </p>
            <p className="text-[#02314d] font-semibold text-lg">
              Because this isn't just another crypto site. This is Buckazoids. A forgotten piece of digital prophecy reborn on the blockchain — and maybe, just maybe, your second shot at catching lightning in a bottle.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneyTimeline;
