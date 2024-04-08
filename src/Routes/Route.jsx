import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Homepage from '../Home/Homepage';
import ViewDetails from '../components/ViewDetails/ViewDetails';
import PrivateRoute from './PrivateRoute';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '/register',
        element: <SignUp/>,
      },
    ],
  },
]);
