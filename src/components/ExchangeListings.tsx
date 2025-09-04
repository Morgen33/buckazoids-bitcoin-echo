
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

type Exchange = {
  name: string;
  logo: string;
  url: string;
  width: number;
  height: number;
};

const exchanges: Exchange[] = [
  {
    name: "MEXC",
    logo: "/lovable-uploads/1d6fc8af-36eb-4bc4-849c-d2f4f8997b9a.png",
    url: "https://www.mexc.com/exchange/BUCKAZOIDS_USDT",
    width: 80,
    height: 40
  },
  {
    name: "CoinEx",
    logo: "/lovable-uploads/63d03c74-3892-4fb3-86fa-d16efa09d057.png",
    url: "https://www.coinex.network/en/exchange/buckazoids-usdt",
    width: 80,
    height: 40
  },
  {
    name: "Bitget",
    logo: "/lovable-uploads/677f9c45-66ae-4413-9593-902da6db2363.png",
    url: "https://x.com/Bitget_zh/status/1906972298604638539",
    width: 120,
    height: 45
  },
  {
    name: "MaxBid",
    logo: "/lovable-uploads/a946ddf3-ca0a-455d-abb7-20dc29fa43ce.png",
    url: "https://maxbid.pro/trade/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump",
    width: 80,
    height: 40
  },
  {
    name: "Blynex",
    logo: "/lovable-uploads/787a3443-45c4-459e-81e8-13d2099cfcca.png",
    url: "https://blynex.com/spot/BUCKAZOIDS_USDT",
    width: 120,
    height: 45
  },
  {
    name: "XT.com",
    logo: "/lovable-uploads/8fb9a61f-2190-49d2-86a3-8ede72b837ff.png",
    url: "https://www.xt.com/en/trade/buckazoids_usdt?channel=XTENX",
    width: 80,
    height: 40
  },
  {
    name: "Dextools",
    logo: "/lovable-uploads/f7c1a289-7500-437c-a394-10e9f1f4344e.png",
    url: "https://www.dextools.io/app/en/solana/pair-explorer/8KhsZhgWBEfDyTqJGMgZsmqgQUhB2mHj9CnaxcLXAYdm?t=1745055142630",
    width: 80,
    height: 40
  },
  {
    name: "Dexscreener",
    logo: "/lovable-uploads/3b7c9b44-9e7a-4f86-96b8-b026490eea72.png",
    url: "https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku",
    width: 80,
    height: 40
  },
];

const ExchangeListings = () => {
  const isMobile = useIsMobile();
  // Always show all exchanges immediately
  const [visibleExchanges] = useState<Exchange[]>(exchanges);
  
  return (
    <div 
      id="exchange-listings-container"
      className={`grid ${isMobile ? "grid-cols-2 gap-4" : "grid-cols-4 gap-8"}`}
    >
      {visibleExchanges.map((exchange) => (
        <a
          key={exchange.name}
          href={exchange.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="p-4 sm:p-6 h-full flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black/60 backdrop-blur-sm border-gray-800">
            <img
              src={exchange.logo}
              alt={`${exchange.name} logo`}
              className="w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
              loading={exchange.name === "MEXC" || exchange.name === "CoinEx" ? "eager" : "lazy"}
              width={exchange.width}
              height={exchange.height}
              decoding={exchange.name === "MEXC" || exchange.name === "CoinEx" ? "sync" : "async"}
            />
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ExchangeListings;
