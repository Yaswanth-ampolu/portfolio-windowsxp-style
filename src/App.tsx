import React, { useState } from 'react';
import TaskBar from './components/TaskBar';
import Window from './components/Window';
import StartMenu from './components/StartMenu';
import Desktop from './components/Desktop';
import '98.css';

function App() {
  const [activeWindows, setActiveWindows] = useState<string[]>([]);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const toggleWindow = (windowId: string) => {
    if (activeWindows.includes(windowId)) {
      setActiveWindows(activeWindows.filter(id => id !== windowId));
    } else {
      setActiveWindows([...activeWindows, windowId]);
    }
  };

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col" 
         style={{
           backgroundImage: 'url("https://wallpaperaccess.com/full/90278.jpg")',
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <Desktop onIconClick={toggleWindow}>
        {activeWindows.includes('about') && (
          <Window
            title="About Me"
            icon={<img src="https://icons.iconarchive.com/icons/hopstarter/3d-cartoon-vol3/128/Windows-Messenger-icon.png" className="w-4 h-4" alt="About" />}
            onClose={() => toggleWindow('about')}
          >
            <div className="p-4">
              <h2 className="text-xl mb-4">Yaswanth Ampolu</h2>
              <p>A passionate developer focused on creating innovative solutions.</p>
            </div>
          </Window>
        )}

        {activeWindows.includes('experience') && (
          <Window
            title="Experience"
            icon={<img src="https://icons.iconarchive.com/icons/saki/nuoveXT-2/128/HD-Windows-icon.png" className="w-4 h-4" alt="Experience" />}
            onClose={() => toggleWindow('experience')}
          >
            <div className="p-4">
              <h2 className="text-xl mb-4">Professional Experience</h2>
              <div className="space-y-4">
                <div className="border p-3 rounded hover:bg-gray-50">
                  <h3 className="font-semibold">Work Experience 1</h3>
                  <p className="text-sm text-gray-600">Description of role and responsibilities</p>
                </div>
              </div>
            </div>
          </Window>
        )}

        {activeWindows.includes('projects') && (
          <Window
            title="Projects"
            icon={<img src="https://icons.iconarchive.com/icons/hopstarter/mac-folders/128/Blue-Windows-icon.png" className="w-4 h-4" alt="Projects" />}
            onClose={() => toggleWindow('projects')}
          >
            <div className="p-4">
              <h2 className="text-xl mb-4">My Projects</h2>
              <div className="space-y-4">
                <div className="border p-3 rounded hover:bg-gray-50">
                  <h3 className="font-semibold">Portfolio Website</h3>
                  <p className="text-sm text-gray-600">A Windows XP themed portfolio showcasing my work</p>
                </div>
              </div>
            </div>
          </Window>
        )}

        {activeWindows.includes('contact') && (
          <Window
            title="Contact Me"
            icon={<img src="https://icons.iconarchive.com/icons/dembsky/mail/128/mail-shelf-icon.png" className="w-4 h-4" alt="Contact" />}
            onClose={() => toggleWindow('contact')}
          >
            <div className="p-4">
              <h2 className="text-xl mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span>Email:</span>
                  <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/yaswanth-ampolu-a2b110238/" className="text-blue-600 hover:underline">Yaswanth Ampolu</a>
                </div>
              </div>
            </div>
          </Window>
        )}
      </Desktop>

      <TaskBar 
        activeWindows={activeWindows}
        isStartMenuOpen={isStartMenuOpen}
        onStartClick={toggleStartMenu}
      />

      {isStartMenuOpen && (
        <StartMenu onItemClick={toggleWindow} onClose={() => setIsStartMenuOpen(false)} />
      )}
    </div>
  );
}

export default App;