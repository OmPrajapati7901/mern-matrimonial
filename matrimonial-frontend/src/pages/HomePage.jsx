import React, { useContext } from 'react'
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from '../components/Header';
import { AppContext } from '../contexts/AppContext';
import Cookies from 'js-cookie';

const HomePage = () => {
 
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState("");
  const value = useContext(AppContext)
  // Dependency array with an empty array [] to run only once on mount

  

  useEffect(() => {
  // console.log("cdco"+process.env.BACKEND_API);
  

    const checkCookie = () => { const myCookie = Cookies.get('token');
    if (myCookie) {
        // console.log('Cookie is available:', myCookie);
        return true;

    } else {
        return false;
    }};
    
    const verifyCookie = async () => {  
      try {
        // console.log("Fetching data"); // Log before data fetch
        const response  = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        const { data } = response;
        const status = response.status;
        const user = data.userId;
        // console.log("Data:", data, data.username, data.userId);
        
        // console.log("Data fetched:", response); // Log fetched data
        // const { status, user } = data;
      
        
        if (status==200) {
          setUsername(data.username);
        value.setisUserLoggedIn(data.username)
    
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {console.error("Error verifying cookie:", error);
      }
    };


    // console.log(checkCookie())
    if(checkCookie()){
      verifyCookie();
    }
    
  }, []); // Empty dependency array

  // console.log(cookies)
  const Logout = () => {
    console.log("logout");
    // removeCookie("token", { path: '/' });
    Cookies.remove("token");
    navigate("/login");
  };

  return (

    <>

      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
  </>    
  );
  
};

export default HomePage;
