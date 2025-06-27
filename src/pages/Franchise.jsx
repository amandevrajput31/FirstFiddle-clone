import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeComp from "../components/MarqueeComp";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { runFranchiseAnimations } from "../animations/franchiseAnimations";

gsap.registerPlugin(ScrollTrigger);

const Franchise = () => {
  const fadedownRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const fadeupRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const fadeleftRefs = [useRef(), useRef(), useRef(), useRef()];
  const faderightRefs = [useRef(), useRef(), useRef(), useRef()];
  const imgRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const zoomRef1 = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      runFranchiseAnimations({
        fadedownRefs,
        fadeupRefs,
        fadeleftRefs,
        faderightRefs,
        imgRefs,
        zoomRef1,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="video-container1">
        <video
          className=" bg-black"
          src="/videosff/franchiseVideo.mp4"
          loop
          muted
          autoPlay
          style={{ width: "100vw", height: "100vh" }}
        ></video>
      </div>
      <div className="banner-img-div d-lg-none">
        <img src="/imagesff/FranchiseMobileImg.png" alt="" width="100%" />
      </div>

      <section className="py-5 bg-dark d-lg-block d-none">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className=" card11 px-4">
                <h1
                  className="heading2"
                  style={{ color: "black" }}
                  ref={fadedownRefs[0]}
                >
                  20+
                </h1>
                <p className="p1 text-white">Brands</p>
              </div>
            </div>
            <div className="col-2">
              <h1
                className="heading2"
                style={{ color: "#ffa500" }}
                ref={fadeupRefs[0]}
              >
                50+
              </h1>
              <p className="p1 text-white">Franchises</p>
            </div>
            <div className="col-2">
              <h1
                className="heading2"
                style={{ color: "#ffa500" }}
                ref={fadeupRefs[1]}
              >
                15+
              </h1>
              <p className="p1 text-white"> Cities</p>
            </div>
            <div className="col-2">
              <h1
                className="heading2"
                style={{ color: "#ffa500" }}
                ref={fadeupRefs[2]}
              >
                100+
              </h1>
              <p className="p1 text-white">Awards</p>
            </div>
            <div className="col-2">
              <h1
                className="heading2"
                style={{ color: "#ffa500" }}
                ref={fadeupRefs[3]}
              >
                8cr+
              </h1>
              <p className="p1 text-white">People Served</p>
            </div>
            <div className="col-2">
              <h1
                className="heading2"
                style={{ color: "#ffa500" }}
                ref={fadeupRefs[4]}
              >
                100+
              </h1>
              <p className="p1 text-white">Events</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- <section className="py-5 bg-dark d-lg-none">
        <div className="container">
            <div className="row ">
                <div className="col-2">
                       <h1 className="heading2" style={{color: "#ffa500"}}>20+</h1>
                       <p className="p1 text-white">Brands</p>
                </div>
                <div className="col-2">
                    <h1 className="heading2" style={{color: "#ffa500"}}>50+</h1>
                    <p className="p1 text-white">Franchises</p>
                </div>
                <div className="col-2">
                    <h1 className="heading2" style={{color: "#ffa500"}}>15+</h1>
                    <p className="p1 text-white"> Cities</p>
                </div>
                <div className="col-2">
                    <h1 className="heading2" style={{color: "#ffa500"}}>100+</h1>
                    <p className="p1 text-white">Awards</p>
                </div>
                <div className="col-2">
                    <h1 className="heading2" style={{color: "#ffa500"}}>8cr+</h1>
                    <p className="p1 text-white">People Served</p>
                </div>
                <div className="col-2">
                    <h1 className="heading2" style={{color: "#ffa500"}}>100+</h1>
                    <p className="p1 text-white">Events</p>
                </div>
            </div>
        </div>
    </section> --> */}

      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="heading1 text-white text-center">
            PICK A <span style={{ color: "rgb(251, 169, 25)" }}>BRAND</span>
          </h1>
          <div className="row mt-5">
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img
                  ref={imgRefs[0]}
                  src="/imagesff/homePAB-IMAGE1.jpg"
                  alt=""
                  width="95%"
                />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img
                  ref={imgRefs[1]}
                  src="/imagesff/homePAB-IMAGE2.jpg"
                  alt=""
                  width="95%"
                />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img
                  ref={imgRefs[2]}
                  src="/imagesff/homePAB-IMAGE3.jpg"
                  alt=""
                  width="95%"
                />
              </a>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img
                  ref={imgRefs[3]}
                  src="/imagesff/homePAB-IMAGE4.jpg"
                  alt=""
                  width="95%"
                />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img
                  ref={imgRefs[4]}
                  src="/imagesff/homePAB-IMAGE5.jpg"
                  alt=""
                  width="95%"
                />
              </a>
            </div>
            <div className="col-md-4 text-center mb-5">
              <a href="">
                <img
                  ref={imgRefs[5]}
                  src="/imagesff/homePAB-IMAGE6.png"
                  alt=""
                  width="95%"
                />
              </a>
            </div>
          </div>
          <div className="text-center"></div>
        </div>
      </section>

      <section className="py-5 bg-dark d-lg-block d-none">
        <div className="container">
          <h1 className="heading1 text-white text-center mb-5">
            EXISTING{" "}
            <span style={{ color: "rgb(251, 169, 25)" }}>FOOTPRINTS</span>
          </h1>
          <div className="row">
            <div className="col-md-6 ">
              <img
                ref={fadeleftRefs[0]}
                src="/imagesff/about-map.webp"
                alt=""
                style={{ width: "95%" }}
              />
            </div>
            <div className="col6 col-md-6 px-3" ref={faderightRefs[0]}>
              <div className="row">
                <div className="col-md-4 franchise">
                  <h4>DIABLO</h4>

                  <h5> • Jaipur</h5>
                  <h5> • Delhi</h5>
                  <h5> • Indore</h5>
                  <h5> •Dehradun</h5>
                  <h5> • Gurgaon</h5>

                  <h4>FLYING SAUCER</h4>

                  <h5> • Bhopal</h5>

                  <h4>TICKLED PINK</h4>

                  <h5> • Delhi</h5>
                  <h5> • Lucknow</h5>
                  <h5> • Ranchi</h5>

                  <h4>JLWA</h4>

                  <h5> • Kanpur</h5>
                </div>
                <div className="col-md-4 franchise">
                  <h4>LOTD</h4>

                  <h5> • Noida</h5>
                  <h5> • Delhi</h5>
                  <h5> • Hyderabad</h5>
                  <h5> • chennai</h5>
                  <h5> • Bangalore</h5>
                  <h5> • Mumbai</h5>
                  <h5> • Kolkata</h5>
                  <h5> • Lucknow</h5>
                  <h5> • Agra</h5>
                  <h5> • Kanpur</h5>
                  <h5> • Nagpur</h5>
                  <h5> • Rachi</h5>
                  <h5> • Jim Corbrette</h5>
                  <h5> • Jabalpur</h5>
                </div>
                <div className="col-md-4 franchise">
                  <h5> • Siliguri</h5>
                  <h5> • Coimbatore</h5>
                  <h5 style={{ whiteSpace: "nowrap" }}>
                    • Shimla-chandigarh Highway
                  </h5>
                  <h5> • Bhopal</h5>
                  <h5> • Hapur</h5>
                  <h5> • Rishikesh</h5>

                  <h4>LAZEEZ AFFAIRE</h4>

                  <h5> • Delhi</h5>
                  <h5> • Ranchi</h5>

                  <h4>WAREHOUSE</h4>

                  <h5> • Kolkata</h5>
                  <h5> • Delhi</h5>
                  <h5> • Nagpur</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-dark d-lg-none">
        <div className="container">
          <h1 className="heading1 text-white text-center py-3">
            EXISTING{" "}
            <span style={{ color: "rgb(251, 169, 25)" }}>FOOTPRINTS</span>
          </h1>
          <div className="row">
            <div className="col-md-6 mb-5">
              <img
                ref={fadeleftRefs[1]}
                src="/imagesff/about-map.webp"
                alt=""
                style={{ width: "95%" }}
              />
            </div>
            <div className="col6 col-md-6 mt-3" ref={faderightRefs[1]}>
              <div className="row">
                <div className="col-6 text-center franchise">
                  <h4>DIABLO</h4>

                  <h5> • Jaipur</h5>
                  <h5> • Delhi</h5>
                  <h5> • Indore</h5>
                  <h5> •Dehradun</h5>
                  <h5> • Gurgaon</h5>

                  <h4>FLYING SAUCER</h4>

                  <h5> • Bhopal</h5>

                  <h4>TICKLED PINK</h4>

                  <h5> • Delhi</h5>
                  <h5> • Lucknow</h5>
                  <h5> • Ranchi</h5>

                  <h4>JLWA</h4>

                  <h5> • Kanpur</h5>

                  <h4>LAZEEZ AFFAIRE</h4>

                  <h5> • Delhi</h5>
                  <h5> • Ranchi</h5>

                  <h4>WAREHOUSE</h4>

                  <h5> • Kolkata</h5>
                  <h5> • Delhi</h5>
                  <h5> • Nagpur</h5>
                </div>
                <div className="col-6 text-center franchise">
                  <h4>LOTD</h4>

                  <h5> • Noida</h5>
                  <h5> • Delhi</h5>
                  <h5> • Hyderabad</h5>
                  <h5> • chennai</h5>
                  <h5> • Bangalore</h5>
                  <h5> • Mumbai</h5>
                  <h5> • Kolkata</h5>
                  <h5> • Lucknow</h5>
                  <h5> • Agra</h5>
                  <h5> • Kanpur</h5>
                  <h5> • Nagpur</h5>
                  <h5> • Rachi</h5>
                  <h5> • Jim Corbrette</h5>
                  <h5> • Jabalpur</h5>
                  <h5> • Siliguri</h5>
                  <h5> • Coimbatore</h5>
                  <h5> • Shimla-chandigarh Highway</h5>
                  <h5> • Bhopal</h5>
                  <h5> • Hapur</h5>
                  <h5> • Rishikesh</h5>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark d-lg-block d-none">
        <div className="container">
          <h1 className="heading1 text-white text-center mb-5">
            UPCOMING
            <span style={{ color: "rgb(251, 169, 25)" }}>FOOTPRINTS</span>
          </h1>
          <div className="row">
            <div className="col6 col-md-4" ref={fadeleftRefs[2]}>
              <div className="row">
                <div className="col-md-6 franchise">
                  <h4>DIABLO</h4>

                  <h5> • Hyderabad</h5>
                  <h5> • Chandigarh</h5>
                  <h5> • Noida</h5>
                  <h5> • Pune</h5>

                  <h4>FLYING SAUCER</h4>

                  <h5> • Janshi</h5>
                </div>
                <div className="col-md-6 franchise">
                  <h4>LOTD</h4>
                  <h5> • Kalyan</h5>
                  <h5> • Kanpur</h5>
                  <h5> • Varanasi</h5>
                  <h5> • Mohali</h5>
                  <h5> • Indore</h5>
                  <h5> • Haldwani</h5>
                  <h5> • Gorakhpur</h5>

                  <h4>LAZEEZ AFFAIRE</h4>

                  <h5> • Indore</h5>
                  <h5> • Kalyan</h5>
                  <h5> • Meerut</h5>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6 text-center ">
              <img
                ref={faderightRefs[2]}
                src="/imagesff/about-map.webp"
                alt=""
                style={{ width: "95%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-dark d-lg-none">
        <div className="container">
          <h1 className="heading1 text-white text-center py-3">
            UPCOMING
            <span style={{ color: "rgb(251, 169, 25)" }}> FOOTPRINTS</span>
          </h1>
          <div className="row">
            <div className="col-md-6 text-center mb-5">
              <img
                ref={fadeleftRefs[3]}
                src="/imagesff/about-map.webp"
                alt=""
                style={{ width: "95%" }}
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col6 col-md-4 py-3 " ref={faderightRefs[3]}>
              <div className="row">
                <div className="col-6 text-center franchise">
                  <h4>DIABLO</h4>

                  <h5> • Hyderabad</h5>
                  <h5> • Chandigarh</h5>
                  <h5> • Noida</h5>
                  <h5> • Pune</h5>

                  <h4>FLYING SAUCER</h4>

                  <h5> • Janshi</h5>
                </div>
                <div className="col-6 text-center franchise">
                  <h4>LOTD</h4>
                  <h5> • Kalyan</h5>
                  <h5> • Kanpur</h5>
                  <h5> • Varanasi</h5>
                  <h5> • Mohali</h5>
                  <h5> • Indore</h5>
                  <h5> • Haldwani</h5>
                  <h5> • Gorakhpur</h5>

                  <h4>LAZEEZ AFFAIRE</h4>

                  <h5> • Indore</h5>
                  <h5> • Kalyan</h5>
                  <h5> • Meerut</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="heading1 text-white text-center mb-5">
            TOP REASONS TO <br />
            <span style={{ color: "rgb(251, 169, 25)" }}>
              <b>FRANCHISE WITH US</b>
            </span>
          </h1>
          <div className="row text-center">
            <div className="col-md-2"></div>
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <div className=" card-style bg-dark" ref={fadedownRefs[1]}>
                <div className="text-center mb-4">
                  <img
                    src="/imagesff/FranchiseImg-1.webp"
                    alt=""
                    className="img123"
                  />
                </div>
                <h3
                  className="text-center"
                  style={{ color: "rgb(251, 169, 25)" }}
                >
                  EXCLUSIVE <br /> OWNERSHIP
                </h3>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <div className=" card-style bg-dark" ref={fadedownRefs[2]}>
                <div className="text-center mb-4">
                  <img
                    src="/imagesff/FranchiseImg-2.webp"
                    alt=""
                    className="img123"
                  />
                </div>
                <h3
                  className="text-center"
                  style={{ color: "rgb(251, 169, 25)" }}
                >
                  BRAND <br /> ASSOCIATION
                </h3>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row ">
            <div className="col-md-2"></div>
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <div className=" card-style bg-dark" ref={fadeupRefs[5]}>
                <div className="text-center mb-4">
                  <img
                    src="/imagesff/FranchiseImg-3.webp"
                    alt=""
                    className="img123"
                  />
                </div>
                <h3
                  className="text-center"
                  style={{ color: "rgb(251, 169, 25)" }}
                >
                  SUSTAINABLE <br />
                  RETURNS
                </h3>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <div className=" card-style bg-dark" ref={fadeupRefs[6]}>
                <div className="text-center mb-4">
                  <img
                    src="/imagesff/FranchiseImg-4.webp"
                    alt=""
                    className="img123"
                  />
                </div>
                <h3
                  className="text-center"
                  style={{ color: "rgb(251, 169, 25)" }}
                >
                  VISIBILITY
                </h3>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-dark px-5">
        <div className="container text-center ">
          <h1 className="heading1 text-white text-center mb-5">
            YOU ALSO
            <span style={{ color: "rgb(251, 169, 25)" }}>
              <b>UNLOCK</b>
            </span>
          </h1>
          <div className="row ">
            <div className="col-md-4 mb-5  d-flex justify-content-center">
              <div className=" card-style bg-dark" ref={fadedownRefs[3]}>
                <div className="text-center mb-4">
                  <img
                    src="/imagesff/FranchiseImg-5.webp"
                    alt=""
                    className="img123"
                  />
                </div>
                <h3
                  className="text-center"
                  style={{ color: "rgb(251, 169, 25)" }}
                >
                  COLLABORATION
                </h3>
              </div>
            </div>
            <div className="col-md-4 mb-5 d-flex justify-content-center">
              <div className=" card-style bg-dark" ref={fadeupRefs[7]}>
                <div className="text-center mb-4">
                  <img
                    src="/imagesff/FranchiseImg-6.webp"
                    alt=""
                    className="img123"
                  />
                </div>
                <h3
                  className="text-center"
                  style={{ color: "rgb(251, 169, 25)" }}
                >
                  MORE BUSSINESS <br />
                  OPPORTUNITIES
                </h3>
              </div>
            </div>
            <div className="col-md-4 mb-5 d-flex justify-content-center">
              <div className=" card-style bg-dark" ref={fadedownRefs[4]}>
                <div className="text-center mb-4">
                  <img
                    src="/imagesff/FranchiseImg-7.webp"
                    alt=""
                    className="img123"
                  />
                </div>
                <h3
                  className="text-center"
                  style={{ color: "rgb(251, 169, 25)" }}
                >
                  PERSONAL
                  <br />
                  NETWORK
                </h3>
              </div>
            </div>
          </div>
          <div className="text-center "></div>
        </div>
      </section>

      <section className=" bg-dark">
        <div className="container bg-dark">
          <img
            ref={zoomRef1}
            src="/imagesff/FranchiseImg-bigger.webp"
            alt=""
            width="100%"
          />
        </div>
      </section>

      <MarqueeComp />
    </>
  );
};

export default Franchise;
