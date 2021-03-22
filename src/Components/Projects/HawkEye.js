import React, { Component } from 'react';



class HawkEye extends Component {
  render() {
    const imgPath = process.env.PUBLIC_URL + '/images/portfolio/' + "phoenix.jpg"
    return (
      <div className="row">
        <div className="column-card">
          <div key={"uav"} className="portfolio-item">
            <div className="item-wrap">
              <a href={"https://github.com/uavaustin/hawk-eye"} title={"uav"}>
                <img alt={"uav"} src={imgPath} />
                <div className="overlay">
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        </div>
        <div className="column-text">
          <h4>{"UAV Aerial Inference Application"}</h4>
          <p>
            The goal of this project is to create an AI application to can find
            various targets of interest from aerial photography. We modify existing
            deep neural networks to achieve real-time inferencing of 4K images in under
            1 second on a compute device that runs on our drone. Check out the overview
            <a href="https://user-images.githubusercontent.com/31543169/111933494-98973400-8a8d-11eb-930f-38fe56573c82.gif"> here.</a>
          </p>
          <p>
            I spent 3 awesome years developing personally and technically at UAV Austin,
            and I was fortunate to lead the image recognition software team for 2 years.
            I used an agile-based sprint system for project workflow, and sucessfully
            guiding students of different backgrounds, interests, and technical skill
            comes with many challenges and rewards. 
          </p>
        </div>
      </div>
    );
  }
}

export default HawkEye;