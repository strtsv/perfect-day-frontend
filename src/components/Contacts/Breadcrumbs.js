import React from "react";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section className="section-34 bg-gray-light">
        <div className="container">
          <ul className="list-inline list-inline-12 list-inline-icon p">
            <li className="breadcrumb-link">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-current">Contacts</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
