
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import NetworkGraphic from "./NetworkGraphic";
import { ArrowRight, Briefcase, Laptop, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type OverviewCardProps = {
  title: string;
  icon: React.ReactNode;
  className?: string;
};

const OverviewCard = ({ title, icon, className }: OverviewCardProps) => {
  return (
    <Card className={cn(
      "bg-buckazoid-dark/50 border-none hover:bg-buckazoid-dark/70 transition-all duration-300 cursor-pointer group",
      className
    )}>
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full border-2 border-buckazoid-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 flex items-center gap-1 mt-2 group-hover:text-buckazoid-orange transition-colors">
          Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </p>
      </CardContent>
    </Card>
  );
};

const OverviewSection = () => {
  return (
    <section className="relative bg-buckazoid-dark py-24 overflow-hidden">
      {/* Network background */}
      <NetworkGraphic />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Get a quick overview for
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OverviewCard 
            title="Individuals" 
            icon={<UserCircle size={32} className="text-buckazoid-orange" />} 
          />
          
          <OverviewCard 
            title="Businesses" 
            icon={<Briefcase size={32} className="text-buckazoid-orange" />} 
          />
          
          <OverviewCard 
            title="Developers" 
            icon={<Laptop size={32} className="text-buckazoid-orange" />} 
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
