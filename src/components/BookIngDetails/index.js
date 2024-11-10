import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { CiCircleMinus } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
export default function BookingDetails() {
  const location = useLocation();
  const { count = 0, checkIn = "", checkOut = "" } = location.state || {};
  const navigate = useNavigate();
  const [counts, setCount] = useState(1);
  const [checkIns, setCheckIn] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [checkOuts, setCheckOut] = useState(
    new Date().toISOString().slice(0, 10)
  );
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

  const redirect = () => {
    navigate("/complete");
  };
  return (
    <>
      <div className="homeContainers">
        <div className="homeFirstContainers">
          <div className="d-flex flex-column ">
            <input
              className="textInput mb-4"
              type="text"
              placeholder="Amit Jha"
            />
            <input
              placeholder="+91 - 7764997022"
              className="textInput mb-4"
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="amit.jha6700@gmail.com"
              className="textInput "
              type="text"
            />
            <div className="d-flex">
              <input
                placeholder="1 Adult"
                type="text"
                className=" textsInput me-3"
              />
              <input
                placeholder="2 Children"
                type="text"
                className=" textsInput"
              />
            </div>
          </div>
        </div>
        <div className="homeSecondContainers">
          <div className="checkDate">
            <div className="check1 ">
              <p className="mb-1">CHECK-IN</p>
              <input
                onChange={checkInDate}
                value={checkIns}
                type="date"
                className="dateInput  "
              />
            </div>
            <div className="check1 mt-sm-2">
              <p className="mb-1">CHECK-OUT</p>
              <input
                onChange={checkOutDate}
                value={checkOuts}
                type="date"
                className="dateInput"
              />
            </div>
          </div>
          <div className="checkDate">
            <div className="check1">
              <p className="m-0 mt-3 mb-2 ">ROOMS</p>
              <div className="d-flex align-items-center justify-content-center mb-4 mb-sm-1">
                <button onClick={decrease} className="homeButtons me-2">
                  <CiCircleMinus />
                </button>
                <p className="count">{counts}</p>
                <button onClick={increse} className="homeButtons ms-2">
                  <AiFillPlusCircle />
                </button>
              </div>
            </div>
            <button onClick={redirect} className="bookButton">
              <MdCurrencyRupee />
              12,430
              <span className="ms-3">
                <FaArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="footerContainers">
        <div>
          <h1 className="footerHeading">Brisphere</h1>
          <p>Spituk.Ladakh</p>
          <p>India,194101</p>
          <p>+19 - 7764997033</p>
          <p>amit.jha6700@gmail.com</p>
          <button className="locationBtn">Location</button>
        </div>
        <div className="termsContainer">
          <p>terms and conditions privacy policy refunds</p>
        </div>
      </div>
    </>
  );
}
