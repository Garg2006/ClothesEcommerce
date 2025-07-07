import { useEffect, useState } from "react";
import { products } from "../../src/assets/assets";
import Card from "../Card";

const ClothesCollection = ({ filter, searchFilter }) => {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    if (!temp.length) setTemp([...products]);
  }, []);

  const positionChange = (e) => {
    const { value } = e.target;
    if (value === "asc") {
      setTemp([...temp].sort((a, b) => a.price - b.price));
    } else if (value === "desc") {
      setTemp([...temp].sort((a, b) => b.price - a.price));
    } else {
      setTemp([...products]);
    }
  };

  return (
    <div className="flex-1">
      <div className="flex justify-between text-base sm:text-2xl mb-4 flex-1">
        <div className="flex items-center justify-center  gap-2 mb-3">
          <p className="text-gray-500 text-2xl">
            ALL
            <span className="text-gray-700 font-medium"> COLLECTIONS</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        <select
          name=""
          id=""
          className="border-2 border-gray-300 text-sm px-2 focus:border-black cursor-pointer"
          onChange={positionChange}
        >
          <option value="relavent">Sort by: Relavent</option>
          <option value="asc">Sort by: Low to High </option>
          <option value="desc">Sort by: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {temp
          .filter((product) => {
            const matchesSearch = product.name
              .toLowerCase()
              .includes(searchFilter.toLowerCase());

            const matchesType = filter.type.length
              ? filter.type.includes(product.subCategory)
              : true;
            const matchesCategory = filter.category.length
              ? filter.category.includes(product.category)
              : true;

            if (searchFilter) {
              return matchesSearch && matchesType && matchesCategory;
            }
            return matchesType && matchesCategory;
          })
          .map((product) => {
            return (
              <Card
                key={product._id}
                desc={product.name}
                img={product.image}
                refer={product._id}
                price={product.price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ClothesCollection;
