import { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Spinner/Loader';
function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" state={location?.pathname} />;
    }
  if (loading) {
   return <Loader />;
  }
  return <div> {children}</div>;
}

export default PrivateRoute;
