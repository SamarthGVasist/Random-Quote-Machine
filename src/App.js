import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Quote from './components/quote'



function App() {
  return (
    <div className="App">
      <Header/>
      <Quote/>
      <Footer/>
    </div>
  );
}

export default App;
