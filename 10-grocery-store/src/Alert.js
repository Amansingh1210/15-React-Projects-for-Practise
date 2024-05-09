import React, { useEffect } from 'react'

function Alert({type,msg, removeAlert}) {
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      removeAlert();
    },3000)
    return () => clearInterval(timeOut);
  },[])
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert