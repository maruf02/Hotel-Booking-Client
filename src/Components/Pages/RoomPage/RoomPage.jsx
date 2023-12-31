import React, { useEffect } from "react";
import RoomCategorySection from "../HomePage/Sections/RoomCategorySection/RoomCategorySection";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const RoomPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      className="container mx-auto"
    >
      <Helmet>
        <title>Rooms | Seaside Resort</title>
      </Helmet>
      <RoomCategorySection></RoomCategorySection>
    </div>
  );
};

export default RoomPage;
