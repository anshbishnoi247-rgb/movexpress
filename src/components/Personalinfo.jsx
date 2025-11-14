import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import Button from "../common/Button";
import { AddImage } from "../common/Icons";

const Personalinfo = ({ filled, setFilled }) => {
  const [check, setCheck] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [birthday, setBirthady] = useState("");
  const [selfie, setSelfie] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilled(true);
        }}
        className="flex flex-col gap-6 items-start justify-center w-full"
      >
        {/* input name */}
        <aritcle className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              First name*
            </label>
            <input
              required
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Firstname"
              className="input-style-common"
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              Surname*
            </label>
            <input
              required
              type="text"
              value={surname}
              placeholder="surname"
              onChange={(e) => setSurname(e.target.value)}
              className="input-style-common"
            />
          </div>
        </aritcle>

        {/* input contact */}
        <article className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              Phone No *
            </label>
            <input
              required
              type="number"
              value={contactno}
              placeholder="contact"
              onChange={(e) => setContactno(e.target.value)}
              className="input-style-common"
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              E-mail *
            </label>
            <input
              required
              type="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e-mail"
              className="input-style-common"
            />
          </div>
        </article>

        {/* input dob */}
        <article className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              Date of Birth *
            </label>
            <input
              required
              type="date"
              onChange={(e) => setBirthady(e.target.value)}
              value={birthday}
              placeholder="name"
              className="input-style-common"
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              Language of preference in english *
            </label>
            <input
              required
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="name"
              className="input-style-common"
            />
          </div>
        </article>

        {/* input adreess */}
        <article className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              Address *
            </label>
            <input
              required
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="address"
              className="input-style-common"
            />
          </div>
          <div
            className={`flex flex-col gap-1 items-start justify-center w-full`}
          >
            <label htmlFor="firtname" className="label-style">
              Postcode *
            </label>
            <input
              required
              type="number"
              placeholder={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="input-style-common"
            />
          </div>
        </article>

        {/* checkbox */}
        <article className="flex flex-col items-start gap-3 justify-center w-full">
          <label htmlFor="firstname" className="label-style">
            Do you have any previous criminal convictions? *
          </label>

          <div className="flex items-center justify-center gap-6">
            {/* YES Option */}
            <div className="flex items-center gap-2 justify-center relative">
              <span
                className={`relative h-6 w-6 border hover:bg-violetprimary ${
                  check === "yes" ? "bg-violetprimary" : ""
                } rounded-lg cursor-pointer`}
                onClick={() => setCheck("yes")}
              >
                <input
                  required
                  className="h-full w-full absolute opacity-0"
                  type="radio"
                  name="criminal"
                  value="yes"
                />
                {check === "yes" && (
                  <Check
                    size={20}
                    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white"
                  />
                )}
              </span>
              <label className="font-inter font-medium text-base leading-6 text-violetprimary">
                Yes
              </label>
            </div>

            {/* NO Option */}

            <div className="flex items-center gap-2 justify-center relative">
              <span
                className={`relative h-6 w-6 border hover:bg-violetprimary ${
                  check === "no" ? "bg-violetprimary" : ""
                } rounded-lg cursor-pointer`}
                onClick={() => setCheck("no")}
              >
                <input
                  required
                  className="h-full w-full absolute opacity-0"
                  type="radio"
                  name="criminal"
                  value="no"
                />
                {check === "no" && (
                  <Check
                    size={20}
                    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white"
                  />
                )}
              </span>
              <label className="font-inter font-medium text-base leading-6 text-violetprimary">
                No
              </label>
            </div>
          </div>
        </article>

        <article className="w-full flex flex-col gap-2 items-start justify-center">
          <label htmlFor="firstname" className="label-style">
            Photo of your selfie *
          </label>

          <article className="flex items-center justify-center relative border-1 border-dashed border-violetprimary rounded-xl h-[187px] w-full">
            <input
              type="file"
              required
              value={selfie}
              onChange={(e) => setSelfie(e.target.value)}
              className="absolute top-0 left-0 z-2 w-full h-full opacity-0"
            />

            <img />

            <article className="z-1  w-fit flex items-center justify-center flex-col">
              <AddImage />
              <p className="font-inter mt-2 md:mt-3 mb-1 font-medium text-sm leading-6 text-violetprimary">
                Click to Upload Front Side of Card
              </p>

              <p className="font-inter font-normal text-sm leading-[164%] text-[#D9DBDC]">
                {" "}
                (Max. File size: 25 MB)
              </p>
            </article>
          </article>
        </article>

        <Button
          button="Next"
          type="submit"
          subclassName="!h-16 !w-[134px] md:text-lg"
          className="md:!mx-0 mt-2"
          icon={<ArrowRight className="button-sign-up-style" />}
        />
      </form>
    </>
  );
};

export default Personalinfo;
