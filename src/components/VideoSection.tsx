
import React from 'react';

const VideoSection = () => {
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
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe 
            className="w-full h-[600px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/pyNpp_hzBig" 
            title="How to Buy Buckazoids"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

