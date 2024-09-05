import React from 'react'
import heroimg from '../assets/heroimg.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="container bg-mybody">
      <div className='row'>
            <div className="col-md-6 d-flex justify-content-center">
                    <img src={heroimg} style={{width:"90%",height:"auto"}}  alt="" />
            </div>
            <div className="col-md-6 d-flex align-items-center  justify-content-center flex-direction-row flex-column">
                <h2 className='text-center mb-4 text-hd'>Smart Gardening Recomendation System</h2>
                <div className="">
                    <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                    <div className="input-group">
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter Your Zipcode..." />
                    <div className="input-group-text text-light" style={{backgroundColor:"#50B498",}}>
                    <Link to="/plantgallery" className="text-light" style={{textDecoration:"none"}}>Check here</Link>
                      </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero
