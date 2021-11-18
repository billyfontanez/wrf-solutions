import React, {useEffect} from 'react';
import { useRoutes } from 'hookrouter';
import NavBar from './Layout/navBar';
import routes from './Layout/routes';
import history from './PrivatePages/history';


export default function App() {
  const routeResult = useRoutes(routes);
    return (
      <div className='app'>
        <h1>WRF Solutions</h1>
        <NavBar />
        {routeResult || <h1>Page Not Found</h1>}
      </div>
    );
}
