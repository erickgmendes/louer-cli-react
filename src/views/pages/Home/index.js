import React from 'react'

import Background from '../../images/img-home.jpg'

var sectionStyle = {
  //width: "100%",
  //height: "400px",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat'
}

const Home = () =>
  <div className="white-text-container background-image-container" style={sectionStyle}>
    <div className="opacity"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Louer Web</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum dolor sit
        amet consectetur adipiscing elit. </p>
          <a href="./download.html" title="" className="btn btn-lg btn-primary">Download</a>
        </div>
      </div>
    </div>
  </div>

export default Home;