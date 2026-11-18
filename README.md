# 学中文 – Chinees met Max

Een persoonlijke app om Mandarijn te leren zoals een kind een taal leert: eerst luisteren, dan nazeggen, daarna lezen.

**Live:** https://mvanaerssen.github.io/mandarijn/ (open de link in Safari en kies Deel → Zet op beginscherm)

## Wat zit erin
- 68 werelden (ruim 950 woorden en zinnen), van baby (klanken en tonen) tot volwassen (HSK 3-niveau)
- Luisterverhaaltjes met vragen, uitlegkaartjes bij nieuwe zinsbouw en 🇹🇼 Taiwan-tips
- Karakters leren lezen zonder pinyin
- Oefeningen: luisteren en plaatje kiezen, tonen herkennen, lezen, zinnen bouwen, nazeggen en een rollenspel
- Uitspraak: je toonhoogte als lijn naast de doeltoon, met een score en een tip
- Spaced repetition: woorden die je bijna vergeet komen terug
- Boosters: dagdoel-ring, streak, streak freeze, XP, combo's, en een "Chinese leeftijd" die meegroeit
- Toon-gym om extra op de 4 tonen te trainen
- Back-up kopiëren en terugzetten (je voortgang staat alleen op je telefoon)

## Bestanden
| Bestand | Wat |
|---|---|
| `index.html` | De hele app (opmaak en logica) |
| `data.js` | Lesstof werelden 1–12 |
| `data2.js` | Lesstof werelden 13–68 (gegenereerd, met automatisch gecontroleerde pinyin) |
| `manifest.json`, `icon-*.png` | Zorgt dat hij als app op je beginscherm staat |
| `sw.js` | Laat de app ook offline werken |

Nieuwe lesstof voeg je toe in `data.js`. Pinyin staat daar in cijfernotatie (`ni3 hao3`), de app zet het zelf om naar toontekens.
- `bron/`: de lesstof als tekst + `build.py` dat data2.js maakt (pip install pypinyin jieba; cd bron; python3 build.py)
