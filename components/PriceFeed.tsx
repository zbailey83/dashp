import React from 'react';

interface PriceFeedProps {
  metrics: any;
}

const PriceFeed: React.FC<PriceFeedProps> = ({ metrics }) => {
  if (!metrics) {
    return <div>No data available</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Current Home Price:</span>
        <span className="text-lg">${metrics.current_home_price.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold">Current Rental Price:</span>
        <span className="text-lg">${metrics.current_rental_price.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold">Market Volatility:</span>
        <span className="text-lg">{metrics.volatility.toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default PriceFeed;