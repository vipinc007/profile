import React, { Component } from "react";

class Services extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="section service-home border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-2 ">Core Services.</h2>
                <p className="mb-5">My core competency are below</p>
              </div>
            </div>

            <div className="row">
              {this.props.items.map((skill) => (
                <div className="col-lg-4">
                  <div className="service-item mb-5" data-aos="fade-left">
                    <i className="ti-layout"></i>
                    <h4 className="my-3">{skill.name}</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto, earum.
                    </p>
                  </div>
                </div>
              ))}
              {/* <div className="col-lg-4">
                <div
                  className="service-item mb-5"
                  data-aos="fade-left"
                  data-aos-delay="450"
                >
                  <i className="ti-announcement"></i>
                  <h4 className="my-3">Digital Marketing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, earum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="service-item mb-5 mb-lg-0"
                  data-aos="fade-left"
                  data-aos-delay="750"
                >
                  <i className="ti-layers"></i>
                  <h4 className="my-3">Graphics Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, earum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="service-item"
                  data-aos="fade-left"
                  data-aos-delay="750"
                >
                  <i className="ti-anchor"></i>
                  <h4 className="my-3">Branding Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, earum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="service-item mb-5"
                  data-aos="fade-left"
                  data-aos-delay="950"
                >
                  <i className="ti-video-camera"></i>
                  <h4 className="my-3">Video Marketing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, earum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="service-item mb-5 mb-lg-0"
                  data-aos="fade-left"
                  data-aos-delay="1050"
                >
                  <i className="ti-android"></i>
                  <h4 className="my-3">App Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, earum.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
