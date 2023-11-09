import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SepateCategorySingleCard = ({ car }) => {
  const { _id, name, image, CategoryName, price, availability, seatNum } = car;

  const handleMyCart = (event) => {
    event.preventDefault();
    // console.log("button click");

    fetch(`http://localhost:5000/allRooms/${_id}`, {
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
    <div>
      <div className="card card-compact h-[600px] bg-slate-400 shadow-xl mx-4 md:mx-auto ">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-[300px]" />
        </figure>
        <div className="card-body text-black">
          {/* <h2 className="card-title">Room Number: {name}</h2> */}
          <h2 className="card-title">
            Room: {CategoryName}-{name}
          </h2>
          <h2 className="card-title">Price: ${price}/Per Night</h2>
          <h2 className="card-title">
            Availability:
            {availability === "Yes" || availability === "YES" ? (
              <p className="  text-green-300  ">Available</p>
            ) : (
              <p className="  text-red-800 ">Already Booked</p>
            )}
          </h2>

          <h2 className="card-title">SeatNum: {seatNum} </h2>

          <div className="flex lg:gap-2 justify-between lg:py-5 ">
            <Link to={`/roomDetails/${CategoryName}/${_id}`}>
              <button className="btn btn-primary w-full"> Details</button>
            </Link>
            <Link to={`/updateRoomDetails/${CategoryName}/${_id}`}>
              <button className="btn btn-primary w-full">Update</button>
            </Link>

            <button onClick={handleMyCart} className="btn btn-primary ">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SepateCategorySingleCard;
