import React from "react";
import { Link } from "react-router-dom";

const MyBookingSingleCard = ({ cart }) => {
  const { _id, image, CategoryName, userName, price, name1, nid, email, date } =
    cart;
  return (
    <div>
      <div className="flex flex-row rounded-lg card card-compact  bg-slate-300 text-black shadow-xl ">
        {/* image part */}
        <div className="">
          <img src={image} alt="" className="w-56 h-full rounded-lg" />
        </div>
        {/* right part */}
        <div className="pt-5 text-lg">
          <h2 className="pl-5 text-2xl">
            {CategoryName}-{name}
          </h2>
          <h2 className="pl-5">Price:${price}</h2>
          <div className=" ">
            <Link to={`/updateReview/${userName}/${_id}`}>
              <button className="btn btn-error ml-2 my-5">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error ml-2 my-5"
            >
              Remove
            </button>
            <Link to={`/review/${_id}`}>
              <button className="btn btn-error ml-2 my-5">Review</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingSingleCard;
