
export interface Vehicle {
  id: number;
  title: string;
  badge: "NIEUW" | "PENDING" | "OCCASIONS" | "SOLD";
  specs: string;
  year: number;
  mileage: number;
  fuel: string;
  price: number;
  image: string;
  isFavorite: boolean;
}

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  initials: string;
  color: string;
  platform: "google" | "autoscout24";
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    title: "Peugeot 208",
    badge: "NIEUW",
    specs: "100 PK MT6 | 360° Camera | Carplay/Android | Airco",
    year: 2023,
    mileage: 12500,
    fuel: "Benzine",
    price: 18990,
    image: "/Peugeot_208.png",
    
    isFavorite: false,
  },
  {
    id: 2,
    title: "Opel Mokka",
    badge: "NIEUW",
    specs: "130 PK AT8 | Navigatie | LED | Verwarmde Zetels",
    year: 2023,
    mileage: 8900,
    fuel: "Mild Hybride",
    price: 24750,
    image: "/Opel_Mokka.png",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Citroen C3 Aircross",
    badge: "OCCASIONS",
    specs: "145 PK AT | MAX | Camera | Navi | Airco | Apple Carplay",
    year: 2021,
    mileage: 34200,
    fuel: "Benzine",
    price: 22450,
    image: "/Citroen_C3.png",
    isFavorite: false,
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Danny Geerinckx",
    date: "06/11/2025",
    rating: 5,
    text: "Uitstekende service en vriendelijk personeel. Auto was perfect in orde bij levering.",
    initials: "D",
    color: "#FF6A00",
    platform: "google",
  },
  {
    id: 2,
    name: "Patrick Vermeersch",
    date: "14/09/2025",
    rating: 5,
    text: "Zeer professioneel bedrijf. Goede opvolging en eerlijke prijzen. Aanrader!",
    initials: "P",
    color: "#1F2937",
    platform: "autoscout24",
  },
  {
    id: 3,
    name: "Sofie Janssen",
    date: "22/07/2025",
    rating: 5,
    text: "Fijne garage met een ruim aanbod. De medewerkers denken mee en zijn steeds behulpzaam.",
    initials: "S",
    color: "#3B82F6",
    platform: "google",
  },
  {
    id: 4,
    name: "Rik Claes",
    date: "03/06/2025",
    rating: 4,
    text: "Goede ervaring. Mijn auto was snel klaar en de prijs was eerlijk. Zeker terug.",
    initials: "R",
    color: "#EF4444",
    platform: "autoscout24",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Nieuwe modellen 2024 zijn gearriveerd",
    date: "15 November 2025",
    category: "Nieuws",
    excerpt: "Ontdek onze nieuwste aankomsten: de vernieuwde modellen met de modernste technologie.",
    image: "/modellen.png",
  },
  {
    id: 2,
    title: "Financieringsopties: alles wat u moet weten",
    date: "28 Oktober 2025",
    category: "Financiering",
    excerpt: "Financial Lease is een financieringsvorm bestemd voor de aanschaf van bedrijfswagens, personenauto’s en overige bedrijfsmiddelen zoals machines, inventarissen of computers. Wij rekenen graag de mogelijkheden voor u uit!",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
  },
  {
    id: 3,
    title: "Onderhoudstips voor de winter",
    date: "10 Oktober 2025",
    category: "Onderhoud",
    excerpt: "Bereid uw voertuig voor op de wintermaanden met onze professionele onderhoudstips.",
    image: "/Onderhoud.png",
  },
];
