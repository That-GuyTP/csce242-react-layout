import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"; //Router tools that routes people to different pages as needed.
import './css/index.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Pictures from './pages/Pictures';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)} /*Must nest items within. Otherwise it won't display.*/ > 
          <Route index element={(<Home />)} />
          <Route path="about" element={(<About />)} />
          <Route path="pictures" element={(<Pictures />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App />
);
