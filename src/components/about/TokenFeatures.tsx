
const TokenFeatures = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-[#02314d]">The Buckazoids Token Features</h2>
      <ul className="list-none space-y-4 text-gray-700">
        {['The ₿-like "B" logo — predating Bitcoin',
          'A rocket ship — nodding to its origins as a cosmic currency in Space Quest',
          'The number 59 — a prime number with cryptographic significance'
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#045c94]" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-gray-700">
        Bitcoin's foundation is built on prime numbers, representing indivisibility, security, 
        and incorruptibility. The number 59 is a cryptographic fingerprint embedded into the 
        roots of Buckazoids.
      </p>
    </div>
  );
};

export default TokenFeatures;
