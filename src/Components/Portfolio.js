import React, { Component } from 'react';



const PROJECTS = [
  {
    "title":"UAV Austin",
    "category":"Open-source Aerial Machine Learning Pipeline",
    "image":"phoenix.jpg",
    "url":"https://github.com/uavaustin/hawk-eye",
    "description": "For three awesome years I was an active member in UAV Austin in college. \
      I was also fortunate to lead a team with various backgrounds and skill sets."
  },
  {
    "title":"WildSight",
    "category":"Open-source AI Biological App",
    "image":"wildsight.jpg",
    "url":"https://github.com/alexwitt23/WildSight",
    "description": ""
  },
  {
    "title":"Truss Solver",
    "category":"A truss solver.",
    "image":"truss_solver.jpg",
    "url":"https://github.com/alexwitt23/TrussSolver",
    "description": ""
  }
]



class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = PROJECTS.map(function(projects){
        var projectImage = process.env.PUBLIC_URL + '/images/portfolio/' + projects.image;
        return (
          <div className="row">
            <div className="column-card">
              <div key={projects.title} className="columns portfolio-item">
                <div className="item-wrap">
                  
                  <a href={projects.url} title={projects.title}>
                    <img alt={projects.title} src={projectImage} />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{projects.title}</h5>
                          <p>{projects.category}</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="column-text">
              <h4>{projects.title}</h4>
              <p>{projects.description}</p>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns">
              <h1>Check Out Some of My Works</h1>
              <div id="portfolio-wrapper" className="twelve columns">
                  {projects}
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
