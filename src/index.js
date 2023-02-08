import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/App';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Redirect} from './pages/Redirect';
import {Signin} from './lol/Signin';
// import {Products} from './pages/Products'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App/>
    <BrowserRouter>
    <Routes>
    <Route path='/Signin' element= {<Signin/>}/>
    <Route path='/' element={<App/>}/>
    <Route path='/:id' element={<Redirect/>}/>
    </Routes>
    </BrowserRouter>
);