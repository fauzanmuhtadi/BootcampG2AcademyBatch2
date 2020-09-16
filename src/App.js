import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './component/template';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
      </Router>
    </div>
  )
}

export default App;
