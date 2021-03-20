import React, { Component } from 'react';

import HawkEye from './Projects/HawkEye'
import WildSight from './Projects/WildSight';
import Truss from './Projects/Truss';


class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns">
              <h1>Check Out Some of My Works</h1>
              <div id="portfolio-wrapper" className="twelve columns">
              <HawkEye></HawkEye>
              <WildSight></WildSight>
              <Truss></Truss>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
