import React from 'react';
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing';
import {BrowserRouter as Router,Route}  from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />,
        <Route exact path = "/" component = {Landing}   />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
