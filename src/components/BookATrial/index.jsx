import React from 'react'
import Button from '../common/Button';
import "./bookatrial.css";
import StatsCard from './StatsCard';

function BookATrial() {
  return (
    <section className="bookatrial">
      <div className="bookatrial_inner">
        <div className="bookatrial_left">
          <div className="statscard_container">
            <StatsCard className="sc1" statsData="50K" statsTitle="Mobile Downloads"/>
            <StatsCard className="sc2" statsData="80K" statsTitle="Happy Learners"/>
            <StatsCard className="sc3" statsData="53K" statsTitle="Sessions per month"/>
            <StatsCard className="sc4" statsData="200" statsTitle="Speakers around the globe"/>
          </div>
        </div>
        <div className="bookatrial_right">
          <div className="text_content">
            <div className="title">Book a trial</div>
            <div className="heading">Start your English speaking journey today!</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis.</div>
          </div>
          <Button>Book a trial</Button>
        </div>
      </div>
    </section>
  )
}

export default BookATrial