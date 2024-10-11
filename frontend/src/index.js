import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/Home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <HomePage/>
    <Footer/>
  </React.StrictMode>
);

