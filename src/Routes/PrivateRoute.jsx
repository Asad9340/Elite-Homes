import { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Navigate } from 'react-router-dom';
function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (user) {
    return <div> {children}</div>;
  }
  return <Navigate to="/login" />;
}

export default PrivateRoute;
