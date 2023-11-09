import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

const MyBookingSingleCard = ({ cart, handleDelete }) => {
  const {
    _id,
    image,
    CategoryName,
    userName,
    price,
    name1,
    name,
    nid,
    email,
    date,
  } = cart;
  console.log(date);

  // const handleDelete = (id) => {
  //   const currentDate = moment();
  //   const recordDate = moment(date);

  //   const daysDifference = recordDate.diff(currentDate, "days");
  //   console.log(daysDifference);
  //   if (daysDifference < 1) {
  //     Swal.fire(
  //       "Cannot Delete",
  //       "You cannot delete this record as the date is less than 1 day from today.",
  //       "error"
  //     );
  //   } else {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(`http://localhost:5000/Cart/${id}`, {
  //           method: "DELETE",
  //           credentials: "include",
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.deletedCount > 0) {
  //               Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //             }
  //           });
  //       }
  //     });
  //   }
  // };

  return (
    <div>
      <div className="flex flex-row rounded-lg card card-compact  bg-slate-300 text-black shadow-xl ">
        {/* image part */}
        <div className="">
          <img src={image} alt="" className="w-56 h-full rounded-lg" />
        </div>
        {/* right part */}
        <div className="pt-5 text-lg">
          <h2 className="pl-5 text-2xl">
            {CategoryName}-{name}
          </h2>
          <h2 className="pl-5">Price:${price}</h2>
          <h2 className="pl-5">Date:{date}</h2>
          <div className=" ">
            <Link to={`/updateReview/${userName}/${_id}`}>
              <button className="btn btn-error ml-2 my-5">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error ml-2 my-5"
            >
              Remove
            </button>
            <Link to={`/review/${userName}/${_id}`}>
              <button className="btn btn-error ml-2 my-5">Review</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingSingleCard;
