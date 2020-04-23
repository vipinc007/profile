import React, { Component } from "react";
import Dataholder from "../common/dataholder";
import Services from "./services";

class Home extends Component {
  state = {
    profile: { services: [] },
  };
  async componentDidMount() {
    var profileInfo = await Dataholder();
    this.setState({ profile: profileInfo });
  }
  render() {
    return (
      <React.Fragment>
        <section className="section banner-3">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7">
                <h2>{this.state.profile.name}</h2>
                <p className="lead mb-4">{this.state.profile.role}</p>

                <p className="mb-4">{this.state.profile.professionalSummary}</p>

                {/* <img src="images/signature.png" alt="" className="img-fluid" /> */}
              </div>

              {/* <div className="col-lg-5">
                <ul className="list-unstyled mt-3 mb-5 about-list">
                  <li>- Web Development</li>
                  <li>- Full Stack Developer</li>
                  <li>- Frontend Developer</li>
                  <li>- Backend Developer</li>
                </ul>
              </div> */}
              <Services items={this.state.profile.services} />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
