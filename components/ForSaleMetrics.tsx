"use client";

import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ForSaleMetricsProps {
  metrics: any;
}

const ForSaleMetrics: React.FC<ForSaleMetricsProps> = ({ metrics }) => {
  if (!metrics || !metrics.price_trends) {
    return <div>No data available</div>;
  }

  const data = metrics.price_trends.map((item: any) => ({
    date: new Date(item.date).toLocaleDateString(),
    price: item.price_per_sqft,
  }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="hsl(var(--chart-1))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForSaleMetrics;