import React, { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            required
          />
          <button type="button" className="toggle-btn" onClick={togglePassword}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
