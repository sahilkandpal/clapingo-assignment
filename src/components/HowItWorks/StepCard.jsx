import React from 'react'

function StepCard({sno, title, desc}) {
  return (
    <div className="stepcard">
        <div className="title">{sno}. {title}</div>
        <div className="desc">{desc}</div>
    </div>
  )
}

export default StepCard;