
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center mb-16 p-12 rounded-2xl bg-gradient-to-r from-[#000222] to-[#feb73f]">
      <h1 className="text-5xl font-bold text-white mb-6">
        The Greatest Discovery in Crypto History
      </h1>
      <p className="text-xl text-white mb-8">
        Welcome to the most groundbreaking revelation in the world of digital currency.
        We are excited to share what we believe to be one of the greatest discoveries
        in crypto history — a revelation that has reshaped our understanding of Bitcoin,
        cryptocurrencies, and the future of digital currency.
      </p>
      <div className="mt-8">
        <Button
          className="bg-white text-[#000222] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
          onClick={() => window.open('https://dexscreener.com/solana/dujfqjqj69psrqhgczetd5qcalanyy12tbwvfcpqxvku', '_blank')}
        >
          Buy Buckazoids <ExternalLink className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
