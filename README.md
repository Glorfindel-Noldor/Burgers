Lets being !

This app is to demonstrate an API fetching with POST and GET
We incorporate the use of react-router-dom to help wrap routs in a simple and easy to read rout set up.
There are two components that make use of our POST and DELETE method
1 - Our Form.js 
  This component is a simple form that allows us to add a name to our API(mock) 
  It is a pessimistic fetch in such that we have have our ```.then``` set up to only request our POST if everything runs smooth, if not then we have a ```.catch(error)``` set up to let us know where we might have gone wrong
2 - The Delete.js 
  Here we only do a simple delete method. Our user simply clicks on a name and it is removed from our API, its a simple filter method with a DELETE request. the logic is similar to the POST but in revers. Delete.

We have some quality of life added to this app, what if we have a large amount of data, or names. There is a search filter set up to help us quickly look for a name we wish to look for.