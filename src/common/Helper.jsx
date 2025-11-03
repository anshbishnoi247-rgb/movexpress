import {
  Affordable,
  Apple,
  Bag,
  Certified,
  Clock,
  CoinClock,
  Delivery,
  Expert,
  HandShake,
  House,
  Icetruck,
  Lamp,
  LongDistance,
  PlayStore,
  Saftey,
  SitBack,
  Table,
  ThumbsUp,
  Truck,
  Van,
} from "./Icons";

import John from "../assets/images/john.webp";
import Gail from "../assets/images/gail.webp";
import Sam from "../assets/images/sam.webp";
import { BadgeCheck } from "lucide-react";
import Pack from "../assets/images/pack.webp";
import Moving from "../assets/images/moving.webp";
import Booking from "../assets/images/booking.webp";

export const navlist = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about-us",
  },
  { name: "Services", url: "/services" },
  { name: "Blogs", url: "/blogs" },
  { name: "Faqs", url: "/faqs" },
];

export const footerlist = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about-us",
  },
  { name: "Services", url: "/services" },
  { name: "Become a Driver", url: "/sign-up" },
  { name: "Blogs", url: "/blogs" },
];

export const inputbox = [
  { label: "Pickup Address", holder: "Enter pickup address" },
  { label: "Destination Address", holder: "Enter destination address" },
];

export const services = [
  {
    url: "/van",
    svg: <Van />,
    head: "Man & Van Services",
    para: "A convenient and flexible moving solution typically offered by a single professional or a small team with a van",
  },
  {
    url: "#",
    svg: <House />,
    head: "House Removals",
    para: "House removals refer to the process of moving (packing, loading, transporting, unloading) from one residence to another",
  },
  {
    url: "#",
    svg: <Lamp />,
    head: "Furniture & Large Items",
    para: "Furniture delivery is a service focused on transporting furniture items from sellers or retailers to customers homes.",
  },
  {
    url: "#",
    svg: <Truck />,
    head: "Piano Transport",
    para: "Piano transport involves the specialized and meticulous relocation of pianos from one location to another.",
  },
  {
    url: "#",
    svg: <Icetruck />,
    head: "Storage Removals",
    para: "Storage removal refers to the process of relocating items to or from a storage facility. This service is designed to assist",
  },
  {
    url: "#",
    svg: <Table />,
    head: "Office Move",
    para: "Office move is the comprehensive process of moving a business from one physical location to another.",
  },
];

export const worklist = [
  {
    svg: <Bag />,
    name: "Get a Quote",
    para: "Input your details for a tailored quotation",
  },

  {
    svg: <Clock />,
    name: "Schedule",
    para: "Confirm a delivery date and time",
  },

  {
    svg: <Delivery />,
    name: "Delivery",
    para: "We’ll do all the heavy lifting",
  },

  {
    svg: <SitBack />,
    name: "Sit Back",
    para: "Enjoy your new space, stress-free",
  },
];

export const CustomerList = [
  { dataaos: "fade-right", name: "Zachary John", img: John },
  { dataaos: "fade-up", name: "Gail Amethyst", img: Gail },
  { dataaos: "fade-left", name: "Scott William", img: Sam },
];

export const WhyList = [
  {
    svg: <BadgeCheck className=" text-violet1" strokeWidth={1.5} size={56} />,
    name: "Many Years of Experience",
    para: "We are an established Company",
  },
  {
    svg: <CoinClock />,
    name: "Fixed Prices",
    para: "No hidden fees, transparent prices",
  },
  {
    svg: <HandShake />,
    name: "Trustworthy",
    para: "We are insured and lincensed",
  },
  { svg: <ThumbsUp />, name: "5-Star Rating", para: "Rated 4.9 on Trustpilot" },
];

export const faqlist = [
  {
    question: " What services do you offer?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.",
  },
  {
    question: " What can I expect during a therapy session?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.",
  },
  {
    question: " Are your cleaners insured and bonded?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.",
  },
  {
    question: " Are your cleaners insured and bonded?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, eco-friendly cleaning.",
  },
];

export const blogs = [
  {
    heading: "How To Pack Fragile Items for Moving?",
    paragraph:
      "Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires.....",
    img: Pack,
  },
  {
    heading: `How to Make a Booking with Us?`,
    paragraph:
      "With MovExpress, booking a Man and van service is simple, quick, and efficient. Follow the few steps below to book your van and hit the road quickly...",
    img: Booking,
  },
  {
    heading: "How to Declutter Before Moving?",
    paragraph:
      "Moving to a new house combines excitement with significant challenges during the transition. Moving all your belongings to a different location demands..",
    img: Moving,
  },
  {
    heading: "How To Pack Fragile Items for Moving?",
    paragraph:
      "Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires.....",
    img: Pack,
  },
  {
    heading: `How to Make a Booking with Us?`,
    paragraph:
      "With MovExpress, booking a Man and van service is simple, quick, and efficient. Follow the few steps below to book your van and hit the road quickly...",
    img: Booking,
  },
  {
    heading: "How to Declutter Before Moving?",
    paragraph:
      "Moving to a new house combines excitement with significant challenges during the transition. Moving all your belongings to a different location demands..",
    img: Moving,
  },
  {
    heading: "How To Pack Fragile Items for Moving?",
    paragraph:
      "Relocating can be stressful, and packing delicate items can be demanding. Moving delicate items such as glasses, ceramics, electronics, and artwork requires.....",
    img: Pack,
  },
];

export const listdicription = [
  {
    name: "Terms Of Service",
    url: "/",
  },
  {
    name: "Privacy & Policies",
    url: "/",
  },
  { name: "Movers Conduct Policy", url: "/" },
  { name: "Damaged or Missing Items Policy", url: "/" },
  { name: "How Pay Works", url: "/" },
];

export const listcontact = [
  {
    name: "6566 Union Street, San Francisco CA 65456, United States",
    url: "/",
  },
  {
    name: "(555) 123-4567",
    url: "/",
  },
];

export const slidecontent = [
  "Professional & Friendly Team",
  "Safety First",
  "On-Time Delivery",
  "Transparent Pricing",
  "Stress-Free Experience",
  "Professional & Friendly Team",
  "Safety First",
  "On-Time Delivery",
  "Transparent Pricing",
  "Stress-Free Experience",
];

export const bestlist = [
  {
    svg: <House />,
    name: "Residential Moves",
    para: "Helping families relocate without stress.",
  },

  {
    svg: <Table />,
    name: "Office Relocations",
    para: "Smooth transitions with minimal downtime.",
  },

  {
    svg: <Lamp />,
    name: "Furniture Handling",
    para: "Special care for fragile, heavy, or oversized items.",
  },

  {
    svg: <LongDistance />,
    name: "Long-Distance Moves",
    para: "Reliable transportation wherever you’re headed.",
  },
];

export const bestlistsecondary = [
  {
    svg: <Affordable />,
    name: "Affordable Price",
    para: "we offer competitive and transparent pricing to fit your budget. No hidden fees, no surprises — just affordable rates.",
  },

  {
    svg: <Expert />,
    name: "Expert Team",
    para: "From packing delicate items to lifting heavy furniture, our experts ensure every step of your move is handled flawlessly.",
  },

  {
    svg: <Saftey />,
    name: "Safety & Protection",
    para: "We know your possessions are valuable both financially and emotionally. That’s why we take extra precautions to their safety.",
  },

  {
    svg: <Certified />,
    name: "100% Certified",
    para: "Our certifications reflect our commitment to quality, reliability, and industry standards, so you can trust us",
  },
];

export const bestlistvanservies = [
  {
    svg: <House />,
    name: "Home & Office Removals",
    para: "Relocating your home or workspace? We ensure a smooth, secure, and organized move with minimal disruption.",
  },

  {
    svg: <Van />,
    name: "Student Moves",
    para: "Perfect for students relocating between accommodations. Budget-friendly and convenient solutions for smaller moves.",
  },

  {
    svg: <Lamp />,
    name: "Furniture & Large Items",
    para: "Need to transport bulky furniture or oversized parcels? Our vans are fully equipped to handle heavy and delicate items safely.",
  },

  {
    svg: <Lamp />,
    name: "Single-Item & Bulk Transport",
    para: "From a single sofa to an entire flat, we provide customized transport solutions based on your needs.",
  },
];

export const bestlistwhyvan = [
  {
    svg: <Affordable />,
    name: "Affordable & Transparent Pricing",
    para: "Moving services starting from just £25.",
  },

  {
    svg: <Expert />,
    name: "Professional Movers & Drivers",
    para: "Experienced teams handle every item",
  },

  {
    svg: <Saftey />,
    name: "Hassle-Free Experience",
    para: "We load, transport, and unload you do nothing.",
  },

  {
    svg: <LongDistance />,
    name: "Local & Nationwide Coverage",
    para: "Whether around the corner or across the UK",
  },
  {
    svg: <Certified />,
    name: "Flexible Booking Options",
    para: "Service to suit your schedule.",
  },
];

export const download = [
  { svg: <Apple />, name: "App Store", head: "Download on the" },
  { svg: <PlayStore />, name: "Google Play", head: "GET IT ON" },
];
