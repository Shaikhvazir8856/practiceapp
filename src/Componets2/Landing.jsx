import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Navigaition from './Navigaition';

const Landing = () => {
    return (
        <div>
        <BrowserRouter>
        <Navigaition/>
        <Routes>
            <Route path='/home' element={<Home/>}  />
        </Routes>
        </BrowserRouter>
        </div>
    ); 
};

export default Landing;