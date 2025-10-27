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

export const navlist = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about-us",
  },
  { name: "Services", url: "/#services" },
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
  { name: "Zachary John", img: John },
  { name: "Gail Amethyst", img: Gail },
  { name: "Scott William", img: Sam },
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
