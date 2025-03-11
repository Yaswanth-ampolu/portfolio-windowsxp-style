import React from 'react';
import { Rnd } from 'react-rnd';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
}

const Window: React.FC<WindowProps> = ({ title, icon, children, onClose }) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 400,
        height: 300,
      }}
      minWidth={200}
      minHeight={160}
      className="rounded-lg overflow-hidden shadow-xl"
    >
      <div className="flex flex-col h-full bg-[#ECE9D8] border border-[#0054E3]">
        <div className="bg-gradient-to-r from-[#0054E3] to-[#2E8AEA] px-2 py-1 flex items-center justify-between">
          <div className="flex items-center text-white">
            {icon && <span className="mr-2">{icon}</span>}
            <span className="font-semibold">{title}</span>
          </div>
          <div className="flex space-x-1">
            <button className="hover:bg-[#3B91F2] p-1 rounded">
              <Minus className="w-4 h-4 text-white" />
            </button>
            <button className="hover:bg-[#3B91F2] p-1 rounded">
              <Square className="w-4 h-4 text-white" />
            </button>
            <button className="hover:bg-[#DC3545] p-1 rounded" onClick={onClose}>
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        <div className="flex-1 p-4">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;