import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/background-05-1920-600.jpg";
import i2 from "../../assets/images/background-08-1920-600.jpg";
import i3 from "../../assets/images/background-04-1920-600.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <div className="container-wide container-wide-custom">
        <div className="swiper-container-wrap swiper-slider-variant-3">
          {}
          <div
            className="swiper-container swiper-slider"
            data-height
            data-min-height="300px"
            data-simulate-touch="false"
            data-direction="vertical"
            data-autoplay={450000}
          >
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                data-slide-bg={i1}
                style={{
                  backgroundImage: "url(" + i1 + ")",
                }}
              >
                <div className="swiper-slide-caption">
                  <div className="inset-xl-left-35 inset-xxl-left-125">
                    <div className="container-wide container-wide-custom">
                      <div className="row justify-content-sm-center justify-content-xl-start text-xl-left">
                        <div className="col-md-10 col-xl-12 col-xxl-10">
                          <h4 className="font-italic font-weight-light">
                            {" "}
                            The Best for Bride
                          </h4>
                          <h1>Plan And Book</h1>
                          <div className="d-none d-xl-inline-block offset-top-45">
                            <hr className="divider divider-xl bg-default" />
                          </div>
                          <div className="d-inline-block text-top inset-left-15">
                            <h1>Your Wedding</h1>
                          </div>
                          <div className="offset-top-15 offset-lg-top-65">
                            <a
                              className="btn-width-200 btn btn-primary-outline"
                              href="contacts.html"
                            >
                              Contact us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-slide-bg={i2}
                style={{
                  backgroundImage: "url(" + i2 + ")",
                }}
              >
                <div className="swiper-slide-caption">
                  <div className="inset-xl-left-35 inset-xxl-left-125">
                    <div className="container-wide container-wide-custom">
                      <div className="row justify-content-sm-center justify-content-xl-start text-xl-left">
                        <div className="col-md-10 col-xl-12 col-xxl-10">
                          <h4 className="font-italic font-weight-light">
                            {" "}
                            Your Most Important Day
                          </h4>
                          <h1>Any Wedding Help</h1>
                          <div className="d-none d-xl-inline-block offset-top-45">
                            <hr className="divider divider-xl bg-default" />
                          </div>
                          <div className="d-inline-block text-top inset-left-15">
                            <h1>You Need</h1>
                          </div>
                          <div className="offset-top-15 offset-lg-top-65">
                            <a
                              className="btn-width-200 btn btn-primary-outline"
                              href="contacts.html"
                            >
                              Contact us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-slide-bg={i3}
                style={{
                  backgroundImage: "url(" + i3 + ")",
                }}
              >
                <div className="swiper-slide-caption">
                  <div className="inset-xl-left-35 inset-xxl-left-125">
                    <div className="container-wide container-wide-custom">
                      <div className="row justify-content-sm-center justify-content-xl-start text-xl-left">
                        <div className="col-md-10 col-xl-12 col-xxl-10">
                          <h4 className="font-italic font-weight-light">
                            {" "}
                            Everything for Your Wedding
                          </h4>
                          <h1>Planning Great</h1>
                          <div className="d-none d-xl-inline-block offset-top-45">
                            <hr className="divider divider-xl bg-default" />
                          </div>
                          <div className="d-inline-block text-top inset-left-15">
                            <h1>Weddings</h1>
                          </div>
                          <div className="offset-top-15 offset-lg-top-65">
                            <a
                              className="btn-width-200 btn btn-primary-outline"
                              href="contacts.html"
                            >
                              Contact us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-wide container-wide-custom">
              <div className="inset-xl-left-45 inset-xxl-left-85">
                {}
                <div className="swiper-pagination swiper-pagination-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
