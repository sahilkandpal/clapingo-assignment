import React from 'react'
import "./whatweoffer.css";
import curriculum from "../../assets/curriculum.png";
import learning from "../../assets/learning.png";
import shadowingmethod from "../../assets/shadowingmethod.png";
import ServiceCard from './ServiceCard';

function WhatWeOffer() {
  return (
    <div className="whatweoffer">
      <h1 className="heading">What we offer ?</h1>
      <div className="cards_row">
        <ServiceCard title="Customised Curriculum" desc="Customised sessions and module for Basic, Intermediate and Advanced learners." img={curriculum} />
        <ServiceCard title="Experimental Learning" desc="Do not study English, rather consume and use it." img={learning} />
        <ServiceCard title="Shadowing Method" desc="Think and speak in English rather than translating it from mother tongue." img={shadowingmethod} />

      </div>
    </div>
  )
}

export default WhatWeOffer