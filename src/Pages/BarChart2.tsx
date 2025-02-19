import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Legend } from 'recharts';

const TestTrendsChart = () => {
  const data = [
    { month: 'T1', oral: 85, voice: 65 },
    { month: 'T2', oral: 92, voice: 78 },
    { month: 'T3', oral: 78, voice: 82 },
    { month: 'T4', oral: 70, voice: 75 },
    { month: 'T5', oral: 65, voice: 88 }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Test Trends</h2>
      <div className="w-full h-64">
        <BarChart
          width={400}
          height={250}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280' }}
          />
          <Bar 
            dataKey="oral" 
            fill="#2563EB"
            radius={[4, 4, 0, 0]} 
            barSize={20}
          />
          <Bar 
            dataKey="voice" 
            fill="#0D9488"
            radius={[4, 4, 0, 0]} 
            barSize={20}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{
              paddingBottom: '20px'
            }}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default TestTrendsChart;