import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const CircularProgress = () => {
  const value = 55; // The progress value
  const data = [
    { value: value },
    { value: 100 - value } // Remaining portion
  ];

  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Overall Rating</h2>
      <div className="relative w-48 h-48">
        <PieChart width={192} height={192}>
          <Pie
            data={data}
            cx={96}
            cy={96}
            innerRadius={75}
            outerRadius={85}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {/* Background circle */}
            <Cell fill="#F3F4F6" />
            {/* Progress circle */}
            <Cell fill="url(#progressGradient)" />
          </Pie>
          <defs>
            <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7E22CE" />
              <stop offset="100%" stopColor="#6B21A8" />
            </linearGradient>
          </defs>
        </PieChart>
        {/* Centered text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-3xl font-bold text-gray-800">55%</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;