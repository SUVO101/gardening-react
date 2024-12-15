import React from 'react';

const Footer = () => {
  return (
    <div className="footer-bg-color text-light">
      {/* Social Media Links */}
      <div className="d-md-flex text-md-center justify-content-between align-items-center mb-3 p-4 footer-up-bg-color">
        <h5 className='body-text-color'>Get connected with us on social networks:</h5>
        <ul className="nav justify-content-center">
          <li className="nav-item"><a href="#" className="nav-link body-text-color"><i className="bi bi-facebook"></i></a></li>
          <li className="nav-item"><a href="#" className="nav-link body-text-color"><i className="bi bi-twitter"></i></a></li>
          <li className="nav-item"><a href="#" className="nav-link body-text-color"><i className="bi bi-google"></i></a></li>
          <li className="nav-item"><a href="#" className="nav-link body-text-color"><i className="bi bi-instagram"></i></a></li>
          <li className="nav-item"><a href="#" className="nav-link body-text-color"><i className="bi bi-linkedin"></i></a></li>
          <li className="nav-item"><a href="#" className="nav-link body-text-color"><i className="bi bi-github"></i></a></li>
        </ul>
      </div>

      {/* Footer Links */}
      <div className="container text-center text-md-start p-4">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 footer-text-color">
            <h5 className='footer-heading-color'>COMPANY NAME</h5>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          

          {/* Useful Links Section */}
          <div className="col-md-4 text-center">
            <h5 className='footer-heading-color'>USEFUL LINKS</h5>
            <ul className="list-unstyled footer-link-color">
              <li><a href="#" className="text-light">Your Account</a></li>
              <li><a href="#" className="text-light">Become an Affiliate</a></li>
              <li><a href="#" className="text-light">Shipping Rates</a></li>
              <li><a href="#" className="text-light">Help</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 text-center">
            <h5 className='footer-heading-color'>CONTACT</h5>
            <ul className="list-unstyled footer-text-color">
              <li><i className="bi bi-geo-alt-fill me-2"></i>New York, NY 10012, US</li>
              <li><i className="bi bi-envelope-fill me-2"></i>info@example.com</li>
              <li><i className="bi bi-phone-fill me-2"></i>+ 01 234 567 88</li>
              <li><i className="bi bi-printer-fill me-2"></i>+ 01 234 567 89</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3 border-top mt-4">
        <span>© 2024 Copyright: Company, Inc</span>
      </div>
    </div>
  );
};

export default Footer;
