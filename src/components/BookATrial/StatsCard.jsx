import React from 'react'

function StatsCard({statsData, statsTitle, className}) {
  return (
    <div className={`statscard ${className}`}>
        <div className="statscard_data">{statsData}<span className="plus">+</span></div>
        <div className="statscard_title">{statsTitle}</div>
    </div>
  )
}

export default StatsCard;