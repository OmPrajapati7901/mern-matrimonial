import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  console.log("gomepage"); // This will only log once
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(['token']);
  const [username, setUsername] = useState("");

  // Dependency array with an empty array [] to run only once on mount
  useEffect(() => {
   console.log("useEffect called");
    const verifyCookie = async () => {
      try {
        console.log("Fetching data"); // Log before data fetch
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        console.log("Data fetched:", data); // Log fetched data
        const { status, user } = data;
        setUsername(user);
        if (!status) {
          removeCookie("token");
          // navigate("/login");
        } else {
          toast(`Hello ${user}`, {
            position: "top-right",
          })
        }
      } catch (error) {console.error("Error verifying cookie:", error);
      }
    };

    verifyCookie();
  }, []); // Empty dependency array

  const Logout = () => {
    console.log("logout");
    removeCookie("token", { path: '/' });
    navigate("/login");
  };

  return (
    <>
      <div className="home_page">
        <h4>
          {" sdvfcsdcvs"}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default HomePage;
