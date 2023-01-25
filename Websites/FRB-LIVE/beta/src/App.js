import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
