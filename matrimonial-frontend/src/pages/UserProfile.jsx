import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import RegisterProfile from "./RegisterProfile";


// const handleOnChange = (e) => {
//   console.log("handleOnChange");
// };

// const handleSubmit = () => {
//   console.log("submit");
// };


const UserProfile = () => {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        bio: '',
        firstname: '',
        middlename:'',
        lastname:'',
        age:'',
        religion:'',
        caste:'',
        education:'',
        height:'',
        weight:'',
        motherTongue:'',
        maritalStatus:'',
        contactNumber:'',
        country:'',
        state:'',
        city:'',
        occupation:''
    });

    const handleOnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData)
        try {
            const response = await axios.post('http://localhost:4000/api/users/register', userData,
            { withCredentials: true });
            console.log('User registered:', response.data);
            // Redirect or display success message
        } catch (error) {
            console.error('Registration error:', error.response.data);
            // Handle errors here, such as displaying a message
        }
        
    };

   return ( 
    <RegisterProfile/>
  
   )
}

export default UserProfile;
