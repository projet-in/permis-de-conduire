// ===== Intégration des vraies images de panneaux (Wikimedia Commons, domaine public PD-B-road-sign) =====
// Remplace automatiquement, partout où une correspondance existe, les icônes SVG dessinées à la main
// par les vraies images officielles fournies par l'utilisateur (téléchargées depuis Wikimedia Commons).

const CODES_AVEC_VRAIE_IMAGE = new Set([
"A11","A13","A14","A15","A15a","A17","A19","A1a","A1b","A1c","A1d","A21","A23","A25","A27","A29","A3","A31","A33","A35","A37","A49","A5","A51","A7a","A7b","A7c","A9",
"B1","B11","B13","B15","B17","B19","B21","B3","B5","B7","B9",
"C1","C11","C13","C15","C17","C19","C21","C22","C23","C24a","C24b","C24c","C25","C27","C29","C3","C31d","C31g","C33","C35","C37","C39","C41","C43","C45","C46","C47","C48","C49","C5","C7","C9",
"D01a","D01b","D01c","D03","D05","D07","D09","D10","D11","D13",
"E0a","E0b","E0c","E0d","E1","E11","E3","E5","E7","E9","E9b","E9c","E9d","E9e","E9f","E9g","E9h","E9i",
"F1","F101a","F101b","F101c","F103","F105","F11","F12a","F12b","F13","F14","F15","F17","F18","F19","F1bh","F1bv","F21","F23a","F23b","F23c","F23d","F25","F27","F29","F3","F31","F33a","F33b","F33c","F34a","F34b1","F34b2","F34c1","F34c2","F35","F37","F39","F3bh","F3bv","F41","F43","F45","F47","F49","F4a","F4b","F5","F50","F50bis","F51","F53","F55","F57","F59","F60","F61","F63","F65","F67","F69","F7","F71","F73","F75","F77","F79","F81","F83","F85","F87","F89","F9","F91","F93","F95","F97","F99a","F99b","F99c",
"GXI",
"M1","M10","M2","M3","M4","M5","M6","M7","M8","M9",
"S1","S10","S11","S12","S13","S14","S15","S16","S17","S18","S19","S2","S20","S21","S3","S30","S31","S32","S33","S34","S35","S36","S4","S5",
"X2"
]);

// Correspondances spéciales : mon code interne → code du fichier réel (numérotation/écriture différente)
const RESOLUTION_CODE_IMAGE = {
  A7: "A7a",
  D1: "D01a", D3: "D03", D5: "D05", D7: "D07", D9: "D09",
  E9a: "E9",
};

function imgPanneauReel(codeFichier, libelle){
  return `<img src="img/panneaux/${codeFichier}.webp" alt="${libelle || ('Panneau '+codeFichier)}" style="width:100%;height:100%;object-fit:contain;display:block" loading="lazy">`;
}

// Remplace chaque entrée de PANNEAUX (utilisé dans cours/examen/flashcards) par la vraie image si disponible.
// Les codes sans correspondance réelle (concepts génériques : feux, casque, marquages...) gardent le SVG dessiné à la main.
function remplacerParVraiesImages(dictionnaire){
  for(const code in dictionnaire){
    const codeFichier = RESOLUTION_CODE_IMAGE[code] || code;
    if(CODES_AVEC_VRAIE_IMAGE.has(codeFichier)){
      dictionnaire[code] = imgPanneauReel(codeFichier, "Panneau "+code);
    }
  }
}
remplacerParVraiesImages(PANNEAUX);

// Idem pour le catalogue complet (291 panneaux) : chaque famille a une structure {code:{nom, svg}}
if(typeof CATALOGUE_FAMILLES !== "undefined"){
  CATALOGUE_FAMILLES.forEach(famille=>{
    for(const code in famille.data){
      const codeFichier = RESOLUTION_CODE_IMAGE[code] || code;
      if(CODES_AVEC_VRAIE_IMAGE.has(codeFichier)){
        famille.data[code].svg = imgPanneauReel(codeFichier, famille.data[code].nom);
      }
    }
  });
}
