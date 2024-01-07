import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
const api = 'http://localhost:3000/data'

function Form() {
  const { setPull } = useOutletContext();

  const post = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(null),
  };

  useEffect(()=>{
    fetch(api,post)
    .then((res)=>(res.json()))
    .then((data)=>(setPull(data)))
    .catch((error)=>(console.log(error)))
  },[])

  return (
    <>
      <form onSubmit={null}>
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
