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
    slug: 'manufacturing-a-actual',
    type: 'actual',
    typeLabel: '実測',
    title: '製造業A社における30分時限制御とスタートアップ先行放電の実証',
    clientName: '製造業A社（実証先企業）',
    industry: 'manufacturing',
    industryLabel: '製造業・金属加工',
    facilityScale: '高圧受電の製造施設（詳細非公開）',
    equipment: {
      contractPower: '実証先の受電条件に応じた目標値を設定（詳細非公開）',
      batteryCapacity: '産業用蓄電池・PCS（容量・出力の詳細は非公開）',
      controller: 'SPAQ CORE 産業用コントローラー（現場エッジ設置）',
      other: '受電計測器、デマンド監視装置、空調制御設備'
    },
    period: '実証運転・ドライラン試験期間（実施時期非公開）',
    summary: '突発的な大型工作機械の同時起動によるデマンド超過を防ぐため、30分時限の冒頭スタートアップ放電と需要復元アルゴリズムを実機投入。ピーク超過ゼロを実証しました。',
    challenge: '大型マシニングセンタや切削プレスの稼働が重なると、30分時限の開始直後に受電電力が急上昇。従来のデマンド監視装置では警報発報から人の手動操作やエアコン遮断までのタイムラグがあり、契約電力を超過するリスクを抱えていた。',
    solution: '時限の切替と需要上昇の兆候に応じて「スタートアップ放電」を自律実行し、受電電力を実証先に設定した安全目標値以下に維持。さらに蓄電池放電による見かけの需要減少をEMS実出力から逆算して本来の需要を復元する「反実仮想判定」を実装。時限内の残存余力を評価してラストスパート充電を行い、次時限に向けたSOC回復を両立させた。',
    verifiedResults: [
      {
        label: '実証期間中のデマンドピーク超過',
        value: '0 回',
        note: '実測：突発負荷発生時も設定した安全目標範囲内で自律抑制'
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
      '基準需要の観測と先行放電を組み合わせ、設備特性に応じて切り替えるシーケンス制御',
      '蓄電池放電による自己減衰を防ぐ「放電前現在需要・予測需要」の復元演算',
      '通信異常時に設備を保護する安全停止機能の実装'
    ]
  }
];
