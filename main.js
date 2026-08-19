/* Official store links. */
const COMPR_LINKS = {
  chrome: "https://chromewebstore.google.com/detail/compr/opgdgckljdepjokbbdgahhbocdlkggkj",
  edge: "https://microsoftedge.microsoft.com/addons/detail/hiioneifjfpbgbnmmhjbhcnbbkpddnle"
};

const copy = {
  common: [
    [".skip-link", "Naar de inhoud", "Skip to content"],
    [".footer-bottom > span:last-child", "Geen tracking. Geen analytics.", "No tracking. No analytics."]
  ],
  home: [
    [".nav-wrap nav a:nth-child(1)", "Zo werkt het", "How it works"],
    [".nav-wrap nav a:nth-child(2)", "Demo", "Demo"],
    [".nav-wrap nav a:nth-child(3)", "Vergelijken", "Compare"],
    [".nav-wrap nav a:nth-child(4)", "Privacy", "Privacy"],
    [".nav-wrap nav a:nth-child(5)", "Vragen", "FAQ"],
    [".button-small", "Download voor Chrome — gratis", "Add to Chrome — Free"],
    [".hero .eyebrow", "<span></span> Vergelijk voordat je koopt", "<span></span> Compare before you buy", true],
    [".hero h1", "Winkel zonder <em>20 open tabbladen.</em>", "Stop shopping with <em>20 tabs open.</em>", true],
    [".hero-lead", "Bewaar kleding van verschillende webshops en vergelijk prijs, maten, kleur en materiaal in één duidelijk overzicht.", "Save clothes from different stores and compare price, sizes, colour and material in one clear shortlist."],
    [".hero .button-primary", "Download voor Chrome — gratis <span aria-hidden=\"true\">↗</span>", "Add to Chrome — It’s free <span aria-hidden=\"true\">↗</span>", true],
    [".hero .button-secondary", "Download voor Microsoft Edge", "Get it for Microsoft Edge"],
    [".hero-trust", "Gratis te gebruiken. Geen account nodig. Lokaal opgeslagen in je browser.", "Free to use. No account required. Saved locally in your browser."],
    [".desktop-note", "COMPR werkt op laptops en computers met Chrome of Microsoft Edge.", "COMPR works on desktop versions of Chrome and Microsoft Edge."],
    [".shot-toolbar span", "COMPR-extensie", "COMPR extension"],
    [".proof-grid p:nth-child(1) strong", "✓ Gratis te gebruiken", "✓ Free to use"],
    [".proof-grid p:nth-child(2) strong", "✓ Geen account nodig", "✓ No account required"],
    [".proof-grid p:nth-child(3) strong", "✓ Producten lokaal bewaard", "✓ Products saved locally"],
    [".proof-grid p:nth-child(4) strong", "✓ Officiële Chrome- en Edge-winkels", "✓ Official Chrome & Edge stores"],
    ["#demo .eyebrow", "Bekijk COMPR in actie", "See COMPR in action"],
    ["#demo h2", "Van productpagina naar één duidelijk overzicht.", "From product pages to one clear shortlist."],
    ["#demo .section-heading > p:not(.eyebrow)", "Bekijk hoe kleding uit verschillende webshops samenkomt in het vergelijkingsoverzicht van COMPR.", "See how two clothing products come together in the COMPR comparison overview."],
    [".demo-points li:nth-child(1)", "Bewaar producten tijdens het winkelen", "Save products while you browse"],
    [".demo-points li:nth-child(2)", "Bekijk ze in één overzicht", "Review them in one organised overview"],
    [".demo-points li:nth-child(3)", "Vergelijk de beschikbare productgegevens", "Compare the available product details"],
    [".demo-video-card figcaption", "De getoonde productpagina’s zijn alleen voorbeelden. De webshops zijn niet verbonden aan COMPR.", "Example product pages are shown for demonstration only. The displayed retailers are not affiliated with COMPR."],
    ["#how-it-works .eyebrow", "Zo werkt het", "How it works"],
    ["#how-it-works h2", "Drie eenvoudige stappen.", "Three steps. One confident choice."],
    [".step-card:nth-child(1) h3", "Bewaar kleding tijdens het winkelen", "Save clothes while you shop"],
    [".step-card:nth-child(1) p", "Open COMPR op een productpagina en voeg het kledingstuk toe aan je overzicht.", "Open COMPR on a clothing product page and add the item to your shortlist."],
    [".step-card:nth-child(2) h3", "Vergelijk belangrijke gegevens", "Compare the important details"],
    [".step-card:nth-child(2) p", "Bekijk prijzen, maten, kleuren en materialen overzichtelijk naast elkaar.", "View available prices, sizes, colours and materials in one organised overview."],
    [".step-card:nth-child(3) h3", "Kies je favoriet", "Choose your favourite"],
    [".step-card:nth-child(3) p", "Ga terug naar de oorspronkelijke productpagina wanneer je een keuze hebt gemaakt.", "Return to the original product page when you are ready to make your choice."],
    ["#compare .eyebrow", "Een duidelijker overzicht", "A clearer shortlist"],
    ["#compare h2", "Vergelijk wat belangrijk is, zonder onnodige informatie.", "Everything worth comparing. Nothing you don’t need."],
    [".compare-copy > p:not(.eyebrow)", "Zoek, filter en sorteer bewaarde producten zonder steeds tussen tabbladen te wisselen.", "Search, filter and sort saved items. Compare available product information without jumping between tabs."],
    [".feature-list li:nth-child(1)", "<span>✓</span> Vergelijk productprijzen", "<span>✓</span> Compare product prices", true],
    [".feature-list li:nth-child(2)", "<span>✓</span> Vergelijk kleuren, materialen en beschikbare maten", "<span>✓</span> Compare colours, materials and available sizes", true],
    [".feature-list li:nth-child(3)", "<span>✓</span> Filter en orden bewaarde producten", "<span>✓</span> Filter and organise saved products", true],
    [".feature-list li:nth-child(4)", "<span>✓</span> Ga terug naar de oorspronkelijke productpagina", "<span>✓</span> Return to the original product page", true],
    ["#privacy .eyebrow", "Eenvoudig en zorgvuldig", "Built with restraint"],
    ["#privacy h2", "Handig ontworpen. Zorgvuldig met jouw gegevens.", "Useful by design. Respectful by default."],
    [".trust-grid article:nth-child(1) h3", "Gratis te gebruiken.", "Free to use."],
    [".trust-grid article:nth-child(1) p", "Installeer COMPR en maak kosteloos je eerste vergelijking.", "Install COMPR and start building a shortlist without a subscription."],
    [".trust-grid article:nth-child(2) h3", "Geen account nodig.", "No account required."],
    [".trust-grid article:nth-child(2) p", "Je kunt COMPR gebruiken zonder een account aan te maken.", "You can use the core comparison experience without creating an account."],
    [".trust-grid article:nth-child(3) h3", "Lokaal opgeslagen.", "Saved locally."],
    [".trust-grid article:nth-child(3) p", "Je bewaarde producten staan in je browser en niet op een COMPR-server.", "Your saved products are kept in browser storage, not on a COMPR server."],
    [".privacy-link-wrap a", "Lees het volledige privacybeleid →", "Read the full Privacy Policy →"],
    ["#faq .eyebrow", "Veelgestelde vragen", "Frequently asked questions"],
    ["#faq h2", "Handig om te weten voordat je installeert.", "Good to know before you install."],
    [".faq-list article:nth-child(1) button", "Is COMPR gratis?<span aria-hidden=\"true\">+</span>", "Is COMPR free?<span aria-hidden=\"true\">+</span>", true],
    [".faq-list article:nth-child(1) p", "Ja. COMPR is momenteel gratis te installeren en te gebruiken.", "Yes. COMPR is currently free to install and use."],
    [".faq-list article:nth-child(2) button", "Moet ik een account aanmaken?<span aria-hidden=\"true\">+</span>", "Do I need to create an account?<span aria-hidden=\"true\">+</span>", true],
    [".faq-list article:nth-child(2) p", "Nee. Je kunt COMPR gebruiken zonder een account aan te maken.", "No. You can use the core COMPR experience without creating an account."],
    [".faq-list article:nth-child(3) button", "Waar worden mijn producten bewaard?<span aria-hidden=\"true\">+</span>", "Where are my saved products stored?<span aria-hidden=\"true\">+</span>", true],
    [".faq-list article:nth-child(3) p", "Je bewaarde producten worden lokaal in je browser opgeslagen.", "Your saved products are stored locally in your browser."],
    [".faq-list article:nth-child(4) button", "Welke browsers ondersteunen COMPR?<span aria-hidden=\"true\">+</span>", "Which browsers support COMPR?<span aria-hidden=\"true\">+</span>", true],
    [".faq-list article:nth-child(4) p", "COMPR is beschikbaar voor Google Chrome en Microsoft Edge.", "COMPR is available for Google Chrome and Microsoft Edge."],
    [".faq-list article:nth-child(5) button", "Wat als COMPR een product niet herkent?<span aria-hidden=\"true\">+</span>", "What happens if COMPR cannot detect a product?<span aria-hidden=\"true\">+</span>", true],
    [".faq-list article:nth-child(5) p", "Productpagina’s verschillen per webshop. Als COMPR een product niet goed herkent, kun je gewoon verder winkelen.", "Product pages can differ between webshops. If COMPR cannot detect a product correctly, you can continue shopping normally."],
    [".faq-list article:nth-child(6) button", "Werkt COMPR op een telefoon?<span aria-hidden=\"true\">+</span>", "Does COMPR work on mobile?<span aria-hidden=\"true\">+</span>", true],
    [".faq-list article:nth-child(6) p", "COMPR is een browserextensie voor laptops en computers met Chrome of Microsoft Edge.", "COMPR is a browser extension for desktop versions of Google Chrome and Microsoft Edge."],
    ["#download .eyebrow", "Klaar om te beginnen?", "Ready when you are"],
    ["#download h2", "Sluit de extra tabbladen.<br>Bewaar de beste opties.", "Close the extra tabs.<br>Keep the better options.", true],
    ["#download > .download-card > p:not(.eyebrow):not(.cta-trust)", "Voeg COMPR gratis toe aan je browser en vergelijk kleding voortaan overzichtelijker.", "Add COMPR to your browser for free and make your next shopping shortlist easier to understand."],
    ["#download .button-light", "Download voor Chrome — gratis <span aria-hidden=\"true\">↗</span>", "Add to Chrome — It’s free <span aria-hidden=\"true\">↗</span>", true],
    ["#download .button-outline", "Download voor Microsoft Edge", "Get it for Microsoft Edge"],
    [".cta-trust", "Geen account nodig · Gratis te gebruiken · Lokaal opgeslagen", "No account required · Free to use · Saved locally"],
    [".footer-grid > div > p", "Vergelijk voordat je koopt.", "Compare before you buy."],
    [".footer-grid nav a:nth-child(1)", "Privacybeleid", "Privacy Policy"]
  ],
  privacy: [
    [".nav-wrap .text-link", "← Terug naar home", "← Back to home"],
    [".legal-content .eyebrow", "Privacybeleid", "Privacy Policy"],
    [".legal-content h1", "Jouw overzicht blijft van jou.", "Your shortlist stays yours."],
    [".legal-date", "Laatst bijgewerkt: 16 augustus 2026", "Last updated: August 16, 2026"],
    [".legal-content h2:nth-of-type(1)", "Gegevens die COMPR gebruikt", "Data COMPR accesses"],
    [".legal-content h2:nth-of-type(1) + p", "Wanneer je COMPR opent op een productpagina, leest de extensie openbare productinformatie zoals naam, prijs, merk, afbeelding, kleur, materiaal, maten, categorie, beschikbaarheid, webshop en productlink.", "When you open COMPR on a product page, the extension reads publicly available product information such as the product name, price, brand, image, colour, material, sizes, category, availability, store name and product URL."],
    [".legal-content h2:nth-of-type(2)", "Lokale opslag", "Local storage"],
    [".legal-content h2:nth-of-type(2) + p", "Bewaarde producten en voorkeuren worden lokaal in je browser opgeslagen. COMPR vereist momenteel geen account en stuurt je bewaarde producten niet naar een externe COMPR-server.", "Saved products and preferences are stored locally in your browser. COMPR does not currently require an account and does not send your saved products to an external COMPR server."],
    [".legal-content h2:nth-of-type(3)", "Externe diensten", "External services"],
    [".legal-content h2:nth-of-type(3) + p", "COMPR kan je naar de oorspronkelijke webshop en Trustpilot sturen wanneer je daarvoor kiest. Voor valutaomrekening downloadt COMPR openbare referentiekoersen van de Europese Centrale Bank. Daarbij worden geen bewaarde productgegevens meegestuurd.", "COMPR can link to the original webshop and Trustpilot when you choose to open those pages. For currency conversion, COMPR downloads public reference exchange rates from the European Central Bank. Saved product information is not included in that request."],
    [".legal-content h2:nth-of-type(4)", "Tracking", "Tracking"],
    [".legal-content h2:nth-of-type(4) + p", "Deze website gebruikt geen tracking, cookies of analytics.", "This website does not use tracking, cookies or analytics."],
    [".legal-content h2:nth-of-type(5)", "Contact", "Contact"],
    [".legal-content h2:nth-of-type(5) + p", "Voor privacyvragen kun je de contactgegevens op de winkelpagina van de COMPR-browserextensie gebruiken.", "For privacy questions, use the support contact listed on the COMPR browser-extension store page."],
    [".footer-bottom a", "Home", "Home"]
  ]
};

const extraCopy = {
  de: {
    common: [[".skip-link","Zum Inhalt"],[".footer-bottom > span:last-child","Kein Tracking. Keine Analyse."]],
    home: [
      [".nav-wrap nav a:nth-child(1)","So funktioniert es"],[".nav-wrap nav a:nth-child(2)","Demo"],[".nav-wrap nav a:nth-child(3)","Vergleichen"],[".nav-wrap nav a:nth-child(4)","Datenschutz"],[".nav-wrap nav a:nth-child(5)","Fragen"],
      [".button-small","Für Chrome – kostenlos"],[".hero .eyebrow","<span></span> Erst vergleichen, dann kaufen",true],[".hero h1","Shoppen ohne <em>20 offene Tabs.</em>",true],
      [".hero-lead","Speichere Kleidung aus verschiedenen Shops und vergleiche Preis, Größen, Farbe und Material in einer klaren Übersicht."],[".hero .button-primary","Für Chrome – kostenlos <span aria-hidden=\"true\">↗</span>",true],[".hero .button-secondary","Für Microsoft Edge herunterladen"],
      [".hero-trust","Kostenlos. Kein Konto nötig. Lokal in deinem Browser gespeichert."],[".desktop-note","COMPR funktioniert auf Computern mit Chrome oder Microsoft Edge."],[".shot-toolbar span","COMPR-Erweiterung"],
      [".proof-grid p:nth-child(1) strong","✓ Kostenlos"],[".proof-grid p:nth-child(2) strong","✓ Kein Konto nötig"],[".proof-grid p:nth-child(3) strong","✓ Lokal gespeichert"],[".proof-grid p:nth-child(4) strong","✓ Offizielle Chrome- und Edge-Stores"],
      ["#demo .eyebrow","COMPR in Aktion"],["#demo h2","Von der Produktseite zu einer klaren Übersicht."],["#demo .section-heading > p:not(.eyebrow)","Sieh dir an, wie Kleidung aus verschiedenen Shops in der COMPR-Übersicht zusammenkommt."],
      [".demo-points li:nth-child(1)","Produkte beim Shoppen speichern"],[".demo-points li:nth-child(2)","Alles in einer Übersicht ansehen"],[".demo-points li:nth-child(3)","Verfügbare Produktdetails vergleichen"],[".demo-video-card figcaption","Die gezeigten Produktseiten sind nur Beispiele. Die Shops sind nicht mit COMPR verbunden."],
      ["#how-it-works .eyebrow","So funktioniert es"],["#how-it-works h2","Drei einfache Schritte."],[".step-card:nth-child(1) h3","Kleidung beim Shoppen speichern"],[".step-card:nth-child(1) p","Öffne COMPR auf einer Produktseite und füge das Kleidungsstück deiner Übersicht hinzu."],
      [".step-card:nth-child(2) h3","Wichtige Details vergleichen"],[".step-card:nth-child(2) p","Vergleiche Preise, Größen, Farben und Materialien übersichtlich nebeneinander."],[".step-card:nth-child(3) h3","Favoriten auswählen"],[".step-card:nth-child(3) p","Kehre zur ursprünglichen Produktseite zurück, wenn du dich entschieden hast."],
      ["#compare .eyebrow","Eine klarere Auswahl"],["#compare h2","Vergleiche, was wichtig ist – ohne unnötige Ablenkung."],[".compare-copy > p:not(.eyebrow)","Suche, filtere und sortiere gespeicherte Produkte, ohne ständig Tabs zu wechseln."],
      [".feature-list li:nth-child(1)","<span>✓</span> Produktpreise vergleichen",true],[".feature-list li:nth-child(2)","<span>✓</span> Farben, Materialien und Größen vergleichen",true],[".feature-list li:nth-child(3)","<span>✓</span> Gespeicherte Produkte filtern und ordnen",true],[".feature-list li:nth-child(4)","<span>✓</span> Zur ursprünglichen Produktseite zurückkehren",true],
      ["#privacy .eyebrow","Einfach und sorgfältig"],["#privacy h2","Hilfreich entwickelt. Sorgfältig mit deinen Daten."],[".trust-grid article:nth-child(1) h3","Kostenlos."],[".trust-grid article:nth-child(1) p","Installiere COMPR und erstelle kostenlos deinen ersten Vergleich."],
      [".trust-grid article:nth-child(2) h3","Kein Konto nötig."],[".trust-grid article:nth-child(2) p","Du kannst COMPR ohne Registrierung verwenden."],[".trust-grid article:nth-child(3) h3","Lokal gespeichert."],[".trust-grid article:nth-child(3) p","Deine Produkte bleiben im Browser und nicht auf einem COMPR-Server."],[".privacy-link-wrap a","Vollständige Datenschutzerklärung lesen →"],
      ["#faq .eyebrow","Häufige Fragen"],["#faq h2","Gut zu wissen, bevor du installierst."],[".faq-list article:nth-child(1) button","Ist COMPR kostenlos?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(1) p","Ja. COMPR kann derzeit kostenlos installiert und genutzt werden."],
      [".faq-list article:nth-child(2) button","Brauche ich ein Konto?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(2) p","Nein. Du kannst COMPR ohne Konto verwenden."],[".faq-list article:nth-child(3) button","Wo werden meine Produkte gespeichert?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(3) p","Deine gespeicherten Produkte werden lokal in deinem Browser abgelegt."],
      [".faq-list article:nth-child(4) button","Welche Browser werden unterstützt?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(4) p","COMPR ist für Google Chrome und Microsoft Edge verfügbar."],[".faq-list article:nth-child(5) button","Was passiert, wenn ein Produkt nicht erkannt wird?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(5) p","Produktseiten unterscheiden sich je nach Shop. Du kannst normal weitershoppen, wenn COMPR ein Produkt nicht richtig erkennt."],
      [".faq-list article:nth-child(6) button","Funktioniert COMPR auf dem Handy?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(6) p","COMPR ist eine Browser-Erweiterung für Computer mit Chrome oder Microsoft Edge."],
      ["#download .eyebrow","Bereit?"],["#download h2","Schließe die extra Tabs.<br>Behalte die besten Optionen.",true],["#download > .download-card > p:not(.eyebrow):not(.cta-trust)","Füge COMPR kostenlos zu deinem Browser hinzu und vergleiche Kleidung übersichtlicher."],["#download .button-light","Für Chrome – kostenlos <span aria-hidden=\"true\">↗</span>",true],["#download .button-outline","Für Microsoft Edge herunterladen"],[".cta-trust","Kein Konto · Kostenlos · Lokal gespeichert"],[".footer-grid > div > p","Erst vergleichen, dann kaufen."],[".footer-grid nav a:nth-child(1)","Datenschutz"]
    ],
    privacy: [[".nav-wrap .text-link","← Zurück zur Startseite"],[".legal-content .eyebrow","Datenschutzerklärung"],[".legal-content h1","Deine Auswahl bleibt deine."],[".legal-date","Zuletzt aktualisiert: 16. August 2026"],[".legal-content h2:nth-of-type(1)","Daten, auf die COMPR zugreift"],[".legal-content h2:nth-of-type(1) + p","Wenn du COMPR auf einer Produktseite öffnest, liest die Erweiterung öffentlich verfügbare Produktinformationen wie Name, Preis, Marke, Bild, Farbe, Material, Größen, Kategorie, Verfügbarkeit, Shop und Produkt-URL."],[".legal-content h2:nth-of-type(2)","Lokale Speicherung"],[".legal-content h2:nth-of-type(2) + p","Gespeicherte Produkte und Einstellungen bleiben lokal in deinem Browser. COMPR braucht derzeit kein Konto und sendet deine Produkte nicht an einen externen COMPR-Server."],[".legal-content h2:nth-of-type(3)","Externe Dienste"],[".legal-content h2:nth-of-type(3) + p","COMPR kann dich auf Wunsch zum ursprünglichen Shop oder zu Trustpilot führen. Für Währungsumrechnungen lädt COMPR öffentliche Referenzkurse der Europäischen Zentralbank. Gespeicherte Produktdaten werden dabei nicht mitgesendet."],[".legal-content h2:nth-of-type(4)","Tracking"],[".legal-content h2:nth-of-type(4) + p","Diese Website verwendet kein Tracking, keine Cookies und keine Analyse."],[".legal-content h2:nth-of-type(5)","Kontakt"],[".legal-content h2:nth-of-type(5) + p","Bei Datenschutzfragen nutze bitte die Support-Kontaktdaten auf der Store-Seite der COMPR-Erweiterung."]]
  },
  fr: {
    common: [[".skip-link","Aller au contenu"],[".footer-bottom > span:last-child","Aucun suivi. Aucune analyse."]],
    home: [
      [".nav-wrap nav a:nth-child(1)","Comment ça marche"],[".nav-wrap nav a:nth-child(2)","Démo"],[".nav-wrap nav a:nth-child(3)","Comparer"],[".nav-wrap nav a:nth-child(4)","Confidentialité"],[".nav-wrap nav a:nth-child(5)","Questions"],
      [".button-small","Ajouter à Chrome — gratuit"],[".hero .eyebrow","<span></span> Comparez avant d’acheter",true],[".hero h1","Faites vos achats sans <em>20 onglets ouverts.</em>",true],[".hero-lead","Enregistrez des vêtements de plusieurs boutiques et comparez prix, tailles, couleurs et matières dans une liste claire."],
      [".hero .button-primary","Ajouter à Chrome — gratuit <span aria-hidden=\"true\">↗</span>",true],[".hero .button-secondary","Télécharger pour Microsoft Edge"],[".hero-trust","Gratuit. Aucun compte requis. Enregistré localement dans votre navigateur."],[".desktop-note","COMPR fonctionne sur ordinateur avec Chrome ou Microsoft Edge."],[".shot-toolbar span","Extension COMPR"],
      [".proof-grid p:nth-child(1) strong","✓ Gratuit"],[".proof-grid p:nth-child(2) strong","✓ Aucun compte requis"],[".proof-grid p:nth-child(3) strong","✓ Enregistré localement"],[".proof-grid p:nth-child(4) strong","✓ Boutiques officielles Chrome et Edge"],
      ["#demo .eyebrow","Voir COMPR en action"],["#demo h2","D’une page produit à une liste claire."],["#demo .section-heading > p:not(.eyebrow)","Découvrez comment des vêtements de plusieurs boutiques se retrouvent dans la liste COMPR."],[".demo-points li:nth-child(1)","Enregistrez des produits pendant vos achats"],[".demo-points li:nth-child(2)","Retrouvez-les dans une seule liste"],[".demo-points li:nth-child(3)","Comparez les informations disponibles"],[".demo-video-card figcaption","Les pages produit présentées sont des exemples. Les boutiques ne sont pas affiliées à COMPR."],
      ["#how-it-works .eyebrow","Comment ça marche"],["#how-it-works h2","Trois étapes simples."],[".step-card:nth-child(1) h3","Enregistrez vos vêtements"],[".step-card:nth-child(1) p","Ouvrez COMPR sur une page produit et ajoutez l’article à votre liste."],[".step-card:nth-child(2) h3","Comparez les détails utiles"],[".step-card:nth-child(2) p","Comparez clairement les prix, tailles, couleurs et matières."],[".step-card:nth-child(3) h3","Choisissez votre préféré"],[".step-card:nth-child(3) p","Revenez à la page produit d’origine lorsque vous avez fait votre choix."],
      ["#compare .eyebrow","Une liste plus claire"],["#compare h2","Comparez l’essentiel, sans informations inutiles."],[".compare-copy > p:not(.eyebrow)","Recherchez, filtrez et triez vos produits sans passer constamment d’un onglet à l’autre."],[".feature-list li:nth-child(1)","<span>✓</span> Comparez les prix",true],[".feature-list li:nth-child(2)","<span>✓</span> Comparez couleurs, matières et tailles",true],[".feature-list li:nth-child(3)","<span>✓</span> Filtrez et organisez vos produits",true],[".feature-list li:nth-child(4)","<span>✓</span> Revenez à la page produit d’origine",true],
      ["#privacy .eyebrow","Simple et respectueux"],["#privacy h2","Utile par nature. Respectueux de vos données."],[".trust-grid article:nth-child(1) h3","Gratuit."],[".trust-grid article:nth-child(1) p","Installez COMPR et créez gratuitement votre première comparaison."],[".trust-grid article:nth-child(2) h3","Aucun compte requis."],[".trust-grid article:nth-child(2) p","Utilisez COMPR sans créer de compte."],[".trust-grid article:nth-child(3) h3","Enregistré localement."],[".trust-grid article:nth-child(3) p","Vos produits restent dans votre navigateur, pas sur un serveur COMPR."],[".privacy-link-wrap a","Lire la politique de confidentialité →"],
      ["#faq .eyebrow","Questions fréquentes"],["#faq h2","Bon à savoir avant l’installation."],[".faq-list article:nth-child(1) button","COMPR est-il gratuit ?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(1) p","Oui. COMPR est actuellement gratuit à installer et à utiliser."],[".faq-list article:nth-child(2) button","Dois-je créer un compte ?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(2) p","Non. Vous pouvez utiliser COMPR sans compte."],[".faq-list article:nth-child(3) button","Où mes produits sont-ils enregistrés ?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(3) p","Vos produits sont enregistrés localement dans votre navigateur."],[".faq-list article:nth-child(4) button","Quels navigateurs sont compatibles ?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(4) p","COMPR est disponible pour Google Chrome et Microsoft Edge."],[".faq-list article:nth-child(5) button","Que se passe-t-il si un produit n’est pas reconnu ?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(5) p","Les pages diffèrent selon les boutiques. Vous pouvez continuer vos achats normalement si COMPR ne reconnaît pas correctement un produit."],[".faq-list article:nth-child(6) button","COMPR fonctionne-t-il sur mobile ?<span aria-hidden=\"true\">+</span>",true],[".faq-list article:nth-child(6) p","COMPR est une extension pour ordinateur, compatible avec Chrome et Microsoft Edge."],
      ["#download .eyebrow","Prêt à commencer ?"],["#download h2","Fermez les onglets en trop.<br>Gardez les meilleures options.",true],["#download > .download-card > p:not(.eyebrow):not(.cta-trust)","Ajoutez gratuitement COMPR à votre navigateur et comparez vos vêtements plus facilement."],["#download .button-light","Ajouter à Chrome — gratuit <span aria-hidden=\"true\">↗</span>",true],["#download .button-outline","Télécharger pour Microsoft Edge"],[".cta-trust","Aucun compte · Gratuit · Enregistré localement"],[".footer-grid > div > p","Comparez avant d’acheter."],[".footer-grid nav a:nth-child(1)","Confidentialité"]
    ],
    privacy: [[".nav-wrap .text-link","← Retour à l’accueil"],[".legal-content .eyebrow","Politique de confidentialité"],[".legal-content h1","Votre sélection reste la vôtre."],[".legal-date","Dernière mise à jour : 16 août 2026"],[".legal-content h2:nth-of-type(1)","Données utilisées par COMPR"],[".legal-content h2:nth-of-type(1) + p","Lorsque vous ouvrez COMPR sur une page produit, l’extension lit les informations publiques comme le nom, le prix, la marque, l’image, la couleur, la matière, les tailles, la catégorie, la disponibilité, la boutique et l’URL."],[".legal-content h2:nth-of-type(2)","Stockage local"],[".legal-content h2:nth-of-type(2) + p","Les produits et préférences sont stockés localement dans votre navigateur. COMPR ne demande actuellement aucun compte et n’envoie pas vos produits à un serveur COMPR externe."],[".legal-content h2:nth-of-type(3)","Services externes"],[".legal-content h2:nth-of-type(3) + p","COMPR peut ouvrir la boutique d’origine ou Trustpilot à votre demande. Pour convertir les devises, COMPR télécharge les taux publics de la Banque centrale européenne. Aucune donnée produit n’est incluse dans cette requête."],[".legal-content h2:nth-of-type(4)","Suivi"],[".legal-content h2:nth-of-type(4) + p","Ce site n’utilise ni suivi, ni cookies, ni outil d’analyse."],[".legal-content h2:nth-of-type(5)","Contact"],[".legal-content h2:nth-of-type(5) + p","Pour toute question de confidentialité, utilisez le contact d’assistance indiqué sur la page de l’extension COMPR."]]
  }
};

function updateText(selector, value, useHtml = false) {
  document.querySelectorAll(selector).forEach(node => {
    if (useHtml) node.innerHTML = value;
    else node.textContent = value;
  });
}

function setLanguage(language) {
  const lang = ["en", "nl", "de", "fr"].includes(language) ? language : "en";
  const legalPage = Boolean(document.querySelector(".legal-page"));
  [...copy.common, ...(legalPage ? copy.privacy : copy.home)].forEach(([selector, nl, en, useHtml]) => updateText(selector, lang === "nl" ? nl : en, useHtml));
  if (extraCopy[lang]) [...extraCopy[lang].common, ...(legalPage ? extraCopy[lang].privacy : extraCopy[lang].home)].forEach(([selector, value, useHtml]) => updateText(selector, value, useHtml));
  document.documentElement.lang = lang;
  const titles = {
    en: legalPage ? "Privacy Policy — COMPR" : "COMPR — Save and compare clothes across webshops",
    nl: legalPage ? "Privacybeleid — COMPR" : "COMPR — Kleding bewaren en vergelijken",
    de: legalPage ? "Datenschutzerklärung — COMPR" : "COMPR — Kleidung speichern und vergleichen",
    fr: legalPage ? "Politique de confidentialité — COMPR" : "COMPR — Enregistrez et comparez vos vêtements"
  };
  document.title = titles[lang];
  document.querySelectorAll("[data-language-select]").forEach(select => { select.value = lang; });
  const description = document.querySelector('meta[name="description"]');
  if (description && !legalPage) description.content = lang === "nl"
    ? "Bewaar en vergelijk kleding van verschillende webshops in één duidelijk overzicht met COMPR. Gratis voor Chrome en Microsoft Edge."
    : "COMPR helps you save and compare clothes from different webshops in one clear shortlist. Free for Chrome and Microsoft Edge.";
  document.querySelectorAll("video").forEach(video => Array.from(video.textTracks).forEach(track => {
    track.mode = track.language === lang ? "showing" : "disabled";
  }));
}

const savedLanguage = localStorage.getItem("compr-language");
setLanguage(savedLanguage || "en");
document.querySelectorAll("[data-language-select]").forEach(select => select.addEventListener("change", () => {
  localStorage.setItem("compr-language", select.value);
  setLanguage(select.value);
}));

document.querySelectorAll("[data-store]").forEach(link => { if (COMPR_LINKS[link.dataset.store]) link.href = COMPR_LINKS[link.dataset.store]; });
document.querySelectorAll("[data-year]").forEach(node => { node.textContent = new Date().getFullYear(); });
document.querySelectorAll(".faq-list button").forEach(button => button.addEventListener("click", () => {
  const expanded = button.getAttribute("aria-expanded") === "true";
  const answer = button.closest("article")?.querySelector(".faq-answer");
  button.setAttribute("aria-expanded", String(!expanded));
  if (answer) answer.hidden = expanded;
}));

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");
if (reducedMotion || !("IntersectionObserver" in window)) revealItems.forEach(item => item.classList.add("is-visible"));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  }), { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}
