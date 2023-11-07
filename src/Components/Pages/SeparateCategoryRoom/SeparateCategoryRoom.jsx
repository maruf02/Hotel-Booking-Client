import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SepateCategorySingleCard from "../../SepateCategorySingleCard/SepateCategorySingleCard";

const SeparateCategoryRoom = () => {
  const allRooms = useLoaderData();
  const { category } = useParams();

  console.log(allRooms.length);
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="text-center text-5xl ">
          <h2 className="text-[#00b359] font-bold ">{`Our ${category} Brand Car Collection`}</h2>
          <p className="border-b-4 w-2/4 relative left-[25%] mt-3 border-black"></p>
        </div>
        <div className="container mx-auto flex justify-center">
          <div className="  mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  xl:gap-10 ">
            {allRooms.length >= 1 ? (
              <>
                {allRooms.map((car) => (
                  <SepateCategorySingleCard
                    key={car._id}
                    car={car}
                  ></SepateCategorySingleCard>
                ))}
              </>
            ) : (
              <p className="text-red-800 text-5xl text-center">
                No Available Car Right now. Please wait Until Available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparateCategoryRoom;
