import type { Locale } from "./locales";

interface LegalPage {
  metaLabel: string;
  title1: string;
  title2?: string;
  sections: { heading: string; body: string[] }[];
  established: string;
  back: string;
}

export const privacyPage: Record<Locale, LegalPage> = {
  ja: {
    metaLabel: "( LEGAL )",
    title1: "プライバシー",
    title2: "ポリシー",
    sections: [
      {
        heading: "1. はじめに",
        body: [
          "Stryde Studio（以下「当スタジオ」といいます）は、当スタジオが提供するアプリケーション及びウェブサイト（以下総称して「本サービス」といいます）における利用者（以下「ユーザー」といいます）の個人情報の取扱いについて、本プライバシーポリシー（以下「本ポリシー」といいます）を定めます。",
        ],
      },
      {
        heading: "2. 取得する情報",
        body: [
          "当スタジオは、本サービスの提供にあたり、必要最小限の範囲で以下の情報を取得することがあります。",
          "・端末情報（OSバージョン、機種名、言語設定など）",
          "・本サービスの利用状況に関する情報（操作ログ、クラッシュレポート等）",
          "・お問い合わせ時にユーザーが任意で提供する情報（氏名、メールアドレス、お問い合わせ内容等）",
          "・Walkaboutをご利用の場合：Apple ヘルスケア（HealthKit）経由で歩数データを取得します。取得した歩数データは、端末上でアプリ内のコース進行を計算する目的にのみ使用し、当スタジオのサーバーに送信・保存することはありません。第三者への提供や広告目的での利用も一切行いません。",
          "各アプリごとの具体的な取得項目は、App Store / Google Play のプライバシーラベルに記載のとおりです。",
        ],
      },
      {
        heading: "3. 利用目的",
        body: [
          "取得した情報は、以下の目的のために利用します。",
          "・本サービスの提供、維持、改善のため",
          "・不具合の調査・対応、品質改善のため",
          "・お問い合わせへの対応のため",
          "・法令または利用規約に違反する行為への対応のため",
        ],
      },
      {
        heading: "4. 第三者への提供",
        body: [
          "当スタジオは、法令に定める場合を除き、ユーザー本人の同意なく取得した個人情報を第三者に提供しません。",
        ],
      },
      {
        heading: "5. 解析ツール・Cookieについて",
        body: [
          "本サービスでは、品質向上のためにクラッシュ解析や利用統計を行うことがあります。これらは個人を特定する目的では使用しません。本ウェブサイトでは、必要な範囲で Cookie 等の類似技術を使用する場合があります。",
        ],
      },
      {
        heading: "6. 情報の安全管理",
        body: [
          "当スタジオは、取得した個人情報の漏えい、滅失または毀損の防止その他の安全管理のために必要かつ適切な措置を講じます。",
        ],
      },
      {
        heading: "7. 開示・訂正・削除等の請求",
        body: [
          "ユーザーは、当スタジオに対して自己の個人情報の開示、訂正、利用停止、削除を請求することができます。請求は下記のお問い合わせ窓口までご連絡ください。",
        ],
      },
      {
        heading: "8. 本ポリシーの変更",
        body: [
          "当スタジオは、必要に応じて本ポリシーを変更することがあります。重要な変更を行う場合は、本サービスまたはウェブサイト上で告知します。",
        ],
      },
      {
        heading: "9. お問い合わせ窓口",
        body: [
          "本ポリシーまたは個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。",
          "Stryde Studio",
          "メール: contact@stryde.studio",
        ],
      },
    ],
    established: "制定日: 2026年5月16日",
    back: "BACK TO HOME",
  },
  en: {
    metaLabel: "( LEGAL )",
    title1: "Privacy",
    title2: "Policy",
    sections: [
      {
        heading: "1. Introduction",
        body: [
          "Stryde Studio (“the Studio”) defines this Privacy Policy (“this Policy”) regarding the handling of personal information of users (“Users”) in connection with the applications and websites provided by the Studio (collectively, “the Services”).",
        ],
      },
      {
        heading: "2. Information We Collect",
        body: [
          "The Studio may collect the following information to the minimum extent necessary to provide the Services:",
          "• Device information (OS version, device model, language settings, etc.)",
          "• Information about Service usage (operation logs, crash reports, etc.)",
          "• Information voluntarily provided by Users when making inquiries (name, email address, content of inquiry, etc.)",
          "• For Walkabout: step count data obtained via Apple Health (HealthKit). This data is used solely on-device to calculate in-app course progress, and is never transmitted to or stored on the Studio's servers, shared with third parties, or used for advertising purposes.",
          "Specific data collection for each app is detailed in the privacy labels on the App Store and Google Play.",
        ],
      },
      {
        heading: "3. Purposes of Use",
        body: [
          "The collected information is used for the following purposes:",
          "• To provide, maintain, and improve the Services",
          "• To investigate and respond to issues, and to improve quality",
          "• To respond to inquiries",
          "• To respond to acts that violate laws or the terms of service",
        ],
      },
      {
        heading: "4. Provision to Third Parties",
        body: [
          "The Studio will not provide personal information to third parties without the User's consent, except as required by law.",
        ],
      },
      {
        heading: "5. Analytics and Cookies",
        body: [
          "The Services may perform crash analytics and usage statistics for quality improvement. These are not used to identify individuals. This website may use Cookies and similar technologies as necessary.",
        ],
      },
      {
        heading: "6. Information Security",
        body: [
          "The Studio takes necessary and appropriate measures to prevent the leakage, loss, or damage of collected personal information and to ensure its safe management.",
        ],
      },
      {
        heading: "7. Disclosure, Correction, and Deletion",
        body: [
          "Users may request the disclosure, correction, suspension of use, or deletion of their personal information. Please contact the inquiry window below for requests.",
        ],
      },
      {
        heading: "8. Changes to This Policy",
        body: [
          "The Studio may revise this Policy from time to time. Material changes will be announced on the Services or on this website.",
        ],
      },
      {
        heading: "9. Contact",
        body: [
          "For inquiries about this Policy or the handling of personal information, please contact:",
          "Stryde Studio",
          "Email: contact@stryde.studio",
        ],
      },
    ],
    established: "Effective: May 16, 2026",
    back: "BACK TO HOME",
  },
};

export const termsPage: Record<Locale, LegalPage> = {
  ja: {
    metaLabel: "( LEGAL )",
    title1: "利用規約",
    sections: [
      {
        heading: "第1条（適用）",
        body: [
          "本利用規約（以下「本規約」といいます）は、Stryde Studio（以下「当スタジオ」といいます）が提供するすべてのアプリケーション及び関連するサービス（以下「本サービス」といいます）の利用に関する条件を、本サービスを利用する利用者（以下「ユーザー」といいます）と当スタジオとの間で定めるものです。",
          "ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。",
        ],
      },
      {
        heading: "第2条（利用)",
        body: [
          "ユーザーは、本規約および関連する法令を遵守したうえで、本サービスを利用するものとします。",
          "本サービスの一部機能の利用には、App Store または Google Play 等を通じた購入手続きが必要となる場合があります。",
        ],
      },
      {
        heading: "第3条（禁止事項）",
        body: [
          "ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。",
          "・法令または公序良俗に違反する行為",
          "・本サービスの運営を妨害する行為",
          "・本サービスを逆コンパイル、リバースエンジニアリング、その他不正に解析する行為",
          "・当スタジオ、他のユーザー、または第三者の権利・利益を侵害する行為",
          "・その他、当スタジオが不適切と判断する行為",
        ],
      },
      {
        heading: "第4条（知的財産権）",
        body: [
          "本サービスに関する著作権、商標権その他一切の知的財産権は、当スタジオまたは正当な権利者に帰属します。本規約は、本サービスに関する知的財産権をユーザーに譲渡または許諾するものではありません。",
        ],
      },
      {
        heading: "第5条（免責事項）",
        body: [
          "当スタジオは、本サービスの完全性、正確性、有用性、特定目的への適合性、その他について保証しません。",
          "当スタジオは、本サービスの利用または利用不能から生じる一切の損害について、当スタジオの故意または重過失による場合を除き、責任を負わないものとします。",
        ],
      },
      {
        heading: "第6条(サービスの変更・中断・終了)",
        body: [
          "当スタジオは、ユーザーに事前に通知することなく、本サービスの内容を変更、追加または中断、終了することができるものとします。",
          "当スタジオは、これによりユーザーまたは第三者に生じた損害について、一切の責任を負わないものとします。",
        ],
      },
      {
        heading: "第7条（規約の変更）",
        body: [
          "当スタジオは、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。",
          "変更後の規約は、当スタジオが本サービスまたはウェブサイト上に掲示した時点から効力を生じるものとします。",
        ],
      },
      {
        heading: "第8条（準拠法・管轄裁判所）",
        body: [
          "本規約の解釈にあたっては、日本法を準拠法とします。",
          "本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
      },
      {
        heading: "第9条（お問い合わせ）",
        body: [
          "本規約に関するお問い合わせは、以下までご連絡ください。",
          "Stryde Studio",
          "メール: contact@stryde.studio",
        ],
      },
    ],
    established: "制定日: 2026年5月16日",
    back: "BACK TO HOME",
  },
  en: {
    metaLabel: "( LEGAL )",
    title1: "Terms of",
    title2: "Service",
    sections: [
      {
        heading: "Article 1 (Application)",
        body: [
          "These Terms of Service (“these Terms”) set forth the conditions of use of all applications and related services provided by Stryde Studio (“the Studio”) (collectively, “the Services”) between Users of the Services (“Users”) and the Studio.",
          "By using the Services, the User is deemed to have agreed to these Terms.",
        ],
      },
      {
        heading: "Article 2 (Use)",
        body: [
          "Users shall use the Services in compliance with these Terms and applicable laws and regulations.",
          "Some functions of the Services may require purchase procedures through the App Store, Google Play, or similar platforms.",
        ],
      },
      {
        heading: "Article 3 (Prohibited Acts)",
        body: [
          "Users shall not engage in the following acts when using the Services:",
          "• Acts that violate laws or public order and morals",
          "• Acts that interfere with the operation of the Services",
          "• Decompilation, reverse engineering, or other unauthorized analysis of the Services",
          "• Acts that infringe upon the rights or interests of the Studio, other Users, or third parties",
          "• Other acts that the Studio deems inappropriate",
        ],
      },
      {
        heading: "Article 4 (Intellectual Property)",
        body: [
          "All copyrights, trademarks, and other intellectual property rights related to the Services belong to the Studio or rightful owners. These Terms do not transfer or grant any intellectual property rights to Users.",
        ],
      },
      {
        heading: "Article 5 (Disclaimer)",
        body: [
          "The Studio makes no warranty regarding the completeness, accuracy, usefulness, fitness for a particular purpose, or any other aspect of the Services.",
          "Except in cases of willful misconduct or gross negligence by the Studio, the Studio shall not be liable for any damages arising from the use of or inability to use the Services.",
        ],
      },
      {
        heading: "Article 6 (Changes, Suspension, and Termination)",
        body: [
          "The Studio may change, add to, suspend, or terminate the Services without prior notice to Users.",
          "The Studio shall not be liable for any damages incurred by Users or third parties as a result.",
        ],
      },
      {
        heading: "Article 7 (Changes to Terms)",
        body: [
          "The Studio may change these Terms without notice when deemed necessary.",
          "The revised Terms take effect from the time they are posted on the Services or this website.",
        ],
      },
      {
        heading: "Article 8 (Governing Law and Jurisdiction)",
        body: [
          "These Terms are governed by the laws of Japan.",
          "Any disputes arising from the Services shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.",
        ],
      },
      {
        heading: "Article 9 (Contact)",
        body: [
          "For inquiries about these Terms, please contact:",
          "Stryde Studio",
          "Email: contact@stryde.studio",
        ],
      },
    ],
    established: "Effective: May 16, 2026",
    back: "BACK TO HOME",
  },
};
