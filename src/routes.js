// ./src/routes.js
import Main from './Main';
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
    ],
  },
];

export default routes;
