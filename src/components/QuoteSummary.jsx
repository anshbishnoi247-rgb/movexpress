import React, { useContext } from "react";
import { QuoteHeadingBox } from "../common/Heading";
import { Calendar, Check, CheckCircle, Map, MapPin, Truck } from "lucide-react";
import Button from "../common/Button";
import { InformationContext } from "../context/context";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FireBase";

const QuoteSummary = ({ total, setHide }) => {
  const {
    startDestination,
    finalDestination,
    choosedvan,
    helper,
    loadingunloadingTime,
    startTime,
    startDate,
    imageValue,
    quantities,
  } = useContext(InformationContext);

  async function postDetails() {
    const allDetails = {
      pickupaddress: startDestination,
      destinationaddress: finalDestination,
      vanchoosed: choosedvan,
      imageofItem: imageValue,
      addedItems: quantities,
      loadingunloadingTime: loadingunloadingTime,
      date: startDate,
      time: startTime,
      helperneeded: helper,
    };

    try {
      const docRef = await addDoc(collection(db, "bookings"), allDetails);
      console.log("Document saved with ID:", docRef.id);
      alert("Data posted successfully!");
      setHide(true);
    } catch (error) {
      console.error("Error saving:", error);
    }
  }
  return (
    <div className="w-full fixed overflow-hidden z-10 bg-opacity-80 backdrop-blur-md bg-black/60 h-screen top-0 left-0 p-3 sm:p-5 flex items-center justify-center">
      <div className="max-w-xl bg-white overflow-y-scroll shadow-xl rounded-xl p-4 md:p-5 w-full border-slate-200 max-h-[85vh] h-fit">
        <QuoteHeadingBox
          heading="Quote Summary"
          paragraph="Peview Your Quote Details"
        />
        <div className="p-5 mb-4 bg-violetprimary rounded-lg shadow-md w-full flex items-center justify-between">
          <p className="font-inter text-flawed font-medium text-xs mb-1">
            Estimated Total
          </p>
          <p className="font-bold text-xl font-wix text-white">£{total}</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 space-y-4 mb-4">
          <h4 className="font-semibold text-sm text-midnight flex items-center gap-2">
            <Check size={12} />
            Quote Details
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-obsidian mb-1">
              <MapPin size={12} />
              <span className="text-xs font-inter font-medium">Location</span>
            </div>
            <div className="flex justify-between items-start gap-5 py-1">
              <span className="quote-paragraph-style">From:</span>
              <span className="quote-paragraph-style-secondary">
                {startDestination}
              </span>
            </div>
            <div className="flex justify-between items-start gap-5 py-1">
              <span className="quote-paragraph-style">To:</span>
              <span className="quote-paragraph-style-secondary">
                {finalDestination}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Distance:</span>
              <span className="quote-paragraph-style-secondary">
                36.8 miles
              </span>
            </div>
          </div>
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="flex items-center  gap-1 text-obsidian mb-1">
              <Truck size={12} />
              <span className="text-xs font-medium">Service</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Van:</span>
              <span className="quote-paragraph-style-secondary">
                {choosedvan}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Helpers:</span>
              <span className="quote-paragraph-style-secondary">{helper}</span>
            </div>
          </div>
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="flex items-center gap-1 text-obsidian mb-1">
              <Calendar size={12} />
              <span className="text-xs font-medium">Date &amp; Time</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Date:</span>
              <span className="quote-paragraph-style-secondary">
                {startDate}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Time:</span>
              <span className="quote-paragraph-style-secondary">
                {startTime}
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="quote-paragraph-style">Duration:</span>
              <span className="quote-paragraph-style-secondary">
                {" "}
                {loadingunloadingTime}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="cancel-button-style"
            onClick={() => setHide(true)}
          >
            Cancel
          </button>
          <Button
            button="Confirm & Book"
            subicon={<CheckCircle size={16} className="mr-1" />}
            className="w-[157px] !m-0 !bg-violetprimary"
            subclassName="!h-10 md:!h-10 !text-sm"
            subsubclassName="!bg-vinegar !duration-800"
            type="button"
            onClick={postDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteSummary;
