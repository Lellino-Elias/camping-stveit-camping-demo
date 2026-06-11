import type { CampsiteConfig } from "../types";

/**
 * Sonnenterrassen Camping St. Veit — Familie Resch, St. Veit im Pongau (Salzburger Land).
 * Inhalte zu 100 % aus der eigenen Quelle (raw/digest) abgeleitet. Du-Anrede.
 */
const IMG = "/campsites/camping-stveit";

const campingStveit: CampsiteConfig = {
  name: "Sonnenterrassen Camping St. Veit",
  shortName: "Sonnenterrasse",
  slug: "camping-stveit",
  ort: "St. Veit im Pongau",
  region: "Salzburger Land",
  brandKind: "4-Sterne Camping",
  regionLong: "Pongau · Salzburger Land · Österreich",

  heroVariant: "center",

  claim: "Camping im Heilklima auf der Salzburger Sonnenterrasse",
  claimEmphasis: "Salzburger Sonnenterrasse",
  intro:
    "Familiär geführt, auf 600 m in sonniger Panoramalage am Rande des Kurorts St. Veit im Pongau: terrassierte Komfortstellplätze, kurze Wege und ein Heilklima, in dem du richtig durchatmest.",

  logo: { src: `${IMG}/logo-91d23335e8.png`, alt: "Sonnenterrassen Camping St. Veit Logo" },

  statement: {
    text: "Auf der sonnigen Seite des Lebens — Campingurlaub im Heilklima von St. Veit.",
    emphasis: "sonnigen Seite",
  },

  pillars: [
    {
      title: "Sonnige Panoramalage",
      text: "Auf 600 m Seehöhe, terrassiert in die Salzburger Bergwelt gebettet — mit Blick, der jeden Morgen zum Frühstück passt.",
      image: { src: `${IMG}/amenity-1db8060d35.webp`, alt: "Panoramalage des Sonnenterrassen Camping St. Veit" },
    },
    {
      title: "Familiär geführt",
      text: "Familie Resch betreut den Platz persönlich — vom Check-in an der Rezeption bis zum Brötchenservice am Kiosk.",
      image: { src: `${IMG}/gallery-3376b326e7.webp`, alt: "Rezeption des Sonnenterrassen Camping St. Veit" },
    },
    {
      title: "Gemütliches Campingstüberl",
      text: "Kleine Imbisse, ein Getränk und nette Stunden in geselliger Runde — das Stüberl ist der Treffpunkt am Platz.",
      image: { src: `${IMG}/gallery-3e8797c3a3.webp`, alt: "Campingstüberl am Sonnenterrassen Camping St. Veit" },
    },
  ],

  usps: [
    "600 m Panoramalage",
    "Komfortstellplätze 90–100 m²",
    "Mediterrane Sanitäranlagen",
    "Gratis-Skibus zum Skigebiet",
    "Brötchenservice am Kiosk",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Vier Sterne, persönlich geführt",
    headingEmphasis: "persönlich geführt",
    intro:
      "Familie Resch führt den Platz selbst — mit Brötchenservice am Kiosk, mustergültigen Sanitäranlagen und einer Lage, die Sommerwandern und Winterski gleichermaßen vor die Tür legt.",
  },

  awards: [
    { label: "4-Sterne Campingplatz" },
    { label: "HolidayCheck · 100 % Weiterempfehlung" },
    { label: "camping.info · 4,8 / 5" },
  ],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-3bac8afc9b.webp`, alt: "Blick über den Sonnenterrassen Camping St. Veit in die Bergwelt" },
  },

  breather: {
    image: { src: `${IMG}/gallery-04d2cc980b.webp`, alt: "Luftaufnahme des terrassierten Campingplatzes im Winter" },
    line: "Ein Platz für jede Jahreszeit.",
  },

  camping: {
    heading: "Vom Stellplatz bis zum Skiraum",
    intro:
      "Parzellierte Komfortstellplätze, mustergültige Sanitäranlagen und alles, was den Campingtag leicht macht — sommers wie winters.",
    features: [
      {
        title: "Komfort-Stellplätze",
        text: "Parzellierte Plätze von rund 90–100 m² mit Strom, Gas, Kabel-TV, Zu- und Abwasser sowie WLAN-Zugang.",
        image: { src: `${IMG}/gallery-2f8c8eec83.webp`, alt: "Komfortstellplätze am Sonnenterrassen Camping St. Veit" },
      },
      {
        title: "Mediterrane Sanitäranlagen",
        text: "Top ausgestattete Sanitärräume im mediterranen Stil — mit Duschkabinen, Einzelwaschkabinen und Babybadewanne.",
        image: { src: `${IMG}/gallery-6ae1075ec0.webp`, alt: "Sanitäranlagen im mediterranen Stil am Campingplatz St. Veit" },
      },
      {
        title: "Wasch- & Trockenraum",
        text: "Waschmaschine, Trockner und Trockenräume — damit nasse Ausrüstung über Nacht wieder einsatzbereit ist.",
        image: { src: `${IMG}/gallery-f5d5d13cef.webp`, alt: "Waschraum mit Waschmaschinen am Camping St. Veit" },
      },
      {
        title: "Skistall für die Wintergäste",
        text: "Eigener Skistall für Ski, Snowboards und Schlitten — die Ausrüstung bleibt trocken und griffbereit am Platz.",
        image: { src: `${IMG}/gallery-00c67c5cd1.webp`, alt: "Skistall am Sonnenterrassen Camping St. Veit" },
      },
      {
        title: "Trockenraum für Skischuhe",
        text: "Eigener Trockenraum für Schibekleidung und Schischuhe — warme Schuhe machen den nächsten Pistentag leichter.",
        image: { src: `${IMG}/gallery-5759c86d78.webp`, alt: "Trockenraum für Skischuhe am Camping St. Veit" },
      },
      {
        title: "Sonnenterrasse & Kiosk",
        text: "Am Kiosk gibt es kleine Imbisse, Getränke und den Brötchenservice — die Terrasse lädt mit Bergblick zum Verweilen.",
        image: { src: `${IMG}/amenity-a67a1411b3.webp`, alt: "Terrasse am Kiosk des Sonnenterrassen Camping St. Veit" },
      },
    ],
  },

  kinder: {
    heading: "Kinder kommen voll auf ihre Kosten",
    intro:
      "Großer Spielplatz mit Trampolin, Rutsche und Ballplatz, dazu ein eigener Spiel- und Jugendraum für graue Tage — Toben gehört hier zum Tag.",
    features: [
      {
        title: "Trampolin & Ballplatz",
        text: "Großes Sicherheits-Trampolin, Basketball- und Fußballplatz — hier ist den ganzen Tag etwas los.",
        image: { src: `${IMG}/kids-f78c35e2fa.webp`, alt: "Kinder am Trampolin und Ballplatz des Camping St. Veit" },
      },
      {
        title: "Rutsche & Sandkiste",
        text: "Lange Rutsche am Hang, Sandkiste und Wippe — der Spielplatz liegt gleich am Rand des Platzes.",
        image: { src: `${IMG}/kids-244ef499d7.webp`, alt: "Spielplatz mit Rutsche und Sandkiste am Camping St. Veit" },
      },
      {
        title: "Spiel- & Jugendraum",
        text: "Bei Regen gehts nach drinnen: Spielecke, Gesellschaftsspiele und ein eigener Jugendraum sorgen für gute Laune.",
        image: { src: `${IMG}/kids-5b4376763f.webp`, alt: "Spiel- und Jugendraum am Sonnenterrassen Camping St. Veit" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Das Salzburger Land vor der Tür",
    intro:
      "Tauernradweg und Wanderrouten direkt am Platz, die Eisriesenwelt und Burg Hohenwerfen in der Nähe, im Winter der Skibus nach Ski Amadé — Abwechslung zu jeder Jahreszeit.",
    items: [
      {
        title: "Wandern im Heilklima",
        text: "Der Platz ist an ein weites Wanderroutennetz angeschlossen — vom gemütlichen Spaziergang bis zur Bergtour mit Almjause.",
        image: { src: `${IMG}/activity-70c560d871.webp`, alt: "Wandern in den Bergen rund um St. Veit im Pongau" },
      },
      {
        title: "Rad & Mountainbike",
        text: "Direkt am Tauernradweg gelegen — perfekter Ausgangspunkt für gemütliche Touren wie für fordernde Berganstiege.",
        image: { src: `${IMG}/activity-0497a1f7c7.webp`, alt: "Mountainbiken am Tauernradweg bei St. Veit" },
      },
      {
        title: "Ski Amadé & Snow Space",
        text: "Der kostenlose Skibus bringt dich direkt vom Platz nach Snow Space Salzburg — Teil des großen Skiverbunds Ski Amadé.",
        image: { src: `${IMG}/activity-256c51b14f.webp`, alt: "Skigebiet Snow Space Salzburg bei St. Veit" },
      },
      {
        title: "Schneeschuhwandern",
        text: "Abseits der Piste eigene Spuren in den Tiefschnee ziehen — geführte Schneeschuhtouren bietet der Tourismusverband an.",
        image: { src: `${IMG}/gallery-df7e1d3c82.webp`, alt: "Schneeschuhwandern im Winter rund um St. Veit" },
      },
      {
        title: "Eisriesenwelt",
        text: "Die größte Eishöhle der Welt — nur wenige Fahrminuten vom Platz entfernt, ein Naturschauspiel für die ganze Familie.",
        image: { src: `${IMG}/gallery-9a93482311.webp`, alt: "Eisriesenwelt – größte Eishöhle der Welt bei Werfen im Salzburger Land" },
      },
      {
        title: "Bergbahnen & Gipfel",
        text: "Im Sommer bringen dich Seilbahnen bequem auf die Gipfel — Höhenwanderungen mit weitem Panorama inklusive.",
        image: { src: `${IMG}/hero-4489d3321b.webp`, alt: "Bergpanorama über St. Johann im Pongau" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Pongau",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 Tauernautobahn bis Bischofshofen/St. Johann, dann weiter nach St. Veit im Pongau — der Platz liegt am Ortsrand.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Schwarzach-St. Veit an der Tauernbahn, von dort sind es nur wenige Minuten mit Bus oder Taxi.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Salzburg, rund eine Autostunde entfernt — der Mietwagen bringt dich bequem über die A10 in den Pongau.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke von der Sonnenterrasse",
    headingEmphasis: "Sonnenterrasse",
    intro:
      "Sommerwiese, Bergblick und Winterglitzern — ein paar Eindrücke vom Platz und seiner Umgebung.",
    tag: "Ganzjährig geöffnet",
    moreCount: 24,
    images: [
      { src: `${IMG}/kids-27144ec945.webp`, alt: "Spielplatz mit Bergblick am Camping St. Veit" },
      { src: `${IMG}/amenity-acd6314ecb.webp`, alt: "Terrasse mit Bergblick am Sonnenterrassen Camping St. Veit" },
      { src: `${IMG}/activity-f26103e975.webp`, alt: "Ruheoase mit Panoramablick in den Bergen um St. Veit" },
      { src: `${IMG}/activity-48d60b1a49.webp`, alt: "Sommerwanderung auf den Almwiesen rund um St. Veit" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz in St. Veit",
    headingEmphasis: "in St. Veit",
    intro:
      "Wähle Zeitraum und Personen — Familie Resch meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise: Pauschale für 2 Personen inkl. Stellplatz pro Nacht — exkl. Kurtaxe, Mobilitätsbeitrag & Strom. Alle Pauschalen ab 3 Nächten; Winter-Hauptsaison ab 4 Nächten.",
    highlight: {
      title: "Gratis-Skibus",
      text: "Im Winter bringt dich der kostenlose Skibus direkt vom Platz ins Skigebiet Snow Space Salzburg.",
    },
    categories: [
      { id: "sommer-neben", label: "Sommer · Nebensaison", perNight: 32, perExtraGuest: 14 },
      { id: "sommer-haupt", label: "Sommer · Hauptsaison", perNight: 40.5, perExtraGuest: 14 },
      { id: "winter-neben", label: "Winter · Nebensaison", perNight: 47, perExtraGuest: 16.5 },
      { id: "winter-haupt", label: "Winter · Hauptsaison", perNight: 48, perExtraGuest: 16.5 },
    ],
  },

  kontakt: {
    coords: { lat: 47.325137, lng: 13.165652 },
    tel: "+43 6415 57333",
    telHref: "tel:+43641557333",
    mail: "office@camping-stveit.at",
    facebook: "https://www.facebook.com/sonnenterrassen.camping.st.veit/",
    adresse: "Bichlwirt 12 · 5621 St. Veit im Pongau · Österreich",
    // coords bewusst weggelassen — Quelle nennt nur Google-Map-Center, keine belegten Platz-Koordinaten (Geocoding später).
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär & Einrichtungen", href: "#camping" },
      ],
    },
    { label: "Kinder", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingStveit;
