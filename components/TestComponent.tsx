'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Props {
  title: string;
  initialCount?: number;
  className?: string;
}

const TestComponent: React.FC<Props> = ({ 
  title, 
  initialCount = 0, 
  className 
}) => {
  const [count, setCount] = useState(initialCount);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  
  return (
    <div className={cn(
      'p-6 bg-white rounded-lg shadow-md border border-gray-200',
      className
    )}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          aria-label="Decrease count"
        >
          <Minus size={16} />
        </button>
        
        <span className="text-3xl font-mono font-bold min-w-[60px] text-center">
          {count}
        </span>
        
        <button
          onClick={increment}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          aria-label="Increase count"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <p className="mt-4 text-sm text-gray-600">
        Click the buttons to change the counter value
      </p>
    </div>
  );
};

export default TestComponent;