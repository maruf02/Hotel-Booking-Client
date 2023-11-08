import React, { useEffect, useState } from "react";
import video from "../../assets/video/v2.mp4";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import ReactDatePicker from "react-datepicker"; // Corrected import
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [allBrands, setAllBrands] = useState([]);
  const room = useLoaderData();

  const { _id, name1, userName, nid, email, date } = room;
  console.log(room);

  const handleMyCart = (event) => {
    event.preventDefault();
    const form = event.target;
    const name1 = form.name1.value;
    const nid = form.nid.value;
    const email = form.email.value;
    const date = form.date.value;
    const updateBrand = {
      name1,
      nid,
      email,
      date,
    };
    //   date calculation with moment js
    // console.log(date);
    // console.log(date2);
    // let date3 = moment(date);
    // let date4 = moment(date2);
    // let dateDiff = date3.diff(date4, "days");
    // console.log(dateDiff);

    fetch(
      `https://b8-a11-hotel-booking-server.vercel.app/Cart/${userName}/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateBrand),
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Brand Name & Image Insert Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
                  name="name1"
                  defaultValue={name1}
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
                  defaultValue={nid}
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
                  defaultValue={email}
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Date: <span className="text-lg">{date}</span>
                  </span>
                </label>
                <ReactDatePicker
                  name="date"
                  defaultValue={date}
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  minDate={moment().toDate()}
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

export default UpdateReview;
