import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data'

// const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  }

  const fetchToursPlaces = async () =>{
    setLoading(true);
    // const response = await fetch(url);
    // const tours = await response.json();
    // console.log(data);
    setLoading(false)
    setTours(data)
  }
  useEffect(()=>{
    fetchToursPlaces();
  },[])
;  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    );
  };
  if(tours.length === 0){
    return <main>
      <div className='title'>
        <h2>No Tours Left</h2>
        <button className='btn' onClick={()=>setTours(data)}>referesh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
    
  )
}

export default App