import { Filter } from '@/types';

interface FilterSelectorProps {
  selectedFilter: string;
  onFilterSelect: (filter: Filter) => void;
}

export function FilterSelector({ selectedFilter, onFilterSelect }: FilterSelectorProps) {
  const filters: Filter[] = [
    { id: 'white', color: '#ffffff' },
    { id: 'warm', color: '#ffebcd' },
    { id: 'cool', color: '#f0f8ff' },
  ];

  return (
    <div className="flex gap-2 p-4 overflow-x-auto">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterSelect(filter)}
          className={`w-16 h-16 rounded-full ${selectedFilter === filter.id ? 'ring-2 ring-blue-500' : ''}`}
          style={{ backgroundColor: filter.color }}
        />
      ))}
    </div>
  );
}