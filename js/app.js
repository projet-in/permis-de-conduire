// ===== App SPA — Permis B Théorique Belgique =====

// --- Assemblage de la banque ---
const THEMES = [
  {id:"signalisation", nom:"Signalisation", data:DATA_SIGNALISATION, forme:"triangle"},
  {id:"priorites",      nom:"Priorités",     data:DATA_PRIORITES,     forme:"losange"},
  {id:"vitesses",       nom:"Vitesses",      data:DATA_VITESSES,      forme:"rond"},
  {id:"alcool",         nom:"Alcool & sanctions", data:DATA_ALCOOL,   forme:"rond"},
  {id:"stationnement",  nom:"Stationnement", data:DATA_STATIONNEMENT, forme:"carre"},
  {id:"depassement",    nom:"Dépassement",   data:DATA_DEPASSEMENT,   forme:"rond"},
  {id:"secourisme",     nom:"Secourisme",    data:DATA_SECOURISME,    forme:"rond"},
  {id:"ecoconduite",    nom:"Écoconduite & chargement", data:DATA_ECOCONDUITE, forme:"carre"},
  {id:"usagers-vulnerables", nom:"Usagers vulnérables", data:DATA_USAGERS_VULNERABLES, forme:"losange"},
  {id:"autoroutes", nom:"Autoroutes", data:DATA_AUTOROUTES, forme:"rond"},
];
const ALL = THEMES.flatMap(t => t.data.map(q => ({...q, theme:t.id, themeNom:t.nom})));

// --- Navigation ---
const vues = ["accueil","cours","examen","flash"];
function allerA(vue){
  vues.forEach(v=>{
    document.getElementById("vue-"+v).classList.toggle("active", v===vue);
  });
  document.querySelectorAll("nav button[data-vue]").forEach(b=>{
    b.classList.toggle("actif", b.dataset.vue===vue);
  });
  window.scrollTo({top:0,behavior:"smooth"});
  if(vue==="cours") renderListeChapitres();
  if(vue==="examen" && !examEnCours) renderConfigExam();
  if(vue==="flash" && !flashEnCours) renderChoixThemes();
  if(vue==="accueil") renderPointsFaibles();
}
document.querySelectorAll("nav button[data-vue]").forEach(b=>{
  b.addEventListener("click", ()=>allerA(b.dataset.vue));
});
document.querySelectorAll("[data-goto]").forEach(b=>{
  b.addEventListener("click", ()=>allerA(b.dataset.goto));
});

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// ========================================================
// MODE COURS
// ========================================================
function renderListeChapitres(){
  const el = document.getElementById("vue-cours");
  el.innerHTML = `
    <h2 class="titre-vue">Cours théoriques</h2>
    <p class="sous-titre">${COURS.length} chapitres, avec exemples concrets, pour comprendre avant de s'entraîner.</p>
    <input type="search" class="recherche-cours" id="recherche-cours" placeholder="🔎 Rechercher un mot-clé (ex. STOP, alcool, rond-point...)">
    <button class="btn discret btn-lexique" id="btn-lexique">📖 Lexique des sigles et termes</button>
    <div class="liste-chapitres" id="liste-chapitres">
      ${COURS.map((c,i)=>`
        <button class="chapitre-item" data-chap="${i}">
          <span class="panneau p-${c.forme}" aria-hidden="true">${c.forme==='carre'?'B':''}</span>
          <span class="txt">
            <h3>${c.titre}</h3>
            <p>${c.resume}</p>
          </span>
          <span class="badge-n">${chapitreEstLu(c.id) ? '✓ lu' : (i+1)+'/'+COURS.length}</span>
        </button>
      `).join("")}
    </div>
    <p class="aucun-resultat" id="aucun-resultat" style="display:none">Aucun chapitre ne correspond à cette recherche.</p>
  `;
  el.querySelectorAll("[data-chap]").forEach(b=>{
    b.addEventListener("click", ()=>renderChapitre(parseInt(b.dataset.chap)));
  });
  document.getElementById("recherche-cours").addEventListener("input", (e)=>{
    const q = e.target.value.trim().toLowerCase();
    let visibles = 0;
    document.querySelectorAll("#liste-chapitres [data-chap]").forEach(b=>{
      const c = COURS[parseInt(b.dataset.chap)];
      const texte = (c.titre+" "+c.resume+" "+c.html).toLowerCase();
      const match = q==="" || texte.includes(q);
      b.style.display = match ? "" : "none";
      if(match) visibles++;
    });
    document.getElementById("aucun-resultat").style.display = visibles===0 ? "block" : "none";
  });
  document.getElementById("btn-lexique").addEventListener("click", renderLexique);
}

function renderLexique(){
  const el = document.getElementById("vue-cours");
  el.innerHTML = `
    <button class="btn discret" data-back>← Tous les chapitres</button>
    <h2 class="titre-vue" style="margin-top:.8rem">Lexique des sigles et termes</h2>
    <p class="sous-titre">Les abréviations et termes techniques rencontrés dans les cours, expliqués simplement.</p>
    <div class="liste-lexique">
      ${LEXIQUE.map(l=>`
        <div class="entree-lexique">
          <strong>${l.terme}</strong>
          <p>${l.def}</p>
        </div>
      `).join("")}
    </div>
  `;
  el.querySelector("[data-back]").addEventListener("click", renderListeChapitres);
  el.scrollIntoView({behavior:"smooth"});
}

function genererTOC(container){
  const contenu = container.querySelector(".contenu-cours");
  const titres = contenu.querySelectorAll("h3");
  if(titres.length < 2) return;
  let items = "";
  titres.forEach((h,i)=>{
    h.id = "sec-"+i;
    items += `<li><a href="#sec-${i}">${h.textContent.trim()}</a></li>`;
  });
  const toc = document.createElement("div");
  toc.className = "toc-chapitre";
  toc.innerHTML = `<strong>Dans ce chapitre</strong><ul>${items}</ul>`;
  contenu.before(toc);
}

// --- Suivi de lecture des chapitres (localStorage) ---
function marquerChapitreLu(id){
  try{
    const brut = localStorage.getItem("permisb-chapitres-lus");
    const lus = brut ? JSON.parse(brut) : [];
    if(!lus.includes(id)){ lus.push(id); localStorage.setItem("permisb-chapitres-lus", JSON.stringify(lus)); }
  }catch(e){}
}
function chapitreEstLu(id){
  try{
    const brut = localStorage.getItem("permisb-chapitres-lus");
    return brut ? JSON.parse(brut).includes(id) : false;
  }catch(e){ return false; }
}

function renderChapitre(index){
  const c = COURS[index];
  const el = document.getElementById("vue-cours");
  el.innerHTML = `
    <button class="btn discret" data-back>← Tous les chapitres</button>
    <h2 class="titre-vue" style="margin-top:.8rem">${c.titre}</h2>
    <p class="sous-titre">Chapitre ${index+1} / ${COURS.length}</p>
    <div class="contenu-cours">${c.html}</div>
    <div class="quiz-chapitre-bloc">
      <h3>🧪 Quiz rapide sur ce chapitre</h3>
      <p class="sous-titre" style="margin-bottom:.8rem">5 questions tirées au hasard dans ce thème, pour vérifier ce que vous avez retenu.</p>
      <button class="btn jaune" id="btn-lancer-quiz">Lancer le quiz</button>
      <div id="zone-quiz-chapitre"></div>
    </div>
    <div class="nav-cours">
      <button class="btn secondaire" ${index===0?"disabled":""} data-prev>← Chapitre précédent</button>
      <button class="btn" ${index===COURS.length-1?"disabled":""} data-next>Chapitre suivant →</button>
    </div>
  `;
  genererTOC(el);
  el.querySelector("[data-back]").addEventListener("click", renderListeChapitres);
  if(index>0) el.querySelector("[data-prev]").addEventListener("click", ()=>renderChapitre(index-1));
  if(index<COURS.length-1) el.querySelector("[data-next]").addEventListener("click", ()=>renderChapitre(index+1));
  injecterVisuels(el);
  document.getElementById("btn-lancer-quiz").addEventListener("click", (e)=>{
    e.target.style.display = "none";
    demarrerQuizChapitre(c.id, index);
  });
  el.querySelectorAll("[data-goto-chapitre]").forEach(a=>{
    a.addEventListener("click", (e)=>{
      e.preventDefault();
      const idx = COURS.findIndex(ch=>ch.id===a.dataset.gotoChapitre);
      if(idx>=0) renderChapitre(idx);
    });
  });
  marquerChapitreLu(c.id);
  el.scrollIntoView({behavior:"smooth"});
}

// ========================================================
// QUIZ RAPIDE DE FIN DE CHAPITRE
// ========================================================
let quizChapQuestions = [], quizChapIndex = 0, quizChapScore = 0, quizChapId = null, quizChapRetourIndex = null;

function demarrerQuizChapitre(themeId, indexChapitre){
  const theme = THEMES.find(t=>t.id===themeId);
  if(!theme) return;
  quizChapId = themeId;
  quizChapRetourIndex = indexChapitre;
  quizChapQuestions = shuffle(theme.data.map(q=>({...q, theme:theme.id, themeNom:theme.nom}))).slice(0,5);
  quizChapIndex = 0;
  quizChapScore = 0;
  renderQuizChapitreQuestion();
}

function renderQuizChapitreQuestion(){
  const zone = document.getElementById("zone-quiz-chapitre");
  if(!zone) return;
  if(quizChapIndex >= quizChapQuestions.length){
    zone.innerHTML = `
      <div class="resultat-quiz-chapitre">
        <h4>Quiz terminé : ${quizChapScore} / ${quizChapQuestions.length}</h4>
        <button class="btn jaune" id="btn-requiz">Refaire 5 nouvelles questions</button>
      </div>
    `;
    document.getElementById("btn-requiz").addEventListener("click", ()=>demarrerQuizChapitre(quizChapId, quizChapRetourIndex));
    return;
  }
  const q = quizChapQuestions[quizChapIndex];
  const visuel = detecterVisuelQuestion(q.q);
  zone.innerHTML = `
    <div class="carte-question carte-quiz-chapitre">
      <span class="compteur-quiz">Question ${quizChapIndex+1} / ${quizChapQuestions.length}</span>
      <h3>${q.q}</h3>
      ${visuel ? `<div class="visuel-question visuel-question-${visuel.type}"><div data-${visuel.type==='scene'?'scene':'signe'}="${visuel.valeur}"></div></div>` : ""}
      <div class="reponses">
        ${q.opts.map((o,i)=>`<button data-i="${i}">${o}</button>`).join("")}
      </div>
      <div id="zone-explication-quiz"></div>
      <div class="pied-question">
        <button class="btn secondaire" id="btn-suivant-quiz" style="display:none">${quizChapIndex===quizChapQuestions.length-1?"Voir le score":"Question suivante →"}</button>
      </div>
    </div>
  `;
  if(visuel) injecterVisuels(zone);
  zone.querySelectorAll(".reponses button").forEach(b=>{
    b.addEventListener("click", ()=>repondreQuizChapitre(parseInt(b.dataset.i)));
  });
}

function repondreQuizChapitre(choix){
  const q = quizChapQuestions[quizChapIndex];
  const correct = choix === q.a;
  if(correct) quizChapScore++;
  const zone = document.getElementById("zone-quiz-chapitre");
  zone.querySelectorAll(".reponses button").forEach((b,i)=>{
    b.disabled = true;
    if(i===q.a) b.classList.add("bonne");
    else if(i===choix) b.classList.add("mauvaise");
  });
  document.getElementById("zone-explication-quiz").innerHTML = `
    <div class="explication ${correct?'ok':'ko'}">${correct ? "✅ Bonne réponse. " : "❌ Ce n'est pas la bonne réponse. "}${q.exp}</div>
  `;
  const btn = document.getElementById("btn-suivant-quiz");
  btn.style.display = "inline-block";
  btn.onclick = () => { quizChapIndex++; renderQuizChapitreQuestion(); };
}

// ========================================================
// MODE EXAMEN
// ========================================================
let examEnCours = false;
let examQuestions = [];
let examIndex = 0;
let examReponses = []; // {q, choisi, correct, grave}
let examChrono = null;
let examSecondes = 0;
let examAvecChrono = true;

function renderConfigExam(){
  const el = document.getElementById("vue-examen");
  el.innerHTML = `
    <h2 class="titre-vue">Examen blanc</h2>
    <p class="sous-titre">50 questions tirées au hasard dans toute la banque (${ALL.length} questions).</p>
    <div class="config-exam">
      <div class="regles">
        <div class="regle"><b>50</b>questions par session</div>
        <div class="regle"><b>41/50</b>seuil de réussite</div>
        <div class="regle"><b>−1</b>par erreur ordinaire</div>
        <div class="regle"><b>−5</b>par faute grave</div>
      </div>
      <p style="font-size:.88rem;color:var(--gris);line-height:1.5">
        Une <strong>faute grave</strong> concerne les infractions des 3<sup>e</sup>/4<sup>e</sup> degrés,
        les priorités, les feux, l'alcool et les vitesses. Le score ne descend jamais sous 0.
      </p>
      <label class="opt-chrono">
        <input type="checkbox" id="chk-chrono" checked>
        Activer le chronomètre (indicatif, non éliminatoire)
      </label>
      <button class="btn jaune" id="btn-start-exam">Démarrer l'examen</button>
    </div>
  `;
  document.getElementById("btn-start-exam").addEventListener("click", ()=>{
    examAvecChrono = document.getElementById("chk-chrono").checked;
    demarrerExamen();
  });
}

function demarrerExamen(){
  examEnCours = true;
  examQuestions = shuffle(ALL).slice(0,50);
  examIndex = 0;
  examReponses = [];
  examSecondes = 0;
  if(examChrono) clearInterval(examChrono);
  if(examAvecChrono){
    examChrono = setInterval(()=>{
      examSecondes++;
      const c = document.getElementById("chrono-affiche");
      if(c) c.textContent = formatChrono(examSecondes);
    },1000);
  }
  renderQuestionExam();
}

function formatChrono(s){
  const m = Math.floor(s/60), sec = s%60;
  return `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

function renderQuestionExam(){
  const q = examQuestions[examIndex];
  const el = document.getElementById("vue-examen");
  const visuel = detecterVisuelQuestion(q.q);
  el.innerHTML = `
    <div class="barre-exam">
      <span class="compteur">Question ${examIndex+1} / 50</span>
      <div class="progress"><div style="width:${(examIndex/50)*100}%"></div></div>
      ${examAvecChrono ? `<span class="chrono" id="chrono-affiche">${formatChrono(examSecondes)}</span>` : ""}
    </div>
    <div class="carte-question">
      <span class="etiquette-theme ${q.grave?'grave':''}">${q.themeNom}${q.grave?' · faute grave':''}</span>
      <h3>${q.q}</h3>
      ${visuel ? `<div class="visuel-question visuel-question-${visuel.type}"><div data-${visuel.type==='scene'?'scene':'signe'}="${visuel.valeur}"></div></div>` : ""}
      <div class="reponses">
        ${q.opts.map((o,i)=>`<button data-i="${i}">${o}</button>`).join("")}
      </div>
      <div id="zone-explication"></div>
      <div class="pied-question">
        <button class="btn secondaire" id="btn-suivant" style="display:none">
          ${examIndex===49 ? "Voir le résultat" : "Question suivante →"}
        </button>
      </div>
    </div>
  `;
  if(visuel) injecterVisuels(el);
  el.querySelectorAll(".reponses button").forEach(b=>{
    b.addEventListener("click", ()=>repondreExam(parseInt(b.dataset.i)));
  });
}

function repondreExam(choix){
  const q = examQuestions[examIndex];
  const correct = choix === q.a;
  examReponses.push({q, choisi:choix, correct, grave: !!q.grave});
  const el = document.getElementById("vue-examen");
  el.querySelectorAll(".reponses button").forEach((b,i)=>{
    b.disabled = true;
    if(i===q.a) b.classList.add("bonne");
    else if(i===choix) b.classList.add("mauvaise");
  });
  document.getElementById("zone-explication").innerHTML = `
    <div class="explication ${correct?'ok':'ko'}">
      ${correct ? "✅ Bonne réponse. " : "❌ Ce n'est pas la bonne réponse. "}${q.exp}
    </div>
  `;
  document.getElementById("btn-suivant").style.display = "inline-block";
  document.getElementById("btn-suivant").onclick = () => {
    examIndex++;
    if(examIndex < 50) renderQuestionExam();
    else finirExamen();
  };
}

function finirExamen(){
  examEnCours = false;
  if(examChrono){ clearInterval(examChrono); examChrono = null; }
  let score = 50;
  let erreursOrdinaires = 0, fautesGraves = 0;
  examReponses.forEach(r=>{
    if(!r.correct){
      if(r.grave){ score -= 5; fautesGraves++; }
      else { score -= 1; erreursOrdinaires++; }
    }
  });
  score = Math.max(0, score);
  const reussi = score >= 41;
  const erreurs = examReponses.filter(r=>!r.correct);

  // Détail par thème (cette session)
  const parTheme = {};
  examReponses.forEach(r=>{
    const t = r.q.theme;
    if(!parTheme[t]) parTheme[t] = {nom:r.q.themeNom, correct:0, total:0};
    parTheme[t].total++;
    if(r.correct) parTheme[t].correct++;
  });
  enregistrerStatsThemes(parTheme);

  const el = document.getElementById("vue-examen");
  el.innerHTML = `
    <div class="resultat">
      <div class="score-panneau ${reussi?'ok':''}">${score}/50</div>
      <h3>${reussi ? "Réussi 🎉" : "Échec — objectif 41/50"}</h3>
      <p>${examAvecChrono ? `Temps : ${formatChrono(examSecondes)} · ` : ""}${examReponses.length - erreurs.length} bonnes réponses sur 50</p>
      <div class="detail-fautes">
        <div>Erreurs ordinaires<br><b>${erreursOrdinaires}</b></div>
        <div class="g">Fautes graves<br><b>${fautesGraves}</b></div>
      </div>
      <div class="panneau-faibles">
        <h4>Détail par thème (cette session)</h4>
        <div class="progression-themes">
          ${Object.values(parTheme).map(t=>{
            const pct = Math.round((t.correct/t.total)*100);
            const couleur = pct>=80 ? "var(--vert)" : (pct>=60 ? "var(--jaune)" : "var(--rouge)");
            return `<div class="barre-theme">
              <span class="nom">${t.nom}</span>
              <span class="piste"><span class="remplissage" style="width:${pct}%;background:${couleur}"></span></span>
              <span class="pct">${t.correct}/${t.total}</span>
            </div>`;
          }).join("")}
        </div>
      </div>
      <div class="actions-resultat">
        <button class="btn jaune" id="btn-recommencer">Recommencer un examen</button>
        <button class="btn secondaire" data-goto="accueil">Retour à l'accueil</button>
      </div>
      ${erreurs.length ? `
        <h3 style="margin-top:1.6rem;text-align:left">Revue des erreurs (${erreurs.length})</h3>
        <div class="revue">
          ${erreurs.map(r=>{
            const v = detecterVisuelQuestion(r.q.q);
            return `
            <div class="carte-question">
              <span class="etiquette-theme ${r.grave?'grave':''}">${r.q.themeNom}${r.grave?' · faute grave':''}</span>
              <h3>${r.q.q}</h3>
              ${v ? `<div class="visuel-question visuel-question-${v.type}"><div data-${v.type==='scene'?'scene':'signe'}="${v.valeur}"></div></div>` : ""}
              <div class="reponses">
                ${r.q.opts.map((o,i)=>`
                  <button disabled class="${i===r.q.a?'bonne':(i===r.choisi?'mauvaise':'')}">${o}</button>
                `).join("")}
              </div>
              <div class="explication ${r.correct?'ok':'ko'}">${r.q.exp}</div>
            </div>
          `;}).join("")}
        </div>
      ` : ""}
    </div>
  `;
  el.querySelector("[data-goto]").addEventListener("click", ()=>allerA("accueil"));
  document.getElementById("btn-recommencer").addEventListener("click", renderConfigExam);
  injecterVisuels(el);

  // meilleur score en localStorage
  try{
    const best = parseInt(localStorage.getItem("permisb-meilleur-score")||"0");
    if(score > best) localStorage.setItem("permisb-meilleur-score", String(score));
  }catch(e){}
}

// --- Suivi de progression par thème (cumulé, localStorage) ---
function enregistrerStatsThemes(parTheme){
  try{
    const brut = localStorage.getItem("permisb-stats-themes");
    const cumul = brut ? JSON.parse(brut) : {};
    Object.keys(parTheme).forEach(t=>{
      if(!cumul[t]) cumul[t] = {nom:parTheme[t].nom, correct:0, total:0};
      cumul[t].correct += parTheme[t].correct;
      cumul[t].total += parTheme[t].total;
    });
    localStorage.setItem("permisb-stats-themes", JSON.stringify(cumul));
  }catch(e){}
}

function lirePointsFaibles(){
  try{
    const brut = localStorage.getItem("permisb-stats-themes");
    if(!brut) return [];
    const cumul = JSON.parse(brut);
    return Object.values(cumul)
      .filter(t=>t.total>=3)
      .map(t=>({...t, pct:Math.round((t.correct/t.total)*100)}))
      .sort((a,b)=>a.pct-b.pct);
  }catch(e){ return []; }
}

function renderPointsFaibles(){
  const zone = document.getElementById("zone-points-faibles");
  if(!zone) return;
  const stats = lirePointsFaibles();
  if(!stats.length){ zone.innerHTML = ""; return; }
  zone.innerHTML = `
    <div class="panneau-faibles">
      <h4>Votre progression cumulée par thème</h4>
      <div class="progression-themes">
        ${stats.map(t=>{
          const couleur = t.pct>=80 ? "var(--vert)" : (t.pct>=60 ? "var(--jaune)" : "var(--rouge)");
          return `<div class="barre-theme">
            <span class="nom">${t.nom}</span>
            <span class="piste"><span class="remplissage" style="width:${t.pct}%;background:${couleur}"></span></span>
            <span class="pct">${t.pct}%</span>
          </div>`;
        }).join("")}
      </div>
    </div>
  `;
}

// ========================================================
// MODE FLASHCARDS
// ========================================================
let flashEnCours = false;
let flashCartes = [];
let flashIndex = 0;
let flashRetourne = false;
let flashStreak = 0;
let flashSues = 0;
let flashARevoir = [];

function renderChoixThemes(){
  const el = document.getElementById("vue-flash");
  el.innerHTML = `
    <h2 class="titre-vue">Flashcards</h2>
    <p class="sous-titre">Choisis un thème, ou révise l'ensemble de la banque.</p>
    <div class="choix-themes">
      <button data-theme="tous">Toute la banque <small>${ALL.length} cartes</small></button>
      ${THEMES.map(t=>`<button data-theme="${t.id}">${t.nom} <small>${t.data.length} cartes</small></button>`).join("")}
    </div>
  `;
  el.querySelectorAll("[data-theme]").forEach(b=>{
    b.addEventListener("click", ()=>demarrerFlash(b.dataset.theme));
  });
}

function demarrerFlash(themeId){
  flashEnCours = true;
  const source = themeId==="tous" ? ALL : ALL.filter(q=>q.theme===themeId);
  flashCartes = shuffle(source);
  flashIndex = 0;
  flashRetourne = false;
  flashStreak = 0;
  flashSues = 0;
  flashARevoir = [];
  renderFlashcard();
}

function renderFlashcard(){
  if(flashIndex >= flashCartes.length){
    if(flashARevoir.length){
      flashCartes = shuffle(flashARevoir);
      flashARevoir = [];
      flashIndex = 0;
    } else {
      return finirFlash();
    }
  }
  const q = flashCartes[flashIndex];
  flashRetourne = false;
  const visuel = detecterVisuelQuestion(q.q);
  const el = document.getElementById("vue-flash");
  el.innerHTML = `
    <div class="zone-flash">
      <div class="stats-flash">
        <span>Carte ${flashIndex+1} / ${flashCartes.length}</span>
        <span class="streak">🔥 Série : ${flashStreak}</span>
        <span>✅ Sues : ${flashSues}</span>
      </div>
      <div class="flashcard" id="carte-flip">
        <div class="flash-inner">
          <div class="flash-face flash-recto">
            <span class="etiquette-theme ${q.grave?'grave':''}">${q.themeNom}${q.grave?' · faute grave':''}</span>
            ${visuel ? `<div class="visuel-question visuel-flash visuel-question-${visuel.type}"><div data-${visuel.type==='scene'?'scene':'signe'}="${visuel.valeur}"></div></div>` : ""}
            <h3>${q.q}</h3>
            <p class="indice">👆 Touche la carte pour voir la réponse (ou barre d'espace)</p>
          </div>
          <div class="flash-face flash-verso">
            <span class="etiquette-theme ${q.grave?'grave':''}">${q.themeNom}</span>
            <p class="bonne-rep">${q.opts[q.a]}</p>
            <div class="explication ok">${q.exp}</div>
          </div>
        </div>
      </div>
      <div class="boutons-flash" id="boutons-flash" style="visibility:hidden">
        <button class="btn revoir" id="btn-revoir">À revoir</button>
        <button class="btn sait" id="btn-sait">Je savais ✓</button>
      </div>
    </div>
  `;
  if(visuel) injecterVisuels(el);
  const carte = document.getElementById("carte-flip");
  carte.addEventListener("click", retournerCarte);
  document.getElementById("btn-sait").addEventListener("click", (e)=>{e.stopPropagation();marquerCarte(true);});
  document.getElementById("btn-revoir").addEventListener("click", (e)=>{e.stopPropagation();marquerCarte(false);});
}

function retournerCarte(){
  flashRetourne = !flashRetourne;
  document.getElementById("carte-flip").classList.toggle("retournee", flashRetourne);
  if(flashRetourne) document.getElementById("boutons-flash").style.visibility = "visible";
}

function marquerCarte(sue){
  const q = flashCartes[flashIndex];
  if(sue){ flashSues++; flashStreak++; }
  else { flashStreak = 0; flashARevoir.push(q); }
  flashIndex++;
  renderFlashcard();
}

function finirFlash(){
  flashEnCours = false;
  const el = document.getElementById("vue-flash");
  el.innerHTML = `
    <div class="fin-flash">
      <span class="panneau p-losange" aria-hidden="true"></span>
      <h3>Session terminée</h3>
      <p>${flashSues} carte(s) sue(s) · série maximale non trackée entre sessions</p>
      <div class="actions-resultat">
        <button class="btn jaune" id="btn-refaire">Refaire une session</button>
        <button class="btn secondaire" data-goto="accueil">Retour à l'accueil</button>
      </div>
    </div>
  `;
  el.querySelector("[data-goto]").addEventListener("click", ()=>allerA("accueil"));
  document.getElementById("btn-refaire").addEventListener("click", renderChoixThemes);
}

// ========================================================
// FICHE MÉMO IMPRIMABLE (A4)
// ========================================================
function genererFicheMemo(){
  const zone = document.getElementById("fiche-imprimable");
  zone.innerHTML = `
    <h1>Permis B Théorique — Fiche mémo</h1>
    <div class="colonnes">
      <div>
        <h2>Vitesses maximales</h2>
        <table>
          <tr><th>Lieu</th><th>Limite</th></tr>
          <tr><td>Zone résidentielle</td><td>20 km/h</td></tr>
          <tr><td>Zone 30 / abords d'école</td><td>30 km/h</td></tr>
          <tr><td>Agglomération</td><td>50 km/h</td></tr>
          <tr><td>Hors agglo — Flandre</td><td>70 km/h</td></tr>
          <tr><td>Hors agglo — Wallonie</td><td>90 km/h</td></tr>
          <tr><td>Autoroute / 2×2 séparées</td><td>120 km/h (min. 70)</td></tr>
        </table>
        <h2>Distances clés</h2>
        <ul>
          <li>Réaction ≈ 1 s → 50 km/h : 14 m ; 120 km/h : 33 m</li>
          <li>Arrêt à 50 km/h (sol sec) ≈ 27 m</li>
          <li>Sécurité : 2 s (4 s pluie/nuit)</li>
          <li>Triangle panne : 30 m (route) / 100 m (autoroute)</li>
          <li>Feux croisement ≈65 m — feux route ≈100–200 m</li>
        </ul>
        <h2>Stationnement</h2>
        <ul>
          <li>5 m avant un carrefour / passage piéton</li>
          <li>15 m autour d'un arrêt de bus/tram</li>
          <li>E1 = stationnement interdit · E3 = arrêt + stationnement interdits</li>
          <li>Zone bleue : disque, max 2 h</li>
        </ul>
      </div>
      <div>
        <h2>Alcool</h2>
        <table>
          <tr><th>Taux</th><th>Conséquence</th></tr>
          <tr><td>0,5–0,8 g/l</td><td>3 h + 179 €</td></tr>
          <tr><td>≥0,8 g/l</td><td>6 h + tribunal</td></tr>
          <tr><td>≥1,5 g/l</td><td>Retrait 15 j possible</td></tr>
          <tr><td>≥1,8 g/l</td><td>Alcolock</td></tr>
        </table>
        <h2>4 degrés d'infraction</h2>
        <table>
          <tr><th>Degré</th><th>Perception</th></tr>
          <tr><td>1er</td><td>≈58 €</td></tr>
          <tr><td>2e</td><td>≈116 €</td></tr>
          <tr><td>3e</td><td>≈174 €</td></tr>
          <tr><td>4e</td><td>≈473 € + citation</td></tr>
        </table>
        <h2>Dépassement</h2>
        <ul>
          <li>Écart cycliste : 1 m (agglo) / 1,5 m (hors agglo)</li>
          <li>Interdit : carrefour (sauf priorité/agent/feux), virage/côte sans visibilité, passage à niveau, passage piéton</li>
        </ul>
        <h2>Examen théorique</h2>
        <ul>
          <li>50 questions — réussite à 41/50</li>
          <li>Erreur ordinaire : −1 — faute grave : −5</li>
          <li>Dès 17 ans — validité 3 ans</li>
        </ul>
        <h2>Essentiels à retenir</h2>
        <ul>
          <li>Urgence : 112 (partout en Europe)</li>
          <li>Casque homologué obligatoire à moto/cyclo</li>
          <li>Enfant &lt;1,35 m : dispositif de retenue obligatoire</li>
          <li>Assurance RC + contrôle technique obligatoires</li>
        </ul>
      </div>
    </div>
    <p class="pied">Fiche générée depuis le site d'entraînement Permis B Théorique — outil non officiel, à but pédagogique. Réfère-toi au Code de la route belge.</p>
  `;
  window.print();
}

const btnFiche = document.getElementById("btn-fiche");
if(btnFiche) btnFiche.addEventListener("click", genererFicheMemo);

// --- Raccourcis clavier (flashcards) ---
document.addEventListener("keydown", (e)=>{
  if(!flashEnCours) return;
  if(e.key===" " || e.key==="Enter"){
    e.preventDefault();
    retournerCarte();
  } else if(flashRetourne){
    if(e.key==="1" || e.key==="ArrowLeft") marquerCarte(false);
    if(e.key==="2" || e.key==="ArrowRight") marquerCarte(true);
  }
});

// --- Init ---
allerA("accueil");
