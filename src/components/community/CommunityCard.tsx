
import React from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface CommunityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonUrl: string;
  accentColor: "primary" | "secondary";
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  description,
  icon,
  buttonText,
  buttonUrl,
  accentColor = "primary"
}) => {
  const handleClick = () => {
    if (buttonUrl.startsWith('/')) {
      window.location.href = buttonUrl;
    } else {
      window.open(buttonUrl, '_blank');
    }
  };

  const bgColorClass = accentColor === "primary" ? "text-[#02314d]" : "text-buckazoid-orange";
  const buttonColorClass = accentColor === "primary" 
    ? "bg-[#02314d] hover:bg-buckazoid-orange text-white" 
    : "bg-buckazoid-orange hover:bg-buckazoid-yellow text-white";

  return (
    <div className="md:col-span-3 bg-white rounded-lg shadow-sm p-8 text-center">
      <div className="mb-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className={`text-2xl font-bold ${bgColorClass} mb-4`}>{title}</h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      <Button 
        className={buttonColorClass}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CommunityCard;
