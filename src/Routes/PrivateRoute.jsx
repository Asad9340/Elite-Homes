import { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Spinner/Loader';
function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (user) {
    if (loading) {
       <Loader />;
    }
    return <div> {children}</div>;
  }
  return <Navigate to="/login" state={location?.pathname} />;
}

export default PrivateRoute;
