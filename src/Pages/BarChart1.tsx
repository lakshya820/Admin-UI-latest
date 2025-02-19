import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const StatisticsChart = () => {
  const data = [
    { name: 'Grammar', value: 60 },
    { name: 'Sentence Construction', value: 35 },
    { name: 'CSI', value: 1.15, isSpecial: true },
    { name: 'Typing Speed', value: 45, unit: 'wpm' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Statistics</h2>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{item.name}</span>
              <span className="font-medium">
                {item.isSpecial 
                  ? item.value.toFixed(2)
                  : item.unit 
                    ? `${item.value} ${item.unit}`
                    : `${item.value}%`
                }
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  item.name === 'Grammar' 
                    ? 'bg-emerald-500' 
                    : item.name === 'Sentence Construction'
                    ? 'bg-orange-500'
                    : item.name === 'CSI'
                    ? 'bg-yellow-500'
                    : 'bg-blue-500'
                }`}
                style={{ 
                  width: item.isSpecial 
                    ? `${(item.value / 2) * 100}%`
                    : `${item.value}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsChart;