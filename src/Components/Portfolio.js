import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = process.env.PUBLIC_URL + '/images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
           <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                waves />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                <MDBBtn href="#">Click</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">{projects}</div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
