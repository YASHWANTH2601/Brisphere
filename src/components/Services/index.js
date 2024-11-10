import React from "react";
import { MdOutlineWifi } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { FaCarRear } from "react-icons/fa6";
import { BiCycling } from "react-icons/bi";
import { IoMapSharp } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import "./index.css";
import Footer from "../Footer";
export default function Service() {
  return (
    <>
      <h1 className="discoveryHeading">Services</h1>
      <div className=" d-flex flex-column align-items-center">
        <div className="d-flex justify-content-space-between">
          <div className="eachService">
            <MdOutlineWifi size={40} color="gray" />
            <h4>High Speed Internet</h4>
            <p>
              Opitical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas
            </p>
          </div>
          <div className="eachService">
            <MdLunchDining size={40} color="gray" />
            <h4>Healthy Meals</h4>
            <p>
              A healthy breakfast and pleasant dinner will be servide at your
              space every single day for your entire duration of stay with
              option of paid order within
            </p>
          </div>
          <div className="eachService">
            <GoHomeFill size={40} color="gray" />
            <h4>Homely Stay</h4>
            <p>
              Designed for working professionals with spacious
              interiors.comfortable beds and sleekly attached kitchen are some
              of the conforts providedin
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-space-between">
          <div className="eachService">
            <FaCarRear size={40} color="gray" />
            <h4>Transportation</h4>
            <p>
              Opitical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas
            </p>
          </div>
          <div className="eachService">
            <BiCycling size={40} color="gray" />
            <h4>Food Delivery</h4>
            <p>
              A healthy breakfast and pleasant dinner will be servide at your
              space every single day for your entire duration of stay with
              option of paid order within
            </p>
          </div>
          <div className="eachService">
            <IoMapSharp size={40} color="gray" />
            <h4>Tourism</h4>
            <p>
              Designed for working professionals with spacious
              interiors.comfortable beds and sleekly attached kitchen are some
              of the conforts providedin
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-space-between">
          <div className="eachService">
            <IoFlag size={40} color="gray" />
            <h4>Job</h4>
            <p>
              Opitical fiber connections provided in not only in your cabins but
              rather to all of the BriSphere scenic working spaces and dinning
              areas
            </p>
          </div>
          <div className="eachService">
            <FaCarRear size={40} color="gray" />
            <h4>Rental Service</h4>
            <p>
              A healthy breakfast and pleasant dinner will be servide at your
              space every single day for your entire duration of stay with
              option of paid order within
            </p>
          </div>
          <div className="eachService">
            <FaShoppingCart size={40} color="gray" />
            <h4>Online Shop</h4>
            <p>
              Designed for working professionals with spacious
              interiors.comfortable beds and sleekly attached kitchen are some
              of the conforts providedin
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
