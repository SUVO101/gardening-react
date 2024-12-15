import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import LoginSignupModal from '../pages/LoginSignupModal'

const Header = () => {
    const style=({isActive})=>{
        return{
            color:isActive?"#fde00a":"#fffdec",
            fontSize:isActive?"20px":"18px",
        }
    }
   const islogin=JSON.parse(localStorage.getItem('isLoggedIn'))||false;

  // console.log(islogin);
   
    // editable part ------
    //const [islogin,setislogin]=useState(JSON.parse(localStorage.getItem('isLoggedIn'))||false);

    //console.log(islogin);
    const [isMenuVisible, setMenuVisible] = useState(false);

        const toggleMenu = () => {
            // setMenuVisible((prev) => !prev);
            setMenuVisible(!isMenuVisible);

        };
 
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [showModal, setShowModal] = useState(false);
    const [pageopen,setpageopen]=useState(false);

    const handleLoginSuccess = (status) => {
        setIsLoggedIn(status);
        setShowModal(false);
        if (status) {
          localStorage.setItem('isLoggedIn', 'true'); // Update localStorage on successful login
        }
      };
      const login=()=>{
        if (!isLoggedIn) {
            // means user not log-in
            setpageopen(true);
            setShowModal(true); 
          }
      }

  return (
    <div>
            <nav className="navbar navbar-expand-lg header-bg-color p-3">
                <div className="container-fluid">
                    {/* <a className="t" ></a> */}
                    <NavLink to="/" className="navbar-brand text-light">Florus</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink to="/" className="nav-link" style={style}>Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/how-to-use" className="nav-link" style={style}>How To Use</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" style={style}>About us</NavLink>
                        </li>
                        {
                            !islogin && (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/contact" className="nav-link" style={style}>Contact us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className='btn bt-bgcolor bt-text-color ps-4 pe-4' onClick={login}>Login</button>
                                    </li>
                                    {<LoginSignupModal onLoginChange={handleLoginSuccess} page_open={pageopen}/>}
                                </>
                            )

                        }

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">Action</li>
                                    <li className="dropdown-item">Another action</li>
                                </ul>
                            </li> */}
                            
                            {
                            islogin && (
                                <li className="nav-item d-flex align-items-center ps-3" >
                                    <div className="" style={{"cursor":"pointer",}} onClick={toggleMenu} ><i className="fs-3 bi bi-person-circle text-warning"></i></div>
                                </li>
                            )

                        }
                            
                    </ul>
                    
                   
                    </div>
                </div>
                {isMenuVisible && (<MenuComponent isVisible={isMenuVisible} toggleMenu={toggleMenu} />)}
            </nav>
            
    </div>
  )
}

export default Header
//old one
