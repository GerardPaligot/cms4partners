export default `
# CONVENTION DE PARTENARIAT

**Entre les soussignés :**

L'association **Google Developer Group Lille (GDG Lille)**, régie par la loi 1901, déclarée à la Préfecture de Lille le 19 août 2016 et publiée au Journal Officiel du 3 septembre 2016, dont le siège social est à <%= GDG_CITY %>. Représentée par **Emmanuel DEMEY** , en sa qualité de président d'une part,

Ci-après "L'Association".


Et d'autre part l'entreprise : **<%= COMPANY %>**, société inscrite sous le n° <%= SIRET %>, dont le siège social est **<%= COMPANY_ADDRESS %>, <%= COMPANY_CP %> - <%= COMPANY_CITY %>**. Représentée par **<%= CONTACT %>**, **<%= ROLE %>**.

Ci-après "le Partenaire". 


**Il a été convenu et arrêté ce qui suit :**


## I - OBJET DE LA CONVENTION

Cette convention est destinée à régir, de la manière la plus complète possible, la relation de partenariat conclue entre l'association et le partenaire, en vue principalement de l’organisation de l'évènement **<%= EVENT_NAME %> <%= EVENT_EDITION %>**.

Elle précise de façon non exhaustive les droits et les obligations principaux des deux contractants, étant entendu que ceux-ci peuvent évoluer au fil du temps conformément à l'article VI - Modifications ; l’objectif principal étant que le partenariat qui unit les deux parties se développe au maximum et dans le sens des intérêts de chacun.


## II - OBLIGATIONS DE L'ASSOCIATION


D’une manière générale, l'association s’engage à donner une forte visibilité du partenaire sur les supports de communication Internet de l’association :

<% if (SPONSORING === 'Platinium') { %>- Stand (18m²) le jour de la conférence <% } %>
<% if (SPONSORING === 'Gold') { %>- Stand (12m²) le jour de la conférence <% } %>
<% if (SPONSORING === 'Silver') { %>- Stand (9m²) le jour de la conférence <% } %>
<% if (SPONSORING === 'Platinium') { %>- 2 mentions sur nos réseaux sociaux et RT le jour J<% } %>
<% if (SPONSORING === 'Gold') { %>- 1 mention sur nos réseaux sociaux <% } %>
<% if (SPONSORING === 'Silver') { %>- 1 mention sur nos réseaux sociaux <% } %>
<% if (SPONSORING === 'Bronze' || SPONSORING === 'Party') { %>- 1 mention sur nos réseaux sociaux <% } %>
<% if (SPONSORING === 'Party') { %>- 1 intervention pendant la soirée <% } %>
<% if (SPONSORING === 'Party') { %>- 8 tickets supplémentaires pour la soirée <% } %>
<% if (SPONSORING === 'Platinium') { %>- 5 entrées stand <% } %>
<% if (SPONSORING === 'Gold') { %>- 3 entrées stand <% } %>
<% if (SPONSORING === 'Silver') { %>- 2 entrées stand <% } %>
<% if (SPONSORING === 'Platinium') { %>- 12 entrées standards <% } %>
<% if (SPONSORING === 'Gold') { %>- 10 entrées standards <% } %>
<% if (SPONSORING === 'Silver') { %>- 6 entrées standards <% } %>
<% if (SPONSORING === 'Bronze' || SPONSORING === 'Party') { %>- 4 entrées standards <% } %>
- Logo partenaire sur l'application mobile et sur le site web <%= GDG_WEBSITE %>
- Logo sur les écrans (salle conférence)
<% if (SPONSORING === 'Platinium') { %>- Personnalisation de vos communications <% } %>
<% if (SPONSORING === 'Gold') { %>- Personnalisation de vos communications <% } %>
<% if (SPONSORING === 'Silver') { %>- Personnalisation de vos communications <% } %>
<% if (SPONSORING === 'Platinium') { %>- Offres d'emploi sur WLD <% } %>
<% if (SPONSORING === 'Gold') { %>- Offres d'emploi sur WLD <% } %>
<% if (SPONSORING === 'Silver') { %>- Offres d'emploi sur WLD <% } %>
<% if (SPONSORING === 'Platinium') { %>- Logo sur les replays <% } %>
<% if (SPONSORING === 'Gold') { %>- Logo sur les replays <% } %>
<% if (SPONSORING !== 'Bronze' && SPONSORING !== 'Party') { %>
L'association s'engage à fournir une multiprise, une table et deux chaises pour le stand. Le reste du matériel sera à la charge du partenaire. 
<% } %>

Les obligations citées précédemment seront appliquées à la reception du paiement réalisé par le partenaire. Le paiement devra être réalisé avant le 13 mai 2024. 


## III - OBLIGATIONS DU PARTENAIRE


Le partenaire s’engage en contrepartie à verser à l'association le montant suivant, en vue de la réalisation de l’objet de la convention : <%= SPONSORING_TEXT %> euros TTC (<%= SPONSORING_NUMBER %> €). Le paiement du montant sera fait selon les conditions suivantes : paiement à la signature de la convention de partenariat et dans un délai de 45 jours. Ce délai dépassé, nous serions dans l'obligation de rompre notre partenariat.

Comme indiqué sur le devis, vous trouverez ci-dessous les informations bancaires de l'association : 
- RIB : 30027 17015 00020671801 21
- IBAN FR7630027170150002067180121
- BIC CMCIFRPP

<% if (SPONSORING !== 'Bronze' && SPONSORING !== 'Party') { %>
Le partenaire s'engage à installer son stand le mercredi 5 juin après-midi. Une équipe de sécurité sera présente la nuit pour surveiller la zone d'expositions. 

Le stand doit respecter les contraintes suivante : 
- ne pas dépasser 2.4m de hauteur sur la panneau du fond
- ne pas dépasser 1.2m de hauteur sur les côtés. 
<% } %>


## IV - DUREE DE LA CONVENTION


Le présent partenariat conclu entre l'association et partenaire débutera à la signature de la présente Convention et s’achèvera de plein droit et sans formalité le <%= END_DATE %>.


## V - RESILIATION


Chacune des parties pourra résilier la convention, de plein droit, à tout moment et sans préavis, au cas où l’autre partie manquerait gravement à ses obligations contractuelles. Cette résiliation devra être précédée d’une mise en demeure par lettre recommandée avec A/R restée sans effet durant 30 jours calendaires.

La résiliation à l’initiative du partenaire ne peut en aucun cas donner droit à la restitution de tout ou partie du montant versé par le partenaire lors de la signature de la présente convention, sauf en cas de résiliation liée à un manquement grave de l'Association.


## VI - ANNULATION


L'association sera contrainte d'annuler l'évènement en cas de force majeure empêchant l'exécution de l'évènement dans le lieu d'accueil prévu initialement. Seront considérés comme cas de force majeure, les évènement qui respecteront les conditions de l'Article 1148 du Code Civil ou les évènement suivants : grève, lock-out, incendie, inondation, avarie de matériel, émeute, guerre, arrêt de force motrice, suspension des télécommunications. Il en est de même en cas de pandémie. Dans ce cas, l'association s'engage à reprogrammer l'évènement à une date ultérieure dans l'année qui suit. Le partenaire pourra alors choisir soit d'être remboursé totalement du montant défini dans la section III - OBLIGATIONS DU PARTENAIRE, soit de reconduire son partenariat à la date qui aura été reprogrammé par l'Association. 

## VII - MODIFICATIONS


A la demande de l’une ou l’autre partie, des modifications pourront être apportées à la présente convention moyennant accord écrit entre les parties. Ces modifications seront considérées comme étant des modalités complémentaires de la présente convention et en feront partie intégrante.


## VIII : CONFIDENTIALITE


Chacune des parties s’engage à considérer les dispositions de la présente convention comme étant confidentielles et à ne pas les communiquer à des tiers sans l’accord exprès et écrit de l’autre partie.


## IX : LITIGES


La présente Convention est soumise à la loi française. Les deux parties s’engagent à régler à l’amiable tout différent éventuel qui pourrait résulter de la présente convention. En cas d’échec, les tribunaux de Lille seront seuls compétents.


Fait à Lille le <%= DATE %> en deux exemplaires originaux

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L'association&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Le partenaire

<img src="data:image/png;base64,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
" width="100px" />
`;
