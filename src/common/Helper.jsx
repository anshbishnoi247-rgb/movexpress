import {
  Bag,
  Clock,
  CoinClock,
  Delivery,
  HandShake,
  House,
  Icetruck,
  Lamp,
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

export const inputbox = [
  { label: "Pickup Address", holder: "Enter pickup address" },
  { label: "Destination Address", holder: "Enter destination address" },
];

export const services = [
  {
    svg: <Van />,
    head: "Man & Van Services",
    para: "A convenient and flexible moving solution typically offered by a single professional or a small team with a van",
  },
  {
    svg: <House />,
    head: "House Removals",
    para: "House removals refer to the process of moving (packing, loading, transporting, unloading) from one residence to another",
  },
  {
    svg: <Lamp />,
    head: "Furniture & Large Items",
    para: "Furniture delivery is a service focused on transporting furniture items from sellers or retailers to customers homes.",
  },
  {
    svg: <Truck />,
    head: "Piano Transport",
    para: "Piano transport involves the specialized and meticulous relocation of pianos from one location to another.",
  },
  {
    svg: <Icetruck />,
    head: "Storage Removals",
    para: "Storage removal refers to the process of relocating items to or from a storage facility. This service is designed to assist",
  },
  {
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
