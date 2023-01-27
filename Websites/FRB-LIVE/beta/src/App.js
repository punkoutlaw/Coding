import React from 'react';
import { Link, Routes, Route, Router } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navigation from './components/nav';
import Main from './components/main';
import Cards from './components/cards';
import Footer from './components/footer';
import Mailing from './components/mailing';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exactly component={Main} pattern="/" />
          <Route exactly component={Cards} pattern="/cards" />
        </Routes>
        <Main />
        <Mailing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
