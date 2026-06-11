import type { CampsiteConfig } from "../../../../../../camping-template/src/content/types";

/**
 * Sonnenterrassen Camping St. Veit — Familie Resch.
 * 4-Sterne Terrassen-Campingplatz auf 600 m im heilklimatischen Kurort St. Veit im Pongau.
 * Inhalte zu 100 % aus raw/digest abgeleitet. KEIN See (Bergplatz). Du-Anrede durchgehend.
 */
const IMG = "/campsites/camping-stveit";

const campingStveit: CampsiteConfig = {
  name: "Sonnenterrassen Camping St. Veit",
  shortName: "Sonnenterrasse",
  slug: "camping-stveit",
  ort: "St. Veit im Pongau",
  region: "Salzburger Land",
  brandKind: "4-Sterne Campingplatz",
  regionLong: "St. Veit im Pongau · Salzburger Land · Österreich",

  theme: "editorial",
  heroVariant: "center",

  claim: "Camping auf der Salzburger Sonnenterrasse",
  claimEmphasis: "Salzburger Sonnenterrasse",
  intro:
    "Familiär geführter 4-Sterne-Terrassenplatz auf 600 m Seehöhe, am Rand des heilklimatischen Kurorts St. Veit im Pongau. Parzellierte Komfortstellplätze, Bergpanorama und kurze Wege zu Wandern, Rad und Ski Amadé.",

  logo: { src: `${IMG}/logo-91d23335e8.png`, alt: "Sonnenterrassen Camping St. Veit Logo" },

  statement: {
    text: "Morgens das Bergpanorama vor dem Vorzelt, im Winter der Skibus direkt am Platz.",
    emphasis: "direkt am Platz",
  },

  pillars: [
    {
      title: "600 m über dem Alltag",
      text: "Terrassiertes, mit Bäumen und Sträuchern bepflanztes Gelände und Panoramablick über das Pongauer Bergland — Campingruhe auf der sonnigen Seite.",
      image: { src: `${IMG}/gallery-2f8c8eec83.webp`, alt: "Blick über den terrassierten Campingplatz St. Veit ins Pongauer Bergland" },
    },
    {
      title: "Sanitär im mediterranen Stil",
      text: "Top ausgestattete, mustergültige Sanitärräume mit Babybad und Wickelraum — gepflegt und im warmen mediterranen Stil gehalten.",
      image: { src: `${IMG}/gallery-6ae1075ec0.webp`, alt: "Sanitäranlage im mediterranen Stil am Camping St. Veit" },
    },
    {
      title: "Familie Resch persönlich",
      text: "Ein familiär geführter Betrieb mit persönlicher Betreuung, Kiosk und Brötchenservice — hier kennt man dich noch beim Namen.",
      image: { src: `${IMG}/amenity-a67a1411b3.webp`, alt: "Kiosk und Sonnenterrasse mit Bergblick am Camping St. Veit" },
    },
  ],

  usps: [
    "4-Sterne Komfort",
    "600 m Panoramalage",
    "Parzellierte Stellplätze",
    "Gratis Skibus zum Skigebiet",
    "Brötchenservice & Kiosk",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Warum Gäste zu 100 % weiterempfehlen",
    headingEmphasis: "100 %",
    intro:
      "Auf HolidayCheck sprechen 100 % der Gäste eine Weiterempfehlung aus, auf camping.info stehen 4,8 von 5 Sternen. Dahinter steckt ein 4-Sterne-Platz, der seit Jahren von Familie Resch persönlich geführt wird.",
  },

  awards: [
    { label: "4-Sterne Komfort-Campingplatz" },
    { label: "HolidayCheck · 100 % Weiterempfehlung" },
  ],

  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-3bac8afc9b.webp`, alt: "Sommerlicher Blick über den Terrassen-Campingplatz St. Veit mit Bergpanorama" },
  },

  breather: {
    image: { src: `${IMG}/amenity-df771d4782.webp`, alt: "Sonnenterrasse mit Bergblick am Camping St. Veit" },
    line: "Durchatmen im Heilklima — Berge ringsum, Ruhe inklusive.",
  },

  camping: {
    heading: "Dein Platz auf der Terrasse",
    intro:
      "Alle Stellplätze sind ca. 90–100 m² groß, parzelliert und voll ausgestattet — dazu mustergültige Sanitärräume und alles, was den Campingtag bequem macht.",
    features: [
      {
        title: "Komfortstellplätze, 90–100 m²",
        text: "Parzellierte Plätze mit Strom, Gas, Kabel-TV sowie Zu- und Abwasseranschluss — ebenerdig in die Terrassen des Geländes gegliedert.",
        image: { src: `${IMG}/amenity-1db8060d35.webp`, alt: "Terrassierter Stellplatzbereich am Camping St. Veit" },
      },
      {
        title: "Schiraum & Trockenraum",
        text: "Eigener Schiraum mit beleuchteten Regalen für Schuhe und Ausrüstung — Wäsche und Winterausrüstung kommen nie zum Problem.",
        image: { src: `${IMG}/gallery-5759c86d78.webp`, alt: "Schiraum mit beleuchteten Schuhregalen und Ausrüstung am Camping St. Veit" },
      },
      {
        title: "Skistall & Skibus",
        text: "Gratis Skibus direkt vom Platz ins Skigebiet Snow Space Salzburg — 760 Pistenkilometer im Verbund Ski Amadé warten auf dich.",
        image: { src: `${IMG}/gallery-9086068c22.webp`, alt: "Skifahrer mit Blick über Gondeln und Bergpanorama im Skigebiet Ski Amadé" },
      },
      {
        title: "Aufenthalts- & Jugendraum",
        text: "Ein gemütlicher Aufenthaltsraum und ein eigener Spiel- und Jugendraum bieten Platz, wenn das Wetter draußen einmal nicht mitspielt.",
        image: { src: `${IMG}/gallery-3e8797c3a3.webp`, alt: "Gemütlicher Aufenthaltsraum am Camping St. Veit" },
      },
      {
        title: "Rezeption mit Kiosk",
        text: "An der Rezeption findest du kleine Imbisse und einen Brötchenservice — kurze Wege und ein persönlicher Empfang inklusive.",
        image: { src: `${IMG}/gallery-3376b326e7.webp`, alt: "Rezeption mit Kiosk am Camping St. Veit" },
      },
    ],
  },

  kinder: {
    heading: "Für die kleinen Gäste",
    intro:
      "Großzügiger Kinderspielplatz, Trampolin und Spielraum — bei uns sind Kinder den ganzen Tag draußen und kommen voll auf ihre Kosten.",
    features: [
      {
        title: "Großer Spielplatz",
        text: "Rutsche, Schaukel, Wippe und Sandkiste auf großzügiger Wiese — direkt am Platz und mit Blick ins Tal.",
        image: { src: `${IMG}/kids-244ef499d7.webp`, alt: "Spielplatz mit Rutsche und Sandkiste am Camping St. Veit" },
      },
      {
        title: "Trampolin & Ballsport",
        text: "Großes Sprungtrampolin, Basketball- und Fußballplatz — hier ist für bewegungsfreudige Kinder den ganzen Tag etwas los.",
        image: { src: `${IMG}/kids-f78c35e2fa.webp`, alt: "Trampolin und Ballplatz am Camping St. Veit" },
      },
      {
        title: "Spielraum für drinnen",
        text: "Ein eigener Spielraum mit Spielen und Spielecke — ideal für Regentage und die ganz Kleinen.",
        image: { src: `${IMG}/kids-5b4376763f.webp`, alt: "Indoor-Spielraum für Kinder am Camping St. Veit" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Berge, Klamm und Loipe",
    intro:
      "Vom Platz direkt ins Wanderroutennetz, auf den Tauernradweg oder in die Liechtensteinklamm — und im Winter in eines der größten Skigebiete Österreichs.",
    items: [
      {
        title: "Wandern im Heilklima",
        text: "St. Veit liegt mitten im weitläufigen Wanderroutennetz der Salzburger Sonnenterrasse — vom gemütlichen Spazierweg bis zur Bergtour.",
        image: { src: `${IMG}/activity-70c560d871.webp`, alt: "Wandern in den Bergen rund um St. Veit" },
      },
      {
        title: "Rad & Mountainbike",
        text: "Der Campingplatz liegt direkt am Tauernradweg — der perfekte Start für gemütliche Touren und fordernde Bergauffahrten.",
        image: { src: `${IMG}/activity-0497a1f7c7.webp`, alt: "Mountainbiken auf einem Almweg bei St. Veit" },
      },
      {
        title: "Ski Amadé & Snow Space",
        text: "In wenigen Minuten am Einstieg ins Snow Space Salzburg — mit einem Skipass erreichst du 760 Pistenkilometer in ganz Ski Amadé.",
        image: { src: `${IMG}/activity-256c51b14f.webp`, alt: "Skipisten und Lifte im Skigebiet Ski Amadé" },
      },
      {
        title: "Almen & Aussicht",
        text: "Bewirtschaftete Almen, Gipfelkreuze und Höhenwege mit Panorama — die Almjause unterwegs gehört zu jeder Wanderung dazu.",
        image: { src: `${IMG}/activity-f26103e975.webp`, alt: "Almlandschaft mit Bergpanorama bei St. Veit" },
      },
    ],
  },

  anreise: {
    heading: "So kommst du her",
    modes: [
      { title: "Mit dem Auto", text: "Über die Tauern Autobahn A10, Abfahrt St. Johann/Pongau, dann Richtung St. Veit im Pongau — der Platz ist ausgeschildert." },
      { title: "Mit der Bahn", text: "Bahnhof St. Johann im Pongau, rund zehn Fahrminuten entfernt — von dort weiter mit Bus oder Taxi." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Salzburg liegt etwa eine Autostunde entfernt." },
    ],
  },

  galerie: {
    heading: "St. Veit in Bildern",
    headingEmphasis: "St. Veit",
    intro: "Sommerterrassen, Bergpanorama und tief verschneite Winter — ein paar Eindrücke vom Platz und seiner Umgebung.",
    tag: "Sommer & Winter",
    moreCount: 18,
    images: [
      { src: `${IMG}/gallery-04d2cc980b.webp`, alt: "Luftaufnahme des Campingplatzes St. Veit im Winter" },
      { src: `${IMG}/gallery-00c67c5cd1.webp`, alt: "Schiraum mit Skiern, Snowboards und Schlitten am Camping St. Veit" },
      { src: `${IMG}/amenity-acd6314ecb.webp`, alt: "Sonnenterrasse beim Kiosk am Camping St. Veit" },
      { src: `${IMG}/kids-27144ec945.webp`, alt: "Spielplatz mit Bergpanorama am Camping St. Veit" },
    ],
  },

  booking: {
    heading: "Jetzt deinen Stellplatz sichern",
    headingEmphasis: "deinen Stellplatz",
    intro: "Wähle Zeitraum und Personen — Familie Resch meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote: "Pauschalpreis für 2 Personen inkl. Komfortstellplatz pro Nacht, ab 3 Nächten — exkl. Kurtaxe, Mobilitätsbeitrag & Strom.",
    highlight: { title: "Gratis Skibus", text: "Im Winter bringt dich der kostenlose Skibus direkt vom Platz ins Skigebiet." },
    categories: [
      { id: "nebensaison", label: "Stellplatz Nebensaison", perNight: 32, perExtraGuest: 14 },
      { id: "sommer", label: "Stellplatz Hauptsaison", perNight: 40.5, perExtraGuest: 14 },
      { id: "winter", label: "Stellplatz Winter", perNight: 47, perExtraGuest: 16.5 },
    ],
  },

  kontakt: {
    coords: { lat: 47.325137, lng: 13.165652 },
    tel: "+43 6415 57333",
    telHref: "tel:+43641557333",
    mail: "office@camping-stveit.at",
    facebook: "https://www.facebook.com/sonnenterrassen.camping.st.veit/",
    adresse: "Bichlwirt 12 · 5621 St. Veit im Pongau · Österreich",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Kinder", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingStveit;
