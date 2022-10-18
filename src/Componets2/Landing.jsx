import  Help  from './Help';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navigaition from './Navigaition';
import Service from './Service';
import Login from "./Login"

const Landing = () => {
    return (
        <div>
        <BrowserRouter>
        <Navigaition/>
        <Routes>
            <Route path='/home' element={<Home/>}  />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/help" element={<Help/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
        </BrowserRouter>
        </div>
    ); 
};

export default Landing;