import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "/images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = process.env.PUBLIC_URL + this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={process.env.PUBLIC_URL + profilepic} alt="Alex Witt Pic"/>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
               I am currently a senior at the University of Texas at Austin studying Computational Engineering.
               I enjoy deep learning projects, pour over coffee, reading, and running.
            </p>
            <p>
               Computational Engineering is a combination of physics, math, engineering and numerical
               analysis. The applications are ubiquitous and often take form as computational fluid dynamics
               or finite element method. My education has focused on coupling physics with an understanding of
               the tradeoffs that come with using different numerical methods to solve physical systems.
            </p>
            <p>
               While in school, I've also worked as a machine learning engineer at 
               <a href="https://www.terraclear.com/"> TerraClear, </a> an agricultural tech startup in based
               in Bellevue, WA and Grangeville, ID. Placing emphasis on robust software and rapid
               model experimentation, I helped implement, train, and deploy state of the art AI models. I also
               integrated these models into a PyTorch-based inferencing application which currently produces
               the aerial maps at TerraClear.
            </p>

            <p>
               Outside of class, I am a member of The Tau Beta Pi engineering honor society, where I served
               as historian for 2 years. I also lead the Image Recognition team within the software division
               at <a href="https://uavaustin.org/"> UAV Austin</a>.
            </p>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Austin, TX</span><br />

                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} download="alex_witt_resume.pdf" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
