import React, { useState, useEffect, useContext  } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import RegisterProfile from "./RegisterProfile";
import { AppContext } from "../contexts/AppContext";
import Cookies from 'js-cookie';


const UserProfile = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const value= useContext(AppContext)
    const [userProfile, setUserProfile] = useState({});
    const userId = value.isUserIDLoggedIn
    console.log(userId)

    useEffect(() => {
        
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`,
                {},
                { withCredentials: true });
                setUserProfile(response.data);
                console.log("fetchProfile",response.data)
                console.log("fetchProfileuserProfile",userProfile)
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchProfile();
        
    }, [userId]);

    useEffect(() => {
      const checkCookie = () => { 
          const myCookie = Cookies.get('token');
          return !!myCookie;
      };
      
      const verifyCookie = async () => {  
        try {
          const response  = await axios.post(
            "http://localhost:4000",
            {},
            { withCredentials: true }
          );
          const { data } = response;
          const status = response.status;
  
          if (status === 200) {
            setUsername(data.username);
            value.setisUserLoggedIn(data.username);
            value.setisUserIDLoggedIn(data.userId);
          } else {
            Cookies.remove("token");
            navigate("/login");
          }
        } catch (error) {
          console.error("Error verifying cookie:", error);
        }
      };
  
      if (checkCookie()) {
        verifyCookie();
      }
      
    }, []); // useEffect with empty dependency array
  
  const Logout = () => {
    Cookies.remove("token");
    navigate("/login");
  };
  console.log("from profile",userProfile)

   return ( 
<div>
            <h1>User Profile</h1>
            {/* <p>Username: {userProfile.username}</p>
            <p>Email: {userProfile.email}</p>
            <p>Bio: {userProfile.bio}</p> */}

            <p>username      {userProfile.username     }</p>    
            <p>email         {userProfile.email        }</p>   
            <p>bio           {userProfile.bio          }</p>      
            <p>firstname     {userProfile.firstname    }</p>       
            <p>middlename    {userProfile.middlename   }</p>    
            <p>lastname      {userProfile.lastname     }</p>      
            <p>age           {userProfile.age          }</p>   
            <p>religion      {userProfile.religion     }</p>       
            <p>caste         {userProfile.caste        }</p>   
            <p>education     {userProfile.education    }</p>   
            <p>height        {userProfile.height       }</p>       
            <p>weight        {userProfile.weight       }</p>  
            <p>motherTongue  {userProfile.motherTongue }</p>  
            <p>maritalStatus {userProfile.maritalStatus}</p> 
            <p>contactNumber {userProfile.contactNumber}</p>       
            <p>country       {userProfile.country      }</p>     
            <p>state         {userProfile.state        }</p>     
            <p>city          {userProfile.city         }</p>   
            <p>occupation    {userProfile.occupation   }</p>      
        </div>
    // <RegisterProfile/>
  
   )
}

export default UserProfile;
