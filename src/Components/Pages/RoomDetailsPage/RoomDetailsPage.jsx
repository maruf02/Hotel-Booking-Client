import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DemoPage from "./DemoPage";
import StarRatings from "react-star-ratings";

const RoomDetailsPage = () => {
  const [reviews, setReviews] = useState([]);
  const carDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(reviews.length);
  const {
    _id,
    image,
    image1,
    image2,
    image3,
    image4,
    seatNum,
    CategoryName,
    availability,
    price,
    name,
    description,
  } = carDetails;

  console.log(seatNum);

  const images = [
    {
      original: carDetails.image,
      thumbnail: carDetails.image,
    },
    {
      original: carDetails.image1,
      thumbnail: carDetails.image1,
    },
    {
      original: carDetails.image2,
      thumbnail: carDetails.image2,
    },
    {
      original: carDetails.image3,
      thumbnail: carDetails.image3,
    },
    {
      original: carDetails.image4,
      thumbnail: carDetails.image4,
    },
  ];
  useEffect(() => {
    fetch(`https://b8-a11-hotel-booking-server.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // ********************************************
  const handleMyCart = (event) => {
    event.preventDefault();
    // console.log("button click");
    const userName = user.displayName;
    const Brand = {
      roomId: _id,
      userName,
      image,
      CategoryName,
      price,
      name,
    };

    // **************************************************

    // fetch(`https://b8-a11-hotel-booking-server.vercel.app/review/${roomId}`, {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   credentials: "include",
    // })
    //   .then((res) => res.json())
    //   .then((data) => setReviews(data));
    // console.log("sd", reviews.length);
    // *****************************************
    fetch(`https://b8-a11-hotel-booking-server.vercel.app/allRooms/${_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("gf", availability);
        if (availability === "NO" || availability === "no") {
          Swal.fire({
            title: "Item Unavailable",
            text: "This item is currently unavailable.",
            icon: "error",
            confirmButtonText: "OK",
          });
        } else if (availability === "Yes" || availability === "YES") {
          window.location.href = `/roomBooking/${CategoryName}/${_id}`;
        }
      });
  };

  return (
    <div className="pb-[120%] md:pb-[55%] lg:pb-0">
      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* left */}
        <div className="w-full  ">
          <div className="w-full">
            <Gallery items={images} autoPlay={true} slideDuration={4000} />
          </div>
          <div className="py-2">
            <div className="card w-full bg-[#adebeb] text-black">
              <div className="card-body">
                <h2 className="card-title">Short Description:</h2>
                <p>{description}</p>
                <p className="py-2 text-center text-2xl font-bold">
                  Our customer's valuable Feedback:({reviews.length})
                </p>
                <div className="flex  flex-row gap-2 flex-wrap justify-center">
                  {reviews.length > 0 ? (
                    reviews.map((review) => (
                      <DemoPage key={review._id} review={review}></DemoPage>
                    ))
                  ) : (
                    <p className=" text-2xl font-bold text-center text-red-700">
                      No Review Found
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* left */}
        {/* right */}

        <div className="w-full  h-36">
          <div>
            <div className="py-2">
              <div className="card w-full bg-[#3399ff] text-black">
                <div className="card-body">
                  <h2 className="card-title text-3xl md:text-5xl text-[#000066] font-bold">
                    {CategoryName}-{name}
                  </h2>
                  <p className="text-5xl text-red-800 font-bold">
                    ${price} /<span className="text-2xl">Per Night</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mx-10 py-2">
              <div className="card w-full bg-slate-400 text-black text-xl">
                <div className="card-body">
                  <h2 className="card-title">Details:</h2>
                  <p>
                    Name: {CategoryName}-{name}
                  </p>
                  <h2 className="card-title">
                    Availability:
                    {availability === "Yes" || availability === "YES" ? (
                      <p className="  text-green-300  ">Available</p>
                    ) : (
                      <p className="  text-red-800 ">Already Booked</p>
                    )}
                  </h2>
                  <p>Seat Num: {seatNum}</p>
                  <p>Price: ${price}/Per Night</p>
                  <h2 className="flex flex-col md:flex-row gap-2 ">
                    <span className="pt-[2px]">
                      TotalRating: ({reviews.length})
                    </span>
                    <StarRatings
                      rating={reviews.length}
                      starRatedColor="#f39c12"
                      starHoverColor="#f39c12"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                      name="rating"
                    />
                  </h2>
                </div>
              </div>
            </div>
            <div className="pt-2 bg-red-400 mx-10 h-12 rounded-2xl text-center">
              <button
                // onClick={handleMyCart}
                onClick={handleMyCart}
                className="text-black text-xl font-bold w-full"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {/* right */}
      </div>
    </div>
  );
};

export default RoomDetailsPage;
