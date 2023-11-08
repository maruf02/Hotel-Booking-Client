import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const RoomDetailsPage = () => {
  const carDetails = useLoaderData();
  const { user } = useContext(AuthContext);

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
    fetch(`http://localhost:5000/allRooms/${_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("gf", availability);
        if (availability === "NO" || availability === "no") {
          // Show a message that the item is unavailable
          Swal.fire({
            title: "Item Unavailable",
            text: "This item is currently unavailable.",
            icon: "error",
            confirmButtonText: "OK",
          });
        } else if (availability === "Yes" || availability === "YES") {
          // You can use the Link component to navigate to the booking page
          window.location.href = "/bookingForm";
        }
      });
  };

  return (
    <div className="pb-[120%] md:pb-[55%] lg:pb-0">
      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* left */}
        <div className="w-full  ">
          <div className="w-full">
            <Gallery
              items={images}
              autoPlay={true} // Enable autoplay
              slideDuration={4000}
            />
          </div>
          <div className="py-2">
            <div className="card w-full bg-[#adebeb] text-black">
              <div className="card-body">
                <h2 className="card-title">Short Description:</h2>
                <p>{description}</p>
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
                  <p className="text-5xl text-red-800 font-bold">${price}</p>
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
                  <p>Availability: {availability}</p>
                  <p>Seat Num: {seatNum}</p>
                  <p>Price: ${price}</p>
                </div>
              </div>
            </div>
            <div className="pt-2 bg-red-400 mx-10 h-12 rounded-2xl text-center">
              <Link to="/bookingForm">
                <button
                  // onClick={handleMyCart}
                  onClick={handleMyCart}
                  className="text-black text-xl font-bold w-full"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* right */}
      </div>
    </div>
  );
};

export default RoomDetailsPage;
