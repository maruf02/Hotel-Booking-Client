import React from "react";
import { Link } from "react-router-dom";

const SepateCategorySingleCard = ({ car }) => {
  const { name, image, CategoryName, price } = car;
  return (
    <div>
      <div className="card card-compact h-[600px] bg-slate-400 shadow-xl mx-4 md:mx-auto ">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-[300px]" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">BrandName: {CategoryName}</h2>
          <h2 className="card-title">Price: ${price}</h2>
          <div className="flex lg:gap-2 justify-between lg:py-5 ">
            <Link>
              <button className="btn btn-primary w-full">See Details</button>
            </Link>
            <Link>
              <button className="btn btn-primary w-full">Update Info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SepateCategorySingleCard;
