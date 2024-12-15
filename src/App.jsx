import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import PlantGallery from './pages/PlantGallery'
import PlantChecking from './pages/PlantChecking'
import VerticalStepper1 from './components/Vertical-Stepper'
import Wishlist from './pages/Wishlist'
import AddtoCart from './pages/AddtoCart'
import OrderPage from  './pages/OrderPage'
import RazorpayButton from './pages/RazorpayButton'
import Noti from './pages/noti'


import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import LoginSignupModal from './pages/LoginSignupModal'
import Profile from './pages/Profile'
import ProfilePage from './pages/Profile'
import ReviewSlider from './components/Reviews'
import PlantCarousel from './pages/Plantslider'

import Admin from './pages/Admin'
import Login from './components/Login' // Import the Login component

function App() {

  const location = useLocation(); // Get the current location (route)

  const isPlantCheckingPage = location.pathname.startsWith("/plantchecker");
  const isAdminPage = location.pathname.startsWith("/admin");

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(localStorage.getItem("AdminloggedIn") === "true");

  const handleLogin = () => {
    setIsAdminLoggedIn(true);
    localStorage.setItem('AdminloggedIn',true);
  };

  const handleLogout = () => {
    localStorage.removeItem('AdminloggedIn');
    setIsAdminLoggedIn(false);
  };

  useEffect(() => {
    // Check if the user is logged in on mount
    const AdminloggedInStatus = localStorage.getItem('AdminloggedIn') === 'true';
    setIsAdminLoggedIn(AdminloggedInStatus);
  }, []);
  return (
    <>
      <ReactNotifications />
       <div className='container'>
       
       {!isPlantCheckingPage && !isAdminPage && <Header />} 

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/how-to-use" element={<VerticalStepper1/>}></Route>
                <Route path="/plantgallery" element={<PlantGallery/>}></Route>
                {/* <Route path="/plantchecker" element={<PlantChecking/>}></Route> */}
                <Route path="/plantchecker/:id" element={<PlantChecking/>}></Route>
                <Route path="/wishlist" element={<Wishlist/>}></Route>
                <Route path="/viewcart" element={<AddtoCart/>}></Route>
                <Route path="/orders" element={<OrderPage/>}></Route>
                <Route path="/pay" element={<RazorpayButton/>}></Route>
                <Route path="/noti" element={<Noti/>}></Route>
                <Route path="/profile" element={<ProfilePage/>}></Route>
                <Route path="/review" element={<ReviewSlider/>}></Route>
                <Route path="/plantslider" element={<PlantCarousel/>}></Route>
                <Route path="/admin" element={isAdminLoggedIn ? <Admin onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
            </Routes>
            
            {!isAdminPage && <Footer/>} 
       </div>
    </>
  )
}

export default App
// old one



