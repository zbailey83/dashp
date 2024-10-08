import MarketInsightsDashboard from '@/components/MarketInsightsDashboard';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Market Insights Dashboard</h1>
      <MarketInsightsDashboard parclId="YOUR_PARCL_ID" />
    </div>
  );
}