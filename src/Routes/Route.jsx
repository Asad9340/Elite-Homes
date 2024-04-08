import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Homepage from "../Home/Homepage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element:<Homepage/>
      }
    ]
  },
]);