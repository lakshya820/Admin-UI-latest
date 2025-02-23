import React from 'react';
import '../css/BarChart1.css';

const StatisticsChart = () => {
  const data = [
    { 
      name: 'Grammar', 
      value: 60,
      barColor: '#10B981' // Emerald green
    },
    { 
      name: 'Sentence Construction', 
      value: 35,
      barColor: '#F43F5E' // Rose red
    },
    { 
      name: 'CSI', 
      value: 1.15, 
      isSpecial: true,
      barColor: '#F59E0B' // Amber
    },
    { 
      name: 'Typing Speed', 
      value: 45, 
      unit: 'wpm',
      barColor: '#3B82F6' // Blue
    }
  ];

  return (
    <div className="bar-statistics-container">
      <p className="bar-statistics-title">Statistics</p>
      <div className="bar-statistics-list">
        {data.map((item) => (
          <div key={item.name} className="bar-statistic-item">
            <div className="bar-statistic-header">
              <span className="bar-statistic-name">{item.name}</span>
              <span className="bar-statistic-value">
                {item.isSpecial 
                  ? item.value.toFixed(2)
                  : item.unit 
                    ? `${item.value} ${item.unit}`
                    : `${item.value}%`
                }
              </span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill"
                style={{ 
                  width: item.isSpecial 
                    ? `${(item.value / 2) * 100}%`
                    : `${item.value}%`,
                  backgroundColor: item.barColor
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