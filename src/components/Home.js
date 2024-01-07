import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Home() {
  const { names } = useOutletContext();

  return (
    <>
      <small>{names}</small>
      <small className="bottom" id="glass">
        Home
      </small>
    </>
  );
}

export default Home;
