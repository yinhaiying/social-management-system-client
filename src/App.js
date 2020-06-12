import React from 'react';
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing';
import {BrowserRouter as Router,Route}  from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />,
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
