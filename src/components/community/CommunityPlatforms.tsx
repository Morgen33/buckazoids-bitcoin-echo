
import React from 'react';
import CommunityCard from './CommunityCard';
import { Github, MessageCircle, Pill, Youtube, Instagram, BookOpen } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";

const CommunityPlatforms: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 gap-8">
      {/* X (Twitter) */}
      <CommunityCard
        title="X (Twitter)"
        description="Follow us for the latest updates, community events, and discussions about Buckazoids and crypto history."
        icon={
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#02314d]"
          >
            <path 
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
              fill="currentColor"
            />
          </svg>
        }
        buttonText="Follow @Buckazoids"
        buttonUrl="https://x.com/BuckazoidsWorld"
        accentColor="primary"
      />

      {/* Documenting Buckazoids */}
      <CommunityCard
        title="Documenting Buckazoids"
        description="Explore the rich lore and history of Buckazoids through our dedicated documentation channel."
        icon={
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-buckazoid-orange"
          >
            <path 
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
              fill="currentColor"
            />
          </svg>
        }
        buttonText="Follow Project B59"
        buttonUrl="https://x.com/59Buckazoids"
        accentColor="secondary"
      />

      {/* White Paper */}
      <CommunityCard
        title="White Paper"
        description="Read our comprehensive white paper to understand the history and vision behind the Buckazoids project."
        icon={<Github className="text-[#02314d] w-8 h-8" />}
        buttonText="View White Paper"
        buttonUrl="https://github.com/Buckazoidscto/Buckazoids-white-paper-"
        accentColor="primary"
      />

      {/* YouTube */}
      <CommunityCard
        title="YouTube"
        description="Subscribe to our YouTube channel to watch videos about Buckazoids history, updates, and community highlights."
        icon={<Youtube className="text-buckazoid-orange w-8 h-8" />}
        buttonText="Watch on YouTube"
        buttonUrl="https://www.youtube.com/@DocumentingBuckazoids"
        accentColor="secondary"
      />

      {/* Reddit */}
      <CommunityCard
        title="Reddit"
        description="Join our Reddit community to discuss Buckazoids, share insights, and stay updated with the latest developments."
        icon={<MessageCircle className="text-[#02314d] w-8 h-8" />}
        buttonText="Join r/Buckazoids"
        buttonUrl="https://www.reddit.com/r/Buckazoids/"
        accentColor="primary"
      />

      {/* Discord */}
      <CommunityCard
        title="Discord"
        description="Join our vibrant Discord community to discuss theories, share discoveries, and connect with like-minded enthusiasts."
        icon={<MessageCircle className="text-buckazoid-orange w-8 h-8" />}
        buttonText="Join Discord"
        buttonUrl="https://discord.gg/HqdBVYa4qq"
        accentColor="secondary"
      />

      {/* Pump.fun */}
      <CommunityCard
        title="Pump.fun"
        description="Visit the birthplace of Buckazoids on the Solana blockchain and explore where it all began."
        icon={<Pill className="text-[#02314d] w-8 h-8" />}
        buttonText="View on Pump.fun"
        buttonUrl="https://pump.fun/coin/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump"
        accentColor="primary"
      />

      {/* TikTok */}
      <CommunityCard
        title="TikTok"
        description="Follow our TikTok for short-form content, behind-the-scenes, and exciting Buckazoids updates."
        icon={<TikTokIcon className="text-buckazoid-orange w-8 h-8" />}
        buttonText="Follow @Buckazoids"
        buttonUrl="https://www.tiktok.com/@buckazoids1991?_t=ZT-8v8v4WBLwmU&_r=1"
        accentColor="secondary"
      />

      {/* Instagram Greece */}
      <CommunityCard
        title="Instagram Greece"
        description="Follow our Greek community for local updates, events, and connect with Buckazoid enthusiasts in Greece."
        icon={<Instagram className="text-[#02314d] w-8 h-8" />}
        buttonText="Follow on Instagram"
        buttonUrl="https://www.instagram.com/buckazoidsgr?igsh=MXZ5Zm81d3kzNXdnYQ%3D%3D&utm_source=qr"
        accentColor="primary"
      />

      {/* Constitution */}
      <CommunityCard
        title="Constitution"
        description="Explore the Constitution of Buckazoids, the guiding principles and values that unite our community across time and space."
        icon={<BookOpen className="text-buckazoid-orange w-8 h-8" />}
        buttonText="View Constitution"
        buttonUrl="/constitution"
        accentColor="secondary"
      />
    </div>
  );
};

export default CommunityPlatforms;
