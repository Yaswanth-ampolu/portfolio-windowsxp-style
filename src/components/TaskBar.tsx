import React from 'react';

interface TaskBarProps {
  activeWindows: string[];
  isStartMenuOpen: boolean;
  onStartClick: () => void;
}

const TaskBar: React.FC<TaskBarProps> = ({ activeWindows, isStartMenuOpen, onStartClick }) => {
  return (
    <div className="h-10 bg-gradient-to-r from-[#245edb] to-[#3f8cf3] border-t border-[#6bafff] flex items-center px-1 fixed bottom-0 w-full">
      <button
        onClick={onStartClick}
        className={`flex items-center px-2 py-1 rounded ${
          isStartMenuOpen ? 'bg-[#1d4aa1]' : 'hover:bg-[#1d4aa1]'
        }`}
      >
        <img 
          src="https://icons.iconarchive.com/icons/tatice/cristal-intense/128/Windows-icon.png" 
          alt="Start"
          className="w-6 h-6 mr-1"
        />
        <span className="text-white font-semibold">Start</span>
      </button>
      
      <div className="flex-1 flex items-center px-1">
        {activeWindows.map((window) => (
          <button
            key={window}
            className="px-2 py-1 bg-[#2255c9] text-white mx-1 text-sm rounded hover:bg-[#1d4aa1]"
          >
            {window}
          </button>
        ))}
      </div>
      
      <div className="px-2 py-1 bg-[#2255c9] text-white rounded">
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default TaskBar;