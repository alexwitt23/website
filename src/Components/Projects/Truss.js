import React, { Component } from 'react';


class Truss extends Component {
  render() {
    const imgPath = process.env.PUBLIC_URL + "/images/portfolio/truss_solver.jpg";
    return (
      <div className="row">
        <div className="column-card">
          <div key={"uav"} className="portfolio-item">
            <div className="item-wrap">
              <a href={"https://github.com/alexwitt23/TrussSolver"} title={"truss_solver"}>
                <img alt={"wildsight"} src={imgPath} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{"Truss Solver"}</h5>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        </div>
        <div className="column-text">
          <h4>{"2-3D Truss Solver"}</h4>
          <p>
            A codebase to solve 2 or 3 dimensional truss and beam systems for a structural
            analysis class. The code can solve for element forces, moments, stress, and strains
            in arbitary systems, like the pictured bridge structure. Accurate structural analysis
            has built much of the physical world.
          </p>
        </div>
      </div>
    );
  }
}

export default Truss;