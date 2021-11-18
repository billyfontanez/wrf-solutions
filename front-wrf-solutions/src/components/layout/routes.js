import React from 'react';
import Home from '../Pages/home';
import About from '../Pages/about';
import Login from '../Pages/Auth/login';
import SignUp from '../Pages/Auth/signUp'
import Briefcase from '../Pages/briefcase';
import Blog from '../Pages/blog';
import Search from '../Pages/search';
import Services from '../Pages/services';
import Contact from '../Pages/contact';



const routes = {
    '/': () => <Home />,
    '/about': () => <About/>,
    '/login': () => <Login />,
    '/sign-up': () => <SignUp />,
    '/briefcase': () => <Briefcase />,
    '/blog': () => <Blog />,
    '/search': () => <Search />,
    '/services': () => <Services />,
    '/contact': () => <Contact />,
}

export default routes;