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
    summary: '大型工作機械の同時起動による需要増加に、蓄電池の先行放電で対応。施設の需要を継続して把握する制御を導入し、実証期間中のデマンドピーク超過が0回であることを確認しました。',
    challenge: '大型マシニングセンタや切削プレスの稼働が重なると、30分時限の開始直後に受電電力が急上昇。従来のデマンド監視装置では警報発報から人の手動操作やエアコン遮断までのタイムラグがあり、契約電力を超過するリスクを抱えていた。',
    solution: '30分の区切りや需要が増える兆候に合わせて先行放電し、受電電力を実証先の安全目標以下に維持しました。蓄電池が補っている電力も含めて施設の需要を把握することで、必要な放電を継続。電力に余裕がある間に充電し、次の需要増加への備えも回復させました。',
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
        label: '次の30分開始時の蓄電池残量',
        value: '平均 88%',
        note: '実測：電力に余裕がある時間帯に充電し、次の需要増加に備えた残量'
      }
    ],
    technicalHighlights: [
      '需要の観測と先行放電を組み合わせた、設備特性に応じた制御',
      '蓄電池の補完分を含めて需要を把握し、必要な放電を継続する判断',
      '通信異常時に設備を保護する安全停止機能の実装'
    ]
  }
];
