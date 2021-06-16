import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Relax from './components/Relax';
import "./sass/main.scss";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Relax />
      <Footer/>
    </div>
  );
}

export default App;
