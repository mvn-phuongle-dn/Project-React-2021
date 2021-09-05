import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

const Account = () => {
  // const user = JSON.parse(localStorage.getItem('user'));
  // const users = useSelector(state => state.users.value);
  // const account = users.find(x => x.email === user.email);
  const account = JSON.parse(localStorage.getItem('user'));
  const [tab, setTab] = useState(1);
  const handleChangeTab = (e, value) => {
    e.preventDefault();
    setTab(value);
  }
  return(
    <div className="section-account">
      <div className="container">
        <h1 className="txt-center fs-24 mb-40">My Account</h1>
        <div className="tabs">
          <ul className="tabs-nav">
            <li className={`${tab === 1 ? 'active': ''}`} onClick={(event)=>handleChangeTab(event, 1)}>Info</li>
            <li className={`${tab === 2 ? 'active': ''}`} onClick={(event)=>handleChangeTab(event, 2)}>History</li>
          </ul>
          <div className="tabs-content">
            {(tab===1) && 
              <div>
                <div className="text-group">
                  <label className="title">
                    Name:
                  </label>
                  <span className="value">
                    {account.username}
                  </span>
                </div>
                <div className="text-group">
                  <label className="title">
                    Email:
                  </label>
                  <span className="value">
                    {account.email}
                  </span>
                </div>
                <div className="text-group">
                  <label className="title">
                    Address:
                  </label>
                  <span className="value">
                    {account.address}
                  </span>
                </div>
                <div className="text-group">
                  <label className="title">
                    Phone number:
                  </label>
                  <span className="value">
                    {account.phone}
                  </span>
                </div>
              </div>
            }
            {(tab===2) && 
              <div>
                <p>Phasellus pharetra aliquet viverra. Donec scelerisque tincidunt diam, eu fringilla urna auctor at.</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
