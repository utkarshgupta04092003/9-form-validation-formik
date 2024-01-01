import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {loginContext} from '../context/LoginContext';

const Header = () => {


  const {isLoggedIn, logout} = useContext(loginContext);


  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="text-2xl font-bold">Form validation</Link>

        <ul className="flex space-x-4">
          <li>
            <Link to='/' className="hover:text-gray-300">Home</Link>
          </li>

          <li>
            <Link to='/signup' className="hover:text-gray-300">Register</Link>
          </li>
          {isLoggedIn? 
          <li>
            <button onClick={logout}>Logout</button>
            {/* <Link to='/logout' className="hover:text-gray-300">Logout</Link> */}

          </li>
          :

          <li>
            <Link to='/login' className="hover:text-gray-300">Login</Link>
          </li>
          
        }

        </ul>
      </div>
    </div>
  );
};

export default Header;