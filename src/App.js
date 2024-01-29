
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Menu } from './screens/Menu';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  Component= {<Menu/>} />
        </Routes>
        {/* <Routes>
        <Route path="/" element={<DropDown/>} />
        </Routes>
        {/* <Routes>
        <Route path="/" element={} />
        </Routes> */} 
    </Router>
  );
}

export default App;
