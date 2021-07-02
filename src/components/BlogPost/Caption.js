import React from "react";
import $ from "jquery";

class Caption extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="section-height-800 breadcrumb-modern parallax-container context-dark bg-gray-darkest d-lg-block"
        data-parallax-img="images/background-01-1920-400.jpg"
      >
        <div className="parallax-content">
          <div className="container-wide section-80 section-md-60 section-lg-top-130 section-lg-bottom-155">
            <div className="d-lg-block">
              <h1>Blog Post</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Caption;
