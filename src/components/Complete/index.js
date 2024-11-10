import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { CiCircleMinus } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";
import Footer from "../Footer";
export default function Complete() {
  return (
    <>
      <div className="homeContainers">
        <div className="homeFirstContainers">
          <div className="text-left">
            <p>Amit Jha</p>
            <p>+91 - 7764997022</p>
            <p>amit.jha6700@gmail.com</p>
            <p>1 Adults and 2 Children</p>
          </div>
          <div className="d-flex">
            <img
              className="tickImg"
              src="https://cdn.pixabay.com/photo/2017/01/13/01/22/ok-1976099_640.png"
            />
            <div>
              <h1>Order Complete</h1>
              <p>Have Questions?</p>
            </div>
          </div>
        </div>
        <div className="homeSecondContainers">
          <div className="checkDate">
            <div className="check1 ">
              <p className="mb-1">CHECK-IN</p>
              <p className="dateInput">01 Feb 2022</p>
            </div>
            <div className="check1 mt-sm-2">
              <p className="mb-1">CHECK-OUT</p>
              <p className="dateInput ">17 Feb 2022</p>
            </div>
          </div>
          <div className="checkDate">
            <div className="check1">
              <p className="m-0 mt-3 mb-2 ">ROOMS</p>
              <div className="d-flex align-items-center justify-content-center mb-2 mb-sm-1">
                <p className="count">2</p>
              </div>
            </div>
            <button className="bookButton">
              <MdCurrencyRupee />
              12,430
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
