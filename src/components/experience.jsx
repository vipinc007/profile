import React, { Component } from "react";
import Dataholder from "../common/dataholder";

class Experience extends Component {
  state = { profile: { experiences: [] } };
  async componentDidMount() {
    var profileInfo = await Dataholder();
    this.setState({ profile: profileInfo });
  }
  render() {
    return (
      <React.Fragment>
        <section className="section about border-top border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5">
                <h3 className="mb-2">Work Experiences.</h3>
              </div>

              <div className="col-lg-8">
                <div className="row">
                  {this.state.profile.experiences.map((exp) => (
                    <div key={exp.role} className="col-lg-6">
                      <div className="about-info mb-5">
                        <span>{exp.fromto}</span>
                        <h4 className="mb-3 mt-1">{exp.role}</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam nec bibendum mauris. Curabitur quis
                          vehicula leo. Vivamus leo ipsum
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Experience;
