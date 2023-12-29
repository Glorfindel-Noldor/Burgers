import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

const rout = createBrowserRouter(App);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={rout} />);
