import React, { Component } from "react";

const Footer = function(props) {
  return (
    <React.Fragment>
      <section className="footer">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <p className="mb-0">
                Copyrights © 2019. Designed & Developed by{" "}
                <a href="themefisher.com" className="text-white">
                  Themefisher
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="widget footer-widget text-lg-right mt-5 mt-lg-0">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/themefisher"
                      target="_blank"
                    >
                      <i className="ti-facebook mr-3"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/themefisher" target="_blank">
                      <i className="ti-twitter mr-3"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/themefisher/" target="_blank">
                      <i className="ti-github mr-3"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.pinterest.com/themefisher/"
                      target="_blank"
                    >
                      <i className="ti-pinterest mr-3"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://dribbble.com/themefisher/" target="_blank">
                      <i className="ti-dribbble mr-3"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
