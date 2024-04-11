import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import { Button } from '@material-tailwind/react';
import { Helmet } from 'react-helmet';
function UpdateProfile() {


  const { user, userProfileUpdate,userNameUpdate } = useContext(AuthContext);
  const { displayName, photoURL } = user;
  const [name, setName] = useState(false);
  const [photo, setPhoto] = useState(false);
  const nameRef = useRef(null);
  const photoRef=useRef(null);
  const handleNameEdit = () => {
    setName(!name);
  };
  const handlePhotoEdit = () => {
    console.log('clicked');
    setPhoto(!photo);
  };
  const handleNameUpdate = () => {
    const name = nameRef.current.value;
    console.log(name);
    userNameUpdate(name)
      .then(() => {
        console.log('success name change');
        window.location.reload();
      })
      .catch(() => console.log('error'));
  };
  const handleProfileUpdate = () => {
    const profile = photoRef.current.value;
    console.log(profile);
    userProfileUpdate(profile)
      .then(() => {
        console.log('success image change');
      })
      .catch(() => console.log('error'));
  };
  return (
    <>
      {' '}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elite Homes | Update Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mt-10 flex justify-center max-w-lg mx-auto">
        <form className="flex flex-col w-full">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Name: {displayName}{' '}
              <Button onClick={handleNameEdit} variant="filled">
                Edit
              </Button>
            </h2>
            <div
              className={
                name
                  ? 'inline-flex relative w-full h-10 rounded-lg bg-gray-300  placeholder:text-gray-700'
                  : 'hidden relative w-full h-10 rounded-lg bg-gray-300  placeholder:text-gray-700'
              }
            >
              <input
                className="w-full h-10 rounded-lg bg-gray-300 pl-4 placeholder:text-gray-700"
                type="text"
                ref={nameRef}
                name="name"
                placeholder="Update Name"
              />
              <Button
                onClick={handleNameUpdate}
                type="button"
                className="absolute right-0"
              >
                Update
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Photo URL: {photoURL}{' '}
              <Button onClick={handlePhotoEdit} variant="filled">
                Edit
              </Button>
            </h2>
            <div
              className={
                photo
                  ? 'inline-flex relative w-full h-10 rounded-lg bg-gray-300  placeholder:text-gray-700'
                  : 'hidden relative w-full h-10 rounded-lg bg-gray-300  placeholder:text-gray-700'
              }
            >
              <input
                className="w-full h-10 rounded-lg bg-gray-300 pl-4 placeholder:text-gray-700"
                placeholder="Update PhotoURL"
                type="text"
                ref={photoRef}
                name="photoURL"
              />
              <Button
                onClick={handleProfileUpdate}
                type="submit"
                className="absolute right-0"
              >
                Update
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateProfile;
