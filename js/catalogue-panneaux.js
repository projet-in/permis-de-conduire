// ===== Catalogue complet des panneaux officiels belges (SPW) =====
// Basé sur les dessins techniques officiels (formes/proportions) — illustrations SVG originales.
// Séparé de PANNEAUX (utilisé activement dans cours/examen/flashcards) pour ne rien casser :
// ce catalogue alimente une page de référence dédiée, consultable par famille.

// --- Petits pictogrammes réutilisables (coordonnées 0-100, traits simples) ---
function pFleche(x1,y1,x2,y2,coul){
  const c = coul||"var(--encre)";
  const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy)||1;
  const ux=dx/len, uy=dy/len;
  const bx=x2-ux*8, by=y2-uy*8;
  const px=-uy*5, py=ux*5;
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="4"/><polygon points="${x2},${y2} ${bx+px},${by+py} ${bx-px},${by-py}" fill="${c}"/>`;
}
function pVoiture(cx,cy,s,coul){
  const c = coul||"var(--encre)";
  return `<g transform="translate(${cx},${cy}) scale(${s})"><rect x="-17" y="-7" width="34" height="15" rx="5" fill="${c}"/><circle cx="-9" cy="9" r="5.5" fill="${c}"/><circle cx="9" cy="9" r="5.5" fill="${c}"/></g>`;
}
function pCamion(cx,cy,s,coul){
  const c = coul||"var(--encre)";
  return `<g transform="translate(${cx},${cy}) scale(${s})"><rect x="-18" y="-9" width="24" height="18" rx="2" fill="${c}"/><rect x="6" y="-3" width="12" height="12" rx="2" fill="${c}"/><circle cx="-10" cy="10" r="5" fill="${c}"/><circle cx="10" cy="10" r="5" fill="${c}"/></g>`;
}
function pVelo(cx,cy,s,coul){
  const c = coul||"var(--encre)";
  return `<g transform="translate(${cx},${cy}) scale(${s})"><circle cx="-11" cy="8" r="9" fill="none" stroke="${c}" stroke-width="3.5"/><circle cx="11" cy="8" r="9" fill="none" stroke="${c}" stroke-width="3.5"/><line x1="-11" y1="8" x2="2" y2="-8" stroke="${c}" stroke-width="3.5"/><line x1="2" y1="-8" x2="11" y2="8" stroke="${c}" stroke-width="3.5"/><line x1="-4" y1="8" x2="11" y2="8" stroke="${c}" stroke-width="3.5"/></g>`;
}
function pPieton(cx,cy,s,coul){
  const c = coul||"var(--encre)";
  return `<g transform="translate(${cx},${cy}) scale(${s})"><circle cx="0" cy="-14" r="6" fill="${c}"/><line x1="0" y1="-8" x2="0" y2="10" stroke="${c}" stroke-width="5"/><line x1="0" y1="10" x2="-9" y2="26" stroke="${c}" stroke-width="5"/><line x1="0" y1="10" x2="9" y2="26" stroke="${c}" stroke-width="5"/><line x1="0" y1="-2" x2="-11" y2="8" stroke="${c}" stroke-width="4"/><line x1="0" y1="-2" x2="11" y2="8" stroke="${c}" stroke-width="4"/></g>`;
}
function pMoto(cx,cy,s,coul){
  const c = coul||"var(--encre)";
  return `<g transform="translate(${cx},${cy}) scale(${s})"><circle cx="-12" cy="9" r="7" fill="none" stroke="${c}" stroke-width="3.5"/><circle cx="12" cy="9" r="7" fill="none" stroke="${c}" stroke-width="3.5"/><line x1="-12" y1="9" x2="4" y2="-6" stroke="${c}" stroke-width="3.5"/><line x1="4" y1="-6" x2="12" y2="9" stroke="${c}" stroke-width="3.5"/><circle cx="4" cy="-10" r="4" fill="${c}"/></g>`;
}
function pTrain(cx,cy,s,coul){
  const c = coul||"var(--encre)";
  return `<g transform="translate(${cx},${cy}) scale(${s})"><rect x="-16" y="-10" width="32" height="20" rx="4" fill="${c}"/><circle cx="-8" cy="12" r="4" fill="${c}"/><circle cx="8" cy="12" r="4" fill="${c}"/></g>`;
}
function pEclair(cx,cy,s,coul){
  const c = coul||"var(--encre)";
  return `<polygon points="${cx-2},${cy-16} ${cx+8},${cy-16} ${cx-2},${cy} ${cx+6},${cy} ${cx-8},${cy+16} ${cx-4},${cy-2} ${cx-10},${cy-2}" fill="${c}" transform="scale(${s})" />`;
}
function pExclamation(cx,cy,coul){
  const c = coul||"var(--encre)";
  return `<rect x="${cx-3}" y="${cy-16}" width="6" height="22" rx="3" fill="${c}"/><circle cx="${cx}" cy="${cy+13}" r="4" fill="${c}"/>`;
}

// --- Famille A : signaux de danger (triangle, bord rouge) ---
const CATALOGUE_A = {
  A1a:{nom:"Virage dangereux à gauche", svg:triangleDanger(`<path d="M65,42 Q65,68 35,68" fill="none" stroke="var(--encre)" stroke-width="5"/>${pFleche(45,68,32,68)}`)},
  A1b:{nom:"Virage dangereux à droite", svg:triangleDanger(`<path d="M35,42 Q35,68 65,68" fill="none" stroke="var(--encre)" stroke-width="5"/>${pFleche(55,68,68,68)}`)},
  A1c:{nom:"Virage dangereux : succession de virages, premier à gauche", svg:triangleDanger(`<path d="M30,66 Q30,40 50,40 Q70,40 70,60" fill="none" stroke="var(--encre)" stroke-width="5"/>`)},
  A1d:{nom:"Virage dangereux : succession de virages, premier à droite", svg:triangleDanger(`<path d="M70,66 Q70,40 50,40 Q30,40 30,60" fill="none" stroke="var(--encre)" stroke-width="5"/>`)},
  A3:{nom:"Descente dangereuse", svg:triangleDanger(`<path d="M25,50 L75,68" stroke="var(--encre)" stroke-width="5"/><text x="45" y="46" font-size="16" font-weight="800" fill="var(--encre)" font-family="Arial">10%</text>`)},
  A5:{nom:"Montée à forte inclinaison", svg:triangleDanger(`<path d="M25,68 L75,50" stroke="var(--encre)" stroke-width="5"/><text x="45" y="46" font-size="16" font-weight="800" fill="var(--encre)" font-family="Arial">10%</text>`)},
  A7a:{nom:"Rétrécissement de la chaussée", svg:triangleDanger(`<path d="M25,42 L45,58 L25,74 M75,42 L55,58 L75,74" fill="none" stroke="var(--encre)" stroke-width="4"/>`)},
  A7b:{nom:"Rétrécissement de la chaussée à gauche", svg:triangleDanger(`<path d="M25,42 L50,58 L25,74" fill="none" stroke="var(--encre)" stroke-width="4"/><line x1="25" y1="70" x2="75" y2="70" stroke="var(--encre)" stroke-width="3"/>`)},
  A7c:{nom:"Rétrécissement de la chaussée à droite", svg:triangleDanger(`<path d="M75,42 L50,58 L75,74" fill="none" stroke="var(--encre)" stroke-width="4"/><line x1="25" y1="70" x2="75" y2="70" stroke="var(--encre)" stroke-width="3"/>`)},
  A9:{nom:"Pont mobile", svg:triangleDanger(`<line x1="22" y1="70" x2="78" y2="70" stroke="var(--encre)" stroke-width="4"/><line x1="40" y1="70" x2="40" y2="45" stroke="var(--encre)" stroke-width="4"/><line x1="60" y1="70" x2="60" y2="45" stroke="var(--encre)" stroke-width="4"/><line x1="40" y1="45" x2="50" y2="55" stroke="var(--encre)" stroke-width="4"/><line x1="60" y1="45" x2="50" y2="55" stroke="var(--encre)" stroke-width="4"/>`)},
  A11:{nom:"Débouché sur une berge ou un quai", svg:triangleDanger(`<line x1="22" y1="68" x2="78" y2="68" stroke="var(--encre)" stroke-width="4"/><path d="M22,68 Q35,74 48,68 Q61,62 78,68" fill="none" stroke="var(--encre)" stroke-width="3"/>${pVoiture(50,52,0.55)}`)},
  A13:{nom:"Cassis ou dos d'âne", svg:triangleDanger(`<path d="M22,66 Q40,66 45,52 Q50,66 55,52 Q60,66 78,66" fill="none" stroke="var(--encre)" stroke-width="4"/>`)},
  A14:{nom:"Dispositif surélevé", svg:triangleDanger(`<path d="M20,66 Q50,42 80,66" fill="none" stroke="var(--encre)" stroke-width="5"/>`)},
  A15:{nom:"Chaussée glissante", svg:triangleDanger(`<polyline points="25,60 40,45 50,60 60,45 75,60" fill="none" stroke="var(--encre)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`)},
  A17:{nom:"Projection de gravillons", svg:triangleDanger(`<circle cx="42" cy="52" r="3" fill="var(--encre)"/><circle cx="55" cy="48" r="3" fill="var(--encre)"/><circle cx="60" cy="62" r="3" fill="var(--encre)"/><circle cx="46" cy="66" r="3" fill="var(--encre)"/>${pVoiture(50,45,0.4)}`)},
  A19:{nom:"Chutes de pierres", svg:triangleDanger(`<polygon points="35,45 45,55 38,66 28,58" fill="var(--encre)"/><polygon points="55,50 66,58 58,68 48,62" fill="var(--encre)"/>`)},
  A21:{nom:"Passage pour piétons", svg:triangleDanger(pPieton(50,55,0.85))},
  A23:{nom:"Endroit spécialement fréquenté par des enfants", svg:triangleDanger(`${pPieton(40,58,0.55)}${pPieton(60,58,0.65)}`)},
  A25:{nom:"Passage pour cyclistes", svg:triangleDanger(pVelo(50,58,0.85))},
  A27:{nom:"Traversée de gros gibier", svg:triangleDanger(`<path d="M35,68 L35,52 L27,58 M35,52 L45,40 L55,52 M55,52 L65,58" fill="none" stroke="var(--encre)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`)},
  A29:{nom:"Traversée de bétail", svg:triangleDanger(`<ellipse cx="50" cy="60" rx="20" ry="10" fill="var(--encre)"/><circle cx="32" cy="52" r="7" fill="var(--encre)"/>`)},
  A31:{nom:"Travaux", svg:triangleDanger(`<circle cx="42" cy="42" r="5" fill="var(--encre)"/><line x1="42" y1="47" x2="42" y2="60" stroke="var(--encre)" stroke-width="4"/><line x1="42" y1="60" x2="32" y2="72" stroke="var(--encre)" stroke-width="4"/><line x1="42" y1="55" x2="58" y2="48" stroke="var(--encre)" stroke-width="4"/><line x1="58" y1="48" x2="66" y2="70" stroke="var(--encre)" stroke-width="3"/>`)},
  A33:{nom:"Signaux lumineux de circulation", svg:triangleDanger(`<rect x="42" y="42" width="16" height="34" rx="4" fill="var(--encre)"/><circle cx="50" cy="50" r="4" fill="var(--rouge)"/><circle cx="50" cy="59" r="4" fill="var(--jaune)"/><circle cx="50" cy="68" r="4" fill="var(--vert)"/>`)},
  A35:{nom:"Survol d'avions à basse altitude", svg:triangleDanger(`<path d="M30,58 L50,50 L70,58 L58,60 L50,72 L42,60 Z" fill="var(--encre)"/>`)},
  A37:{nom:"Vent latéral", svg:triangleDanger(`<path d="M25,50 Q45,44 55,52 Q65,60 75,54" fill="none" stroke="var(--encre)" stroke-width="4"/><path d="M25,64 Q45,58 55,66" fill="none" stroke="var(--encre)" stroke-width="4"/>`)},
  A49:{nom:"Croisement de la voie publique par une voie ferrée (tram)", svg:triangleDanger(pTrain(50,55,0.55)+`<line x1="25" y1="70" x2="75" y2="70" stroke="var(--encre)" stroke-width="3"/>`)},
  A51:{nom:"Danger non déterminé par un symbole spécial", svg:triangleDanger(pExclamation(50,58))},
};

// --- Famille B : signaux de priorité ---
const CATALOGUE_B = {
  B1:{nom:"Cédez le passage", svg:triangleCeder("")},
  B3:{nom:"Annonce du signal B1 à distance indiquée", svg:triangleCeder(`<text x="50" y="82" text-anchor="middle" font-size="13" font-weight="800" fill="var(--encre)" font-family="Arial">50m</text>`)},
  B5:{nom:"Arrêt (STOP)", svg:PANNEAUX.B5},
  B7:{nom:"Annonce du signal B5 (STOP) à 150 m", svg:svgWrap(`<polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill="var(--rouge)" stroke="#fff" stroke-width="4"/><text x="50" y="55" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="Arial">STOP</text><text x="50" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="Arial">150m</text>`)},
  B9:{nom:"Voie prioritaire", svg:losange("")},
  B11:{nom:"Fin de voie prioritaire", svg:losange("", true)},
  B13:{nom:"Annonce de la fin de voie prioritaire à 250 m", svg:svgWrap(`<rect x="22" y="22" width="56" height="56" rx="6" fill="var(--jaune)" stroke="#C89A00" stroke-width="4" transform="rotate(45 50 50)"/><line x1="14" y1="86" x2="86" y2="14" stroke="var(--encre)" stroke-width="6"/><text x="50" y="94" text-anchor="middle" font-size="12" font-weight="800" fill="var(--encre)" font-family="Arial">250m</text>`, "0 0 100 105")},
  B15:{nom:"Priorité de passage au prochain carrefour", svg:PANNEAUX.B15},
  B17:{nom:"Priorité à droite (carrefour où la priorité de droite s'applique)", svg:triangleDanger(`
    <rect x="42" y="4" width="16" height="60" fill="var(--gris)" opacity="0.35" transform="translate(0,32)"/>
    <rect x="4" y="42" width="92" height="16" fill="var(--gris)" opacity="0.35"/>
    <polygon points="96,50 76,40 76,60" fill="var(--rouge)"/>
  `)},
  B19:{nom:"Passage étroit : cédez le passage aux véhicules venant en sens inverse", svg:PANNEAUX.B19},
  B21:{nom:"Passage étroit : priorité par rapport aux véhicules venant en sens inverse", svg:PANNEAUX.B21},
};

// --- Famille C : signaux d'interdiction (rond, bord rouge) ---
const CATALOGUE_C = {
  C1:{nom:"Sens interdit", svg:PANNEAUX.C1},
  C3:{nom:"Circulation interdite dans les deux sens", svg:PANNEAUX.C3},
  C5:{nom:"Accès interdit aux véhicules à moteur à plus de deux roues (et motos avec side-car)", svg:rondInterdiction(pVoiture(50,55,0.9))},
  C7:{nom:"Accès interdit aux motocyclettes", svg:rondInterdiction(pMoto(50,55,0.85))},
  C9:{nom:"Accès interdit aux cyclomoteurs", svg:rondInterdiction(pMoto(50,55,0.7))},
  C11:{nom:"Accès interdit aux cycles (vélos)", svg:rondInterdiction(pVelo(50,55,0.85))},
  C13:{nom:"Accès interdit aux véhicules attelés", svg:rondInterdiction(`<circle cx="36" cy="46" r="6" fill="var(--encre)"/><line x1="36" y1="52" x2="36" y2="66" stroke="var(--encre)" stroke-width="4"/><line x1="28" y1="70" x2="44" y2="70" stroke="var(--encre)" stroke-width="4"/><line x1="42" y1="60" x2="66" y2="60" stroke="var(--encre)" stroke-width="3"/><rect x="58" y="52" width="14" height="14" fill="var(--encre)"/>`)},
  C15:{nom:"Accès interdit aux cavaliers", svg:rondInterdiction(`<circle cx="46" cy="42" r="6" fill="var(--encre)"/><path d="M46,48 L46,60 M38,72 Q46,58 60,58 Q68,58 68,66 L68,72" stroke="var(--encre)" stroke-width="4" fill="none"/>`)},
  C17:{nom:"Accès interdit aux charrettes à bras", svg:rondInterdiction(`<circle cx="42" cy="44" r="6" fill="var(--encre)"/><line x1="42" y1="50" x2="42" y2="62" stroke="var(--encre)" stroke-width="4"/><line x1="42" y1="58" x2="60" y2="58" stroke="var(--encre)" stroke-width="4"/><rect x="58" y="54" width="14" height="10" fill="var(--encre)"/><circle cx="65" cy="68" r="4" fill="none" stroke="var(--encre)" stroke-width="2.5"/>`)},
  C19:{nom:"Accès interdit aux piétons", svg:rondInterdiction(pPieton(50,52,0.7))},
  C21:{nom:"Accès interdit (masse en charge supérieure à celle indiquée)", svg:rondInterdiction(`<text x="50" y="65" text-anchor="middle" font-size="26" font-weight="800" fill="var(--encre)" font-family="Arial">7,5t</text>`)},
  C22:{nom:"Accès interdit aux autocars", svg:rondInterdiction(`<rect x="26" y="42" width="48" height="24" rx="4" fill="var(--encre)"/><circle cx="36" cy="68" r="6" fill="var(--encre)"/><circle cx="64" cy="68" r="6" fill="var(--encre)"/>`)},
  C23:{nom:"Accès interdit aux camions", svg:PANNEAUX.C23},
  C24a:{nom:"Accès interdit aux véhicules transportant des marchandises dangereuses", svg:rondInterdiction(`${pCamion(48,56,0.65)}${pExclamation(72,44)}`)},
  C24b:{nom:"Accès interdit — marchandises dangereuses inflammables ou explosibles", svg:rondInterdiction(`${pCamion(48,58,0.65)}${pEclair(72,42,0.6)}`)},
  C24c:{nom:"Accès interdit — marchandises pouvant polluer les eaux", svg:rondInterdiction(`${pCamion(48,56,0.65)}<path d="M68,38 Q72,44 68,48 Q64,44 68,38" fill="var(--encre)"/>`)},
  C25:{nom:"Accès interdit (longueur supérieure à celle indiquée)", svg:rondInterdiction(`<rect x="28" y="46" width="44" height="16" fill="none" stroke="var(--encre)" stroke-width="3"/><text x="50" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="var(--encre)" font-family="Arial">10m</text>`)},
  C27:{nom:"Accès interdit (largeur supérieure à celle indiquée)", svg:rondInterdiction(`<line x1="30" y1="40" x2="30" y2="70" stroke="var(--encre)" stroke-width="4"/><line x1="70" y1="40" x2="70" y2="70" stroke="var(--encre)" stroke-width="4"/><line x1="30" y1="55" x2="70" y2="55" stroke="var(--encre)" stroke-width="3"/><text x="50" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="var(--encre)" font-family="Arial">2m</text>`)},
  C29:{nom:"Accès interdit (hauteur supérieure à celle indiquée)", svg:rondInterdiction(`<line x1="30" y1="30" x2="70" y2="30" stroke="var(--encre)" stroke-width="4"/><line x1="30" y1="70" x2="70" y2="70" stroke="var(--encre)" stroke-width="4"/><line x1="50" y1="30" x2="50" y2="70" stroke="var(--encre)" stroke-width="3"/><text x="50" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="var(--encre)" font-family="Arial">3m5</text>`)},
  C31a:{nom:"Au prochain carrefour, interdiction de tourner à gauche", svg:rondInterdiction(pFleche(65,65,35,35))},
  C31b:{nom:"Au prochain carrefour, interdiction de tourner à droite", svg:rondInterdiction(pFleche(35,65,65,35))},
  C33:{nom:"Interdiction de faire demi-tour", svg:rondInterdiction(`<path d="M60,35 A18,18 0 1 1 55,32" fill="none" stroke="var(--encre)" stroke-width="5"/><polygon points="55,24 55,40 40,32" fill="var(--encre)"/>`)},
  C35:{nom:"Dépassement interdit (véhicules attelés et à plus de 2 roues)", svg:PANNEAUX.C35},
  C37:{nom:"Fin d'interdiction de dépasser (prévue par C35)", svg:PANNEAUX.C37},
  C39:{nom:"Dépassement interdit pour camions de plus de 3 500 kg", svg:rondInterdiction(`${pCamion(50,58,0.6)}<line x1="18" y1="82" x2="82" y2="18" stroke="var(--rouge)" stroke-width="6"/>`)},
  C41:{nom:"Fin d'interdiction de dépasser (prévue par C39)", svg:svgWrap(`<circle cx="50" cy="50" r="44" fill="#fff" stroke="var(--gris)" stroke-width="6"/><g opacity="0.55">${pCamion(50,58,0.6)}</g><line x1="18" y1="82" x2="82" y2="18" stroke="var(--gris)" stroke-width="6"/>`)},
  C43:{nom:"Vitesse maximale imposée", svg:PANNEAUX.C43_50},
  C45:{nom:"Fin de vitesse maximale imposée", svg:PANNEAUX.C45},
  C46:{nom:"Fin de toutes les interdictions signalées", svg:PANNEAUX.C46},
  C47:{nom:"Poste de péage — interdiction de passer sans s'arrêter", svg:rondInterdiction(`<rect x="28" y="30" width="8" height="44" fill="var(--encre)"/><rect x="64" y="30" width="8" height="44" fill="var(--encre)"/><rect x="28" y="46" width="44" height="8" fill="var(--encre)"/>`)},
};

// --- Famille D : signaux d'obligation (rond bleu) ---
const CATALOGUE_D = {
  D1:{nom:"Obligation de suivre la direction indiquée par la flèche (ou contournement d'obstacle)", svg:PANNEAUX.D1},
  D3:{nom:"Obligation de suivre une des directions indiquées par les flèches", svg:rondObligation(`${pFleche(50,75,50,25,"#fff")}${pFleche(50,75,25,50,"#fff")}`)},
  D4:{nom:"Obligation pour les véhicules transportant des marchandises dangereuses de suivre la direction indiquée", svg:rondObligation(pFleche(50,75,50,25,"#fff")+pExclamation(72,38,"#fff"))},
  D5:{nom:"Sens giratoire obligatoire (rond-point)", svg:PANNEAUX.D5},
  D7:{nom:"Piste cyclable obligatoire", svg:rondObligation(pVelo(50,55,0.85,"#fff"))},
  D9:{nom:"Voie réservée (séparée) aux piétons, bicyclettes et cyclomoteurs classe A", svg:rondObligation(`${pPieton(32,55,0.4,"#fff")}<line x1="50" y1="30" x2="50" y2="80" stroke="#fff" stroke-width="2"/>${pVelo(66,58,0.45,"#fff")}`)},
  D10:{nom:"Voie réservée (commune) aux piétons et aux cyclistes", svg:rondObligation(`${pPieton(35,55,0.42,"#fff")}${pVelo(65,58,0.48,"#fff")}`)},
  D11:{nom:"Chemin obligatoire pour piétons", svg:rondObligation(pPieton(50,52,0.85,"#fff"))},
  D13:{nom:"Chemin obligatoire pour cavaliers", svg:rondObligation(`<circle cx="42" cy="42" r="6" fill="#fff"/><path d="M42,48 L42,60 M42,60 L34,74 M42,60 L52,72" stroke="#fff" stroke-width="4" fill="none"/>`)},
};

// --- Famille E : arrêt et stationnement ---
const CATALOGUE_E = {
  E1:{nom:"Stationnement interdit", svg:PANNEAUX.E1},
  E3:{nom:"Arrêt et stationnement interdits", svg:PANNEAUX.E3},
  E5:{nom:"Stationnement interdit du 1er au 15 du mois", svg:carreIndication(`<text x="50" y="45" text-anchor="middle" font-size="30" font-weight="800" fill="#fff" font-family="Arial">P</text><text x="50" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Arial">1-15</text>`)},
  E7:{nom:"Stationnement interdit du 16 à la fin du mois", svg:carreIndication(`<text x="50" y="45" text-anchor="middle" font-size="30" font-weight="800" fill="#fff" font-family="Arial">P</text><text x="50" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Arial">16-31</text>`)},
  E9a:{nom:"Stationnement autorisé", svg:PANNEAUX.E9},
  E9b:{nom:"Stationnement réservé aux motocyclettes, voitures, voitures mixtes et minibus", svg:carreIndication(`${pVoiture(50,58,0.55,"#fff")}`)},
  E9d:{nom:"Stationnement réservé aux autocars", svg:carreIndication(`<rect x="26" y="42" width="48" height="24" rx="4" fill="#fff"/><circle cx="36" cy="68" r="6" fill="#fff"/><circle cx="64" cy="68" r="6" fill="#fff"/>`)},
  E9e:{nom:"Stationnement obligatoire sur l'accotement ou le trottoir", svg:carreIndication(`<rect x="20" y="60" width="60" height="10" fill="#fff" opacity="0.5"/>${pVoiture(50,50,0.55,"#fff")}`)},
  E9f:{nom:"Stationnement obligatoire en partie sur l'accotement ou le trottoir", svg:carreIndication(`<rect x="20" y="65" width="60" height="6" fill="#fff" opacity="0.5"/>${pVoiture(50,52,0.55,"#fff")}`)},
  E9g:{nom:"Stationnement obligatoire sur la chaussée", svg:carreIndication(pVoiture(50,55,0.7,"#fff"))},
  E9h:{nom:"Stationnement réservé aux camping-cars", svg:carreIndication(`<rect x="26" y="48" width="48" height="20" rx="4" fill="#fff"/><circle cx="36" cy="70" r="5" fill="#fff"/><circle cx="64" cy="70" r="5" fill="#fff"/>`)},
  E9i:{nom:"Stationnement réservé aux motocyclettes", svg:carreIndication(pMoto(50,55,0.85,"#fff"))},
  E9j:{nom:"Stationnement avec horodateur", svg:carreIndication(`<rect x="38" y="40" width="24" height="34" rx="4" fill="#fff"/><circle cx="50" cy="50" r="7" fill="none" stroke="var(--bleu)" stroke-width="2.5"/>`)},
  E11:{nom:"Stationnement alterné semi-mensuel", svg:PANNEAUX.E11},
};

// --- Famille F : signaux d'indication (carré/rectangle bleu, ou blanc pour F1/F3) ---
const CATALOGUE_F = {
  F1:{nom:"Entrée d'agglomération", svg:PANNEAUX.F1},
  F3:{nom:"Sortie d'agglomération", svg:PANNEAUX.F3},
  F4a:{nom:"Zone 30", svg:PANNEAUX.F4a}, F4b:{nom:"Fin de zone 30", svg:PANNEAUX.F4b},
  F5:{nom:"Début d'autoroute", svg:PANNEAUX.F5}, F7:{nom:"Fin d'autoroute", svg:PANNEAUX.F7},
  F8:{nom:"Début de route pour automobiles", svg:PANNEAUX.F9}, F9:{nom:"Fin de route pour automobiles", svg:carreIndication(`${pVoiture(50,55,0.7,"#fff")}<line x1="20" y1="80" x2="80" y2="20" stroke="var(--encre)" stroke-width="5"/>`)},
  F11:{nom:"Sens unique (large voirie)", svg:carreIndication(`<polygon points="30,50 70,50 70,35 90,55 70,75 70,60 30,60" fill="#fff"/>`)},
  F12a:{nom:"Zone résidentielle", svg:PANNEAUX.F12a}, F12b:{nom:"Fin de zone résidentielle", svg:carreIndication(`<polygon points="30,50 30,78 70,78 70,50 50,32" fill="#fff" opacity="0.6"/><line x1="20" y1="80" x2="80" y2="20" stroke="var(--encre)" stroke-width="5"/>`)},
  F13:{nom:"Parking", svg:PANNEAUX.E9}, F14:{nom:"Parking souterrain", svg:carreIndication(`<text x="50" y="50" text-anchor="middle" font-size="34" font-weight="800" fill="#fff" font-family="Arial">P</text><polygon points="30,68 70,68 50,84" fill="#fff"/>`)},
  F15:{nom:"Parking gardé", svg:carreIndication(`<text x="50" y="60" text-anchor="middle" font-size="30" font-weight="800" fill="#fff" font-family="Arial">P</text><circle cx="72" cy="35" r="10" fill="none" stroke="#fff" stroke-width="3"/>`)},
  F17:{nom:"Impasse avec issue pour piétons/cyclistes", svg:carreIndication(`<line x1="30" y1="70" x2="70" y2="70" stroke="#fff" stroke-width="5"/><line x1="70" y1="70" x2="70" y2="30" stroke="#fff" stroke-width="5"/>${pVelo(42,50,0.4,"#fff")}`)},
  F18:{nom:"Voie de détresse", svg:carreIndication(`<path d="M30,70 Q50,30 70,70" fill="none" stroke="#fff" stroke-width="5"/>`)},
  F19:{nom:"Sens unique", svg:PANNEAUX.F19},
  F21:{nom:"Voie sans issue partielle", svg:carreIndication(`<line x1="30" y1="70" x2="70" y2="70" stroke="#fff" stroke-width="5"/><line x1="50" y1="70" x2="50" y2="30" stroke="#fff" stroke-width="5"/>`)},
  F23a:{nom:"Présélection — 2 bandes tout droit", svg:carreIndication(`${pFleche(38,75,38,28,"#fff")}${pFleche(62,75,62,28,"#fff")}`)},
  F23b:{nom:"Présélection — bande de gauche vers la gauche", svg:carreIndication(`${pFleche(38,75,20,28,"#fff")}${pFleche(62,75,62,28,"#fff")}`)},
  F23c:{nom:"Présélection — bande de droite vers la droite", svg:carreIndication(`${pFleche(38,75,38,28,"#fff")}${pFleche(62,75,80,28,"#fff")}`)},
  F23d:{nom:"Présélection — voies multiples", svg:carreIndication(`${pFleche(25,75,25,28,"#fff")}${pFleche(50,75,50,28,"#fff")}${pFleche(75,75,75,28,"#fff")}`)},
  F25:{nom:"Direction d'une localité (autoroute)", svg:carreIndication(`<line x1="25" y1="40" x2="75" y2="40" stroke="#fff" stroke-width="4"/><line x1="25" y1="55" x2="60" y2="55" stroke="#fff" stroke-width="4"/><line x1="25" y1="70" x2="50" y2="70" stroke="#fff" stroke-width="4"/>`)},
  F27:{nom:"Confirmation de direction (autoroute)", svg:carreIndication(pFleche(30,55,75,55,"#fff"))},
  F29:{nom:"Présignalisation de sortie d'autoroute", svg:carreIndication(`${pFleche(50,30,75,60,"#fff")}<text x="30" y="70" font-size="14" font-weight="800" fill="#fff" font-family="Arial">2km</text>`)},
  F31:{nom:"Sortie d'autoroute", svg:carreIndication(`${pFleche(30,50,80,50,"#fff")}`)},
  F33a:{nom:"Réduction du nombre de bandes (droite)", svg:carreIndication(`<line x1="25" y1="30" x2="75" y2="30" stroke="#fff" stroke-width="4"/><line x1="25" y1="50" x2="60" y2="70" stroke="#fff" stroke-width="4"/><line x1="75" y1="30" x2="75" y2="80" stroke="#fff" stroke-width="4"/>`)},
  F33b:{nom:"Réduction du nombre de bandes (gauche)", svg:carreIndication(`<line x1="25" y1="30" x2="75" y2="30" stroke="#fff" stroke-width="4"/><line x1="75" y1="50" x2="40" y2="70" stroke="#fff" stroke-width="4"/><line x1="25" y1="30" x2="25" y2="80" stroke="#fff" stroke-width="4"/>`)},
  F33c:{nom:"Réduction du nombre de bandes (centrale)", svg:carreIndication(`<line x1="50" y1="30" x2="30" y2="70" stroke="#fff" stroke-width="4"/><line x1="50" y1="30" x2="70" y2="70" stroke="#fff" stroke-width="4"/>`)},
  F34a:{nom:"Schéma des bandes de circulation", svg:carreIndication(`${pFleche(35,75,35,28,"#fff")}${pFleche(65,75,65,28,"#fff")}`)},
  F34b1:{nom:"Schéma des bandes (variante 1)", svg:carreIndication(`${pFleche(30,75,30,28,"#fff")}${pFleche(50,75,50,28,"#fff")}${pFleche(70,75,85,28,"#fff")}`)},
  F34b2:{nom:"Schéma des bandes (variante 2)", svg:carreIndication(`${pFleche(30,75,15,28,"#fff")}${pFleche(50,75,50,28,"#fff")}${pFleche(70,75,70,28,"#fff")}`)},
  F34c1:{nom:"Schéma des bandes (variante 3)", svg:carreIndication(`${pFleche(25,75,25,28,"#fff")}${pFleche(50,75,35,28,"#fff")}${pFleche(75,75,65,28,"#fff")}`)},
  F34c2:{nom:"Schéma des bandes (variante 4)", svg:carreIndication(`${pFleche(25,75,35,28,"#fff")}${pFleche(50,75,65,28,"#fff")}${pFleche(75,75,75,28,"#fff")}`)},
  F35:{nom:"Signalisation d'affectation de bandes", svg:carreIndication(`${pFleche(50,75,50,28,"#fff")}`)},
  F37:{nom:"Numéro de route", svg:carreIndication(`<rect x="30" y="38" width="40" height="24" rx="4" fill="#fff"/><text x="50" y="56" text-anchor="middle" font-size="16" font-weight="800" fill="var(--bleu)" font-family="Arial">N5</text>`)},
  F39:{nom:"Numéro d'échangeur autoroutier", svg:carreIndication(`<circle cx="50" cy="50" r="20" fill="#fff"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="800" fill="var(--bleu)" font-family="Arial">12</text>`)},
  F41:{nom:"Distance jusqu'à la prochaine sortie", svg:carreIndication(`<text x="50" y="60" text-anchor="middle" font-size="26" font-weight="800" fill="#fff" font-family="Arial">2km</text>`)},
  F43:{nom:"Poste d'appel d'urgence", svg:carreIndication(`<circle cx="50" cy="55" r="18" fill="#fff"/><path d="M42,48 Q50,60 58,48" stroke="var(--bleu)" stroke-width="4" fill="none"/>`)},
  F45:{nom:"Voie sans issue", svg:svgWrap(`<rect x="6" y="6" width="88" height="88" rx="10" fill="#fff" stroke="var(--encre)" stroke-width="4"/><line x1="30" y1="70" x2="70" y2="70" stroke="var(--encre)" stroke-width="5"/><line x1="50" y1="70" x2="50" y2="30" stroke="var(--encre)" stroke-width="5"/><line x1="38" y1="30" x2="62" y2="30" stroke="var(--encre)" stroke-width="5"/>`)},
  F45b:{nom:"Voie sans issue sauf piétons/cyclistes", svg:svgWrap(`<rect x="6" y="6" width="88" height="88" rx="10" fill="#fff" stroke="var(--encre)" stroke-width="4"/><line x1="30" y1="75" x2="70" y2="75" stroke="var(--encre)" stroke-width="4"/><line x1="50" y1="75" x2="50" y2="45" stroke="var(--encre)" stroke-width="4"/>${pVelo(50,32,0.35)}`)},
  F47:{nom:"Direction d'un parking", svg:carreIndication(`${pFleche(20,55,50,55,"#fff")}<text x="70" y="60" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" font-family="Arial">P</text>`)},
  F49:{nom:"Direction d'un service", svg:carreIndication(pFleche(25,55,75,55,"#fff"))},
  F50:{nom:"Hôpital", svg:carreIndication(`<rect x="42" y="35" width="16" height="40" fill="#fff"/><rect x="30" y="47" width="40" height="16" fill="#fff"/>`)},
  F50bis:{nom:"Hôpital (variante directionnelle)", svg:carreIndication(`<rect x="42" y="35" width="16" height="40" fill="#fff"/><rect x="30" y="47" width="40" height="16" fill="#fff"/>${pFleche(50,80,50,90,"#fff")}`)},
  F51:{nom:"Poste de secours", svg:carreIndication(`<rect x="42" y="35" width="16" height="30" fill="#fff"/><rect x="34" y="43" width="32" height="14" fill="#fff"/>`)},
  F52:{nom:"Station-service", svg:carreIndication(`<rect x="35" y="45" width="24" height="30" rx="2" fill="#fff"/><path d="M59,50 L68,55 L68,72 Q68,76 64,76 L64,58 Z" fill="#fff"/>`)},
  F52bis:{nom:"Station-service (variante)", svg:carreIndication(`<rect x="35" y="45" width="24" height="30" rx="2" fill="#fff"/><path d="M59,50 L68,55 L68,72 Q68,76 64,76 L64,58 Z" fill="#fff"/>${pFleche(50,80,50,90,"#fff")}`)},
  F53:{nom:"Atelier de réparation", svg:carreIndication(`<circle cx="42" cy="60" r="7" fill="none" stroke="#fff" stroke-width="4"/><rect x="52" y="42" width="8" height="24" rx="2" fill="#fff" transform="rotate(45 56 54)"/>`)},
  F55:{nom:"Restaurant", svg:carreIndication(`<rect x="30" y="35" width="4" height="34" fill="#fff"/><rect x="38" y="35" width="4" height="18" fill="#fff"/><rect x="46" y="35" width="4" height="18" fill="#fff"/><path d="M60,35 L60,69 M60,35 Q70,35 70,48 Q70,55 60,55" stroke="#fff" stroke-width="4" fill="none"/>`)},
  F56:{nom:"Café/bar", svg:carreIndication(`<path d="M35,45 L35,65 Q35,72 45,72 Q55,72 55,65 L55,45 Z" fill="none" stroke="#fff" stroke-width="4"/><path d="M55,50 Q68,50 68,58 Q68,66 55,64" fill="none" stroke="#fff" stroke-width="3"/>`)},
  F57:{nom:"Hôtel/motel", svg:carreIndication(`<rect x="28" y="50" width="44" height="24" fill="#fff"/><polygon points="28,50 50,32 72,50" fill="#fff"/><text x="50" y="68" text-anchor="middle" font-size="16" font-weight="800" fill="var(--bleu)" font-family="Arial">H</text>`)},
  F59:{nom:"Terrain de camping", svg:carreIndication(`<polygon points="30,72 50,38 70,72" fill="#fff"/><rect x="45" y="60" width="10" height="12" fill="var(--bleu)"/>`)},
  F60:{nom:"Auberge de jeunesse", svg:carreIndication(`<rect x="30" y="50" width="40" height="22" fill="#fff"/><polygon points="30,50 50,34 70,50" fill="#fff"/><circle cx="50" cy="61" r="4" fill="var(--bleu)"/>`)},
  F61:{nom:"Terrain de caravaning", svg:carreIndication(`<rect x="30" y="55" width="34" height="16" rx="4" fill="#fff"/><circle cx="38" cy="73" r="4" fill="#fff"/><circle cx="58" cy="73" r="4" fill="#fff"/>`)},
  F62:{nom:"Aire de pique-nique", svg:carreIndication(`<rect x="34" y="55" width="32" height="4" fill="#fff"/><line x1="34" y1="59" x2="30" y2="70" stroke="#fff" stroke-width="3"/><line x1="66" y1="59" x2="70" y2="70" stroke="#fff" stroke-width="3"/><line x1="42" y1="59" x2="38" y2="70" stroke="#fff" stroke-width="3"/><line x1="58" y1="59" x2="62" y2="70" stroke="#fff" stroke-width="3"/>`)},
  F63:{nom:"Point de vue / panorama", svg:carreIndication(`<circle cx="50" cy="52" r="16" fill="none" stroke="#fff" stroke-width="4"/><circle cx="50" cy="52" r="6" fill="#fff"/>`)},
  F65:{nom:"Téléphone", svg:carreIndication(`<path d="M38,42 Q35,55 42,62 Q50,70 62,66 L66,58 L58,54 L54,60 Q47,56 44,49 L50,45 L46,37 Z" fill="#fff"/>`)},
  F67:{nom:"Bureau d'information touristique", svg:carreIndication(`<circle cx="50" cy="50" r="20" fill="none" stroke="#fff" stroke-width="4"/><text x="50" y="60" text-anchor="middle" font-size="26" font-weight="800" fill="#fff" font-family="Arial">i</text>`)},
  F69:{nom:"Aire de repos", svg:carreIndication(`<rect x="30" y="60" width="40" height="6" fill="#fff"/><line x1="35" y1="66" x2="35" y2="76" stroke="#fff" stroke-width="4"/><line x1="65" y1="66" x2="65" y2="76" stroke="#fff" stroke-width="4"/><line x1="30" y1="60" x2="40" y2="45" stroke="#fff" stroke-width="3"/><line x1="70" y1="60" x2="60" y2="45" stroke="#fff" stroke-width="3"/>`)},
  F71:{nom:"Zone verte / espace naturel", svg:carreIndication(`<circle cx="42" cy="55" r="14" fill="#fff"/><circle cx="58" cy="50" r="10" fill="#fff"/>`)},
  F73:{nom:"Monument / curiosité touristique", svg:carreIndication(`<polygon points="50,32 62,72 38,72" fill="#fff"/>`)},
  F75:{nom:"Église / édifice religieux", svg:carreIndication(`<rect x="42" y="50" width="16" height="24" fill="#fff"/><polygon points="42,50 50,35 58,50" fill="#fff"/><rect x="48" y="28" width="4" height="10" fill="#fff"/>`)},
  F77:{nom:"Aéroport", svg:carreIndication(`<path d="M30,58 L50,50 L70,58 L58,60 L50,72 L42,60 Z" fill="#fff"/>`)},
  F79:{nom:"Port / zone portuaire", svg:carreIndication(`<path d="M30,60 Q50,72 70,60" fill="none" stroke="#fff" stroke-width="4"/><line x1="50" y1="32" x2="50" y2="58" stroke="#fff" stroke-width="3"/><path d="M50,36 L64,44 L50,50 Z" fill="#fff"/>`)},
  F81:{nom:"Gare ferroviaire", svg:carreIndication(pTrain(50,55,0.6,"#fff"))},
  F83:{nom:"Arrêt d'autobus", svg:carreIndication(`<rect x="30" y="45" width="40" height="20" rx="3" fill="#fff"/><circle cx="38" cy="68" r="5" fill="#fff"/><circle cx="62" cy="68" r="5" fill="#fff"/>`)},
  F85:{nom:"Station de tram", svg:carreIndication(`<rect x="30" y="45" width="40" height="18" rx="3" fill="#fff"/><line x1="30" y1="70" x2="70" y2="70" stroke="#fff" stroke-width="4"/>`)},
  F87:{nom:"Dispositif surélevé (ralentisseur)", svg:PANNEAUX.F87},
  F89:{nom:"Borne kilométrique", svg:carreIndication(`<circle cx="50" cy="50" r="20" fill="#fff"/><text x="50" y="58" text-anchor="middle" font-size="18" font-weight="800" fill="var(--bleu)" font-family="Arial">42</text>`)},
  F91:{nom:"Radar de vitesse (information)", svg:carreIndication(`<rect x="38" y="35" width="24" height="30" rx="3" fill="#fff"/><circle cx="50" cy="46" r="6" fill="var(--bleu)"/>`)},
  F93:{nom:"Zone de contrôle de vitesse moyenne", svg:carreIndication(`<text x="50" y="60" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" font-family="Arial">↔km</text>`)},
  F95:{nom:"Caméra de surveillance du trafic", svg:carreIndication(`<rect x="35" y="45" width="26" height="18" rx="3" fill="#fff"/><circle cx="65" cy="54" r="6" fill="#fff"/>`)},
  F97:{nom:"Signalisation d'un pont", svg:carreIndication(`<line x1="25" y1="65" x2="75" y2="65" stroke="#fff" stroke-width="4"/><line x1="32" y1="65" x2="32" y2="50" stroke="#fff" stroke-width="3"/><line x1="68" y1="65" x2="68" y2="50" stroke="#fff" stroke-width="3"/>`)},
  F98:{nom:"Signalisation d'un tunnel", svg:carreIndication(`<path d="M28,70 L28,50 Q50,32 72,50 L72,70" fill="none" stroke="#fff" stroke-width="4"/>`)},
  F99a:{nom:"Direction d'une piste cyclable", svg:carreIndication(pVelo(45,58,0.7,"#fff")+pFleche(65,55,85,55,"#fff"))},
  F99b:{nom:"Direction d'une piste cyclable (variante)", svg:carreIndication(pVelo(50,45,0.6,"#fff")+pFleche(50,65,50,85,"#fff"))},
  F99c:{nom:"Direction d'une piste cyclable (variante 2)", svg:carreIndication(pVelo(55,58,0.7,"#fff")+pFleche(35,55,15,55,"#fff"))},
  F101a:{nom:"Jalonnement cyclable — localité", svg:carreIndication(`${pVelo(35,55,0.5,"#fff")}<text x="65" y="60" text-anchor="middle" font-size="12" font-weight="800" fill="#fff" font-family="Arial">Ville</text>`)},
  F101b:{nom:"Jalonnement cyclable — numéro de réseau", svg:carreIndication(`<circle cx="50" cy="50" r="18" fill="#fff"/><text x="50" y="58" text-anchor="middle" font-size="18" font-weight="800" fill="var(--bleu)" font-family="Arial">7</text>`)},
  F101c:{nom:"Jalonnement cyclable — combiné", svg:carreIndication(`${pVelo(50,50,0.6,"#fff")}${pFleche(50,72,75,72,"#fff")}`)},
  F103:{nom:"Point-nœud cyclable", svg:carreIndication(`<circle cx="50" cy="50" r="20" fill="#fff"/><text x="50" y="58" text-anchor="middle" font-size="20" font-weight="800" fill="var(--bleu)" font-family="Arial">34</text>`)},
  F105:{nom:"Réseau cyclable régional", svg:carreIndication(pVelo(50,55,0.85,"#fff"))},
  F111:{nom:"Rue cyclable", svg:PANNEAUX.F111},
  F113:{nom:"Fin de rue cyclable", svg:carreIndication(`<circle cx="34" cy="62" r="10" fill="none" stroke="#fff" stroke-width="5" opacity="0.6"/><circle cx="66" cy="62" r="10" fill="none" stroke="#fff" stroke-width="5" opacity="0.6"/><line x1="34" y1="62" x2="50" y2="40" stroke="#fff" stroke-width="5" opacity="0.6"/><line x1="50" y1="40" x2="66" y2="62" stroke="#fff" stroke-width="5" opacity="0.6"/><line x1="50" y1="40" x2="42" y2="62" stroke="#fff" stroke-width="5" opacity="0.6"/><line x1="18" y1="82" x2="82" y2="18" stroke="#fff" stroke-width="6"/>`)},
  F117:{nom:"Zone de rencontre pour cyclistes", svg:carreIndication(pVelo(50,55,0.85,"#fff"))},
  F118:{nom:"Piste cyclable bidirectionnelle", svg:carreIndication(`${pVelo(50,45,0.5,"#fff")}${pFleche(35,72,35,60,"#fff")}${pFleche(65,60,65,72,"#fff")}`)},
  F119:{nom:"Fin de piste cyclable bidirectionnelle", svg:carreIndication(`${pVelo(50,45,0.5,"#fff")}<line x1="20" y1="80" x2="80" y2="20" stroke="#fff" stroke-width="5"/>`)},
  F120:{nom:"Voie verte", svg:carreIndication(`${pVelo(38,58,0.55,"#fff")}${pPieton(62,55,0.4,"#fff")}`)},
  "F Type I":{nom:"Borne de délimitation — Type I", svg:carreIndication(`<text x="50" y="60" text-anchor="middle" font-size="24" font-weight="800" fill="#fff" font-family="Arial">I</text>`)},
  "F Type II":{nom:"Borne de délimitation — Type II", svg:carreIndication(`<text x="50" y="60" text-anchor="middle" font-size="24" font-weight="800" fill="#fff" font-family="Arial">II</text>`)},
  "F Type III":{nom:"Borne de délimitation — Type III", svg:carreIndication(`<text x="50" y="60" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" font-family="Arial">III</text>`)},
  "F Type V":{nom:"Borne de délimitation — Type V", svg:carreIndication(`<text x="50" y="60" text-anchor="middle" font-size="24" font-weight="800" fill="#fff" font-family="Arial">V</text>`)},
  "F X1":{nom:"Panneau de jalonnement X1", svg:carreIndication(pFleche(25,55,75,55,"#fff"))},
  "F X2":{nom:"Panneau de jalonnement X2", svg:carreIndication(pFleche(50,75,50,25,"#fff"))},
  "F X3":{nom:"Panneau de jalonnement X3", svg:carreIndication(pFleche(25,75,75,25,"#fff"))},
};

// --- Famille G : panneaux additionnels (rectangle blanc/noir, complètent un signal principal) ---
function panneauAdditionnel(texte){
  return svgWrap(`<rect x="4" y="20" width="92" height="60" fill="#fff" stroke="var(--encre)" stroke-width="4"/><text x="50" y="58" text-anchor="middle" font-size="22" font-weight="800" fill="var(--encre)" font-family="Arial">${texte}</text>`, "0 0 100 100");
}
const CATALOGUE_G = {
  "G additionnel Type XI":{nom:"Panneau additionnel Type XI", svg:panneauAdditionnel("XI")},
};

// --- Famille M : marquages au sol (vue de dessus d'une chaussée) ---
function marquage(inner){
  return svgWrap(`<rect width="100" height="100" fill="#8A8F98"/><rect x="46" y="0" width="8" height="100" fill="#6E7278"/>${inner}`, "0 0 100 100");
}
const CATALOGUE_M = {
  M:{nom:"Marquage routier (générique)", svg:marquage(`<rect x="46" y="10" width="8" height="18" fill="#fff"/><rect x="46" y="40" width="8" height="18" fill="#fff"/><rect x="46" y="70" width="8" height="18" fill="#fff"/>`)},
  M1:{nom:"Ligne continue", svg:marquage(`<rect x="46" y="0" width="8" height="100" fill="#fff"/>`)},
  M2:{nom:"Ligne discontinue", svg:marquage(`<rect x="46" y="6" width="8" height="16" fill="#fff"/><rect x="46" y="34" width="8" height="16" fill="#fff"/><rect x="46" y="62" width="8" height="16" fill="#fff"/><rect x="46" y="90" width="8" height="10" fill="#fff"/>`)},
  M3:{nom:"Ligne mixte (continue + discontinue)", svg:marquage(`<rect x="36" y="0" width="6" height="100" fill="#fff"/><rect x="58" y="6" width="6" height="16" fill="#fff"/><rect x="58" y="34" width="6" height="16" fill="#fff"/><rect x="58" y="62" width="6" height="16" fill="#fff"/>`)},
  M4:{nom:"Ligne d'arrêt", svg:marquage(`<rect x="10" y="45" width="80" height="10" fill="#fff"/>`)},
  M5:{nom:"Passage pour piétons", svg:marquage(`<rect x="15" y="10" width="10" height="80" fill="#fff"/><rect x="33" y="10" width="10" height="80" fill="#fff"/><rect x="51" y="10" width="10" height="80" fill="#fff"/><rect x="69" y="10" width="10" height="80" fill="#fff"/>`)},
  M6:{nom:"Flèche de direction (tout droit)", svg:marquage(pFleche(50,85,50,20,"#fff"))},
  M7:{nom:"Flèche de rabattement", svg:marquage(pFleche(30,85,60,20,"#fff"))},
  M8:{nom:"Marquage de mise en garde (chevrons)", svg:marquage(`<polygon points="50,20 65,45 50,40 35,45" fill="#fff"/><polygon points="50,55 65,80 50,75 35,80" fill="#fff"/>`)},
  M9:{nom:"Zone d'évitement (hachures)", svg:marquage(`<line x1="20" y1="20" x2="40" y2="10" stroke="#fff" stroke-width="4"/><line x1="20" y1="40" x2="50" y2="10" stroke="#fff" stroke-width="4"/><line x1="20" y1="60" x2="60" y2="10" stroke="#fff" stroke-width="4"/><line x1="20" y1="80" x2="70" y2="10" stroke="#fff" stroke-width="4"/><line x1="30" y1="90" x2="80" y2="20" stroke="#fff" stroke-width="4"/>`)},
  M10:{nom:"Site franchissable bus/tram (damier)", svg:svgWrap(`<rect width="100" height="100" fill="#8A8F98"/>${[0,1,2,3,4].map(r=>[0,1,2,3,4].map(c=>(r+c)%2===0?`<rect x="${c*20}" y="${r*20}" width="20" height="20" fill="#fff"/>`:'').join('')).join('')}`)},
};

// --- Famille S : panneaux touristiques et de services ---
const CATALOGUE_S = {
  S1:{nom:"Aéroport", svg:CATALOGUE_F.F77.svg},
  S2:{nom:"Hall de foire ou d'exposition", svg:carreIndication(`<rect x="26" y="45" width="48" height="28" fill="#fff"/><polygon points="26,45 50,30 74,45" fill="#fff"/>`)},
  S3:{nom:"Port", svg:CATALOGUE_F.F79.svg},
  S4:{nom:"Car-ferry", svg:carreIndication(`<path d="M22,65 Q50,78 78,65 L72,50 L28,50 Z" fill="#fff"/><rect x="45" y="32" width="10" height="18" fill="#fff"/>`)},
  S5:{nom:"Parcs 4.0", svg:carreIndication(`<circle cx="42" cy="55" r="13" fill="#fff"/><circle cx="60" cy="50" r="9" fill="#fff"/>`)},
  S10:{nom:"Services de police", svg:carreIndication(`<polygon points="50,30 66,38 66,55 50,72 34,55 34,38" fill="#fff"/>`)},
  S11:{nom:"Pompiers", svg:carreIndication(pEclair(52,55,1,"#fff"))},
  S12:{nom:"Protection civile", svg:carreIndication(`<polygon points="50,30 68,40 68,58 50,74 32,58 32,40" fill="none" stroke="#fff" stroke-width="4"/>`)},
  S13:{nom:"Cimetière", svg:carreIndication(`<rect x="46" y="40" width="8" height="30" fill="#fff"/><rect x="35" y="48" width="30" height="8" fill="#fff"/>`)},
  S14:{nom:"Gare de bus", svg:CATALOGUE_F.F83.svg},
  S15:{nom:"Gare de chemin de fer", svg:CATALOGUE_F.F81.svg},
  S16:{nom:"Gare routière", svg:carreIndication(`<rect x="28" y="45" width="44" height="20" rx="3" fill="#fff"/><circle cx="38" cy="68" r="5" fill="#fff"/><circle cx="62" cy="68" r="5" fill="#fff"/>`)},
  S17:{nom:"Hôtel de ville ou maison communale", svg:carreIndication(`<rect x="30" y="48" width="40" height="26" fill="#fff"/><polygon points="30,48 50,32 70,48" fill="#fff"/><rect x="45" y="58" width="10" height="16" fill="var(--bleu)"/>`)},
  S18:{nom:"Lieu du culte", svg:CATALOGUE_F.F75.svg},
  S19:{nom:"Palais de justice", svg:carreIndication(`<rect x="28" y="60" width="44" height="6" fill="#fff"/><line x1="34" y1="60" x2="34" y2="40" stroke="#fff" stroke-width="4"/><line x1="50" y1="60" x2="50" y2="40" stroke="#fff" stroke-width="4"/><line x1="66" y1="60" x2="66" y2="40" stroke="#fff" stroke-width="4"/><polygon points="28,40 50,28 72,40" fill="none" stroke="#fff" stroke-width="3"/>`)},
  S20:{nom:"Train auto-couchettes", svg:carreIndication(`${pTrain(42,50,0.5,"#fff")}${pVoiture(66,62,0.35,"#fff")}`)},
  S21:{nom:"Bureau de poste", svg:carreIndication(`<rect x="28" y="42" width="44" height="30" rx="2" fill="#fff"/><path d="M28,42 L50,58 L72,42" fill="none" stroke="var(--bleu)" stroke-width="3"/>`)},
  S30:{nom:"Centre sportif, stade, hall omnisports", svg:carreIndication(`<circle cx="50" cy="52" r="18" fill="none" stroke="#fff" stroke-width="4"/><path d="M32,52 L68,52 M50,34 L50,70" stroke="#fff" stroke-width="2"/>`)},
  S31:{nom:"Château", svg:carreIndication(`<rect x="28" y="52" width="44" height="22" fill="#fff"/><rect x="28" y="40" width="8" height="12" fill="#fff"/><rect x="46" y="40" width="8" height="12" fill="#fff"/><rect x="64" y="40" width="8" height="12" fill="#fff"/>`)},
  S32:{nom:"Ruines", svg:carreIndication(`<polygon points="30,74 30,50 40,50 40,60 50,45 60,60 60,50 70,50 70,74" fill="#fff" opacity="0.85"/>`)},
  S33:{nom:"Monastère, abbaye", svg:carreIndication(`<rect x="34" y="50" width="32" height="24" fill="#fff"/><polygon points="34,50 50,36 66,50" fill="#fff"/><rect x="47" y="30" width="6" height="10" fill="#fff"/>`)},
  S34:{nom:"Parc culturel, de loisir ou d'attractions", svg:carreIndication(`<circle cx="50" cy="50" r="18" fill="none" stroke="#fff" stroke-width="4"/><polygon points="50,38 54,48 64,48 56,54 59,64 50,58 41,64 44,54 36,48 46,48" fill="#fff"/>`)},
  S35:{nom:"Site ou curiosité touristique", svg:carreIndication(`<circle cx="50" cy="52" r="16" fill="none" stroke="#fff" stroke-width="4"/><circle cx="50" cy="52" r="5" fill="#fff"/>`)},
  S36:{nom:"Parc naturel", svg:carreIndication(`<circle cx="40" cy="55" r="13" fill="#fff"/><circle cx="60" cy="48" r="10" fill="#fff"/><circle cx="52" cy="62" r="8" fill="#fff"/>`)},
};

// --- Agrégation finale : toutes les familles, pour la page Catalogue ---
const CATALOGUE_FAMILLES = [
  {id:"A", nom:"A — Signaux de danger",      forme:"triangle", data:CATALOGUE_A},
  {id:"B", nom:"B — Signaux de priorité",     forme:"losange",   data:CATALOGUE_B},
  {id:"C", nom:"C — Signaux d'interdiction",  forme:"rond",      data:CATALOGUE_C},
  {id:"D", nom:"D — Signaux d'obligation",    forme:"rond",      data:CATALOGUE_D},
  {id:"E", nom:"E — Arrêt et stationnement",  forme:"carre",     data:CATALOGUE_E},
  {id:"F", nom:"F — Signaux d'indication",    forme:"carre",     data:CATALOGUE_F},
  {id:"G", nom:"G — Panneaux additionnels",   forme:"carre",     data:CATALOGUE_G},
  {id:"M", nom:"M — Marquages au sol",        forme:"carre",     data:CATALOGUE_M},
  {id:"S", nom:"S — Signaux touristiques",    forme:"carre",     data:CATALOGUE_S},
];





