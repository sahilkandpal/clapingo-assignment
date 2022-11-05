import React from 'react'
import Button from '../common/Button';
import "./herosection.css";
const HeroSection = () => {
  return (
    <section className="hero_section">
      <div className="hero_section_left">
        <div className="text_content">
          <h2 className="heading">Hone your english speaking skills over <span className="h_green">one-on-one</span> video call</h2>
          <p className="desc">Practice english conversation with excellent communuicators 
    across the country and speak like a PRO 😎.</p>
        </div>
        <div className="btn_group">
          <Button className="bkt_btn" type="primary" variant="contained" size="lg">Book a trial</Button>
          <Button className="doa_btn" type="primary" variant="outlined" size="lg">Download our app</Button>
        </div>
      </div>
      <div className="hero_section_right"><div className="container"></div></div>
    </section>
  )
}

export default HeroSection;