import React, {useEffect} from 'react';
import { useRoutes } from 'hookrouter';
import NavBar from './layout/navBar';
import routes from './layout/routes';


export default function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className='app'>
      <h1>WRF Solutions</h1>
      <NavBar />
      {routeResult}
    </div>
  );
}
