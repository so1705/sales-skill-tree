import React, { useMemo, useState } from "react";
import { ChevronRight, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("cover"); // cover | pyramid | appointer | closer

  const data = useMemo(
    () => ({
      appointer: [
        {
          title: "声かけ基礎（入口の型づくり）",
          action: [
            "第一声を短く出す／相手の反応を見る／すぐ切り替える",
            "会話に“持ち込む導入”を試す（言い回しの微調整）",
          ],
          skills: [
            "第一印象の設計：声のトーン、表情、距離感、雰囲気づくり",
            "簡潔化：言葉を削り、要点だけで伝える力",
            "反応観察：相手の表情・テンポ・警戒度の変化を読む",
            "初手の仮説力：どの導入が刺さるかを仮説→検証する思考",
            "“断られても崩れない”基礎：気持ちの切り替え、感情の安定",
            "反復で型を作る：同じ行動を磨いて再現性を上げる",
          ],
          career: [
            "面接の冒頭：自己紹介が短く、落ち着いて、感じよく入れる（第一印象が安定）",
            "OB訪問・説明会：初対面での声かけが自然になり、関係構築の最初の一歩が踏み出せる",
            "ES：言いたいことを削って「結論を先に」書ける（冗長さが消える）",
            "GD：最初に緊張をほぐす一言や、場の空気を整える発言ができる",
            "就活全体：不合格や失敗が続いても折れず、改善して次に向かう耐性がつく",
          ],
          eval: [
            "第一声が短い（説明が始まっていない）",
            "反応に合わせて言い方を変えられている",
            "断られてもテンションが大きく落ちない",
          ],
        },
        {
          title: "会話化（1往復の会話が作れる）",
          action: [
            "質問や一言で“返答”を引き出す",
            "相手の返答に合わせて次の問いに繋げる",
          ],
          skills: [
            "質問設計：答えやすい問い、話が進む問いの作り方",
            "会話のテンポ管理：間・リズム・話す量の調整",
            "相手理解の初速：短時間で相手の状態（忙しさ/警戒/興味）を掴む",
            "共感と受け止め：短い相槌・要約で“ちゃんと聞いてる感”を作る",
            "反応適応：相手タイプ別に言葉や進め方を変える柔軟性",
            "継続力：一定量をこなして確率を上げる「打席思考」",
          ],
          career: [
            "面接：質問の意図を捉えて、ズレずに返せる（会話が成立する）",
            "深掘り対応：相手の追加質問に焦らず、論点を保って返せる",
            "GD：議論を進める質問ができる（論点を前に動かせる）",
            "OB訪問：相手が話したくなる質問を作れる（学びが増える）",
            "逆質問：相手の返答を受けて“次の質問”に繋げられる（会話が続く）",
          ],
          eval: [
            "1往復以上の会話が一定数作れている",
            "相手の返答後に詰まらない（次が出る）",
            "会話が長引くのではなく「次に進む」意識がある",
          ],
        },
        {
          title: "入口誘導（次のステップへ運ぶ）",
          action: [
            "“話を聞く体勢”を作り、次の場（席・担当）へ自然に繋ぐ",
            "相手の不安（時間/目的/安心感）を先に潰す",
          ],
          skills: [
            "導線設計：立ち話→本題の入口へ運ぶ構造づくり",
            "不安処理：相手が引っかかる点を先回りして解消する力",
            "合意形成の初歩：「ここまで進めませんか？」を自然に言える",
            "フレーミング：会話の枠組み（短時間・要点・目的）を提示できる",
            "信頼の積み増し：小さな約束を守ることで安心感を作る",
            "場づくり：相手が話しやすい空気を整える",
          ],
          career: [
            "面接：回答の枠組みを自分で作れる（結論→理由→具体→学び）",
            "ケース/GD：議論の進め方を提案できる（時間配分・論点整理）",
            "面談：相手の懸念（不安・疑問）を先回りして潰せる（信頼される）",
            "志望動機：企業の懸念を踏まえた言い方にできる（安心感を与える）",
            "就活の意思決定：軸を整理して「次の行動」を決められる",
          ],
          eval: [
            "次のステップへの繋ぎが自然（押し売り感が少ない）",
            "相手の不安を言語化して先に潰せている",
            "会話が「雑談」で終わらず前進している",
          ],
        },
        {
          title: "安定して成果を出し、次につなぐ（再現性×引き継ぎ）",
          action: [
            "相手タイプ別に進め方を変え、安定して入口を作る",
            "必要情報を整理して次担当へつなぐ",
          ],
          skills: [
            "再現性：調子ではなく“型”で成果を出す",
            "情報整理：要点を抜き出し短く共有する（報連相の質）",
            "状況判断：相手の温度感を見て、押す/引く/渡すを切り替える",
            "フィードバック活用：改善点を翌日反映し続ける",
            "チーム連携：自分の成果をチーム成果に接続する動き",
            "育成視点：自分の型を言語化して他者に伝えられる",
          ],
          career: [
            "面接：どの企業でも“感じよく・簡潔に・ズレなく”話せる（再現性が強い）",
            "ES：要点抽出が上手くなり、読みやすい構造にできる",
            "GD：議論の要点をまとめて共有できる（ファシリ補助・整理役）",
            "インターン/内定後：報連相が強い人として評価されやすい",
            "長期的：自分の成長方法（改善サイクル）を語れる＝伸びしろが伝わる",
          ],
          eval: [
            "成果のムラが小さい（安定）",
            "共有が短く分かりやすい（要点）",
            "改善が継続して見える（翌日反映）",
          ],
        },
      ],
      closer: [
        {
          title: "同席・補助（型を覚える）",
          action: ["商談の流れを観察し、要点をメモ・整理する", "終了後に振り返りを言語化する"],
          skills: [
            "商談構造理解：何が決断を動かすかの全体像",
            "要点抽出：重要な発言・不安・決め手を拾う",
            "言語化：出来事を「なぜそうなったか」まで整理する",
            "俯瞰力：会話の目的・論点を外さない視点",
            "学習速度：上手い人の型を盗んで自分に移す力",
          ],
          career: [
            "面接練習：振り返りが具体になり改善が速い",
            "GD：議論の全体像を掴むのが上手くなる（論点を見失わない）",
            "ES：経験を“構造”で書ける（背景→行動→結果→学び）",
            "企業研究：話の論点を整理しながらインプットできる",
            "就活の強み化：協働・サポートで成果を出すタイプとして語れる",
          ],
          eval: ["メモが要点中心（流れが追えている）", "決め手/不安が拾えている", "振り返りが「次の改善」に繋がっている"],
        },
        {
          title: "ヒアリング主担当（課題を言語化）",
          action: ["相手の状況・課題・優先順位を質問で整理する", "要約して認識を合わせる"],
          skills: [
            "質問力：相手が考えていない論点を引き出す",
            "構造化：現状/理想/障害/優先順位/期限の整理",
            "要約・確認：ズレを防ぐ合意形成",
            "共感の質：相手が安心して話せる空気を作る",
            "仮説検証：聞きながら仮説を立て、確かめて修正する",
          ],
          career: [
            "面接：深掘りで詰まらない（理由や背景が言語化できる）",
            "逆質問：企業の状況を引き出す質問ができる（学びの密度が上がる）",
            "GD：議論が拡散したときに整理して戻せる",
            "自己分析：自分の行動の理由を掘れる（強みが言語化される）",
            "社会人基礎：聞く力が高い＝どの環境でも評価されやすい",
          ],
          eval: ["相手の課題が言語化されている", "要約確認ができている（ズレが少ない）", "質問が浅く終わらず一段掘れている"],
        },
        {
          title: "提案設計・条件整理（納得を作る）",
          action: ["相手に合う形で提案を組み立てる", "不安・条件を整理して納得を作る"],
          skills: [
            "価値の翻訳：相手の言葉で価値を伝える",
            "ロジック構築：結論→理由→具体→次の順で話す",
            "比較軸設計：迷いを減らす判断基準を作る",
            "反論処理：不安を論点化して一つずつ解消する",
            "ストーリー化：相手の未来像が想像できる説明にする",
          ],
          career: [
            "志望動機：相手企業の文脈に合わせて言い換えできる",
            "自己PR：強みを根拠と具体で説明できる（説得力が上がる）",
            "ケース面接：論点整理→提案の流れが作れる",
            "企業比較：判断基準を自分で作れる（迷いが減る）",
            "内定後：提案型で動ける人材として早期に評価されやすい",
          ],
          eval: ["提案が短く筋が通っている", "相手の不安が整理されている", "判断基準（何が決まれば進むか）が明確になっている"],
        },
        {
          title: "クロージング・再現性（意思決定まで運ぶ）",
          action: ["次の行動を合意し、決断を後押しする", "結果を分析し、型として改善する"],
          skills: [
            "意思決定支援：相手の迷いをほどいて行動に落とす",
            "合意形成：期限・次ステップを明確にする",
            "判断の背中押し：圧ではなく納得で促す",
            "失注分析：理由を言語化し改善に落とす",
            "再現性共有：自分の型をチームへ展開できる",
          ],
          career: [
            "最終面接：主体性・覚悟・決断力として伝わる（決めにいける）",
            "不合格後：原因分析→改善ができる（成長できる人扱い）",
            "リーダー経験：意思決定を前に進めた経験として語れる",
            "入社後：プロジェクト推進力として評価される（前に進める力）",
            "長期的：結果を出すまで改善し続ける姿勢が武器になる",
          ],
          eval: ["次アクションが明確に確定している", "迷いの原因が言語化されている"],
        },
      ],
    }),
    []
  );

  const Shell = ({ children }) => (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <button
            onClick={() => setPage("cover")}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-black">
              教
            </span>
            <span>催事営業 実務習得ガイド</span>
          </button>

          <div className="flex items-center gap-2">
            <NavChip active={page === "pyramid"} onClick={() => setPage("pyramid")} label="全体像" />
            <NavChip active={page === "appointer"} onClick={() => setPage("appointer")} label="アポインター" />
            <NavChip active={page === "closer"} onClick={() => setPage("closer")} label="クローザー" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 text-xs text-slate-500">
          <span>Strategic Sales Internship Mastery</span>
          <span>v1.0 Simple</span>
        </div>
      </footer>
    </div>
  );

  // ---------- Pages ----------
  if (page === "cover") {
    return (
      <Shell>
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              実務テキスト
              <span className="text-slate-300">催事営業</span>
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              催事営業
              <br />
              ステップアップ教科書
            </h1>

            <p className="max-w-2xl text-slate-600 leading-relaxed">
              現場の「感覚」を、再現できる「型」に落とす。
              アポインター（入口づくり）とクローザー（意思決定支援）を分けて、
              就活にも転用できる形で整理した実務ガイド。
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setPage("pyramid")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white hover:bg-blue-500"
              >
                読み始める <ChevronRight size={18} />
              </button>
              <button
                onClick={() => setPage("appointer")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 hover:bg-slate-50"
              >
                すぐアポ編を見る <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MiniCard
                icon={<Zap size={18} />}
                title="アポインター"
                desc="入口を作り、会話を前に進める。第一印象と反応適応を鍛える。"
              />
              <MiniCard
                icon={<ShieldCheck size={18} />}
                title="クローザー"
                desc="課題を言語化し、提案で納得を作る。意思決定を前に進める。"
              />
            </div>
          </div>
        </div>
      </Shell>
    );
  }

  if (page === "pyramid") {
    return (
      <Shell>
        <SectionTitle
          kicker="全体像"
          title="ステップアップ体系図"
          desc="まずは全体を把握してから、各ページで“分解して理解”する。"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <SimplePyramid
            icon={<Zap size={18} className="text-blue-600" />}
            title="アポインター（入口づくり）"
            items={["声かけ基礎", "会話化", "入口誘導", "再現性×引き継ぎ"]}
            accent="border-blue-200"
          />
          <SimplePyramid
            icon={<ShieldCheck size={18} className="text-emerald-600" />}
            title="クローザー（意思決定支援）"
            items={["同席・補助", "ヒアリング主担当", "提案設計・条件整理", "クロージング・再現性"]}
            accent="border-emerald-200"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-lg font-black tracking-tight">この教科書の使い方</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700 leading-relaxed">
            <li>・まず「現場の端的アクション」を真似して、型を作る</li>
            <li>・次に「身につくスキル」を言葉で理解して、再現性を上げる</li>
            <li>・最後に「就活でどう活きるか」をセットで語れるようにする</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setPage("appointer")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
            >
              次：アポインター編へ <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setPage("closer")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 hover:bg-slate-50"
            >
              クローザー編へ <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Shell>
    );
  }

  if (page === "appointer") {
    return (
      <Shell>
        <SectionTitle
          kicker="アポインター"
          title="入口づくりを、型で安定させる"
          desc="4ブロックを上から順に読むだけでOK。途中でボタンを押さずに理解できる構成にしている。"
        />

        <div className="mt-8 space-y-6">
          {data.appointer.map((block) => (
            <SkillBlock key={block.title} block={block} accent="blue" />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => setPage("closer")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
          >
            次：クローザー編へ <ArrowRight size={18} />
          </button>
          <button
            onClick={() => setPage("pyramid")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            全体像に戻る <ArrowRight size={18} />
          </button>
        </div>
      </Shell>
    );
  }

  // closer
  return (
    <Shell>
      <SectionTitle
        kicker="クローザー"
        title="納得を作り、意思決定を前に進める"
        desc="4ブロックを上から順に読むだけでOK。条件整理と不安処理が“仕事でも就活でも”効く。"
      />

      <div className="mt-8 space-y-6">
        {data.closer.map((block) => (
          <SkillBlock key={block.title} block={block} accent="emerald" />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => setPage("cover")}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white hover:bg-slate-800"
        >
          表紙に戻る <ArrowRight size={18} />
        </button>
        <button
          onClick={() => setPage("appointer")}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 hover:bg-slate-50"
        >
          アポ編へ戻る <ArrowRight size={18} />
        </button>
      </div>
    </Shell>
  );
}

// ---------- UI parts ----------
function NavChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-xl px-4 py-2 text-xs font-bold transition",
        active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
        {kicker}
      </div>
      <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function MiniCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200">
          {icon}
        </div>
        <div className="text-base font-black">{title}</div>
      </div>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function SimplePyramid({ icon, title, items, accent }) {
  return (
    <div className={`rounded-3xl border ${accent} bg-white p-8 shadow-sm`}>
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200">
          {icon}
        </div>
        <h3 className="text-lg font-black tracking-tight">{title}</h3>
      </div>
      <div className="mt-6 space-y-3">
        {items.map((t, idx) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
            <div className="text-sm font-bold text-slate-900">
              {idx + 1}. {t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillBlock({ block, accent }) {
  const accents = {
    blue: {
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      bar: "bg-blue-600",
      card: "border-blue-200",
    },
    emerald: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      bar: "bg-emerald-600",
      card: "border-emerald-200",
    },
  };
  const a = accents[accent];

  return (
    <section className={`rounded-3xl border ${a.card} bg-white shadow-sm overflow-hidden`}>
      <div className={`h-1.5 ${a.bar}`} />
      <div className="p-8">
        <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${a.badge}`}>
          ここを固める
        </div>
        <h3 className="mt-3 text-2xl font-black tracking-tight">{block.title}</h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <BlockCard title="現場の端的アクション" items={block.action} />
          <BlockCard title="評価ポイント" items={block.eval} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <BlockCard title="身につく営業スキル" items={block.skills} />
          <BlockCard title="就活でどう活きるか" items={block.career} />
        </div>
      </div>
    </section>
  );
}

function BlockCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="text-sm font-black text-slate-900">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 leading-relaxed">
        {items.map((x, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
