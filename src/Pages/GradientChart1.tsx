import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TooltipProps } from 'recharts/types/component/Tooltip';

interface DataPoint {
  month: string;
  learners: number;
  tests: number;
}

const chartData: DataPoint[] = [
  { month: "Jan", learners: 60, tests: 75 },
  { month: "Feb", learners: 40, tests: 30 },
  { month: "Mar", learners: 55, tests: 60 },
  { month: "Apr", learners: 58, tests: 45 },
  { month: "May", learners: 52, tests: 55 },
  { month: "Jun", learners: 90, tests: 40 }
];

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 shadow-lg rounded-lg p-3">
        <p className="text-sm font-medium mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const GradientChart1: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-[#43425D]">Statistics</h3>
        <select className="px-3 py-1 border rounded-md text-sm text-gray-600">
          <option>Last 6 months</option>
        </select>
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 40,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="colorLearners" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorTests" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.1}/>
              </linearGradient>
            </defs>

            <CartesianGrid 
              vertical={false} 
              horizontal={true}
              stroke="#E5E7EB"
              strokeDasharray="3 3"
            />

            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dx={-10}
            />
            
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dy={10}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="learners"
              name="Learners"
              stroke="#8B5CF6"
              strokeWidth={2}
              fill="url(#colorLearners)"
              dot={{ stroke: '#8B5CF6', strokeWidth: 2, r: 4, fill: 'white' }}
            />
            
            <Area
              type="monotone"
              dataKey="tests"
              name="Tests"
              stroke="#38BDF8"
              strokeWidth={2}
              fill="url(#colorTests)"
              dot={{ stroke: '#38BDF8', strokeWidth: 2, r: 4, fill: 'white' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-violet-500"></div>
          <span className="text-sm text-gray-600">Learners</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sky-400"></div>
          <span className="text-sm text-gray-600">Tests</span>
        </div>
      </div>
    </div>
  );
};

export default GradientChart1;