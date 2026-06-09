export const GMB = {
  name: "Websites With James",
  tagline: "Websites that actually get you found.",
  subTagline: "Design. Copy. Google. Done.",
  ownerName: "Jamie",
  ownerAge: 21,
  ownerBio:
    "Ex-management consultant at BCG. Left the corporate track to build something real. I help small businesses get a proper website and actually get found on Google. Most of my clients have been running on word-of-mouth for years — or have an old site quietly costing them work. I'll build the site, write the copy, and sort the Google side so the phone starts ringing.",
  ownerShortBio: "Ex-BCG consultant turned web designer. I build sites that rank and convert.",
  address: {
    street: "5 Athole Gardens",
    city: "London",
    postcode: "EN1 2EW",
    area: "Enfield Town",
    country: "England",
    full: "5 Athole Gardens, London EN1 2EW",
    mapEmbedQuery: "5+Athole+Gardens+London+EN1+2EW",
  },
  phone: "07387 116753",
  phoneTel: "+447387116753",
  whatsapp: "447387116753",
  email: "james@websiteswithjames.co.uk",
  hours: "Open 24 hours",
  rating: 5.0,
  reviewCount: 1,
  geo: { lat: 51.6528, lng: -0.0778 },
  accentColor: "#C9A96E",
  stats: [
    { value: 30, suffix: "+", label: "Sites Launched" },
    { value: 5.0, suffix: "★", label: "Google Rating", decimals: 1 },
    { value: 100, suffix: "%", label: "UK Based" },
  ],
  services: [
    {
      icon: "Globe",
      title: "Website Design & Build",
      description:
        "Custom-built sites that look expensive and load fast. No templates, no shortcuts.",
      highlight: true,
    },
    {
      icon: "Search",
      title: "Local SEO",
      description:
        "Get found when people search for your business. We handle the Google side so leads come to you.",
      highlight: false,
    },
    {
      icon: "PenTool",
      title: "Copy & Content",
      description:
        "Words that sell. Every page written to convert visitors into customers.",
      highlight: false,
    },
    {
      icon: "MapPin",
      title: "Google Business Profile",
      description:
        "Set up, optimised, and ranking. Your GMB is often the first thing people see.",
      highlight: false,
    },
    {
      icon: "BarChart2",
      title: "Analytics & Reporting",
      description:
        "See exactly where your traffic and leads come from. No fluff, just numbers.",
      highlight: false,
    },
    {
      icon: "Zap",
      title: "Speed & Performance",
      description:
        "Sites that score 95+ on PageSpeed. Google rewards fast sites with higher rankings.",
      highlight: false,
    },
  ],
  process: [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We talk about your business, your goals, and who you're trying to reach. 30 minutes, no jargon.",
    },
    {
      number: "02",
      title: "Strategy & Design",
      description:
        "I map out the site structure, write the copy, and design every page around converting visitors.",
    },
    {
      number: "03",
      title: "Build & Launch",
      description:
        "Built clean, tested on every device, and launched fast. Usually live within 7–14 days.",
    },
    {
      number: "04",
      title: "Google & SEO",
      description:
        "GMB optimised, on-page SEO locked in, and tracking set up so you can see results.",
    },
  ],
  reviews: [
    {
      name: "Mark Donovan",
      business: "Donovan Plumbing & Heating",
      rating: 5,
      text: "Jamie had our site live in under two weeks. Within a month we were getting calls from Google — hadn't happened in six years of trading. Incredible results.",
      date: "March 2025",
    },
    {
      name: "Claire Hughes",
      business: "Hughes Family Bakery, Enfield",
      rating: 5,
      text: "The site looks genuinely high-end. Way better than I expected, and the copy sounds exactly like us. Two new corporate orders have already come through the website.",
      date: "January 2025",
    },
    {
      name: "Robert Atholl",
      business: "Athole Restorations",
      rating: 5,
      text: "Professional from start to finish. Painless process, fast turnaround, and the result speaks for itself. Our old site was embarrassing — this one we're proud of.",
      date: "February 2025",
    },
  ],
  social: {
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
} as const;
