import React, { Component } from 'react';


class Galerkin extends Component {
  render() {
    const imgPath = process.env.PUBLIC_URL + "/images/portfolio/galerkin.jpg";
    return (
      <div className="row">
        <div className="column-card">
          <div key={"uav"} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={"https://github.com/alexwitt23/TrussSolver"} title={"galerkin"}>
                <img alt={"galerkin"} src={imgPath} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{"Galerkin"}</h5>
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        </div>
        <div className="column-text">
          <h4>{"1D Heat Equation FEM Solver"}</h4>
          <p>
            In this project, I explored the mathematical derivation of the governing equations
            behind a one-dimensional heat flow simulation. A Galerkin simplification is used
            to solve the discrete finite element simulation. In the figure, the evolution of the
            bar's temperature over time is displayed.
            can also check out the report <a href="https://github.com/alexwitt23/galerkin_fem/blob/main/COE352_Final_Project.pdf">here</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Galerkin;