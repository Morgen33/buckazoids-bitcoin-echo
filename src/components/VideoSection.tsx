
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VideoSection = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-buckazoid-blue mb-4">
            How to Buy Buckazoids
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our step-by-step guide on how to purchase Buckazoids
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Official Guide</CardTitle>
              <CardDescription>Learn how to buy Buckazoids step by step</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9 relative">
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="animate-pulse flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                      <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                )}
                <iframe 
                  className="w-full h-[500px] rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/FdvgYc4UFhQ" 
                  title="How to Buy Buckazoids - Official Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  onLoad={() => setIsVideoLoading(false)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
