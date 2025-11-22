import React, { useState } from 'react';
import { BookOpen, Scale, Users, Lightbulb, Crown, Anchor, Scroll, X, Info, Sparkles, Send, MessageCircle, Trophy, Feather } from 'lucide-react';

// Renamed the component to App for standard convention
const SevenSagesApp = () => { 
  const [selectedSage, setSelectedSage] = useState(null);
  
  // State for AI Chat
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);

  // API Key setup
  const apiKey = "AIzaSyCm4F6fmunOvynudM8IRLE0OvzTrRSgrD4"; // The execution environment provides the key at runtime

  const sages = [
    {
      id: 1,
      name: "طاليس الملطي",
      greekName: "Thales of Miletus",
      role: "الفيلسوف الأول",
      city: "ميليتوس (تركيا حالياً)",
      quote: "اعرف نفسك.",
      icon: <Lightbulb strokeWidth={1.5} />,
      description: "يُعتبر أب الفلسفة اليونانية. كان عالم رياضيات وفلكياً بارعاً. اشتهر بتنبؤه بكسوف الشمس واعتبر أن 'الماء' هو العنصر الأساسي الذي يتكون منه كل شيء.",
      color: "from-blue-500 to-cyan-400",
      personality: "أنت طاليس، عالم وفيلسوف عقلاني، تركز على الطبيعة والماء والمنطق.",
      achievements: [
        "تنبأ بكسوف الشمس الكلي عام 585 ق.م بدقة.",
        "وضع نظريات هندسية (مبرهنة طاليس) لا تزال تدرس حتى اليوم.",
        "أول من حاول تفسير الظواهر الطبيعية دون اللجوء للأساطير."
      ],
      story: "يُحكى أنه بينما كان يسير ليلاً يتأمل النجوم، سقط في بئر، فسخرت منه خادمة قائلة: 'كيف تريد أن تعرف ما في السماء وأنت لا ترى ما تحت قدميك؟'.. لكنه أثبت براعته لاحقاً عندما تنبأ بموسم حصاد وفير للزيتون واحتكر المعاصر ليثبت أن الفلاسفة يمكنهم جمع المال لكنهم يترفعون عنه."
    },
    {
      id: 2,
      name: "صولون الأثيني",
      greekName: "Solon of Athens",
      role: "المشرع الحكيم",
      city: "أثينا",
      quote: "لا إفراط ولا تفريط.",
      icon: <Scale strokeWidth={1.5} />,
      description: "مشرع وشاعر، وضع أسس الديمقراطية الأثينية. تمحورت فلسفته حول الاعتدال والعدالة، وقام بإصلاحات اقتصادية واجتماعية أنقذت أثينا من الحرب الأهلية.",
      color: "from-yellow-500 to-amber-400",
      personality: "أنت صولون، مشرع عادل وشاعر، تدعو دائماً للوسطية والاعتدال في كل شيء.",
      achievements: [
        "ألغى ديون الفقراء وحرر من استعبدوا بسبب الديون (قانون سيسكثيا).",
        "قسم المجتمع إلى طبقات بناءً على الدخل لا النسب، مما أتاح الفرصة للجميع.",
        "وضع الأساس لمجلس الـ 400 الذي مهد للديمقراطية."
      ],
      story: "عندما زار الملك الثري قارون (كروسيوس)، سأله الملك: 'من هو أسعد إنسان رأيته؟' متوقعاً أن يقول اسمه. لكن صولون سمى رجلاً بسيطاً مات بكرامة في المعركة، قائلاً حكمته الشهيرة: 'لا تحكم على سعادة رجل حتى ترى كيف كانت نهايته'."
    },
    {
      id: 3,
      name: "خيلون الإسبرطي",
      greekName: "Chilon of Sparta",
      role: "رجل الدولة",
      city: "إسبرطة",
      quote: "فكر قبل أن تتحدث.",
      icon: <Users strokeWidth={1.5} />,
      description: "كان سياسياً صارماً ومصلحاً اجتماعياً. تميزت حكمته بالإيجاز (الأسلوب اللاكوني) وعمل على تعزيز النظام العسكري والاجتماعي في إسبرطة.",
      color: "from-red-600 to-rose-500",
      personality: "أنت خيلون، رجل دولة إسبرطي صارم، تحب الإيجاز في الكلام وتكره الثرثرة، نصائحك عملية وقصيرة.",
      achievements: [
        "ساهم في تحويل إسبرطة إلى أقوى دولة عسكرية في اليونان.",
        "عزز سلطة مجلس الشيوخ (الجيروسيا) لمراقبة الملوك.",
        "اشتهر بتنبؤاته السياسية الدقيقة."
      ],
      story: "من شدة تأثيره، قيل إنه مات من الفرح المفرط عندما عانق ابنه الذي فاز للتو في الألعاب الأولمبية، ليموت وهو في قمة الفخر، وتعتبر هذه ميتة مثالية للإسبرطيين."
    },
    {
      id: 4,
      name: "بياس البرييني",
      greekName: "Bias of Priene",
      role: "القاضي العادل",
      city: "بريين",
      quote: "معظم الناس أشرار.",
      icon: <Scroll strokeWidth={1.5} />,
      description: "اشتهر ببراعته في المرافعات القضائية وعدالته المطلقة. عبارته الشهيرة لا تعني التشاؤم بل تدعو للحذر والفطنة في التعامل مع الطبيعة البشرية.",
      color: "from-purple-600 to-indigo-500",
      personality: "أنت بياس، قاضٍ ذكي وحذر، لا تثق بالناس بسهولة وتدعو للفطنة والحذر في التعاملات.",
      achievements: [
        "كان محامياً بارعاً يدافع عن المظلومين مجاناً.",
        "اشتهر بالحكمة الدبلوماسية في تجنيب مدينته الحروب.",
        "عُرف عنه بلاغته القوية في المحاكم."
      ],
      story: "عندما حاصر الأعداء مدينته وبدأ السكان بالهرب حاملين كل ممتلكاتهم الثمينة، سار بياس وحيداً بلا أي متاع. وعندما سألوه لماذا لا يحمل شيئاً، أجاب: 'أنا أحمل كل ممتلكاتي معي'، مشيراً إلى عقله وحكمته."
    },
    {
      id: 5,
      name: "كليوبولوس",
      greekName: "Cleobulus of Lindos",
      role: "الشاعر القوي",
      city: "ليندوس (رودس)",
      quote: "الاعتدال هو الأفضل.",
      icon: <Crown strokeWidth={1.5} />,
      description: "حكم مدينته بقوة وحكمة، واشتهر بتأليف الألغاز والأشعار. كان يدعو إلى التعليم للمرأة والرجل على حد سواء، وركز على الصحة الجسدية والنفسية.",
      color: "from-emerald-500 to-green-400",
      personality: "أنت كليوبولوس، حاكم قوي وشاعر، تحب الألغاز وتدعو للصحة الجسدية والتعليم.",
      achievements: [
        "أعاد بناء معبد أثينا في ليندوس.",
        "ألف أكثر من 3000 سطر من الشعر والألغاز.",
        "دعم حقوق النساء في التعليم في زمن كان ذلك نادراً."
      ],
      story: "كان يعشق الألغاز الفكرية، ومن أشهر ألغازه: 'أب واحد، لديه 12 ابناً، ولكل منهم 30 ابنة، بعضهن بيض وبعضهن سود، جميعهن يمتن ولكنهن خالدات'. (الحل هو: السنة، الشهور، والأيام)."
    },
    {
      id: 6,
      name: "بيتاكوس",
      greekName: "Pittacus of Mytilene",
      role: "القائد العسكري",
      city: "ميتيليني (ليسبوس)",
      quote: "اعرف فرصتك.",
      icon: <Anchor strokeWidth={1.5} />,
      description: "جنرال وقائد سياسي، حارب الطغاة وحكم مدينته لمدة عشر سنوات ثم تنازل عن السلطة طواعية. سن قوانين صارمة ضد الجرائم التي تُرتكب تحت تأثير السكر.",
      color: "from-sky-600 to-blue-500",
      personality: "أنت بيتاكوس، قائد عسكري وسياسي محنك، تؤمن باقتناص الفرص وتحمل المسؤولية.",
      achievements: [
        "قاد جيش مدينته للانتصار على الأثينيين.",
        "حكم لمدة 10 سنوات فقط ثم استقال طواعية بعد استقرار الدولة.",
        "سن قانوناً يضاعف عقوبة الجرائم المرتكبة تحت تأثير الكحول."
      ],
      story: "بعد أن قُتل ابنه، تم القبض على القاتل وإحضاره إليه لينتقم منه. لكن بيتاكوس فاجأ الجميع وأطلق سراح القاتل قائلاً: 'العفو أفضل من الانتقام'، مما خلد ذكراه كحاكم متسامح وقوي النفس."
    },
    {
      id: 7,
      name: "بيرياندر",
      greekName: "Periander of Corinth",
      role: "الحاكم الطاغية",
      city: "كورنثوس",
      quote: "البصيرة هي كل شيء.",
      icon: <BookOpen strokeWidth={1.5} />,
      description: "رغم وصفه بالطاغية، إلا أن عهده كان عصراً ذهبياً لكورنثوس. بنى مشاريع هندسية ضخمة واهتم بالفنون والعلوم، وركز على التخطيط المستقبلي.",
      color: "from-orange-500 to-red-400",
      personality: "أنت بيرياندر، حاكم طموح ومهندس للمستقبل، تؤمن بالتخطيط والبصيرة والعمل الجاد.",
      achievements: [
        "بنى 'الديولكوس'، وهو طريق حجري لنقل السفن عبر اليابس (سلف قناة كورنث).",
        "جعل كورنثوس أغنى مدينة تجارية في اليونان.",
        "رعى الفنون وأقام المسابقات الشعرية."
      ],
      story: "أرسل رسولاً إلى طاغية آخر يسأله عن سر الحفاظ على الحكم، فأخذه الطاغية إلى حقل قمح وقطع أطول السنابل دون أن يتكلم. فهم بيرياندر الرسالة: عليه التخلص من أي شخص يبرز أو يصبح قوياً جداً في مملكته لضمان بقائه."
    }
  ];

  const handleCloseModal = () => {
    setSelectedSage(null);
    setChatResponse("");
    setChatInput("");
    setIsChatLoading(false);
  };

  // Exponential backoff helper for API calls
  const fetchWithRetries = async (url, options, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("API Error");
        return response;
      } catch (error) {
        if (i < maxRetries - 1) {
          const delay = Math.pow(2, i) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          throw error;
        }
      }
    }
  };

  const handleAskSage = async () => {
    if (!chatInput.trim() || !selectedSage) return;
    
    setIsChatLoading(true);
    setChatResponse("");

    const prompt = `
      تقمص شخصية: ${selectedSage.name}.
      صفتك: ${selectedSage.role}.
      مدينتك: ${selectedSage.city}.
      مقولتك الشهيرة: "${selectedSage.quote}".
      نبذة عنك: ${selectedSage.description}
      أسلوب شخصيتك: ${selectedSage.personality}

      يطلب منك المستخدم المشورة. رد عليه باللغة العربية الفصحى، بأسلوب حكيم، وقور، ومختصر (لا تتجاوز 3 جمل).
      استخدم كلمات تعكس العصر الإغريقي القديم ولكن بمفهوم يصلح لهذا الزمن.
      
      سؤال المستخدم: "${chatInput}"
    `;

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    try {
      const response = await fetchWithRetries(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });
      
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      setChatResponse(text);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setChatResponse("عذراً يا بني، لم تصلني رسالتك عبر الأزمان. حاول مرة أخرى.");
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-amber-200" dir="rtl">
      {/* Header Section */}
      <header className="relative bg-slate-900 text-white overflow-hidden pb-24">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
        
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium tracking-wider">
            تاريخ الفلسفة القديمة
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-amber-200" style={{ fontFamily: "'Amiri', serif" }}>
            الحكماء السبعة للإغريق
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            في القرن السادس قبل الميلاد، برز سبعة رجال جمعوا بين الفلسفة، السياسة، والشعر. 
            لم يكونوا مجرد مفكرين، بل كانوا صناع حضارة.
          </p>
        </div>
      </header>

      {/* Main Content (Intro Card now placed here, above the main grid) */}
      <main className="relative z-20 -mt-20 max-w-7xl mx-auto px-6 pb-20">
        
        {/* Intro Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-slate-800 flex flex-col justify-center items-center text-center mb-8 mx-auto max-w-xl bg-opacity-90 backdrop-blur-sm">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-700">
            <Info size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-slate-800">من هم؟</h3>
          <p className="text-slate-600 leading-relaxed">
            لقب "الحكماء السبعة" مُنح لشخصيات إغريقية برزت بحكمتها التشريعية والعملية. 
            نقشت أقوالهم على معبد دلفي لتكون نبراساً للزوار.
          </p>
        </div>

        {/* Main Content Grid for Sages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Sages Cards */}
          {sages.map((sage) => (
            <button
              key={sage.id}
              onClick={() => setSelectedSage(sage)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-right border border-slate-100 hover:-translate-y-2"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${sage.color}`}></div>
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  {/* Distinctive Icon Background */}
                  <div className={`p-3 rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors text-slate-700 ring-1 ring-slate-200 group-hover:ring-${sage.color.split('-')[1]}-400`}>
                    {React.cloneElement(sage.icon, { size: 28 })}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{sage.city}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-1" style={{ fontFamily: "'Amiri', serif" }}>
                  {sage.name}
                </h2>
                <p className="text-sm text-amber-600 font-medium mb-4">{sage.greekName}</p>
                
                <div className="bg-slate-50 rounded-xl p-4 mb-2 group-hover:bg-amber-50 transition-colors border border-slate-100 group-hover:border-amber-100">
                  <p className="text-lg font-semibold text-slate-700 text-center italic">
                    "{sage.quote}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <span className="text-sm text-slate-500">{sage.role}</span>
                  <span className="text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                     التفاصيل
                     <span>←</span>
                  </span>
                </div>
              </div>
              
              {/* Decorative background icon (The Symbol) */}
              <div className="absolute -bottom-6 -left-6 opacity-5 text-slate-400 transform rotate-12 group-hover:scale-110 transition-transform duration-500 group-hover:opacity-10">
                {React.cloneElement(sage.icon, { size: 140 })}
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedSage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]" dir="rtl">
            
            {/* Modal Header */}
            <div className={`relative shrink-0 h-32 bg-gradient-to-r ${selectedSage.color} flex items-center justify-center overflow-hidden`}>
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 left-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-md z-10"
              >
                <X size={24} />
              </button>
              
              {/* Big faded symbol in header background */}
              <div className="absolute -right-10 -bottom-10 text-white opacity-20 transform rotate-12">
                {React.cloneElement(selectedSage.icon, { size: 200 })}
              </div>

              <div className="text-white text-center z-10">
                <div className="opacity-80 mb-1">{selectedSage.greekName}</div>
                <h2 className="text-4xl font-bold" style={{ fontFamily: "'Amiri', serif" }}>{selectedSage.name}</h2>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-3xl"></div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto custom-scrollbar flex-1">
              <div className="px-8 pb-8 pt-2">
                
                {/* Icon Circle */}
                <div className="flex items-center justify-center -mt-12 mb-6 relative z-10">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <div className="bg-slate-50 p-4 rounded-full text-slate-700 ring-1 ring-slate-200">
                      {React.cloneElement(selectedSage.icon, { size: 48 })}
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-2">
                    {selectedSage.city} • {selectedSage.role}
                  </span>
                  <h3 className="text-2xl text-amber-600 font-bold mb-4 italic font-serif">
                    "{selectedSage.quote}"
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg border-b border-slate-100 pb-6">
                    {selectedSage.description}
                  </p>
                </div>

                {/* --- New Sections: Achievements & Story --- */}
                <div className="grid gap-6 mb-8">
                  {/* Achievements */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-3 text-slate-800">
                      <Trophy size={20} className="text-amber-500" />
                      <h4 className="font-bold text-lg">أبرز الإنجازات</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedSage.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                          <span className="text-amber-400 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Story / Anecdote */}
                  <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-3 text-slate-800">
                      <Feather size={20} className="text-blue-500" />
                      <h4 className="font-bold text-lg">من نوادره</h4>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed italic">
                      {selectedSage.story}
                    </p>
                  </div>
                </div>

                {/* Chat Feature */}
                <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-6 rounded-2xl border border-amber-100 relative overflow-hidden">
                   {/* Subtle Pattern */}
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                     <Sparkles size={100} />
                  </div>

                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <div className="p-2 bg-white rounded-lg text-amber-600 shadow-sm border border-amber-100">
                      <Sparkles size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">استشر الحكيم</h4>
                  </div>

                  {chatResponse && (
                    <div className="mb-4 p-4 bg-white rounded-xl border border-amber-100 shadow-sm animate-in slide-in-from-bottom-2 relative z-10">
                      <div className="flex gap-3 items-start">
                        <div className="mt-1 text-amber-600 shrink-0">
                          <MessageCircle size={20} />
                        </div>
                        <p className="text-slate-700 leading-relaxed font-medium font-serif text-lg">
                          {chatResponse}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 relative z-10">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAskSage()}
                      placeholder="اسأله عن الحياة، الحكمة، أو المال..."
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                      disabled={isChatLoading}
                    />
                    <button
                      onClick={handleAskSage}
                      disabled={isChatLoading || !chatInput.trim()}
                      className={`px-4 py-2 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 shadow-md
                        ${isChatLoading || !chatInput.trim() 
                          ? 'bg-slate-300 cursor-not-allowed' 
                          : `bg-gradient-to-r ${selectedSage.color} hover:opacity-90 active:scale-95`
                        }`}
                    >
                      {isChatLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send size={20} className={dir="rtl" ? "rotate-180" : ""} />
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 flex items-center justify-center gap-2">
            <span>تم التصميم بنمط المتحف الإغريقي</span>
            <span className="text-amber-500">•</span>
            <span>مدعوم بذكاء Gemini</span>
          </p>
        </div>
      </footer>

      {/* Global Style for Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@300;400;600;700&display=swap');
        body {
          font-family: 'Cairo', sans-serif;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default SevenSagesApp;