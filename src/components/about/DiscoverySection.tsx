
const DiscoverySection = () => {
  return (
    <div className="mb-12 p-8 rounded-2xl" style={{ background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, #02314d 0%, #045c94 100%) border-box`, border: "2px solid transparent" }}>
      <h2 className="text-3xl font-bold mb-6 text-[#02314d]">The Discovery</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        While browsing X.com, we stumbled upon a random Reddit post dated March 26th, 2025. 
        This post introduced something truly astonishing — an old-school adventure computer game 
        called Space Quest, developed by Sierra Entertainment, Inc. formerly known as Sierra On-Line.
      </p>
      <div className="mb-8">
        <ul className="list-none space-y-4 text-gray-700">
          {[
            'Released in 1986, Space Quest quickly became a cult classic',
            'In 1986, Buckazoids appeared as a transactional currency in the game',
            'By 1991, in Space Quest IV, it evolved into a tradeable digital token',
            'The design of the Buckazoids token mirrors what we now recognize as the Bitcoin logo (₿)'
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#045c94]" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[#02314d] font-semibold p-4 bg-[#fff3e2] rounded-lg">
          In addition, it's important to note that Ross Ulbricht (the founder of the first ever bitcoin marketplace) share something in common. Ross's birthday is also the same exact day as the Buckazoids token launch. Coincidence?
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-[#02314d]">Uncovering the Mystery</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Intrigued by this discovery, a small group of digital archaeologists and I began digging deeper. 
        Since March 27th, we have uncovered connections, names, symbols, and dates that shine 
        new light on the greatest mystery in crypto: Who is Satoshi Nakamoto?
      </p>
    </div>
  );
};

export default DiscoverySection;
