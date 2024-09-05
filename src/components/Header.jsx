import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const style=({isActive})=>{
        return{
            color:isActive?"#9cba25":"white",
            fontSize:isActive?"20px":"18px",
        }
    }
  return (
    <div>
            <nav className="navbar navbar-expand-lg bg-header">
                <div className="container-fluid">
                    {/* <a className="t" ></a> */}
                    <NavLink to="/" className="navbar-brand text-light">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink to="/" className="nav-link" style={style}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" style={style}>About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" style={style}>Contact us</NavLink>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Header
