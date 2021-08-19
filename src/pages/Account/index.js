import React from 'react';

const Account = () => {
  return(
    <div className="container">
      <div className="section-account">
          <h2 className="mb-24 fs-18">About you</h2>
          <div className="text-group">
            <label className="title">
              Name:
            </label>
            <span className="value">
              John
            </span>
          </div>
          <div className="text-group">
            <label className="title">
              Age:
            </label>
            <span className="value">
              23
            </span>
          </div>
          <div className="text-group">
            <label className="title">
              Address:
            </label>
            <span className="value">
              101 Pasteur, Da Nang
            </span>
          </div>
          <div className="text-group">
            <label className="title">
              Phone number:
            </label>
            <span className="value">
              023456789
            </span>
          </div>
      </div>
    </div>
  );
}
export default Account;
