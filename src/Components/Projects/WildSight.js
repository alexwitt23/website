import React, { Component } from 'react';


class WildSight extends Component {
  render() {
    const imgPath = process.env.PUBLIC_URL + "/images/portfolio/wildsight.jpg";
    return (
      <div className="row">
        <div className="column-card">
          <div key={"uav"} className="portfolio-item">
            <div className="item-wrap">
              <a href={"https://github.com/alexwitt23/WildSight"} title={"wildsight"}>
                <img alt={"wildsight"} src={imgPath} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{"WildSight"}</h5>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        </div>
        <div className="column-text">
          <h4>{"WildSight: Conservation + AI"}</h4>
          <p>
            Animal conservationists collect millions of images, and this project aims to
            expedite the analysis of their digital media. This website is powered by Vue
            and TensorFlow.js to run AI models <b>completely</b> in the browser.
          </p>
        </div>
      </div>
    );
  }
}

export default WildSight;