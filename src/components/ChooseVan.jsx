import React, { useState } from "react";
import { ChooseVanHeading, ChooseVanHeadingBox, Tags } from "../common/Heading";
import Buttonsecondary from "../common/Buttonsecondary";
import Button from "../common/Button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import smallvan from "../assets/images/small-van.webp";
import mediumvan from "../assets/images/medium-van.jpg";
import largevan from "../assets/images/large-van.jpg";
import lutonvan from "../assets/images/luton-van.jpg";
import lutonboxvan from "../assets/images/luton-box-van.jpg";

const ChooseVan = ({ pageNo, onClick, onSubmit }) => {
  const [smallVan, setsmallVan] = useState(null);
  const [mediumVan, setmediumVan] = useState(null);
  const [largeVan, setlargeVan] = useState(null);
  const [lutonVan, setlutonVan] = useState(null);
  const [lutonBoxVan, setlutonBoxVan] = useState(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      onChange={(e) => {
        localStorage.setItem("choosedvan", e.target.value);
      }}
     
    >
      <ChooseVanHeading
        content="Choose Your Perfect Van"
        paragraphcontent="Select the right size for your move"
      />

      <div className="flex flex-col items-center justify-center gap-3 mt-4">
        {/* radio 1 */}
        <div
          onClick={() => {
            setsmallVan(true);
            setmediumVan(false);
            setlargeVan(false);
            setlutonVan(false);
            setlutonBoxVan(false);
          }}
          className={`${
            smallVan && "border-violetprimary scale-102 bg-violetprimary/5"
          } relative overflow-hidden z-1 w-full shadow-sm border-slate-200 border-1 p-3 hover:border-vinegar hover:shadow-md rounded-xl transition-all duration-300 ease-in-out`}
        >
          <input
            type="radio"
            name="vehicle"
            required
            value="smallvan"
            className=" w-full h-full absolute opacity-0 z-10 top-0 left-0"
          />

          <div
            className={`${
              smallVan && "bg-violetprimary "
            } absolute  h-6 w-6 rounded-full border-1 right-3 top-3 border-slate-200 transition-all duration-300 flex items-center justify-center`}
          >
            <Check size={15} className="text-white" />
          </div>

          <div className="flex items-center gap-3 ">
            <img src={smallvan} className="h-16 w-16 object-cover" />

            <div className="flex flex-col items-start justify-center">
              <ChooseVanHeadingBox
                heading="small van"
                paragraph="Perfect for small moves"
                subparagraph="Up to 10 cubic feet"
              />
              <div className="flex items-center gap-1 mt-1 justify-center">
                {["Compact size", "Easy parking", "City friendly"].map(
                  (obj, index) => {
                    return <Tags tag={obj} key={index} />;
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* radio 2 */}

        <div
          onClick={() => {
            setsmallVan(false);
            setmediumVan(true);
            setlargeVan(false);
            setlutonVan(false);
            setlutonBoxVan(false);
          }}
          className={`relative ${
            mediumVan && "border-violetprimary scale-102 bg-violetprimary/5"
          } overflow-hidden z-1 w-full shadow-sm border-slate-200 border-1 p-3 hover:border-vinegar hover:shadow-md rounded-xl transition-all duration-300 ease-in-out`}
        >
          <input
            type="radio"
            name="vehicle"
            value="mediumvan"
            required
            className=" w-full h-full absolute opacity-1 z-10 top-0 left-0"
          />

          <div
            className={`${
              mediumVan && "bg-violetprimary"
            } flex justify-center items-center absolute h-6 w-6 rounded-full border-1 right-3 top-3 border-slate-200 transition-all duration-300`}
          >
            {" "}
            <Check size={15} className="text-white" />
          </div>

          <div className="flex items-center gap-3 ">
            <img src={mediumvan} className="h-16 w-16 object-cover" />

            <div className="flex flex-col items-start justify-center">
              <ChooseVanHeadingBox
                heading="Medium Van"
                paragraph="Ideal for medium moves"
                subparagraph="Up to 20 cubic feet"
              />
              <div className="flex items-center gap-1 mt-1 justify-center">
                {["Good storage", "Versatile", "Popular choice"].map(
                  (obj, index) => {
                    return <Tags key={index} tag={obj} />;
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* radio 3 */}

        <div
          onClick={() => {
            setsmallVan(false);
            setmediumVan(false);
            setlargeVan(true);
            setlutonVan(false);
            setlutonBoxVan(false);
          }}
          className={`${
            largeVan && "border-violetprimary scale-102 bg-violetprimary/5"
          } relative overflow-hidden z-1 w-full shadow-sm border-slate-200 border-1 p-3 hover:border-vinegar hover:shadow-md rounded-xl transition-all duration-300 ease-in-out`}
        >
          <input
            type="radio"
            name="vehicle"
            required
            value="largevan"
            className=" w-full h-full absolute opacity-0 z-10 top-0 left-0"
          />

          <div
            className={`${
              largeVan && "bg-violetprimary"
            } flex items-center justify-center absolute h-6 w-6 rounded-full border-1 right-3 top-3 border-slate-200 transition-all duration-300`}
          >
            {" "}
            <Check size={15} className="text-white" />
          </div>

          <div className="flex items-center gap-3">
            <img src={largevan} className="h-16 w-16 object-cover" />

            <div className="flex flex-col items-start justify-center">
              <ChooseVanHeadingBox
                heading="Large Van"
                paragraph="Great for large moves"
                subparagraph="Up to 35 cubic feet"
              />
              <div className="flex items-center gap-1 mt-1 justify-center">
                {["Spacious", "Heavy Items", "Long Disatance"].map(
                  (obj, index) => {
                    return <Tags key={index} tag={obj} />;
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* radio 4 */}

        <div
          onClick={() => {
            setsmallVan(false);
            setmediumVan(false);
            setlargeVan(false);
            setlutonVan(true);
            setlutonBoxVan(false);
          }}
          className={`${
            lutonVan && "border-violetprimary scale-102 bg-violetprimary/5"
          } relative overflow-hidden z-1 w-full shadow-sm border-slate-200 border-1 p-3 hover:border-vinegar hover:shadow-md rounded-xl transition-all duration-300 ease-in-out`}
        >
          <input
            type="radio"
            name="vehicle"
            value="lutonvan"
            required
            className=" w-full h-full absolute opacity-0 z-10 top-0 left-0"
          />

          <div
            className={`${
              lutonVan && "bg-violetprimary"
            } flex items-center justify-center absolute h-6 w-6 rounded-full border-1 right-3 top-3 border-slate-200 transition-all duration-300`}
          >
            {" "}
            <Check size={15} className="text-white" />
          </div>

          <div className="flex items-center gap-3 ">
            <img src={lutonvan} className="h-16 w-16 object-cover" />

            <div className="flex flex-col items-start justify-center">
              <ChooseVanHeadingBox
                heading="Luton Van"
                paragraph="Best for big moves"
                subparagraph="Up to 50 cubic feet"
              />
              <div className="flex items-center gap-1 mt-1 justify-center">
                {["Maximum space", "Commercail Grade", "Heavy Duty"].map(
                  (obj, index) => {
                    return <Tags key={index} tag={obj} />;
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* radio 5 */}

        <div
          onClick={() => {
            setsmallVan(false);
            setmediumVan(false);
            setlargeVan(false);
            setlutonVan(false);
            setlutonBoxVan(true);
          }}
          className={`${
            lutonBoxVan && "border-violetprimary scale-102 bg-violetprimary/5"
          } relative overflow-hidden z-1 w-full shadow-sm border-slate-200 border-1 p-3 hover:border-vinegar hover:shadow-md rounded-xl transition-all duration-300 ease-in-out`}
        >
          <input
            type="radio"
            name="vehicle"
            required
            value="lutonboxvan"
            className=" w-full h-full absolute opacity-0 z-10 top-0 left-0"
          />

          <div
            className={`${
              lutonBoxVan && "bg-violetprimary"
            } absolute flex items-center justify-center h-6 w-6 rounded-full border-1 right-3 top-3 border-slate-200 transition-all duration-300`}
          >
            {" "}
            <Check size={15} className="text-white" />
          </div>

          <div className="flex items-center gap-3 ">
            <img src={lutonboxvan} className="h-16 w-16 object-cover" />

            <div className="flex flex-col items-start justify-center">
              <ChooseVanHeadingBox
                heading="Luton Box Van with Tail Lift"
                paragraph="Perfect for heavy or bulky items"
                subparagraph="Up to 60 cubic feet"
              />
              <div className="flex items-center gap-1 mt-1 justify-center">
                {["Tail Lift", "Heavy Items", "Commercial Grade"].map(
                  (obj, index) => {
                    return <Tags key={index} tag={obj} />;
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-center gap-3 border-t-1 border-slate-200 pt-3 md:mt-6 md:pt-4">
        <Button
          className="w-[137px] !rounded-full !m-0"
          button="Back"
          type="button"
          onClick={onClick}
          subicon={<ArrowLeft />}
        />

        <Buttonsecondary
          type="submit"
          content="Next: Select Date & Time"
          icon={<ArrowRight size={20} />}
        />
      </div>
    </form>
  );
};

export default ChooseVan;
