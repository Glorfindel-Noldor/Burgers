import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Home() {  
  const { 
    listNames,
    setFullNames,//not being utilized !
    searchPerson,// not being utilized !
    setSearchPerson
  } = useOutletContext();

  function listeningEventTargetValue(e) {
    // onChange{ (e)=>setSearchPerson(e.target.value) }
    setSearchPerson(e.target.value);
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="search person"
          onChange={listeningEventTargetValue}
        />
      </form>

      <br />
      <div id="glass">
        <small>{listNames()}</small>
      </div>

      <small className="bottom" id="glass">
        Home
      </small>
    </>
  );
}

export default Home;
