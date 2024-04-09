import { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';

function UserProfile() {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="flex  justify-center items-center h-screen">
      <div className=" -mt-10 border p-4 rounded-lg space-y-2">
        <div className='flex justify-center'>
          <img className="rounded-lg w-36" src={user?.photoURL} alt="" />
        </div>
        <p className='flex-wrap max-w-2xl'>{user.photoURL}</p>
        <h2 className="text-3xl font-bold">Name: {user?.displayName}</h2>
        <h4 className="text-lg font-medium">Email: {user?.email}</h4>
      </div>
    </div>
  );
}

export default UserProfile;
