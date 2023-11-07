import React from "react";
import video from "../../../assets/video/v2.mp4";
import Swal from "sweetalert2";

const AddRoomCategory = () => {
  const handleAddCar = (event) => {
    event.preventDefault();
    const form = event.target;
    const CategoryName = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const Category = { CategoryName, image, price };
    // console.log(Brand);

    fetch("http://localhost:5000/roomCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Category),
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
        <div className="w-full h-0 relative pb-[56.250%]">
          <video
            src={video} // Replace with your video URL
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[300%] md:h-[150%] lg:h-full absolute object-cover"
          ></video>
        </div>
        <div className="absolute top-0 left-0 w-full h-[300%] md:h-[150%] lg:h-full bg-black opacity-80"></div>
        <div className="absolute top-[150%] md:top-[80%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-1">
          <h1 className="text-xl lg:text-5xl font-bold mb-5 text-[#00ffcc] uppercase pt-5">
            Add New Room Category Here
          </h1>
          {/* form  */}
          <div className="card flex-shrink-0 w-screen lg:w-full  shadow-2xl ">
            <form onSubmit={handleAddCar} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Image URL
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Enter Car Image URL here"
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
                    placeholder="Enter Car Model Name here"
                    required
                    className="input input-bordered input-secondary  w-full bg-transparent text-lg"
                  />
                </div>
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Price here"
                    required
                    className="input input-bordered input-success w-full bg-transparent text-lg"
                  />
                </div>
              </div>

              <div className="form-control mt-6 pb-10">
                <button className="btn btn-primary text-lg md:text-xl lg:text-2xl ">
                  s ADD Room Category
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

export default AddRoomCategory;
