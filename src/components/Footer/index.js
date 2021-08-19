import React from 'react';

const Footer = () => {
  return(
    <footer className="page-footer">
      <div className="container">
        <ul className="footer-list">
          <li className="col-4 footer-item">
            <h4 className="footer-item-title">About us</h4>
            <ul>
              <li>Manager</li>
              <li>Experience</li>
            </ul>
          </li>
          <li className="col-4 footer-item">
            <h4 className="footer-item-title">Support</h4>
            <ul>
              <li>Service</li>
            </ul>
          </li>
          <li className="col-4 footer-item">
            <h4 className="footer-item-title">Social connection</h4>
            <ul>
              <li>Gmail</li>
              <li>Phone</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
