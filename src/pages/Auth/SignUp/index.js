import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../../store/usersSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(state => state.users.value);
  const [form, setForm] = useState({email: '', password: '', confirmPassword: '', username: '', address: '', phone: ''});
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({...form, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.email === '' || form.password === '' || form.confirmPassword === '' || form.username === '' || form.address === '' || form.phone === '' ) {
      alert('Please enter all information!');
    } 
    else if(form.password !== form.confirmPassword) {
      alert('Check password and confirm password!');
    } else if(users.find(item => item.email === form.email)) {
      alert('Email exist!');
    } else {
      dispatch(signup(form));
      alert('Signup success!');
      history.push('/auth/login');
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
            <input name="username" type="text" placeholder="Username" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="address" type="text" placeholder="Address" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="phone" type="text" placeholder="Phone" onChange={handleChange}></input>
          </div>
          <button className="btn mt-24" type="submit">Sign Up</button>
          <div className="w-100 flex-space-between mt-24">
            <Link to="/auth/login" className="link-style f-bold"> Login</Link>
            <Link to="#" className="link-style f-bold">Help</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
