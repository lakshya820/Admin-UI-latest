import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import '../css/BarChart2.css';

const TestTrendsChart = () => {
  const data = [
    { month: 'T1', oral: 85, voice: 65 },
    { month: 'T2', oral: 92, voice: 78 },
    { month: 'T3', oral: 78, voice: 82 },
    { month: 'T4', oral: 70, voice: 75 },
    { month: 'T5', oral: 65, voice: 88 }
  ];

  // Track container dimensions for responsive sizing
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initial dimensions
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });

      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          setDimensions({ width, height });
        }
      });
      
      resizeObserver.observe(containerRef.current);
      
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  // Calculate dynamic bar size based on container width
  const getBarSize = () => {
    if (dimensions.width < 300) return 10;
    if (dimensions.width < 400) return 12;
    return 16;
  };

  return (
    <div className="test-trends-container">
      <p className="test-trends-title">Test Trends</p>
      <div 
        className="chart-container"
        ref={containerRef}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ 
              top: dimensions.height * 0.10, 
              right: dimensions.width * 0.07, 
              left: dimensions.width * 0.05, 
              bottom: dimensions.height * 0.15 
            }}
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
              barSize={getBarSize()}
              name="Chat"
              fill="#3B82F6"
            />
            <Bar 
              dataKey="voice" 
              radius={[3, 3, 0, 0]} 
              barSize={getBarSize()}
              name="Voice"
              fill="#10B981"
            />
            <Legend
              align="center"
              verticalAlign="bottom"
              iconType="line"
              iconSize={dimensions.width < 350 ? 20 : 30}
              wrapperStyle={{
                paddingTop: '15px'
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TestTrendsChart;