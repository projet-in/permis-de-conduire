// Cours théoriques — 6 chapitres alignés sur les thèmes de la banque de questions
const COURS = [
{
id:"signalisation", titre:"La signalisation", forme:"triangle",
resume:"Reconnaître les familles de signaux, les feux et les marquages, et savoir qui prime sur qui.",
html:`
<h3>1. La hiérarchie des règles</h3>
<p>Quand plusieurs indications se contredisent, l'ordre est toujours le même :</p>
<ol>
<li><strong>Les injonctions d'un agent qualifié</strong> (police, signaleur, surveillant habilité)</li>
<li><strong>Les feux de circulation</strong> en service</li>
<li><strong>Les signaux routiers</strong> (panneaux) — la signalisation de chantier (fond orange) prime la signalisation permanente</li>
<li><strong>Les marquages au sol</strong></li>
<li><strong>Les règles générales</strong> (ex. priorité de droite)</li>
</ol>
<div class="exemple">💡 <strong>Exemple concret :</strong> le feu est vert, mais un agent vous fait signe de vous arrêter → vous vous arrêtez. Le feu est en panne (orange clignotant) → les panneaux reprennent leurs droits.</div>
<div class="scene-illustration"><div data-scene="hierarchie"></div><p class="scene-legende">La pyramide de priorité : en cas de contradiction, on remonte toujours vers le niveau supérieur.</p></div>

<h3>2. Les familles de panneaux (par la forme et la couleur)</h3>
<ul>
<li><strong>Triangle pointe en haut, bord rouge</strong> → danger (série A) : virage, école, chaussée glissante. Placé à ±150 m du danger hors agglomération.</li>
<li><strong>Triangle pointe en bas (B1)</strong> → céder le passage. <strong>Octogone STOP (B5)</strong> → arrêt complet obligatoire, même si tout est libre.</li>
<li><strong>Rond bord rouge</strong> → interdiction (série C) : sens interdit (C1), vitesse (C43), dépassement interdit (C35)…</li>
<li><strong>Rond bleu</strong> → obligation (série D) : direction obligatoire, piste cyclable…</li>
<li><strong>Carré/rectangle bleu</strong> → indication (série F) : sens unique (F19), autoroute (F5), zones…</li>
<li><strong>Losange jaune (B9)</strong> → voie prioritaire ; barré (B11) → fin de voie prioritaire.</li>
</ul>
<div class="exemple">💡 <strong>Astuce mémo :</strong> forme = fonction. Même couvert de neige, un STOP se reconnaît à son octogone — unique dans tout le code.</div>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="B1"></span><span class="signe-legende">B1 — céder le passage</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="B5"></span><span class="signe-legende">B5 — STOP</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="B9"></span><span class="signe-legende">B9 — voie prioritaire</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="B11"></span><span class="signe-legende">B11 — fin de priorité</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C1"></span><span class="signe-legende">C1 — sens interdit</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C43_50"></span><span class="signe-legende">C43 — vitesse max</span></div>
</div>
<p style="font-size:.9rem;color:var(--gris);margin-bottom:.3rem">Quelques autres signaux courants, à reconnaître aussi :</p>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="F1"></span><span class="signe-legende">F1 — entrée d'agglomération</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F3"></span><span class="signe-legende">F3 — sortie d'agglomération</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F4a"></span><span class="signe-legende">F4a — zone 30</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F5"></span><span class="signe-legende">F5 — autoroute</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F9"></span><span class="signe-legende">F9 — route pour automobiles</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F12a"></span><span class="signe-legende">F12a — zone résidentielle</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F19"></span><span class="signe-legende">F19 — sens unique</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="M2"></span><span class="signe-legende">M2 — sauf cyclistes (SUL)</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C23"></span><span class="signe-legende">C23 — camions interdits</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="D1"></span><span class="signe-legende">D1 — contournement obligatoire</span></div>
</div>

<h3>3. Portée d'un signal</h3>
<p>Une interdiction classique vaut <strong>du signal jusqu'au prochain carrefour</strong> (ou jusqu'au signal de fin). Un signal <strong>zonal</strong> (« zone 30 », « zone P disque ») vaut dans tout le périmètre, rue après rue, jusqu'au panneau de <strong>fin de zone</strong>.</p>
<p>Les <strong>panneaux additionnels</strong> précisent : une distance (« 200 m » = le danger est à 200 m), une longueur (deux flèches verticales = la règle s'étend sur cette distance), une catégorie (« excepté cyclistes » = SUL).</p>

<h3>4. Les feux</h3>
<ul>
<li><strong>Rouge</strong> : arrêt avant la ligne. Le franchir = infraction du 3e degré, faute grave à l'examen.</li>
<li><strong>Orange fixe</strong> : arrêt, sauf si vous êtes trop près pour vous arrêter en sécurité.</li>
<li><strong>Orange clignotant</strong> : prudence, les règles de priorité normales s'appliquent.</li>
<li><strong>Flèches</strong> : n'autorisent le passage que dans leur direction ; en tournant, cédez le passage aux piétons et cyclistes.</li>
<li><strong>Passage à niveau</strong> : blanc clignotant = franchissement autorisé avec prudence ; rouge clignotant = interdiction absolue.</li>
</ul>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="feu_rouge"></span><span class="signe-legende">Rouge — arrêt</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="feu_orange"></span><span class="signe-legende">Orange — arrêt sauf trop près</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="feu_vert"></span><span class="signe-legende">Vert — passage</span></div>
</div>

<h3>5. Les marquages</h3>
<ul>
<li><strong>Ligne continue</strong> : ni franchir, ni chevaucher (exception depuis 2019 : dépasser un cycliste avec l'écart de 1 m / 1,5 m si la visibilité le permet).</li>
<li><strong>Ligne discontinue</strong> : franchissable pour dépasser ou changer de bande. Traits longs et rapprochés = ligne continue imminente.</li>
<li><strong>Bordure jaune discontinue</strong> : stationnement interdit (arrêt permis).</li>
<li><strong>Damier rouge/blanc</strong> : site réservé bus/tram.</li>
<li><strong>Flèches de rabattement</strong> : votre bande se termine, rabattez-vous tôt.</li>
</ul>
<div class="exemple">💡 <strong>Exemple concret :</strong> vous suivez un tracteur, ligne discontinue à traits de plus en plus longs → n'entamez plus le dépassement : la ligne continue arrive.</div>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="marquage_continu"></span><span class="signe-legende">Ligne continue</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="marquage_discontinu"></span><span class="signe-legende">Ligne discontinue</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="A15"></span><span class="signe-legende">A15 — chaussée glissante</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="A23"></span><span class="signe-legende">A23 — enfants</span></div>
</div>
`},
{
id:"priorites", titre:"Les priorités", forme:"losange",
resume:"Priorité de droite, carrefours, ronds-points, manœuvres, usagers particuliers.",
html:`
<h3><span class="signe-inline" data-signe="priorite_droite_icone"></span>1. La priorité de droite</h3>
<p>À un carrefour sans signalisation, sans feux et sans agent : <strong>cédez le passage à tout conducteur venant régulièrement de votre droite</strong> — y compris cyclistes et cyclomotoristes, et même s'il s'était arrêté avant de s'engager (règle belge depuis 2007).</p>
<p>Ne bénéficient PAS de la priorité de droite : le conducteur qui débouche d'un <strong>sens interdit</strong>, d'un <strong>chemin de terre</strong> ou d'un <strong>sentier</strong> (il doit céder à tous).</p>
<div class="exemple">💡 <strong>Exemple concret :</strong> à Charleroi, dans un quartier résidentiel sans panneaux, une voiture arrive à votre droite depuis une ruelle et marque un temps d'arrêt. Elle garde sa priorité : laissez-la passer.</div>
<div class="scene-illustration"><div data-scene="priorite-droite"></div><p class="scene-legende">Sans signalisation, le véhicule venant de la droite est prioritaire — même s'il était arrêté.</p></div>

<h3>2. Carrefours signalés</h3>
<ul>
<li><strong>B1 (triangle inversé)</strong> : céder le passage — s'arrêter seulement si nécessaire.</li>
<li><strong>B5 (STOP)</strong> : arrêt complet à la ligne d'arrêt, même carrefour vide.</li>
<li><strong>B9 (losange)</strong> : vous êtes prioritaire sur toute la voie. <strong>B15</strong> : priorité au prochain carrefour seulement. <strong>B11</strong> : fin de priorité → priorité de droite au prochain carrefour !</li>
<li>Feux en service : ils priment les panneaux B1/B5.</li>
</ul>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="B1"></span><span class="signe-legende">B1 — céder</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="B5"></span><span class="signe-legende">B5 — STOP</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="B9"></span><span class="signe-legende">B9 — prioritaire</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="B15"></span><span class="signe-legende">B15 — priorité locale</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="B11"></span><span class="signe-legende">B11 — fin de priorité</span></div>
</div>

<h3>3. Le rond-point</h3>
<p>Précédé de B1 + D5 : <strong>priorité à ceux qui circulent dans l'anneau</strong>. On entre sans clignotant, on <strong>sort avec le clignotant droit</strong>, en cédant le passage aux piétons/cyclistes qui traversent la sortie.</p>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="D5"></span><span class="signe-legende">D5 — rond-point obligatoire</span></div>
</div>
<div class="scene-illustration"><div data-scene="rond-point"></div><p class="scene-legende">En entrant, vous cédez toujours le passage aux véhicules déjà engagés dans l'anneau.</p></div>

<h3>4. Tourner = céder</h3>
<ul>
<li>Vous <strong>tournez à gauche</strong> → cédez au trafic d'en face qui va tout droit ou tourne à droite.</li>
<li>Vous <strong>tournez</strong> (gauche ou droite) → cédez aux <strong>piétons et cyclistes</strong> qui continuent tout droit, y compris sur piste cyclable.</li>
</ul>
<div class="exemple">💡 <strong>Exemple concret :</strong> vous tournez à droite vers le zoning ; un cycliste sur la piste cyclable file tout droit le long de la route. Contrôle d'angle mort droit → il passe d'abord.</div>
<div class="scene-illustration"><div data-scene="tourner-gauche"></div><p class="scene-legende">Le classique accident de carrefour : en tournant à gauche, vous coupez la trajectoire du trafic venant en face.</p></div>

<h3>5. Les manœuvres</h3>
<p>Marche arrière, demi-tour, quitter un stationnement, sortir d'une propriété, changer de bande : celui qui manœuvre <strong>cède le passage à tous</strong>. Changement de bande simultané vers la même bande : <strong>celui de gauche cède à celui de droite</strong>.</p>

<h3>6. Usagers et situations spéciales</h3>
<ul>
<li><strong>Tram</strong> : prioritaire sur les autres conducteurs — et les piétons doivent le laisser passer, même sur passage piéton.</li>
<li><strong>Véhicules prioritaires</strong> (sirène + feux bleus) : dégagez immédiatement le passage ; au rouge, franchissez prudemment la ligne d'arrêt pour libérer le carrefour.</li>
<li><strong>Bus quittant son arrêt en agglomération</strong> : facilitez sa réinsertion.</li>
<li><strong>Piétons</strong> : priorité sur les passages non réglés dès qu'ils s'engagent ou s'apprêtent à s'engager ; priorité aux aveugles (canne blanche) même hors passage.</li>
<li><strong>Cortèges et groupes encadrés</strong> : interdiction de les couper.</li>
<li><strong>Tirette</strong> : obligatoire en circulation fortement ralentie — insertion alternée au rétrécissement. <strong>Couloir de secours</strong> : entre la bande de gauche et sa voisine dès que le trafic se fige.</li>
</ul>
<div class="scene-illustration"><div data-scene="couloir-secours"></div><p class="scene-legende">Dès que le trafic se fige, chacun serre son côté pour laisser un couloir aux secours — jamais l'inverse.</p></div>
`},
{
id:"vitesses", titre:"Vitesses & distances", forme:"rond",
resume:"Limites par région et par lieu, vitesse adaptée, distances de réaction, de freinage et de sécurité.",
html:`
<h3>1. Les limites générales en Belgique</h3>
<table>
<tr><th>Lieu</th><th>Limite</th></tr>
<tr><td>Zone résidentielle / de rencontre</td><td><strong>20 km/h</strong></td></tr>
<tr><td>Zone 30, abords d'écoles</td><td><strong>30 km/h</strong></td></tr>
<tr><td>Agglomération (Région bruxelloise : 30 par défaut)</td><td><strong>50 km/h</strong></td></tr>
<tr><td>Hors agglomération — Flandre</td><td><strong>70 km/h</strong></td></tr>
<tr><td>Hors agglomération — Wallonie</td><td><strong>90 km/h</strong></td></tr>
<tr><td>Route 2×2 bandes séparées par berme</td><td><strong>120 km/h</strong></td></tr>
<tr><td>Autoroute</td><td><strong>120 km/h</strong> (minimum 70)</td></tr>
</table>
<div class="exemple">💡 <strong>Exemple concret :</strong> N90 hors agglomération en Wallonie sans panneau → 90 km/h. La même configuration en Flandre → 70 km/h. Un C43 « 70 » rencontré vaut jusqu'au prochain carrefour.</div>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="C43_30"></span><span class="signe-legende">C43 — 30 km/h</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C43_50"></span><span class="signe-legende">C43 — 50 km/h</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C43_70"></span><span class="signe-legende">C43 — 70 km/h</span></div>
</div>

<h3>2. La vitesse adaptée</h3>
<p>La limite est un <strong>maximum</strong>, jamais un objectif. Vous devez toujours pouvoir vous arrêter <strong>sur la distance visible</strong> devant vous, en fonction de la météo, du trafic, de l'état de la route, de votre chargement et de votre état de forme.</p>

<h3>3. Les distances — les chiffres à connaître</h3>
<ul>
<li><strong>Réaction ≈ 1 seconde</strong> : distance parcourue = vitesse ÷ 3,6 → à 50 km/h : ±14 m ; à 120 km/h : ±33 m.</li>
<li><strong>Freinage</strong> : croît avec le <strong>carré</strong> de la vitesse (vitesse ×2 → freinage ×4). Sur sol mouillé, il peut doubler.</li>
<li><strong>Distance d'arrêt à 50 km/h sur sol sec ≈ 27 m</strong> (réaction + freinage).</li>
<li><strong>Distance de sécurité : règle des 2 secondes</strong> — 4 secondes par pluie ou de nuit.</li>
<li>Feux de croisement : portée ±65 m ; feux de route : ±100–200 m.</li>
</ul>
<div class="exemple">💡 <strong>Exemple concret :</strong> à 120 km/h, consulter 2 secondes son GPS = 66 m parcourus en aveugle — la longueur d'un terrain de football sur sa moitié.</div>
<div class="scene-illustration"><div data-scene="distance-arret"></div><p class="scene-legende">Plus la vitesse augmente, plus la distance de freinage grandit vite : elle est multipliée par 4 quand la vitesse double.</p></div>

<h3>4. Sanctions vitesse</h3>
<ul>
<li>Tout excès est verbalisable ; à l'examen, les questions vitesse sont des <strong>fautes graves (−5)</strong>.</li>
<li>Excès de <strong>+30 km/h en agglomération</strong> (+20 en zone 30/résidentielle/école) ou <strong>+40 ailleurs</strong> : retrait immédiat possible (15 jours) + tribunal.</li>
<li><strong>Radar tronçon</strong> = vitesse moyenne : ralentir au portique ne sert à rien.</li>
<li>Les limites affichées sur <strong>panneaux dynamiques</strong> (portiques autoroutiers) ont pleine valeur légale.</li>
</ul>

<h3>5. Cas particuliers</h3>
<ul>
<li>Ensemble voiture + remorque &gt; 3,5 t : 90 km/h sur autoroute.</li>
<li>Cyclomoteur classe A : 25 km/h ; classe B : 45 km/h ; trottinette électrique : 25 km/h (16 ans min.).</li>
<li>Remorquage d'un véhicule en panne : allure très réduite, autoroute interdite (sauf pour la quitter à la première sortie).</li>
<li>Régulateur de vitesse : à éviter sous la pluie, sur sol glissant et en trafic dense.</li>
</ul>
`},
{
id:"alcool", titre:"Alcool, drogues & sanctions", forme:"rond",
resume:"Taux, contrôles, degrés d'infraction, perceptions immédiates, permis et examens.",
html:`
<h3>1. Alcool : les taux</h3>
<ul>
<li><strong>0,5 g/l de sang</strong> (0,22 mg/l d'air expiré) : limite générale.</li>
<li><strong>0,2 g/l</strong> : conducteurs professionnels (transport de personnes/marchandises).</li>
<li>1 verre standard ≈ 10 g d'alcool ≈ +0,2 à 0,3 g/l. Élimination : ±0,10–0,15 g/l <strong>par heure</strong> — ni café, ni douche, ni sport ne l'accélèrent.</li>
</ul>
<div class="exemple">💡 <strong>Exemple concret :</strong> fin de barbecue à 23 h après 5 bières : vers 7 h du matin, vous pouvez encore être positif. Le « lendemain de fête » est un grand classique du contrôle matinal.</div>

<h3>2. Alcool : les sanctions immédiates</h3>
<table>
<tr><th>Taux (sang)</th><th>Conséquence immédiate</th></tr>
<tr><td>0,5 – 0,8 g/l</td><td>Interdiction de conduire <strong>3 h</strong> + perception ±179 €</td></tr>
<tr><td>≥ 0,8 g/l</td><td>Interdiction <strong>6 h</strong> + dossier au parquet (tribunal)</td></tr>
<tr><td>≥ 1,5 g/l</td><td>Retrait immédiat du permis possible (15 jours)</td></tr>
<tr><td>≥ 1,8 g/l ou récidive ≥ 1,2</td><td><strong>Alcolock</strong> (éthylotest antidémarrage) en principe</td></tr>
</table>
<p><strong>Refuser</strong> le test = sanctionné comme un taux élevé. <strong>Drogues</strong> : tolérance zéro, test salivaire, interdiction de conduire 12 h + tribunal. Certains <strong>médicaments</strong> (pictogramme) altèrent aussi la conduite.</p>
<div class="scene-illustration"><div data-scene="gradation-sanctions"></div><p class="scene-legende">Les seuils clés : 0,5 / 0,8 / 1,8 g/l — retenez-les, ils reviennent souvent à l'examen.</p></div>

<h3>3. Les 4 degrés d'infraction</h3>
<table>
<tr><th>Degré</th><th>Perception</th><th>Exemples</th></tr>
<tr><td>1er</td><td>±58 €</td><td>documents oubliés, stationnement irrégulier simple</td></tr>
<tr><td>2e</td><td>±116 €</td><td>ceinture, place handicapés, stationnement dangereux léger</td></tr>
<tr><td>3e</td><td>±174 €</td><td>feu rouge, GSM en main, non-respect priorité piéton</td></tr>
<tr><td>4e</td><td>±473 € + citation</td><td>dépasser à l'approche d'un passage à niveau, demi-tour sur autoroute</td></tr>
</table>
<p>À l'examen théorique, les infractions des <strong>3e et 4e degrés</strong> et les <strong>excès de vitesse</strong> sont des <strong>fautes graves : −5 points</strong>.</p>

<h3>4. Permis, tribunal, novices</h3>
<ul>
<li>Le juge peut prononcer une <strong>déchéance</strong> du droit de conduire + examens de réintégration (théorique, pratique, médical, psychologique).</li>
<li><strong>Conducteur novice</strong> (permis &lt; 2 ans) : en cas de déchéance, les examens de réintégration sont <strong>obligatoires</strong>.</li>
<li><strong>Délit de fuite</strong> : délit grave — restez sur place, échangez les données, constat.</li>
<li><strong>RC auto obligatoire</strong> ; documents de bord : permis, immatriculation, assurance, contrôle technique.</li>
</ul>

<h3>5. L'examen théorique en pratique</h3>
<ul>
<li>Dès <strong>17 ans</strong> ; 50 questions ; réussite à <strong>41/50</strong> ; validité 3 ans.</li>
<li>Erreur ordinaire : <strong>−1</strong> ; faute grave : <strong>−5</strong> → 2 fautes graves = presque toujours l'échec.</li>
<li>Après <strong>2 échecs</strong> : 12 h de cours théoriques obligatoires en auto-école.</li>
</ul>

<h3>6. Urgences et sécurité</h3>
<ul>
<li>Accident avec blessés : <strong>sécuriser → alerter le 112 → secourir</strong> (ne pas déplacer les blessés sauf danger).</li>
<li>Triangle : ±30 m (route), <strong>±100 m sur autoroute</strong> ; gilet rétroréfléchissant pour quitter le véhicule ; occupants <strong>derrière la glissière</strong>.</li>
<li>Fatigue : aux premiers signes, pause + micro-sieste 15–20 min. Jamais de moteur tournant dans un local fermé (CO mortel).</li>
</ul>
`},
{
id:"stationnement", titre:"Arrêt & stationnement", forme:"carre",
resume:"Différence arrêt/stationnement, lieux interdits, distances clés, zones bleues et cas pratiques.",
html:`
<h3>1. Arrêt ou stationnement ?</h3>
<p><strong>Arrêt</strong> = le temps strictement nécessaire pour embarquer/débarquer des personnes ou charger/décharger des choses. Tout le reste = <strong>stationnement</strong>, même conducteur au volant, même 2 minutes.</p>
<div class="exemple">💡 <strong>Exemple concret :</strong> vous attendez un ami « juste 5 minutes » devant chez lui, moteur tournant : c'est du stationnement — s'il est interdit à cet endroit, vous êtes en infraction.</div>

<h3>2. Où se ranger ?</h3>
<ul>
<li>En agglomération : <strong>à droite</strong> dans le sens de la marche ; en <strong>sens unique</strong> : des deux côtés (sauf interdiction).</li>
<li>Hors agglomération : autant que possible <strong>hors chaussée</strong> (accotement).</li>
<li>Dans les <strong>cases marquées</strong> : à l'intérieur, dans le sens du marquage.</li>
<li>En côte : frein à main + vitesse engagée (ou P) + roues braquées vers la bordure.</li>
<li>Nuit, chaussée non éclairée : feux de position du côté circulation.</li>
</ul>

<h3>3. Les interdictions à connaître par cœur</h3>
<table>
<tr><th>Arrêt ET stationnement interdits</th><th>Stationnement seul interdit</th></tr>
<tr><td>Trottoirs, pistes cyclables, passages pour piétons et 5 m en amont, ponts, tunnels, passages à niveau, signal E3 (2 diagonales)</td><td>À moins de 5 m d'un carrefour, à moins de 15 m d'un arrêt bus/tram, devant les accès carrossables, bordure jaune discontinue, signal E1 (1 diagonale), sur dispositifs surélevés</td></tr>
</table>
<div class="exemple">💡 <strong>Mémo distances :</strong> 5 m (carrefours, avant les passages piétons) — 15 m (arrêts de bus/tram). 1 diagonale = 1 interdiction (stationner) ; 2 diagonales = 2 interdictions (arrêt + stationnement).</div>
<div class="scene-illustration"><div data-scene="distances-stationnement"></div><p class="scene-legende">Les deux distances à retenir par cœur : 5 m avant un carrefour, 15 m autour d'un arrêt de bus/tram.</p></div>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="E1"></span><span class="signe-legende">E1 — stationnement interdit</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="E3"></span><span class="signe-legende">E3 — arrêt et stationnement interdits</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="E9"></span><span class="signe-legende">E9 — stationnement autorisé</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="E11"></span><span class="signe-legende">E11 — alterné semi-mensuel</span></div>
</div>

<h3>4. Zones et signaux</h3>
<ul>
<li><strong>Zone bleue</strong> : disque obligatoire, max 2 h en général, jours ouvrables 9 h–18 h par défaut.</li>
<li><strong>E9 (P bleu)</strong> : stationnement organisé — lisez l'additionnel (payant, riverains, électrique en charge, livraisons…).</li>
<li><strong>E11</strong> : alterné semi-mensuel — du 1 au 15 côté <strong>impair</strong>, du 16 à la fin côté <strong>pair</strong> ; changement le dernier jour de la période entre 19h30 et 20h.</li>
<li><strong>Place handicapés</strong> sans carte : 2e degré + dépannage à vos frais.</li>
<li>Emplacements réservés (recharge élec., taxis, kiss &amp; ride, covoiturage) : condition affichée à respecter.</li>
</ul>

<h3>5. Réflexes de sécurité</h3>
<ul>
<li>Ouvrir la portière avec la <strong>main opposée</strong> (« dutch reach ») : contrôle naturel de l'angle mort, contre l'emportiérage des cyclistes.</li>
<li>Quitter un stationnement = <strong>manœuvre</strong> : clignotant + céder le passage à tous.</li>
<li>Jamais de double file devant une école : elle masque les enfants qui traversent.</li>
<li>Moteur coupé à l'arrêt ; remorque non attelée : max 24 h au même endroit ; mal stationné = amende <strong>+ dépannage à vos frais</strong>.</li>
</ul>
`},
{
id:"depassement", titre:"Dépassement & croisement", forme:"rond",
resume:"Quand, où et comment dépasser ; interdictions absolues ; croiser et être dépassé.",
html:`
<h3>1. Les principes</h3>
<ul>
<li>On dépasse <strong>par la gauche</strong> ; on croise <strong>par la droite</strong>.</li>
<li>Dépassement par la droite : uniquement le conducteur qui, clignotant à l'appui, s'est porté à gauche pour <strong>tourner à gauche</strong> — et en principe les trams.</li>
<li>Avant de déboîter : rétroviseurs → <strong>angle mort</strong> → clignotant → personne n'a entamé un dépassement sur vous → espace pour se rabattre.</li>
<li>Rabattement : quand le dépassé apparaît en entier dans le rétroviseur intérieur, en souplesse.</li>
<li>Le dépassé <strong>serre à droite et n'accélère pas</strong>.</li>
</ul>

<h3>2. Les interdictions absolues</h3>
<ul>
<li>Ligne blanche <strong>continue</strong> (exception cycliste : franchissement permis avec 1 m/1,5 m d'écart et bonne visibilité).</li>
<li><strong>Visibilité insuffisante</strong> : virage, sommet de côte (quand il faut empiéter sur le sens inverse).</li>
<li><strong>Carrefours</strong> — sauf : vous êtes sur voie prioritaire, circulation réglée par agent/feux, ou dépassement par la droite d'un véhicule tournant à gauche.</li>
<li>Véhicule qui <strong>s'arrête ou ralentit devant un passage pour piétons</strong> : ne jamais le dépasser.</li>
<li><strong>Approche d'un passage à niveau</strong> : infraction du <strong>4e degré</strong>.</li>
<li>Signal <strong>C35</strong> : interdiction de dépasser les véhicules à plus de 2 roues (C37 : fin).</li>
<li>Par précipitations : les <strong>+7,5 t</strong> ne dépassent pas sur autoroute.</li>
</ul>
<div class="exemple">💡 <strong>Exemple concret :</strong> la voiture devant vous freine à hauteur d'un passage piéton apparemment vide. Ne déboîtez pas : elle voit peut-être un enfant que vous ne voyez pas. C'est l'accident-type mortel en agglomération.</div>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="C35"></span><span class="signe-legende">C35 — dépassement interdit</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C37"></span><span class="signe-legende">C37 — fin d'interdiction</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="marquage_continu"></span><span class="signe-legende">Ligne continue</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="marquage_discontinu"></span><span class="signe-legende">Ligne discontinue</span></div>
</div>

<h3>3. Dépasser les usagers vulnérables</h3>
<ul>
<li>Écart latéral cycliste/trottinette : <strong>1 m en agglomération, 1,5 m hors agglomération</strong> — sinon, on attend derrière.</li>
<li><strong>Rue cyclable (F111)</strong> : interdiction totale de dépasser un cycliste, max 30 km/h.</li>
<li>Bus à l'arrêt feux de détresse (enfants) : croiser/dépasser au pas, prêt à s'arrêter.</li>
<li>Camions : si vous ne voyez pas ses rétroviseurs, le chauffeur ne vous voit pas. Ne stationnez jamais le long de son flanc droit en approche de carrefour.</li>
</ul>
<div class="scene-illustration"><div data-scene="angle-mort-camion"></div><p class="scene-legende">Ne restez jamais dans l'angle mort d'un camion, surtout à son flanc droit : le chauffeur ne vous voit pas.</p></div>
<div class="scene-illustration"><div data-scene="ecart-cycliste"></div><p class="scene-legende">L'écart latéral obligatoire pour dépasser un cycliste : 1 m en agglomération, 1,5 m hors agglomération.</p></div>

<h3>4. Sur autoroute</h3>
<ul>
<li>On circule à droite ; la gauche sert au dépassement — « camper » à gauche est une infraction.</li>
<li>Dépasser par la droite : interdit, sauf progression normale en <strong>files parallèles</strong> en trafic dense.</li>
<li>Annoncer un dépassement : klaxon (jour, hors agglomération) ou appel de phares (nuit).</li>
</ul>

<h3>5. Le croisement</h3>
<ul>
<li>Obstacle de votre côté → <strong>vous cédez</strong> (sauf B21 en votre faveur ; B19 = vous cédez).</li>
<li>Croisement impossible en côte : le <strong>descendant</strong> recule en principe.</li>
<li>Nuit : feux de route éteints dès risque d'éblouissement (croisement… et véhicule suivi de près). Ébloui ? Regard vers le bord droit, ralentir.</li>
<li>Rue étroite : s'arrêter tôt, communiquer du regard, passer un à la fois — l'anticipation évite le nez-à-nez.</li>
</ul>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="B19"></span><span class="signe-legende">B19 — vous cédez</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="B21"></span><span class="signe-legende">B21 — vous êtes prioritaire</span></div>
</div>
`}
];
