import React, { Component } from 'react';
import User from '../../service/users.js';
import classNames from 'classnames'
const user = new User();
class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {},
    };
  }
  onChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit =  (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if(!username){
      this.setState({
        errors:{
          username:'用户名不能为空'
        }
      });
      return;
    }
    if(!email){
      this.setState({
        errors:{
          email:'邮箱不能为空'
        }
      });
      return;
    }
    if(!password){
      this.setState({
        errors:{
          password:'密码不能为空'
        }
      });
      return;
    }
    
    const res = user.register({ username, email, password })
        .then((res) => {
          if(res.data.code === 0){
            alert('注册成功')
          }else{
            this.setState({
              errors:{
                msg:res.data.msg
              }
            })
          }
        })
  };
  render() {
    console.log(this.state)
    const {errors} = this.state;
    console.log(errors)
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control", "form-control-lg", {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classNames("form-control", "form-control-lg", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classNames("form-control", "form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
