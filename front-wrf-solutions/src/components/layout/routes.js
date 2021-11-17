import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Login from '../pages/login';
import SignUp from '../pages/signUp'
import Briefcase from '../pages/briefcase';
import Auth from '../pages/auth';
import Blog from '../pages/blog';
import Search from '../pages/search';
import Services from '../pages/services';
import Contact from '../pages/contact';
import NoMatch from '../pages/noMatch'


const routes = {
    '/': () => <Home />,
    '/adout': () => <About/>,
    '/login': () => <Login />,
    '/sign-up': () => <SignUp />,
    '/briecase': () => <Briefcase />,
    '/auth': () => <Auth />,
    '/blog': () => <Blog />,
    '/search': () => <Search />,
    '/services': () => <Services />,
    '/Contact': () => <Contact />,
    '/no-match': () => <NoMatch />

}

export default routes;