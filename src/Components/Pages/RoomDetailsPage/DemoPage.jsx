import React from "react";
import StarRatings from "react-star-ratings";

const DemoPage = ({ review }) => {
  const { _id, image, userName, rating, description, currentDate } = review;
  return (
    <div className="card card-compact w-40 mt-8">
      <figure>
        <img
          src={image ? image : "https://i.ibb.co/w4b3n6F/avator.png"} // Replace 'avatar.jpg' with your actual default avatar image
          alt="Shoes"
          className="rounded-full w-32 h-24"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-center">{userName}</h2>
        <StarRatings
          rating={rating}
          starRatedColor="#f39c12"
          starHoverColor="#f39c12"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
          name="rating"
        />
        <p className="text-lg text-center flex flex-wrap pl-5">
          {currentDate ? currentDate : ""}
        </p>
        <p className="text-lg text-center flex flex-wrap pl-5">
          "{description} "
        </p>
      </div>
    </div>
  );
};

export default DemoPage;
