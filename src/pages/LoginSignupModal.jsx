import React, { useState, useEffect } from 'react';

const LoginSignupModal = ({ onLoginChange ,page_open }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  //const [signupData, setSignupData] = useState({ email: '', password: '', confirmPassword: '' });
  const [signupData, setSignupData] = useState({ name:'',email: '', password: '', confirmPassword: '' });
  const [loginerrtext,setloginerrtext]=useState('');
  const [signup_errtext,setsignup_errtext]=useState('');

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsLoggedIn(true);
      onLoginChange(true);
    } else if(storedUser===null && page_open===false){
      setIsLoggedIn(false);
      onLoginChange(false);
      setShowModal(false); // Show modal if user is not logged in
      console.log('executed elseif');
      
    }
    else {
      setIsLoggedIn(false);
      onLoginChange(false);
      setShowModal(true); // Show modal if user is not logged in
      console.log('executed else');
    }
  }, [onLoginChange]);

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'login') {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setSignupData({ ...signupData, [name]: value });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === loginData.email && storedUser.password === loginData.password) {
      setIsLoggedIn(true);
      onLoginChange(true);
      setShowModal(false); // Close modal on successful login
    } else {
      //alert('Invalid credentials');
      setloginerrtext('Invalid credentials');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      //alert('Passwords do not match');
      setsignup_errtext('Passwords do not match');
      return;
    }
    if (signupData.password.length < 8) {
      //alert('Passwords do not match');
      setsignup_errtext('Your Passwords must be 8 characters.');
      return;
    }
    localStorage.setItem('user', JSON.stringify({ name: signupData.name ,email: signupData.email, password: signupData.password }));
    alert('Signup successful! You can now log in.');
    setActiveTab('login'); // Switch to login tab after signup
  };

  return (
    <>
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog" style={{width:"35rem"}}>
            <div className="modal-content body-bg-color">
              <div className="modal-header">
                <h5 className="modal-title body-text-color fw-bold fs-4">Login / Signup</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button
                      className={`body-text-color fw-bold nav-link ${activeTab === 'login' ? 'active' : ''}`}
                      onClick={() => setActiveTab('login')}
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link body-text-color fw-bold ${activeTab === 'signup' ? 'active' : ''}`}
                      onClick={() => setActiveTab('signup')}
                    >
                      Signup
                    </button>
                  </li>
                </ul>

                <div className="tab-content mt-3">
                  {activeTab === 'login' && (
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={loginData.email}
                          onChange={(e) => handleInputChange(e, 'login')}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={loginData.password}
                          onChange={(e) => handleInputChange(e, 'login')}
                          required
                        />
                      </div>
                      <div>
                        <p className='text-center fw-bold text-danger'>
                          {
                            loginerrtext!='' ? loginerrtext : ''
                          }
                        </p>
                     </div>
                      <div className="d-flex justify-content-center align-items-center">
                          <button type="submit" className="btn body-dark-bg-color body-light-text-color fw-bold w-75 mt-4">Login</button>
                      </div>
                      
                      <p className="mt-2 text-center body-text-color fw-bold">
                        Don't have an account?{' '}
                        <span
                          className="text-primary"
                          style={{ cursor: 'pointer' }}
                          onClick={() => setActiveTab('signup')}
                        >
                          Signup
                        </span>
                      </p>
                    </form>
                  )}

                  {activeTab === 'signup' && (
                    <form onSubmit={handleSignup}>
                      <div className="mb-3">
                        <label className="form-label">Enter Your Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={signupData.name}
                          onChange={(e) => handleInputChange(e, 'signup')}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={signupData.email}
                          onChange={(e) => handleInputChange(e, 'signup')}
                          required
                        />
                      </div>
                     <div className='d-flex justify-content-between align-items-center'>
                          <div className="mb-3 w-50 me-2">
                              <label className="form-label">Password</label>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={signupData.password}
                                onChange={(e) => handleInputChange(e, 'signup')}
                                required
                              />
                            </div>
                            <div className="mb-3 w-50 ms-2">
                              <label className="form-label">Confirm Password</label>
                              <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                value={signupData.confirmPassword}
                                onChange={(e) => handleInputChange(e, 'signup')}
                                required
                              />
                            </div>
                     </div>
                     <div>
                        <p className='text-center fw-bold text-danger'>
                          {
                            signup_errtext!='' ? signup_errtext : ''
                          }
                        </p>
                     </div>
                     <div className="d-flex justify-content-center align-items-center">
                          <button type="submit" className="btn body-dark-bg-color body-light-text-color fw-bold w-75 mt-4">Signup</button>
                     </div>
                     
                      <p className="mt-2 text-center body-text-color fw-bold">
                        Already have an account?{' '}
                        <span
                          className="text-primary"
                          style={{ cursor: 'pointer' }}
                          onClick={() => setActiveTab('login')}
                        >
                          Login
                        </span>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignupModal;
