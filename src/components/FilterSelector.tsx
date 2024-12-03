import { Filter } from '@/types';

interface FilterSelectorProps {
  selectedFilter: string;
  onFilterSelect: (filter: Filter) => void;
}

interface Filter {
  id: string;
  name: string;
  color: string;
  className: string;
}

export function FilterSelector({ selectedFilter, onFilterSelect }: FilterSelectorProps) {
  const filters: Filter[] = [
    { id: 'white', name: '百搭光', color: '#ffffff', className: 'bg-white' },
    { id: 'warm', name: '暖光', color: '#ffebcd', className: 'bg-orange-50' },
    { id: 'cool', name: '冷光', color: '#f0f8ff', className: 'bg-blue-50' },
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