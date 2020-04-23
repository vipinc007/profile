import React, { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="portfolio ">
          <div className="container">
            <div className="row mb-5">
              <div className="col-10">
                <div
                  className="btn-group btn-group-toggle "
                  data-toggle="buttons"
                >
                  <label className="btn active ">
                    <input
                      type="radio"
                      name="shuffle-filter"
                      value="all"
                      checked="checked"
                    />
                    All Projects
                  </label>
                  <label className="btn">
                    <input type="radio" name="shuffle-filter" value="design" />
                    UI/UX Design
                  </label>
                  <label className="btn">
                    <input
                      type="radio"
                      name="shuffle-filter"
                      value="branding"
                    />
                    branding
                  </label>
                  <label className="btn">
                    <input
                      type="radio"
                      name="shuffle-filter"
                      value="illustration"
                    />
                    Web Development
                  </label>
                  <label className="btn">
                    <input type="radio" name="shuffle-filter" value="photo" />
                    Photography
                  </label>
                </div>
              </div>
            </div>

            <div className="row shuffle-wrapper portfolio-gallery">
              <div
                className="col-lg-4 col-6 mb-4 shuffle-item"
                data-groups='["design","illustration"]'
              >
                <div className="position-relative inner-box">
                  <div className="image position-relative ">
                    <img
                      src="images/portfolio/1.jpg"
                      alt="portfolio-image"
                      className="img-fluid w-100 d-block"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <a
                          className="overlay-content"
                          href="portfolio-single.html"
                        >
                          <h5 className="mb-0">Painting</h5>
                          <p>Design</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-6 mb-4 shuffle-item"
                data-groups='["branding"]'
              >
                <div className="position-relative inner-box">
                  <div className="image position-relative ">
                    <img
                      src="images/portfolio/4.jpg"
                      alt="portfolio-image"
                      className="img-fluid w-100 d-block"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <a
                          className="overlay-content"
                          href="portfolio-single.html"
                        >
                          <h5 className="mb-0">Web app</h5>
                          <p>Development</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-6 mb-4 shuffle-item"
                data-groups='["illustration"]'
              >
                <div className="position-relative inner-box">
                  <div className="image position-relative ">
                    <img
                      src="images/portfolio/3.jpg"
                      alt="portfolio-image"
                      className="img-fluid w-100 d-block"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <a
                          className="overlay-content"
                          href="portfolio-single.html"
                        >
                          <h5 className="mb-0">Business </h5>
                          <p>marketing</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-6 mb-4 shuffle-item"
                data-groups='["design","branding"]'
              >
                <div className="position-relative inner-box">
                  <div className="image position-relative ">
                    <img
                      src="images/portfolio/5.jpg"
                      alt="portfolio-image"
                      className="img-fluid w-100 d-block"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <a
                          className="overlay-content"
                          href="portfolio-single.html"
                        >
                          <h5 className="mb-0">Portfolio</h5>
                          <p>Design</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-6 mb-4 shuffle-item"
                data-groups='["illustration"]'
              >
                <div className="position-relative inner-box">
                  <div className="image position-relative ">
                    <img
                      src="images/portfolio/6.jpg"
                      alt="portfolio-image"
                      className="img-fluid w-100 d-block"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <a
                          className="overlay-content"
                          href="portfolio-single.html"
                        >
                          <h5 className="mb-0 ">Modern web</h5>
                          <p>Seo</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-6 mb-4 shuffle-item"
                data-groups='["design","photo"]'
              >
                <div className="position-relative inner-box">
                  <div className="image position-relative ">
                    <img
                      src="images/portfolio/7.jpg"
                      alt="portfolio-image"
                      className="img-fluid w-100 d-block"
                    />
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <a
                          className="overlay-content"
                          href="portfolio-single.html"
                        >
                          <h5 className="mb-0">Agency web</h5>
                          <p>Design</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Portfolio;
