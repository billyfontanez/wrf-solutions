import React from 'react';
import Home from '../Pages/home';
import Login from '../Pages/Auth/login';
import SignUp from '../Pages/Auth/signUp'
import Briefcase from '../Pages/Store/briefcase';
import Search from '../Pages/search';
import Services from '../Pages/services';




const routes = {
    '/': () => <Home />,
    '/about': () => <About/>,
    '/login': () => <Login />,
    '/sign-up': () => <SignUp />,
    '/briefcase': () => <Briefcase />,
    '/search': () => <Search />,
    '/services': () => <Services />,

}

export default routes;