
import React from "react";
import { Card } from "@/components/ui/card";

type Exchange = {
  name: string;
  logo: string;
  url: string;
};

const exchanges: Exchange[] = [
  {
    name: "MEXC",
    logo: "/lovable-uploads/1d6fc8af-36eb-4bc4-849c-d2f4f8997b9a.png",
    url: "https://www.mexc.com/exchange/BUCKAZOIDS_USDT",
  },
  {
    name: "Gate.io",
    logo: "/lovable-uploads/2bcff12f-e806-46c5-b957-052d88cfec4f.png",
    url: "https://www.gate.io/pilot/solana/buckazoids-buckazoids",
  },
  {
    name: "Bitget",
    logo: "/lovable-uploads/677f9c45-66ae-4413-9593-902da6db2363.png",
    url: "https://x.com/Bitget_zh/status/1906972298604638539",
  },
  {
    name: "MaxBid",
    logo: "/lovable-uploads/a946ddf3-ca0a-455d-abb7-20dc29fa43ce.png",
    url: "https://maxbid.pro/trade/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump",
  },
  {
    name: "LBank",
    logo: "/lovable-uploads/fb2287c5-ac6a-4372-bc30-b06337157743.png",
    url: "https://www.lbank.com/trade/buckazoids_usdt",
  },
  {
    name: "XT.com",
    logo: "/lovable-uploads/8fb9a61f-2190-49d2-86a3-8ede72b837ff.png",
    url: "https://www.xt.com/en/trade/buckazoids_usdt?channel=XTENX",
  },
  {
    name: "Dextools",
    logo: "/lovable-uploads/f7c1a289-7500-437c-a394-10e9f1f4344e.png",
    url: "https://www.dextools.io/app/en/solana/pair-explorer/8KhsZhgWBEfDyTqJGMgZsmqgQUhB2mHj9CnaxcLXAYdm?t=1745055142630",
  },
  {
    name: "Dexscreener",
    logo: "/lovable-uploads/3b7c9b44-9e7a-4f86-96b8-b026490eea72.png",
    url: "https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku",
  },
];

const ExchangeListings = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {exchanges.map((exchange) => (
        <a
          key={exchange.name}
          href={exchange.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="p-6 h-full flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/10 border-none">
            <img
              src={exchange.logo}
              alt={`${exchange.name} logo`}
              className={`w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity ${
                exchange.name === 'Bitget' || exchange.name === 'LBank' 
                  ? 'max-h-12' 
                  : 'max-h-10'
              }`}
            />
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ExchangeListings;
