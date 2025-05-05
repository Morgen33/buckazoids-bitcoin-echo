
import { Star, Calendar } from "lucide-react";

const ContributorsSection = () => {
  return (
    <div className="mb-12">
      <div className="flex items-start gap-4 mb-8">
        <Star className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#02314d]">Key names from the Space Quest development team:</h3>
          <ul className="list-none space-y-4 text-gray-700">
            {['Scott Murphy and Mark Crowe (known as "The Two Guys from Andromeda")',
              'Satoshi Uesaka',
              'Rod Nakamoto and Nancy Nakamoto'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#045c94]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[#02314d] font-semibold p-4 bg-[#fff3e2] rounded-lg">
            Put those last two names together and what do you get? Satoshi Nakamoto.
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            What's also very interesting...
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Hal Finney — a prolific game designer, cryptographer, cypherpunk, and Bitcoin contributor was known to be working on sci fi and space related games in the late 1970's. He had a knack for Sci Fi and Space related games, and initially contributed in the area of sound effects (according to Wikipedia, and Atari Compendium, <a href="https://ataricompendium.com/archives/interviews/hal_finney/interview_hal_finney.html" target="_blank" rel="noopener noreferrer" className="text-[#045c94] hover:underline">https://ataricompendium.com/archives/interviews/hal_finney/interview_hal_finney.html</a>)
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 mb-8">
        <Calendar className="w-8 h-8 text-[#045c94] flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#02314d]">The Buckazoids Token Launch</h3>
          <p className="text-gray-700 leading-relaxed">
            Fast forward to March 27th, 2025. On this day, the Buckazoids token launched on the Solana network — a high-speed, 
            low-cost blockchain. The launch date is significant, as it aligns with a Bitcoin 
            Conference taking place exactly 59 days later, themed "EMBRACE GAME THEORY," 
            echoing retro game vibes and pointing back to Space Quest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContributorsSection;
