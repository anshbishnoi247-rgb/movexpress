import { ArrowLeft, ArrowRight, Car, Check, User2, Users2 } from "lucide-react";
import { useState } from "react";
import { AddHelperHeadingBox, ChooseVanHeading } from "../common/Heading";
import Button from "../common/Button";
import Buttonsecondary from "../common/Buttonsecondary";

const AddHelper = ({ onSubmit, onClick,setHide }) => {
  const [noHelper, setNoHelper] = useState(null);
  const [oneHelper, setOneHelper] = useState(null);
  const [twoHelper, setTwoHelper] = useState(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setHide(false);
      }}
      onChange={(e) => {
        localStorage.setItem("heplerNeed", e.target.value);
      }}
    >
      <ChooseVanHeading
        content="Need Help Loading?"
        paragraphcontent="Choose your assistance level"
      />
      <div className="flex flex-col items-center justify-center gap-3 mt-4">
        {/* radio 1 */}
        <div
          onClick={() => {
            setNoHelper(true);
            setOneHelper(false);
            setTwoHelper(false);
          }}
          className={`${
            noHelper && "!border-violetprimary scale-102 bg-violetprimary/5"
          }
           
           choosevan-style-div`}
        >
          <input
            type="radio"
            name="helper"
            required
            value="nohelper"
            className="w-full h-full absolute opacity-0 z-10 top-0 left-0"
          />

          <div
            className={`${noHelper && "bg-violetprimary "} check-design-common`}
          >
            <Check size={15} className="text-white" />
          </div>

          <div className="flex max-lg:flex-col items-start lg:items-center gap-3 ">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                noHelper ? "bg-violetprimary" : "bg-sleet"
              }`}
            >
              <Car size={25} className="text-white" />
            </div>
            <AddHelperHeadingBox
              heading="No Help Needed"
              paragraph="You will load and unload the van yourself"
            />
          </div>
        </div>
        {/* radio 2 */}
        <div
          onClick={() => {
            setNoHelper(false);
            setOneHelper(true);
            setTwoHelper(false);
          }}
          className={`${
            oneHelper && "!border-violetprimary scale-102 bg-violetprimary/5"
          }
           
           choosevan-style-div`}
        >
          <input
            type="radio"
            name="helper"
            required
            value="onehelper"
            className="w-full h-full absolute opacity-0 z-10 top-0 left-0"
          />

          <div
            className={`${
              oneHelper && "bg-violetprimary "
            } check-design-common`}
          >
            <Check size={15} className="text-white" />
          </div>

          <div className="flex max-lg:flex-col items-start lg:items-center gap-3 ">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                oneHelper ? "bg-violetprimary" : "bg-sleet"
              }`}
            >
              <User2 size={25} className="text-white" />
            </div>
            <AddHelperHeadingBox
              heading="1 Helper"
              paragraph="1 helper will assist with loading and unloading"
            />
          </div>
        </div>
        {/* radio 3 */}
        <div
          onClick={() => {
            setNoHelper(false);
            setOneHelper(false);
            setTwoHelper(true);
          }}
          className={`${
            twoHelper && "!border-violetprimary scale-102 bg-violetprimary/5"
          }
           
           choosevan-style-div`}
        >
          <input
            type="radio"
            name="helper"
            required
            value="twohelper"
            className="w-full h-full absolute opacity-0 z-10 top-0 left-0"
          />

          <div
            className={`${
              twoHelper && "bg-violetprimary "
            } check-design-common`}
          >
            <Check size={15} className="text-white" />
          </div>

          <div className="flex max-lg:flex-col items-start lg:items-center gap-3 ">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                twoHelper ? "bg-violetprimary" : "bg-sleet"
              }`}
            >
              <Users2 size={25} className="text-white" />
            </div>
            <AddHelperHeadingBox
              heading="2 Helper"
              paragraph="2 helper will assist with loading and unloading"
            />
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
          content="Show My Quote"
          icon={<ArrowRight size={20} />}
        />
      </div>
    </form>
  );
};

export default AddHelper;
