import React from 'react'
import "./header.css";
import ClapingoLogo from "../../assets/ClapingoLogo.png";
import LoginIcon from "../../assets/LoginIcon.svg";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

function Header(){
  const {auth, logout} = useAuthContext();
  return (
    <header className="site_header">
      <Link to="/"><img src={ClapingoLogo} alt="clapingo logo" /></Link>
      <nav>
        <ul>
          <li>Plans & Pricing</li>
          <li>Teach with us</li>
          <li>Affiliate Program</li>
          <li>Kids</li>
        </ul>
      </nav>
      {auth==="unauthenticated" ? <Link to="/login"><button className="login_btn"><img className="login_icon" src={LoginIcon} alt="login icon" /><span>Login</span></button></Link> : 
      auth === "authenticated" ? <div className="greetNlogoutbtn" onClick={logout}><span className="greet">Welcome, User</span><button className="login_btn"><img className="login_icon" src={LoginIcon} alt="login icon" /><span>Logout</span></button></div> : ""}
    </header>
  )
}

export default Header