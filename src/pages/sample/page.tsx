import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DemandGauge from './components/DemandGauge';
import KpiCards from './components/KpiCards';
import DemandChart from './components/DemandChart';
import EquipmentBar from './components/EquipmentBar';
import PowerFlowCard from './components/PowerFlowCard';
import CostSummary from './components/CostSummary';
import AlertList from './components/AlertList';

export default function SampleDashboard() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-['Noto_Sans_JP']">
      <meta name="robots" content="noindex, nofollow" />
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Page title */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-800 text-lg font-bold">デマンド監視システム</h2>
              <p className="text-gray-400 text-xs mt-0.5">電力データ分析ダッシュボード（デモ）</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="bg-white border border-gray-200 text-gray-600 text-xs rounded-lg px-3 py-2 cursor-pointer focus:outline-none shadow-sm">
                <option>本日</option>
                <option>今週</option>
                <option>今月</option>
              </select>
              <button className="flex items-center gap-2 bg-teal-500/10 border border-teal-400/40 text-teal-600 text-xs rounded-lg px-3 py-2 hover:bg-teal-500/20 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-download-line text-sm"></i>
                レポート出力
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-600 bg-white border border-gray-200 rounded-lg p-3">操作イメージを示す架空のサンプルデータです。実際の案件の計測値・設定値・導入成果ではありません。</p>

          {/* Top row: Gauge + KPI */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5 bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col items-center justify-center">
              <DemandGauge current={467} contract={500} />
            </div>
            <div className="col-span-7">
              <KpiCards />
            </div>
          </div>

          {/* Demand chart */}
          <DemandChart />

          {/* Equipment + Power Flow */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
              <EquipmentBar />
            </div>
            <div className="col-span-5">
              <PowerFlowCard />
            </div>
          </div>

          {/* Cost + Alerts */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
              <CostSummary />
            </div>
            <div className="col-span-5">
              <AlertList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
