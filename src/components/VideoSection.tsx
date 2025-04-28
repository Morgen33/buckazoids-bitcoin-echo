
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-buckazoid-blue mb-4">
            How to Buy Buckazoids
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our step-by-step guides on how to purchase Buckazoids
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Official Guide</CardTitle>
              <CardDescription>Learn how to buy Buckazoids step by step</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-[300px] rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/pyNpp_hzBig" 
                  title="How to Buy Buckazoids - Official Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>On The Go Crypto Review</CardTitle>
              <CardDescription>Released April 27, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-[300px] rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/pyNpp_hzBig" 
                  title="On The Go Crypto - Buckazoids Review"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
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

