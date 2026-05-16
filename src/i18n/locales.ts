export const SUPPORTED_LOCALES = ["ja", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ja";

export function resolveLocale(value: string | undefined): Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value ?? "")
    ? (value as Locale)
    : DEFAULT_LOCALE;
}

/**
 * Build a locale-prefixed path.
 * ja → "/path"  |  en → "/en/path"
 */
export function localePath(lang: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "ja") return clean === "/" ? "/" : clean;
  return clean === "/" ? "/en/" : `/en${clean}`;
}

export const t = {
  ja: {
    siteName: "Stryde Studio",
    siteTitle: "Stryde Studio — 心地よい距離を、デザインする。",
    siteDescription:
      "Stryde Studioは、スマートフォンと人のあいだにちょうどよい余白をつくる、東京の小さなスタジオです。",
    nav: {
      products: "PRODUCTS",
      philosophy: "PHILOSOPHY",
      studio: "STUDIO",
      contact: "CONTACT",
    },
    hero: {
      meta: "( EST. 2026 / TOKYO )",
      headline1: "心地よい距離を、",
      headline2: "デザインする。",
      description:
        "Stryde Studioは、スマートフォンと人のあいだにちょうどよい余白をつくる、東京の小さなスタジオです。",
      cta: "VIEW PRODUCTS",
      index: [
        { k: "FOCUS", v: "集中" },
        { k: "TIME", v: "時間" },
        { k: "SLEEP", v: "睡眠" },
        { k: "DISTANCE", v: "距離" },
      ],
    },
    statement: {
      meta: "( STATEMENT )",
      lead1: "Quietly,",
      lead2: "with care.",
      sub1: "画面の外側にある時間を、",
      sub2: "もう一度デザインする。",
    },
    philosophy: {
      meta: "( PHILOSOPHY )",
      heading1: "スマホとの心地よい距離を、",
      heading2: "デザインする",
      body: [
        "わたしたちの毎日は、スマートフォンの中に閉じ込められがちです。集中したいとき、眠りたいとき、誰かと向き合いたいとき。",
        "Stryde Studioは、テクノロジーをやさしく制御することで、人と画面のあいだに「ちょうどよい余白」をつくります。",
        "ロックする、見守る、整える。小さな仕組みが、毎日の体験を少しずつ豊かにしていく。わたしたちは、そんなプロダクトをつくり続けます。",
      ],
      cta: "VIEW MORE",
    },
    products: {
      meta: "( PRODUCTS / 03 )",
      heading1: "あなたに合う、",
      heading2: "距離を。",
      lead: "猫・タスク・睡眠。\n場面ごとに「距離」を変える、3つの小さな道具。",
      cta: "VIEW MORE",
      preparing: "準備中",
      items: {
        NekoLock: {
          category: "FOCUS",
          description: "かわいい猫が見守ってくれる集中サポートアプリ。",
        },
        TodoLock: {
          category: "TASKS",
          description: "やるべきことを終えるまで、スマホをそっと預ける。",
        },
        SleepLock: {
          category: "SLEEP",
          description:
            "夜に画面を閉じ、朝にやさしく解いてくれる眠りの伴走者。",
        },
      },
    },
    studio: {
      meta: "( STUDIO )",
      heading: "STUDIO",
      rows: [
        { label: "屋号", value: "Stryde Studio" },
        { label: "事業内容", value: "モバイルアプリケーションの企画・開発・運営" },
        {
          label: "所在地",
          value: "東京都渋谷区神宮前5丁目51番8号 ラ・ポルト青山 2F-7",
        },
        { label: "開業", value: "2026年" },
        { label: "お問い合わせ", value: "contact@stryde.studio" },
      ],
    },
    footer: {
      meta: "( CONTACT )",
      heading1: "Let’s get",
      heading2: "in touch.",
      body: "ご依頼・取材・その他のお問い合わせは以下よりお気軽にご連絡ください。",
      legal: [
        { label: "プライバシーポリシー", href: "/privacy" },
        { label: "利用規約", href: "/terms" },
        { label: "特定商取引法に基づく表記", href: "/legal/tokushou" },
      ],
      rights: "All rights reserved.",
    },
    langSwitch: {
      currentLabel: "JA",
      otherLabel: "EN",
      ariaCurrent: "現在: 日本語",
      ariaSwitch: "Switch to English",
    },
  },

  en: {
    siteName: "Stryde Studio",
    siteTitle: "Stryde Studio — Designing a comfortable distance.",
    siteDescription:
      "Stryde Studio is a small Tokyo-based studio that designs a comfortable distance between people and their phones.",
    nav: {
      products: "PRODUCTS",
      philosophy: "PHILOSOPHY",
      studio: "STUDIO",
      contact: "CONTACT",
    },
    hero: {
      meta: "( EST. 2026 / TOKYO )",
      headline1: "Designing a",
      headline2: "comfortable distance.",
      description:
        "Stryde Studio is a small Tokyo-based studio crafting mobile products that put a calm distance between you and your phone.",
      cta: "VIEW PRODUCTS",
      index: [
        { k: "FOCUS", v: "Focus" },
        { k: "TIME", v: "Time" },
        { k: "SLEEP", v: "Sleep" },
        { k: "DISTANCE", v: "Distance" },
      ],
    },
    statement: {
      meta: "( STATEMENT )",
      lead1: "Quietly,",
      lead2: "with care.",
      sub1: "Redesigning the time",
      sub2: "that lives beyond the screen.",
    },
    philosophy: {
      meta: "( PHILOSOPHY )",
      heading1: "Designing a comfortable",
      heading2: "distance with your phone.",
      body: [
        "Our days too easily get folded into the screen. When we want to focus, to rest, to look at someone we love.",
        "Stryde Studio gently tunes technology so a comfortable margin exists between people and their screens.",
        "We lock, we watch over, we tend. Small mechanisms quietly enrich the everyday — and that is what we keep building.",
      ],
      cta: "VIEW MORE",
    },
    products: {
      meta: "( PRODUCTS / 03 )",
      heading1: "A distance",
      heading2: "that fits you.",
      lead: "Cats. Tasks. Sleep.\nThree small tools that change the distance for each moment.",
      cta: "VIEW MORE",
      preparing: "Coming soon",
      items: {
        NekoLock: {
          category: "FOCUS",
          description: "A focus companion: a quiet cat watching over your time.",
        },
        TodoLock: {
          category: "TASKS",
          description:
            "Tuck your phone away until your tasks are done — then it returns.",
        },
        SleepLock: {
          category: "SLEEP",
          description:
            "Close the screen at night, and let the morning gently open it.",
        },
      },
    },
    studio: {
      meta: "( STUDIO )",
      heading: "STUDIO",
      rows: [
        { label: "Studio", value: "Stryde Studio" },
        {
          label: "Business",
          value: "Mobile application design, development, and operations",
        },
        {
          label: "Address",
          value:
            "2F-7, La Porte Aoyama, 5-51-8 Jingumae, Shibuya-ku, Tokyo, Japan",
        },
        { label: "Established", value: "2026" },
        { label: "Contact", value: "contact@stryde.studio" },
      ],
    },
    footer: {
      meta: "( CONTACT )",
      heading1: "Let’s get",
      heading2: "in touch.",
      body: "For inquiries, press, or anything else, please reach out below.",
      legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        {
          label: "Japanese Commercial Disclosure (JP)",
          href: "/legal/tokushou",
        },
      ],
      rights: "All rights reserved.",
    },
    langSwitch: {
      currentLabel: "EN",
      otherLabel: "JA",
      ariaCurrent: "Current: English",
      ariaSwitch: "日本語に切り替える",
    },
  },
} as const;
