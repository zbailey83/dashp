import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface MetricsFiltersProps {
  onFilterChange: (filter: string) => void;
}

const MetricsFilters: React.FC<MetricsFiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <Select onValueChange={onFilterChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="single-family">Single Family</SelectItem>
          <SelectItem value="condo">Condo</SelectItem>
          <SelectItem value="townhouse">Townhouse</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={() => onFilterChange('apply')}>Apply Filters</Button>
    </div>
  );
};

export default MetricsFilters;