
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip 
} from 'recharts';
import { Clock, Coins, TrendingUp } from 'lucide-react';

const TokenomicsSection = () => {
  const distributionData = [
    { name: 'Community Rewards', value: 40 },
    { name: 'Core Development', value: 20 },
    { name: 'Exchange Listings', value: 15 },
    { name: 'Marketing', value: 10 },
    { name: 'Team', value: 10 },
    { name: 'Research Fund', value: 5 }
  ];
  
  const milestoneData = [
    { name: 'Phase 1', value: 100, fill: '#FFBB1C' },
    { name: 'Phase 2', value: 85, fill: '#F77F00' },
    { name: 'Phase 3', value: 45, fill: '#045C94' },
    { name: 'Phase 4', value: 10, fill: '#02314D' }
  ];
  
  const COLORS = ['#FFBB1C', '#F77F00', '#045C94', '#02314D', '#181E20', '#1A3F5C'];

  return (
    <section className="py-24 bg-white" id="tokenomics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-buckazoid-blue mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the economic model behind Buckazoid and our vision for sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Coins className="text-buckazoid-orange w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">Token Distribution</h3>
            <p className="text-gray-600 mb-8">
              Buckazoid has been designed with a fair distribution model to ensure long-term sustainability and community governance.
            </p>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 space-y-2">
              {distributionData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span 
                    className="block w-4 h-4 rounded-full mr-2" 
                    style={{backgroundColor: COLORS[index % COLORS.length]}}
                  />
                  <span className="text-gray-600 text-sm">{item.name}: <span className="text-buckazoid-blue">{item.value}%</span></span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="text-buckazoid-blue w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-buckazoid-orange mb-4">Roadmap Progress</h3>
            <p className="text-gray-600 mb-8">
              Our development roadmap is divided into four key phases, with each milestone bringing us closer to full implementation.
            </p>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={milestoneData}
                  layout="vertical"
                >
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#045C94' }} />
                  <Tooltip formatter={(value) => `${value}% Complete`} />
                  <Bar dataKey="value" background={{ fill: '#f3f4f6' }} radius={[0, 4, 4, 0]}>
                    {milestoneData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-[#FFBB1C] w-4 h-4 rounded-full mr-3 mt-1" />
                <div>
                  <h4 className="text-buckazoid-blue font-semibold">Phase 1: Research & Community</h4>
                  <p className="text-sm text-gray-500">100% Complete</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#F77F00] w-4 h-4 rounded-full mr-3 mt-1" />
                <div>
                  <h4 className="text-buckazoid-orange font-semibold">Phase 2: Token Development</h4>
                  <p className="text-sm text-gray-500">85% Complete</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-buckazoid-blue w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-buckazoid-blue mb-4">Key Milestones</h3>
            <p className="text-gray-600 mb-8">
              Follow our journey from rediscovery to mainstream adoption with these key project milestones.
            </p>
            
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200" />
              
              <div className="relative pl-10 pb-10">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-buckazoid-yellow flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <h4 className="text-buckazoid-orange font-bold text-lg">Q1 2025</h4>
                <p className="text-gray-600">Buckazoid Rediscovery & Research Publication</p>
              </div>
              
              <div className="relative pl-10 pb-10">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-buckazoid-orange flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <h4 className="text-buckazoid-blue font-bold text-lg">Q2 2025</h4>
                <p className="text-gray-600">Token Launch & Community Growth</p>
              </div>
              
              <div className="relative pl-10 pb-10">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-buckazoid-blue flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <h4 className="text-buckazoid-orange font-bold text-lg">Q3 2025</h4>
                <p className="text-gray-600">Exchange Listings & Partnerships</p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-white border-2 border-buckazoid-blue flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                </div>
                <h4 className="text-buckazoid-blue font-bold text-lg">Q4 2025</h4>
                <p className="text-gray-600">Advanced Research & Ecosystem Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
