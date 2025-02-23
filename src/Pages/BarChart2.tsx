import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Legend } from 'recharts';
import '../css/BarChart2.css';

const TestTrendsChart = () => {
  const data = [
    { month: 'T1', oral: 85, voice: 65 },
    { month: 'T2', oral: 92, voice: 78 },
    { month: 'T3', oral: 78, voice: 82 },
    { month: 'T4', oral: 70, voice: 75 },
    { month: 'T5', oral: 65, voice: 88 }
  ];

  return (
    <div className="test-trends-container">
      <p className="test-trends-title">Test Trends</p>
      <div className="chart-container">
        <BarChart
          width={400}
          height={250}
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
          />
         <Bar 
            dataKey="oral" 
            radius={[3, 3, 0, 0]} 
            barSize={16}
            name="Chat"  // Changed from "oral" to "Chat"
            fill="#3B82F6"
          />
          <Bar 
            dataKey="voice" 
            radius={[3, 3, 0, 0]} 
            barSize={16}
            name="Voice"  // Capitalized "voice" to "Voice"
            fill="#10B981"
          />
          <Legend
            align="left"          // Changed from 'right' to 'left'
            verticalAlign="bottom"
            iconType="line"       // Changed from 'circle' to 'rect' for wider icon
            iconSize={30}         // Increased icon size
            wrapperStyle={{
              paddingTop: '20px',
              left: '20px'        // Added left padding
            }}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default TestTrendsChart;