import { House, Icetruck, Lamp, Table, Truck, Van } from "./Icons";

export const navlist = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about-us",
  },
  { name: "Services", url: "#services" },
  { name: "Blogs", url: "/" },
  { name: "Faqs", url: "/" },
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
