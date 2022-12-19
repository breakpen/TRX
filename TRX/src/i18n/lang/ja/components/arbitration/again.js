export default {
  navbar: ["再仲裁を申請する", "仲裁を開始する"],
  unit: "人",
  form: {
    title: "特記事項:\n払込票の偽造・改ざんは重大な違法行為です，関連するクエリパスワードを送信する場合は、個人資産の安全を確保するために注意してください",
    event: {
      title: "仲裁事件",
      label: "文字情報証明",
      placeholder: "状況を説明し、仲裁人が状況を確認するために必要な情報を提供する",
      type: ["仲裁異議", "他の"]
    },
    upload: {
      title: ["画像情報証明", "法的効力のある関連証拠"],
    },
    arbitrator: {
      title: "仲裁人を追加する",
      default: "デフォルト",
    },
    pay: {
      title: "支払う必要があります",
      explain: {
        start: [
          "例証する: 仲裁が開始された後、プラットフォームは委任します",
          "仲裁人が決定する",
          "支払う必要があります",
          "仲裁が取り消された場合、または最終的な仲裁が勝訴した場合",
          "あなたの口座に返金されます"
        ],
        again: [
          "例証する: 再仲裁の申請は支払われなければならない",
          "仲裁人のデフォルト",
          "追加の仲裁人 1 名が支払う必要があります"
        ]
      }
    },
    submit: "参加する"
  },
  popup: {
    title: "提出を確認して支払う",
    text: "延長申請は1人1回まで，慎重に記入してください，延長と支払いの申請書を提出してよろしいですか？",
    checkbox: "確認しました",
    submit: "提出と支払いOK",
    cancel: "もう一度考えさせて"
  }
}