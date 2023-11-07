import React, { useEffect, useState } from "react";
import video from "../../../assets/video/v2.mp4";
import Swal from "sweetalert2";

const AddCategoryWiseRoom = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedSeatNum, setSelectedSeatNum] = useState("");
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/roomCategory")
      .then((res) => res.json())
      .then((data) => setAllBrands(data));
  }, []);
  const handleAddCar = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const image1 = form.image1.value;
    const image2 = form.image2.value;
    const image3 = form.image3.value;
    const image4 = form.image4.value;
    const seatNum = form.SeatNum.value;
    const CategoryName = form.roomSize.value;
    const availability = form.availability.value;
    const price = form.price.value;
    const name = form.name.value;
    const description = form.description.value;
    const Brand = {
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
    };
    console.log(Brand);

    // form.image.value = "";
    // form.name.value = "";
    // form.brandName.value = "";
    // form.type.value = "";
    // form.price.value = "";
    // form.description.value = "";

    fetch("http://localhost:5000/allRooms", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Brand),
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

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  const handleAvailability = (event) => {
    setSelectedAvailability(event.target.value);
  };
  const handleSeatNum = (event) => {
    setSelectedSeatNum(event.target.value);
  };
  return (
    <div>
      <div className="relative ">
        <div className="w-full h-0 relative pb-[56.250%]">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[700%] md:h-[350%] lg:h-[180%]  absolute object-cover"
          ></video>
        </div>
        <div className="absolute top-0 left-0 w-full h-[700%] md:h-[350%] lg:h-[180%] bg-black opacity-80"></div>
        <div className="absolute top-[350%] md:top-[180%] lg:top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-1">
          <h1 className="text-xl lg:text-5xl font-bold mb-5 text-[#00ffcc] uppercase pt-5">
            Add Brand New Cars Here
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Image URL-1
                  </span>
                </label>
                <input
                  type="text"
                  name="image1"
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Image URL-2
                  </span>
                </label>
                <input
                  type="text"
                  name="image2"
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Image URL-3
                  </span>
                </label>
                <input
                  type="text"
                  name="image3"
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Image URL-4
                  </span>
                </label>
                <input
                  type="text"
                  name="image4"
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg "
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Room Size
                    </span>
                  </label>
                  {/* <input
                    type="text"
                    name="brandName"
                    placeholder="Enter Brand Name here"
                    required
                    className="input input-bordered input-accent w-full bg-transparent text-lg"
                  /> */}
                  <select
                    className="select select-error w-full text-lg "
                    required
                    name="roomSize"
                    value={selectedBrand}
                    onChange={handleBrandChange}
                  >
                    <option value="" disabled>
                      Choose Car Brand
                    </option>
                    {allBrands.map((brand) => (
                      <option key={brand._id} value={brand.CategoryName}>
                        {brand.CategoryName}
                      </option>
                    ))}
                  </select>
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
                    placeholder="Enter Car Model Name here"
                    required
                    className="input input-bordered input-secondary  w-full bg-transparent text-lg"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Availability
                    </span>
                  </label>
                  <select
                    className="select select-error w-full text-lg"
                    required
                    name="availability"
                    value={selectedAvailability}
                    onChange={handleAvailability}
                  >
                    <option value="" disabled>
                      Select Availability
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Seat Available?
                    </span>
                  </label>
                  <select
                    className="select select-error w-full text-lg "
                    required
                    name="SeatNum"
                    value={selectedSeatNum}
                    onChange={handleSeatNum}
                  >
                    <option value="" disabled>
                      Select Available Seat
                    </option>
                    <option value="No">No</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 gap-5">
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Number
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
                <div className="form-control grid grid-rows-2 col-span-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Short Description
                    </span>
                  </label>
                  <textarea
                    name="description"
                    required
                    className="textarea textarea-info text-lg"
                    placeholder="Enter Short Description here"
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-6 pb-10">
                <button className="btn btn-primary text-2xl ">ADD CAR</button>
              </div>
            </form>
          </div>
          {/* form  */}
        </div>
      </div>
    </div>
  );
};

export default AddCategoryWiseRoom;
