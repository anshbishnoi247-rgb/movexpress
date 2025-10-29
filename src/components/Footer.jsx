import React from "react";
import Subfooter from "./Subfooter";
import Button from "../common/Button";

import Logopamplate from "../common/Logopamplate";
import { ListHeading, ListLink, Paragraph } from "../common/Heading";
import { Twitter, Facebook, Instagram, Message } from "../common/Icons";
import { listcontact, listdicription, navlist } from "../common/Helper";

const Footer = () => {
  return (
    <footer className="pt-[130px] bg-mist">
      <div
        className={`flex flex-col items-center max-w-[1319px] gap-[130px] mx-auto p-5`}
      >
        <div
          className={`flex  max-sm:flex-col items-start xl:items-center justify-center xl:justify-between w-full flex-wrap gap-10 xl:gap-7 `}
        >
          <div
            className={`flex flex-col items-start justify-center w-full max-w-[428px]`}
          >
            <Logopamplate
              className={`!text-3xl md:!text-4xl lg:!text-[43px]`}
              classNameImg={`!max-w-15 md:!max-w-[95px]`}
              classNameParagraph={`!leading-[160%] !text-[21px]`}
            />
            <Paragraph
              className="!text-textsecondary my-5 md:mb-10 md:mt-7"
              para={
                "At MoveXpress we understand that moving can be quite demanding and stressful.That's why we are dedicated to make the process smooth and seamless for you."
              }
            />
            <div className="flex items-center justify-center gap-4">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>

          <ul>
            <li>
              <ListHeading content="Quick Link" />
            </li>
            {navlist.map((obj, index) => {
              return (
                <li
                  key={index}
                  className={`${index == 0 && "md:mt-6 mt-4 "} mb-2 md:mb-3`}
                >
                  <ListLink content={obj.name} href={obj.url} />
                </li>
              );
            })}{" "}
          </ul>

          <ul>
            <li>
              <ListHeading content="Small Print" />
            </li>
            {listdicription.map((obj, index) => {
              return (
                <li
                  key={index}
                  className={`${index == 0 && "md:mt-6 mt-4"} mb-2 md:mb-3`}
                >
                  <ListLink content={obj.name} href={obj.url} />
                </li>
              );
            })}{" "}
          </ul>
          <ul className="max-w-[213px] flex flex-col items-start">
            <li>
              <ListHeading content="Contact Info" />
            </li>
            {listcontact.map((obj, index) => {
              return (
                <li
                  key={index}
                  className={`${index == 0 && "md:mt-6 mt-4"} mb-2 md:mb-3`}
                >
                  <ListLink content={obj.name} />
                </li>
              );
            })}{" "}
            <li>
              <Button
                icon={<Message />}
                button={`Chat with US`}
                className={`shadow-[0px_5px_5px_0px_#00000026] w-[184px]`}
                subclassName={`h-[!66px]`}
              />
            </li>
          </ul>
        </div>
        <Subfooter />
      </div>
    </footer>
  );
};

export default Footer;
