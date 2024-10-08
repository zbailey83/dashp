"use client";

import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface RentalMetricsProps {
  metrics: any;
}

const RentalMetrics: React.FC<RentalMetricsProps> = ({ metrics }) => {
  if (!metrics || !metrics.rental_trends) {
    return <div>No data available</div>;
  }

  const data = metrics.rental_trends.map((item: any) => ({
    date: new Date(item.date).toLocaleDateString(),
    rent: item.average_rent,
  }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="rent" stroke="hsl(var(--chart-2))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RentalMetrics;