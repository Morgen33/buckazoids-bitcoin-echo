
import React from "react";

type Exchange = {
  name: string;
  logo: string;
  url: string;
};

const exchanges: Exchange[] = [
  {
    name: "MEXC",
    logo: "https://cryptologos.cc/logos/mexc-mexc-logo.png?v=026",
    url: "https://www.mexc.com/exchange/BUCKAZOIDS_USDT",
  },
  {
    name: "Gate.io",
    logo: "https://cryptologos.cc/logos/gate-io-gateio-logo.png?v=026",
    url: "https://www.gate.io/pilot/solana/buckazoids-buckazoids",
  },
  {
    name: "Bitget",
    logo: "https://cryptologos.cc/logos/bitget-bitget-logo.png?v=026",
    url: "https://x.com/Bitget_zh/status/1906972298604638539",
  },
  {
    name: "MaxBid",
    logo: "https://i.imgur.com/3Uj9Z5g.png",
    url: "https://maxbid.pro/trade/BQQzEvYT4knThhkSPBvSKBLg1LEczisWLhx5ydJipump",
  },
];

const ExchangeListings = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {exchanges.map((exchange) => (
        <a
          key={exchange.name}
          href={exchange.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-[#1a1a1a] p-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105">
            <img
              src={exchange.logo}
              alt={`${exchange.name} logo`}
              className="w-full max-h-20 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default ExchangeListings;
