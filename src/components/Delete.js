import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
const api = 'http://localhost:3000/data';

function Delete() {
    const { 
        listNames, 
        setFullNames, 
        searchPerson, 
        setSearchPerson 
    } = useOutletContext();
  const { id } = useParams();

  function listeningEventTargetValue(e) {
    setSearchPerson(e.target.value);
  }

  const handleDelete = () => {
    fetch(`${api}/${id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then((deletedItem) => {
    const updatedList = listNames.filter(
        (item) => item.id !== deletedItem.id
    );
        setFullNames(updatedList);
    })
      .catch((error) => console.log(error));
  };

    const elements= () => {
        listNames.map(
            (item)=>{
                <li key={item.id}>
                    <button id="glass" onClick={() => handleDelete(item.id)}>
                        {item.firstname} {item.lastname}
                    <br/>
                    </button>
                </li>;
            }
        )
    }

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
        <ul>{elements}</ul>
      </div>
    </>
  );
}

export default Delete;
