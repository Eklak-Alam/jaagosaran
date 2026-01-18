// data/StartupData.js
import { Wrench, ShieldCheck, Smartphone, TrendingUp, Leaf, Zap, MapPin, Calendar, Globe } from "lucide-react";

export const startups = [
  {
    id: 1,
    slug: "justgofix", 
    name: "JustGoFix",
    tagline: "Standardizing Home Services in Bharat",
    description: "A hyper-local home service platform solving the trust deficit in Tier-2 cities. We connect skilled technicians with households using a tech-first approach.",
    sector: "Consumer Tech",
    location: "Patna, Bihar",
    founded: "2024",
    website: "https://justgofix.com",
    founder: {
      name: "Nilesh Dixit",
      role: "Founder & CEO",
      bio: "A grassroots entrepreneur who believes in building from the ground up. Nilesh spends his days in the field, refining SOPs with technicians rather than sitting in a boardroom."
    },
    images: [
      "/startupteamimg/justgofix/justgofix-hero.jpg",
      "/startupteamimg/justgofix/justgofix-team.jpg",
      "/startupteamimg/justgofix/justgofix-work.jpg"
    ],
    features: [
      { title: "Ground-Up Ops", desc: "SOPs built on real field data.", icon: <Wrench size={20}/> },
      { title: "Tech Backbone", desc: "End-to-end service tracking.", icon: <Smartphone size={20}/> },
      { title: "Worker Dignity", desc: "Stable income for partners.", icon: <ShieldCheck size={20}/> },
    ]
  },
  {
    id: 2,
    slug: "edugaon",
    name: "EduGaon",
    tagline: "Building Futures from the Ground Up",
    description: "Bridging the gap between education and employability in rural India. We empower undergraduate students with industry-aligned skills and real-world project experience.",
    sector: "EdTech / Social Impact",
    location: "Bihar, India",
    founded: "2018",
    website: "https://edugaon.com",
    founder: {
      name: "Vijay Kumar",
      role: "Co-Founder",
      bio: "Focused on empowering first-generation learners. Vijay believes talent exists everywhere, but opportunity does not, and works to turn potential into possibility."
    },
    images: [
      "/startupteamimg/edugaon/edugaon-hero.jpg",
      "/startupteamimg/edugaon/edugaon-team.jpeg",
      "/startupteamimg/edugaon/edugaon-work.jpeg"
    ],
    features: [
      { title: "Rural-First", desc: " tailored for semi-urban youth.", icon: <Globe size={20}/> },
      { title: "Real Projects", desc: "Live industry experience.", icon: <Wrench size={20}/> },
      { title: "Career Growth", desc: "100+ lives transformed.", icon: <TrendingUp size={20}/> },
    ]
  },
];