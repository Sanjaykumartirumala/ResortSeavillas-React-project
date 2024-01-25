import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import App from './App';
import Bar from './Mainbar';
import Dinning from './Maindin';
import Room from './Mainroom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Dins" element={<Dinning/>}/>
        <Route path="/Bars" element={<Bar/>}/>
        <Route path="/Rooms" element={<Room/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
);

