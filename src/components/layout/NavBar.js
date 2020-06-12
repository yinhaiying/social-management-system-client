import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            海因斯坦
          </a>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div style={{ float: "right" }}>
            <a className="navbar-brand" href="">
              注册
            </a>
            <a className="navbar-brand" href="">
              登录
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
