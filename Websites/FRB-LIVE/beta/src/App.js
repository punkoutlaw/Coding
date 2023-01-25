import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import Mailing from './components/mailing';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
