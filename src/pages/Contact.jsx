import React from 'react'
import contactimg from '../assets/contact_us.png'
const Contact = () => {
  return (
    <div className='container bg-light'>
      <h2 className='bg-dark text-success p-3 mt-2 mb-2'>Contact Us</h2>
        <div className="row">
          {/* 1st part */}
                <div className="col-md-6 d-flex justify-content-center">
                        <img src={contactimg} style={{width:"80%",height:"auto"}}  alt="" />
                </div>
          {/* 2nd part */}   
                <div className="col-md-6 d-flex justify-content-center flex-column p-5">
                    <div class="mb-3">
                      <label for="contact_name" class="form-label">Your Name</label>
                      <input type="text" class="form-control" id="contact_name" placeholder="E.g : Tom Holland" />
                    </div>
                    <div class="mb-3">
                      <label for="contact_email" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="contact_email" placeholder="name@gmail.com" />
                    </div>
                    <div class="mb-3">
                      <label for="contact_subject" class="form-label">Subject</label>
                      <input type="text" class="form-control" id="contact_subject" placeholder="E.g : Subject" />
                    </div>
                    <div class="mb-3">
                      <label for="contact_message" class="form-label">Your message</label>
                      <textarea class="form-control" id="contact_message" rows="3"></textarea>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Contact
