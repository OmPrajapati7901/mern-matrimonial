import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import Cookies from 'js-cookie';


const Header = () => {
  const value = useContext(AppContext);
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const [logoutTimeout, setLogoutTimeout] = useState(null);

  const Logout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  const handleMouseEnter = () => {
    if (logoutTimeout) {
      clearTimeout(logoutTimeout); // Clear any existing timeout to prevent it from hiding the link unexpectedly
      setLogoutTimeout(null);
    }
    setShowLogout(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowLogout(false);
    }, 1000); // Delay hiding the logout link by 1 second
    setLogoutTimeout(timeout);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to="/" className="ml-3 text-xl">Matrimonial</Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            {value.isUserLoggedIn ? (
              <Link
                to="/profile"
                className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
              >
                Login
              </Link>
            )}
          </nav>
          {value.isUserLoggedIn ? (
            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Hello {value.isUserLoggedIn}
              {showLogout && (
                <div className="absolute mt-2 p-2 bg-white border rounded shadow-lg">
                  <Link to="/login" className="text-red-500 hover:text-red-700" onClick={Logout}>
                    Logout
                  </Link>
                </div>
              )}
            </p>
          ) : (
            <Link
              to="/login"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
