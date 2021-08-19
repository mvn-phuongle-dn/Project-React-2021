import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({email: '', password: '', confirmPassword: '', name: '', address: '', phone: ''});
  const auth = useAuth();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({...form, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.password === form.confirmPassword) {
      auth.login(form.email, form.password);
    } else {
      alert('Username or password incorrect!');
    }
  }
  return(
    <div className="container">
      <div className="form-login-wrap">
        <form className="form-login" onSubmit={handleSubmit}>
          <h2 className="mb-24 fs-18">Sign Up</h2>
          <div className="form-control">
            <input name="email" type="text" placeholder="Email" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="name" type="text" placeholder="Name" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="address" type="text" placeholder="Address" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="phone" type="number" placeholder="Phone" onChange={handleChange}></input>
          </div>
          <button className="btn mt-24" type="submit">Sign Up</button>
          <div className="w-100 flex-space-between mt-24">
            <Link to="/auth/login" className="link-style"> Login</Link>
            <Link to="/" className="link-style">Help</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
