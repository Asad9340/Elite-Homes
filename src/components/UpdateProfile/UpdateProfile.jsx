import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Firebase/AuthProvider';
import { Button } from '@material-tailwind/react';

function UpdateProfile() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      category: '',
      checkbox: [],
      radio: '',
    },
  });

  const { user } = useContext(AuthContext);
  const { displayName } = user;
  const [name, setName] = useState(false);
  const handleNameEdit = () => {
    setName(!name);
  };
  return (
    <div className="mt-10 flex justify-center max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit(console.log)}
        className="flex flex-col w-full"
      >
        <h2 className="text-2xl font-semibold mb-2">
          Name: {displayName}{' '}
          <Button onClick={handleNameEdit} variant="filled">
            Edit
          </Button>
        </h2>
        <div
          className={
            name
              ? 'block relative w-full h-10 rounded-lg bg-gray-300  placeholder:text-gray-700'
              : 'hidden relative w-full h-10 rounded-lg bg-gray-300  placeholder:text-gray-700'
          }
        >
          <input
            className="w-full h-10 rounded-lg bg-gray-300 pl-4 placeholder:text-gray-700"
            {...register('firstName', { required: true })}
            placeholder="Update Name"
          />
          <Button className="absolute right-0">Update</Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
