import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyBookingSingleCard from "../MyBookingSingleCard/MyBookingSingleCard";
import moment from "moment";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const MyBookingPage = () => {
  const allData = useLoaderData();
  const [allCart, setAllCart] = useState(allData);
  const { user } = useContext(AuthContext);
  const userName = user?.displayName;
  //   console.log(allCart.length);
  // const filteredCart = allCart.filter((cart) => cart.userName === userName);

  // useEffect(() => {
  //   // Use async/await and fetch with correct endpoint

  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleDelete = (id, date) => {
    const currentDate = moment();
    const recordDate = moment(date);

    const daysDifference = recordDate.diff(currentDate, "days");
    console.log(date);
    if (daysDifference < 1) {
      Swal.fire(
        "Cannot Delete",
        "You cannot delete this record as the date is less than 1 day from today.",
        "error"
      );
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/Cart/${id}`, {
            method: "DELETE",
            credentials: "include",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                // setAllCart(data);
                const remaining = allCart.filter((cart) => cart._id !== id);
                setAllCart(remaining);
                // *********************
              }
            });
        }
      });
    }
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      className="container mx-auto"
    >
      <Helmet>
        <title>Booking | Seaside Resort</title>
      </Helmet>
      <div className="container mx-auto flex justify-center ">
        {/* <h2>MyCartPage:{allCart.length}</h2> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
          {allCart.map((cart) => (
            <MyBookingSingleCard
              key={cart._id}
              cart={cart}
              handleDelete={() => handleDelete(cart._id, cart.date)}
            ></MyBookingSingleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookingPage;
