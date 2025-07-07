import React from "react";
import { Link, useOutletContext } from "react-router";

const Card = ({ img, desc, price, refer, onImageClick }) => {
  const { setSelectedSize } = useOutletContext();


  return (
    <Link to={`/${refer}`} className="text-gray-700 cursor-pointer " onClick={()=> setSelectedSize("")}>
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="hover:scale-110 transition ease-in-out "
          onClick={onImageClick}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{desc}</p>
      <p className=" text-sm font-medium">${price}</p>
    </Link>
  );
};

export default Card;
