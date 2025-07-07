import React from "react";
import { useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";

const MarqueeComp = () => {

  return (
    <>
      <section className="d-lg-block d-none">
        <div className="video-container2">
          <video
            className="video-background"
            src="/videosff/Home-marqueeVideo.mp4"
            loop
            muted
            autoPlay
          ></video>
          <div className="content py-5">
            <h1
              className="heading1 text-center text-white mb-3 "
              
            >
              BE THE PART OF{" "}
              <span style={{ color: "rgb(251, 169, 25)" }}>OUR JOURNEY </span>{" "}
            </h1>
            <Marquee direction="right" speed={60} pauseOnHover gradient={false}>
              <img
                className="img1 img-h ms-5"
                src="/imagesff/marquee1bizou.png"
                alt=""
              />
              <img
                className="img1 img-h ms-5"
                src="/imagesff/marquee1bougielogo.png"
                alt=""
              />
              <img
                className="img-h ms-5"
                src="/imagesff/marquee1diablo.png"
                alt=""
              />
              <img
                className="img-h ms-5"
                src="/imagesff/marquee1dragonfly.png"
                alt=""
              />
              <img
                className="img-h ms-5"
                src="/imagesff/marquee1lazeez.png"
                alt=""
              />
              <img
                className="img1 img-h ms-5"
                src="/imagesff/marquee1LordDrink.png"
                alt=""
              />
              <img
                className="img1 img-h ms-5"
                src="/imagesff/marquee1misosexy.png"
                alt=""
              />
              <img
                className="img1 ms-4"
                src="/imagesff/marquee1thanks.png"
                alt=""
              />
            </Marquee>
            <Marquee direction="left" speed={60} pauseOnHover gradient={false}>
              <img
                className="img1 ms-4"
                src="/imagesff/marquee2bizoulogo.png"
                alt=""
              />
              <img
                className="img1 ms-4"
                src="/imagesff/marquee2flying.png"
                alt=""
              />
              <img
                className="     ms-4"
                src="/imagesff/marquee2loard.png"
                alt=""
              />
              <img
                className="img1 ms-4"
                src="/imagesff/marquee2openhouse.png"
                alt=""
              />
              <img
                className="img1 ms-4"
                src="/imagesff/marquee2plumCC.png"
                alt=""
              />
              <img
                className="img1 ms-4"
                src="/imagesff/marquee2sitch_skybar.png"
                alt=""
              />
              <img
                className="img1 ms-4"
                src="/imagesff/marquee2tickledpink.png"
                alt=""
              />
              <img
                className="img1 ms-4"
                src="/imagesff/marquee2warehouse.png"
                alt=""
              />
            </Marquee>
          </div>
        </div>
      </section>

      <section className="d-lg-none">
        <div className="bg-img content py-5">
          <h1
            className="heading-marquee text-center text-white mb-3"          
          >
            BE THE PART OF{" "}
            <span style={{ color: "rgb(251, 169, 25)" }}>OUR JOURNEY </span>
          </h1>

          <Marquee direction="left" speed={60} pauseOnHover gradient={false}>
            <img
              className="img1 ms-4"
              src="/imagesff/marquee2bizoulogo.png"
              alt=""
            />
            <img
              className="img1 ms-4"
              src="/imagesff/marquee2flying.png"
              alt=""
            />
            <img
              className="img1 ms-4"
              src="/imagesff/marquee2loard.png"
              alt=""
            />
            <img
              className="img1 ms-4"
              src="/imagesff/marquee2openhouse.png"
              alt=""
            />
            <img
              className="img1 ms-4"
              src="/imagesff/marquee2plumCC.png"
              alt=""
            />
            <img
              className="img1 ms-4"
              src="/imagesff/marquee2sitch_skybar.png"
              alt=""
            />
            <img
              className="img1 ms-4"
              src="/imagesff/marquee2tickledpink.png"
              alt=""
            />
            <img
              className="img1 ms-4"
              src="/imagesff/marquee2warehouse.png"
              alt=""
            />
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default MarqueeComp;
