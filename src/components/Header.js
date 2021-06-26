import React from "react";
import $ from "jquery";
import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";
import "../assets/css/owl.carousel.css";

import i from "../assets/images/logo.png";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $(".rd-navbar").TMStickUp({});
      $(".rd-navbar").addAdditionalClassToToggles(
        ".rd-navbar-original",
        "toggle-original",
        "toggle-original-elements"
      );
      var searchItem = $(".rd-search");
      var $toggle = $('.rd-navbar-search-toggle');
      if ($toggle.length) {
        $toggle.on('click', (function (searchItem) {
          return function () {
            if (!($(this).hasClass('active'))) {
              searchItem.find('input').val('').trigger('propertychange');
            }
          }
        })(searchItem));
      }
    });
  }
  render() {
    return (
      <header className="page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-classic-minimal rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-sm-device-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="1px"
            data-xl-stick-up-offset="1px"
            data-xxl-stick-up-offset="1px"
          >
            <div className="rd-navbar-inner">
              {}
              <div className="rd-navbar-left-side">
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    <a className="brand-name" href="index.html">
                      <img
                        className="img-responsive center-block"
                        src={i}
                        width={135}
                        height={58}
                        alt
                      />
                    </a>
                  </div>
                  {}
                  <button
                    className="rd-navbar-toggle-search-fixed d-lg-none lence-block d-tablet"
                    data-rd-navbar-toggle=".rd-navbar-search-wrap-fixed"
                  />
                </div>
              </div>
              <div className="rd-navbar-right-side">
                <div className="rd-navbar-nav-wrap d-inline-block">
                  {}
                  <ul className="rd-navbar-nav">
                    <li className="active">
                      <a href="index.html">Home</a>
                      {}
                    </li>
                    <li>
                      <a href="vendors.html">Vendors</a>
                      {}
                      <ul className="rd-navbar-dropdown">
                        <li>
                          <a href="vendors-2.html">Vendors #2</a>
                        </li>
                        <li>
                          <a href="single-vendor.html">Single Vendor</a>
                        </li>
                        <li>
                          <a href="single-vendor-2.html">Single Vendor #2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="events.html">Events</a>
                      {}
                      <ul className="rd-navbar-dropdown">
                        <li>
                          <a href="event-single.html">Event Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="sales.html">Sales</a>
                      <ul className="rd-navbar-dropdown">
                        <li>
                          <a href="sale-single.html">Sale page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      {}
                      <ul className="rd-navbar-dropdown">
                        <li>
                          <a href="grid-blog.html">Grid Blog</a>
                        </li>
                        <li>
                          <a href="masonry-blog.html">Masonry Blog</a>
                        </li>
                        <li>
                          <a href="modern-blog.html">Modern Blog</a>
                        </li>
                        <li>
                          <a href="blog-post.html">Blog Post</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-post.html">Pages</a>
                      {}
                      <div className="rd-navbar-megamenu">
                        <div className="row no-gutters justify-content-sm-center">
                          <ul className="col-lg-3">
                            <li>
                              <a href="typography.html">Typography</a>
                            </li>
                            <li>
                              <a href="buttons.html">Buttons</a>
                            </li>
                            <li>
                              <a href="forms.html">Forms</a>
                            </li>
                            <li>
                              <a href="tabs-accordions.html">
                                Tabs & Accordions
                              </a>
                            </li>
                            <li>
                              <a href="tables.html">Tables</a>
                            </li>
                            <li>
                              <a href="progress-bars.html">Progress Bars</a>
                            </li>
                          </ul>
                          <ul className="col-lg-3 offset-top-0">
                            <li>
                              <a href="grid.html">Grid</a>
                            </li>
                            <li>
                              <a href="404.html">404 Page</a>
                            </li>
                            <li>
                              <a href="503.html">503 Page</a>
                            </li>
                            <li>
                              <a href="maintenance.html">Maintenance</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a href="sitemap.html">Sitemap</a>
                            </li>
                          </ul>
                          <ul className="col-lg-3 offset-top-0">
                            <li>
                              <a href="grid-gallery.html">Grid Gallery</a>
                            </li>
                            <li>
                              <a href="grid-gallery-without-padding.html">
                                Grid Gallery without Padding
                              </a>
                            </li>
                            <li>
                              <a href="cobbles-gallery.html">Cobbles Gallery</a>
                            </li>
                            <li>
                              <a href="masonry-gallery.html">Masonry Gallery</a>
                            </li>
                            <li>
                              <a href="privacy.html">Terms of Use</a>
                            </li>
                            <li>
                              <a href="search-results.html">Search Results</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="contacts.html">Contacts</a>
                    </li>
                  </ul>
                </div>
                {}
                <div className="rd-navbar-search-wrap-fixed d-inline-block">
                  <div
                    className="rd-navbar-search-wrap"
                    id="rd-navbar-search-wrap"
                  >
                    <div className="rd-navbar-search">
                      <a
                        className="rd-navbar-search-toggle"
                        data-rd-navbar-toggle=".rd-navbar-search"
                        href="#"
                      >
                        <span />
                      </a>
                      <form
                        className="rd-search rd-navbar-search-custom"
                        action="search-results.html"
                        data-search-live="rd-search-results-live"
                        method="GET"
                      >
                        <div className="form-group">
                          <label
                            className="form-label"
                            htmlFor="rd-navbar-search-form-input"
                          >
                            Search
                          </label>
                          <input
                            className="rd-navbar-search-form-input form-control form-control-gray-lightest"
                            id="rd-navbar-search-form-input"
                            type="text"
                            name="s"
                            autoComplete="off"
                          />
                          <button type="submit">
                            <span className="icon icon-xs fa fa-search" />
                          </button>
                        </div>
                        <div
                          className="rd-search-results-live d-none d-xl-block"
                          id="rd-search-results-live"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <button
                  className="rd-navbar-toggle-search d-none d-lg-inline-block veil-tablet"
                  data-custom-toggle="rd-navbar-search-wrap"
                  data-custom-toggle-disable-on-blur="true"
                />
                {}
                <button
                  className="rd-navbar-info-toggle d-inline-block toggle-original"
                  data-rd-navbar-toggle=".rd-navbar-search-wrap-info toggle-original-elements"
                />
                <div className="rd-navbar-search-wrap-info">
                  {}
                  <address className="contact-info text-left p">
                    <div className="d-block">
                      {}
                      <div className="unit align-items-center align-items-center flex-row unit-spacing-xs">
                        <div className="unit-left">
                          <span className="icon icon-sm icon-circle mdi mdi-map-marker bg-bermuda" />
                        </div>
                        <div className="unit-body">
                          <a className="text-gray" href="contacts.html">
                            2130 Fulton Street, San Diego,{" "}
                            <br className="d-none d-lg-inline-block" /> CA
                            94117-1080 USA
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="d-block">
                      {}
                      <div className="unit align-items-center align-items-center flex-row unit-spacing-xs">
                        <div className="unit-left">
                          <span className="icon icon-sm icon-circle mdi mdi-calendar-clock bg-bermuda" />
                        </div>
                        <div className="unit-body">
                          <p className="text-gray">
                            Monday–Sunday: <br /> 9:00am–9:00pm
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-block">
                      {}
                      <div className="unit align-items-center align-items-center flex-row unit-spacing-xs">
                        <div className="unit-left">
                          <span className="icon icon-sm icon-circle mdi mdi-phone bg-bermuda" />
                        </div>
                        <div className="unit-body">
                          <a className="text-gray" href="tel:#">
                            1-800-1234-567
                          </a>
                          <br />
                          <a className="text-gray" href="tel:#">
                            1-800-6547-958
                          </a>
                        </div>
                      </div>
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
