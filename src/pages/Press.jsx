import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeComp from "../components/MarqueeComp";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

const Press = () => {
  
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col6 col-md-6 py-lg-5" >
              <h1 className="heading1 marginh mt-5">
                THE MEDIA MENTIONS <br />
                <span style={{ color: "rgb(251, 169, 25)" }}>
                  PRESS RELEASES
                </span>
              </h1>

              <p className="para1 py-3">
                With over 15+ brands and 35+ outlets across India, First Fiddle
                Restaurants has beloved brand across most Tier 1 and Tier 2
                cities!
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 text-center mt-5">
              <img  src="/imagesff/press-Priyank.webp" alt="" width="95%" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container">
          <div className="row ">
            <div className="col-md-4"></div>
            <div className="col-4 text-center d-lg-block d-none ">
              <button
                className="press btn-lg  text-white fw-bold  mt-4"
                style={{ backgroundColor: "#fba919" }}
              >
                OFFLINE
              </button>
              <button
                className="press btn btn-lg text-white fw-bold"
                style={{ fontSize: "2rem" }}
              >
                ONLINE
              </button>
            </div>
            <div className="col-12 text-center d-lg-none mt-5 ">
              <button
                className=" btn-lg  text-white fw-bold press"
                style={{ backgroundColor: "#fba919" }}
              >
                OFFLINE
              </button>
              <button
                className="btn btn-lg text-white fw-bold press"
                style={{ fontSize: "2rem" }}
              >
                ONLINE
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img  src="/imagesff/PressRelease-img1.png" alt="" width="95%" />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img  src="/imagesff/PressRelease-img2.png" alt="" width="95%" />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img  src="/imagesff/PressRelease-img3.jpg" alt="" width="95%" />
              </a>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img  src="/imagesff/PressRelease-img4.png" alt="" width="95%" />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img  src="/imagesff/PressRelease-img5.png" alt="" width="95%" />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img  src="/imagesff/PressRelease-img6.jpg" alt="" width="95%" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <MarqueeComp />
    </>
  );
};

export default Press;
