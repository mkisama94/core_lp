export interface CaseItem {
  id: string;
  slug: string;
  type: 'actual' | 'simulation'; // actual = 実測, simulation = 試算
  typeLabel: string;
  title: string;
  clientName: string;
  industry: string;
  industryLabel: string;
  facilityScale: string;
  equipment: {
    contractPower: string;
    batteryCapacity: string;
    pvCapacity?: string;
    controller: string;
    other: string;
  };
  period: string;
  summary: string;
  challenge: string;
  solution: string;
  verifiedResults: {
    label: string;
    value: string;
    note: string;
  }[];
  assumptions?: string;
  technicalHighlights: string[];
}

export const CASES: CaseItem[] = [
  {
    id: 'case-metal-manufacturing',
    slug: 'union-machinery-actual',
    type: 'actual',
    typeLabel: '実測',
    title: '精密金属切削工場における30分時限制御とスタートアップ先行放電の実証',
    clientName: '工作機械・部品製造工場（ユニオンマシナリ様検証拠点）',
    industry: 'manufacturing',
    industryLabel: '製造業・金属加工',
    facilityScale: '高圧受電工場（契約電力 500kW級）',
    equipment: {
      contractPower: '契約デマンド目標 399kW（計測誤差補正後360kW設定）',
      batteryCapacity: '産業用リン酸鉄リチウム蓄電池 62.5kWh / PCS 50kW',
      controller: 'SPAQ CORE 産業用コントローラー（現場エッジ設置）',
      other: 'キュービクル内受電CT、デマンド監視装置（R002/R004通信）、集中空調制御'
    },
    period: '2026年7月〜8月（実証運転およびドライラン試験）',
    summary: '突発的な大型工作機械の同時起動によるデマンド超過を防ぐため、30分時限の冒頭スタートアップ放電と需要復元アルゴリズムを実機投入。ピーク超過ゼロを実証しました。',
    challenge: '大型マシニングセンタや切削プレスの稼働が重なると、30分時限の開始直後に受電電力が急上昇。従来のデマンド監視装置では警報発報から人の手動操作やエアコン遮断までのタイムラグがあり、契約電力を超過するリスクを抱えていた。',
    solution: '時限開始0:15から最大2分45秒間の「スタートアップ放電」を自律実行し、受電電力を安全目標値（360kW）以下に維持。さらに蓄電池放電による見かけの需要減少をEMS実出力から逆算して本来の需要を復元する「反実仮想判定」を実装。時限後半（27分以降）の余剰枠でラストスパート充電を行い、次時限に向けたSOC回復を両立させた。',
    verifiedResults: [
      {
        label: '実証期間中のデマンドピーク超過',
        value: '0 回',
        note: '実測：突発負荷発生時も360kWの安全目標範囲内で自律抑制'
      },
      {
        label: '放電開始の応答速度',
        value: '3 秒以内',
        note: '実測：時限判定フラグ検知からPCS指令発行・放電立ち上がりまで'
      },
      {
        label: '次時限開始時SOC回復率',
        value: '平均 88%',
        note: '実測：ラストスパート充電により時限後半の残存電力量を安全回収'
      }
    ],
    technicalHighlights: [
      '時限冒頭の純粋無制御計測（0:00〜0:15）とスタートアップ放電（0:15〜3:00）のシーケンス制御',
      '蓄電池放電による自己減衰を防ぐ「放電前現在需要・予測需要」の復元演算',
      '単一ライター保護によるModbus競合書き込み防止と安全停止フェールセーフの実装'
    ]
  },
  {
    id: 'case-logistics-cold-storage',
    slug: 'cold-logistics-simulation',
    type: 'simulation',
    typeLabel: '試算',
    title: '大型冷凍冷蔵物流拠点における太陽光自家消費と蓄電池ハイブリッド制御試算',
    clientName: '広域冷凍冷蔵物流センター（モデル試算）',
    industry: 'logistics',
    industryLabel: '物流・冷凍倉庫',
    facilityScale: '高圧受電施設（契約電力 800kW）',
    equipment: {
      contractPower: '契約電力 800kW（目標デマンド 720kW）',
      batteryCapacity: '定置型蓄電池 250kWh / PCS 150kW',
      pvCapacity: '屋根置き太陽光発電 200kW',
      controller: 'SPAQ CORE Cloud & Edge EMS',
      other: '大型スクリュー冷凍機 4基、入出庫ドック設備'
    },
    period: '年間シミュレーション（過去365日の実30分デマンド実績値ベース）',
    summary: '夏場の日中ピークと冷凍機のデフロスト（除霜）運転が重なる時間帯のデマンド上昇に対し、太陽光予測と蓄電池の協調放電を行った場合の電力コスト抑制効果を試算しました。',
    challenge: '外気温上昇に伴う冷凍機の全負荷運転と、定期的な除霜ヒーター稼働が重なると短時間でデマンドが急伸。太陽光発電の天候変動による出力急減も重なり、ピーク予測が困難であった。',
    solution: '気象予報APIと直近の発電実績から日射量を先読みし、発電低下が予測される時間帯に蓄電池放電をスタンバイ。冷凍機の運転パターンを学習してデフロストと蓄電池放電タイミングを同期させるモデルを構築。',
    verifiedResults: [
      {
        label: '年間最大デマンド抑制（試算見通し）',
        value: '-85 kW',
        note: '試算：800kW契約から715kWへの契約電力引き下げ余地'
      },
      {
        label: '基本料金削減見込み',
        value: '約 180 万円/年',
        note: '試算：東京電力エリア高圧電力A基本料金単価に基づく試算値'
      },
      {
        label: '太陽光自家消費率向上',
        value: '+12 %',
        note: '試算：昼間の余剰電力を蓄電池へ充電し夕方ピークへシフト'
      }
    ],
    assumptions: '※本事例は、過去1年間の30分受電データおよび公表電気料金単価に基づくシミュレーション試算です。実際の運用環境、気象条件、設備仕様により効果は変動します。',
    technicalHighlights: [
      '日射量予測と冷凍機除霜スケジュールを考慮した多変数デマンド予測',
      '太陽光逆潮流防止と充電余力枠の動的最適化',
      'シャドーモードシミュレータによる過去実績データとの突合検証'
    ]
  },
  {
    id: 'case-chemical-continuous-plant',
    slug: 'chemical-plant-simulation',
    type: 'simulation',
    typeLabel: '試算',
    title: '24時間連続稼働化学プラントにおける無停止安全フェールセーフと電力平準化試算',
    clientName: '機能性化学品製造工場（モデル試算）',
    industry: 'chemical',
    industryLabel: '素材・化学製造',
    facilityScale: '特別高圧受電プラント（契約電力 2,000kW）',
    equipment: {
      contractPower: '契約電力 2,000kW',
      batteryCapacity: '産業用コンテナ型蓄電池 1,000kWh / PCS 500kW',
      controller: 'SPAQ CORE Fault-Tolerant System',
      other: '連続攪拌反応炉、蒸気ボイラー、高圧コンプレッサー'
    },
    period: '年間シミュレーション（操業停止リスクゼロを前提とする設計試算）',
    summary: '絶対に生産ラインを止められない連続プロセス工場において、万一の通信遮断時でも自律安全待機へ移行する二重フェールセーフを備えた電力平準化の成立性を検証しました。',
    challenge: 'デマンドを抑制したい一方で、生産ラインの停止や制御装置の暴走は数千万円単位の損失に直結するため、外付けコントローラーの導入に対して極めて慎重な安全要求があった。',
    solution: 'SPAQ CORE外部システム要求仕様書（COM-01〜COM-25）に基づき、単一ライター保護、ハートビート監視、通信途絶時の即座安全待機移行、13ヶ月不揮発ログ保存を設計。生産設備に影響を与えない蓄電池単独の受電電力平準化スキームを構築。',
    verifiedResults: [
      {
        label: '安全停止フェールセーフ移行時間',
        value: '500 ms以内',
        note: '試算・ベンチテスト：通信断検知から安全待機指令完了まで'
      },
      {
        label: '年間ピークカット電力量',
        value: '約 120 MWh',
        note: '試算：夏季・冬季の高負荷時間帯における計画放電'
      },
      {
        label: '制御競合エラー発生率',
        value: '0 件',
        note: '設計仕様：単一ライターアーキテクチャによる競合書込み完全防止'
      }
    ],
    assumptions: '※本事例は、外部システム要求仕様ドラフトに基づくフェールセーフ動作要件および電力データ試算です。実機導入にあたっては現場での事前プロトコル整合試験が必要です。',
    technicalHighlights: [
      '通信断・異常値検知時のフェールセーフ自律待機移行プロトコル',
      'すべての状態遷移に理由コード（Reason Code）を付与する監査ログ機構',
      '13ヶ月間改ざん不可の一次証跡ローカルバッファリング'
    ]
  }
];
