import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Homepage from '../Home/Homepage';
import ViewDetails from '../components/ViewDetails/ViewDetails';
import PrivateRoute from './PrivateRoute';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Error from '../Error/Error';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';
import UserProfile from '../components/UserProfile/UserProfile'
import About from '../components/AboutPage/About';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
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
        element: <SignUp />,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/updateprofile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <UserProfile/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
