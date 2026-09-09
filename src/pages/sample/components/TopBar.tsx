import { useState, useEffect } from 'react';

export default function TopBar() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (d: Date) =>
    `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;

  return (
    <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-md px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block"></span>
          <span className="text-orange-500 text-xs font-semibold">警告</span>
          <span className="text-gray-700 text-xs">契約超過注意</span>
        </div>
        <span className="text-gray-400 text-xs">残り時間 <span className="text-orange-500 font-bold">12分</span></span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-xs">{formatDate(now)}</span>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
          <i className="ri-notification-3-line text-base"></i>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer">
          <i className="ri-refresh-line text-base"></i>
        </button>
      </div>
    </header>
  );
}
