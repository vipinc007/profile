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
              <div class="card-columns">
                {this.props.items.map((skill) => (
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <h5 class="card-title">{skill.name}</h5>

                      <p class="card-text">{skill.description}</p>
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
