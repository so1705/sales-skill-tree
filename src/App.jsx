import React, { useMemo, useState } from "react";
import {
  ChevronRight,
  Zap,
  ShieldCheck,
  Search,
  Check,
} from "lucide-react";

/**
 * =========================================================
 *  App.jsx (replace whole file)
 * =========================================================
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState("cover");

  const navItems = useMemo(
    () => [
      { id: "cover", label: "表紙" },
      { id: "pyramid", label: "全体体系図" },
      { id: "appointer", label: "アポインター" },
      { id: "closer", label: "クローザー" },
    ],
    []
  );

  // -----------------------------
  //  UI Parts
  // -----------------------------

  const BackgroundDecor = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* marble-ish base */}
      <div className="absolute inset-0 bg-marble" />
      {/* soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-slate-100/60" />
      {/* subtle dots */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:28px_28px]" />
    </div>
  );

  const NavButton = ({ active, children, onClick }) => {
    // ここが「選択中ボタンの文字が白で見えない」問題の修正ポイント
    // activeは濃背景＋白文字、inactiveは薄背景＋濃文字に固定
    const base =
      "px-5 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap";
    const activeClass =
  "bg-white text-orange-600 border border-orange-300 shadow-lg shadow-orange-100";

    const inactiveClass =
      "bg-white/70 text-slate-700 border border-slate-200 hover:bg-white hover:text-slate-900 hover:border-slate-300";
    return (
      <button onClick={onClick} className={`${base} ${active ? activeClass : inactiveClass}`}>
        {children}
      </button>
    );
  };

  const SectionShell = ({ eyebrow, title, subtitle, children }) => (
    <section className="relative rounded-3xl border border-slate-200 bg-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.06)] overflow-hidden">
      <BackgroundDecor />
      <div className="relative z-10 p-10 md:p-14">
        <div className="mb-8">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black tracking-[0.18em] uppercase bg-slate-900 text-white">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );

  // -----------------------------
  //  Pages
  // -----------------------------

  const CoverPage = () => (
    <SectionShell
      eyebrow="Sales Textbook"
      title="催事営業 ステップアップ教科書"
      subtitle="現場の「感覚」を、再現できる「型」へ。入口から意思決定までを、就活にも転用できる形で言語化する。"
    >
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-7">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Zap size={18} />
            </div>
            <div className="font-black text-slate-900">Appointer</div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            入口を作り、会話を前に進める。「第一印象」と「反応適応」を鍛える。
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-7">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <ShieldCheck size={18} />
            </div>
            <div className="font-black text-slate-900">Closer</div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            課題を言語化し、提案で納得を作る。「意思決定を前に進める力」を鍛える。
          </p>
        </div>
      </div>

      <div className="mt-12">
        <button
          onClick={() => setCurrentPage("pyramid")}
          className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-slate-900 text-white font-black shadow-lg shadow-slate-200 hover:translate-y-[-1px] transition-all"
        >
          学習を開始する
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </SectionShell>
  );

  // -----------------------------
  //  Pyramid (real pyramid look)
  // -----------------------------
  const PyramidTier = ({ level, title, description, widthClass, tone = "slate" }) => {
    const toneMap = {
      slate: "bg-slate-900 text-white",
      blue: "bg-blue-600 text-white",
      emerald: "bg-emerald-600 text-white",
      light: "bg-white text-slate-900 border border-slate-200",
    };
    // trapezoid clip to look like pyramid blocks
    return (
      <div className={`mx-auto ${widthClass}`}>
        <div
          className={`relative px-6 py-5 md:px-8 md:py-6 rounded-2xl ${toneMap[tone]} shadow-[0_12px_30px_rgba(15,23,42,0.10)]`}
          style={{
            clipPath: "polygon(6% 0, 94% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <div className="text-[10px] font-black tracking-[0.2em] uppercase opacity-80">
              Level 0{level}
            </div>
            <div className="text-[10px] font-bold opacity-70">結論：{title}</div>
          </div>

          <div className="mt-2 font-black text-base md:text-lg tracking-tight">
            {title}
          </div>
          <p className="mt-2 text-xs md:text-sm leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>
    );
  };

  const PyramidColumn = ({ icon: Icon, label, subLabel, tiers }) => (
    <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 md:p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
          <Icon size={22} />
        </div>
        <div>
          <div className="text-lg font-black text-slate-900">{label}</div>
          <div className="text-xs font-bold text-slate-500 tracking-[0.18em] uppercase">
            {subLabel}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* top -> bottom pyramid */}
        {tiers.map((t) => (
          <PyramidTier key={t.level} {...t} />
        ))}
      </div>
    </div>
  );

  const PyramidView = () => (
    <SectionShell
      eyebrow="Architecture"
      title="全体体系図（ピラミッド）"
      subtitle="結論：4階層は「型で成果を安定させ、次に繋げられる人」になるためのロードマップ。下ほど土台・上ほど再現性。"
    >
      <div className="grid lg:grid-cols-2 gap-10">
        <PyramidColumn
          icon={Zap}
          label="Appointer"
          subLabel="Acquisition Mastery"
          tiers={[
            { level: 4, title: "再現性×引き継ぎ", description: "成果を安定化し、情報を整理して次へつなぐ。", widthClass: "w-full", tone: "slate" },
            { level: 3, title: "入口誘導", description: "不安を潰して、次の場へ自然に運ぶ。", widthClass: "w-[92%]", tone: "blue" },
            { level: 2, title: "会話化", description: "1往復の会話を作り、次の問いへ繋げる。", widthClass: "w-[84%]", tone: "light" },
            { level: 1, title: "声かけ基礎", description: "第一声を短く、反応を見て即切り替える。", widthClass: "w-[76%]", tone: "light" },
          ]}
        />

        <PyramidColumn
          icon={ShieldCheck}
          label="Closer"
          subLabel="Decision Support"
          tiers={[
            { level: 4, title: "クロージング×再現性", description: "意思決定まで運び、勝敗を分析して型を更新する。", widthClass: "w-full", tone: "slate" },
            { level: 3, title: "提案設計", description: "価値を翻訳し、判断基準を作って迷いを減らす。", widthClass: "w-[92%]", tone: "emerald" },
            { level: 2, title: "ヒアリング主担当", description: "現状/理想/障害/優先順位を整理し、合意形成する。", widthClass: "w-[84%]", tone: "light" },
            { level: 1, title: "同席・補助", description: "商談構造を観察し、要点・不安・決め手を拾う。", widthClass: "w-[76%]", tone: "light" },
          ]}
        />
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setCurrentPage("appointer")}
          className="px-5 py-3 rounded-xl bg-slate-900 text-white text-xs font-black hover:translate-y-[-1px] transition-all"
        >
          次：アポインター詳細へ
        </button>
        <button
          onClick={() => setCurrentPage("closer")}
          className="px-5 py-3 rounded-xl bg-white/70 border border-slate-200 text-slate-800 text-xs font-black hover:bg-white transition-all"
        >
          クローザー詳細へ
        </button>
      </div>
    </SectionShell>
  );

  // -----------------------------
  //  Detail Pages (simple textbook)
  // -----------------------------
  const DetailPage = ({ title, icon: Icon, data }) => (
    <SectionShell
      eyebrow="Textbook"
      title={title}
      subtitle="結論：各階層は「現場アクション → 身につくスキル → 就活への転用 → チェック2つ」で読む。"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
          <Icon size={22} />
        </div>
        <div className="text-sm font-black text-slate-700">
          スクロールで上から順に読める設計
        </div>
      </div>

      <div className="space-y-8">
        {data.map((tier) => (
          <article
            key={tier.lv}
            className="rounded-3xl border border-slate-200 bg-white/80 p-8 md:p-10"
          >
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase">
                  Level 0{tier.lv}
                </div>
                <h3 className="mt-4 text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  {tier.title}
                </h3>
              </div>
            </div>

            <div className="mt-6 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                  <div className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
                    結論1行（現場アクション）
                  </div>
                  <div className="mt-3 text-sm font-bold text-slate-900 leading-relaxed">
                    {tier.action}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
                    身につく営業スキル
                  </div>
                  <ul className="mt-3 space-y-2">
                    {tier.skills.map((s, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                        <span className="mt-1 w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center shrink-0 bg-white">
                          <Check size={12} className="text-slate-900" />
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
                    就活でどう活きるか
                  </div>
                  <ul className="mt-3 space-y-2">
                    {tier.career.map((c, i) => (
                      <li key={i} className="text-sm text-slate-700 leading-relaxed">
                        ・{c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-900 text-white p-6">
                  <div className="text-[10px] font-black tracking-[0.2em] uppercase text-white/70">
                    Check（2つで十分）
                  </div>
                  <ul className="mt-3 grid md:grid-cols-2 gap-3">
                    {tier.evaluation.slice(0, 2).map((ev, i) => (
                      <li key={i} className="text-xs leading-relaxed bg-white/10 border border-white/10 rounded-xl p-4">
                        {ev}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-5 z-50 mb-10">
        <div className="rounded-2xl border border-slate-200 bg-white/75 backdrop-blur-xl shadow-lg shadow-slate-100 px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
              教
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] font-black tracking-[0.18em] uppercase text-slate-500">
                Sales Skill Textbook
              </div>
              <div className="text-sm font-black tracking-tight text-slate-900">
                催事営業 ステップアップ体系
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {navItems.map((item) => (
              <NavButton
                key={item.id}
                active={currentPage === item.id}
                onClick={() => setCurrentPage(item.id)}
              >
                {item.label}
              </NavButton>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-slate-200">
            <Search size={18} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-500">Search</span>
          </div>
        </div>
      </nav>

      {/* Pages */}
      <main className="space-y-10">
        {currentPage === "cover" && <CoverPage />}
        {currentPage === "pyramid" && <PyramidView />}
        {currentPage === "appointer" && (
          <DetailPage title="Appointer（アポインター）" icon={Zap} data={appointerData} />
        )}
        {currentPage === "closer" && (
          <DetailPage title="Closer（クローザー）" icon={ShieldCheck} data={closerData} />
        )}
      </main>

      <footer className="mt-12 text-xs text-slate-500">
        © Sales Skill Tree / Textbook UI
      </footer>
    </div>
  );
};

// -----------------------------
//  Data (keep yours; shortened checks on UI)
// -----------------------------
const appointerData = [
  {
    lv: 1,
    title: "声かけ基礎（入口の型づくり）",
    action: "第一声を短く出す／反応を見る／すぐ切り替える。",
    skills: [
      "第一印象の設計（声・表情・距離感・雰囲気）",
      "簡潔化（言葉を削り要点で伝える）",
      "反応観察（表情・テンポ・警戒度の変化を読む）",
      "初手の仮説→検証（導入の微調整）",
      "断られても崩れない切り替え",
      "反復で型を作り再現性を上げる",
    ],
    career: [
      "面接冒頭：短く落ち着いて入れる（第一印象が安定）",
      "OB訪問/説明会：初対面での一歩が踏み出せる",
      "ES：結論先行で冗長さが消える",
      "GD：場の空気を整える発言ができる",
      "不合格が続いても改善して次へ向かえる",
    ],
    evaluation: [
      "第一声が短い（説明が始まっていない）",
      "反応に合わせて言い方を変えられている",
      "断られてもテンションが大きく落ちない",
    ],
  },
  {
    lv: 2,
    title: "会話化（1往復の会話が作れる）",
    action: "返答を引き出し、返答に合わせて次の問いへ繋げる。",
    skills: [
      "質問設計（答えやすい問い・進む問い）",
      "会話テンポ管理（間・リズム・話す量）",
      "相手理解の初速（忙しさ/警戒/興味）",
      "相槌・要約で“聞いてる感”",
      "タイプ別の言葉選び（反応適応）",
      "打席思考（一定量こなして確率を上げる）",
    ],
    career: [
      "面接：質問意図を捉えてズレずに返せる",
      "深掘り：論点を保って返せる",
      "GD：議論を進める質問ができる",
      "OB訪問：学びの密度が上がる",
      "逆質問：次の質問へ繋げられる",
    ],
    evaluation: [
      "1往復以上の会話が一定数作れている",
      "返答後に詰まらない（次が出る）",
      "会話を長引かせず前に進める意識がある",
    ],
  },
  {
    lv: 3,
    title: "入口誘導（次のステップへ運ぶ）",
    action: "不安を先に潰し、次の場（席・担当）へ自然に繋ぐ。",
    skills: [
      "導線設計（立ち話→本題の入口）",
      "不安処理（時間/目的/安心感を先回り）",
      "合意形成の初歩（小さな承諾の積み上げ）",
      "フレーミング（枠組み提示）",
      "信頼の積み増し（小さな約束を守る）",
      "場づくり（話しやすい空気の設計）",
    ],
    career: [
      "面接：回答の枠組みを自分で作れる",
      "ケース/GD：進め方の提案ができる",
      "面談：懸念を先回りで潰せる",
      "志望動機：企業の懸念を踏まえた言い方",
      "就活：軸を整理して次の行動を決められる",
    ],
    evaluation: [
      "次のステップへの繋ぎが自然（押し売り感が少ない）",
      "相手の不安を言語化して先に潰せている",
      "雑談で終わらず前進している",
    ],
  },
  {
    lv: 4,
    title: "再現性×引き継ぎ（安定して成果を出す）",
    action: "相手タイプ別に進め方を変え、要点を整理して次担当へつなぐ。",
    skills: [
      "再現性（調子ではなく型で成果を出す）",
      "情報整理（要点抽出・短く共有）",
      "状況判断（押す/引く/渡すの切り替え）",
      "改善の継続（翌日に反映し続ける）",
      "チーム連携（個人成果→チーム成果）",
      "育成視点（型を言語化して伝える）",
    ],
    career: [
      "面接：どの企業でも“感じよく・簡潔に・ズレなく”話せる",
      "ES：要点抽出が上手くなり読みやすい構造にできる",
      "GD：要点をまとめて共有できる（整理役）",
      "インターン/内定後：報連相が強い人として評価されやすい",
      "成長方法（改善サイクル）を語れる＝伸びしろが伝わる",
    ],
    evaluation: [
      "成果のムラが小さい（安定）",
      "共有が短く分かりやすい（要点）",
      "改善が継続して見える（翌日反映）",
    ],
  },
];

const closerData = [
  {
    lv: 1,
    title: "同席・補助（型を覚える）",
    action: "商談の流れを観察し、要点・不安・決め手をメモ→整理する。",
    skills: [
      "商談構造理解（決断を動かす要素の全体像）",
      "要点抽出（重要発言・不安・決め手）",
      "言語化（なぜそうなったかまで整理）",
      "俯瞰力（目的・論点を外さない）",
      "学習速度（上手い人の型を移植）",
    ],
    career: [
      "面接練習：振り返りが具体になり改善が速い",
      "GD：論点を見失いにくい",
      "ES：経験を構造で書ける",
      "企業研究：整理しながらインプットできる",
      "協働・サポートで成果を出すタイプとして語れる",
    ],
    evaluation: [
      "メモが要点中心（流れが追える）",
      "決め手/不安が拾えている",
      "振り返りが次の改善に繋がっている",
    ],
  },
  {
    lv: 2,
    title: "ヒアリング主担当（課題を言語化）",
    action: "状況・課題・優先順位を質問で整理し、要約して認識を合わせる。",
    skills: [
      "質問力（相手が考えていない論点を引き出す）",
      "構造化（現状/理想/障害/優先/期限）",
      "要約・確認（ズレを防ぐ合意形成）",
      "共感の質（安心して話せる空気）",
      "仮説検証（聞きながら立てて修正）",
    ],
    career: [
      "面接：深掘りで詰まらない",
      "逆質問：状況を引き出せる",
      "GD：拡散した議論を整理して戻せる",
      "自己分析：理由を掘れて強みが言語化される",
      "聞く力が高い＝どの環境でも評価されやすい",
    ],
    evaluation: [
      "相手の課題が言語化されている",
      "要約確認ができている（ズレが少ない）",
      "質問が浅く終わらず一段掘れている",
    ],
  },
  {
    lv: 3,
    title: "提案設計（納得を作る）",
    action: "価値を相手の言葉に翻訳し、判断基準を作って迷いを減らす。",
    skills: [
      "価値の翻訳（相手の言語で価値提示）",
      "ロジック構築（結論→理由→具体→次）",
      "比較軸設計（判断基準を作る）",
      "反論処理（不安を論点化して解消）",
      "ストーリー化（未来像が想像できる説明）",
    ],
    career: [
      "志望動機：企業文脈に合わせて言い換えできる",
      "自己PR：根拠と具体で説得力が上がる",
      "ケース面接：論点整理→提案の流れが作れる",
      "企業比較：判断基準を自分で作れる",
      "提案型で動ける人材として評価されやすい",
    ],
    evaluation: [
      "提案が短く筋が通っている",
      "不安が整理されている",
      "判断基準（何が決まれば進むか）が明確",
    ],
  },
  {
    lv: 4,
    title: "クロージング×再現性（意思決定まで運ぶ）",
    action: "次の行動を合意し、結果を分析して型として改善する。",
    skills: [
      "意思決定支援（迷いをほどき行動に落とす）",
      "合意形成（期限・次ステップの明確化）",
      "背中押し（圧ではなく納得で促す）",
      "失注分析（理由を言語化し改善に落とす）",
      "再現性共有（型をチームへ展開）",
    ],
    career: [
      "最終面接：主体性・覚悟・決断力が伝わる",
      "不合格後：原因分析→改善ができる",
      "意思決定を前に進めた経験として語れる",
      "入社後：推進力として評価される",
      "結果が出るまで改善し続ける姿勢が武器",
    ],
    evaluation: [
      "次アクションが明確に確定している",
      "迷いの原因が言語化されている",
      "改善が次の行動に反映されている",
    ],
  },
];

export default App;
