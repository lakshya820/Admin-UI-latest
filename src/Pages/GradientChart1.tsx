import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TooltipProps } from 'recharts';
import '../css/GradientChart1.css';

interface DataPoint {
  month: string;
  learners: number;
  tests: number;
}

// Define proper types for the CustomTooltip
type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
  }>;
  label?: string;
} & TooltipProps<number, string>;

const chartData: DataPoint[] = [
  { month: "Jan", learners: 60, tests: 75 },
  { month: "Feb", learners: 40, tests: 30 },
  { month: "Mar", learners: 55, tests: 60 },
  { month: "Apr", learners: 58, tests: 45 },
  { month: "May", learners: 52, tests: 55 },
  { month: "Jun", learners: 90, tests: 40 }
];

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-container">
        <p className="tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="tooltip-value" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const StatisticsChart: React.FC = () => {
  return (
    <div className="gradient-statistics-container">
      <div className="gradient-statistics-header">
        <p className="gradient-statistics-title">Statistics</p>
        <select className="gradient-statistics-select">
          <option>Last 6 months</option>
        </select>
      </div>

      <div className="gradient-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 40, bottom: 10 }}
          >
            <defs>
              <linearGradient id="colorLearners" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorTests" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7DD3FC" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#7DD3FC" stopOpacity={0.1}/>
              </linearGradient>
            </defs>

            <CartesianGrid 
              vertical={false} 
              horizontal={true}
              className="chart-grid"
            />

            <YAxis 
              axisLine={false}
              tickLine={false}
              className="chart-axis"
            />
            
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              className="chart-axis"
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="learners"
              name="Learners"
              className="learners-area"
              fill="url(#colorLearners)"
            />
            
            <Area
              type="monotone"
              dataKey="tests"
              name="Tests"
              className="tests-area"
              fill="url(#colorTests)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="legend-container">
        <div className="legend-item">
          <div className="legend-dot learners-dot"></div>
          <span className="legend-label">Learners</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot tests-dot"></div>
          <span className="legend-label">Tests</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;