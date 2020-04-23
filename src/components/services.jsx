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
              <div className="card-columns">
                {this.props.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="card"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{skill.name}</h5>

                      <p className="card-text">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
