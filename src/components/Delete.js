import React from "react";
import { useOutletContext } from "react-router-dom";
const api = 'http://localhost:3000/data';

function Delete(){
    const { 
        listNames,
        setFullNames,
        searchPerson,
        setSearchPerson 
    } = useOutletContext()


    const handleDelete = (id) => {
        // Assuming 'id' is the unique identifier for the item to be deleted
        fetch(`${api}/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((deletedItem) => {
            // Update the list of names by filtering out the deleted item
            const updatedList = listNames.filter((item) => item.id !== deletedItem.id);
            setFullNames(updatedList);
          })
          .catch((error) => console.log(error));
      };
    





      return(
        <>
        <h4>Click on name to delete!</h4>
            <br/>
            <br/>
        <div>
                <small>{handleDelete}</small>
        </div>
        </>
    )
}

export default Delete;