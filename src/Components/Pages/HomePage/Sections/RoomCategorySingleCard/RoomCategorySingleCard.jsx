import React from "react";
import { Link } from "react-router-dom";

const RoomCategorySingleCard = ({ brand }) => {
  const { CategoryName, image, price } = brand;
  //   console.log(object);
  return (
    <div>
      <Link to={`/SeparateRooms/${CategoryName}`}>
        <div className="card card-compact  h-80 bg-blue-800 shadow-xl">
          <figure>
            <img src={image} alt="BMW Image" className="h-72 w-full" />
          </figure>
          <div className="card-body flex flex-row justify-between">
            <h2 className=" text-center text-2xl font-bold text-[#00b359] ">
              {CategoryName}
            </h2>
            <h2 className=" text-center text-2xl font-bold text-[#00b359] ">
              {price}/<span className="text-lg">Per Night</span>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RoomCategorySingleCard;
