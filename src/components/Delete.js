import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
const api = 'http://localhost:3000/data';

function Delete() {
  const {
    fullnames, 
    listNames,  
    setFullNames, 
    searchPerson, 
    setSearchPerson 
  } = useOutletContext();



  function listeningEventTargetValue(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === '') {
      window.location.reload()
      
    } 
    else {
      const filteredNames = fullnames.filter((item) =>
        item.lastname.toLowerCase().includes(searchTerm) ||
        item.firstname.toLowerCase().includes(searchTerm)
      );
      setFullNames(filteredNames);
    }
    


  }
  

  const handleDelete = (idToDelete) => {
    fetch(`${api}/${idToDelete}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((deletedItem) => {
        const updatedList = listNames.filter((item) => item.id !== deletedItem.id);
        setFullNames(updatedList);
        
      })
      .catch((error) => console.log(error));   
  };
  
    
  return (
    <>
      <h4>Click on a name to delete!</h4>
      <input
        type="text"
        placeholder="search person"
        onChange={listeningEventTargetValue}
      />
      <br />
      <br />
      <div id="glass">
        <ul>
          {fullnames.map((item)=>(
            <button 
              key={item.id} 
              onClick={()=>handleDelete(item.id)? null : window.location.reload()}
            >
              {item.firstname[0]} {item.lastname}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Delete;
