import React, { useState } from 'react'

function Tour({id,image,info,price,name,removeTour}) {
  const [readMore,setReadMore] = useState(false);
  return (
    <section className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price' >${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}<span><button onClick={()=>{setReadMore(!readMore)}}>{readMore ? 'show less ': 'readmore'}</button></span></p>
        <button onClick={()=>{removeTour(id)}} className='delete-btn'>not interested</button>
      </footer>
    </section>
  )
}

export default Tour