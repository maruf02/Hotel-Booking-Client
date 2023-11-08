import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import video from "../../../assets/video/v2.mp4";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import ReactDatePicker from "react-datepicker"; // Corrected import
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const room = useLoaderData();
  const { _id, price, image, CategoryName, name, availability } = room;
  const { user } = useContext(AuthContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMyCart = (event) => {
    event.preventDefault();
    const userName = user.displayName;
    const form = event.target;
    const name1 = form.name.value;
    const nid = form.nid.value;
    const email = form.email.value;
    const date = form.date.value;

    const Brand = {
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

    fetch("http://localhost:5000/Cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Brand),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Data successfully inserted, now update availability
          fetch(`http://localhost:5000/allRooms/${_id}`, {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (
                availability === "Yes" ||
                availability === "yes" ||
                availability === "YES"
              ) {
                // Perform a PATCH operation to update availability in the allRooms collection
                fetch(`http://localhost:5000/allRooms/${_id}`, {
                  method: "PATCH",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ availability: "NO" }),
                })
                  .then((res) => res.json())
                  .then((updateResult) => {
                    if (updateResult.modifiedCount > 0) {
                      // Update state or show a message that availability is updated
                      console.log(
                        "Availability updated to 'NO' in allRooms collection."
                      );
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
            text: `Add this Car into ${userName}'s Cart Successfully`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="relative">
        <div className="w-full h-0 relative pb-[56.250%]">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[700%] md:h-[350%] lg:h-[180%] absolute object-cover"
          ></video>
        </div>
        <div className="absolute top-0 left-0 w-full h-[700%] md:h-[350%] lg:h-[180%] bg-black opacity-80"></div>
        <div className="absolute top-[350%] md:top-[180%] lg:top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-1">
          <h1 className="text-xl lg:text-5xl font-bold mb-5 text-[#00ffcc] uppercase pt-5">
            Add Brand New Cars Here
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
                  minDate={moment().toDate()} // Set the minimum selectable date
                  // Set width and height using inline styles
                />
              </div>

              <div className="form-control mt-6 pb-10">
                <button className="btn btn-primary text-2xl">ADD CAR</button>
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
