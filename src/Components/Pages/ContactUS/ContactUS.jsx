import React from "react";
import video from "../../../assets/video/v2.mp4";
import Swal from "sweetalert2";

const ContactUS = () => {
  const handleAddCar = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const description = form.description.value;

    const Brand = { email, name, phone, description };
    console.log(Brand);

    // form.image.value = "";
    // form.name.value = "";
    // form.brandName.value = "";
    // form.type.value = "";
    // form.price.value = "";
    // form.description.value = "";

    fetch("https://b8-a11-hotel-booking-server.vercel.app/message", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Brand),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your info sent Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="py-14">
      <div className="py-14">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Contact us
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-lime-500 md:text-4xl">
          Contact US for your any Query
        </h2>
      </div>
      <div className="relative ">
        <div className="w-full h-0 relative pb-[56.250%]">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[300%] md:h-[150%] lg:h-full absolute object-cover"
          ></video>
        </div>
        <div className="absolute top-0 left-0 w-full h-[300%] md:h-[150%] lg:h-full bg-black opacity-80"></div>
        <div className="absolute top-[150%] md:top-[80%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-1">
          {/* form  */}
          <div className="card flex-shrink-0 w-screen lg:w-full  shadow-2xl ">
            <form onSubmit={handleAddCar} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter  Email here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg "
                />
              </div>
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
                    placeholder="Enter  Name here"
                    required
                    className="input input-bordered input-secondary  w-full bg-transparent text-lg"
                  />
                </div>
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Phone
                    </span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number here"
                    required
                    className="input input-bordered input-success w-full bg-transparent text-lg"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-3 gap-5">
                <div className="form-control grid grid-rows-2 col-span-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      message
                    </span>
                  </label>
                  <textarea
                    name="description"
                    required
                    className="textarea textarea-info text-lg"
                    placeholder="Enter Message here"
                  ></textarea>
                </div>
              </div>
              <div className="form-control mt-6 pb-10">
                <button className="btn btn-primary text-lg md:text-xl lg:text-2xl ">
                  Send
                </button>
              </div>
            </form>
          </div>
          {/* form  */}
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
