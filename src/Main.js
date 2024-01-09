import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function Main() {
  const [fullnames, setFullNames] = useState([]);
  const [searchPerson, setSearchPerson]=useState('')

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((res) => res.json())
      .then((data) => setFullNames(data))
      .catch((error) => console.log(`Your error: ${error}`));
  }, []);

 const filteredNames = fullnames.filter((item)=>{
  return item.lastname.toLowerCase().includes(searchPerson.toLowerCase()) || 
  item.firstname.toLowerCase().includes(searchPerson.toLowerCase())

  /*
  if(tem.lastname.toLowerCase().includes(searchPerson.toLowerCase())){
    return true
  }
  else{ return false }
  */
})
  

  const listNames = ()=>(
    filteredNames.map((item, index)=>(
      <small key={index}>
        {item.firstname} {item.lastname} <br/>
      </small>
    ))
  )
  
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet context={{
        listNames,
        setFullNames,
        searchPerson,
        setSearchPerson
      }}/>
    </div>
  );
}

export default Main;
