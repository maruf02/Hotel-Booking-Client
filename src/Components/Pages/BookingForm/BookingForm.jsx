import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import video from "../../../assets/video/v2.mp4";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const room = useLoaderData();
  const { _id, price, image, CategoryName, name, availability, seatNum } = room;
  const { user } = useContext(AuthContext);

  let newSeatNum = seatNum - 1;
  console.log(newSeatNum);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMyCart = (event) => {
    event.preventDefault();
    const userName = user.displayName;

    const form = event.target;
    const name1 = form.name.value;
    const nid = form.nid.value;
    const email = user.email;
    const date = form.date.value;

    const Brand = {
      roomId: _id,
      userName,

      name1,
      nid,
      email,
      date,
      price,
      image,
      CategoryName,
      name,
    };
    console.log(userName);
    fetch("https://b8-a11-hotel-booking-server.vercel.app/Cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Brand),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          fetch(
            `https://b8-a11-hotel-booking-server.vercel.app/allRooms/${_id}`,
            {
              method: "GET",
              headers: {
                "content-type": "application/json",
              },
              credentials: "include",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (
                (availability === "Yes" ||
                  availability === "yes" ||
                  availability === "YES") &&
                seatNum > 1
              ) {
                fetch(
                  `https://b8-a11-hotel-booking-server.vercel.app/allRooms/${_id}`,
                  {
                    method: "PATCH",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      availability: "YES",
                      seatNum: newSeatNum,
                    }),
                    credentials: "include",
                  }
                )
                  .then((res) => res.json())
                  .then((updateResult) => {
                    if (updateResult.modifiedCount > 0) {
                      console.log("aaaaaa");
                    } else {
                      console.log(
                        "Failed to update availability in allRooms collection."
                      );
                    }
                  });
              } else if (
                availability === "Yes" ||
                availability === "yes" ||
                availability === "YES"
              ) {
                // Condition 2: Availability is "YES" but seatNum is 0
                fetch(
                  `https://b8-a11-hotel-booking-server.vercel.app/allRooms/${_id}`,
                  {
                    method: "PATCH",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      availability: "NO",
                      seatNum: 0,
                    }),
                    credentials: "include",
                  }
                )
                  .then((res) => res.json())
                  .then((updateResult) => {
                    if (updateResult.modifiedCount > 0) {
                      console.log("bb");
                    } else {
                      console.log(
                        "Failed to update availability in allRooms collection."
                      );
                    }
                  });
              }
            });

          Swal.fire({
            title: "Success!",
            html: ` Name: ${userName}'s <br/> Info:<br/> Room: ${CategoryName}-${name}<br/> Date: ${date}<br/> Price: $${price}/Per Night<br/> Add this Cart Successfully`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="mb-[120%] md:mb-72 lg:mb-28">
      <div className="relative">
        <div className="w-full h-0 relative pb-[56.250%]">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[320%] md:h-[170%] lg:h-[120%] absolute object-cover"
          ></video>
        </div>
        <div className="absolute top-0 left-0 w-full h-[320%] md:h-[170%] lg:h-[120%] bg-black opacity-80"></div>
        <div className="absolute top-[170%] md:top-[80%] lg:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-1">
          <h1 className="text-xl lg:text-5xl font-bold mb-5 text-[#00ffcc] uppercase pt-5">
            Add Books Here
          </h1>
          {/* form  */}
          <div className="card flex-shrink-0 w-screen lg:w-full shadow-2xl">
            <form onSubmit={handleMyCart} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">NID</span>
                </label>
                <input
                  type="text"
                  name="nid"
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Date
                  </span>
                </label>
                <ReactDatePicker
                  name="date"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  minDate={moment().toDate()}
                />
              </div>

              <div className="form-control mt-6 pb-10">
                <button className="btn btn-primary text-2xl">ADD </button>
              </div>
            </form>
          </div>
          {/* form  */}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
