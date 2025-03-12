import React, { useRef } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import '../css/PieChart1.css';

const CircularProgress = () => {
  const value = 55;
  const data = [
    { value: value },
    { value: 100 - value }
  ];
  
  // Add ref for TypeScript compatibility
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="circular-progress-container" ref={containerRef}>
      <p className="circular-progress-title">Overall Rating</p>
      <div className="circular-progress-chart">
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            cx={90}
            cy={90}
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            strokeWidth={0}
          >
            <Cell fill="#E5E7EB" /> {/* Background circle */}
            <Cell fill="#5F249F" /> {/* Progress circle - using solid color instead of gradient */}
          </Pie>
        </PieChart>
        <div className="circular-progress-value">
          <span>{value}%</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;