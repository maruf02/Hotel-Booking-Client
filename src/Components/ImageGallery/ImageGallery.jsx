import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery";
import image1 from "../../assets/image/Category_wise (1).jpg";
import image2 from "../../assets/image/Category_wise (2).jpg";
import image3 from "../../assets/image/Category_wise (3).jpg";
import image4 from "../../assets/image/Category_wise (4).jpg";
import image5 from "../../assets/image/Category_wise (5).jpg";
import image6 from "../../assets/image/Category_wise (6).jpg";
import image7 from "../../assets/image/Category_wise (7).jpg";
import image8 from "../../assets/image/Category_wise (8).jpg";
import image9 from "../../assets/image/Category_wise (9).jpg";
import image10 from "../../assets/image/Category_wise (10).jpg";
import image11 from "../../assets/image/Category_wise (11).jpg";
import image12 from "../../assets/image/Category_wise (12).jpg";
import image13 from "../../assets/image/Category_wise (13).jpg";
import image14 from "../../assets/image/Category_wise (14).jpg";
import image15 from "../../assets/image/Category_wise (15).jpg";
import image16 from "../../assets/image/Category_wise (16).jpg";
import image17 from "../../assets/image/Category_wise (17).jpg";
import image18 from "../../assets/image/Category_wise (18).jpg";
import image19 from "../../assets/image/Category_wise (19).jpg";
import image20 from "../../assets/image/Category_wise (20).jpg";

const ImageGallery = () => {
  const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },
    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image9,
    },
    {
      original: image10,
      thumbnail: image10,
    },
    {
      original: image11,
      thumbnail: image11,
    },
    {
      original: image12,
      thumbnail: image12,
    },
    {
      original: image13,
      thumbnail: image13,
    },
    {
      original: image14,
      thumbnail: image14,
    },
    {
      original: image15,
      thumbnail: image15,
    },
    {
      original: image16,
      thumbnail: image16,
    },
    {
      original: image17,
      thumbnail: image17,
    },
    {
      original: image18,
      thumbnail: image18,
    },
    {
      original: image19,
      thumbnail: image19,
    },
    {
      original: image20,
      thumbnail: image20,
    },
  ];
  return (
    <div>
      <div className="py-14">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Our Rooms
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-lime-500 md:text-4xl">
          Our Features Room that Make your life easier and Luxurious
        </h2>
      </div>
      <Gallery items={images} autoPlay={true} slideDuration={4000} />
    </div>
  );
};

export default ImageGallery;
