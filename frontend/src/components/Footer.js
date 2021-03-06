import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Контакты</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>TODO</h4>
            <ui className="list-unstyled">
               <li><Link to='/'>Users</Link></li>
               <li><Link to='/projects'>Projects</Link></li>
               <li><a href='/todo'>Todo</a></li>
            </ui>
          </div>
          {/* Column3 */}

        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TODO | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
