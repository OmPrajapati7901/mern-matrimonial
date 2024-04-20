import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Login  from './pages/Login';
import Header from './components/Header';
import Layout from './layouts/Layout';
import Signup  from './pages/Signup';
import { AppContext } from './contexts/AppContext';
import { useState } from 'react';
import UserProfile from './pages/UserProfile';
import RegisterProfile from './pages/RegisterProfile';

function App() {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(undefined)
  const [isUserIDLoggedIn, setisUserIDLoggedIn] = useState(undefined)
  console.log("envitnmentfrom app",process.env.REACT_APP_BACKEND_API)
  return (
    <>
    <AppContext.Provider value={{isUserLoggedIn, setisUserLoggedIn, isUserIDLoggedIn, setisUserIDLoggedIn}}>
    {/* <Router> */}
      <Routes>
        <Route exact path="/" element ={<Layout><HomePage/></Layout>}></Route>
        <Route exact path="/login" element ={<Layout><Login/></Layout>}></Route>
        <Route exact path="/signup" element ={<Layout><Signup/></Layout>}></Route>
        <Route exact path="/profile" element = {<Layout> <UserProfile/></Layout>}></Route>
        <Route exact path="/profile/register" element = {<Layout> <RegisterProfile/></Layout>}></Route>
      </Routes>
    {/* </Router> */}
    </AppContext.Provider>
    </>
  );
}

export default App;
