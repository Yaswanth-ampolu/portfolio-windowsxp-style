import React from 'react';

interface DesktopProps {
  children: React.ReactNode;
  onIconClick: (id: string) => void;
}

interface DesktopIcon {
  id: string;
  icon: string;
  label: string;
}

const Desktop: React.FC<DesktopProps> = ({ children, onIconClick }) => {
  const desktopIcons: DesktopIcon[] = [
    { 
      id: 'about', 
      icon: 'https://icons.iconarchive.com/icons/hopstarter/3d-cartoon-vol3/128/Windows-Messenger-icon.png',
      label: 'About Me' 
    },
    { 
      id: 'experience', 
      icon: 'https://icons.iconarchive.com/icons/saki/nuoveXT-2/128/HD-Windows-icon.png',
      label: 'Experience' 
    },
    { 
      id: 'projects', 
      icon: 'https://icons.iconarchive.com/icons/hopstarter/mac-folders/128/Blue-Windows-icon.png',
      label: 'Projects' 
    },
    { 
      id: 'contact', 
      icon: 'https://icons.iconarchive.com/icons/dembsky/mail/128/mail-shelf-icon.png',
      label: 'Contact' 
    }
  ];

  return (
    <div className="flex-1 relative p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 w-24">
        {desktopIcons.map((icon) => (
          <button
            key={icon.id}
            className="flex flex-col items-center text-white hover:bg-blue-500/20 rounded p-2 transition-colors group"
            onDoubleClick={() => onIconClick(icon.id)}
          >
            <img 
              src={icon.icon} 
              alt={icon.label}
              className="w-12 h-12 mb-1 group-hover:scale-105 transition-transform"
            />
            <span className="text-xs text-center font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] bg-blue-500/20 px-1 rounded">
              {icon.label}
            </span>
          </button>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Desktop;