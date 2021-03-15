import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Photos from './Components/Photos';

const photos = [
  {
    src: process.env.PUBLIC_URL + '/images/jennylake2.jpg',
    width: 3,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/images/bryce.jpg',
    width: 4,
    height: 3
  },
  {
    src: process.env.PUBLIC_URL + '/images/yellowstone.jpg',
    width: 4,
    height: 3
  },
  {
    src: process.env.PUBLIC_URL + '/images/jennylake.jpg',
    width: 3,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/images/flowers.jpg',
    width: 4,
    height: 3
  },
  {
    src: process.env.PUBLIC_URL + '/images/yellowstone2.jpg',
    width: 4,
    height: 3
  },
  {
    src: process.env.PUBLIC_URL + '/images/yellowstone3.jpg',
    width: 4,
    height: 3
  },
  {
    src: process.env.PUBLIC_URL + '/images/zion.jpg',
    width: 3,
    height: 4
  }
];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    fetch('resumeData.json')
    $.ajax({
      url:'./resumeData.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Photos photos={photos} title={"Photos"}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
