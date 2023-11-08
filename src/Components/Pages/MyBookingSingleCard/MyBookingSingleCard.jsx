import React from "react";

const MyBookingSingleCard = ({ cart }) => {
  const { _id, image, CategoryName, name, price } = cart;
  return (
    <div>
      <div className="flex flex-row rounded-lg card card-compact  bg-slate-300 text-black shadow-xl pr-16">
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
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error ml-5 my-5"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingSingleCard;
