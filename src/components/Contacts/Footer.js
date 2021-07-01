import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-context bg-gray-accent section-80 section-lg-120">
        <div className="container-wide container-wide-custom">
          <div className="row justify-content-sm-center justify-content-sm-between text-left">
            <div className="col-md-6 col-lg-3 col-xxl-2 offset-xxl-1 order-lg-3">
              <h5 className="title-image-small title-image-left">Tags</h5>
              <div className="offset-top-30">
                <div className="group group-sm">
                  <a className="btn btn-tag btn-tag-outline" href="blog.html">
                    Blog
                  </a>
                  <a className="btn btn-tag btn-tag-outline" href="#">
                    Wedding Planning
                  </a>
                  <a className="btn btn-tag btn-tag-outline" href="#">
                    Tips
                  </a>
                  <a className="btn btn-tag btn-tag-outline" href="#">
                    Bouquets
                  </a>
                  <a className="btn btn-tag btn-tag-outline" href="#">
                    Dresses
                  </a>
                  <a
                    className="btn btn-tag btn-tag-outline"
                    href="masonry-gallery.html"
                  >
                    Photography
                  </a>
                </div>
              </div>
              <div className="offset-top-65 offset-md-top-90" />
              <div className="offset-top-15">
                <h5 className="title-image-small title-image-left">
                  Instagram Feed
                </h5>
                <div
                  className="group-sm flickr widget-flickrfeed offset-top-30"
                  data-lightgallery="group"
                  data-lg-thumbnail="false"
                  data-flickr-tags="wedd1ng2"
                >
                  <a
                    className="flickr-item"
                    data-lightgallery="item"
                    href
                    data-image_c="href"
                    data-type="flickr-item"
                  >
                    <figure className="thumbnail-rayen thumbnail-rayen-primary">
                      <img
                        width={82}
                        height={82}
                        data-title="alt"
                        src="images/_blank.png"
                        alt
                        data-image_q="src"
                      />
                      <figcaption>
                        <span className="icon icon-normal icon-sm icon-sm-variant-2 mdi mdi-plus linear-icon" />
                      </figcaption>
                    </figure>
                  </a>
                  <a
                    className="flickr-item"
                    data-lightgallery="item"
                    href
                    data-image_c="href"
                    data-type="flickr-item"
                  >
                    <figure className="thumbnail-rayen thumbnail-rayen-primary">
                      <img
                        width={82}
                        height={82}
                        data-title="alt"
                        src="images/_blank.png"
                        alt
                        data-image_q="src"
                      />
                      <figcaption>
                        <span className="icon icon-normal icon-sm icon-sm-variant-2 mdi mdi-plus linear-icon" />
                      </figcaption>
                    </figure>
                  </a>
                  <a
                    className="flickr-item"
                    data-lightgallery="item"
                    href
                    data-image_c="href"
                    data-type="flickr-item"
                  >
                    <figure className="thumbnail-rayen thumbnail-rayen-primary">
                      <img
                        width={82}
                        height={82}
                        data-title="alt"
                        src="images/_blank.png"
                        alt
                        data-image_q="src"
                      />
                      <figcaption>
                        <span className="icon icon-normal icon-sm icon-sm-variant-2 mdi mdi-plus linear-icon" />
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 offset-xxl-1 offset-top-60 offset-md-top-0 order-lg-4">
              <h5 className="title-image-small title-image-left">Links</h5>
              {}
              <ul className="list list-marked list-marked-white text-left offset-top-25 inset-left-5 accent-links">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#.html">Testimonials</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="#.html">Venues</a>
                </li>
                <li>
                  <a href="#.html">Bouquets</a>
                </li>
                <li>
                  <a href="#.html">Dresses</a>
                </li>
                <li>
                  <a href="#.html">Photographers</a>
                </li>
                <li>
                  <a href="#.html">Videographers</a>
                </li>
                <li>
                  <a href="#.html">Wedding Planners</a>
                </li>
              </ul>
            </div>
            <div className="col-xxl-1 order-lg-5" />
            <div className="col-md-6 col-lg-3 col-xxl-2 offset-xxl-1 offset-top-60 offset-sm-top-30 offset-lg-top-0 order-lg-2">
              <h5 className="title-image-small title-image-left">
                Contact Information
              </h5>
              {}
              <address className="contact-info offset-top-35 p accent-links">
                {}
                <div className="unit flex-row unit-spacing-xs">
                  <div className="unit-left">
                    <span className="linear-icon icon icon-sm icon-sm-variant-2 icon-normal mdi mdi-map-marker text-bermuda" />
                  </div>
                  <div className="unit-body">
                    <a href="contacts.html">
                      2130 Fulton Street, San Diego, CA 94117-1080 USA
                    </a>
                  </div>
                </div>
                {}
                <div className="unit flex-row unit-spacing-xs offset-top-20">
                  <div className="unit-left">
                    <span className="linear-icon icon icon-sm icon-sm-variant-2 icon-normal mdi mdi-calendar-clock text-bermuda" />
                  </div>
                  <div className="unit-body">
                    <p>Weekdays: 9:00am–6:00pm Weekends: 10:00am–4:00pm</p>
                  </div>
                </div>
                {}
                <div className="unit flex-row unit-spacing-xs offset-top-20">
                  <div className="unit-left">
                    <span className="linear-icon icon icon-sm icon-sm-variant-2 icon-normal mdi mdi-phone text-bermuda" />
                  </div>
                  <div className="unit-body">
                    <p>
                      <a href="tel:#">1-800-3214-987</a>
                      <a className="d-block" href="tel:#">
                        1-800-9514-654
                      </a>
                    </p>
                  </div>
                </div>
                {}
                <div className="unit flex-row unit-spacing-xs offset-top-25">
                  <div className="unit-left">
                    <span className="linear-icon icon icon-sm icon-sm-variant-2 icon-normal mdi mdi-email-outline text-bermuda" />
                  </div>
                  <div className="unit-body">
                    <p>
                      <a href="mailto:#">mail@demolink.org</a>
                    </p>
                  </div>
                </div>
              </address>
              <ul className="list-inline offset-top-30">
                <li>
                  <a
                    className="icon icon-sm icon-circle fa fa-facebook"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-circle fa fa-twitter"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-circle fa fa-pinterest-p"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-circle fa fa-vimeo"
                    href="#"
                  />
                </li>
                <li>
                  <a
                    className="icon icon-sm icon-circle fa fa-google"
                    href="#"
                  />
                </li>
                <li>
                  <a className="icon icon-sm icon-circle fa fa-rss" href="#" />
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-2 offset-xxl-1 offset-top-60 offset-md-top-30 offset-lg-top-0 order-lg-1">
              <a className="d-inline-block" href="index.html">
                <img
                  className="img-responsive center-block"
                  src="images/logo.png"
                  width={135}
                  height={58}
                  alt
                />
              </a>
              <p className="text-left offset-top-20 offset-xl-top-50">
                Perfect Day provides a focused approach towards the wedding
                planning segment. With years of experience in the event
                industry, we stand on a stronger base with the most creative,
                enthusiastic and committed team members, who have developed
                their expertise in the wedding industry.
              </p>
              <p className="text-small offset-top-20 offset-xl-top-50">
                © <span className="copyright-year" /> All Rights Reserved Terms
                of Use and{" "}
                <a className="text-gray-light" href="privacy.html">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
