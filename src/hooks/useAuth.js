import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeLoginStatus } from '../store/loginStatusSlice';

const useAuth = () => {
  const users = useSelector(state => state.users.value);
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
          const user = {id: userLogin.id, email: userLogin.email, username: userLogin.username, phone: userLogin.phone, address: userLogin.address};
          localStorage.setItem('user', JSON.stringify(user));
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
    localStorage.removeItem('cart');
    setIsLogged(false);
    dispatch(changeLoginStatus(false));
    history.push('/');
  }

  return {isLogged, login, logout};
}

export default useAuth;
