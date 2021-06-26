import React from "react";

import OwlCarousel from "react-owl-carousel";

import $ from "jquery";

import par1 from "../../assets/images/background-09-1920-900.jpg";

import post1 from "../../assets/images/product-logo-21-122x118.png";
import post2 from "../../assets/images/product-logo-22-154x115.png";
import post3 from "../../assets/images/product-logo-23-172x64.png";
import post4 from "../../assets/images/product-logo-24-128x121.png";
import post5 from "../../assets/images/product-logo-25-215x63.png";
import post6 from "../../assets/images/product-logo-26-163x69.png";
import post7 from "../../assets/images/post-1-570x310.jpg";

import content1 from "../../assets/images/product-logo-21-122x118.png";
import content2 from "../../assets/images/product-logo-22-154x115.png";
import content3 from "../../assets/images/product-logo-23-172x64.png";
import content4 from "../../assets/images/product-logo-24-128x121.png";
import content5 from "../../assets/images/product-logo-25-215x63.png";
import content6 from "../../assets/images/product-logo-26-163x69.png";
import content7 from "../../assets/images/post-2-570x310.jpg";
import content8 from "../../assets/images/post-3-570x310.jpg";
import content9 from "../../assets/images/user-elizabeth-wong-80x80.jpg";
import content10 from "../../assets/images/post-01-420x300.jpg";
import content11 from "../../assets/images/post-02-420x300.jpg";
import content12 from "../../assets/images/post-03-420x300.jpg";

import i1 from "../../assets/images/gift-cards-11-960x340.jpg";
import i2 from "../../assets/images/gift-cards-13-480x340.jpg";
import i3 from "../../assets/images/gift-cards-14-480x340.jpg";
import i4 from "../../assets/images/gift-cards-12-960x681.jpg";
import i5 from "../../assets/images/product-logo-21-122x118.png";
import i6 from "../../assets/images/product-logo-22-154x115.png";
import i7 from "../../assets/images/product-logo-23-172x64.png";
import i8 from "../../assets/images/product-logo-24-128x121.png";
import i9 from "../../assets/images/product-logo-25-215x63.png";
import i10 from "../../assets/images/product-logo-26-163x69.png";

import icon1 from "../../assets/images/wedding-icon-1.png";
import icon2 from "../../assets/images/wedding-icon-2.png";
import icon3 from "../../assets/images/wedding-icon-3.png";
import icon4 from "../../assets/images/wedding-icon-4.png";
import icon5 from "../../assets/images/wedding-icon-5.png";
import icon6 from "../../assets/images/wedding-icon-6.png";

const options = {
  loop: true,
  autoplay: false,
  dots: true,
  dotsEach: false,
  nav: false,
  navClass: ["owl-prev", "owl-next"],
  items: 3,
};

class Content extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <main className="page-content">
        {}
        <section className="section-80 section-md-0">
          {}
          <div className="box-offer-wrap list-inline-dashed-lg">
            <div className="section-sm-60 section-md-80 box-offer">
              <a className="d-inline-block d-md-block" href="#">
                <span className="wedding-icon">
                  <img src={icon1} alt="wedding-icon" />
                </span>
                <h5 className="offset-top-20">Accessories</h5>
                <hr className="divider divider-xs bg-bermuda offset-top-20" />
              </a>
            </div>
            <div className="section-sm-60 section-md-80 box-offer">
              <a className="d-inline-block d-md-block" href="#">
                <span className="wedding-icon">
                  <img src={icon2} alt="wedding-icon" />
                </span>
                <h5 className="offset-top-20">Wedding Dresses</h5>
                <hr className="divider divider-xs bg-bermuda offset-top-20" />
              </a>
            </div>
            <div className="section-sm-60 section-md-80 box-offer">
              <a className="d-inline-block d-md-block" href="#">
                <span className="wedding-icon">
                  <img src={icon3} alt="wedding-icon" />
                </span>
                <h5 className="offset-top-20">Decor & Styling</h5>
                <hr className="divider divider-xs bg-bermuda offset-top-20" />
              </a>
            </div>
            <div className="section-sm-60 section-md-80 box-offer">
              <a className="d-inline-block d-md-block" href="#">
                <span className="wedding-icon">
                  <img src={icon4} alt="wedding-icon" />
                </span>
                <h5 className="offset-top-20">Music & DJs</h5>
                <hr className="divider divider-xs bg-bermuda offset-top-20" />
              </a>
            </div>
            <div className="section-sm-60 section-md-80 box-offer">
              <a className="d-inline-block d-md-block" href="#">
                <span className="wedding-icon">
                  <img src={icon5} alt="wedding-icon" />
                </span>
                <h5 className="offset-top-20">Wedding Planners</h5>
                <hr className="divider divider-xs bg-bermuda offset-top-20" />
              </a>
            </div>
            <div className="section-sm-60 section-md-80 box-offer">
              <a className="d-inline-block d-md-block" href="#">
                <span className="wedding-icon">
                  <img src={icon6} alt="wedding-icon" />
                </span>
                <h5 className="offset-top-20">Jewelry</h5>
                <hr className="divider divider-xs bg-bermuda offset-top-20" />
              </a>
            </div>
          </div>
        </section>
        {}
        <section className="section-90 section-md-120 bg-gray-lighten">
          <div className="container-wide container-wide-custom">
            <h3 className="title-image">Our Advantages</h3>
            <div className="row justify-content-sm-center offset-top-90 offset-lg-top-120">
              <div className="col-sm-10 col-md-6 col-xl-3">
                {}
                <div className="icon-box bg-default">
                  <span className="bg-default icon linear-icon icon-circle icon-outline shadow-drop linearicons-clock2" />
                  <div className="offset-top-30 inset-xl-left-35 inset-xl-right-35">
                    <h5>Save Time</h5>
                    <hr className="divider divider-xs bg-bermuda offset-top-15" />
                    <p className="offset-top-25 text-gray-light">
                      The services provided by our wedding planners can save you
                      a lot of time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-xl-3 offset-top-90 offset-md-top-0">
                {}
                <div className="icon-box bg-default">
                  <span className="bg-default icon linear-icon icon-circle icon-outline shadow-drop linearicons-license2" />
                  <div className="offset-top-35 inset-xl-left-35 inset-xl-right-35">
                    <h5>Professional Approach</h5>
                    <hr className="divider divider-xs bg-bermuda offset-top-15" />
                    <p className="offset-top-25 text-gray-light">
                      We will thoroughly plan every element of your wedding.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-xl-3 offset-top-90 offset-xl-top-0">
                {}
                <div className="icon-box bg-default">
                  <span className="bg-default icon linear-icon icon-circle icon-outline shadow-drop linearicons-group-work" />
                  <div className="offset-top-35 inset-xl-left-35 inset-xl-right-35">
                    <h5>Team of Wedding Experts</h5>
                    <hr className="divider divider-xs bg-bermuda offset-top-15" />
                    <p className="offset-top-25 text-gray-light">
                      Perfect Day employs the best wedding experts in Los
                      Angeles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-xl-3 offset-top-90 offset-xl-top-0">
                {}
                <div className="icon-box bg-default">
                  <span className="bg-default icon linear-icon icon-circle icon-outline shadow-drop linearicons-receipt" />
                  <div className="offset-top-35 inset-xl-left-35 inset-xl-right-35">
                    <h5>Acceptable Prices</h5>
                    <hr className="divider divider-xs bg-bermuda offset-top-15" />
                    <p className="offset-top-25 text-gray-light">
                      Our clients value our affordable pricing policy and great
                      service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="btn btn-width-200 btn-primary-outline offset-top-35 offset-lg-top-60"
              href="#.html"
            >
              learn more
            </a>
          </div>
        </section>
        {}
        <section className="section-80 section-lg-0 bg-shark">
          <div className="row no-gutters justify-content-sm-center">
            <div className="col-sm-10 col-md-8 col-lg-12 col-xl-6 inset-left-15 inset-right-15 inset-lg-left-0 inset-lg-right-0">
              {}
              <a className="thumbnail-modern text-left" href="sale-single.html">
                <figure>
                  <img width={960} height={340} src={i1} alt="gift-cards-11" />
                </figure>
                <div className="figcaption thumbnail-modern-figcaption-top">
                  <h4 className="text-spacing-40">Wedding Photography</h4>
                  <p className="offset-top-5">
                    Capture your best wedding moments
                  </p>
                </div>
              </a>
              <div className="row no-gutters justify-content-sm-center offset-top-60 offset-lg-top-0">
                <div className="col-md-6 inset-md-right-15 inset-lg-right-0">
                  {}
                  <a
                    className="thumbnail-modern text-left"
                    href="sale-single.html"
                  >
                    <figure>
                      <img
                        width={480}
                        height={340}
                        src={i2}
                        alt="gift-cards-13"
                      />
                    </figure>
                    <div className="figcaption thumbnail-modern-figcaption-top">
                      <h4 className="text-spacing-40">Wedding Shoes</h4>
                      <p className="offset-top-5">
                        A wide range of perfect wedding shoes
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 offset-top-60 offset-md-top-0 inset-md-right-15 inset-lg-right-0">
                  {}
                  <a
                    className="thumbnail-modern text-left"
                    href="sale-single.html"
                  >
                    <figure>
                      <img
                        width={480}
                        height={340}
                        src={i3}
                        alt="gift-cards-14"
                      />
                    </figure>
                    <div className="figcaption thumbnail-modern-figcaption-bottom">
                      <h4 className="text-spacing-40">Wedding Bouquets</h4>
                      <p className="offset-top-5">
                        Beautiful bouquets for your #1 event
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-12 col-xl-6 offset-top-60 offset-lg-top-0 inset-left-15 inset-right-15 inset-lg-left-0 inset-lg-right-0">
              {}
              <a
                className="thumbnail-modern thumbnail-modern-lg text-left"
                href="sale-single.html"
              >
                <figure>
                  <img width={960} height={680} src={i4} alt="gift-cards-12" />
                </figure>
                <div className="figcaption thumbnail-modern-figcaption-top">
                  <h1 className="text-spacing-40 text-big-64">
                    Wedding Dresses
                  </h1>
                  <p className="h5-variant-2 offset-top-5 offset-lg-top-15">
                    Choose the dress of your dream on our website
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
        {}
        <section className="section-top-70 section-bottom-80 bg-gray-lighten">
          <div className="container-wide container-wide-custom">
            {}
            <div
              className="owl-inset-20 owl-dots-offset-top-35 owl-carousel-fullheight"
              // className="owl-carousel owl-inset-20 owl-dots-offset-top-35 owl-carousel-fullheight"
              data-items={2}
              data-md-items={3}
              data-xxl-items={6}
              data-stage-padding={15}
              data-loop="false"
              data-margin={30}
              data-mouse-drag="false"
              data-dots="true"
            >
              <OwlCarousel {...options}>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={i5}
                    width={122}
                    height={118}
                    alt="product-logo-21"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={i6}
                    width={154}
                    height={115}
                    alt="product-logo-22"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={i7}
                    width={172}
                    height={64}
                    alt="product-logo-23"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={i8}
                    width={128}
                    height={121}
                    alt="product-logo-21"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={i9}
                    width={215}
                    height={63}
                    alt="product-logo-25"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={i10}
                    width={134}
                    height={55}
                    alt="product-logo-26"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={content12}
                    width={122}
                    height={118}
                    alt="product-logo-21"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={content2}
                    width={154}
                    height={115}
                    alt="product-logo-22"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={content3}
                    width={172}
                    height={64}
                    alt="product-logo-23"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={content4}
                    width={128}
                    height={121}
                    alt="product-logo-24"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={content5}
                    width={215}
                    height={63}
                    alt="product-logo-25"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={content6}
                    width={134}
                    height={55}
                    alt="product-logo-26"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={post1}
                    width={122}
                    height={118}
                    alt="product-logo-21"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={post2}
                    width={154}
                    height={115}
                    alt="product-logo-22"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={post3}
                    width={172}
                    height={64}
                    alt="product-logo-23"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={post4}
                    width={128}
                    height={121}
                    alt="product-logo-24"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={post5}
                    width={215}
                    height={63}
                    alt="product-logo-25"
                  />
                </a>
                <a
                  className="box-xl box-flex box-fullheight box-hovered bg-default"
                  href="#"
                >
                  <img
                    className="img-responsive center-block"
                    src={post6}
                    width={134}
                    height={55}
                    alt="product-logo-26"
                  />
                </a>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {}
        <section className="section-80 section-md-120">
          <div className="container-wide container-wide-custom">
            <h3 className="title-image">Our Workshops</h3>
            <div className="row justify-content-sm-center offset-top-35 offset-lg-top-60">
              <div className="col-md-8 col-xl-4">
                {}
                <div className="post-event text-left">
                  <div className="post-event-thumbnail-wrap">
                    {}
                    <figure className="thumbnail-rayen">
                      <img width={570} height={310} src={post7} alt />
                      <figcaption>
                        <a
                          className="text-white"
                          data-lightgallery="item"
                          href="images/post-1-1170x759-original.jpg"
                        >
                          <span className="linear-icon icon icon-normal icon-lg mdi mdi-plus" />
                        </a>
                      </figcaption>
                    </figure>
                    <div className="post-event-list">
                      {}
                      <ul className="list list-20">
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm mdi linearicons-calendar-empty" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">Sep, 29</span>
                          </span>
                        </li>
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm linearicons-alarm2" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">6:00pm</span>
                          </span>
                        </li>
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm linearicons-coin-dollar" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">Free</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="offset-top-20 inset-right-10">
                    <h5>
                      <a className="event-link" href="event-single.html">
                        Perfect Day Workshop: Sophisticated Wedding
                      </a>
                    </h5>
                    <div className="offset-top-15">
                      <p>
                        Creating sophisticated atmosphere at your wedding is not
                        so complex as it may seem. Visit this event held by our
                        wedding planners to...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-xl-4 offset-top-60 offset-xl-top-0">
                {}
                <div className="post-event text-left">
                  <div className="post-event-thumbnail-wrap">
                    {}
                    <figure className="thumbnail-rayen">
                      <img
                        width={570}
                        height={310}
                        src={content7}
                        alt="post-2"
                      />
                      <figcaption>
                        <a
                          className="text-white"
                          data-lightgallery="item"
                          href="images/post-2-1170x759-original.jpg"
                        >
                          <span className="linear-icon icon icon-normal icon-lg mdi mdi-plus" />
                        </a>
                      </figcaption>
                    </figure>
                    <div className="post-event-list">
                      {}
                      <ul className="list list-20">
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm mdi linearicons-calendar-empty" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">Sep, 25</span>
                          </span>
                        </li>
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm linearicons-alarm2" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">5:00pm</span>
                          </span>
                        </li>
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm linearicons-coin-dollar" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">Free</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="offset-top-20 inset-right-10">
                    <h5>
                      <a className="event-link" href="event-single.html">
                        Organizing Proper Catering for Your Wedding
                      </a>
                    </h5>
                    <div className="offset-top-15">
                      <p>
                        Catering is crucial for your wedding’s success. However,
                        it’s quite problematic to organize great catering if you
                        have little to no experience in...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-xl-4 offset-top-60 offset-xl-top-0">
                {}
                <div className="post-event text-left">
                  <div className="post-event-thumbnail-wrap">
                    {}
                    <figure className="thumbnail-rayen">
                      <img
                        width={570}
                        height={310}
                        src={content8}
                        alt="post-3"
                      />
                      <figcaption>
                        <a
                          className="text-white"
                          data-lightgallery="item"
                          href="images/post-3-1170x759-original.jpg"
                        >
                          <span className="linear-icon icon icon-normal icon-lg mdi mdi-plus" />
                        </a>
                      </figcaption>
                    </figure>
                    <div className="post-event-list">
                      {}
                      <ul className="list list-20">
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm mdi linearicons-calendar-empty" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">Sep, 21</span>
                          </span>
                        </li>
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm linearicons-alarm2" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">3:00pm</span>
                          </span>
                        </li>
                        <li className="box-xs bg-accent text-center">
                          <span className="linear-icon icon icon-normal icon-sm linearicons-coin-dollar" />
                          <span className="d-block offset-top-0">
                            <span className="text-small">Free</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="offset-top-20 inset-right-10">
                    <h5>
                      <a className="event-link" href="event-single.html">
                        Wedding Photography Masterclass
                      </a>
                    </h5>
                    <div className="offset-top-15">
                      <p>
                        Every bride appreciates impressive wedding photography,
                        especially if it is well done. This masterclass will
                        teach you how to prepare for your...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="btn btn-width-200 btn-primary-outline offset-top-40 offset-lg-top-60"
              href="events.html"
            >
              view all events
            </a>
          </div>
        </section>
        {}
        <section
          className="section-80 section-md-120 section-overlay section-height-800 breadcrumb-modern parallax-container context-light bg-gray-darkest d-lg-block"
          data-parallax-img={par1}
          data-url={par1}
          data-image-src={par1}
        >
          <div className="parallax-content">
            <div className="container-wide container-wide-custom section-40">
              <div className="row justify-content-sm-center">
                <div className="col-sm-11 col-md-9 col-lg-7 col-xl-5">
                  <div className="offset-top-20">
                    <h3 className="title-image">Newsletter</h3>
                  </div>
                  <p className="offset-top-30 text-center">
                    Sign up to our newsletter and be the first to know about the
                    latest news and
                    <br />
                    wedding planning tips.
                  </p>
                  <div className="offset-top-20">
                    {}
                    <form
                      className="main-form rd-mailform form-inline-custom text-left"
                      data-form-output="form-output-global"
                      data-form-type="subscribe"
                      method="post"
                      action="bat/rd-mailform.php"
                    >
                      <div className="form-group form-group-outside">
                        <div className="input-group">
                          <input
                            className="form-control"
                            id="forms-subscribe-email"
                            type="email"
                            name="email"
                            data-constraints="@Email @Required"
                          />
                        </div>
                        <div className="input-group-btn">
                          <button
                            className="btn btn-width-165 btn-rounded"
                            type="submit"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
        </section>
        {}
        <section className="section-80 section-md-120">
          <div className="container-wide container-wide-custom">
            <div className="row justify-content-sm-center text-left">
              <div className="col-md-10 col-lg-5 col-xxl-4">
                <h3 className="title-image title-image-left">
                  About Our Company
                </h3>
                <p className="offset-top-35">
                  Perfect Day is an Award-Winning company, that has been in the
                  wedding industry for almost a decade and successfully planned,
                  styled and coordinated over 180 weddings and events! We will
                  lead you through the whole intricate process of creating the
                  first, most important day in the life of your new family while
                  offering:
                </p>
                <div className="offset-top-20" />
                {}
                <ul className="list-marked list-link-bermuda-hovered list-marked-variant-2 list-10 inset-left-35">
                  <li className="linear-icon">
                    <a href="#">Wedding Planning</a>
                  </li>
                  <li className="linear-icon">
                    <a href="#">Flowers & Bouquets</a>
                  </li>
                  <li className="linear-icon">
                    <a href="#">Entertainment</a>
                  </li>
                  <li className="linear-icon">
                    <a href="#">Photography</a>
                  </li>
                </ul>
                <a
                  className="btn btn-width-175 btn-primary-outline offset-top-25"
                  href="#"
                >
                  learn more
                </a>
              </div>
              <div className="col-md-10 col-lg-3 offset-top-40 offset-lg-top-0 text-center">
                <div className="row justify-content-sm-center">
                  <div className="col-sm-4 col-lg-12">
                    <h3 className="font-accent linear-text offset-lg-top-20">
                      2k
                    </h3>
                    <h5 className="offset-top-15">Held Ceremonies</h5>
                  </div>
                  <div className="col-sm-4 col-lg-12 offset-top-35 offset-sm-top-0 offset-lg-top-65">
                    {}
                    <h3 className="font-accent counter-wrap linear-text">
                      1.5k
                    </h3>
                    <h5 className="offset-top-15">Happy Newlyweds</h5>
                  </div>
                  <div className="col-sm-4 col-lg-12 offset-top-35 offset-sm-top-0 offset-lg-top-65">
                    {}
                    <h3 className="font-accent counter-wrap">
                      <span
                        className="linear-text counter d-inline-block inset-left-10"
                        data-from={0}
                        data-to={56}
                      />
                    </h3>
                    <h5 className="offset-top-15">Professionals</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-4 col-xxl-3 offset-top-40 offset-lg-top-0">
                {}
                <blockquote className="quote quote-boxed text-left">
                  <div className="quote-boxed-body bg-default">
                    <div className="quote-box" />
                    <h5 className="text-regular font-monospace font-italic text-gray-dark inset-left-10 offset-top-10">
                      <q>
                        I am so thankful to Perfect Day for their expertise,
                        kindness, and attention to detail that allowed us to
                        truly enjoy our wedding day to the fullest! They are the
                        best!
                      </q>
                    </h5>
                  </div>
                  <div className="offset-top-45">
                    {}
                    <div className="unit align-items-center flex-row unit-spacing-sm">
                      <div className="unit-left">
                        <img
                          className="rounded-circle img-responsive center-block"
                          src={content9}
                          width={80}
                          height={80}
                          alt="user-elizabeth"
                        />
                      </div>
                      <div className="unit-body">
                        <h6>
                          <a className="linear-text" href="#">
                            Elizabeth Wong
                          </a>
                        </h6>
                        <p className="text-base offset-top-5 font-italic">
                          Client
                        </p>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        {}
        <section className="section-80 section-md-80 bg-gray-lighten">
          <div className="container-wide container-wide-custom">
            <h3 className="title-image">Latest News</h3>
            <div className="row justify-content-sm-center offset-top-40 offset-lg-top-60">
              <div className="col-sm-10 col-md-6 col-xl-3">
                {}
                <div className="post-box">
                  <div className="post-box-img-wrap">
                    <a className="thumbnail-robben" href="blog-post.html">
                      <span className="thumbnail-robben-img-wrap">
                        <img
                          className="img-responsive center-block"
                          src={content10}
                          width={420}
                          height={300}
                          alt="post-01"
                        />
                      </span>
                    </a>
                    <a className="label-custom-wrap d-inline-block" href="#">
                      <span className="label-custom label-bermuda">
                        Article
                      </span>
                    </a>
                  </div>
                  <div className="post-box-caption bg-default">
                    <span className="icon icon-normal icon-sm linearicons-calendar-empty d-inline-block text-middle linear-icon" />
                    <div className="d-inline-block text-middle">
                      <p className="font-italic">2 days ago</p>
                    </div>
                    <h5 className="offset-top-20">
                      <a href="blog-post.html">
                        Why Hire a Professional Wedding Planner: 7 Useful Tips
                      </a>
                    </h5>
                    <p className="offset-top-20">
                      You might be wondering… Why do I even need a Wedding
                      Planner? What role does a Wedding...
                    </p>
                  </div>
                  <a
                    className="btn-primary-hovered btn btn-block btn-rect btn-icon btn-icon-right text-left"
                    href="blog-post.html"
                  >
                    <span className="icon mdi mdi-arrow-right" />
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-xl-3 offset-top-30 offset-md-top-0">
                {}
                <div className="post-box">
                  <div className="post-box-img-wrap">
                    <a className="thumbnail-robben" href="blog-post.html">
                      <span className="thumbnail-robben-img-wrap">
                        <img
                          className="img-responsive center-block"
                          src={content1}
                          width={420}
                          height={300}
                          alt="post-02"
                        />
                      </span>
                    </a>
                    <a className="label-custom-wrap d-inline-block" href="#">
                      <span className="label-custom label-bermuda">
                        Article
                      </span>
                    </a>
                  </div>
                  <div className="post-box-caption bg-default">
                    <span className="icon icon-normal icon-sm linearicons-calendar-empty d-inline-block text-middle linear-icon" />
                    <div className="d-inline-block text-middle">
                      <p className="font-italic">2 days ago</p>
                    </div>
                    <h5 className="offset-top-20">
                      <a href="blog-post.html">
                        4 Strategies for Choosing a Wedding Design & Style
                      </a>
                    </h5>
                    <p className="offset-top-20">
                      Planning and designing your own wedding is a lot of fun,
                      but can also be very challenging! First and...
                    </p>
                  </div>
                  <a
                    className="btn-primary-hovered btn btn-block btn-rect btn-icon btn-icon-right text-left"
                    href="blog-post.html"
                  >
                    <span className="icon mdi mdi-arrow-right" />
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-xl-3 offset-top-30 offset-xl-top-0">
                {}
                <div className="post-box">
                  <div className="post-box-img-wrap">
                    <a className="thumbnail-robben" href="blog-post.html">
                      <span className="thumbnail-robben-img-wrap">
                        <img
                          className="img-responsive center-block"
                          src={content11}
                          width={420}
                          height={300}
                          alt="post-03"
                        />
                      </span>
                    </a>
                    <a className="label-custom-wrap d-inline-block" href="#">
                      <span className="label-custom label-bermuda">
                        Article
                      </span>
                    </a>
                  </div>
                  <div className="post-box-caption bg-default">
                    <span className="icon icon-normal icon-sm linearicons-calendar-empty d-inline-block text-middle linear-icon" />
                    <div className="d-inline-block text-middle">
                      <p className="font-italic">2 days ago</p>
                    </div>
                    <h5 className="offset-top-20">
                      <a href="blog-post.html">
                        How to Plan an Outdoor Wedding: 5 Important Tips
                      </a>
                    </h5>
                    <p className="offset-top-20">
                      More and more couples are choosing the Great Outdoors as
                      the perfect venue to begin their...
                    </p>
                  </div>
                  <a
                    className="btn-primary-hovered btn btn-block btn-rect btn-icon btn-icon-right text-left"
                    href="blog-post.html"
                  >
                    <span className="icon mdi mdi-arrow-right" />
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-xl-3 offset-top-30 offset-xl-top-0">
                {}
                <div className="post-box">
                  <div className="post-box-img-wrap">
                    <div className="frame-wrap">
                      <div className="thumbnail-video embed-responsive embed-responsive-16by9">
                        <iframe
                          className="embed-responsive-item"
                          width={560}
                          height={300}
                          src="//www.youtube.com/embed/QZzbm-FrkGk"
                          allowFullScreen
                        />
                        <div
                          className="thumbnail-video__overlay video-overlay"
                          style={{
                            backgroundImage: "url(images/post-04-420x300.jpg)",
                          }}
                        >
                          <div className="button-video" />
                        </div>
                      </div>
                      <span className="label-custom label-bermuda">
                        Article
                      </span>
                    </div>
                  </div>
                  <div className="post-box-caption bg-default">
                    <span className="icon icon-normal icon-sm linearicons-calendar-empty d-inline-block text-middle linear-icon" />
                    <div className="d-inline-block text-middle">
                      <p className="font-italic">2 days ago</p>
                    </div>
                    <h5 className="offset-top-20">
                      <a href="blog-post.html">
                        Top 5 Rules for Accessorizing Your Wedding Dress
                      </a>
                    </h5>
                    <p className="offset-top-20">
                      Sure, your wedding dress may be the star of the show, but
                      the right accessories will totally...
                    </p>
                  </div>
                  <a
                    className="btn-primary-hovered btn btn-block btn-rect btn-icon btn-icon-right text-left"
                    href="blog-post.html"
                  >
                    <span className="icon mdi mdi-arrow-right" />
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <a
              className="btn btn-width-200 btn-primary-outline offset-top-40 offset-lg-top-60"
              href="blog.html"
            >
              view all news
            </a>
          </div>
        </section>
        {/* <section>
          {}
          <div
            className="google-map-container"
            data-zoom={15}
            data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
            data-styles="[]"
          >
            <div className="google-map" />
            <ul className="google-map-markers">
              <li
                data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                data-description="9870 St Vincent Place, Glasgow"
                data-icon="images/gmap_marker.png"
                data-icon-active="images/gmap_marker.png"
              />
            </ul>
          </div>
        </section> */}
      </main>
    );
  }
}

export default Content;
