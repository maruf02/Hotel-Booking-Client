import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const ReviewPage = () => {
  const review = useLoaderData();
  const [rating, setRating] = useState(0);
  const { _id, name1, userName, nid, email, date } = review;

  const handleAddCar = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    // const rating = form.rating.value;
    const description = form.description.value;
    const Brand = {
      name,
      rating,
      description,
    };
    // console.log(Brand);

    fetch("https://b8-a11-hotel-booking-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Brand),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Brand Name & Image Insert Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="relative ">
        <img
          src="https://i.ibb.co/PzRX0rJ/automotive-banner.jpg"
          alt="Background Image"
          className="object-cover w-full h-[1100px] lg:h-[700px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-1">
          <h1 className="text-xl lg:text-5xl font-bold mb-5 text-[#00ffcc] uppercase pt-5">
            Add Reviews Here
          </h1>
          {/* form  */}
          <div className="card flex-shrink-0 w-screen lg:w-full  shadow-2xl ">
            <form onSubmit={handleAddCar} className="card-body ">
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Car Model Name here"
                    required
                    className="input input-bordered input-secondary  w-full bg-transparent text-lg"
                  />
                </div>
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Rating
                    </span>
                  </label>
                  {/* <input
                    type="text"
                    name="rating"
                    placeholder="Enter Rating here"
                    required
                    className="input input-bordered input-warning w-full bg-transparent text-lg"
                  /> */}

                  <StarRatings
                    rating={rating}
                    starRatedColor="#f39c12"
                    starHoverColor="#f39c12"
                    changeRating={setRating}
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-5">
                <div className="form-control grid grid-rows-2 col-span-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Short Description
                    </span>
                  </label>
                  <textarea
                    name="description"
                    className="textarea textarea-info text-lg"
                    placeholder="Enter Short Description here"
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-6 pb-10">
                <button className="btn btn-primary text-2xl ">ADD </button>
              </div>
            </form>
          </div>
          {/* form  */}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
