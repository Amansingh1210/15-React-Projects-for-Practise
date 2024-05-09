import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () =>{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}
function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState(getLocalStorage())
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  const [alert,setAlert] = useState({ show: false, msg: '', type: ''});
  // console.log(list);

  const showAlert  = (show=false, msg='', type='') =>{
    setAlert({
      show: show ,
      msg : msg ,
      type: type
    });
  };

  const removeItem = (id) =>{
    showAlert(true,'item removed','danger')
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) =>{
    const specificItem = list.find((item)=> item.id ===id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      //display alert
      showAlert(true,'please enter item name','danger')
    }
    else if (name && isEditing){
      // deal with editing
      setList(list.map((item)=>{
        if(item.id ===editID){
          return {...item,title:name}
        }
        return item
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true,'name changed','success');
    }
    else {
      // show alert 
      showAlert(true,'item added','success');

      const newItem = {id: new Date().getTime().toString(),title:name };
      setList([...list, newItem]);
      setName('')
    }
  };

  const handleClearList = () =>{
    showAlert(true,'List Cleared','danger');
    setList([]);
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list]);

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit} >
      {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
      <h3>grocery cart</h3>
      <div className='form-control'>
        <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=>setName(e.target.value)} />
        <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit' }</button>
      </div>
    </form>
    {list.length > 0 && (
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn' onClick={handleClearList}>clear items</button>
      </div>
    )}

  </section>
}

export default App