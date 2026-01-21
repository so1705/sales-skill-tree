import React, { useMemo, useState } from "react";
import {
  ChevronRight,
  Zap,
  ShieldCheck,
  Layers,
  Award,
  BarChart3,
  Briefcase,
  ClipboardCheck,
  Check,
  ArrowRight,
  BookOpen,
  Search,
} from "lucide-react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("cover");

  const navItems = [
    { id: "cover", label: "表紙" },
    { id: "pyramid", label: "全体体系図" },
    { id: "appointer", label: "アポインター育成" },
    { id: "closer", label: "クローザー育成" },
  ];

  const BackgroundDecor = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50/0 via-slate-100/50 to-slate-200/20" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100/50 blur-[120px] rounded-full" />
    </div>
  );

  // --- helpers ---
  const pick = (arr, n) => (Array.isArray(arr) ? arr.slice(0, n) : []);
  const rest = (arr, n) => (Array.isArray(arr) ? arr.slice(n) : []);

  // --- Cover ---
  const CoverPage = () => (
    <div className="flex flex-col items-center justify-center min-h-[700px] bg-slate-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <div className="mb-10 flex items-center gap-4 px-6 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full backdrop-blur-md">
          <Award size={20} className="text-blue-400" />
          <span className="text-xs font-bold tracking-[0.2em] text-blue-100 uppercase">
            Strategic Training Curriculum
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-center leading-[1.1]">
          催事営業
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
            ステップアップ体系図
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-14 text-center leading-relaxed font-medium max-w-2xl">
          現場の「感覚」を再現できる「型」へ。
          <br />
          入口から意思決定までを、就活に転用できる形で言語化する。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16 px-4">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-4">
              <Zap size={28} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold border-l-4 border-blue-500 pl-4 uppercase tracking-tighter italic">
                Appointer
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              入口を作り、会話を前に進める。「第一印象」と「反応適応」を鍛える。
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck size={28} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold border-l-4 border-emerald-500 pl-4 uppercase tracking-tighter italic">
                Closer
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              課題を言語化し、提案で納得を作る。「意思決定を前に進める力」を鍛える。
            </p>
          </div>
        </div>

        <button
          onClick={() => setCurrentPage("pyramid")}
          className="group relative px-16 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-full shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-4 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 text-lg">全体像を見る</span>
          <ChevronRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );

  // --- Pyramid tier ---
  const PyramidTier = ({ level, title, description, colorClass, shadowClass, width }) => (
    <div className="relative flex flex-col items-center transition-all duration-500 hover:-translate-y-2" style={{ width: `${width}%` }}>
      <div className={`w-full py-6 px-4 rounded-xl border-2 ${colorClass} ${shadowClass} flex flex-col items-center relative overflow-hidden group`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-white/30" />
        <span className="text-[10px] font-black opacity-60 uppercase tracking-[0.2em]">Level 0{level}</span>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-[10px] opacity-80 font-medium text-center">{description}</p>
        <div className="absolute bottom-0 right-0 p-1 opacity-10 group-hover:opacity-20 transition-opacity">
          <Layers size={40} />
        </div>
      </div>
      {level > 1 && <div className="h-4 w-0.5 bg-slate-200" />}
    </div>
  );

  const PyramidView = () => (
    <div className="p-12 bg-white min-h-[700px] rounded-3xl text-slate-900 relative shadow-sm border border-slate-200 font-sans">
      <BackgroundDecor />
      <div className="relative z-10 max-w-5xl mx-auto">
        <header className="mb-20 text-center">
          <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-slate-500 text-[10px] font-black tracking-widest uppercase mb-4">
            Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">スキル相関と階層定義</h2>
          <p className="text-slate-500 font-medium">
            入口（接点）→ 会話（前進）→ 合意（行動）までを、再現できる形にする。
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-24">
          <div className="flex flex-col items-center">
            <div className="mb-14 text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200 mb-6 mx-auto rotate-3">
                <Zap size={32} />
              </div>
              <h4 className="text-2xl font-black text-slate-800 tracking-tight">アポインター育成パス</h4>
              <p className="text-xs font-bold text-blue-500 mt-2 uppercase tracking-[0.2em]">Acquisition Mastery</p>
            </div>

            <div className="w-full flex flex-col-reverse items-center">
              <PyramidTier level={1} title="声かけ基礎" description="第一印象の型を作る" colorClass="bg-blue-50 border-blue-100 text-blue-700" shadowClass="" width={75} />
              <PyramidTier level={2} title="会話の成立" description="1往復の会話を作る" colorClass="bg-blue-100 border-blue-200 text-blue-800" shadowClass="" width={82} />
              <PyramidTier level={3} title="誘導の設計" description="不安を潰し次へ運ぶ" colorClass="bg-blue-600 border-blue-600 text-white" shadowClass="shadow-2xl shadow-blue-200" width={90} />
              <PyramidTier level={4} title="再現性の確立" description="安定して成果を出し共有" colorClass="bg-slate-900 border-slate-900 text-white" shadowClass="shadow-2xl shadow-slate-300" width={100} />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-14 text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-200 mb-6 mx-auto -rotate-3">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-2xl font-black text-slate-800 tracking-tight">クローザー育成パス</h4>
              <p className="text-xs font-bold text-emerald-500 mt-2 uppercase tracking-[0.2em]">Decision Support</p>
            </div>

            <div className="w-full flex flex-col-reverse items-center">
              <PyramidTier level={1} title="商談構造理解" description="流れと決め手を掴む" colorClass="bg-emerald-50 border-emerald-100 text-emerald-700" shadowClass="" width={75} />
              <PyramidTier level={2} title="課題の構造化" description="課題を言語化する" colorClass="bg-emerald-100 border-emerald-200 text-emerald-800" shadowClass="" width={82} />
              <PyramidTier level={3} title="論理的提案" description="価値を翻訳し納得" colorClass="bg-emerald-600 border-emerald-600 text-white" shadowClass="shadow-2xl shadow-emerald-200" width={90} />
              <PyramidTier level={4} title="意思決定支援" description="合意と行動を確定" colorClass="bg-slate-900 border-slate-900 text-white" shadowClass="shadow-2xl shadow-slate-300" width={100} />
            </div>
          </div>
        </div>

        <div className="mt-28 pt-14 border-t border-slate-100 grid md:grid-cols-3 gap-10">
          {[
            { id: "01", title: "結論を先に言う", desc: "短く・ズレなく。対話も文章も同じ型で強くなる。" },
            { id: "02", title: "反応で微調整", desc: "相手の表情・テンポで言い方を変え、前に進める。" },
            { id: "03", title: "再現性を作る", desc: "調子ではなく型で勝つ。共有できると価値が跳ねる。" },
          ].map((p) => (
            <div key={p.id} className="relative p-8 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-black text-slate-200 mb-4 tracking-tighter">{p.id}</div>
              <h5 className="font-bold text-slate-800 mb-3">{p.title}</h5>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- Plan C detail: Tier split A/B ---
  const TierSlide = ({ mode, tier, tone }) => {
    // mode: "A" => ACTION+SKILL, "B" => CAREER+CHECK
    const primaryAction = tier.action;
    const showSkills = pick(tier.skills, 3);
    const showCareer = pick(tier.career, 3);
    const showCheck = pick(tier.evaluation, 2);

    const extra = useMemo(() => {
      return {
        skills: rest(tier.skills, 3),
        career: rest(tier.career, 3),
        evaluation: rest(tier.evaluation, 2),
      };
    }, [tier]);

    const [openNotes, setOpenNotes] = useState(false);

    const Label = ({ icon: Icon, text }) => (
      <div className="flex items-center gap-3 text-[11px] font-black text-slate-400 uppercase tracking-[0.25em]">
        <Icon size={16} className={tone.text} />
        <span>{text}</span>
      </div>
    );

    const Card = ({ children }) => (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">{children}</div>
    );

    return (
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden relative">
        <BackgroundDecor />
        <div className="relative z-10 p-12">
          <div className="flex items-start justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 bg-slate-900 text-white">
                Stage 0{tier.lv} {mode === "A" ? " / A" : " / B"}
              </div>

              <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 leading-tight">
                {tier.title}
              </h3>

              {/* Key message */}
              <p className="mt-4 text-lg font-black text-slate-700">
                {tier.keyMessage}
              </p>

              <p className="mt-2 text-sm text-slate-500 font-medium">
                {mode === "A" ? "現場の行動と、伸びるスキルの核だけを見る" : "就活への転用と、最低限のチェックだけを見る"}
              </p>
            </div>

            <div className={`hidden md:flex items-center gap-3 px-4 py-2 rounded-full border ${tone.badgeBorder} ${tone.badgeBg}`}>
              <span className={`text-[10px] font-black uppercase tracking-widest ${tone.badgeText}`}>
                {mode === "A" ? "Action & Skill" : "Career & Check"}
              </span>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            {/* Left: ACTION */}
            <div className="lg:col-span-4">
              <Card>
                <Label icon={ClipboardCheck} text="ACTION（現場アクション）" />
                <div className="mt-4">
                  <div className="text-sm font-bold text-slate-800 leading-relaxed">
                    {primaryAction}
                  </div>
                </div>
              </Card>

              {/* Notes toggle */}
              <button
                onClick={() => setOpenNotes((v) => !v)}
                className="mt-6 w-full flex items-center justify-between px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className="text-slate-400" />
                  <span className="text-sm font-black text-slate-700">ノート（詳細を保持）</span>
                </div>
                <ChevronRight className={`text-slate-400 transition-transform ${openNotes ? "rotate-90" : ""}`} />
              </button>

              {openNotes && (
                <div className="mt-4 p-6 rounded-2xl border border-slate-200 bg-white">
                  <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                    {/* keep extras without bloating slide */}
                    {mode === "A" && extra.skills?.length > 0 && (
                      <div>
                        <div className="font-black text-slate-600 mb-2">SKILL（追加）</div>
                        <ul className="list-disc ml-5 space-y-1">
                          {extra.skills.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {mode === "B" && extra.career?.length > 0 && (
                      <div>
                        <div className="font-black text-slate-600 mb-2">CAREER（追加）</div>
                        <ul className="list-disc ml-5 space-y-1">
                          {extra.career.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {mode === "B" && extra.evaluation?.length > 0 && (
                      <div>
                        <div className="font-black text-slate-600 mb-2">CHECK（追加）</div>
                        <ul className="list-disc ml-5 space-y-1">
                          {extra.evaluation.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tier.prTemplate && (
                      <div className="pt-2 border-t border-slate-100">
                        <div className="font-black text-slate-600 mb-2">ガクチカ / 自己PRテンプレ</div>
                        <div className="text-slate-600 whitespace-pre-line">{tier.prTemplate}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right: SKILL or CAREER/CHECK */}
            <div className="lg:col-span-8 space-y-10">
              {mode === "A" && (
                <Card>
                  <Label icon={BarChart3} text="SKILL（身につく営業スキル）" />
                  <div className="mt-5 space-y-4">
                    {showSkills.map((s, i) => (
                      <div key={i} className="flex gap-4">
                        <div className={`mt-1 h-6 w-6 rounded-xl flex items-center justify-center shrink-0 border ${tone.border} bg-white`}>
                          <Check size={14} className={tone.text} />
                        </div>
                        <span className="text-[15px] text-slate-700 leading-relaxed font-bold">{s}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {mode === "B" && (
                <>
                  <Card>
                    <Label icon={Briefcase} text="CAREER（就活での活き方）" />
                    <div className="mt-5 space-y-4">
                      {showCareer.map((c, i) => (
                        <div key={i} className="flex gap-4 bg-slate-50/80 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                          <ArrowRight size={18} className="text-slate-300 mt-0.5 shrink-0" />
                          <span className="text-[14px] text-slate-800 leading-relaxed font-bold">{c}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card>
                    <Label icon={ClipboardCheck} text="CHECK（評価ポイント）" />
                    <div className="mt-5 grid md:grid-cols-2 gap-4">
                      {showCheck.map((ev, i) => (
                        <div key={i} className="flex items-start gap-4 bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                          <div className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${tone.border} bg-white`}>
                            <Check size={14} className={tone.text} />
                          </div>
                          <span className="text-sm text-slate-700 font-bold leading-relaxed">{ev}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-slate-500 font-medium">
                      ※チェックは2つだけ。増やすほど熱が下がる。
                    </p>
                  </Card>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SectionDetail = ({ title, icon: Icon, data, tone }) => {
    const [activeLv, setActiveLv] = useState(4); // default: LV4 from your flow
    const [mode, setMode] = useState("A"); // A then B
    const tier = data.find((t) => t.lv === activeLv) ?? data[0];

    return (
      <div className="min-h-[700px] rounded-3xl font-sans relative">
        <div className={`p-10 rounded-3xl border ${tone.headerBorder} ${tone.headerBg} relative overflow-hidden`}>
          <BackgroundDecor />
          <div className="relative z-10 flex items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className={`${tone.iconBg} p-5 rounded-2xl shadow-xl text-white`}>
                <Icon size={38} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">
                  {title} <span className="text-slate-400 font-medium">育成（Plan C）</span>
                </h2>
                <p className="mt-2 text-sm text-slate-600 font-bold">
                  1階層＝2枚（A: Action+Skill / B: Career+Check）で、パッと入る形に固定。
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              {/* Level selector */}
              {[4, 3, 2, 1].map((lv) => (
                <button
                  key={lv}
                  onClick={() => {
                    setActiveLv(lv);
                    setMode("A");
                  }}
                  className={`px-5 py-3 rounded-2xl text-xs font-black transition-all border ${
                    activeLv === lv
                      ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                      : "bg-white/70 text-slate-600 border-slate-200 hover:bg-white"
                  }`}
                >
                  LV{lv}
                </button>
              ))}

              {/* A/B selector */}
              <div className="flex bg-white/70 border border-slate-200 rounded-2xl p-1">
                <button
                  onClick={() => setMode("A")}
                  className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
                    mode === "A" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  A
                </button>
                <button
                  onClick={() => setMode("B")}
                  className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
                    mode === "B" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  B
                </button>
              </div>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="mt-8 md:hidden flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-2">
              {[4, 3, 2, 1].map((lv) => (
                <button
                  key={lv}
                  onClick={() => {
                    setActiveLv(lv);
                    setMode("A");
                  }}
                  className={`py-3 rounded-xl text-xs font-black transition-all border ${
                    activeLv === lv
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  LV{lv}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMode("A")}
                className={`py-3 rounded-xl text-xs font-black transition-all border ${
                  mode === "A"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200"
                }`}
              >
                A（Action+Skill）
              </button>
              <button
                onClick={() => setMode("B")}
                className={`py-3 rounded-xl text-xs font-black transition-all border ${
                  mode === "B"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200"
                }`}
              >
                B（Career+Check）
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <TierSlide mode={mode} tier={tier} tone={tone} />
        </div>
      </div>
    );
  };

  // --- tones ---
  const toneBlue = {
    text: "text-blue-600",
    border: "border-blue-200",
    badgeBg: "bg-blue-50",
    badgeBorder: "border-blue-200",
    badgeText: "text-blue-700",
    headerBg: "bg-blue-50/60",
    headerBorder: "border-blue-200",
    iconBg: "bg-blue-600",
  };

  const toneGreen = {
    text: "text-emerald-600",
    border: "border-emerald-200",
    badgeBg: "bg-emerald-50",
    badgeBorder: "border-emerald-200",
    badgeText: "text-emerald-700",
    headerBg: "bg-emerald-50/60",
    headerBorder: "border-emerald-200",
    iconBg: "bg-emerald-600",
  };

  return (
    <div className="max-w-7xl mx-auto my-12 font-sans antialiased text-slate-900 px-6">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white/90 border border-slate-200 p-2.5 rounded-2xl shadow-xl mb-12 sticky top-6 z-50 backdrop-blur-xl">
        <div className="flex items-center gap-4 px-6">
          <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black shadow-lg">
            教
          </div>
          <div className="hidden sm:block">
            <span className="text-[10px] font-black text-slate-400 block uppercase tracking-widest leading-none mb-1">
              Internship Textbook
            </span>
            <span className="text-sm font-black text-slate-900 tracking-tighter">
              実務能力開発プログラム
            </span>
          </div>
        </div>

        <div className="flex gap-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                currentPage === item.id
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="px-6 border-l border-slate-100">
          <Search size={20} className="text-slate-300 hover:text-slate-900 cursor-pointer transition-colors" />
        </div>
      </nav>

      <main className="transition-all duration-700">
        {currentPage === "cover" && <CoverPage />}
        {currentPage === "pyramid" && <PyramidView />}
        {currentPage === "appointer" && (
          <SectionDetail title="Appointer" icon={Zap} data={appointerDataPlanC} tone={toneBlue} />
        )}
        {currentPage === "closer" && (
          <SectionDetail title="Closer" icon={ShieldCheck} data={closerDataPlanC} tone={toneGreen} />
        )}
      </main>

      <footer className="mt-20 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Project</span>
            <span className="text-xs font-bold text-slate-600">Strategic Sales Internship Mastery</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Version</span>
            <span className="text-xs font-bold text-slate-600">Plan C UI</span>
          </div>
        </div>
        <div className="flex items-center gap-3 px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">Verified Program</span>
        </div>
      </footer>
    </div>
  );
};

/**
 * Plan C データ：
 * - keyMessage: 結論1行（必須）
 * - skills/career/evaluation は元データを保持したままOK（UI側で3/3/2に制限して表示）
 * - prTemplate: 後半Bのノートに入れる（ガクチカ/自己PR化）
 */

const appointerDataPlanC = [
  {
    lv: 1,
    title: "声かけ基礎（入口の型づくり）",
    keyMessage: "第一印象を“型”で安定させる",
    action: "第一声を最短化し、反応を見て言い回しを即時改善する。",
    skills: [
      "言葉を削り要点のみを伝える「簡潔化」",
      "トーン・表情・距離感の「第一印象設計」",
      "拒絶を変数として捉える「感情の安定」",
      "反応から改善案を出す「仮説→検証」",
    ],
    career: [
      "面接：冒頭30秒が感じよく安定する",
      "ES：結論先行で読みやすく書ける",
      "失敗耐性：落ちても改善して次へ行ける",
      "GD：空気を整える一言が出せる",
    ],
    evaluation: [
      "第一声が短く、説明に入っていない",
      "反応に合わせて言い方を変えられる",
      "断られてもテンションが落ちない",
    ],
    prTemplate:
      "状況：初対面の相手が話を聞かない場面\n課題：警戒を解き、会話を成立させる必要\n行動：第一声の短文化＋反応観察→即修正\n結果：会話成立率が上がり、改善も継続\n学び：第一印象は“型”で再現できる",
  },
  {
    lv: 2,
    title: "会話の成立（対話の構造化）",
    keyMessage: "1往復の会話で“前に進む”",
    action: "返答を引き出し、相手の返答を次の問いに繋げて会話を前進させる。",
    skills: [
      "答えやすい問いを作る「質問設計」",
      "間・リズム・量の「テンポ管理」",
      "相槌と要約で信頼を作る「受け止め」",
      "タイプ別に進め方を変える「反応適応」",
      "一定量で確率を上げる「打席思考」",
    ],
    career: [
      "面接：質問意図を掴みズレずに返す",
      "深掘り：追加質問でも論点を保てる",
      "GD：議論を進める質問ができる",
      "OB訪問：相手が話したくなる質問が作れる",
      "逆質問：返答を受けて次の質問に繋げられる",
    ],
    evaluation: [
      "1往復以上の会話が一定数作れている",
      "返答後に詰まらず次が出る",
      "会話が長引かず次に進む意識がある",
    ],
    prTemplate:
      "状況：短時間で相手の反応が読みにくい\n課題：会話を成立させ前進させる\n行動：質問設計→要約→次の問いへ接続\n結果：会話の成立率が上がり、提案へ繋げられた\n学び：対話は“問い”で進む",
  },
  {
    lv: 3,
    title: "誘導設計（不安払拭の論理）",
    keyMessage: "不安を潰して、次へ運ぶ",
    action: "相手の不安（時間・目的・安心）を先回りして言語化し、次の場へ自然に繋ぐ。",
    skills: [
      "立ち話→本題へ運ぶ「導線設計」",
      "引っかかりを先回りする「不安処理」",
      "枠組みを示す「フレーミング」",
      "小さな承諾を積む「合意形成」",
      "話しやすい空気を作る「場づくり」",
    ],
    career: [
      "面接：回答の枠組みを自分で作れる",
      "GD：時間配分や論点整理を提案できる",
      "面談：懸念を先回りして潰せる",
      "志望動機：企業側の不安を踏まえた言い方ができる",
      "意思決定：軸を整理して次の行動を決められる",
    ],
    evaluation: [
      "次のステップへの繋ぎが自然",
      "不安を言語化して先に潰せている",
      "雑談で終わらず前進している",
    ],
    prTemplate:
      "状況：相手が時間や目的に不安を持つ\n課題：押し売り感なく次へ繋ぐ\n行動：不安の言語化→枠組み提示→小さな合意\n結果：次ステップへの移行率が上がった\n学び：不安処理が信頼を作る",
  },
  {
    lv: 4,
    title: "再現性の確立とナレッジ化",
    keyMessage: "ムラなく取って、次に繋げる",
    action: "相手タイプ別に進め方を変えて安定して入口を作り、必要情報を整理して次担当へ渡す。",
    skills: [
      "調子ではなく型で勝つ「再現性」",
      "要点を抜いて渡す「情報整理」",
      "押す/引く/渡すの「状況判断」",
      "翌日反映し続ける「改善継続」",
      "成果をチームに繋げる「連携」",
      "型を言語化する「育成視点」",
    ],
    career: [
      "面接：感じよく簡潔にズレなく話せる",
      "ES：要点抽出が上手くなり読みやすい",
      "GD：要点をまとめ共有できる",
      "入社後：報連相が強い人として評価",
      "伸びしろ：改善サイクルを語れる",
    ],
    evaluation: [
      "成果のムラが小さい",
      "共有が短く分かりやすい",
      "改善が継続して見える",
    ],
    prTemplate:
      "状況：日によって成果がブレる\n課題：型で安定させ、次工程へ繋ぐ\n行動：相手タイプ別の型→要点整理→共有\n結果：成果が安定し、チーム全体の成功率も向上\n学び：再現性は共有で完成する",
  },
];

const closerDataPlanC = [
  {
    lv: 1,
    title: "商談構造の把握（分析・改善）",
    keyMessage: "商談の“決め手”を構造で掴む",
    action: "商談の流れを構造的に記録し、意思決定の決め手と不安を特定する。",
    skills: [
      "決断を動かす全体像の「構造理解」",
      "決め手/不安を拾う「要点抽出」",
      "出来事を因果でまとめる「言語化」",
      "論点を外さない「俯瞰力」",
      "上手い型を盗む「学習速度」",
    ],
    career: [
      "面接練習：振り返りが具体で改善が速い",
      "GD：論点を見失わず全体像で整理できる",
      "ES：経験を構造で書ける（背景→行動→結果→学び）",
      "企業研究：情報を論点で整理してインプットできる",
      "強み化：サポートで成果を出すタイプとして語れる",
    ],
    evaluation: [
      "メモが要点中心で流れが追える",
      "決め手/不安が拾えている",
      "振り返りが次の改善に繋がる",
    ],
    prTemplate:
      "状況：商談がなぜ決まるか不明瞭\n課題：決め手と不安を特定して再現\n行動：構造メモ→因果整理→次の改善設計\n結果：改善が速くなり、成功要因が言語化できた\n学び：成果は構造化で再現できる",
  },
  {
    lv: 2,
    title: "課題の構造化（ヒアリング）",
    keyMessage: "課題を言語化し、認識を揃える",
    action: "現状・理想・障害・優先順位を質問で整理し、要約して認識を合わせる。",
    skills: [
      "一段深く掘る「質問力」",
      "現状/理想/障害を整理する「構造化」",
      "ズレを防ぐ「要約・確認」",
      "安心して話せる「共感の質」",
      "聞きながら修正する「仮説検証」",
    ],
    career: [
      "面接：深掘りでも理由と背景が言える",
      "逆質問：企業の状況を引き出せる",
      "GD：拡散を要約して議論を戻せる",
      "自己分析：行動理由を掘れて強みが言語化される",
      "基礎力：聞く力が高く評価されやすい",
    ],
    evaluation: [
      "課題が言語化されている",
      "要約確認ができズレが少ない",
      "質問が浅く終わらず一段掘れている",
    ],
    prTemplate:
      "状況：相手の課題が曖昧\n課題：優先順位を含めて言語化する\n行動：質問→要約→確認→仮説修正\n結果：認識が揃い、提案が刺さりやすくなった\n学び：整理ができると意思決定が進む",
  },
  {
    lv: 3,
    title: "論理的提案（価値の翻訳）",
    keyMessage: "価値を翻訳し、納得を作る",
    action: "相手の言葉で価値を翻訳し、判断基準を作って迷いを減らす。",
    skills: [
      "特徴→利益へ変える「価値の翻訳」",
      "結論→理由→具体の「ロジック構築」",
      "迷いを減らす「比較軸設計」",
      "不安を論点化する「反論処理」",
      "未来像が浮かぶ「ストーリー化」",
    ],
    career: [
      "志望動機：企業文脈に合わせて言い換えできる",
      "自己PR：根拠と具体で説得力が上がる",
      "ケース面接：論点整理→提案の流れが作れる",
      "企業比較：判断基準ができ迷いが減る",
      "入社後：提案型で評価されやすい",
    ],
    evaluation: [
      "提案が短く筋が通っている",
      "不安が整理され解消できている",
      "判断基準が明確になっている",
    ],
    prTemplate:
      "状況：相手が迷って決められない\n課題：納得できる判断基準を作る\n行動：価値の翻訳→比較軸→不安の論点化\n結果：迷いが減り、意思決定が進んだ\n学び：判断軸が納得を生む",
  },
  {
    lv: 4,
    title: "意思決定支援（完遂能力）",
    keyMessage: "合意と行動を“確定”させる",
    action: "最後の迷いを言語化し、納得で背中を押して次アクションを確定させる。",
    skills: [
      "迷いをほどく「意思決定支援」",
      "期限と行動を決める「合意形成」",
      "圧でなく納得で促す「背中押し」",
      "失注理由を分析する「勝敗分析」",
      "型をチームへ展開する「再現性共有」",
    ],
    career: [
      "最終面接：主体性と覚悟として伝わる",
      "不合格後：原因分析→改善ができる",
      "リーダー経験：意思決定を前に進めた経験になる",
      "入社後：プロジェクト推進力として評価される",
      "長期：結果が出るまで改善し続ける姿勢が武器",
    ],
    evaluation: [
      "次アクションが明確に確定している",
      "迷いの原因が言語化されている",
      "振り返りが型に落ちている",
    ],
    prTemplate:
      "状況：最後の迷いで止まる\n課題：納得で決断を前に進める\n行動：迷いの言語化→不安解消→次行動の合意\n結果：決断が進み、再現性も上がった\n学び：合意は“行動確定”までがセット",
  },
];

export default App;
