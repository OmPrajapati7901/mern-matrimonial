import React, { useContext } from 'react'
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from '../components/Header';
import { AppContext } from '../contexts/AppContext';
import Cookies from 'js-cookie';
import test from '../util/test';
import VerifyCookie from '../util/VerifyCookie';


const HomePage = () => {
 
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState("");
  const value = useContext(AppContext)

  // // const data =test();

  const data = VerifyCookie()
  
  if(data===true)
  {
    Cookies.remove("token");
    navigate("/login");
  }

  value.setisUserLoggedIn(data.username)
  value.setisUserIDLoggedIn(data.userId)
  
  // console.log("data from home page",data)

  // console.log(cookies)
  const Logout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (

    <>

      <div className="home_page">
        <h4>
          Welcome <span>{value.isUserLoggedIn}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
  </>    
  );
  
};

export default HomePage;
