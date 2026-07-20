export const site = {
  name: "LIIKE",
  fullName: "Liikunta- ja Hyvinvointikeskus Liike Oy",
  tagline: "Ota askel lähemmäs itsesi voittoa",
  address: "Koneenhoitajankatu 6, 35800 Mänttä",
  email: "info@lhk-liike.fi",
  phone: "040 730 2621",
  phoneDisplay: "040 730 2621",
  yTunnus: "2370942-6",
  shopUrl: "https://oma.enkora.fi/liike/reservations2/reservations/shop/-/-/-",
  social: {
    facebook: "https://www.facebook.com/liikeoy",
    instagram: "https://www.instagram.com/liikeoy",
  },
  hours: {
    gym: "Joka päivä klo 04.30–24.00",
    service: "Maanantaisin klo 17.00–20.00",
  },
  staff: [
    {
      name: "Katariina Karlsson",
      role: "Keskusjohtaja",
      email: "katariina@lhk-liike.fi",
      phone: "040 730 2621",
    },
    {
      name: "Henna Tikka",
      role: "Asiakasvastaava",
      email: "henna@lhk-liike.fi",
      phone: "040 703 1391",
    },
  ],
} as const

export const services = [
  {
    id: "kuntosali",
    title: "Kuntosali",
    description:
      "Moderni sali käytössäsi aamusta yöhön – jäsenkortilla joka päivä klo 04.30–24.00.",
    details:
      "Treenaa omaan tahtiisi hyvin varustellulla salilla. Kulku jäsenkortilla joustavasti aamuvarhaisesta myöhäisiltaan – myös pyhäpäivisin.",
    highlights: [
      "Avoinna joka päivä klo 04.30–24.00",
      "Kulku jäsenkortilla",
      "Ilmainen lapsiparkki",
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
    position: "center",
  },
  {
    id: "ryhmalikunta",
    title: "Ryhmäliikunta",
    description:
      "Innostavia tunteja kaikille tasoille – treenaa yhdessä ja saa energiaa arkeen.",
    details:
      "Ryhmätunneilla saat ohjatun treenin, porukan tuen ja vaihtelua arkeen. Tunteja löytyy eri tasoille – aloittelijasta kokeneeseen liikkujaan.",
    highlights: [
      "Tunteja eri tasoille",
      "Ohjatut treenit",
      "Motivaatiota ja yhteisöä",
    ],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
    position: "center top",
  },
  {
    id: "sisapyoraily",
    title: "Sisäpyöräily",
    description:
      "Tehokasta spinningiä tunnelmallisessa salissa – syke ylös ja fiilis kohdilleen.",
    details:
      "Sisäpyöräily nostaa sykkeen ja parantaa kestävyyttä tehokkaasti. Tunnelmalliset tunnit tekevät treenistä elämyksen – tule mukaan ja polje!",
    highlights: [
      "Tehokas kestävyystreeni",
      "Tunnelmallinen sali",
      "Sopii monelle tasolle",
    ],
    image:
      "https://images.unsplash.com/photo-1649701915972-91689c042e94?auto=format&fit=crop&w=1400&q=80",
    position: "center",
  },
  {
    id: "valmennus",
    title: "Valmennus",
    description:
      "Henkilökohtaista ohjausta, kuntosaliohjelmia ja tukea tavoitteidesi saavuttamiseen.",
    details:
      "Personal training ja valmennus auttavat etenemään turvallisesti ja tavoitteellisesti. Saat ohjelman, tekniikkaohjausta ja tukea matkan varrella.",
    highlights: [
      "Henkilökohtainen ohjaus",
      "Kuntosaliohjelmat",
      "Tukea tavoitteisiin",
    ],
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80",
    position: "center top",
  },
  {
    id: "hyvinvointi",
    title: "Hyvinvointipalvelut",
    description:
      "Kehonkoostumusmittaukset, ravintoneuvonta ja Easy Line – kokonaisvaltaista tukea.",
    details:
      "Hyvinvointi on enemmän kuin treeni. Seuraa kehitystä mittauksilla, saat tukea ravintoon ja hyödynnä Easy Line -palveluita arjen tueksi.",
    highlights: [
      "Kehonkoostumusmittaus",
      "Ravintoneuvonta",
      "Easy Line",
    ],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80",
    position: "center",
  },
  {
    id: "lapsiparkki",
    title: "Lapsiparkki",
    description:
      "Ilmainen, omatoiminen lapsiparkki – voit treenata rauhassa lasten kanssa paikalla.",
    details:
      "Lapsiparkki on omatoimisessa käytössä ilman erillistä maksua. Voit tuoda lapset mukaan ja treenata rauhassa – käytännöllinen apu arkeen.",
    highlights: [
      "Ilmainen käyttö",
      "Omatoiminen lapsiparkki",
      "Treenaa rauhassa",
    ],
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80",
    position: "center",
  },
] as const

export const news = [
  {
    title: "Arki lähestyy!",
    excerpt: "Ryhmäliikunta palaa kesälomilta maanantaista 3.8. alkaen.",
    date: "Kesä 2026",
  },
  {
    title: "Hyrox-inspiroitunut workshop",
    excerpt: "Koe trendikäs treeni – workshop 24.–25.6.",
    date: "Kesäkuu 2026",
  },
  {
    title: "LIIKE 15 vuotta!",
    excerpt: "Juhlistimme liikunnan iloa jo 15 vuoden ajan Mäntässä.",
    date: "Helmikuu 2026",
  },
] as const

export const reviews = {
  rating: 4.5,
  count: 13,
  googleUrl:
    "https://www.google.com/search?q=Liikunta-+ja+Hyvinvointikeskus+Liike+Oy+Arvostelut&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA1MjYyNTcxMTWxMLQ0MDc3t9zAyPiK0cgnMzO7NK8kUVchK1HBo7IsM68sPzOvJDM7tTi7tFgBJJ2q4F-p4FhUll9ckppTWrKIlQxNACCK8MiFAAAA&rldimm=10523257445481907779&tbm=lcl&hl=fi-FI#lkt=LocalPoiReviews",
  items: [
    {
      name: "Pirjo Kuulas",
      rating: 5,
      text: "Hienoa, että yrittäjä on jaksanut panostaa jo vuositolkulla yritykseensä täällä Mäntässä. Keksivät aina uusia ryhmäliikuntamuotoja. Siisti, hyvät laitteet ja ihana henkilökunta.",
    },
    {
      name: "Eero Koskinen",
      rating: 5,
      text: "Monipuolinen ja tilava kuntosali. Myös ryhmäliikuntatunnit ovat loistavat. Henkilökunta rento ja ystävällinen, PT-palvelut mukaan lukien.",
    },
    {
      name: "Leea Sultani",
      rating: 5,
      text: "Avulias henkilökunta, hyvät kuntosalivarusteet. Mahtava ilmapiiri ja hyvin tilaa vääntää.",
    },
    {
      name: "Titta Viskari",
      rating: 5,
      text: "Viihtyisä sali, hyvät ryhmäliikuntatunnit.",
    },
    {
      name: "Talliniemi Anja",
      rating: 5,
      text: "Hyvät mahdollisuudet harrastaa monipuolisesti liikuntaa.",
    },
    {
      name: "T Silvan",
      rating: 5,
      text: "Hyvä mesta, loistotyypit.",
    },
  ],
} as const

export const ptCoaching = {
  trainer: {
    name: "Katariina",
    fullName: "Katariina Karlsson",
    email: "katariina@lhk-liike.fi",
    phone: "040 730 2621",
    instagram: "https://www.instagram.com/coachkatariina",
    intro:
      "Hei, olen Katariina, kolmen aktiivisen pojan äiti. Olen kannustava ja energinen ryhmäliikuntaohjaaja ja Personal Trainer. Liikunta on aina ollut intohimoni, ja olen iloinen, että olen pystynyt tekemään siitä itselleni myös ammatin.",
    background:
      "Liikuntaa olen harrastanut aina monipuolisesti. Juniorivuosina pelasin aktiivisesti jalkapalloa ja lumilautailin. Nykyään treenaan kuntoilumielessä edelleen kumpaakin. Lisäksi pelaan tennistä, ja uusimpina lajeina olen innostunut tankotanssista sekä CrossFitistä.",
    style:
      "Valmentajana olen määrätietoinen, kannustava ja tarvittaessa myös vaativa. Haluan kannustaa asiakkaitani mahdollisimman monipuoliseen kuntoiluun ja rohkeasti kokeilemaan ja kehittämään itseään.",
  },
  about:
    "Valmennus voi olla henkilökohtaista tai ryhmässä tapahtuvaa. Suunnittelen harjoitusohjelman juuri sinun toiveidesi ja tarpeidesi mukaan ja hiomme yhdessä suoritustekniikat kuntoon. Tapaamisissa saat kaiken sen avun ja neuvon mitä tarvitset.",
  includes: [
    "Liikuntaneuvonta",
    "Harjoitusohjelmat",
    "Ravintoneuvonta",
    "Yhteiset treenit",
    "Kehonkoostumusmittaus tarvittaessa",
  ],
  goals:
    "On tavoitteenasi sitten painonpudotus ja/tai lihasmassan kasvattaminen, yleinen hyvinvointi, virkeyden lisääminen tai ryhdin parantuminen – haluan, että tähän päädytään niin, että suoritustekniikkasi on kohdillaan kuten myös liikkuminen ja kehonhallintasi. Yhteisten treenien avulla tämä onnistuu!",
  wellness: [
    "Fyysinen aktiivisuus",
    "Monipuolinen ja terveellinen ruokavalio",
    "Riittävä lepo",
    "Elämästä nauttiminen",
  ],
  closing:
    "Kun sinulta löytyy motivaatio ja halu treenata ja saavuttaa tavoitteesi, niin minulta löytyy avaimet siihen! Onnistumme yhdessä!",
  certifications: [
    "Trainer 4 You Kuntosalivalmentaja",
    "Trainer 4 You Personal Trainer",
    "Trainer 4 You Kahvakuulakoulu",
    "FAF Indoor Cycling instructor",
    "FAF Muscle training",
    "Spartan Gear Toiminnallisen harjoittelun ohjaajakoulutus",
    "Les Mills Bodypump instructor",
    "Les Mills Bodycombat instructor",
    "Life Coaching – Life Coach Academy (opinnot kesken)",
  ],
  pricing: [
    {
      name: "1 × valmennus",
      price: "89 €",
      note: "Kesto 60 min",
    },
    {
      name: "10 × valmennus",
      price: "750 €",
      note: "Yhden tapaamisen kesto 60 min. Ei sisällä ravinto-ohjeita.",
    },
    {
      name: "Intensiivinen lähivalmennus",
      price: "150 €/kk",
      note: "1 × tapaaminen/kk (kesto 75 min), ohjelmat, ohjelmoinnin muutokset, ravinto-ohjeet, Syke-treeniappi ja yhteydenpito.",
      featured: true,
    },
  ],
  pricingNote:
    "Kysy lisää – voidaan myös räätälöidä näiden välistä sinulle sopiva vaihtoehto. Etävalmennuskin on mahdollinen. Hinnasto päivitetty 1.2.2024.",
} as const

export const pricing = {
  accessCard: 30,
  single: {
    gym: 12.5,
    group: 12.5,
    special: 10.5,
    junior: 8.5,
  },
  monthly: [
    {
      name: "Kuntosali",
      period: "1 kk",
      price: 60,
      special: 50,
      junior: 35,
      featured: false,
      features: ["Kuntosali 04.30–24.00", "Lapsiparkki", "Kulku jäsenkortilla"],
    },
    {
      name: "Kuntosali + ryhmäliikunta",
      period: "1 kk",
      price: 70,
      special: 60,
      junior: 45,
      featured: true,
      features: [
        "Kuntosali + ryhmätunnit",
        "Sisäpyöräily",
        "Lapsiparkki",
        "Kulku jäsenkortilla",
      ],
    },
    {
      name: "Kuntosali 12 kk",
      period: "e-lasku / kk",
      price: 49,
      special: 42,
      junior: null,
      featured: false,
      features: [
        "Vuosisopimus e-laskulla",
        "Paras hinta pitkällä aikavälillä",
        "Joustava kulku joka päivä",
      ],
    },
  ],
  multi: [
    { name: "5× kuntosali", price: 46, note: "Voimassa 3 kk" },
    { name: "5× ryhmä + sali", price: 52, note: "Voimassa 3 kk" },
    { name: "10× kuntosali", price: 82, note: "Voimassa 6 kk" },
    { name: "10× ryhmä + sali", price: 92, note: "Voimassa 6 kk" },
  ],
} as const
