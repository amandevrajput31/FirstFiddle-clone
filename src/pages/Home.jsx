import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeComp from "../components/MarqueeComp";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

const Home = () => {

  return (
    <>
      <div className="video-container11">
        <video
          src="/videosff/bannervideo.mp4"
          style={{ width: "100%" }}
          loop
          muted
          autoPlay
          className="bg-dark"
        ></video>
      </div>
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row mt-lg-5">
            <div className="col-md-6 text-center mb-5">
              <img
                
                className="img11"
                src="/imagesff/homefirstfiddle.webp"
                alt=""
              />
            </div>
            <div className="col-md-6 px-lg-5" >
              <h1 className="heading1 d-lg-block d-none">
                GET TO <br /> KNOW{" "}
                <span style={{ color: "rgb(251, 169, 25)" }}>US</span>{" "}
              </h1>
              <h1 className="text-white d-lg-none text-center">
                GET TO KNOW{" "}
                <span style={{ color: "rgb(251, 169, 25)" }}>US</span>{" "}
              </h1>
              <p className="text-white para1 py-3 text-justify">
                First Fiddle Restaurants, one of India's leading and widely
                recognised F&B companies, is owned and piloted by Priyank
                Sukhija. A pioneer in the industry, he started First Fiddle
                Restaurants in 1999 with his first brand, Lazeez Affaire, which
                is a loved fine dine space even today. Having completed 24 years
                since, the company now has more than 15 + brands and 35+ outlets
                to it's name!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark d-lg-block d-none">
        <div className="container">
          <div className="row">
            <div className="col-md-6" >
              <h1 className="heading1 mt-5 py-3">
                The Game{" "}
                <span style={{ color: "rgb(251, 169, 25)" }}> Changer</span>
              </h1>
              <h2 className="he">
                {" "}
                <i> Priyank Sukhija </i>
              </h2>
              <p className="para1 py-5">
                With over 30 restaurants in 23 years under his belt, the
                prolific restaurateur Priyank Sukhija has become somewhat of a
                legend in the industry, starting his journey at a mere age of
                19. Priyank was the first in his family to venture into
                business, hailing from a family of lawyers, going on to create
                an empire in F&B. Following his heart and tongue through his F&B
                career, Priyank has successfully created some of the most
                talked-about brands in the industry - Diablo, Lord of the
                Drinks, Plum by Bent Chair, Lazeez Affaire, Tamasha, The Flying
                Saucer Cafe, and many more.
              </p>
            </div>

            <div className="col-md-1"></div>
            <div className="col-md-5 mb-5 text-center ">
              <img
                className="img11"
                src="/imagesff/home-Priyanksukhija.webp"
                alt=""
                
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-3 bg-dark d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-md-5  text-center">
              <img
                className="img11"
                src="/imagesff/home-Priyanksukhija.webp"
                alt=""
                
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 text-center" >
              <h1 className="heading1 mt-5 py-3">
                The Game
                <span style={{ color: "rgb(251, 169, 25)" }}> Changer</span>
              </h1>
              <h2 className="he">
                <i> Priyank Sukhija </i>
              </h2>
              <p className="para1 py-3 text-justify">
                With over 30 restaurants in 23 years under his belt, the
                prolific restaurateur Priyank Sukhija has become somewhat of a
                legend in the industry, starting his journey at a mere age of
                19. Priyank was the first in his family to venture into
                business, hailing from a family of lawyers, going on to create
                an empire in F&B. Following his heart and tongue through his F&B
                career, Priyank has successfully created some of the most
                talked-about brands in the industry - Diablo, Lord of the
                Drinks, Plum by Bent Chair, Lazeez Affaire, Tamasha, The Flying
                Saucer Cafe, and many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="heading1 text-white text-center">
            PICK A <span style={{ color: "rgb(251, 169, 25)" }}>BRAND</span>
          </h1>
          <div className="row mt-5 ">
            <div className="col-md-4 text-center mb-5" >
              <a href="">
                <img src="/imagesff/homePAB-IMAGE1.jpg" alt="" width="95%" />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5" >
              <a href="">
                <img src="/imagesff/homePAB-IMAGE2.jpg" alt="" width="95%" />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5" >
              <a href="">
                <img src="/imagesff/homePAB-IMAGE3.jpg" alt="" width="95%" />
              </a>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 text-center mb-5" >
              <a href="">
                <img src="/imagesff/homePAB-IMAGE4.jpg" alt="" width="95%" />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5" >
              <a href="">
                <img src="/imagesff/homePAB-IMAGE5.jpg" alt="" width="95%" />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5" >
              <a href="">
                <img src="/imagesff/homePAB-IMAGE6.png" alt="" width="95%" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <MarqueeComp />
    </>
  );
};

export default Home;
