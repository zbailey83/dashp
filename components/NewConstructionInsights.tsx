"use client";

import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface NewConstructionInsightsProps {
  metrics: any;
}

const NewConstructionInsights: React.FC<NewConstructionInsightsProps> = ({ metrics }) => {
  if (!metrics || !metrics.supply_demand_trends) {
    return <div>No data available</div>;
  }

  const data = metrics.supply_demand_trends.map((item: any) => ({
    date: new Date(item.date).toLocaleDateString(),
    price: item.price,
  }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="hsl(var(--chart-3))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewConstructionInsights;