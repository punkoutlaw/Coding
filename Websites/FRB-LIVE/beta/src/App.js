import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react';
import Navigation from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import Mailing from './components/mailing';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
