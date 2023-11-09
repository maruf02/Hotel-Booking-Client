import React, { useEffect } from "react";
import BannerSection from "./Sections/BannerSection/BannerSection";
import RoomCategorySection from "./Sections/RoomCategorySection/RoomCategorySection";
import AOS from "aos";
import "aos/dist/aos.css";
import OurFeature from "../OurFeature/OurFeature";
import WhyChoseUS from "../../WhyChoseUS/WhyChoseUS";
import { Helmet } from "react-helmet";
import ImageGallery from "../../ImageGallery/ImageGallery";
import ContactUS from "../ContactUS/ContactUS";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home | Seaside Resort</title>
      </Helmet>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="container mx-auto"
      >
        <BannerSection></BannerSection>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="container mx-auto"
      >
        <WhyChoseUS></WhyChoseUS>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="container mx-auto"
      >
        <RoomCategorySection></RoomCategorySection>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="container mx-auto"
      >
        <OurFeature></OurFeature>
      </div>
      <div>
        <ImageGallery></ImageGallery>
      </div>
      <div>
        <ContactUS></ContactUS>
      </div>
    </div>
  );
};

export default Homepage;
