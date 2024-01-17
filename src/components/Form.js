import React, { useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
const api = 'http://localhost:3000/data';

function Form() {
  const reloadPage = useNavigate()
  const { 
    listNames, //not being utilized !
    setFullNames,
    conditionalNames, //not being utilized !
    setConditionalNames //not being utilized !
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
      .then((newName)=>{
        setFullNames((prevList)=>([ newName, ...prevList]))
        e.target.reset();
        alert(`you have added: ${newName.firstname} ${newName.lastname}`)
      })
      .catch((error) => console.log(error));

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
