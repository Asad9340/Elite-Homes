import { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
function PrivateRoute({ children }) {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return <div> {children}</div>;
  }
  return <Navigate to="/login" state={location?.pathname}/>;
}

export default PrivateRoute;
