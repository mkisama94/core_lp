export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  seriesName: string;
  category: 'facility' | 'datacenter';
  categoryLabel: string;
  status: 'available' | 'planning' | 'verifying';
  statusLabel: string;
  headline: string;
  summary: string;
  targetFacility: string[];
  challenges: string[];
  coreResponsibility: string[];
  partnerResponsibility: string[];
  keyFeatures: {
    title: string;
    description: string;
    tag: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaType: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'spaq-core-facility',
    slug: 'spaq-core',
    name: 'SPAQ CORE',
    seriesName: 'COREシリーズ 施設・産業向け',
    category: 'facility',
    categoryLabel: '施設・産業向け',
    status: 'available',
    statusLabel: '提供中',
    headline: '予測と制御をつなぐ、電力運用のコア。',
    summary: '電力需要と設備の状態を捉え、蓄電池の充放電を判断。現場に合わせた電力運用を支えます。',
    targetFacility: [
      '工作機械・切削ラインを有する金属・部品加工工場',
      '冷凍冷蔵・搬送設備が常時稼働する物流倉庫',
      '空調と製造ラインが複雑に連動する中大規模産業施設',
      '太陽光自家消費と蓄電池を併設する環境先進拠点'
    ],
    challenges: [
      '30分デマンド時限のピーク超過による契約電力・基本料金の上昇リスク',
      'デマンドコントローラーと蓄電池PCSの連携不全（警報後の放電遅れ）',
      '空調や生産設備を安易に遮断できず、作業環境や生産性に影響が出る懸念',
      '自社設備の制御履歴や根拠データがブラックボックス化している'
    ],
    coreResponsibility: [
      '30分時限内の需要推移と安全目標（デマンド目標・安全余裕）のリアルタイム演算',
      'スタートアップ放電（0:15〜3:00）による受電電力抑制とデマコン認識の同期',
      '通常制御区間における需要トレンドに応じた充放電判断',
      'ラストスパート充電（27:00〜29:45）による安全な残存電力量の最大活用',
      '境界ガード（29:45〜30:00）による時限跨ぎの充電超過防止',
      '通信断・値異常時の安全側移行と13ヶ月一次証跡ログの自律保存'
    ],
    partnerResponsibility: [
      '受電キュービクル内の計測器・CTによる正確な受電電力の計測',
      'デマンドコントローラー（R002/R004等）からの正確なパルス・需要データの公開',
      '蓄電池PCS・BMUによる安全保護（過充電・過放電防止、温度保護）の装置内完結',
      '空調機・製造ライン側の自律的な非常停止・インターロック機構'
    ],
    keyFeatures: [
      {
        title: '30分時限制御スケジュール',
        description: '電力会社の30分検針サイクルに完全に一致。基準計測→スタートアップ放電→通常制御→ラストスパート充電→境界ガードの5段階で運用。',
        tag: '特許出願中コア技術'
      },
      {
        title: '放電前需要の復元（反実仮想）',
        description: '蓄電池が放電したことで受電電力が下がり、制御が自己減衰してしまわないよう、EMS実放電量を加算して本来の需要を復元・判定。',
        tag: '判定アルゴリズム'
      },
      {
        title: '単一ライター保護と責任分界',
        description: 'EMS制御用レジスタの書込み主体をSPAQ COREに一意化。他装置との競合書込みを防ぎ、予期せぬ動作を完全に排除。',
        tag: '安全設計'
      },
      {
        title: 'シャドーモードと監査ログ',
        description: '実機を動かさずに予測制御性能を検証可能。判断理由コード（Reason Code）を付与し、すべての制御判断を13ヶ月追跡可能。',
        tag: '検証・追跡性'
      }
    ],
    specifications: [
      { label: '適用対象', value: '高圧・特別高圧受電施設（契約電力100kW〜数MW規模）' },
      { label: '対応設備', value: '産業用蓄電池（PCS/BMU）、デマンド監視装置、太陽光パワコン、各種空調' },
      { label: '通信インターフェース', value: 'Modbus TCP / RTU、RS-485、Ethernet、ECHONET Lite等の産業プロトコル' },
      { label: '制御周期', value: '標準1秒〜5秒周期の高速リアルタイム監視・指令' },
      { label: 'ログ保持期間', value: '本体内不揮発メモリに最低13ヶ月のイベント・制御証跡を保持' },
      { label: '安全フェールセーフ', value: '通信断・ハートビート途絶時は即座に自律待機モードへ安全移行' }
    ],
    faq: [
      {
        question: '既設のデマンドコントローラーや蓄電池とも連携できますか？',
        answer: 'はい。標準的な産業通信プロトコル（Modbusや接点信号等）を備えた主要メーカーのデマンド監視装置・蓄電池PCSと接続実績があります。事前に通信仕様と責任分界を確認いたします。'
      },
      {
        question: '通信回線が一時的に途切れた場合、現場設備はどうなりますか？',
        answer: '通信断や上位系異常を検知した瞬間、SPAQ COREは安全側待機モード（充電禁止・必要最小限の自律安全放電等）に移行し、設備トラブルを防止します。ログは装置内に13ヶ月蓄積され、復旧後に追跡可能です。'
      },
      {
        question: '導入にあたって生産ラインや業務を止める必要がありますか？',
        answer: '通常、通信配線工事やCT接続時の短時間点検を除き、長期的な生産停止は不要です。シャドーモードによる事前データ検証を行ってから本番制御へ移行します。'
      }
    ],
    ctaText: '施設・産業向け導入を相談する',
    ctaType: 'facility'
  },
  {
    id: 'spaq-core-datacenter',
    slug: 'spaq-core-dc',
    name: 'AIデータセンターEMS',
    seriesName: 'COREシリーズ 次世代構想',
    category: 'datacenter',
    categoryLabel: 'データセンター向け',
    status: 'planning',
    statusLabel: '計画中',
    headline: 'AIデータセンターの電力運用を見据えた次世代EMS構想。',
    summary: '高密度GPUクラスタの急峻な電力変動と受電制約に対応するEMSを計画中。施設構成や運用要件に応じた共同検討を受け付けています。',
    targetFacility: [
      '次世代AIコンピュート基盤を収容するハイパースケール/コロケーションデータセンター',
      '受電容量の制約下でGPU稼働率を最大化したいAIクラウド事業者',
      'オンサイト再エネ・蓄電池とデータセンターの複合運用を計画する開発事業者'
    ],
    challenges: [
      'AI推論・学習ワークロードに起因するミリ秒〜分単位の極端な電力需要スパイク',
      '特別高圧系統の受電容量上限と契約電力超過に伴うリスク',
      '冷却設備とIT負荷の複合的な電力マネジメントの高度化'
    ],
    coreResponsibility: [
      '施設構成・受電条件に応じた電力バッファリング要件の事前整理',
      'GPU負荷変動と蓄電池・受電電力の協調制御モデルの共同検討',
      '特別高圧受電設備および非常用発電・UPSとの責任分界の策定'
    ],
    partnerResponsibility: [
      '施設電力構成および受電トポロジーの提供',
      'ITラック/GPUクラスタの電力計測テレメトリの共有'
    ],
    keyFeatures: [
      {
        title: '急峻な負荷変動への適応構想',
        description: '従来の工場とは異なる、短時間での急激な負荷増減に対応するための先読みアルゴリズムと蓄電池応答制御の検討。',
        tag: '研究開発中'
      },
      {
        title: '系統受電制約下での稼働平準化',
        description: '限られた契約電力枠内で、AIコンピュートのピークをカットしつつ安全に電力を供給するバッファリング構想。',
        tag: 'アーキテクチャ検討'
      }
    ],
    specifications: [
      { label: '提供ステータス', value: '計画中（仕様確定前の共同検討・ヒアリングフェーズ）' },
      { label: '検討対象規模', value: '数MW〜数十MW規模のAIデータセンター施設' },
      { label: '協議可能内容', value: '受電設備要件、蓄電池容量設計、協調制御プロトコル、実証計画' }
    ],
    faq: [
      {
        question: 'すでに製品として販売されていますか？',
        answer: 'いいえ。AIデータセンターEMSは現在「計画中」の製品構想です。確定した仕様や性能値を公表しているものではなく、事業者の要件に応じた共同検討・実証パートナーシップを受付しています。'
      },
      {
        question: 'どのような内容から相談できますか？',
        answer: '新設または増設を計画中のデータセンターにおける受電制約、蓄電池の併設検討、運用シミュレーションなど、構想段階から技術責任者とディスカッション可能です。'
      }
    ],
    ctaText: 'データセンターEMSの構想を相談する',
    ctaType: 'datacenter'
  }
];
