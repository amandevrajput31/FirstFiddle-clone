import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeComp from "../components/MarqueeComp";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

const Contact = () => {
 
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col6 col-md-6">
              <h1 className="heading1 marginhc">
                KNOW MORE
                <br />{" "}
                <span style={{ color: "rgb(251, 169, 25)" }}>CONTACT US</span>
              </h1>

              <p className="para2 mt-3" style={{ color: "rgb(251, 169, 25)" }}>
                Address
              </p>
              <p className="para2 text-white">
                S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel
                Park, New Delhi, Delhi 110017
              </p>

              <p className="para2 mt-3" style={{ color: "rgb(251, 169, 25)" }}>
                For Enquiry
              </p>
              <p className="para2 text-white">
                Email: customercare@firstfiddle.in
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 ">
              <div className=" cardstyle" style={{ width: "100%" }}>
                <h2 className="text-white text-center fw-bold">CONTACT US!</h2>

                <form action="">
                  <div className="ab mb-3 text-white">
                    <p>Full Name</p>
                    <input
                      type="text"
                      name=""
                      className="form-control border-white text-white"
                      placeholder="Enter your Name"
                      style={{ padding: "15px", background: "#2a2a2a" }}
                      required
                    />
                  </div>

                  <div className="ab mb-3 text-white">
                    <p>Phone Number</p>
                    <div className="row">
                      <div className="col-5 text-center">
                        <div
                          className="form-control border-white text-white"
                          style={{ padding: "15px", background: "#2a2a2a" }}
                        >
                          <img
                            src="/imagesff/flag.webp"
                            alt=""
                            height="25px"
                            width="30px"
                          />{" "}
                          &nbsp; +91
                        </div>
                      </div>
                      <div className="col-7">
                        <input
                          type="number"
                          name=""
                          className="form-control  border-white text-white"
                          placeholder="Enter your Number"
                          style={{ padding: "15px", background: "#2a2a2a" }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="ab mb-3 text-white">
                    <p>Email</p>
                    <input
                      type="email"
                      name=""
                      className="form-control border-white text-white"
                      placeholder="Enter your Email"
                      style={{ padding: "15px", background: "#2a2a2a" }}
                      required
                    />
                  </div>

                  <div className="ab mb-3 text-white">
                    <p>Message</p>
                    <textarea
                      name=""
                      id=""
                      className="form-control border-white text-white"
                      rows="5"
                      placeholder="Enter your Message..."
                      style={{ background: "#2a2a2a" }}
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      className="btn bg-white fw-bold mt-3"
                      style={{ borderRadius: "20px", padding: "8px 25px" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <h1 className="heading1 marginh text-center mb-5">
          ASK US <br />{" "}
          <span style={{ color: "rgb(251, 169, 25)" }}>ANYTHING</span>
        </h1>
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-4 mb-5 contact" >
              <div className="card card2">
                <img
                  className="img12"
                  src="/imagesff/contact-card-Img1.webp"
                  alt=""
                />
                <p className="para2">Why should I invest in F&B?</p>
                <p className="para2">
                  Investing in F&B offers consistent demand, high returns, and
                  diverse revenue streams. First Fiddle, a renowned restaurant,
                  exemplifies success in this industry, making it a compelling
                  investment choice.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 contact" >
              <div className="card card2">
                <img
                  className="img12"
                  src="/imagesff/contact-card-Img2.webp"
                  alt=""
                />
                <p className="para2">What is the Franchise Model?</p>
                <p className="para2">
                  The franchise model is a business arrangement where a
                  franchisor grants a franchisee the right to operate a business
                  using their brand, products, and systems in exchange for fees
                  and royalties.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 contact">
              <div className="card card2">
                <img
                  className="img12"
                  src="/imagesff/contact-card-Img3.webp"
                  alt=""
                />
                <p className="para2">What is the Onboarding Process?</p>
                <p className="para2">
                  The Onboarding Process at First Fiddle Restaurant involves
                  welcoming new team members, providing training, and ensuring a
                  smooth transition into their roles for a seamless start.
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 mb-5 contact" >
              <div className="card card2">
                <img
                  className="img12"
                  src="/imagesff/contact-card-Img4.webp"
                  alt=""
                />
                <p className="para2">How much will be my investment?</p>
                <p className="para2">
                  "Your investment in First Fiddle Restaurant will depend on the
                  specific location and size of your chosen franchise. Contact
                  us for a personalized investment estimate today."
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 contact">
              <div className="card card2">
                <img
                  className="img12"
                  src="/imagesff/contact-card-Img5.webp"
                  alt=""
                />
                <p className="para2">How many franchise have you sold?</p>
                <p className="para2">
                  First Fiddle Restaurants is proud to have sold over 50
                  franchise units worldwide, expanding our brand's presence and
                  sharing our culinary excellence with discerning food lovers
                  everywhere.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 contact">
              <div className="card card2">
                <img
                  className="img12"
                  src="/imagesff/contact-card-Img6.webp"
                  alt=""
                />
                <p className="para2">How much support will you offer?</p>
                <p className="para2">
                  First Fiddle Restaurant offers exceptional support, ensuring
                  your dining experience is flawless. We prioritize your needs
                  and satisfaction to create memorable moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeComp />
    </>
  );
};

export default Contact;
