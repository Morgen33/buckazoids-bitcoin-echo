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
    name: "OKX",
    logo: "/lovable-uploads/d019d532-2885-4063-8b9a-3311c707a3bf.png",
    url: "https://www.okx.com/",
  },
  {
    name: "Bitget",
    logo: "/lovable-uploads/677f9c45-66ae-4413-9593-902da6db2363.png",
    url: "https://x.com/Bitget_zh/status/1906972298604638539",
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
