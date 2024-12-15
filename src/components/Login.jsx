import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginerrtext,setloginerrtext]=useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic check - replace with actual authentication in a real app
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('loggedIn', 'true');
      onLogin();
    } else {
      setloginerrtext('Incorrect username or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 body-bg-color">
      <div className="card shadow" style={{ width: '400px' }}>
        <div className="card-header text-center">
          <h4>Admin Login</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
              <div>
                 <p className='text-center fw-bold text-danger'>
                          { loginerrtext!='' ? loginerrtext : '' }
                 </p>
              </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
        <div className="card-footer text-center">
          <small>Forgot your password? <a href="#">Reset it</a></small>
        </div>
      </div>
    </div>
  );
};

export default Login;
