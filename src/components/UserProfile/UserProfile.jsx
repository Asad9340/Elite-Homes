import { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import { Helmet } from 'react-helmet';
function UserProfile() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {' '}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elite Homes | User Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex  justify-center items-center h-screen bg-gray-200 rounded-b-lg">
        <div className=" -mt-10 border p-4 rounded-lg space-y-2">
          <div className="flex justify-center">
            <img className="rounded-lg w-36" src={user?.photoURL} alt="" />
          </div>
          <p className="flex-wrap max-w-2xl break-all">{user.photoURL}</p>
          <h2 className="text-3xl font-bold">Name: {user?.displayName}</h2>
          <h4 className="text-lg font-medium">Email: {user?.email}</h4>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
