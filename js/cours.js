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
<p style="font-size:.9rem;color:var(--gris);margin-bottom:.3rem">Panneaux d'indication (série F) — début et fin de zone :</p>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="F4b"></span><span class="signe-legende">F4b — fin de zone 30</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F7"></span><span class="signe-legende">F7 — fin d'autoroute</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F111"></span><span class="signe-legende">F111 — rue cyclable</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F87"></span><span class="signe-legende">F87 — dispositif surélevé</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="A7"></span><span class="signe-legende">A7a/b/c — rétrécissement de la chaussée</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C3"></span><span class="signe-legende">C3 — circulation interdite (2 sens)</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C45"></span><span class="signe-legende">C45 — fin de limitation</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C46"></span><span class="signe-legende">C46 — fin d'interdiction</span></div>
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
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="priorites">Priorités</a>
<a href="#" data-goto-chapitre="autoroutes">Autoroutes</a>
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
<div class="scene-illustration"><div data-scene="tourner-droite-cycliste"></div><p class="scene-legende">Même logique en tournant à droite : le cycliste qui continue tout droit sur la piste cyclable est prioritaire.</p></div>
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
<div class="scene-illustration"><div data-scene="vehicule-prioritaire"></div><p class="scene-legende">Sirène et feux bleus : dégagez immédiatement, quitte à vous arrêter sur le côté.</p></div>
<div class="scene-illustration"><div data-scene="passage-pieton"></div><p class="scene-legende">Un piéton engagé ou sur le point de s'engager a priorité, même sans feux.</p></div>
<div class="scene-illustration"><div data-scene="tirette"></div><p class="scene-legende">La tirette : on utilise les deux bandes jusqu'au rétrécissement, puis on s'insère un véhicule à la fois.</p></div>
<div class="scene-illustration"><div data-scene="couloir-secours"></div><p class="scene-legende">Dès que le trafic se fige, chacun serre son côté pour laisser un couloir aux secours — jamais l'inverse.</p></div>
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="depassement">Dépassement</a>
<a href="#" data-goto-chapitre="autoroutes">Autoroutes</a>
<a href="#" data-goto-chapitre="usagers-vulnerables">Usagers vulnérables</a>
</div>
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
<div class="signe-carte"><span class="signe-icone" data-signe="C43_90"></span><span class="signe-legende">C43 — 90 km/h</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="C43_120"></span><span class="signe-legende">C43 — 120 km/h</span></div>
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
<div class="scene-illustration"><div data-scene="distance-securite"></div><p class="scene-legende">La règle des 2 secondes pour garder une distance de sécurité suffisante avec le véhicule qui précède.</p></div>
<div class="scene-illustration"><div data-scene="feux-nuit"></div><p class="scene-legende">La nuit, adaptez votre vitesse à la portée réelle de vos feux.</p></div>

<h3>4. Sanctions vitesse</h3>
<ul>
<li>Tout excès est verbalisable ; à l'examen, les questions vitesse sont des <strong>fautes graves (−5)</strong>.</li>
<li>Excès de <strong>+30 km/h en agglomération</strong> (+20 en zone 30/résidentielle/école) ou <strong>+40 ailleurs</strong> : retrait immédiat possible (15 jours) + tribunal.</li>
<li><strong>Radar tronçon</strong> = vitesse moyenne : ralentir au portique ne sert à rien.</li>
<li>Les limites affichées sur <strong>panneaux dynamiques</strong> (portiques autoroutiers) ont pleine valeur légale.</li>
</ul>
<div class="scene-illustration"><div data-scene="radar-troncon"></div><p class="scene-legende">Le radar tronçon calcule une moyenne : inutile de ralentir juste avant le second point de mesure.</p></div>

<h3>5. Cas particuliers</h3>
<ul>
<li>Ensemble voiture + remorque &gt; 3,5 t : 90 km/h sur autoroute.</li>
<li>Cyclomoteur classe A : 25 km/h ; classe B : 45 km/h ; trottinette électrique : 25 km/h (16 ans min.).</li>
<li>Remorquage d'un véhicule en panne : allure très réduite, autoroute interdite (sauf pour la quitter à la première sortie).</li>
<li>Régulateur de vitesse : à éviter sous la pluie, sur sol glissant et en trafic dense.</li>
</ul>
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="autoroutes">Autoroutes</a>
<a href="#" data-goto-chapitre="depassement">Dépassement</a>
<a href="#" data-goto-chapitre="ecoconduite">Écoconduite & conditions</a>
</div>
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
<div class="scene-illustration"><div data-scene="triangle-autoroute"></div><p class="scene-legende">En panne : triangle à bonne distance, gilet, et tout le monde derrière la glissière de sécurité.</p></div>
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="secourisme">Secourisme</a>
<a href="#" data-goto-chapitre="ecoconduite">Écoconduite & conditions</a>
</div>
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
<div class="scene-illustration"><div data-scene="stationnement-cote"></div><p class="scene-legende">En côte, les roues braquées vers la bordure empêchent le véhicule de dévaler en cas de défaillance du frein.</p></div>

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
<li><strong>E9 / E9a (P bleu)</strong> : stationnement organisé — lisez l'additionnel (payant, riverains, électrique en charge, livraisons…).</li>
<li><strong>E11</strong> : alterné semi-mensuel — du 1 au 15 côté <strong>impair</strong>, du 16 à la fin côté <strong>pair</strong> ; changement le dernier jour de la période entre 19h30 et 20h.</li>
<li><strong>Place handicapés</strong> sans carte : 2e degré + dépannage à vos frais.</li>
<li>Emplacements réservés (recharge élec., taxis, kiss &amp; ride, covoiturage) : condition affichée à respecter.</li>
</ul>
<div class="scene-illustration"><div data-scene="disque-stationnement"></div><p class="scene-legende">Le disque : flèche sur le trait qui suit l'heure d'arrivée, pour une durée maximale de 2 h en zone bleue.</p></div>

<h3>5. Réflexes de sécurité</h3>
<ul>
<li>Ouvrir la portière avec la <strong>main opposée</strong> (« dutch reach ») : contrôle naturel de l'angle mort, contre l'emportiérage des cyclistes.</li>
<li>Quitter un stationnement = <strong>manœuvre</strong> : clignotant + céder le passage à tous.</li>
<li>Jamais de double file devant une école : elle masque les enfants qui traversent.</li>
<li>Moteur coupé à l'arrêt ; remorque non attelée : max 24 h au même endroit ; mal stationné = amende <strong>+ dépannage à vos frais</strong>.</li>
</ul>
<div class="scene-illustration"><div data-scene="ouverture-portiere"></div><p class="scene-legende">La main opposée force la rotation du buste et le contrôle naturel de l'angle mort avant d'ouvrir.</p></div>
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="usagers-vulnerables">Usagers vulnérables</a>
<a href="#" data-goto-chapitre="ecoconduite">Écoconduite & conditions</a>
</div>
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
<div class="scene-illustration"><div data-scene="visibilite-insuffisante"></div><p class="scene-legende">Sommet de côte ou virage : si vous ne voyez pas assez loin, le dépassement est interdit.</p></div>
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
<li><strong>Rue cyclable (F111)</strong> <span class="signe-inline" data-signe="F111"></span>: interdiction totale de dépasser un cycliste, max 30 km/h.</li>
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
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="priorites">Priorités</a>
<a href="#" data-goto-chapitre="usagers-vulnerables">Usagers vulnérables</a>
<a href="#" data-goto-chapitre="autoroutes">Autoroutes</a>
</div>
`},
{
id:"secourisme", titre:"Secourisme & comportement en cas d'accident", forme:"rond",
resume:"Protéger, alerter, secourir : les bons réflexes face à un accident ou une panne.",
html:`
<h3>1. Les 3 étapes : protéger, alerter, secourir</h3>
<ol>
<li><strong>Protéger</strong> : feux de détresse, gilet avant de sortir, triangle à bonne distance (±30 m / ±100 m sur autoroute), personne derrière la glissière.</li>
<li><strong>Alerter</strong> : le <strong>112</strong>, numéro européen unique — lieu précis, nombre de victimes, état apparent.</li>
<li><strong>Secourir</strong> : sans se mettre soi-même en danger, à la mesure de ses moyens.</li>
</ol>
<div class="exemple">💡 <strong>Exemple concret :</strong> accident sur autoroute → gilet avant de sortir, triangle à 100 m, tout le monde derrière la glissière, puis 112 avec le nombre de blessés et leur état.</div>
<div class="scene-illustration"><div data-scene="triangle-autoroute"></div><p class="scene-legende">Sécuriser d'abord : gilet, triangle à bonne distance, et tout le monde derrière la glissière.</p></div>

<h3>2. Face à une victime</h3>
<ul>
<li><strong>Consciente qui respire, hémorragie</strong> : compression directe et ferme de la plaie.</li>
<li><strong>Inconsciente qui respire</strong> : position latérale de sécurité (PLS).</li>
<li><strong>Ne respire plus</strong> : massage cardiaque si vous savez le faire, ou suivre les instructions du 112 ; utiliser un défibrillateur (DEA) à proximité si disponible — il guide vocalement.</li>
<li><strong>Motard casqué inconscient</strong> : ne jamais retirer le casque sauf urgence vitale.</li>
</ul>
<div class="scene-illustration"><div data-scene="position-laterale-securite"></div><p class="scene-legende">Une victime inconsciente qui respire est placée en PLS, jamais laissée sur le dos sans surveillance.</p></div>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="casque"></span><span class="signe-legende">Casque : jamais retiré sauf urgence vitale</span></div>
</div>

<h3>3. Après un accident matériel</h3>
<p>Sans blessé ni désaccord : un <strong>constat amiable</strong> suffit généralement, pas besoin de police systématiquement. Avec blessés, désaccord ou délit de fuite : la police doit intervenir.</p>

<h3>4. Cas particuliers</h3>
<ul>
<li><strong>Incendie moteur</strong> : arrêter, couper le contact, évacuer, s'éloigner, alerter — ne jamais ouvrir le capot d'un moteur en feu.</li>
<li><strong>Matières dangereuses (ADR)</strong> : rester à distance, ne pas fumer, transmettre le numéro affiché aux secours.</li>
<li><strong>Véhicule dans l'eau</strong> : détacher la ceinture et sortir vite, avant que le véhicule ne s'enfonce.</li>
<li><strong>Non-assistance à personne en danger</strong> : délit grave — chacun doit agir à la mesure de ses moyens.</li>
</ul>
<div class="exemple">💡 <strong>Exemple concret :</strong> un enfant est laissé seul dans une voiture en plein soleil quelques minutes à peine : la température intérieure peut devenir dangereuse en très peu de temps.</div>
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="alcool">Alcool & sanctions</a>
<a href="#" data-goto-chapitre="autoroutes">Autoroutes</a>
<a href="#" data-goto-chapitre="ecoconduite">Écoconduite & conditions</a>
</div>
`},
{
id:"ecoconduite", titre:"Écoconduite, chargement & conditions particulières", forme:"carre",
resume:"Chargement, documents obligatoires, éclairage, écoconduite et conduite par conditions difficiles.",
html:`
<h3>1. Chargement et remorques</h3>
<ul>
<li>Chargement <strong>réparti et arrimé</strong> : un centre de gravité trop haut ou mal réparti augmente le risque de renversement en virage.</li>
<li>Dépassement à l'arrière &gt; 1 m : signalé par un dispositif ou tissu voyant.</li>
<li>Permis B : ensemble (véhicule + remorque) jusqu'à <strong>3 500 kg</strong> de MMA totale ; au-delà, permis BE requis.</li>
<li>Remorque &gt; 750 kg : ses propres feux et sa plaque d'immatriculation.</li>
</ul>
<div class="exemple">💡 <strong>Exemple concret :</strong> une remorque mal chargée à l'arrière (trop de poids derrière l'essieu) peut se mettre à louvoyer dangereusement (effet de fouet) à partir d'une certaine vitesse.</div>

<h3>2. Documents et contrôle</h3>
<ul>
<li><strong>Assurance RC</strong> obligatoire : rouler sans elle expose à indemniser soi-même toutes les victimes.</li>
<li><strong>Contrôle technique</strong> : généralement dès la 4<sup>e</sup> année pour une voiture particulière, puis périodique.</li>
<li><strong>Certificat d'immatriculation</strong> : à bord ou consultable selon la réglementation en vigueur.</li>
<li>Correction visuelle mentionnée sur le permis : lunettes/lentilles obligatoires pour conduire.</li>
</ul>

<h3>3. Éclairage et visibilité</h3>
<ul>
<li>Feux de croisement : la nuit, et dès que la visibilité est insuffisante (brouillard, forte pluie, tunnel).</li>
<li>Antibrouillard arrière : uniquement si visibilité &lt; ±100 m — sinon, il éblouit inutilement.</li>
<li>Pare-brise fissuré gênant la vue : à réparer, point de contrôle technique.</li>
</ul>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="feu_rouge"></span><span class="signe-legende">Feux de croisement — nuit et visibilité réduite</span></div>
</div>

<h3>4. Conditions particulières</h3>
<ul>
<li><strong>Neige/verglas</strong> : vitesse fortement réduite, gestes doux, distances augmentées.</li>
<li><strong>Vent latéral</strong> (viaducs, sorties de forêt) : volant ferme, allure réduite.</li>
<li><strong>Canicule</strong> : jamais un enfant ou un animal seul dans le véhicule, même quelques minutes.</li>
<li><strong>Tunnel</strong> : feux de croisement, distances respectées ; en cas de fumée, évacuer à pied par les issues de secours signalées.</li>
</ul>
<div class="scene-illustration"><div data-scene="feux-nuit"></div><p class="scene-legende">Adapter sa vitesse à la portée réelle de ses feux, surtout la nuit hors agglomération.</p></div>

<h3>5. Écoconduite</h3>
<ul>
<li>Anticiper, changer de vitesse tôt, éviter les à-coups.</li>
<li>Pression des pneus correcte : moins de consommation, meilleure adhérence.</li>
<li>Couper le moteur en cas d'arrêt prolongé plutôt que de le laisser tourner inutilement.</li>
</ul>
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="vitesses">Vitesses</a>
<a href="#" data-goto-chapitre="autoroutes">Autoroutes</a>
<a href="#" data-goto-chapitre="secourisme">Secourisme</a>
</div>
`},
{
id:"usagers-vulnerables", titre:"Usagers vulnérables & deux-roues", forme:"losange",
resume:"Piétons, cyclistes, motards, enfants : les règles et réflexes spécifiques à connaître.",
html:`
<h3>1. Piétons</h3>
<ul>
<li>Hors passage protégé (à moins de 30 m d'un passage) : le piéton cède, mais restez prudent.</li>
<li>Personne à mobilité réduite : le temps nécessaire, sans précipitation imposée.</li>
<li>Canne blanche/jaune ou chien-guide : déficience visuelle, égards particuliers.</li>
<li>Sans trottoir : le piéton (landau, poussette) circule du côté le plus sûr ; adaptez votre conduite.</li>
</ul>
<div class="scene-illustration"><div data-scene="passage-pieton"></div><p class="scene-legende">Un piéton engagé ou sur le point de s'engager a priorité, même sans feux.</p></div>

<h3>2. Cyclistes</h3>
<ul>
<li>Piste cyclable marquée existante : obligatoire pour le cycliste.</li>
<li>Deux de front toléré, sauf gêne ; remise en file à l'approche d'un dépassement hors agglomération.</li>
<li>Casque : non obligatoire pour un adulte à vélo (recommandé), contrairement au deux-roues motorisé.</li>
<li>Nuit : feu avant blanc/jaune, feu arrière rouge, catadioptre.</li>
<li>Sas vélo au feu rouge : les voitures s'arrêtent avant, cet espace leur est réservé.</li>
<li>Ne jamais dépasser juste avant un carrefour ou un rond-point : attendez la sortie.</li>
</ul>
<div class="scene-illustration"><div data-scene="ecart-cycliste"></div><p class="scene-legende">L'écart latéral obligatoire pour dépasser un cycliste : 1 m en agglomération, 1,5 m hors agglomération.</p></div>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="F111"></span><span class="signe-legende">F111 — rue cyclable</span></div>
</div>

<h3>3. Motards et cyclomotoristes</h3>
<ul>
<li>Casque homologué <strong>obligatoire</strong>, conducteur et passager.</li>
<li>Catégorie de permis spécifique selon l'âge et la cylindrée (ex. AM).</li>
<li>Silhouette étroite : plus difficile à situer en distance/vitesse — vigilance accrue aux carrefours.</li>
<li>Adhérence réduite par la pluie sur marquages et plaques d'égout : gardez vos distances.</li>
</ul>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="casque"></span><span class="signe-legende">Casque homologué obligatoire</span></div>
</div>

<h3>4. Angle mort et tourner = céder</h3>
<p>En tournant à droite, le cycliste qui continue tout droit sur la piste cyclable est prioritaire — c'est le scénario d'accident le plus fréquent en ville. Contrôlez toujours l'angle mort avant de tourner.</p>
<div class="scene-illustration"><div data-scene="angle-mort-camion"></div><p class="scene-legende">Ne restez jamais dans l'angle mort d'un véhicule, surtout à son flanc droit.</p></div>

<h3>5. Enfants et transport</h3>
<ul>
<li>Moins d'1,35 m : dispositif de retenue adapté obligatoire, sur tout trajet.</li>
<li>Siège dos à la route à l'avant : airbag frontal obligatoirement désactivé.</li>
</ul>
<div class="scene-illustration"><div data-scene="siege-enfant-airbag"></div><p class="scene-legende">Un siège dos à la route à l'avant impose la désactivation de l'airbag frontal, sous peine de danger grave pour l'enfant.</p></div>

<h3>6. Transports en commun et groupes</h3>
<ul>
<li>Bus/tram quittant l'arrêt : facilitez sa réinsertion.</li>
<li>Bus scolaire à l'arrêt, feux de détresse : ralentir au pas, un enfant peut surgir.</li>
<li>Cortèges et groupes cyclistes encadrés : interdiction de les couper.</li>
</ul>
<div class="scene-illustration"><div data-scene="vehicule-prioritaire"></div><p class="scene-legende">Sirène et feux bleus : dégagez immédiatement, quitte à vous arrêter sur le côté.</p></div>
<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="depassement">Dépassement</a>
<a href="#" data-goto-chapitre="priorites">Priorités</a>
<a href="#" data-goto-chapitre="stationnement">Stationnement</a>
</div>
`},
{
id:"autoroutes", titre:"Autoroutes & voies rapides", forme:"rond",
resume:"Entrée, sortie, vitesses, interdictions spécifiques et réflexes propres à l'autoroute.",
html:`
<h3>1. Entrer et sortir</h3>
<ul>
<li><strong>Bande d'accélération</strong> : atteindre une vitesse compatible avec le trafic avant de s'insérer — c'est vous qui cédez le passage.</li>
<li><strong>Bande de décélération</strong> : réduire l'allure sur la bande elle-même, pas avant, pour ne pas surprendre ceux qui continuent.</li>
<li>Sortie manquée : jamais de freinage brutal ni de marche arrière — direction la sortie suivante.</li>
</ul>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="F5"></span><span class="signe-legende">F5 — début d'autoroute</span></div>
<div class="signe-carte"><span class="signe-icone" data-signe="F7"></span><span class="signe-legende">F7 — fin d'autoroute</span></div>
</div>

<h3>2. Vitesses et distances</h3>
<ul>
<li><strong>120 km/h</strong> maximum, <strong>70 km/h</strong> minimum (hors ralentissements/conditions dégradées).</li>
<li>Ensemble &gt; 3,5 t : limité à <strong>90 km/h</strong>.</li>
<li>Radar tronçon : vitesse moyenne entre deux points — ralentir juste avant le second point est inutile.</li>
<li>Panneaux à messages variables : même valeur légale qu'un panneau fixe.</li>
</ul>
<div class="galerie-panneaux">
<div class="signe-carte"><span class="signe-icone" data-signe="C43_120"></span><span class="signe-legende">C43 — 120 km/h</span></div>
</div>
<div class="scene-illustration"><div data-scene="radar-troncon"></div><p class="scene-legende">Le radar tronçon calcule une moyenne : inutile de ralentir juste avant le second point de mesure.</p></div>

<h3>3. Ce qui est interdit</h3>
<ul>
<li>Piétons, cyclistes, cyclomoteurs et véhicules lents.</li>
<li>Demi-tour, marche arrière, franchissement de la berme centrale.</li>
<li>Arrêt hors nécessité réelle (panne, malaise, accident).</li>
<li>Dépassement par les +7,5 t en cas de précipitations.</li>
</ul>

<h3>4. Circulation dense et incidents</h3>
<ul>
<li><strong>Tirette</strong> : deux bandes utilisées jusqu'au rétrécissement, puis insertion alternée un véhicule à la fois.</li>
<li><strong>Couloir de secours</strong> : entre la bande de gauche et sa voisine, dès que le trafic se fige.</li>
<li>Ralentissement brutal en amont d'un accident : warnings pour prévenir les suiveurs.</li>
</ul>
<div class="scene-illustration"><div data-scene="tirette"></div><p class="scene-legende">La tirette : on utilise les deux bandes jusqu'au rétrécissement, puis on s'insère un véhicule à la fois.</p></div>
<div class="scene-illustration"><div data-scene="couloir-secours"></div><p class="scene-legende">Dès que le trafic se fige, chacun serre son côté pour laisser un couloir aux secours.</p></div>

<h3>5. Panne et conditions difficiles</h3>
<ul>
<li>Panne : bande d'arrêt d'urgence si possible, gilet avant de sortir, triangle à ±100 m, tout le monde derrière la glissière.</li>
<li>Brouillard : vitesse réduite, distances augmentées, feux de croisement (jamais feux de route).</li>
<li>Longs trajets : la fatigue et la monotonie augmentent le risque d'endormissement — pauses régulières en aire de repos.</li>
</ul>
<div class="scene-illustration"><div data-scene="triangle-autoroute"></div><p class="scene-legende">En panne : triangle à bonne distance, gilet, et tout le monde derrière la glissière de sécurité.</p></div>

<div class="chapitres-lies">
<strong>Voir aussi :</strong>
<a href="#" data-goto-chapitre="priorites">Priorités</a>
<a href="#" data-goto-chapitre="vitesses">Vitesses</a>
<a href="#" data-goto-chapitre="secourisme">Secourisme</a>
</div>
`}
];

// ===== Lexique des sigles et termes techniques =====
const LEXIQUE = [
{terme:"ADR", def:"Accord européen relatif au transport international des marchandises dangereuses par route. Le panneau orange numéroté sur un camion indique la nature du danger transporté."},
{terme:"BAC / taux d'alcoolémie", def:"Concentration d'alcool dans le sang, exprimée en grammes par litre (g/l). Limite générale en Belgique : 0,5 g/l."},
{terme:"DEA", def:"Défibrillateur automatisé externe. Appareil public utilisable par toute personne, qui guide vocalement chaque geste en cas d'arrêt cardiaque."},
{terme:"MMA", def:"Masse maximale autorisée. Poids total qu'un véhicule (ou un ensemble avec remorque) est autorisé à atteindre en charge, indiqué sur le certificat d'immatriculation."},
{terme:"PLS", def:"Position latérale de sécurité. Position dans laquelle on place une victime inconsciente qui respire, pour dégager ses voies respiratoires."},
{terme:"PMR", def:"Personne à mobilité réduite. Fait partie des usagers vulnérables auxquels une attention particulière est due."},
{terme:"RC (assurance)", def:"Responsabilité civile. Assurance obligatoire qui indemnise les dommages causés à des tiers en cas d'accident."},
{terme:"SUL", def:"Sens unique limité. Rue à sens unique pour les voitures, mais ouverte aux cyclistes à contresens (signalée par le panneau additionnel M2)."},
{terme:"Zone 30 / F4a", def:"Zone où la vitesse est limitée à 30 km/h dans tout le périmètre, jusqu'au signal de fin de zone (F4b)."},
{terme:"SAS vélo", def:"Zone avancée réservée aux cyclistes devant la ligne d'arrêt des voitures à un feu rouge, pour un démarrage plus sûr et plus visible."},
{terme:"Zone bleue", def:"Zone de stationnement réglementé nécessitant un disque de stationnement, avec une durée maximale (souvent 2 h)."},
{terme:"Tirette (fermeture éclair)", def:"Technique d'insertion alternée, un véhicule à la fois, à l'approche d'un rétrécissement de bandes en circulation ralentie."},
{terme:"Couloir de secours", def:"Espace formé entre la bande de gauche et la bande voisine dès que le trafic se fige sur autoroute, pour laisser passer les véhicules de secours."},
{terme:"Radar tronçon", def:"Dispositif qui mesure la vitesse moyenne d'un véhicule entre deux points fixes distants, plutôt qu'une vitesse instantanée."},
{terme:"Angle mort", def:"Zone autour d'un véhicule non couverte par les rétroviseurs, où un autre usager (souvent un cycliste ou piéton) peut devenir invisible pour le conducteur."},
{terme:"Dutch reach", def:"Technique consistant à ouvrir la portière avec la main opposée à celle-ci, ce qui force à tourner le buste et à contrôler naturellement l'angle mort."},
{terme:"Faute grave (examen)", def:"À l'examen théorique, erreur sur une question liée aux priorités, feux, alcool, vitesses ou sens interdit, qui coûte 5 points au lieu d'1."},
];

