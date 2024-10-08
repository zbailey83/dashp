"use client";

import React, { useEffect, useState } from 'react';
import { fetchMarketMetrics } from '@/lib/apiService';
import BentoBox from '@/components/BentoBox';
import Card from '@/components/Card';
import ForSaleMetrics from '@/components/ForSaleMetrics';
import RentalMetrics from '@/components/RentalMetrics';
import NewConstructionInsights from '@/components/NewConstructionInsights';
import PriceFeed from '@/components/PriceFeed';
import MetricsFilters from '@/components/MetricsFilters';

const MarketInsightsDashboard = ({ parclId }: { parclId: string }) => {
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMetrics = async () => {
      setLoading(true);
      try {
        const data = await fetchMarketMetrics(parclId);
        setMetrics(data);
      } catch (error) {
        console.error('Error fetching market metrics:', error);
      } finally {
        setLoading(false);
      }
    };
    loadMetrics();
  }, [parclId]);

  const handleFilterChange = (filter: string) => {
    // Implement filtering logic
    console.log('Filter changed:', filter);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      <MetricsFilters onFilterChange={handleFilterChange} />
      <BentoBox>
        <Card title="For Sale Metrics">
          <ForSaleMetrics metrics={metrics?.for_sale} />
        </Card>
        <Card title="Rental Metrics">
          <RentalMetrics metrics={metrics?.rentals} />
        </Card>
        <Card title="New Construction Insights">
          <NewConstructionInsights metrics={metrics?.new_constructions} />
        </Card>
        <Card title="Price Feed">
          <PriceFeed metrics={metrics?.price_feed} />
        </Card>
      </BentoBox>
    </div>
  );
};

export default MarketInsightsDashboard;