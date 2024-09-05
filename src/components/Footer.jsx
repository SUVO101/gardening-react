import React from 'react'

const Footer = () => {
  return (
    <div className="bg-header py-3">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-5">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-5">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-5">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-5">About</a></li>
    </ul>
    <div className='d-flex justify-content-between'>
    <div className="col-md-4 d-flex align-items-center p-3">
      <a href="/" className="mb-3 me-3 mb-md-0 text-light text-decoration-none lh-1">
        <i className="bi bi-0-circle" width="30" height="24">logo</i>
      </a>
      <span className="mb-3 mb-md-0 text-light">© 2024 Company, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex p-3">
      <li className="ms-3"><a className="text-light" href="#"><i className="bi bi-facebook" width="24" height="24"></i></a></li>
      <li className="ms-3"><a className="text-light" href="#"><i className="bi bi-whatsapp" width="24" height="24"></i></a></li>
      <li className="ms-3"><a className="text-light" href="#"><i className="bi bi-youtube" width="24" height="24"></i></a></li>
    </ul>
    </div>
  </div>
  )
}

export default Footer
