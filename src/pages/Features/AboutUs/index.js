import React from 'react';
const AboutUs = () => {
  return(
      <section className="section-about-us">
        <div className="container">
          <h2 className="title mb-40 txt-center fs-24">This is about us page</h2>
          <ul className="about-wrap d-flex">
            <li className="col-4">
              <p className="about-icon">
                <i className="fas fa-users"></i>
              </p>
              <h2>History</h2>
              <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </li>
            <li className="col-4">
              <p className="about-icon">
                <i className="fas fa-info"></i>
              </p>
              <h2>Origin</h2>
              <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </li>
            <li className="col-4">
              <p className="about-icon">
                <i className="fas fa-question"></i>
              </p>
              <h2>Help</h2>
              <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </li>
          </ul>
          <div className="mt-40">
            <h2 className="mb-24">CONTACT</h2>
            <ul className="flex-space-between">
              <li>
                <p className="mb-8">
                  <i className="fas fa-map-marker-alt mb-8 mr-10"></i>
                  <span className="txt-gray">Main Office Address:</span>
                </p>
                <p className="ml-25 mb-8">121</p>
                <p className="ml-25 mb-8">Pasteur</p>
                <p className="ml-25 mb-8">Da Nang, Viet Nam</p>
              </li>
              <li>
                <p className="mb-8">
                  <i className="fas fa-phone-square-alt mb-8 mr-10"></i>
                  <span className="txt-gray">Phone: </span>+86 68782806
                </p>
                <p className="mb-8">
                  <i className="fad fa-envelope mb-8 mr-10"></i>
                  <span className="txt-gray">Mail: </span>healthy_food@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
}
export default AboutUs;
