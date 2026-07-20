export const site = {
  name: "LIIKE",
  fullName: "Liikunta- ja Hyvinvointikeskus Liike Oy",
  tagline: "Liikunnan iloa ja hyvää oloa Mäntässä",
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
