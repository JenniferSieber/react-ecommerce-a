import React from 'react'
import star from '../../src/images/star.png'

function Card({ coverImg, obj }) {
  // console.log(obj)
  let badgeText 
  if (obj.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (obj.location === 'Online') {
    badgeText = 'Online Only'
  } else {
    badgeText = ''
  }
  
  return (
    <div className="card">
      {badgeText && 
        <div className="card--badge bold">{badgeText}</div>
      }
      <img className="card--img" src={coverImg} alt={obj.title}  />
      <div className="card--stats">
        <img src={star} alt="star-icon" className="card--star" />
        <span className="bold">{obj.stats.rating}</span>
        <span className="gray">({obj.stats.reviewCount})</span>
        <span className="gray"> • </span>
        <span className="location gray">{obj.location}</span>
      </div>
      <h2 className="card--title">{obj.title}</h2>
      <span className="bold">From ${obj.price}<span className="gray"> / person</span></span>
    </div>
  )
}

export default Card
