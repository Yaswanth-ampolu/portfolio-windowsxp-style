import React from 'react';

interface StartMenuProps {
  onItemClick: (id: string) => void;
  onClose: () => void;
}

interface MenuItem {
  id: string;
  icon: string;
  label: string;
  description?: string;
}

const StartMenu: React.FC<StartMenuProps> = ({ onItemClick, onClose }) => {
  const menuItems: MenuItem[] = [
    {
      id: 'about',
      icon: 'https://icons.iconarchive.com/icons/hopstarter/3d-cartoon-vol3/128/Windows-Messenger-icon.png',
      label: 'About Me',
      description: 'Learn more about me'
    },
    {
      id: 'experience',
      icon: 'https://icons.iconarchive.com/icons/saki/nuoveXT-2/128/HD-Windows-icon.png',
      label: 'Experience',
      description: 'Professional experience'
    },
    {
      id: 'projects',
      icon: 'https://icons.iconarchive.com/icons/hopstarter/mac-folders/128/Blue-Windows-icon.png',
      label: 'Projects',
      description: 'View my projects'
    },
    {
      id: 'contact',
      icon: 'https://icons.iconarchive.com/icons/dembsky/mail/128/mail-shelf-icon.png',
      label: 'Contact',
      description: 'Get in touch'
    }
  ];

  const handleItemClick = (id: string) => {
    onItemClick(id);
    onClose();
  };

  return (
    <div 
      className="absolute bottom-10 left-0 w-80 bg-[#ECE9D8] border-2 border-[#0054E3] rounded-tr-lg shadow-xl"
      style={{ maxHeight: 'calc(100vh - 48px)' }}
    >
      <div className="bg-gradient-to-r from-[#0054E3] to-[#2E8AEA] p-2 flex items-center">
        <img 
          src="https://icons.iconarchive.com/icons/tatice/cristal-intense/128/Windows-icon.png"
          alt="User"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <span className="text-white font-semibold ml-2">Yaswanth Ampolu</span>
      </div>
      
      <div className="p-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center p-2 hover:bg-[#316AC5] hover:text-white rounded transition-colors group"
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.icon} alt={item.label} className="w-8 h-8" />
            <div className="ml-2 text-left">
              <div className="font-semibold">{item.label}</div>
              {item.description && (
                <div className="text-xs group-hover:text-white/90">{item.description}</div>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="border-t border-gray-300 p-2">
        <button 
          className="w-full flex items-center p-2 hover:bg-[#316AC5] hover:text-white rounded"
          onClick={onClose}
        >
          <span className="font-semibold">Close</span>
        </button>
      </div>
    </div>
  );
};

export default StartMenu;