import React, { Component } from "react";
import {Link} from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            海因斯坦
          </Link>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ float: "right" }}>
            <Link className="navbar-brand" to="/register">
              注册
            </Link>
            <Link className="navbar-brand" to="/login">
              登录
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
