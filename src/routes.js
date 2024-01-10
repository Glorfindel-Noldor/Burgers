// ./src/routes.js
import Main from './Main';
import Delete from './components/Delete';
import Form from './components/Form';
import Home from './components/Home';
import PageError from './components/PageError';

const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />,
        exact: true,
      },
      {
        path: '/form',
        element: <Form />,
      },
      {
        path: '/delete',
        element: <Delete/>,
      }
    ],
  },
];

export default routes;
