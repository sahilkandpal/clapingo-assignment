import React from 'react'
import "./howitworks.css";
import StepCard from './StepCard';
import subscribeplans from "../../assets/subscribeplans.png";

function HowItWorks() {
  return (
    <div className="howitworks">
      <h1 className="heading">How it works ?</h1>
      <div className="grid_content">
        <StepCard sno="1" title="Create Account" desc="Create your account using phone number or email and take a free trial at ₹1."/>
        <StepCard sno="2" title="Subscribe" desc="Choose your preferred duration and select subscription package for your sessions." />
        <div className="img_container"><img src={subscribeplans} alt="" />
          <div className="circle"></div>
          <div className="smoke"></div>
        </div>
        <StepCard sno="3" title="Select time slot" desc="Subscribe & select any time slot between 10 AM to 12 midnight." />
        <StepCard sno="4" title="You are done" desc="That’s it! Start practicing and reach your learning goal in speaking." />
      </div>
    </div>
  )
}

export default HowItWorks;