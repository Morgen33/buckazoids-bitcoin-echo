import React from "react";
import ExchangeListings from "./ExchangeListings";
import NetworkMountains from "./NetworkMountains";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const OverviewSection = () => {
  return (
    <section className="bg-white py-[130px] px-8 text-gray-800">
      <div className="max-w-[1230px] mx-auto">
        <div className="bg-[#0b0e11] -mx-8 overflow-hidden">
          <NetworkMountains />
          <div className="py-[130px] px-8 text-white">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Listed On Major Exchanges
              </h2>
              <p className="text-[#ccc] max-w-2xl mx-auto text-lg">
                Buckazoids is available on top cryptocurrency exchanges worldwide, making it easy for anyone to buy, sell, and trade.
              </p>
            </div>
            <ExchangeListings />
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-center text-2xl font-normal text-[#FF7E00] mb-12">
            Get started with Buckazoids
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:max-w-[65%]">
              <p className="text-xl text-[#4D5060] leading-[30px] mb-10">
                Buckazoids uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of Buckazoids is carried out collectively by the network.
                <strong> Buckazoids is open-source; its design is public, nobody owns or controls Buckazoids and <a href="#" className="text-[#3490E6] underline">everyone can take part</a></strong>.
              </p>
              
              <ul className="list-none p-0 m-0">
                <li className="flex items-center mb-4">
                  <img src="https://bitcoin.org/img/icons/main_ico_instant.svg?1743181677" alt="Instant" className="w-[30px] h-[30px] mr-6" />
                  <span className="font-semibold text-[17px] text-[#13161F]">Fast peer-to-peer transactions</span>
                </li>
                <li className="flex items-center mb-4">
                  <img src="https://bitcoin.org/img/icons/main_ico_worldwide.svg?1743181677" alt="Worldwide" className="w-[30px] h-[30px] mr-6" />
                  <span className="font-semibold text-[17px] text-[#13161F]">Worldwide payments</span>
                </li>
                <li className="flex items-center mb-4">
                  <img src="https://bitcoin.org/img/icons/main_ico_lowfee.svg?1743181677" alt="Low Fee" className="w-[30px] h-[30px] mr-6" />
                  <span className="font-semibold text-[17px] text-[#13161F]">Low processing fees</span>
                </li>
              </ul>
            </div>
            
            <img 
              src="https://bitcoin.org/img/home/bitcoin-img.svg?1743181677" 
              alt="Buckazoids" 
              className="max-w-full md:max-w-[30%] h-auto"
            />
          </div>
          
          <div className="text-center mt-16">
            <a 
              href="#" 
              className="inline-block bg-[#13161F] text-white px-6 py-4 font-semibold text-base rounded w-[290px] h-[55px]"
            >
              Get started with Buckazoids
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
