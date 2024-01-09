import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
const api = 'http://localhost:3000/data';

function Form() {

  const { 
    listNames,
    setFullNames,
    conditionalNames,
    setConditionalNames
  } = useOutletContext();




  function SubmitForm(e) {
    e.preventDefault()

    const newNameJSON = {
      "firstname" : e.target.firstname.value,
      "lastname"  : e.target.lastname.value,
    };

    const post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNameJSON),
    };

    fetch(api, post)
      .then((res) => res.json())
      .then(setFullNames)
      .catch((error) => console.log(error));
  }


  return (
    <>
      <form onSubmit={(e)=>SubmitForm(e)}>
        <input
          id="glass"
          type="text"
          name="firstname"
          value={null}
          onChange={null}
          placeholder="First Name"
        />
        <input
          id="glass"
          type="text"
          name="lastname"
          value={null}
          onChange={null}
          placeholder="Last Name"
        />
        <button id="glass" type="submit">
          Submit
        </button>
      </form>

      <small className="bottom" id="glass">
        Form
      </small>
    </>
  );
}

export default Form;
