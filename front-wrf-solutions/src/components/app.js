import React, {useEffect} from 'react';
import { useRoutes } from 'hookrouter';
import NavBar from './Layout/navBar';
import routes from './Layout/routes';
import history from './PrivatePages/history';
import Header from './Layout/header';

export default function App() {
  const routeResult = useRoutes(routes);
    return (
      <div className='app'>
        <Header />
        <NavBar />
        {routeResult || <h1>Page Not Found</h1>}
      </div>
    );
}
