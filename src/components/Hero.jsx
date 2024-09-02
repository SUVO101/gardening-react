import React from 'react'
import heroimg from '../assets/heroimg.png'
const Hero = () => {
  return (
    <div className="container bg-light">
      <div className='row'>
            <div className="col-md-6 d-flex justify-content-center">
                    <img src={heroimg} style={{width:"80%",height:"auto"}}  alt="" />
            </div>
            <div className="col-md-6 d-flex align-items-center  justify-content-center flex-direction-row flex-column">
                <h2 className='text-center mb-4 text-success'>Smart Gardening Recomendation System</h2>
                <div className="">
                    <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                    <div className="input-group">
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter Your Zipcode..." />
                    <div className="input-group-text bg-success">Check here</div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero
