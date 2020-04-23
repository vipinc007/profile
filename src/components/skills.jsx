import React, { Component } from "react";

import Dataholder from "../common/dataholder";
class Skills extends Component {
  state = { profile: { skills: [] } };
  async componentDidMount() {
    var profileInfo = await Dataholder();
    this.setState({ profile: profileInfo });

    // $(".progress-bar").each(function () {
    //   var width = $(this).data("percent");
    //   $(this).css({ transition: "width 3s" });
    //   $(this).appear(function () {
    //     console.log("hello");
    //     $(this).css("width", width + "%");
    //     $(this).find(".count").countTo({
    //       from: 0,
    //       to: width,
    //       speed: 3000,
    //       refreshInterval: 50,
    //     });
    //   });
    // });
  }
  render() {
    return (
      <React.Fragment>
        <section className="section skills">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h3>My skills.</h3>
              </div>

              <div className="col-lg-8">
                <div className="row">
                  {this.state.profile.skills.map((skill) => (
                    <div key={skill.name} className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: skill.percent + "%" }}
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                      <span className="progress-type">{skill.name}</span>
                      {/* <span className="progress-completed">60%</span> */}
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

export default Skills;
