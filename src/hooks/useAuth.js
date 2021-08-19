import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeLoginStatus } from '../store/userSlice';

const useAuth = () => {
  const users = [{email: 'abc123@gmail.com', password: 'abc123', phone: '0905191293', username: 'John', address: '101 Pasteur, Da Nang'}, 
  {email: 'a12345@gmail.com', password: 'a12345', phone: '0909321123', username: 'Son', address: '200 Pasteur, Da Nang'},
  {email: 'phuongle@gmail.com', password: 'phuongle', phone: '0909090909', username: 'Phuong Le', address: '199 Pasteur, Da Nang'}];
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogged, setIsLogged] = useState(!!user);
  const history = useHistory();
  const dispatch = useDispatch();

  const login = (email, password) => {
    return new Promise((res,rej) => {
      const userLogin = users.find(item => item.email === email && item.password === password);
      if(userLogin) {
        setTimeout(() => {
          setUser({email});
          setIsLogged(true);
          localStorage.setItem('user', JSON.stringify({email}));
          history.push('/account');
          res({email});
          dispatch(changeLoginStatus(true));
        }, 1000);
      } else {
        alert('Username or password incorrect!');
      }
    })
  }

  const logout = () => {
    localStorage.removeItem('user');
    setIsLogged(false);
    dispatch(changeLoginStatus(false));
    history.push('/');
  }

  return {isLogged, login, logout};
}

export default useAuth;
