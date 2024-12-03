import { Filter } from '@/types';

const filters: Filter[] = [
  { id: 'pink', name: '少女感', color: '#ffb6c1', className: 'bg-pink-200' },
  { id: 'purple', name: '磨皮感', color: '#e6e6fa', className: 'bg-purple-200' },
  { id: 'blue', name: '冷白皮', color: '#f0f8ff', className: 'bg-blue-200' },
  { id: 'white', name: '百搭光', color: '#ffffff', className: 'bg-white' },
  { id: 'yellow', name: '小鸡黄', color: '#ffffe0', className: 'bg-yellow-200' },
];

interface FilterSelectorProps {
  selectedFilter: string;
  onFilterSelect: (filter: Filter) => void;
}

interface Filter {
  id: string;
  color: string;
}

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