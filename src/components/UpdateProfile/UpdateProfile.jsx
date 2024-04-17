import { Helmet } from 'react-helmet';
import { Typography, Input, Button } from '@material-tailwind/react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import toast from 'react-hot-toast';

export function UpdateProfile() {
  const { updateUserProfile ,user,setUser} = useContext(AuthContext);
  const handleUpdate = (e)=> {
    e.preventDefault();
    const name = e.target.name.value;
    const profile = e.target.photo.value;
    if (name && profile) {
          updateUserProfile(name, profile)
            .then(() => {
              setUser({ ...user, userName: name, photoURL: profile });
              toast.success('Successfully Name and Email changed!');
            })
            .catch(err => console.log(err));
    }
    else {
      toast.error('Please Enter Name and PhotoURL');
    }
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elite Homes | Update Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="grid text-center h-screen items-center p-8">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-2 font-display">
            Update Your Profile
          </Typography>

          <form onSubmit={handleUpdate} className="mx-auto max-w-[24rem] text-left">
            <div className="mb-6">
              <label htmlFor="name">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900 font-display"
                >
                  New Name
                </Typography>
              </label>
              <Input
                id="name"
                color="gray"
                size="lg"
                type="name"
                name="name"
                placeholder="Asadul Islam"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: 'hidden',
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="photo">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900 font-display"
                >
                  New PhotoURL
                </Typography>
              </label>
              <Input
                id="photo"
                color="gray"
                size="lg"
                type="photo"
                name="photo"
                placeholder="https://www.photourl.com"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: 'hidden',
                }}
              />
            </div>
            <Button type='submit' color="gray" size="lg" className="mt-6" fullWidth>
              Update Profile
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default UpdateProfile;
