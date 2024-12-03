interface AdjustmentSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function AdjustmentSlider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}: AdjustmentSliderProps) {
  return (
    <div className="flex flex-col gap-2 px-4 py-2">
      <div className="flex justify-between">
        <label className="text-sm">{label}</label>
        <span className="text-sm">{value}%</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
} 