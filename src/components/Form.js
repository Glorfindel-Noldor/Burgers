import React from 'react';
import { useOutletContext } from 'react-router-dom';
const api = 'http://localhost:3000/data';

function Form() {
  const { 
    listNames, //not being utilized !
    setFullNames,
    conditionalNames, //not being utilized !
    setConditionalNames //not being utilized !
  } = useOutletContext();




  function SubmitForm(e) {
    e.preventDefault()

    if(e.target.firstname.value || e.target.lastname.value === ''){
      alert('you must enter a first name and a last name!')
    }

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
      .then(setFullNames([...listNames,newNameJSON]))
      .catch((error) => console.log(error));
      
      e.target.reset()
  }


  return (
    <>
      <form onSubmit={(e)=>SubmitForm(e)}>
        <input
          name="firstname"
          id="glass"       
          placeholder="First Name"
        />
        <input
          name="lastname"
          id="glass"
          placeholder="Last Name"
        />
        <input id='glass' type='submit' value={'submit'}/>
      </form>

      <small className="bottom" id="glass">
        Form
      </small>
    </>
  );
}

export default Form;
