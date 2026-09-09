import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/sample' },
  { icon: 'ri-pulse-line', label: 'デマンド監視', path: '/sample/demand' },
  { icon: 'ri-settings-3-line', label: '設備管理', path: '/sample/equipment' },
  { icon: 'ri-file-chart-line', label: 'レポート', path: '/sample/report' },
  { icon: 'ri-settings-line', label: '設定', path: '/sample/settings' },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);

  const handleNav = (path: string) => {
    setActive(path);
    navigate(path);
  };

  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-100 flex flex-col py-6 px-3 shrink-0 shadow-sm">
      <div className="mb-8 px-3">
        <span className="text-gray-800 font-bold text-lg tracking-widest font-['Orbitron']">SPAQ</span>
        <span className="text-teal-500 font-bold text-lg tracking-widest font-['Orbitron']"> CORE</span>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = active === item.path;
          return (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap w-full text-left ${
                isActive
                  ? 'bg-teal-50 text-teal-600 border-l-2 border-teal-500'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className={`${item.icon} text-base`}></i>
              </span>
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="mt-auto px-3 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
            <i className="ri-user-line text-teal-600 text-sm"></i>
          </div>
          <div>
            <p className="text-gray-700 text-xs font-medium">管理者</p>
            <p className="text-gray-400 text-xs">admin@spaq.co.jp</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
