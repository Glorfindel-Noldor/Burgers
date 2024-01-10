Lets being !


//anime
const url = 'https://gogoanime2.p.rapidapi.com/recent-release?type=1&page=1';
const key = {
	method: 'GET',

	headers: {
		'X-RapidAPI-Key': 'cd74d7a9f4msh293742f79e45a49p1693e6jsn81ac83069ac5',
		'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
	}
};



//burgers
const url = 'https://burgers-hub.p.rapidapi.com/burgers';
const key = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cd74d7a9f4msh293742f79e45a49p1693e6jsn81ac83069ac5',
    'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com',
  },
};

 

import { Outlet, useLocation } from 'react-router-dom';

console.log(location.pathname); // Outputs the current path
console.log(location.search);   // Outputs the query parameters
console.log(location.state);    // Outputs the state object
