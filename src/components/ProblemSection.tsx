import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
const causesData = [
  { name: 'Infrastructure Gap', impact: 9.8 },
  { name: 'Poverty in Rural Regions', impact: 35 },
  { name: 'Education Disparity', impact: 3.9 },
  { name: 'Healthcare Access (Rural)', impact: 30 },
  { name: 'Digital Challenges', impact: 80 },
  { name: 'Governance Issues', impact: 70 },
  { name: 'Investment Disparity', impact: 85 },
  { name: 'Centralized Tourism Planning', impact: 65 },
];

const urbanVsRuralData = [
  { category: 'Urban Tourists', percentage: 80 },
  { category: 'Rural Tourists', percentage: 20 },
];

const surveyData = [
  { label: 'Better roads and transport', value: 85.7 },
  { label: 'More places to stay', value: 42.9 },
  { label: 'Free maps or tourist guides', value: 14.3 },
  { label: 'Training for locals in tourism', value: 14.3 },
  { label: 'Promoting rural tourism online', value: 57.1 },
  { label: 'Supporting local products', value: 57.1 },
  { label: 'More safety and health facilities', value: 42.9 },
];

const developmentData = [
  { year: '2019', tourists: 12 },
  { year: '2020', tourists: 4 },
  { year: '2021', tourists: 6 },
  { year: '2022', tourists: 10 },
  { year: '2023', tourists: 13 },
  { year: '2024', tourists: 15 },
];

const COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Amber
  '#EF4444', // Red
  '#6366F1', // Indigo
  '#8B5CF6', // Violet
  '#F97316', // Orange
];


const RADIAN = Math.PI / 180;

const ProblemSection = () => {

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
    );
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg space-y-12">
      <h2 className="text-3xl font-bold text-secondary-900 text-center mb-4">Problem & Pain Points</h2>

      {/* Problem and Pain Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem Card */}
        <div className="border-l-4 border-red-500 pl-6">
          <h3 className="text-xl font-semibold text-secondary-900 mb-3">The Problem / Challenge</h3>
          <p className="text-secondary-600">
            Rural Morocco has rich tourism potential, but most regions remain invisible to travelers due to the lack of digital platforms. As a result, local guides and artisans miss out on exposure and income.
          </p>
        </div>

        {/* Pain Points */}
        <div className="border-l-4 border-yellow-500 pl-6">
          <h3 className="text-xl font-semibold text-secondary-900 mb-3">Pain Points</h3>
          <ul className="list-disc list-inside text-secondary-600 space-y-2">
            <li>Tourists struggle to find authentic rural experiences</li>
            <li>Fear of scams and poor booking options</li>
            <li>Locals lack digital tools to promote their services</li>
            <li>Most depend on word-of-mouth or seasonal visits</li>
          </ul>
        </div>
      </div>

      {/* Validated Data Summary */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-secondary-900 text-center mb-6">Validated Data</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-primary-50 p-4 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-primary-700">42.9%</p>
            <p className="mt-2 text-secondary-700 text-sm">
              of travelers said they would visit rural areas if they trusted the service
            </p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-primary-700">3 / 3</p>
            <p className="mt-2 text-secondary-700 text-sm">
              local guides interviewed had no online platform
            </p>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-primary-700">UNWTO</p>
            <p className="mt-2 text-secondary-700 text-sm">
              reports rural tourism in North Africa lacks digital tools
            </p>
          </div>
        </div>
      </div>

      {/* 📊 Chart Visualization */}
        <div className="p-6 space-y-12 mt-10">
          <h2 className="text-2xl font-bold text-secondary-900 text-center mb-6">Key Challenges & Market Data</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-lg shadow-md col-span-1'>
              <h2 className="text-xl text-center text-secondary-900 mb-1">
                Root Causes of Rural Tourism Challenges in Morocco
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={causesData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(val) => `${val}%`} 
                  
                  />
                  <YAxis dataKey="name" type="category" 
                    tick={{ fontSize: 14 }}
                  />
                  <Tooltip formatter={(val) => `${val}%`} />
                  <Bar dataKey="impact" fill="#3B82F6" radius={[0, 10, 10, 0]}>
                    <LabelList dataKey="impact" position="right" formatter={(val) => `${val}%`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='bg-white rounded-lg shadow-md col-span-1'>
              <h2 className="text-xl text-center text-secondary-900 mb-1">
                Urban vs Rural Tourism Visitors
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={urbanVsRuralData} layout="vertical">
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
                  <YAxis dataKey="category" type="category" tick={{ fontSize: 14 }} />
                  <Tooltip formatter={(val) => `${val}%`} />
                  <Bar dataKey="percentage" fill="#10B981">
                    <LabelList dataKey="percentage" position="right" formatter={(val) => `${val}%`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          
            <div className='bg-white rounded-lg shadow-md col-span-2'>
              <h2 className="text-xl text-center text-secondary-900 mb-1">
                Morocco Tourism Growth (Last 5 Years)
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={developmentData}>
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Tourists (Millions)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="tourists" stroke="#F59E0B" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProblemSection;
