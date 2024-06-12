import React from 'react';
import './App.css'
import Warrning from './components/warrning/Warrning';
import TopBar from './components/TopBar/TopBar';
import HeaderLinks from './components/header-links/HeaderLinks';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Followus from './components/FollowUs/Followus';
import Footer from './components/Footer/Footer';
import Privacy from './components/Privacy/Privacy';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Warrning/>
      <TopBar/>
      <HeaderLinks/>
      <Navbar/>
    <Routes>
      <Route path='/privacy' element = {<Privacy/>}/>
      <Route path='/' element = {<Home/>}/>
    </Routes>
    <Followus/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
