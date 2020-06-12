import React from 'react';
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
function App() {
  return (
    <div className="App">
       <NavBar/>,
       <Landing/>
       <Footer/>
    </div>
  );
}

export default App;
