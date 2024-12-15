import React from 'react'
import heroimg from '../assets/heroimg.png'
import { Link } from 'react-router-dom'
import Zipcode from './Zipcode'

const Hero = () => {
  const text_box = {
    textDecoration: "none",
    width: "200px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="container body-dark-bg-color">
      <div className='row'>
            <div className="col-md-6 d-flex justify-content-center">
                    <img src={heroimg} style={{width:"90%",height:"auto"}}  alt="" />
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center flex-direction-row flex-column">
                <h2 className='text-center mb-4 body-light-text-color'>Smart Gardening Recomendation System</h2>
                {/* <Zipcode/> */}
                <Link to="/plantgallery" className="body-bg-color body-text-color fs-4 border rounded-pill" style={text_box}>Check here</Link>
            </div>
      </div>
    </div>
  )
}

export default Hero
