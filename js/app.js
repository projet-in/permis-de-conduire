// ===== App SPA — Permis B Théorique Belgique =====

// --- Assemblage de la banque ---
const THEMES = [
  {id:"signalisation", nom:"Signalisation", data:DATA_SIGNALISATION, forme:"triangle"},
  {id:"priorites",      nom:"Priorités",     data:DATA_PRIORITES,     forme:"losange"},
  {id:"vitesses",       nom:"Vitesses",      data:DATA_VITESSES,      forme:"rond"},
  {id:"alcool",         nom:"Alcool & sanctions", data:DATA_ALCOOL,   forme:"rond"},
  {id:"stationnement",  nom:"Stationnement", data:DATA_STATIONNEMENT, forme:"carre"},
  {id:"depassement",    nom:"Dépassement",   data:DATA_DEPASSEMENT,   forme:"rond"},
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
    <p class="sous-titre">6 chapitres, avec exemples concrets, pour comprendre avant de s'entraîner.</p>
    <div class="liste-chapitres">
      ${COURS.map((c,i)=>`
        <button class="chapitre-item" data-chap="${i}">
          <span class="panneau p-${c.forme}" aria-hidden="true">${c.forme==='carre'?'B':''}</span>
          <span class="txt">
            <h3>${c.titre}</h3>
            <p>${c.resume}</p>
          </span>
          <span class="badge-n">${i+1}/${COURS.length}</span>
        </button>
      `).join("")}
    </div>
  `;
  el.querySelectorAll("[data-chap]").forEach(b=>{
    b.addEventListener("click", ()=>renderChapitre(parseInt(b.dataset.chap)));
  });
}

function renderChapitre(index){
  const c = COURS[index];
  const el = document.getElementById("vue-cours");
  el.innerHTML = `
    <button class="btn discret" data-back>← Tous les chapitres</button>
    <h2 class="titre-vue" style="margin-top:.8rem">${c.titre}</h2>
    <p class="sous-titre">Chapitre ${index+1} / ${COURS.length}</p>
    <div class="contenu-cours">${c.html}</div>
    <div class="nav-cours">
      <button class="btn secondaire" ${index===0?"disabled":""} data-prev>← Chapitre précédent</button>
      <button class="btn" ${index===COURS.length-1?"disabled":""} data-next>Chapitre suivant →</button>
    </div>
  `;
  el.querySelector("[data-back]").addEventListener("click", renderListeChapitres);
  if(index>0) el.querySelector("[data-prev]").addEventListener("click", ()=>renderChapitre(index-1));
  if(index<COURS.length-1) el.querySelector("[data-next]").addEventListener("click", ()=>renderChapitre(index+1));
  injecterVisuels(el);
  el.scrollIntoView({behavior:"smooth"});
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
  el.innerHTML = `
    <div class="barre-exam">
      <span class="compteur">Question ${examIndex+1} / 50</span>
      <div class="progress"><div style="width:${(examIndex/50)*100}%"></div></div>
      ${examAvecChrono ? `<span class="chrono" id="chrono-affiche">${formatChrono(examSecondes)}</span>` : ""}
    </div>
    <div class="carte-question">
      <span class="etiquette-theme ${q.grave?'grave':''}">${q.themeNom}${q.grave?' · faute grave':''}</span>
      <h3>${q.q}</h3>
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
      <div class="actions-resultat">
        <button class="btn jaune" id="btn-recommencer">Recommencer un examen</button>
        <button class="btn secondaire" data-goto="accueil">Retour à l'accueil</button>
      </div>
      ${erreurs.length ? `
        <h3 style="margin-top:1.6rem;text-align:left">Revue des erreurs (${erreurs.length})</h3>
        <div class="revue">
          ${erreurs.map(r=>`
            <div class="carte-question">
              <span class="etiquette-theme ${r.grave?'grave':''}">${r.q.themeNom}${r.grave?' · faute grave':''}</span>
              <h3>${r.q.q}</h3>
              <div class="reponses">
                ${r.q.opts.map((o,i)=>`
                  <button disabled class="${i===r.q.a?'bonne':(i===r.choisi?'mauvaise':'')}">${o}</button>
                `).join("")}
              </div>
              <div class="explication ${r.correct?'ok':'ko'}">${r.q.exp}</div>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
  el.querySelector("[data-goto]").addEventListener("click", ()=>allerA("accueil"));
  document.getElementById("btn-recommencer").addEventListener("click", renderConfigExam);

  // meilleur score en localStorage
  try{
    const best = parseInt(localStorage.getItem("permisb-meilleur-score")||"0");
    if(score > best) localStorage.setItem("permisb-meilleur-score", String(score));
  }catch(e){}
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
