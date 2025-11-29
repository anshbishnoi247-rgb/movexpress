import { Package } from "lucide-react";
import { additemslist } from "../common/Helper";
import { AddItemsList } from "../common/Card";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const Additems = () => {
  const [quantities, setQuantities] = useState({});
  const [search, setSearch] = useState();

  return (
    <div className="w-full">
      <div className="flex gap-2 items-center border-1  border-black/20 p-3 rounded-xl ">
        <div className="p-2 bg-violetprimary rounded-lg ">
          <Package size={18} className="text-white" />
        </div>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
            console.log(search);
          }}
          placeholder="search for items ...."
          className="w-full outline-none"
        />
      </div>

      <div className="mt-2 max-h-[240px] font-inter grid grid-cols-1 custom-scrollbar gap-2 overflow-y-scroll">
        {additemslist.map((obj, index) => {
          return (
            <AddItemsList
              quantities={quantities}
              setQuantities={setQuantities}
              search={search}
              key={index}
              item={obj.name}
              quantity={obj.items}
            />
          );
        })}
      </div>
      <button
        type="button"
        className="border-1 flex font-medium items-center justify-center py-3 text-violetprimary gap-2  mt-3 border-violetprimary border-dashed rounded-xl w-full"
      >
        <Plus size={15} /> Add custom items
      </button>

      <div className="w-full shadow-sm rounded-xl max-h-[200px] custom-scrollbar overflow-y-scroll  bg-blue-300/10 mt-4 py-2 px-2 ">
        {Object.keys(quantities).map((category) => {
          const hasQuantity = Object.values(quantities[category]).some(
            (qty) => qty > 0
          );

          if (!hasQuantity) return null;
          return (
            <div
              className="max-w-[510px] relative rounded-xl p-2 sm:p-2 sm:px-4 m-auto bg-white shadow-md my-2"
              key={category}
            >
              <button
                type="button"
                className="absolute right-1.5 shadow-xs/30 shadow-sm rounded-full p-0.5 top-1.5 "
              >
                <X
                  size={20}
                  onClick={() => {
                    const updated = { ...quantities };
                    Object.keys(updated[category]).forEach((item) => {
                      updated[category][item] = 0;
                    });
                    setQuantities(updated);
                  }}
                  className="text-vinegar rounded-full"
                />
              </button>
              {Object.keys(quantities[category]).map((item) => {
                if (quantities[category][item] <= 0) return null;

                return (
                  <div
                    className="flex my-1 items-center justify-between pr-10"
                    key={item}
                  >
                    <p className=" sm:text-sm">{item}</p>
                    <span className="text-xs sm:px-2 px-1 sm:py-0.5 shadow-md rounded-full">
                      {quantities[category][item]}
                    </span>
                  </div>
                );
              })}

              <h3 className="text-sm text-philippine font-inter">{category}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Additems;
