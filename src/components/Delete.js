import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
const api = 'http://localhost:3000/data';

function Delete() {
  const {
    fullnames, 
    listNames, //is an array 
    setFullNames, 
    searchPerson, 
    setSearchPerson 
  } = useOutletContext();
  const { id } = useParams();






  function listeningEventTargetValue(e) {
    setSearchPerson(e.target.value);
  }

  const handleDelete = (idToDelete) => {
    fetch(`${api}/${idToDelete}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          return idToDelete; // Return the id of the deleted item
        } else {
          throw new Error('Failed to delete item');
        }
      })
      .then((deletedItemId) => {
        const updatedList = listNames.filter((item) => item.id !== deletedItemId);
        setFullNames(updatedList);
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
            <button key={item.id} onClick={()=>handleDelete(item.id)}>{item.firstname[0]} {item.lastname}</button>
          ))
          }
        </ul>
      </div>
    </>
  );
}

export default Delete;
