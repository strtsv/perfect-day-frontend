import React from "react";

class Content extends React.Component {
  render() {
    return (
      <main className="page-content">
        {}
        <section className="section-60 section-md-120 text-left">
          <div className="container-wide">
            <div className="row justify-content-sm-center">
              <div className="col-md-10 col-lg-8">
                <div className="inset-lg-right-60 inset-xxl-left-85 inset-xxl-right-120">
                  <hr className="divider hr-left-0 bg-bermuda" />
                  <h3 className="offset-top-20">Get in Touch</h3>
                  <p className="offset-top-40">
                    You can contact us any way that is convenient for you. We
                    are available 24/7 via fax or email. You can also use a
                    quick contact form below or visit us personally. We would be
                    happy to answer your questions.
                  </p>
                  {}
                  <form
                    className="rd-mailform text-left offset-top-35"
                    data-form-output="form-output-global"
                    data-form-type="contact"
                    method="post"
                    action="bat/rd-mailform.php"
                  >
                    <div className="row justify-content-sm-center">
                      <div className="col-xl-6">
                        <div className="form-group form-group-outside">
                          <label
                            className="form-label form-label-outside"
                            htmlFor="contact-first-name"
                          >
                            First Name
                          </label>
                          <input
                            className="form-control"
                            id="contact-first-name"
                            type="text"
                            name="firstName"
                            data-constraints="@Required"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 offset-top-10 offset-xl-top-0">
                        <div className="form-group form-group-outside">
                          <label
                            className="form-label form-label-outside"
                            htmlFor="contact-last-name"
                          >
                            Last Name
                          </label>
                          <input
                            className="form-control"
                            id="contact-last-name"
                            type="text"
                            name="lastName"
                            data-constraints="@Required"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 offset-top-10">
                        <div className="form-group form-group-outside">
                          <label
                            className="form-label form-label-outside"
                            htmlFor="contact-email"
                          >
                            E-mail
                          </label>
                          <input
                            className="form-control"
                            id="contact-email"
                            type="text"
                            name="email"
                            data-constraints="@Email @Required"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 offset-top-10">
                        <div className="form-group form-group-outside">
                          <label
                            className="form-label form-label-outside"
                            htmlFor="contact-phone"
                          >
                            Phone
                          </label>
                          <input
                            className="form-control"
                            id="contact-phone"
                            type="text"
                            name="phone"
                            data-constraints="@PhoneNumber @Required"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 offset-top-10">
                        <div className="form-group form-group-outside">
                          <label
                            className="form-label form-label-outside"
                            htmlFor="contact-message"
                          >
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="contact-message"
                            name="message"
                            data-constraints="@Required"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="offset-top-20">
                      <button className="btn btn-rounded" type="submit">
                        send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-10 col-lg-4 offset-top-90 offset-lg-top-0">
                <hr className="divider hr-left-0 bg-bermuda" />
                <h5 className="offset-top-15">Socials</h5>
                <ul className="list-inline list-inline-2 list-primary offset-top-20">
                  <li className="inset-left-0">
                    <a
                      className="icon icon-xs icon-circle fa fa-facebook social-links"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-xs icon-circle fa fa-twitter social-links"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-xs icon-circle fa fa-pinterest-p social-links"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-xs icon-circle fa fa-vimeo social-links"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-xs icon-circle fa fa-google social-links"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-xs icon-circle fa fa-rss social-links"
                      href="#"
                    />
                  </li>
                </ul>
                <div className="offset-top-60 offset-lg-top-85">
                  <hr className="divider hr-left-0 bg-bermuda" />
                  <h5 className="offset-top-15">Phones</h5>
                  <div className="offset-top-20">
                    {}
                    <div className="unit align-items-center flex-row unit-spacing-xxs">
                      <div className="unit-left">
                        <span className="linear-icon icon icon-sm mdi mdi-phone text-primary" />
                      </div>
                      <div className="unit-body">
                        <div className="d-inline-block">
                          <p>
                            <a className="text-gray-light" href="tel:#">
                              1-800-1234-567
                            </a>
                          </p>
                        </div>
                        ,
                        <div className="d-inline-block">
                          <p>
                            <a className="text-gray-light" href="tel:#">
                              1-800-9514-654
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offset-top-60 offset-lg-top-85">
                  <hr className="divider hr-left-0 bg-bermuda" />
                  <h5 className="offset-top-15">E-mail</h5>
                  <div className="offset-top-20">
                    {}
                    <div className="unit align-items-center flex-row unit-spacing-xxs">
                      <div className="unit-left">
                        <span className="linear-icon icon icon-sm mdi mdi-email-outline text-primary" />
                      </div>
                      <div className="unit-body">
                        <p>
                          <a className="text-gray-light" href="mailto:#">
                            info@demolink.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offset-top-60 offset-lg-top-85">
                  <hr className="divider hr-left-0 bg-bermuda" />
                  <h5 className="offset-top-15">Address</h5>
                  <div className="offset-top-20 p">
                    {}
                    <div className="unit align-items-center align-items-lg-start align-items-xxl-center flex-row unit-spacing-xxs">
                      <div className="unit-left">
                        <span className="linear-icon icon icon-sm mdi mdi-map-marker text-primary" />
                      </div>
                      <div className="unit-body">
                        <a className="text-gray-light" href="contacts.html">
                          2130 Fulton Street, San Diego, CA 94117-1080 USA
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
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
        </section>
      </main>
    );
  }
}

export default Content;
