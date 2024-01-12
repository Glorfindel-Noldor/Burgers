import React from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
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
    setSearchPerson(e.target.value);
  }

  const handleDelete = (idToDelete) => {
    fetch(`${api}/${idToDelete}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((deletedItem) => {
        const updatedList = listNames.filter((item) => item.id !== deletedItem.id);
        setFullNames(updatedList);
        window.location.reload();
      })
      .catch((error) => console.log(error));   
  };
  
    
  return (
    <>
      <h4>Click on name to delete!</h4>
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
              onClick={()=>handleDelete(item.id)}>
              {item.firstname[0]} {item.lastname}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Delete;
