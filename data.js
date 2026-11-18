// Lesstof voor 学中文 – Max
// Pinyin staat in cijfernotatie (ni3 hao3); de app zet het om naar toontekens.
// Bij zinnen scheidt "|" de woorden (voor de zin-bouwer). Lettergrepen binnen een woord met spatie.
// toon 5 = neutrale toon. Toonsandhi (3+3 → 2+3) rekent de app zelf uit voor de uitspraak-oefening.

window.TONE_DRILL = [
  // [hanzi, pinyin] — betekenis maakt hier niet uit, het gaat om de toon
  ["妈","ma1"],["麻","ma2"],["马","ma3"],["骂","ma4"],
  ["八","ba1"],["拔","ba2"],["把","ba3"],["爸","ba4"],
  ["搭","da1"],["达","da2"],["打","da3"],["大","da4"],
  ["屋","wu1"],["无","wu2"],["五","wu3"],["雾","wu4"],
  ["一","yi1"],["姨","yi2"],["椅","yi3"],["意","yi4"],
  ["汤","tang1"],["糖","tang2"],["躺","tang3"],["烫","tang4"],
  ["诗","shi1"],["十","shi2"],["使","shi3"],["是","shi4"]
];

window.UNITS = [
  {
    id: "u1", title: "Klanken & tonen", emoji: "🎵",
    intro: "Chinees heeft 4 tonen. Dezelfde klank 'ma' betekent iets anders bij elke toon. Luister vooral goed!",
    items: [
      { id: "mama", zh: "妈妈", py: "ma1 ma5", nl: "mama", e: "👩" },
      { id: "baba", zh: "爸爸", py: "ba4 ba5", nl: "papa", e: "👨" },
      { id: "ma3", zh: "马", py: "ma3", nl: "paard", e: "🐴" },
      { id: "da4", zh: "大", py: "da4", nl: "groot", e: "🐘" }
    ],
    dialogue: [
      { s: "A", zh: "妈妈！", py: "ma1 ma5", nl: "Mama!" },
      { s: "B", zh: "爸爸！", py: "ba4 ba5", nl: "Papa!" },
      { s: "A", zh: "马！大马！", py: "ma3 da4 ma3", nl: "Een paard! Een groot paard!" }
    ]
  },
  {
    id: "u2", title: "Hallo & dankjewel", emoji: "👋",
    items: [
      { id: "ni", zh: "你", py: "ni3", nl: "jij", e: "👉" },
      { id: "wo", zh: "我", py: "wo3", nl: "ik", e: "🙋‍♂️" },
      { id: "hao", zh: "好", py: "hao3", nl: "goed", e: "👍" },
      { id: "nihao", zh: "你|好", py: "ni3|hao3", nl: "hallo", e: "👋" },
      { id: "xiexie", zh: "谢谢", py: "xie4 xie5", nl: "dank je", e: "🙏" },
      { id: "bukeqi", zh: "不|客气", py: "bu2|ke4 qi5", nl: "graag gedaan", e: "😊" },
      { id: "zaijian", zh: "再见", py: "zai4 jian4", nl: "tot ziens / doei", e: "🚪" }
    ],
    dialogue: [
      { s: "A", zh: "你好！", py: "ni3 hao3", nl: "Hallo!" },
      { s: "B", zh: "你好！", py: "ni3 hao3", nl: "Hallo!" },
      { s: "A", zh: "谢谢！", py: "xie4 xie5", nl: "Dank je!" },
      { s: "B", zh: "不客气！", py: "bu2 ke4 qi5", nl: "Graag gedaan!" },
      { s: "A", zh: "再见！", py: "zai4 jian4", nl: "Doei!" },
      { s: "B", zh: "再见！", py: "zai4 jian4", nl: "Doei!" }
    ]
  },
  {
    id: "u3", title: "Hoe heet je?", emoji: "📛",
    items: [
      { id: "jiao", zh: "叫", py: "jiao4", nl: "heten", e: "🏷️" },
      { id: "shenme", zh: "什么", py: "shen2 me5", nl: "wat", e: "❓" },
      { id: "mingzi", zh: "名字", py: "ming2 zi5", nl: "naam", e: "📛" },
      { id: "nijiaoshenme", zh: "你|叫|什么|名字", py: "ni3|jiao4|shen2 me5|ming2 zi5", nl: "Hoe heet je?", e: "🙋❓" },
      { id: "wojiaomax", zh: "我|叫|马克斯", py: "wo3|jiao4|Ma3 ke4 si1", nl: "Ik heet Max (马克斯 = jouw Chinese naam)", e: "🙋‍♂️📛" },
      { id: "nine", zh: "你|呢", py: "ni3|ne5", nl: "En jij?", e: "👉🤔" }
    ],
    dialogue: [
      { s: "A", zh: "你好！我叫马克斯。", py: "ni3 hao3 wo3 jiao4 Ma3 ke4 si1", nl: "Hallo! Ik heet Max." },
      { s: "A", zh: "你叫什么名字？", py: "ni3 jiao4 shen2 me5 ming2 zi5", nl: "Hoe heet jij?" },
      { s: "B", zh: "我叫王明。你好，马克斯！", py: "wo3 jiao4 Wang2 Ming2 ni3 hao3 Ma3 ke4 si1", nl: "Ik heet Wang Ming. Hallo, Max!" }
    ]
  },
  {
    id: "u4", title: "Tellen 1 – 10", emoji: "🔢",
    items: [
      { id: "n1", zh: "一", py: "yi1", nl: "1", e: "1️⃣" },
      { id: "n2", zh: "二", py: "er4", nl: "2", e: "2️⃣" },
      { id: "n3", zh: "三", py: "san1", nl: "3", e: "3️⃣" },
      { id: "n4", zh: "四", py: "si4", nl: "4", e: "4️⃣" },
      { id: "n5", zh: "五", py: "wu3", nl: "5", e: "5️⃣" },
      { id: "n6", zh: "六", py: "liu4", nl: "6", e: "6️⃣" },
      { id: "n7", zh: "七", py: "qi1", nl: "7", e: "7️⃣" },
      { id: "n8", zh: "八", py: "ba1", nl: "8", e: "8️⃣" },
      { id: "n9", zh: "九", py: "jiu3", nl: "9", e: "9️⃣" },
      { id: "n10", zh: "十", py: "shi2", nl: "10", e: "🔟" }
    ],
    dialogue: [
      { s: "A", zh: "一、二、三！", py: "yi1 er4 san1", nl: "Eén, twee, drie!" },
      { s: "B", zh: "四、五、六！", py: "si4 wu3 liu4", nl: "Vier, vijf, zes!" },
      { s: "A", zh: "七、八、九、十！", py: "qi1 ba1 jiu3 shi2", nl: "Zeven, acht, negen, tien!" }
    ]
  },
  {
    id: "u5", title: "Hoe oud ben je?", emoji: "🎂",
    items: [
      { id: "n11", zh: "十一", py: "shi2 yi1", nl: "11 (tien-één)", e: "🔟1️⃣" },
      { id: "n20", zh: "二十", py: "er4 shi2", nl: "20 (twee-tien)", e: "2️⃣0️⃣" },
      { id: "sui", zh: "岁", py: "sui4", nl: "jaar (oud)", e: "🎂" },
      { id: "duoda", zh: "你|多大|了", py: "ni3|duo1 da4|le5", nl: "Hoe oud ben je?", e: "🤔🎂" },
      { id: "myage", personal: "age", nl: "Ik ben … jaar", e: "🙋‍♂️🎂" }
    ],
    dialogue: [
      { s: "A", zh: "你多大了？", py: "ni3 duo1 da4 le5", nl: "Hoe oud ben je?" },
      { s: "B", personal: "age_nine" },
      { s: "A", zh: "我二十五岁。", py: "wo3 er4 shi2 wu3 sui4", nl: "Ik ben 25." }
    ]
  },
  {
    id: "u6", title: "Waar kom je vandaan?", emoji: "🌍",
    items: [
      { id: "shi", zh: "是", py: "shi4", nl: "zijn (ben/is)", e: "🟰" },
      { id: "ren", zh: "人", py: "ren2", nl: "mens / persoon", e: "🧍" },
      { id: "helan", zh: "荷兰", py: "He2 lan2", nl: "Nederland", e: "🇳🇱" },
      { id: "zhongguo", zh: "中国", py: "Zhong1 guo2", nl: "China", e: "🇨🇳" },
      { id: "zhongguoren", zh: "中国|人", py: "Zhong1 guo2|ren2", nl: "Chinees (persoon)", e: "🇨🇳🧍" },
      { id: "naguoren", zh: "你|是|哪|国|人", py: "ni3|shi4|na3|guo2|ren2", nl: "Uit welk land kom je?", e: "🌍❓" },
      { id: "helanren", zh: "我|是|荷兰|人", py: "wo3|shi4|He2 lan2|ren2", nl: "Ik ben Nederlander", e: "🙋‍♂️🇳🇱" }
    ],
    dialogue: [
      { s: "A", zh: "你是哪国人？", py: "ni3 shi4 na3 guo2 ren2", nl: "Uit welk land kom je?" },
      { s: "B", zh: "我是荷兰人。你呢？", py: "wo3 shi4 He2 lan2 ren2 ni3 ne5", nl: "Ik ben Nederlander. En jij?" },
      { s: "A", zh: "我是中国人。", py: "wo3 shi4 Zhong1 guo2 ren2", nl: "Ik ben Chinees." }
    ]
  },
  {
    id: "u7", title: "Ik studeer", emoji: "🎓",
    items: [
      { id: "xuesheng", zh: "学生", py: "xue2 sheng5", nl: "student", e: "🎓" },
      { id: "daxue", zh: "大学", py: "da4 xue2", nl: "universiteit", e: "🏛️" },
      { id: "xuexi", zh: "学习", py: "xue2 xi2", nl: "studeren / leren", e: "📚" },
      { id: "ai", zh: "人工智能", py: "ren2 gong1 zhi4 neng2", nl: "AI (kunstmatige intelligentie)", e: "🤖" },
      { id: "zai", zh: "在", py: "zai4", nl: "in / op (een plek)", e: "📍" },
      { id: "woshixuesheng", zh: "我|是|学生", py: "wo3|shi4|xue2 sheng5", nl: "Ik ben student", e: "🙋‍♂️🎓" },
      { id: "woxuexiai", zh: "我|学习|人工智能", py: "wo3|xue2 xi2|ren2 gong1 zhi4 neng2", nl: "Ik studeer AI", e: "📚🤖" },
      { id: "amsterdam", zh: "我|在|阿姆斯特丹|上|大学", py: "wo3|zai4|A1 mu3 si1 te4 dan1|shang4|da4 xue2", nl: "Ik studeer (aan de universiteit) in Amsterdam", e: "🏛️🇳🇱" }
    ],
    dialogue: [
      { s: "A", zh: "你是学生吗？", py: "ni3 shi4 xue2 sheng5 ma5", nl: "Ben je student?" },
      { s: "B", zh: "是的，我是学生。我学习人工智能。", py: "shi4 de5 wo3 shi4 xue2 sheng5 wo3 xue2 xi2 ren2 gong1 zhi4 neng2", nl: "Ja, ik ben student. Ik studeer AI." },
      { s: "B", zh: "我在阿姆斯特丹上大学。", py: "wo3 zai4 A1 mu3 si1 te4 dan1 shang4 da4 xue2", nl: "Ik studeer in Amsterdam." }
    ]
  },
  {
    id: "u8", title: "Ik werk", emoji: "💼",
    items: [
      { id: "gongzuo", zh: "工作", py: "gong1 zuo4", nl: "werk / werken", e: "💼" },
      { id: "zuo", zh: "做", py: "zuo4", nl: "doen / maken", e: "🛠️" },
      { id: "ye", zh: "也", py: "ye3", nl: "ook", e: "➕" },
      { id: "gongsi", zh: "公司", py: "gong1 si1", nl: "bedrijf", e: "🏢" },
      { id: "nali", zh: "哪里", py: "na3 li3", nl: "waar", e: "📍❓" },
      { id: "zuoshenme", zh: "你|做|什么|工作", py: "ni3|zuo4|shen2 me5|gong1 zuo4", nl: "Wat voor werk doe je?", e: "💼❓" },
      { id: "woyegongzuo", zh: "我|也|工作", py: "wo3|ye3|gong1 zuo4", nl: "Ik werk ook", e: "🙋‍♂️➕💼" },
      { id: "zaigongsi", zh: "我|在|一家|公司|工作", py: "wo3|zai4|yi4 jia1|gong1 si1|gong1 zuo4", nl: "Ik werk bij een bedrijf", e: "🏢💼" }
    ],
    dialogue: [
      { s: "A", zh: "你做什么工作？", py: "ni3 zuo4 shen2 me5 gong1 zuo4", nl: "Wat voor werk doe je?" },
      { s: "B", zh: "我是学生。我也工作。", py: "wo3 shi4 xue2 sheng5 wo3 ye3 gong1 zuo4", nl: "Ik ben student. Ik werk ook." },
      { s: "A", zh: "你在哪里工作？", py: "ni3 zai4 na3 li3 gong1 zuo4", nl: "Waar werk je?" },
      { s: "B", zh: "我在一家公司工作。", py: "wo3 zai4 yi4 jia1 gong1 si1 gong1 zuo4", nl: "Ik werk bij een bedrijf." }
    ]
  },
  {
    id: "u9", title: "Wat vind je leuk?", emoji: "❤️",
    items: [
      { id: "xihuan", zh: "喜欢", py: "xi3 huan5", nl: "leuk vinden / houden van", e: "❤️" },
      { id: "yundong", zh: "运动", py: "yun4 dong4", nl: "sporten", e: "🏋️" },
      { id: "paobu", zh: "跑步", py: "pao3 bu4", nl: "hardlopen", e: "🏃" },
      { id: "yinyue", zh: "音乐", py: "yin1 yue4", nl: "muziek", e: "🎵" },
      { id: "kanshu", zh: "看书", py: "kan4 shu1", nl: "lezen", e: "📖" },
      { id: "nixihuan", zh: "你|喜欢|什么", py: "ni3|xi3 huan5|shen2 me5", nl: "Wat vind jij leuk?", e: "❤️❓" },
      { id: "woxihuanpaobu", zh: "我|喜欢|跑步", py: "wo3|xi3 huan5|pao3 bu4", nl: "Ik hou van hardlopen", e: "🙋‍♂️❤️🏃" }
    ],
    dialogue: [
      { s: "A", zh: "你喜欢什么？", py: "ni3 xi3 huan5 shen2 me5", nl: "Wat vind jij leuk?" },
      { s: "B", zh: "我喜欢运动。我也喜欢音乐。你呢？", py: "wo3 xi3 huan5 yun4 dong4 wo3 ye3 xi3 huan5 yin1 yue4 ni3 ne5", nl: "Ik hou van sporten. Ik hou ook van muziek. En jij?" },
      { s: "A", zh: "我喜欢看书。", py: "wo3 xi3 huan5 kan4 shu1", nl: "Ik lees graag." }
    ]
  },
  {
    id: "u10", title: "Waarom Chinees?", emoji: "🀄",
    items: [
      { id: "zhongwen", zh: "中文", py: "Zhong1 wen2", nl: "Chinees (de taal)", e: "🀄" },
      { id: "weishenme", zh: "为什么", py: "wei4 shen2 me5", nl: "waarom", e: "🤔" },
      { id: "yinwei", zh: "因为", py: "yin1 wei4", nl: "omdat", e: "👉💡" },
      { id: "pengyou", zh: "朋友", py: "peng2 you5", nl: "vriend", e: "🤝" },
      { id: "hen", zh: "很", py: "hen3", nl: "heel / erg", e: "💯" },
      { id: "youyisi", zh: "有意思", py: "you3 yi4 si5", nl: "interessant / leuk", e: "✨" },
      { id: "weishenmexue", zh: "你|为什么|学|中文", py: "ni3|wei4 shen2 me5|xue2|Zhong1 wen2", nl: "Waarom leer je Chinees?", e: "🤔🀄" },
      { id: "yinweiyouyisi", zh: "因为|中文|很|有意思", py: "yin1 wei4|Zhong1 wen2|hen3|you3 yi4 si5", nl: "Omdat Chinees heel interessant is", e: "🀄✨" },
      { id: "pengyouhuishuo", zh: "我的|朋友|会|说|中文", py: "wo3 de5|peng2 you5|hui4|shuo1|Zhong1 wen2", nl: "Mijn vriend spreekt Chinees", e: "🤝🗣️🀄" }
    ],
    dialogue: [
      { s: "A", zh: "你为什么学中文？", py: "ni3 wei4 shen2 me5 xue2 Zhong1 wen2", nl: "Waarom leer je Chinees?" },
      { s: "B", zh: "因为中文很有意思。", py: "yin1 wei4 Zhong1 wen2 hen3 you3 yi4 si5", nl: "Omdat Chinees heel interessant is." },
      { s: "B", zh: "我的朋友也会说中文。", py: "wo3 de5 peng2 you5 ye3 hui4 shuo1 Zhong1 wen2", nl: "Mijn vriend spreekt ook Chinees." }
    ]
  },
  {
    id: "u11", title: "Hoe gaat het?", emoji: "😄",
    items: [
      { id: "ma", zh: "吗", py: "ma5", nl: "vraagwoordje (maakt er een ja/nee-vraag van)", e: "❓" },
      { id: "nihaoma", zh: "你|好|吗", py: "ni3|hao3|ma5", nl: "Hoe gaat het?", e: "👋❓" },
      { id: "wohenhao", zh: "我|很|好", py: "wo3|hen3|hao3", nl: "Het gaat goed met me", e: "😄👍" },
      { id: "bu", zh: "不", py: "bu4", nl: "niet / nee", e: "❌" },
      { id: "shide", zh: "是的", py: "shi4 de5", nl: "ja (klopt)", e: "✅" },
      { id: "nishixueshengma", zh: "你|是|学生|吗", py: "ni3|shi4|xue2 sheng5|ma5", nl: "Ben je student?", e: "🎓❓" },
      { id: "gaoxing", zh: "高兴", py: "gao1 xing4", nl: "blij", e: "😄" },
      { id: "renshini", zh: "认识|你|很|高兴", py: "ren4 shi5|ni3|hen3|gao1 xing4", nl: "Leuk je te ontmoeten", e: "🤝😄" }
    ],
    dialogue: [
      { s: "A", zh: "你好吗？", py: "ni3 hao3 ma5", nl: "Hoe gaat het?" },
      { s: "B", zh: "我很好，谢谢！你呢？", py: "wo3 hen3 hao3 xie4 xie5 ni3 ne5", nl: "Goed, dank je! En met jou?" },
      { s: "A", zh: "我也很好。", py: "wo3 ye3 hen3 hao3", nl: "Ook goed." },
      { s: "B", zh: "认识你很高兴！", py: "ren4 shi5 ni3 hen3 gao1 xing4", nl: "Leuk je te ontmoeten!" }
    ]
  },
  {
    id: "u12", title: "Het grote kennismakingsgesprek", emoji: "🏆",
    items: [
      { id: "jiayou", zh: "加油", py: "jia1 you2", nl: "zet 'm op! / hup!", e: "💪" },
      { id: "xiacijian", zh: "下次|见", py: "xia4 ci4|jian4", nl: "tot de volgende keer", e: "👋📅" },
      { id: "shuozhongwen", zh: "我|会|说|一点|中文", py: "wo3|hui4|shuo1|yi4 dian3|Zhong1 wen2", nl: "Ik spreek een beetje Chinees", e: "🗣️🤏🀄" }
    ],
    dialogue: [
      { s: "A", zh: "你好！你叫什么名字？", py: "ni3 hao3 ni3 jiao4 shen2 me5 ming2 zi5", nl: "Hallo! Hoe heet je?" },
      { s: "B", zh: "你好！我叫马克斯。你呢？", py: "ni3 hao3 wo3 jiao4 Ma3 ke4 si1 ni3 ne5", nl: "Hallo! Ik heet Max. En jij?" },
      { s: "A", zh: "我叫王明。你是哪国人？", py: "wo3 jiao4 Wang2 Ming2 ni3 shi4 na3 guo2 ren2", nl: "Ik heet Wang Ming. Uit welk land kom je?" },
      { s: "B", zh: "我是荷兰人。", py: "wo3 shi4 He2 lan2 ren2", nl: "Ik ben Nederlander." },
      { s: "A", zh: "你多大了？", py: "ni3 duo1 da4 le5", nl: "Hoe oud ben je?" },
      { s: "B", personal: "age" },
      { s: "A", zh: "你做什么工作？", py: "ni3 zuo4 shen2 me5 gong1 zuo4", nl: "Wat voor werk doe je?" },
      { s: "B", zh: "我是学生。我学习人工智能。我也工作。", py: "wo3 shi4 xue2 sheng5 wo3 xue2 xi2 ren2 gong1 zhi4 neng2 wo3 ye3 gong1 zuo4", nl: "Ik ben student. Ik studeer AI. Ik werk ook." },
      { s: "A", zh: "你为什么学中文？", py: "ni3 wei4 shen2 me5 xue2 Zhong1 wen2", nl: "Waarom leer je Chinees?" },
      { s: "B", zh: "因为中文很有意思。我的朋友会说中文。", py: "yin1 wei4 Zhong1 wen2 hen3 you3 yi4 si5 wo3 de5 peng2 you5 hui4 shuo1 Zhong1 wen2", nl: "Omdat Chinees heel interessant is. Mijn vriend spreekt Chinees." },
      { s: "A", zh: "你的中文很好！加油！", py: "ni3 de5 Zhong1 wen2 hen3 hao3 jia1 you2", nl: "Je Chinees is heel goed! Zet 'm op!" },
      { s: "B", zh: "谢谢！认识你很高兴。下次见！", py: "xie4 xie5 ren4 shi5 ni3 hen3 gao1 xing4 xia4 ci4 jian4", nl: "Dank je! Leuk je te ontmoeten. Tot de volgende keer!" }
    ]
  }
];
