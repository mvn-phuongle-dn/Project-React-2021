import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({email: '', password: ''});
  const auth = useAuth();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({...form, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(form.email, form.password);
  }
  return(
    <div className="container">
      <div className="form-login-wrap">
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="form-control">
            <input name="email" type="text" placeholder="Email" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
          </div>
          <button className="btn mt-24" type="submit">Login</button>
          <p className="mt-24">Don't have an account? <Link to="/auth/signup" className="link-style"> Sign Up</Link></p>
          <Link to="" className="link-style mt-24">Forgot Password</Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
