import React from 'react'
import contactimg from '../assets/contact_us.png'
const Contact = () => {
  return (
    <div className='container bg-mybody'>
      <h2 className='text-hd p-3 mb-2 text-center'>Contact Us</h2>
        <div className="row">
          {/* 1st part */}
                <div className="col-md-6 d-flex justify-content-center">
                        <img src={contactimg} style={{width:"80%",height:"auto"}}  alt="" />
                </div>
          {/* 2nd part */}   
                <div className="col-md-6 d-flex justify-content-center flex-column p-5">
                    <div className="mb-3">
                      <label for="contact_name" className="form-label">Your Name</label>
                      <input type="text" className="form-control" id="contact_name" placeholder="E.g : Tom Holland" />
                    </div>
                    <div className="mb-3">
                      <label for="contact_email" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="contact_email" placeholder="name@gmail.com" />
                    </div>
                    <div className="mb-3">
                      <label for="contact_subject" className="form-label">Subject</label>
                      <input type="text" className="form-control" id="contact_subject" placeholder="E.g : Subject" />
                    </div>
                    <div className="mb-3">
                      <label for="contact_message" className="form-label">Your message</label>
                      <textarea className="form-control" id="contact_message" rows="3"></textarea>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Contact
