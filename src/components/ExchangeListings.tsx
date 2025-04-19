
import React from "react";
import { Card } from "@/components/ui/card";

type Exchange = {
  name: string;
  logo: string;
  url: string;
};

const exchanges: Exchange[] = [
  {
    name: "Binance",
    logo: "/lovable-uploads/d019d532-2885-4063-8b9a-3311c707a3bf.png",
    url: "https://www.binance.com/",
  },
  {
    name: "KuCoin",
    logo: "/lovable-uploads/d019d532-2885-4063-8b9a-3311c707a3bf.png",
    url: "https://www.kucoin.com/",
  },
  {
    name: "Gate.io",
    logo: "/lovable-uploads/d019d532-2885-4063-8b9a-3311c707a3bf.png",
    url: "https://www.gate.io/",
  },
  {
    name: "OKX",
    logo: "/lovable-uploads/d019d532-2885-4063-8b9a-3311c707a3bf.png",
    url: "https://www.okx.com/",
  },
];

const ExchangeListings = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {exchanges.map((exchange) => (
        <a
          key={exchange.name}
          href={exchange.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/10 border-none">
            <img
              src={exchange.logo}
              alt={`${exchange.name} logo`}
              className="w-full h-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ExchangeListings;
