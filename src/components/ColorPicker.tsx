interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <div className="px-4 py-2">
      <label className="text-sm block mb-2">自定义颜色</label>
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 rounded cursor-pointer"
      />
    </div>
  );
} 