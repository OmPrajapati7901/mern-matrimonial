import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie';

const VerifyCookie = () => {

    
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [errorC,setErrorC] = useState(false)

    try {
        useEffect(() => {
            const checkCookie = () => { const myCookie = Cookies.get('token');
            if (myCookie) {
               
                return true;
        
            } else {
                return false;
            }};
           
            const verifyCookie = async () => {  
              try {
               
                const response  = await axios.post(
                  "http://localhost:4000",
                  // process.env.REACT_APP_BACKEND_API,
                  {},
                  { withCredentials: true }
                );
                const { data } = response;
                const status = response.status;
               
        
                if (status===200) {
                //   setUsername(data.username);
                // console.log("data.username",data.username,data.userId)
                setUserName(data.username)
                setUserId(data.userId)
            } else {
                    return (
                       false
                      )
                }
              } catch (error) 
              {
                console.error("Error verifying cookie:", error);
                setErrorC(true)
              }
            };
        
        
            // console.log(checkCookie())
            if(checkCookie()){
              verifyCookie();
            }
        
        }, []); // Empty dependency array
        
    } catch (error) {
        setErrorC(true)
        console.error("Error verifying cookie:", error);
    }
    // setErrorC(true)
   if (errorC)
   {
      return true
   }
   else
   {return (
    {
        "username":userName,"userId":userId
    }
 )}
    
 
}

export default VerifyCookie