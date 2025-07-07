import React from "react";
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";
import MarqueeComp from "../components/MarqueeComp";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

const About = () => {
  
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row mt-lg-5">
            <div className="col6 col-md-6 py-lg-5" >
              <h1 className="heading11">
                KNOW ABOUT <br />{" "}
                <span style={{ color: "rgb(251, 169, 25)" }}> OUR STORY </span>
              </h1>

              <p className="para1 py-3">
                With an ongoing legacy spanning across an impressive 23 years,
                First Fiddle Restaurants started as a fine-dine venture of a
                19-year-old Dyslexic college dropout, with the sole dream of
                entertaining and offering mouthwatering meals to patrons.
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <img
              
                src="/imagesff/About-image1.webp"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 bg-dark">
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
            <div className="col6 col-md-6 ">
              <h1 className="heading11 mt-5 py-2">
                THE GAME{" "}
                <span style={{ color: "rgb(251, 169, 25)" }}> CHANGER</span>
              </h1>
              <h2 className="he">
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
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark d-lg-block d-none">
        <div className="container">
          <h1 className="heading11 text-white text-center py-5 mb-3">
            EXISTING{" "}
            <span style={{ color: "rgb(251, 169, 25)" }}>FOOTPRINTS</span>
          </h1>
          <div className="row">
            <div className="col-md-6 ">
              <img
                src="/imagesff/about-map.webp"
                alt=""
                style={{ width: "95%" }}
              />
            </div>
            <div className="col6 col-md-6 px-3">
              <div className="row">
                <div className="col-md-4 about">
                  <h4>DIABLO</h4>

                  <h5> • Jaipur</h5>
                  <h5> • Delhi</h5>
                  <h5> • Indore</h5>
                  <h5> • Dehradun</h5>
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
                <div className="col-md-4 about">
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
                <div className="col-md-4 about">
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
      <section className="py-1 bg-dark d-lg-none">
        <div className="container">
          <h1 className="heading11 text-white text-center py-3 mb-2">
            EXISTING{" "} <br/>
            <span style={{ color: "rgb(251, 169, 25)" }}>FOOTPRINTS</span>
          </h1>
          <div className="row">
            <div className="col-md-6 mb-5">
              <img
              
                src="/imagesff/about-map.webp"
                alt=""
                style={{ width: "95%" }}
              />
            </div>
            <div className="col6 col-md-6 mt-3" >
              <div className="row">
                <div className="col-6 about">
                  <h4>DIABLO</h4>

                  <h5> • Jaipur</h5>
                  <h5> • Delhi</h5>
                  <h5> • Indore</h5>
                  <h5> • Dehradun</h5>
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
                <div className="col-6 about">
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
                  <h5>• Shimla-chandigarh Highway</h5>
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
        <div className="container ">
          <h1 className="heading11 text-white text-center py-5 mb-3">
            UPCOMING
            <span style={{ color: "rgb(251, 169, 25)" }}>FOOTPRINTS</span>
          </h1>
          <div className="row">
            <div className="col6 col-md-4" >
              <div className="row">
                <div className="col-md-6 about">
                  <h4>DIABLO</h4>

                  <h5> • Hyderabad</h5>
                  <h5> • Chandigarh</h5>
                  <h5> • Noida</h5>
                  <h5> • Pune</h5>

                  <h4>FLYING SAUCER</h4>

                  <h5> • Janshi</h5>
                </div>
                <div className="col-md-6 about">
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
          <h1 className="heading11 text-white text-center py-3 mb-2">
            UPCOMING <br/>
            <span style={{ color: "rgb(251, 169, 25)" }}> FOOTPRINTS</span>
          </h1>
          <div className="row">
            <div className="col-md-6 text-center mb-5">
              <img
                src="/imagesff/about-map.webp"
                alt=""
                style={{ width: "95%" }}
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col6 col-md-4 py-3 ">
              <div className="row">
                <div className="col-6 about">
                  <h4>DIABLO</h4>

                  <h5> • Hyderabad</h5>
                  <h5> • Chandigarh</h5>
                  <h5> • Noida</h5>
                  <h5> • Pune</h5>

                  <h4>FLYING SAUCER</h4>

                  <h5> • Janshi</h5>
                </div>
                <div className="col-6 about">
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
          <div className="row mb-3">
            <div className="col-md-4 d-lg-none text-center ">
              <h1 className="heading11">
                MEET THE
                <span style={{ color: "rgb(251, 169, 25)" }}> TEAM</span>
              </h1>
              <p className="para1 mb-4 mt-3" style={{ textAlign: "center" }}>
                Without question, it is the team behind the brands that make it
                a favourite for its guests. Here's a look into those who made
                the dream work.
              </p>
            </div>
            <div className="col-md-4 mb-3 text-center about">
              <img src="/imagesff/about-img1.webp" className="img11" alt="" />
            </div>
            <div className="col-md-4 mb-3 text-center about">
              <img src="/imagesff/about-img2.webp" className="img11" alt="" />
            </div>
            <div className="col-md-4 d-lg-block d-none ">
              <h1 className="heading11">
                MEET THE <br />{" "}
                <span style={{ color: "rgb(251, 169, 25)" }}>TEAM</span>
              </h1>
              <p className="para1">
                Without question, it is the team behind the brands that make it
                a favourite for its guests. Here's a look into those who made
                the dream work.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3 text-center about">
              <img
                src="/imagesff/about-img3.webp"
                className="img11"
                alt=""
              />
            </div>
            <div className="col-md-4 mb-3 text-center about">
              <img
                src="/imagesff/about-img4.jpeg"
                className="img11"
                alt=""
              />
            </div>
            <div className="col-md-4 mb-3 text-center about">
              <img
                src="/imagesff/about-img-5.jpeg"
                className="img11"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <MarqueeComp />
    </>
  );
};

export default About;
