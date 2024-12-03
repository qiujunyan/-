'use client';

import { useState } from 'react';
import { FilterSelector } from '@/components/FilterSelector';
import { AdjustmentSlider } from '@/components/AdjustmentSlider';
import { ColorPicker } from '@/components/ColorPicker';
import { AdjustmentValues, Filter } from '@/types';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>('white');
  const [adjustments, setAdjustments] = useState<AdjustmentValues>({
    saturation: 50,
    brightness: 50,
    color: '#ffffff',
  });

  const handleFilterSelect = (filter: Filter) => {
    setSelectedFilter(filter.id);
    setAdjustments((prev) => ({ ...prev, color: filter.color }));
  };

  const handleCapture = () => {
    // TODO: 实现拍照功能
    console.log('Capture photo with current settings:', { selectedFilter, adjustments });
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* 预览区域 */}
      <div 
        className="w-full aspect-square bg-white"
        style={{
          filter: `brightness(${adjustments.brightness}%) saturate(${adjustments.saturation}%)`,
          backgroundColor: adjustments.color,
        }}
      />

      {/* 控制面板 */}
      <div className="bg-white rounded-t-3xl -mt-6 relative z-10 shadow-lg">
        <FilterSelector
          selectedFilter={selectedFilter}
          onFilterSelect={handleFilterSelect}
        />
        
        <div className="space-y-4 pt-4">
          <ColorPicker
            color={adjustments.color}
            onChange={(color) => setAdjustments((prev) => ({ ...prev, color }))}
          />
          
          <AdjustmentSlider
            label="饱和度"
            value={adjustments.saturation}
            onChange={(saturation) => setAdjustments((prev) => ({ ...prev, saturation }))}
          />
          
          <AdjustmentSlider
            label="亮度"
            value={adjustments.brightness}
            onChange={(brightness) => setAdjustments((prev) => ({ ...prev, brightness }))}
          />
        </div>

        {/* 拍照按钮 */}
        <div className="p-4">
          <button
            onClick={handleCapture}
            className="w-full bg-blue-500 text-white py-3 rounded-full font-medium"
          >
            拍照
          </button>
        </div>
      </div>
    </main>
  );
} 