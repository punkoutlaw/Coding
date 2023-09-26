import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './pages/layout';
import Home from './pages/home';
import Contact from './pages/contact';
import Music from './pages/music';
import Pictures from './pages/pictures';
import Videos from './pages/videos';
import NoPage from './pages/nopage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='music' element={<Music />} />
        <Route path='pictures' element={<Pictures />} />
        <Route path='videos' element={<Videos />} />
        <Route path='contact' element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
