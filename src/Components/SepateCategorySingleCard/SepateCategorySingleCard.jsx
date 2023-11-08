import React from "react";
import { Link } from "react-router-dom";

const SepateCategorySingleCard = ({ car }) => {
  const { _id, name, image, CategoryName, price, availability, seatNum } = car;
  return (
    <div>
      <div className="card card-compact h-[600px] bg-slate-400 shadow-xl mx-4 md:mx-auto ">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-[300px]" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">BrandName: {CategoryName}</h2>
          <h2 className="card-title">Price: ${price}/Per Night</h2>
          <h2 className="card-title">availability: {availability} </h2>
          <h2 className="card-title">SeatNum: {seatNum} </h2>
          <h2 className="card-title">Total Review: {availability} </h2>
          <div className="flex lg:gap-2 justify-between lg:py-5 ">
            <Link to={`/roomDetails/${CategoryName}/${_id}`}>
              <button className="btn btn-primary w-full"> Details</button>
            </Link>
            <Link to={`/updateRoomDetails/${CategoryName}/${_id}`}>
              <button className="btn btn-primary w-full">Update</button>
            </Link>
            <Link>
              <button className="btn btn-primary w-full">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SepateCategorySingleCard;
