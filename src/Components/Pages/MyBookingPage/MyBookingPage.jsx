import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyBookingSingleCard from "../MyBookingSingleCard/MyBookingSingleCard";

const MyBookingPage = () => {
  const allCart = useLoaderData();
  const { user } = useContext(AuthContext);
  const userName = user?.displayName;
  //   console.log(allCart.length);
  const filteredCart = allCart.filter((cart) => cart.userName === userName);

  return (
    <div>
      <div className="container mx-auto flex justify-center ">
        {/* <h2>MyCartPage:{allCart.length}</h2> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
          {filteredCart.map((cart) => (
            <MyBookingSingleCard
              key={cart._id}
              cart={cart}
            ></MyBookingSingleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookingPage;
