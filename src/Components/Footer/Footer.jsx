import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <div className="flex items-center justify-center mb-5 text-2xl font-semibold text-green-700">
          <img
            src="https://i.ibb.co/3d9d7Lf/hotel-logo.png"
            className="h-12 mr-3 sm:h-9"
            alt="automotive Logo"
          />
          SeaSide Resort
        </div>

        <span className="block text-lg text-center text-gray-500 dark:text-gray-400">
          © 2023 SeaSide Resort. All Rights Reserved by{" "}
          <span className="text-green-700">SeaSide Resort</span>.
        </span>

        <ul className="flex justify-center mt-5 space-x-5">
          <li>
            <FaFacebook></FaFacebook>
          </li>
          <li>
            <FaInstagram></FaInstagram>
          </li>
          <li>
            <FaTwitter></FaTwitter>
          </li>
          <li>
            <FaYoutube></FaYoutube>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
