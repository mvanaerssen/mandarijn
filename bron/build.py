"""Bouwt data2.js uit content*.txt: genereert pinyin (pypinyin + jieba), past 一/不-sandhi toe,
kapitaliseert eigennamen en controleert op dubbelingen."""
import json, re, sys, warnings
warnings.filterwarnings("ignore")
import jieba
from pypinyin import lazy_pinyin, Style, load_phrases_dict
jieba.setLogLevel(60)

HZ = re.compile(r"[一-鿿〇]")

# --- correcties op het woordenboek (meerklankige karakters in deze context) ---
PHRASES = {
    "长得": [["zhǎng"], ["de"]], "得对": [["de"], ["duì"]], "得很": [["de"], ["hěn"]],
    "说得": [["shuō"], ["de"]], "吃得": [["chī"], ["de"]], "听得懂": [["tīng"], ["de"], ["dǒng"]],
    "觉得": [["jué"], ["de"]], "记得": [["jì"], ["de"]], "喂": [["wéi"]],
    "一只": [["yì"], ["zhī"]], "了解": [["liǎo"], ["jiě"]], "还没": [["hái"], ["méi"]],
    "还有": [["hái"], ["yǒu"]], "还想": [["hái"], ["xiǎng"]], "还是": [["hái"], ["shì"]],
    "还不": [["hái"], ["bù"]], "还看": [["hái"], ["kàn"]], "还下": [["hái"], ["xià"]],
    "长头发": [["cháng"], ["tóu"], ["fa"]], "头发": [["tóu"], ["fa"]], "好吃": [["hǎo"], ["chī"]],
    "好玩": [["hǎo"], ["wán"]], "好看": [["hǎo"], ["kàn"]], "好听": [["hǎo"], ["tīng"]],
    "爱好": [["ài"], ["hào"]], "便宜": [["pián"], ["yi"]], "方便": [["fāng"], ["biàn"]],
    "睡觉": [["shuì"], ["jiào"]], "感觉": [["gǎn"], ["jué"]], "银行": [["yín"], ["háng"]],
    "行李": [["xíng"], ["li"]], "都喜欢": [["dōu"], ["xǐ"], ["huan"]], "大夫": [["dài"], ["fu"]],
    "地方": [["dì"], ["fang"]], "东西": [["dōng"], ["xi"]], "朋友": [["péng"], ["you"]],
    "学生": [["xué"], ["sheng"]], "认识": [["rèn"], ["shi"]], "喜欢": [["xǐ"], ["huan"]],
    "什么": [["shén"], ["me"]], "怎么": [["zěn"], ["me"]], "这么": [["zhè"], ["me"]],
    "名字": [["míng"], ["zi"]], "意思": [["yì"], ["si"]], "客气": [["kè"], ["qi"]],
    "衣服": [["yī"], ["fu"]], "舒服": [["shū"], ["fu"]], "漂亮": [["piào"], ["liang"]],
    "眼睛": [["yǎn"], ["jing"]], "时候": [["shí"], ["hou"]], "知道": [["zhī"], ["dao"]],
    "师傅": [["shī"], ["fu"]], "豆腐": [["dòu"], ["fu"]], "肚子": [["dù"], ["zi"]],
    "嗓子": [["sǎng"], ["zi"]], "筷子": [["kuài"], ["zi"]], "裤子": [["kù"], ["zi"]],
    "包子": [["bāo"], ["zi"]], "饺子": [["jiǎo"], ["zi"]], "孩子": [["hái"], ["zi"]],
    "个子": [["gè"], ["zi"]], "房子": [["fáng"], ["zi"]], "妹妹": [["mèi"], ["mei"]],
    "弟弟": [["dì"], ["di"]], "哥哥": [["gē"], ["ge"]], "姐姐": [["jiě"], ["jie"]],
    "清楚": [["qīng"], ["chu"]], "关系": [["guān"], ["xi"]], "休息": [["xiū"], ["xi"]],
    "消息": [["xiāo"], ["xi"]], "这个": [["zhè"], ["ge"]], "那个": [["nà"], ["ge"]],
    "哪个": [["nǎ"], ["ge"]], "几个": [["jǐ"], ["ge"]], "两个": [["liǎng"], ["ge"]],
    "这里": [["zhè"], ["lǐ"]], "那里": [["nà"], ["lǐ"]], "哪里": [["nǎ"], ["lǐ"]],
    "看看": [["kàn"], ["kan"]], "谢谢": [["xiè"], ["xie"]], "爸爸": [["bà"], ["ba"]],
    "妈妈": [["mā"], ["ma"]], "哈哈": [["hā"], ["hā"]], "觉": [["jué"]],
    "教我": [["jiāo"], ["wǒ"]], "教你": [["jiāo"], ["nǐ"]], "转": [["zhuǎn"]],
    "重要": [["zhòng"], ["yào"]], "只花": [["zhǐ"], ["huā"]], "只要": [["zhǐ"], ["yào"]],
    "着急": [["zháo"], ["jí"]], "开着": [["kāi"], ["zhe"]], "躺着": [["tǎng"], ["zhe"]],
    "得很快": [["de"], ["hěn"], ["kuài"]], "吃得很饱": [["chī"], ["de"], ["hěn"], ["bǎo"]],
    "多长时间": [["duō"], ["cháng"], ["shí"], ["jiān"]], "大部分": [["dà"], ["bù"], ["fen"]],
    "部电影": [["bù"], ["diàn"], ["yǐng"]], "部电视剧": [["bù"], ["diàn"], ["shì"], ["jù"]],
    "差不多": [["chà"], ["bu"], ["duō"]], "为什么": [["wèi"], ["shén"], ["me"]],
    "因为": [["yīn"], ["wèi"]], "当然": [["dāng"], ["rán"]], "当时": [["dāng"], ["shí"]],
    "当工程师": [["dāng"], ["gōng"], ["chéng"], ["shī"]], "数学": [["shù"], ["xué"]],
    "数据": [["shù"], ["jù"]], "音乐": [["yīn"], ["yuè"]], "快乐": [["kuài"], ["lè"]],
    "一言为定": [["yì"], ["yán"], ["wéi"], ["dìng"]], "看病": [["kàn"], ["bìng"]],
    "热情": [["rè"], ["qíng"]], "旁边": [["páng"], ["biān"]], "空调": [["kōng"], ["tiáo"]],
    "有空": [["yǒu"], ["kòng"]], "长城": [["cháng"], ["chéng"]], "主角": [["zhǔ"], ["jué"]],
    "答应": [["dā"], ["ying"]], "种": [["zhǒng"]], "号码": [["hào"], ["mǎ"]],
    "了解": [["liǎo"], ["jiě"]], "尝一下": [["cháng"], ["yí"], ["xià"]],
    "公共汽车": [["gōng"], ["gòng"], ["qì"], ["chē"]], "宇航员": [["yǔ"], ["háng"], ["yuán"]],
    "背": [["bèi"]], "对不起": [["duì"], ["bu"], ["qǐ"]], "不客气": [["bù"], ["kè"], ["qi"]], "听不懂": [["tīng"], ["bu"], ["dǒng"]], "看不懂": [["kàn"], ["bu"], ["dǒng"]], "找不到": [["zhǎo"], ["bu"], ["dào"]], "好不好": [["hǎo"], ["bu"], ["hǎo"]], "对不对": [["duì"], ["bu"], ["duì"]], "调": [["diào"]], "声调": [["shēng"], ["diào"]],
}
load_phrases_dict(PHRASES)
# "得" als werkwoordscomplement altijd neutraal
NEUTRAL_DE_AFTER = set("说吃跑长听写做学唱弹睡玩")

PROPER = ["马克斯", "王明", "荷兰语", "荷兰", "中国", "中文", "阿姆斯特丹", "台湾", "台北", "北京",
          "上海", "英文", "长城", "故宫", "春节", "中秋节", "圣诞节", "微信", "星际穿越"]

def raw_syllables(text):
    """Een pinyin-lettergreep (TONE3, neutraal = 5) per hanzi, met sandhi en eigennamen."""
    chars = [c for c in text if HZ.match(c)]
    syl = lazy_pinyin(text, style=Style.TONE3, neutral_tone_with_five=True, errors="ignore")
    if len(syl) != len(chars):
        raise ValueError(f"lengte klopt niet: {text} {syl}")
    # 得 na werkwoord → de5
    for i, c in enumerate(chars):
        if c == "得" and i > 0 and chars[i - 1] in NEUTRAL_DE_AFTER: syl[i] = "de5"
        if c == "了" and syl[i] != "le5" and not (i + 1 < len(chars) and chars[i + 1] == "解"): syl[i] = "le5"
    # sandhi 不 en 一 (zoals in lesboeken geschreven)
    DIGIT = set("零一二三四五六七八九十百千第〇")
    for i, c in enumerate(chars):
        nxt = syl[i + 1] if i + 1 < len(chars) else None
        nt = int(nxt[-1]) if nxt else None
        if c == "不":
            syl[i] = "bu2" if nt == 4 else ("bu4" if syl[i] != "bu5" else "bu5")
        if c == "一":
            prev = chars[i - 1] if i > 0 else ""
            nxtc = chars[i + 1] if i + 1 < len(chars) else ""
            if prev in DIGIT or nxtc in DIGIT or nxtc in "月号日" or nt is None:
                syl[i] = "yi1"
            elif nt == 4 or (nt == 5 and nxtc == "个"):
                syl[i] = "yi2"
            else:
                syl[i] = "yi4"
    # eigennamen met hoofdletter
    s = "".join(chars)
    for p in PROPER:
        start = 0
        while True:
            j = s.find(p, start)
            if j < 0: break
            for k in range(j, j + (len(p) if p in ("王明",) else 1)):
                syl[k] = syl[k][0].upper() + syl[k][1:]
            start = j + len(p)
    return chars, syl

PRON = set("我你他她")
def segment_line(text):
    """Zin → woorden (jieba), pinyin per woord met '|' ertussen."""
    chars, syl = raw_syllables(text)
    words = []
    for tok in jieba.cut(text):
        h = [c for c in tok if HZ.match(c)]
        if not h: continue
        # voornaamwoorden los schrijven: 我学 → 我 | 学 (maar 我们, 你们 blijven heel)
        if "".join(h) == "王明": words.append(["王"]); words.append(["明"]); continue
        if len(h) >= 2 and h[0] in PRON and h[1] not in "们的":
            words.append(h[:1]); h = h[1:]
        words.append(h)
    out, k = [], 0
    for w in words:
        out.append(" ".join(syl[k:k + len(w)])); k += len(w)
    assert k == len(syl), text
    return "|".join(out)

def item_py(parts):
    full = "".join(parts)
    chars, syl = raw_syllables(full)
    res, k = [], 0
    for p in parts:
        n = len([c for c in p if HZ.match(c)])
        res.append(" ".join(syl[k:k + n])); k += n
    return "|".join(res)

def parse(path):
    units, u, story = [], None, None
    for ln in open(path, encoding="utf-8"):
        ln = ln.rstrip("\n")
        if not ln.strip() or ln.startswith("#"): continue
        if ln.startswith("@ "):
            uid, title, emo = [x.strip() for x in ln[2:].split("|")]
            u = {"id": uid, "title": title, "emoji": emo, "items": [], "dialogue": []}
            units.append(u); story = None; continue
        if ln.startswith("who:"):
            name, e = [x.strip() for x in ln[4:].split("|")]; u["who"] = {"name": name, "e": e}; continue
        if ln.startswith("intro:"): u["intro"] = ln[6:].strip(); continue
        if ln.startswith("note:"):
            t, x, ex = [p.strip() for p in ln[5:].split("::")]
            exs = []
            for e in ex.split(";;"):
                zh, nl = [p.strip() for p in e.split("=", 1)]
                exs.append({"zh": zh, "py": segment_line(zh), "nl": nl})
            u.setdefault("notes", []).append({"t": t, "x": x, "ex": exs}); continue
        if ln.startswith("story:"):
            story = {"title": ln[6:].strip(), "lines": [], "q": []}; u["story"] = story; continue
        kind, rest = ln[:1], ln[2:]
        f = [x.strip() for x in rest.split("|")]
        if kind == "w" and f[0] == "@age":
            u["items"].append({"id": "myage", "personal": "age", "nl": f[1], "e": f[2]}); continue
        if kind == "d" and rest.split(" ", 1)[1].startswith("@"):
            u["dialogue"].append({"s": rest.split(" ", 1)[0], "personal": rest.split(" ", 1)[1].strip()[1:]}); continue
        if kind in "ws":
            zh, nl, e = f[0], f[1], f[2]
            parts = zh.split("/") if kind == "s" else [zh]
            it = {"id": f"{u['id']}_{len(u['items']) + 1}", "zh": "|".join(parts), "nl": nl, "e": e}
            py = None
            for extra in f[3:]:
                if extra.startswith("tw="):
                    tzh, _, tx = extra[3:].partition(";")
                    it["tw"] = {"zh": tzh, "py": segment_line(tzh) if tzh else "", "x": tx}
                if extra.startswith("py="): py = extra[3:]
            it["py"] = py if py else item_py(parts)
            u["items"].append(it)
        elif kind == "d":
            s, zh = rest.split(" ", 1)[0], rest.split(" ", 1)[1].split("|")[0].strip()
            u["dialogue"].append({"s": s, "zh": zh, "py": segment_line(zh), "nl": f[1]})
        elif kind == "t":
            story["lines"].append({"zh": f[0], "py": segment_line(f[0]), "nl": f[1], "e": f[2]})
        elif kind == "q":
            story["q"].append({"q": f[0], "a": f[1:]})
        else:
            raise ValueError(ln)
    return units

units = []
for p in ["content0.txt", "content1.txt", "content2.txt", "content3.txt"]:
    units += parse(p)

# --- controles ---
seen = {}
dups = []
for u in units:
    keep = []
    for it in u["items"]:
        if it.get("personal"): keep.append(it); continue
        z = it["zh"].replace("|", "")
        if z in seen: dups.append(f"{u['id']}: {z} (al in {seen[z]})"); continue
        seen[z] = u["id"]; keep.append(it)
    for i, it in enumerate(keep):
        if not it.get("personal"): it["id"] = f"{u['id']}_{i + 1}"
    u["items"] = keep
print("Dubbel (verwijderd):", *dups, sep="\n  ")
n_items = sum(len(u["items"]) for u in units)
print(f"{len(units)} werelden, {n_items} woorden/zinnen, {sum(len(u['dialogue']) for u in units)} gespreksregels, "
      f"{sum(1 for u in units if 'story' in u)} verhaaltjes, {sum(len(u.get('notes', [])) for u in units)} uitlegkaartjes")

with open("../data2.js", "w", encoding="utf-8") as fh:
    fh.write("// Alle werelden (gegenereerd door bron/build.py; pinyin automatisch gecontroleerd)\n")
    fh.write("window.UNITS.push(...")
    fh.write(json.dumps(units, ensure_ascii=False, indent=0))
    fh.write(");\n")

# lijst om na te kijken
with open("review.txt", "w", encoding="utf-8") as fh:
    for u in units:
        fh.write(f"\n== {u['id']} {u['title']}\n")
        for it in u["items"]:
            if "zh" in it: fh.write(f"  {it['zh']:<22} {it['py']}\n")
        for d in u["dialogue"]:
            if "zh" in d: fh.write(f"  [{d['s']}] {d['zh']}  {d['py']}\n")
        for t in u.get("story", {}).get("lines", []): fh.write(f"  (t) {t['zh']}  {t['py']}\n")
        for n in u.get("notes", []):
            for e in n["ex"]: fh.write(f"  (n) {e['zh']}  {e['py']}\n")
