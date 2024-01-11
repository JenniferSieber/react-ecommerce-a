import React from 'react'
import Card from './Card'
import data from './data'

function Cards() {
 
  const cards = data.map(obj => {
    return (
        <Card 
          key={obj.id}
          coverImg={require(`../../src/images/${obj.coverImg}`)}
          obj={obj}
         
        />
    )
  })
  return (
    <div className="cards">
      {cards}     
    </div>
  )
}

export default Cards