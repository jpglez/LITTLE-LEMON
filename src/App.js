import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Nav from './Components/Nav';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Main />
    <Footer />
    <Nav />
    </BrowserRouter>
  );
}

export default App;
