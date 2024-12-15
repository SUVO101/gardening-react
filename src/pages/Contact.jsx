import React from 'react'
import contactimg from '../assets/contact_us.png'
const Contact = () => {
  return (
    <div className='container body-bg-color'>
        <div className="row">
          {/* 1st part */}
                <div className="col-md-6 d-flex justify-content-center">
                        <img src={contactimg} style={{width:"80%",height:"auto"}}  alt="" />
                </div>
          {/* 2nd part */}   
                <div className="col-md-6 d-flex justify-content-center flex-column p-5">
                    <div className="mb-3">
                      <label htmlFor="contact_name" className="form-label body-text-color fw-bold fs-6">Your Name</label>
                      <input type="text" className="form-control" id="contact_name" placeholder="E.g : Tom Holland" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact_email" className="form-label body-text-color fw-bold fs-6">Email address</label>
                      <input type="email" className="form-control" id="contact_email" placeholder="name@gmail.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact_subject" className="form-label body-text-color fw-bold fs-6">Subject</label>
                      <input type="text" className="form-control" id="contact_subject" placeholder="E.g : Subject" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact_message" className="form-label body-text-color fw-bold fs-6">Your message</label>
                      <textarea className="form-control" id="contact_message" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                      <input type="submit" value="Send" className='form-control w-50 mx-auto bg-warning body-text-color fw-bold fs-5'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Contact
