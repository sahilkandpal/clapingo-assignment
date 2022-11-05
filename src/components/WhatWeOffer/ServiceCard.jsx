import React from 'react'


function ServiceCard({title, desc, img}) {
  return (
    <div className="servicecard">
        <div className="img_container">
            <img src={img} alt="" />
            <div className="text_content">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard