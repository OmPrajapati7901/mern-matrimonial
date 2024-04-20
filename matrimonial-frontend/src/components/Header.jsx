import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../contexts/AppContext';

const Header = () => {

  const value= useContext(AppContext)
  console.log(value)
  return (
    <div><header class="text-gray-600 body-font">
      
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Matrimonial</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">First Link</a>
        <a class="mr-5 hover:text-gray-900">Second Link</a>
        <a class="mr-5 hover:text-gray-900">Third Link</a>
        {value.isUserLoggedIn?(<Link
              to="/profile"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Profile
            </Link>):(<Link
              to="/login"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In {value.isUserLoggedIn}
            </Link>)}
      </nav>
      {value.isUserLoggedIn?(<p>Hello {value.isUserLoggedIn}</p>):(<Link
              to="/login"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In {value.isUserLoggedIn}
            </Link>)}
    </div>
  </header></div>
  )
}

export default Header;