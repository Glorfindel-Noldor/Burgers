import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function Main() {
  const [pull, setPull] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((res) => res.json())
      .then((data) => setPull(data))
      .catch((error) => console.log(`Your error: ${error}`));
  }, []);

  const names = pull.map((item, index) => (
    <small key={index}>
      {item.firstname} {item.lastname}
      <br />
    </small>
  ));

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet context={{ names, setPull }} />
    </div>
  );
}

export default Main;
