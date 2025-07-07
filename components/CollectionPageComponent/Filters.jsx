import React, { useState } from "react";
import menu from "../../src/assets/dropdown_icon.png";

const Filters = ({ setFilter }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleCheckBox = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      if (name == "TYPE") {
        setFilter((prevState) => {
          return { ...prevState, type: [...prevState.type, value] };
        });
      } else {
        setFilter((prevState) => {
          return { ...prevState, category: [...prevState.category, value] };
        });
      }
    } else {
      if (name == "TYPE") {
        setFilter((prevState) => ({
          ...prevState,
          type: [...prevState.type.filter((prevValue) => prevValue !== value)],
        }));
      } else {
        setFilter((prevState) => ({
          ...prevState,
          category: [
            ...prevState.category.filter((prevValue) => prevValue !== value),
          ],
        }));
      }
    }
  };

  return (
    <div className="min-w-60">
      <div className="flex items-center gap-2">
        <h3 className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold">
          FILTERS
        </h3>
        <div
          className="w-2 md:invisible visible"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <img
            src={menu}
            alt=""
            className={`w-5 transiton-all duration-300 ease-in-out ${filterOpen ? "rotate-90" : "rotate-0"}`}
          />
        </div>
      </div>
      <div className={`transition-all duration-300 ease-in-out  ${filterOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden md:max-h-[500px]"}`}>
        <div className={`border border-gray-300 pl-5 py-3 mt-6`}>
          <h4 className="mb-3 text-sm font-medium">TYPE</h4>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="TYPE"
                value="Topwear"
                onChange={handleCheckBox}
                className="cursor-pointer"
              />
              Topwear
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="TYPE"
                value="Bottomwear"
                onChange={handleCheckBox}
                className="cursor-pointer"
              />
              Bottomwear
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="TYPE"
                value="Winterwear"
                onChange={handleCheckBox}
                className="cursor-pointer"
              />
              Winterwear
            </label>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-6 `}>
          <h4 className="mb-3 text-sm font-medium">CATEGORIES</h4>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="CATEGORIES"
                value="Men"
                onChange={handleCheckBox}
                className="cursor-pointer"
              />
              Men
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="CATEGORIES"
                value="Women"
                onChange={handleCheckBox}
                className="cursor-pointer"
              />
              Women
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="CATEGORIES"
                value="Kids"
                onChange={handleCheckBox}
                className="cursor-pointer"
              />
              Kids
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
