import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronRight,
  Zap,
  ShieldCheck,
  Check,
  ArrowRight,
  ClipboardCheck,
  Briefcase,
  Search,
  Award,
} from "lucide-react";

/**
 * Strategic Sales Mastery Guide
 * - Marble Texture Background
 * - Integrated Scroll Textbook UI
 * - Sticky Nav + Active Section Sync
 */

const App = () => {
  const sections = useMemo(
    () => [
      { id: "cover", label: "表紙" },
      { id: "pyramid", label: "全体体系図" },
      { id: "catcher", label: "キャッチャー" },
      { id: "closer", label: "クローザー" },
    ],
    []
  );

  const [active, setActive] = useState("cover");

  const coverRef = useRef(null);
  const pyramidRef = useRef(null);
  const catcherRef = useRef(null);
  const closerRef = useRef(null);

  const refMap = {
    cover: coverRef,
    pyramid: pyramidRef,
    catcher: catcherRef,
    closer: closerRef,
  };

  const scrollTo = (id) => {
    const el = refMap[id]?.current;
    if (!el) return;

    const offset = 110; // Nav height offset
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const targets = Object.entries(refMap)
      .map(([id, r]) => ({ id, el: r.current }))
      .filter((x) => x.el);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.dataset?.section) {
          setActive(visible.target.dataset.section);
        }
      },
      {
        root: null,
        threshold: [0.1, 0.3, 0.5],
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    targets.forEach(({ el }) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- CONTENT DATA ---

  const catcherElements = [
    {
      no: "01",
      title: '心を開かせて“聞く姿勢”を作る力',
      icon: Zap,
      why: "営業で一番最初に必要なのは、提案の上手さよりも「相手が話を聞く状態」になっていること。ここが作れないとニーズも引き出せません。警戒を下げて“聞く空気”を作る力を、反復で型にしていきます。",
      stage: "商談の入口の型づくり。第一声を短く、反応を見て、トーンと距離感を微調整する練習。",
      career: [
        "面接：冒頭の自己紹介が短く、落ち着いて、感じよく入れる（第一印象が安定）",
        "OB訪問：初対面での声かけが自然になり、関係構築が早くなる",
        "ES：冗長さが減り、結論から書ける（読み手の負担が減る）",
        "GD：場の空気を整える一言が出せる（発言の入口が作れる）",
      ],
      checks: ["第一声が短い（説明が始まっていない）", "反応に合わせて言い方を変えられている"],
    },
    {
      no: "02",
      title: "回数を積み上げる行動量の力",
      icon: Zap,
      why: "営業は一定の確率の勝負です。現実は「回数を積んだ人」が最後に勝つ。断られてもテンポを落とさず、行動量を積み上げられる“基礎体力”を鍛える場です。",
      stage: "「次に進む力の定着」。断られても止まらず、会話を長引かせず、日によって行動量を落とさない訓練。",
      career: [
        "就活全体：応募・面接・OB訪問の行動量を落とさず走れる",
        "不合格後：感情で止まらず、次へ切り替えられる",
        "インターン：与えられた打席数をやり切れる人として信頼される",
        "入社後：最初に求められる“量”を出せる（成長速度が上がる）",
      ],
      checks: ["断られてもテンションが崩れにくい", "一定の行動量を継続できている"],
    },
    {
      no: "03",
      title: "分析を繰り返して身につく改善力",
      icon: Zap,
      why: "キャッチャーは反応がすぐ分かります。だから自然と仮説→実行→修正の回転が速くなり、感覚ではなく“再現できる勝ちパターン”が作れるようになります。",
      stage: "「反応の言語化→次に反映」。今日うまくいった点/悪かった点を整理して翌日の声かけに反映する。",
      career: [
        "面接：回数を重ねるほど改善が見える（伸びしろとして伝わる）",
        "ES：添削の直し方が“構造的”になる（直すべき点が明確）",
        "GD：失敗を分析して次で役割や立ち回りを変えられる",
        "自己分析：経験を言語化して強みに変えられる",
      ],
      checks: ["振り返りが具体的（改善策が決まっている）", "翌日の行動に修正が反映されている"],
    },
    {
      no: "04",
      title: "相手に合わせて会話を成立させる力",
      icon: Zap,
      why: "年齢も性格も違う相手が連続で来ます。反応を見てテンポ・言葉・距離感を変える必要がある。これが積み上がると、社会人の基礎になる“対人調整力”が上がります。",
      stage: "「相手の状態を掴み、押す/引く/切り替える判断」。短時間で相手の温度感を見極める。",
      career: [
        "面接：面接官タイプに合わせて話し方を調整できる",
        "OB訪問：相手が話しやすい距離感・質問が作れる",
        "GD：多様な意見を受け止め、合意形成に寄れる",
        "入社後：部署外や取引先とも関係を作れる",
      ],
      checks: ["相手タイプ別にテンポ/言い方を変えられる", "会話が途切れず次の一手が出る"],
    },
  ];

  const closerElements = [
    {
      no: "01",
      title: "本音を引き出すヒアリング力",
      icon: ShieldCheck,
      why: "クローザーは相手の状況・悩み・優先順位を“言語化させる”役割です。表面的な要望で終わらず、本音や迷いの原因まで掘れたときに提案の精度が一気に上がります。",
      stage: "現状/理想/障害/期限を整理して、認識を合わせる。要約でズレを消す。",
      career: [
        "面接：深掘りで詰まらない（背景と理由が言語化できる）",
        "逆質問：企業側の状況を引き出し、学びの密度が上がる",
        "GD：議論が拡散したときに整理して戻せる",
        "自己分析：自分の行動理由を掘れて、一貫した軸が作れる",
      ],
      checks: ["相手の課題が“自分の言葉”で言語化できている", "要約確認による合意形成ができている"],
    },
    {
      no: "02",
      title: "刺さる提案を組み立てる力",
      icon: ShieldCheck,
      why: "提案は“正しさ”ではなく“相手に刺さる形”で出す必要があります。相手の言葉に翻訳し判断軸を作る。ここまでできると提案は通りやすくなります。",
      stage: "「結論→理由→具体→次の順で、短く筋を通す」。比較軸を作って迷いを減らす。",
      career: [
        "志望動機：企業の文脈に合わせて言い換えができる",
        "自己PR：根拠と具体で説得力ある説明ができる",
        "ケース面接：論点整理→提案の流れを作れる",
        "企業比較：判断基準を作れて迷いが減る",
      ],
      checks: ["提案が簡潔で筋が通っている", "判断基準が明確で迷いを減らせている"],
    },
    {
      no: "03",
      title: "不安をほどいて決断に導く力",
      icon: ShieldCheck,
      why: "止まる原因は反論よりも“不安”です。論点を整理して不安を小さく分解し、納得で前に進める。ここができると成約率の上振れが起きます。",
      stage: "「不安を言語化→一つずつ解消」。圧で押すのではなく、納得に変換する。",
      career: [
        "面接：弱みを聞かれても、前向きに整理して説明できる",
        "GD：反対意見が出ても論点を整えて前に進められる",
        "対人交渉：相手の懸念を先回りして潰せる（信頼の構築）",
        "入社後：関係者の不安をほどいてプロジェクトを推進できる",
      ],
      checks: ["迷いの原因を言語化できている", "不安が整理され次の一歩が見えている"],
    },
    {
      no: "04",
      title: "決断まで運び切るクロージング力",
      icon: ShieldCheck,
      why: "最後は次の行動を“合意”として確定させる力です。やる/やらないを曖昧にせず、期限と次ステップをセットで決める。これが“完遂力”になります。",
      stage: "「次アクションの確定」と「勝敗分析」。良かった点/詰まった点を型として更新する。",
      career: [
        "最終面接：主体性・覚悟・決断力として伝わる",
        "不合格後：原因分析→改善ができる（成長力のアピール）",
        "リーダー経験：意思決定を前に進めた経験として語れる",
        "入社後：推進力・完遂力として評価されやすい",
      ],
      checks: ["次アクション（期限・内容）が確定している", "振り返りが型の更新に繋がっている"],
    },
  ];

  // --- UI COMPONENTS ---

  const MarbleBackground = () => (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#fdfdfd]">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(30deg, transparent 45%, #000 48%, #000 50%, transparent 52%),
                            linear-gradient(-30deg, transparent 40%, #000 42%, #000 43%, transparent 45%)`,
          backgroundSize: "1200px 1200px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.9),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/30 via-transparent to-slate-200/30" />
    </div>
  );

  const ElementCard = ({ item, role }) => {
    const isCatcher = role === "catcher";
    const accentColor = isCatcher ? "text-blue-600" : "text-emerald-600";
    const bgAccent = isCatcher ? "bg-blue-600" : "bg-emerald-600";
    const pillBg = isCatcher
      ? "bg-blue-50 border-blue-100 text-blue-700"
      : "bg-emerald-50 border-emerald-100 text-emerald-700";

    return (
      <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2.5rem] shadow-xl p-8 md:p-12 relative group hover:shadow-2xl transition-all duration-500">
        <div className="absolute -top-10 left-10 text-[10rem] font-black text-slate-100 select-none -z-10 tracking-tighter">
          {item.no}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side */}
          <div className="lg:w-2/5">
            <div
              className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border mb-6 ${pillBg} font-black text-[10px] tracking-widest uppercase`}
            >
              {role} Stage {item.no}
            </div>

            <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
              {item.title}
            </h3>

            <div className={`${bgAccent} w-12 h-1 mb-6 rounded-full`} />

            <p className="text-slate-600 text-sm leading-relaxed font-bold">
              {item.why}
            </p>

            <div className="mt-8 p-6 bg-slate-50 border border-slate-100 rounded-3xl">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                現場でのアクション段階
              </span>
              <p className="text-sm font-black text-slate-800 leading-relaxed italic">
                「{item.stage}」
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-3/5 space-y-10">
            <div>
              <h4 className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6 border-b border-slate-100 pb-3">
                <Briefcase size={16} className={accentColor} /> 就活での強み
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {item.career.map((c, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-300 transition-colors"
                  >
                    <ArrowRight size={14} className="text-slate-300 mt-1 shrink-0" />
                    <span className="text-xs text-slate-700 font-black leading-relaxed">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group/audit">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <ClipboardCheck size={100} className="text-white" />
              </div>

              <div className="relative z-10">
                <h4 className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em] mb-6 text-center">
                  Mastery Audit
                </h4>

                <div className="grid sm:grid-cols-2 gap-4">
                  {item.checks.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group/check"
                    >
                      <div className="w-6 h-6 rounded-lg border-2 border-white/20 flex items-center justify-center group-hover/check:border-orange-500 transition-colors shrink-0">
                        <Check
                          size={14}
                          className="text-orange-500 opacity-0 group-hover/check:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-xs text-slate-200 font-bold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-orange-100">
      <MarbleBackground />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl">
        <div className="bg-white/90 backdrop-blur-2xl border border-slate-200 p-2.5 rounded-full shadow-2xl flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-950 text-white rounded-full flex items-center justify-center font-black shadow-lg">
              教
            </div>
            <div className="hidden sm:block">
              <span className="text-[9px] font-black text-slate-400 block uppercase tracking-widest leading-none mb-0.5">
                Strategic Mastery
              </span>
              <span className="text-xs font-black text-slate-900">実務能力開発教科書</span>
            </div>
          </div>

          <div className="flex gap-1.5 bg-slate-100 p-1 rounded-full">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-black transition-all whitespace-nowrap ${
                  active === s.id
                    ? "bg-white text-orange-500 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Search size={18} className="text-slate-300 hover:text-slate-900 cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Body Content */}
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-20 space-y-32">
        {/* COVER */}
        <section
          ref={coverRef}
          data-section="cover"
          className="relative min-h-[600px] flex flex-col items-center justify-center text-center p-12 bg-slate-950 text-white rounded-[3rem] shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative z-10 flex flex-col items-center max-w-3xl">
            <div className="mb-10 inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full animate-bounce-slow">
              <Award size={18} className="text-orange-400" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">
                Special Training Module
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
              催事営業<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-emerald-400">
                実務習得の教科書
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-14 leading-relaxed font-medium">
              現場の「感覚」を、再現可能な「型」へと定義し直す。<br />
              就職活動で最強の武器となる論理的思考力と完遂能力をここで習得する。
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => scrollTo("pyramid")}
                className="px-12 py-5 bg-white text-slate-950 font-black rounded-2xl shadow-xl flex items-center gap-3 hover:scale-105 transition-all"
              >
                学習を開始する <ChevronRight size={20} />
              </button>
              <button
                onClick={() => scrollTo("catcher")}
                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-all"
              >
                キャッチャーから読む <ArrowRight size={20} className="opacity-40" />
              </button>
            </div>
          </div>
        </section>

        {/* PYRAMID */}
        <section
          ref={pyramidRef}
          data-section="pyramid"
          className="relative p-12 md:p-20 bg-white/60 backdrop-blur-md rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden"
        >
          <header className="mb-20 text-center">
            <h2 className="text-xs font-black text-slate-400 tracking-[0.4em] uppercase mb-4">
              Architecture
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              全体体系図（ピラミッド）
            </h3>
            <p className="mt-6 text-slate-500 font-bold max-w-2xl mx-auto">
              成長の全行程を四大要素で可視化。ここが本教科書の設計図です。
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-24">
            {/* Catcher Path */}
            <div className="flex flex-col items-center">
              <div className="mb-14 text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto">
                  <Zap size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-800 tracking-tight">
                  Catcher Path
                </h4>
                <p className="text-xs font-bold text-blue-500 mt-2 uppercase tracking-widest">
                  ～ 突破力を磨く ～
                </p>
              </div>

              {/* ✅ ここが修正点：flex-col-reverse → flex-col（上からLevel1→4） */}
              <div className="w-full flex flex-col items-center gap-3">
                {[
                  { lv: 1, name: "聞く姿勢を作る", desc: "第一印象と警戒緩和", color: "bg-blue-50 border-blue-100 text-blue-700" },
                  { lv: 2, name: "回数を積む", desc: "行動量の最大化と基礎体力", color: "bg-blue-100 border-blue-200 text-blue-800" },
                  { lv: 3, name: "分析し改善する", desc: "勝ちパターンの言語化", color: "bg-blue-600 border-blue-600 text-white" },
                  { lv: 4, name: "相手に合わせる", desc: "適応力と会話の成立", color: "bg-slate-900 border-slate-900 text-white shadow-2xl" },
                ].map((item) => (
                  <div
                    key={item.lv}
                    className={`${item.color} w-full p-6 rounded-2xl border flex flex-col items-center shadow-md transition-all hover:scale-105 cursor-pointer`}
                    style={{ maxWidth: `${70 + item.lv * 7.5}%` }}
                    onClick={() => scrollTo("catcher")}
                    title={item.desc}
                  >
                    <span className="text-[10px] font-black opacity-50 uppercase tracking-tighter">
                      Level 0{item.lv}
                    </span>
                    <span className="font-bold text-base">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closer Path */}
            <div className="flex flex-col items-center">
              <div className="mb-14 text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-800 tracking-tight">
                  Closer Path
                </h4>
                <p className="text-xs font-bold text-emerald-500 mt-2 uppercase tracking-widest">
                  ～ 完遂力を磨く ～
                </p>
              </div>

              {/* ✅ ここも修正点：flex-col-reverse → flex-col（上からLevel1→4） */}
              <div className="w-full flex flex-col items-center gap-3">
                {[
                  { lv: 1, name: "本音を引き出す", desc: "課題の特定と要約", color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
                  { lv: 2, name: "提案を刺す", desc: "価値翻訳と論理構成", color: "bg-emerald-100 border-emerald-200 text-emerald-800" },
                  { lv: 3, name: "不安をほどく", desc: "懸念解消と納得感", color: "bg-emerald-600 border-emerald-600 text-white" },
                  { lv: 4, name: "決断まで運ぶ", desc: "合意形成とクロージング", color: "bg-slate-900 border-slate-900 text-white shadow-2xl" },
                ].map((item) => (
                  <div
                    key={item.lv}
                    className={`${item.color} w-full p-6 rounded-2xl border flex flex-col items-center shadow-md transition-all hover:scale-105 cursor-pointer`}
                    style={{ maxWidth: `${70 + item.lv * 7.5}%` }}
                    onClick={() => scrollTo("closer")}
                    title={item.desc}
                  >
                    <span className="text-[10px] font-black opacity-50 uppercase tracking-tighter">
                      Level 0{item.lv}
                    </span>
                    <span className="font-bold text-base">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CATCHER */}
        <section ref={catcherRef} data-section="catcher" className="space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 px-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-blue-700 font-black text-[10px] tracking-widest uppercase mb-4">
                Section 01
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                キャッチャー：四大要素
              </h2>
            </div>

            <button
              onClick={() => scrollTo("closer")}
              className="flex items-center gap-3 px-8 py-3 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition shadow-lg"
            >
              次：クローザーへ <ChevronRight size={18} />
            </button>
          </div>

          <div className="space-y-24">
            {catcherElements.map((el) => (
              <ElementCard key={el.no} item={el} role="catcher" />
            ))}
          </div>
        </section>

        {/* CLOSER */}
        <section ref={closerRef} data-section="closer" className="space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 px-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-emerald-700 font-black text-[10px] tracking-widest uppercase mb-4">
                Section 02
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                クローザー：四大要素
              </h2>
            </div>

            <button
              onClick={() => scrollTo("cover")}
              className="flex items-center gap-3 px-8 py-3 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition shadow-sm"
            >
              表紙へ戻る <ArrowRight size={18} />
            </button>
          </div>

          <div className="space-y-24">
            {closerElements.map((el) => (
              <ElementCard key={el.no} item={el} role="closer" />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-slate-100 text-center font-black text-slate-300 uppercase tracking-[0.5em] text-[10px]">
        © 2024 Strategic Mastery Framework — Career Design Unit
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(-5%); }
              50% { transform: translateY(0); }
            }
            .animate-bounce-slow {
              animation: bounce-slow 4s ease-in-out infinite;
            }
          `,
        }}
      />
    </div>
  );
};

export default App;
