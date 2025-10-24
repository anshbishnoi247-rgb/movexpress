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
  { name: "Blogs", url: "/" },
  { name: "Faqs", url: "/" },
];

export const inputbox = [
  { label: "Pickup Address", holder: "Enter pickup address" },
  { label: "Destination Address", holder: "Enter destination address" },
];


export const Heading = (head) => {
  return (
    <h1
      className={`font-medium text-5xl leading-[125%] font-figtree text-[#010528]`}
    >{head}</h1>
  );
};


export const Para = () => {
  return (
    <p className="text-[#3B3B3B] font-normal text-sx sm:text-base lg:text-lg leading-[170%] font-inter"></p>
  );
};

