import React from "react";
import MarqueeComp from "../components/MarqueeComp";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { runBrandAnimations } from "../animations/brandAnimations";

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
   
  const brandRefs = useRef([]);
  brandRefs.current = [];

  const fadeleftRef = useRef();
  const zoomRef1 = useRef();

  const addToBrandRefs = (el) => {
    if (el && !brandRefs.current.includes(el)) {
      brandRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = runBrandAnimations({ brandRefs, fadeleftRef, zoomRef1 });
    return () => ctx.revert();
  }, []);


  return (
    <>
      {/* Section 1: Intro */}
      <section className="py-5 bg-dark ">
        <div className="container">
          <div className="row mt-lg-5">
            <div className="col6 col-md-6 " ref={fadeleftRef}>
              <h1 className="heading12 marginhh">
                KNOW ABOUT <br />
                <span style={{ color: "rgb(251, 169, 25)" }}>OUR BRANDS</span>
              </h1>
              <p className="para1 py-3">
                With over 15+ brands and 35+ outlets across India, First Fiddle
                Restaurants has beloved brand across most Tier 1 and Tier 2
                cities!
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 text-center">
              <img ref={zoomRef1} src="/imagesff/About-image1.webp" alt="About" width="95%" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Brand Images */}
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="heading12 text-white text-center">
            OUR <span style={{ color: "rgb(251, 169, 25)" }}>BRAND</span>
          </h1>

          {/* Grid rows for images */}
          {[
            ["homePAB-IMAGE1.jpg", "homePAB-IMAGE2.jpg", "homePAB-IMAGE3.jpg"],
            ["homePAB-IMAGE4.jpg", "homePAB-IMAGE5.jpg", "homePAB-IMAGE6.png"],
            ["brandImg-10.jpg", "brandImg-11.jpg", "brandImg-12.jpg"],
            ["brandImg-13.png", "brandImg-14.png", "brandImg-15.png"],
            ["brandImg-16.png"],
          ].map((row, i) => (
            <div className="row" key={i} >
              {row.map((img, j) => (
                <div className="col-md-4 text-center mb-5" key={j} ref={addToBrandRefs}>
                  <a href="#">
                    <img
                      src={`/imagesff/${img}`}
                      alt={`Brand ${img}`}
                      width="95%"
                    />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeComp />
    </>
  );
};

export default Brands;
