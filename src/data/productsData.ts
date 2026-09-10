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
    headline: '蓄電池を賢く動かし、電力ピークを抑える。',
    summary: '工場・施設向けのエネルギーマネジメントシステム（EMS）。電力需要を先読みして蓄電池の充放電を自動で調整し、ピーク抑制と日々の運用管理を支えます。',
    targetFacility: [
      '工作機械・切削ラインを有する金属・部品加工工場',
      '冷凍冷蔵・搬送設備が常時稼働する物流倉庫',
      '空調と製造ラインが複雑に連動する中大規模産業施設',
      '太陽光発電と蓄電池を併設し、自家消費を進める施設'
    ],
    challenges: [
      '30分デマンド時限のピーク超過による契約電力・基本料金の上昇リスク',
      '警報後に蓄電池の放電が間に合わず、ピークへの対応が遅れる',
      '空調や生産設備を安易に遮断できず、作業環境や生産性に影響が出る懸念',
      '設備がいつ、なぜ制御されたかを確認しづらい'
    ],
    coreResponsibility: [
      '電力使用量の見通しを把握し、施設の目標に合わせて充放電を判断',
      '需要の増加に先回りして放電し、不要な空調停止を抑制',
      '蓄電池を優先して活用し、不足する分を設備側の調整で補完',
      '電力に余裕がある範囲で充電し、次のピークへの備えを回復',
      '30分の区切りでも、必要な放電と設備の制御状態を引き継ぎ',
      '異常時の設備保護と、システム監査・原因調査に活用できる制御履歴の記録'
    ],
    partnerResponsibility: [
      '受電キュービクル内の計測器・CTによる正確な受電電力の計測',
      'デマンドコントローラーからの正確なパルス・需要データの公開',
      '蓄電池PCS・BMUによる安全保護（過充電・過放電防止、温度保護）の装置内完結',
      '空調機・製造ライン側の自律的な非常停止・インターロック機構'
    ],
    keyFeatures: [
      {
        title: '空調停止を抑える設備連携',
        description: '30分ごとの需要の変化に合わせ、蓄電池と設備を連携して制御。作業環境への影響を抑えながらピークに対応します。',
        tag: '特許出願中コア技術'
      },
      {
        title: '必要な放電を続ける需要把握',
        description: '蓄電池が補っている電力も含めて施設の需要を把握。受電電力の低下だけで放電を止めず、ピーク抑制に必要な対応を続けます。',
        tag: '判定アルゴリズム'
      },
      {
        title: '異常時の設備保護',
        description: '通信や計測の異常時は設備保護を優先して充放電を調整・停止。現場への影響を抑え、安全な運用を支えます。',
        tag: '安全設計'
      },
      {
        title: '導入前の検証と運用後の確認',
        description: '実機を動かさずに予測制御性能を事前検証。稼働後も判断根拠を記録し、システム監査での事実確認と運用の妥当性の説明を支援。',
        tag: '検証・追跡性'
      }
    ],
    specifications: [
      { label: '適用対象', value: '高圧・特別高圧受電施設（契約電力100kW〜数MW規模）' },
      { label: '対応設備', value: '産業用蓄電池（PCS/BMU）、デマンド監視装置、太陽光パワコン、各種空調' },
      { label: '通信インターフェース', value: 'Modbus TCP / RTU、RS-485、Ethernet、ECHONET Lite等の産業プロトコル' },
      { label: '制御周期', value: '設備の応答特性に応じたリアルタイム監視・指令' },
      { label: 'ログ保全', value: '判断根拠と制御履歴を保持し、システム監査の証跡確認・原因調査に活用' },
      { label: '異常時の設備保護', value: '通信異常時には安全な待機状態へ移行し、設備への影響を抑制' }
    ],
    faq: [
      {
        question: '既設のデマンドコントローラーや蓄電池とも連携できますか？',
        answer: 'はい。標準的な産業通信プロトコル（Modbusや接点信号等）を備えた主要メーカーのデマンド監視装置・蓄電池PCSと接続実績があります。事前に通信仕様と責任分界を確認いたします。'
      },
      {
        question: '通信回線が一時的に途切れた場合、現場設備はどうなりますか？',
        answer: '異常の状況に応じて充放電を調整・停止し、設備の保護を優先します。制御履歴を装置内に保持するため、復旧後に何が起きたかを確認し、原因調査に活用できます。'
      },
      {
        question: '導入にあたって生産ラインや業務を止める必要がありますか？',
        answer: '通常、通信配線工事やCT接続時の短時間点検を除き、長期的な生産停止は不要です。設備を制御せずに判断結果を確認する事前検証を行い、本番制御へ移行します。'
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
    summary: 'AI処理による急な電力変動に対応し、限られた受電容量を活用するEMSを計画中。施設の構成や運用上の課題に応じた共同検討を受け付けています。',
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
      '蓄電池で電力変動を補うために必要な容量や運用条件の整理',
      'GPU負荷変動と蓄電池・受電電力の協調制御モデルの共同検討',
      '特別高圧受電設備および非常用発電・UPSとの責任分界の策定'
    ],
    partnerResponsibility: [
      '施設内の電力設備と受電系統の構成情報の提供',
      'ITラック・GPU設備の電力使用データの共有'
    ],
    keyFeatures: [
      {
        title: '急な電力変動への対応構想',
        description: '従来の工場とは異なる、短時間での急激な負荷増減に対応するための先読みアルゴリズムと蓄電池応答制御の検討。',
        tag: '研究開発中'
      },
      {
        title: '限られた受電容量の活用',
        description: 'AI処理に伴う電力ピークを蓄電池で補い、受電容量の制約に合わせて施設を運用するための構想。',
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
