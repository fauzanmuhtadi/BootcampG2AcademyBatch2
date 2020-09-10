import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Header, NavBar, Footer } from "./components/template/index";
import { NavBar } from "./components/template/index";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        {/* <Header />
        <Footer /> */}
      </Router>
    </div>
  )
}

export default App;
