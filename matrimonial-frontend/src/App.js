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

function App() {
  return (
    <>
  
    {/* <Router> */}
      <Routes>
        <Route exact path="/" element ={<Layout><HomePage/></Layout>}></Route>
        <Route exact path="/login" element ={<Layout><Login/></Layout>}></Route>
        <Route exact path="/signup" element ={<Layout><Signup/></Layout>}></Route>
      </Routes>
    {/* </Router> */}
    </>
  );
}

export default App;
