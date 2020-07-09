import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path='/' exact/>
            <Route component={Posts} path='/posts' />
        </BrowserRouter>
    );
}

export default Routes;
