// ===== Bibliothèque de visuels — panneaux (SVG originaux) et scènes de situations concrètes =====
// Tous les visuels sont des illustrations vectorielles originales (pas de photos), dans le style du site.

function svgWrap(inner, viewBox){
  return `<svg viewBox="${viewBox||"0 0 100 100"}" xmlns="http://www.w3.org/2000/svg" role="img">${inner}</svg>`;
}
function triangleDanger(inner){
  return svgWrap(`<polygon points="50,8 94,90 6,90" fill="#fff" stroke="var(--rouge)" stroke-width="7" stroke-linejoin="round"/>${inner}`);
}
function triangleCeder(inner){
  return svgWrap(`<polygon points="6,10 94,10 50,92" fill="#fff" stroke="var(--rouge)" stroke-width="7" stroke-linejoin="round"/>${inner}`);
}
function rondInterdiction(inner){
  return svgWrap(`<circle cx="50" cy="50" r="44" fill="#fff" stroke="var(--rouge)" stroke-width="8"/>${inner}`);
}
function rondObligation(inner){
  return svgWrap(`<circle cx="50" cy="50" r="46" fill="var(--bleu)"/>${inner}`);
}
function carreIndication(inner){
  return svgWrap(`<rect x="6" y="6" width="88" height="88" rx="10" fill="var(--bleu)" stroke="#fff" stroke-width="4"/>${inner}`);
}
function losange(inner, barre){
  return svgWrap(`<rect x="22" y="22" width="56" height="56" rx="6" fill="var(--jaune)" stroke="#C89A00" stroke-width="4" transform="rotate(45 50 50)"/>${barre?'<line x1="14" y1="86" x2="86" y2="14" stroke="var(--encre)" stroke-width="6"/>':''}${inner||''}`);
}
function panneauVitesse(v){
  return rondInterdiction(`<text x="50" y="65" text-anchor="middle" font-size="38" font-weight="800" fill="var(--encre)" font-family="Arial,sans-serif">${v}</text>`);
}
function feu(actif){
  const on = {rouge:'var(--rouge)',orange:'var(--jaune)',vert:'var(--vert)'}[actif];
  const eteint = "#4a4a4a";
  return svgWrap(`
    <rect x="30" y="6" width="40" height="88" rx="10" fill="var(--encre)"/>
    <circle cx="50" cy="24" r="11" fill="${actif==='rouge'?on:eteint}"/>
    <circle cx="50" cy="50" r="11" fill="${actif==='orange'?on:eteint}"/>
    <circle cx="50" cy="76" r="11" fill="${actif==='vert'?on:eteint}"/>
  `);
}

const PANNEAUX = {
  B1: triangleCeder(""),
  B5: svgWrap(`<polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill="var(--rouge)" stroke="#fff" stroke-width="4"/><text x="50" y="62" text-anchor="middle" font-size="26" font-weight="800" fill="#fff" font-family="Arial,sans-serif">STOP</text>`),
  B9: losange(""),
  B11: losange("", true),
  B15: triangleDanger(`
    <line x1="50" y1="70" x2="50" y2="38" stroke="var(--encre)" stroke-width="7"/>
    <polygon points="50,28 60,44 40,44" fill="var(--encre)"/>
    <line x1="30" y1="66" x2="42" y2="56" stroke="var(--encre)" stroke-width="3"/>
    <line x1="70" y1="66" x2="58" y2="56" stroke="var(--encre)" stroke-width="3"/>
  `),
  B19: svgWrap(`
    <circle cx="50" cy="50" r="44" fill="#fff" stroke="var(--rouge)" stroke-width="7"/>
    <line x1="38" y1="75" x2="38" y2="35" stroke="var(--rouge)" stroke-width="6"/>
    <polygon points="38,26 46,40 30,40" fill="var(--rouge)"/>
    <line x1="62" y1="25" x2="62" y2="65" stroke="var(--encre)" stroke-width="6"/>
    <polygon points="62,74 70,60 54,60" fill="var(--encre)"/>
  `),
  B21: svgWrap(`
    <circle cx="50" cy="50" r="46" fill="var(--bleu)"/>
    <line x1="50" y1="75" x2="50" y2="35" stroke="#fff" stroke-width="7"/>
    <polygon points="50,25 60,42 40,42" fill="#fff"/>
  `),
  C1: svgWrap(`
    <circle cx="50" cy="50" r="44" fill="var(--rouge)" stroke="#fff" stroke-width="6"/>
    <rect x="18" y="42" width="64" height="16" rx="3" fill="#fff"/>
  `),
  C23: rondInterdiction(`
    <g fill="var(--encre)">
      <rect x="16" y="40" width="42" height="22" rx="2"/>
      <rect x="58" y="46" width="20" height="16" rx="2"/>
      <circle cx="30" cy="66" r="7"/>
      <circle cx="68" cy="66" r="7"/>
    </g>
  `),
  C35: rondInterdiction(`
    <rect x="12" y="38" width="34" height="18" rx="4" fill="var(--rouge)"/>
    <rect x="52" y="38" width="34" height="18" rx="4" fill="var(--encre)"/>
  `),
  C37: svgWrap(`
    <circle cx="50" cy="50" r="44" fill="#fff" stroke="var(--gris)" stroke-width="6"/>
    <g opacity="0.55">
      <rect x="12" y="38" width="34" height="18" rx="4" fill="var(--gris)"/>
      <rect x="52" y="38" width="34" height="18" rx="4" fill="var(--gris)"/>
    </g>
    <line x1="10" y1="88" x2="90" y2="12" stroke="var(--gris)" stroke-width="6"/>
  `),
  C43_30: panneauVitesse(30),
  C43_50: panneauVitesse(50),
  C43_70: panneauVitesse(70),
  D1: rondObligation(`
    <line x1="30" y1="70" x2="68" y2="32" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
    <polygon points="70,22 80,38 60,36" fill="#fff"/>
  `),
  D5: rondObligation(`
    <circle cx="50" cy="50" r="20" fill="none" stroke="#fff" stroke-width="6"/>
    <polygon points="70,32 80,34 74,44" fill="#fff"/>
  `),
  E1: svgWrap(`
    <circle cx="50" cy="50" r="44" fill="var(--bleu)" stroke="#fff" stroke-width="4"/>
    <line x1="18" y1="82" x2="82" y2="18" stroke="var(--rouge)" stroke-width="8"/>
  `),
  E3: svgWrap(`
    <circle cx="50" cy="50" r="44" fill="var(--bleu)" stroke="#fff" stroke-width="4"/>
    <line x1="18" y1="82" x2="82" y2="18" stroke="var(--rouge)" stroke-width="8"/>
    <line x1="18" y1="18" x2="82" y2="82" stroke="var(--rouge)" stroke-width="8"/>
  `),
  E9: carreIndication(`<text x="50" y="68" text-anchor="middle" font-size="50" font-weight="800" fill="#fff" font-family="Arial,sans-serif">P</text>`),
  E11: carreIndication(`
    <text x="50" y="58" text-anchor="middle" font-size="36" font-weight="800" fill="#fff" font-family="Arial,sans-serif">P</text>
    <text x="50" y="79" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Arial,sans-serif">1↔15 / 16↔31</text>
  `),
  F5: carreIndication(`
    <path d="M20 70 L20 55 Q50 30 80 55 L80 70" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
    <line x1="20" y1="70" x2="80" y2="70" stroke="#fff" stroke-width="6"/>
  `),
  F9: carreIndication(`
    <rect x="24" y="46" width="52" height="18" rx="8" fill="#fff"/>
    <circle cx="36" cy="66" r="7" fill="#fff"/>
    <circle cx="64" cy="66" r="7" fill="#fff"/>
  `),
  F12a: carreIndication(`
    <polygon points="30,50 30,78 70,78 70,50 50,32" fill="#fff"/>
    <circle cx="70" cy="30" r="8" fill="#fff"/>
    <rect x="66" y="38" width="8" height="16" fill="#fff"/>
  `),
  F19: carreIndication(`<polygon points="50,20 74,52 58,52 58,80 42,80 42,52 26,52" fill="#fff"/>`),
  F1: svgWrap(`
    <rect x="6" y="18" width="88" height="64" rx="6" fill="#fff" stroke="var(--bleu)" stroke-width="6"/>
    <rect x="18" y="34" width="64" height="10" rx="3" fill="var(--bleu)"/>
    <rect x="18" y="50" width="44" height="8" rx="3" fill="var(--gris)"/>
  `),
  F3: svgWrap(`
    <rect x="6" y="18" width="88" height="64" rx="6" fill="#fff" stroke="var(--gris)" stroke-width="6"/>
    <rect x="18" y="34" width="64" height="10" rx="3" fill="var(--gris)"/>
    <rect x="18" y="50" width="44" height="8" rx="3" fill="var(--gris)"/>
    <line x1="10" y1="86" x2="90" y2="14" stroke="var(--rouge)" stroke-width="6"/>
  `),
  F4a: carreIndication(`
    <text x="50" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="#fff" font-family="Arial,sans-serif">ZONE</text>
    <circle cx="50" cy="62" r="26" fill="#fff" stroke="var(--rouge)" stroke-width="6"/>
    <text x="50" y="72" text-anchor="middle" font-size="26" font-weight="800" fill="var(--encre)" font-family="Arial,sans-serif">30</text>
  `),
  A15: triangleDanger(`<polyline points="25,60 40,45 50,60 60,45 75,60" fill="none" stroke="var(--encre)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`),
  A23: triangleDanger(`
    <circle cx="38" cy="42" r="6" fill="var(--encre)"/>
    <rect x="32" y="50" width="12" height="18" rx="3" fill="var(--encre)"/>
    <circle cx="58" cy="46" r="5" fill="var(--encre)"/>
    <rect x="53" y="53" width="10" height="15" rx="3" fill="var(--encre)"/>
  `),
  M2: svgWrap(`
    <rect x="4" y="30" width="92" height="40" rx="4" fill="#fff" stroke="var(--encre)" stroke-width="4"/>
    <circle cx="34" cy="58" r="8" fill="none" stroke="var(--encre)" stroke-width="4"/>
    <circle cx="62" cy="58" r="8" fill="none" stroke="var(--encre)" stroke-width="4"/>
    <line x1="34" y1="58" x2="48" y2="42" stroke="var(--encre)" stroke-width="4"/>
    <line x1="48" y1="42" x2="62" y2="58" stroke="var(--encre)" stroke-width="4"/>
    <line x1="48" y1="42" x2="42" y2="58" stroke="var(--encre)" stroke-width="4"/>
  `),
  feu_rouge: feu("rouge"),
  feu_orange: feu("orange"),
  feu_vert: feu("vert"),
  marquage_continu: svgWrap(`<rect width="100" height="100" fill="var(--gris)" opacity="0.15"/><line x1="6" y1="50" x2="94" y2="50" stroke="#fff" stroke-width="10"/>`),
  marquage_discontinu: svgWrap(`
    <rect width="100" height="100" fill="var(--gris)" opacity="0.15"/>
    <line x1="4" y1="50" x2="20" y2="50" stroke="#fff" stroke-width="10"/>
    <line x1="32" y1="50" x2="48" y2="50" stroke="#fff" stroke-width="10"/>
    <line x1="60" y1="50" x2="76" y2="50" stroke="#fff" stroke-width="10"/>
    <line x1="88" y1="50" x2="96" y2="50" stroke="#fff" stroke-width="10"/>
  `),
  priorite_droite_icone: svgWrap(`
    <rect x="42" y="4" width="16" height="92" fill="var(--gris)" opacity="0.25"/>
    <rect x="4" y="42" width="92" height="16" fill="var(--gris)" opacity="0.25"/>
    <polygon points="96,50 76,40 76,60" fill="var(--rouge)"/>
  `),
};

const SCENES = {
  hierarchie: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <g font-weight="700" fill="#fff">
      <rect x="180" y="6" width="280" height="42" rx="8" fill="var(--bleu-fonce)"/>
      <text x="320" y="33" text-anchor="middle" font-size="15">1. Agent qualifié</text>
      <rect x="150" y="56" width="340" height="42" rx="8" fill="var(--bleu)"/>
      <text x="320" y="83" text-anchor="middle" font-size="15">2. Feux de circulation</text>
      <rect x="120" y="106" width="400" height="42" rx="8" fill="#3E6BA8"/>
      <text x="320" y="133" text-anchor="middle" font-size="15">3. Panneaux (signaux)</text>
      <rect x="90" y="156" width="460" height="42" rx="8" fill="#7C9CC4"/>
      <text x="320" y="183" text-anchor="middle" font-size="15" fill="var(--encre)">4. Marquages au sol</text>
      <rect x="60" y="206" width="520" height="42" rx="8" fill="#B9C9E2"/>
      <text x="320" y="233" text-anchor="middle" font-size="15" fill="var(--encre)">5. Règles générales (priorité de droite)</text>
    </g>
    <text x="596" y="140" font-size="12" fill="var(--gris)" text-anchor="middle" transform="rotate(90 596 140)">priorité décroissante</text>
  </svg>`,

  "priorite-droite": `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <rect width="640" height="320" fill="#E4E9F0"/>
    <rect x="280" y="0" width="80" height="320" fill="#B7C1D1"/>
    <rect x="0" y="120" width="640" height="80" fill="#B7C1D1"/>
    <line x1="320" y1="0" x2="320" y2="120" stroke="#fff" stroke-width="5" stroke-dasharray="16 12"/>
    <line x1="320" y1="200" x2="320" y2="320" stroke="#fff" stroke-width="5" stroke-dasharray="16 12"/>
    <line x1="0" y1="160" x2="280" y2="160" stroke="#fff" stroke-width="5" stroke-dasharray="16 12"/>
    <line x1="360" y1="160" x2="640" y2="160" stroke="#fff" stroke-width="5" stroke-dasharray="16 12"/>
    <g transform="translate(300,232)">
      <rect x="0" y="0" width="40" height="68" rx="10" fill="var(--bleu)"/>
      <polygon points="20,-12 34,10 6,10" fill="var(--bleu)"/>
    </g>
    <text x="320" y="310" text-anchor="middle" font-size="15" font-weight="800" fill="var(--bleu)">VOUS</text>
    <g transform="translate(470,140) rotate(-90)">
      <rect x="-20" y="-34" width="40" height="68" rx="10" fill="var(--rouge)"/>
      <polygon points="0,-46 14,-24 -14,-24" fill="var(--rouge)"/>
    </g>
    <text x="560" y="145" text-anchor="middle" font-size="15" font-weight="800" fill="var(--rouge)">PRIORITAIRE</text>
    <path d="M290,220 Q230,180 280,158" fill="none" stroke="var(--encre)" stroke-width="4"/>
    <polygon points="278,150 296,156 282,168" fill="var(--encre)"/>
    <text x="70" y="150" font-size="14" font-weight="700" fill="var(--encre)">Vous cédez le passage</text>
  </svg>`,

  "distance-arret": `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <text x="10" y="22" font-size="15" font-weight="800" fill="var(--encre)">Distance d'arrêt approximative (route sèche)</text>
    <text x="10" y="72" font-size="14" font-weight="700" fill="var(--encre)">50 km/h</text>
    <rect x="90" y="56" width="42" height="26" fill="var(--bleu)"/>
    <rect x="132" y="56" width="39" height="26" fill="var(--rouge)"/>
    <text x="181" y="74" font-size="13" fill="var(--gris)">27 m</text>
    <text x="10" y="142" font-size="14" font-weight="700" fill="var(--encre)">90 km/h</text>
    <rect x="90" y="126" width="75" height="26" fill="var(--bleu)"/>
    <rect x="165" y="126" width="165" height="26" fill="var(--rouge)"/>
    <text x="340" y="144" font-size="13" fill="var(--gris)">≈80 m</text>
    <text x="10" y="212" font-size="14" font-weight="700" fill="var(--encre)">120 km/h</text>
    <rect x="90" y="196" width="99" height="26" fill="var(--bleu)"/>
    <rect x="189" y="196" width="291" height="26" fill="var(--rouge)"/>
    <text x="490" y="214" font-size="13" fill="var(--gris)">≈130 m</text>
    <rect x="90" y="244" width="16" height="14" fill="var(--bleu)"/><text x="112" y="256" font-size="12" fill="var(--gris)">Distance de réaction (1 s)</text>
    <rect x="330" y="244" width="16" height="14" fill="var(--rouge)"/><text x="352" y="256" font-size="12" fill="var(--gris)">Distance de freinage</text>
  </svg>`,

  "gradation-sanctions": `<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <text x="10" y="20" font-size="15" font-weight="800" fill="var(--encre)">Taux d'alcoolémie et conséquences immédiates</text>
    <rect x="20" y="42" width="150" height="34" fill="var(--vert)"/>
    <rect x="170" y="42" width="140" height="34" fill="var(--jaune)"/>
    <rect x="310" y="42" width="180" height="34" fill="#E8792D"/>
    <rect x="490" y="42" width="130" height="34" fill="var(--rouge)"/>
    <text x="20" y="92" font-size="12" fill="var(--gris)">0</text>
    <text x="160" y="92" font-size="12" fill="var(--gris)">0,5 g/l</text>
    <text x="296" y="92" font-size="12" fill="var(--gris)">0,8 g/l</text>
    <text x="478" y="92" font-size="12" fill="var(--gris)">1,8 g/l</text>
    <text x="20" y="115" font-size="12" font-weight="700" fill="var(--vert)">Légal</text>
    <text x="170" y="115" font-size="12" font-weight="700" fill="#B08600">3 h + 179 €</text>
    <text x="310" y="115" font-size="12" font-weight="700" fill="#E8792D">6 h + tribunal</text>
    <text x="490" y="115" font-size="12" font-weight="700" fill="var(--rouge)">Alcolock</text>
    <text x="20" y="145" font-size="12" fill="var(--gris)">Élimination ≈ 0,10–0,15 g/l par heure — rien ne l'accélère.</text>
  </svg>`,

  "distances-stationnement": `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <rect x="0" y="70" width="640" height="90" fill="#C9D2DE"/>
    <rect x="0" y="160" width="640" height="20" fill="#E4E9F0"/>
    <rect x="0" y="0" width="70" height="70" fill="#B7C1D1"/>
    <text x="6" y="16" font-size="12" fill="var(--gris)">Carrefour</text>
    <rect x="140" y="95" width="90" height="40" rx="8" fill="var(--bleu)"/>
    <text x="185" y="120" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">✗ interdit</text>
    <line x1="70" y1="150" x2="140" y2="150" stroke="var(--encre)" stroke-width="2"/>
    <text x="72" y="145" font-size="13" font-weight="700" fill="var(--encre)">5 m</text>
    <circle cx="565" cy="55" r="9" fill="var(--bleu)"/>
    <rect x="560" y="60" width="10" height="30" fill="var(--encre)"/>
    <text x="524" y="45" font-size="12" fill="var(--gris)">Arrêt de bus</text>
    <rect x="380" y="95" width="90" height="40" rx="8" fill="var(--rouge)"/>
    <text x="425" y="120" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">✗ interdit</text>
    <line x1="470" y1="150" x2="560" y2="150" stroke="var(--encre)" stroke-width="2"/>
    <text x="480" y="145" font-size="13" font-weight="700" fill="var(--encre)">15 m</text>
  </svg>`,

  "ecart-cycliste": `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <rect x="0" y="0" width="640" height="240" fill="#C9D2DE"/>
    <line x1="0" y1="120" x2="640" y2="120" stroke="#fff" stroke-width="4" stroke-dasharray="16 12"/>
    <g transform="translate(120,160)">
      <circle cx="0" cy="-30" r="10" fill="var(--encre)"/>
      <line x1="0" y1="-20" x2="0" y2="0" stroke="var(--encre)" stroke-width="5"/>
      <circle cx="-14" cy="14" r="12" fill="none" stroke="var(--encre)" stroke-width="4"/>
      <circle cx="14" cy="14" r="12" fill="none" stroke="var(--encre)" stroke-width="4"/>
      <line x1="-14" y1="14" x2="14" y2="14" stroke="var(--encre)" stroke-width="4"/>
      <line x1="0" y1="0" x2="10" y2="14" stroke="var(--encre)" stroke-width="4"/>
    </g>
    <rect x="260" y="40" width="140" height="60" rx="14" fill="var(--bleu)"/>
    <polygon points="400,50 420,70 400,90" fill="var(--bleu)"/>
    <line x1="200" y1="150" x2="200" y2="100" stroke="var(--encre)" stroke-width="2"/>
    <line x1="180" y1="125" x2="220" y2="125" stroke="var(--encre)" stroke-width="2"/>
    <text x="225" y="118" font-size="14" font-weight="800" fill="var(--encre)">1 m (agglo)</text>
    <text x="225" y="140" font-size="14" font-weight="800" fill="var(--gris)">1,5 m (hors agglo)</text>
  </svg>`,

  "rond-point": `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <rect width="640" height="360" fill="#E4E9F0"/>
    <rect x="290" y="0" width="60" height="150" fill="#B7C1D1"/>
    <rect x="290" y="210" width="60" height="150" fill="#B7C1D1"/>
    <rect x="0" y="170" width="220" height="60" fill="#B7C1D1"/>
    <rect x="420" y="170" width="220" height="60" fill="#B7C1D1"/>
    <circle cx="320" cy="200" r="110" fill="#B7C1D1"/>
    <circle cx="320" cy="200" r="58" fill="#8FA0BC"/>
    <polygon points="312,116 326,110 326,122" fill="#fff"/>
    <polygon points="236,208 230,194 242,194" fill="#fff"/>
    <polygon points="328,284 314,278 314,290" fill="#fff"/>
    <polygon points="404,192 398,206 410,206" fill="#fff"/>
    <g transform="translate(300,296)">
      <rect x="0" y="0" width="36" height="58" rx="8" fill="var(--bleu)"/>
      <polygon points="18,-10 30,10 6,10" fill="var(--bleu)"/>
    </g>
    <text x="320" y="345" text-anchor="middle" font-size="14" font-weight="800" fill="var(--bleu)">VOUS — vous cédez</text>
    <g transform="translate(232,232) rotate(45)">
      <rect x="-18" y="-29" width="36" height="58" rx="8" fill="var(--rouge)"/>
      <polygon points="0,-39 12,-19 -12,-19" fill="var(--rouge)"/>
    </g>
    <text x="70" y="255" font-size="14" font-weight="800" fill="var(--rouge)">PRIORITAIRE</text>
    <text x="70" y="273" font-size="12" fill="var(--gris)">déjà dans l'anneau</text>
  </svg>`,

  "tourner-gauche": `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <rect width="640" height="320" fill="#E4E9F0"/>
    <rect x="280" y="0" width="80" height="320" fill="#B7C1D1"/>
    <rect x="0" y="120" width="640" height="80" fill="#B7C1D1"/>
    <line x1="320" y1="0" x2="320" y2="120" stroke="#fff" stroke-width="5" stroke-dasharray="16 12"/>
    <line x1="320" y1="200" x2="320" y2="320" stroke="#fff" stroke-width="5" stroke-dasharray="16 12"/>
    <g transform="translate(300,232)">
      <rect x="0" y="0" width="40" height="66" rx="10" fill="var(--bleu)"/>
      <polygon points="20,-12 34,10 6,10" fill="var(--bleu)"/>
    </g>
    <text x="320" y="312" text-anchor="middle" font-size="15" font-weight="800" fill="var(--bleu)">VOUS</text>
    <path d="M320,222 Q320,175 265,165" fill="none" stroke="var(--bleu)" stroke-width="4" stroke-dasharray="6 6"/>
    <polygon points="258,163 274,159 268,173" fill="var(--bleu)"/>
    <g transform="translate(320,60) rotate(180)">
      <rect x="-20" y="-33" width="40" height="66" rx="10" fill="var(--rouge)"/>
      <polygon points="0,-45 14,-23 -14,-23" fill="var(--rouge)"/>
    </g>
    <text x="320" y="16" text-anchor="middle" font-size="15" font-weight="800" fill="var(--rouge)">PRIORITAIRE — tout droit</text>
    <text x="60" y="180" font-size="14" font-weight="700" fill="var(--encre)">Vous cédez avant de tourner à gauche</text>
  </svg>`,

  "angle-mort-camion": `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <rect width="640" height="260" fill="#E4E9F0"/>
    <rect x="80" y="100" width="220" height="60" rx="10" fill="var(--encre)"/>
    <rect x="80" y="100" width="60" height="60" rx="10" fill="#3a4657"/>
    <polygon points="140,100 340,40 340,100" fill="var(--rouge)" opacity="0.25"/>
    <polygon points="300,160 460,160 460,220 300,220" fill="var(--rouge)" opacity="0.25"/>
    <polygon points="80,100 40,60 80,60" fill="var(--rouge)" opacity="0.25"/>
    <text x="380" y="195" font-size="13" font-weight="800" fill="var(--rouge)">Zone invisible</text>
    <rect x="360" y="178" width="60" height="30" rx="6" fill="var(--bleu)"/>
    <text x="390" y="228" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bleu)">Vous (invisible ici)</text>
    <rect x="480" y="178" width="60" height="30" rx="6" fill="var(--vert)"/>
    <text x="510" y="228" text-anchor="middle" font-size="12" font-weight="700" fill="var(--vert)">Zone visible</text>
  </svg>`,

  "couloir-secours": `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif">
    <rect width="640" height="280" fill="#C9D2DE"/>
    <line x1="0" y1="93" x2="640" y2="93" stroke="#fff" stroke-width="3" stroke-dasharray="14 10"/>
    <line x1="0" y1="187" x2="640" y2="187" stroke="#fff" stroke-width="3" stroke-dasharray="14 10"/>
    <rect x="40" y="30" width="70" height="34" rx="8" fill="var(--bleu)"/>
    <rect x="150" y="32" width="70" height="34" rx="8" fill="var(--bleu)"/>
    <rect x="40" y="105" width="70" height="34" rx="8" fill="var(--encre)"/>
    <rect x="150" y="107" width="70" height="34" rx="8" fill="var(--encre)"/>
    <rect x="0" y="88" width="640" height="10" fill="#fff" opacity="0.5"/>
    <rect x="500" y="120" width="70" height="34" rx="8" fill="var(--encre)"/>
    <rect x="400" y="200" width="70" height="34" rx="8" fill="var(--encre)"/>
    <rect x="520" y="205" width="70" height="34" rx="8" fill="var(--encre)"/>
    <rect x="280" y="80" width="90" height="30" rx="8" fill="#fff" stroke="var(--rouge)" stroke-width="4"/>
    <text x="325" y="101" text-anchor="middle" font-size="13" font-weight="800" fill="var(--rouge)">URGENCE</text>
    <text x="325" y="135" text-anchor="middle" font-size="14" font-weight="800" fill="var(--rouge)">Couloir de secours</text>
    <text x="325" y="152" text-anchor="middle" font-size="12" fill="var(--gris)">entre la bande de gauche et la suivante</text>
  </svg>`,
};

function injecterVisuels(root){
  root.querySelectorAll("[data-signe]").forEach(el=>{
    const code = el.dataset.signe;
    if(PANNEAUX[code]) el.innerHTML = PANNEAUX[code];
  });
  root.querySelectorAll("[data-scene]").forEach(el=>{
    const key = el.dataset.scene;
    if(SCENES[key]) el.innerHTML = SCENES[key];
  });
}
