import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { CiCircleMinus } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Discover from "../Discover";
import BookingDetails from "../BookIngDetails";
import "./index.css";
export default function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [checkIn, setCheckIn] = useState(new Date().toISOString().slice(0, 10));
  const [checkOut, setCheckOut] = useState("");
  const increse = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  const checkInDate = (event) => {
    setCheckIn(event.target.value);
  };
  const checkOutDate = (event) => {
    setCheckOut(event.target.value);
  };
  const booking = () => {
    navigate("/bookingDetails", {
      state: { count, checkIn, checkOut },
    });
  };

  return (
    <>
      <div className="homeContainer">
        <div className="homeFirstContainer">
          <div className="leftContainer">
            <h2 className="homeHeading mt-sm-4">Work from ladakh</h2>
            <p className="homePara">
              India's first true digital tourism ecosystem
            </p>
            <div className="socialMediaIcons">
              <FaFacebook className="icons" size={25} />
              <AiFillInstagram className="icons" size={25} />
            </div>
          </div>
          <div>
            <img
              className="homeImg"
              src="https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
            />
          </div>
        </div>
        <div className="homeSecondContainer">
          <div className="checkDate">
            <div className="check1 ">
              <p className="mb-1">CHECK-IN</p>
              <input
                onChange={checkInDate}
                type="date"
                className="dateInput "
                value={checkIn}
              />
            </div>
            <div className="check1 mt-sm-2">
              <p className="mb-1">CHECK-OUT</p>
              <input
                onChange={checkOutDate}
                type="date"
                className="dateInput"
                value={checkOut}
              />
            </div>
          </div>
          <div className="checkDate">
            <div className="check1">
              <p className="m-0 mt-3 mb-2 ">ROOMS</p>
              <div className="d-flex align-items-center justify-content-center mb-4 mb-sm-1">
                <button onClick={decrease} className="homeButtons me-2">
                  <CiCircleMinus size={20} />
                </button>
                <p className="count">{count}</p>
                <button onClick={increse} className="homeButtons ms-2">
                  <AiFillPlusCircle size={20} />
                </button>
              </div>
            </div>
            <button onClick={booking} className="bookButton">
              Book
            </button>
          </div>
        </div>
      </div>
      <Discover />
    </>
  );
}
