import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="bg-dark py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3 mb-5">
                    <img src="/imagesff/logo-01.webp" alt=""/>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <h1 className="heading1" style={{textAlign: "left"}}>CONTACT <span style={{color: "rgb(251, 169, 25)"}}>US</span></h1>
                    <p className="para1" style={{textAlign: "left"}}>First Fiddle Restaurants, the pioneers of casual and
                        experiential dining, has been changing the industry for the better for over 20 years.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 style={{color: "rgb(251, 169, 25)"}}>Address</h5>
                            <p className="text-white ">S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New
                                Delhi, Delhi 110017</p>
                        </div>
                        <div className="col-md-6">
                            <h5 style={{color: "rgb(251, 169, 25)"}}>Enquiry</h5>
                            <p className="text-white">Email :customercare@firstfiddle.in</p>
                        </div>
                    </div>
                    <i style={{color:" #ffa500"}} className="ri-linkedin-box-fill"></i>

                    <i style={{color:" #ffa500"}} className="ri-facebook-circle-fill"></i>

                    <i style={{color:" #ffa500"}} className="ri-instagram-line"></i>

                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Footer;
