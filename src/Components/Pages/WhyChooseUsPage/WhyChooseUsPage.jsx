import React, { useEffect } from "react";
import WhyChoseUS from "../../WhyChoseUS/WhyChoseUS";
import AOS from "aos";
import "aos/dist/aos.css";
import OurFeature from "../OurFeature/OurFeature";
import { Helmet } from "react-helmet";

const WhyChooseUsPage = () => {
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
        <title>About | Seaside Resort</title>
      </Helmet>
      <WhyChoseUS></WhyChoseUS>
      <OurFeature></OurFeature>
    </div>
  );
};

export default WhyChooseUsPage;
