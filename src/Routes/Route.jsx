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
        loader: () => fetch('/estateData.json'),
      },
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '/register',
        element: <SignUp/>,
      },
      {
        path: '/updateprofile',
        element: <h1>Profile is updating</h1>,
      },
      {
        path: '/profile',
        element: <h1>User Profile</h1>,
      },
    ],
  },
]);
