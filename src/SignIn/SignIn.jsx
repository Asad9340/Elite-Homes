import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Typography, Input, Button } from '@material-tailwind/react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../Firebase/AuthProvider';
import { Link } from 'react-router-dom';

export function SignIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown(cur => !cur);
  const { googleLogin, githubLogin, setUser } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => console.log(error));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => console.log(error));
  };
  return (
    <section className="grid text-center  items-center p-8">
      <Typography variant="h3" color="blue-gray" className="mb-2">
        Sign In
      </Typography>
      <Typography className="mb-6 text-gray-600 font-normal text-[18px]">
        Enter your email and password to sign in
      </Typography>
      <form action="#" className="mx-auto max-w-[24rem] text-left">
        <div className="mb-6">
          <label htmlFor="email">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Your Email
            </Typography>
          </label>
          <Input
            id="email"
            color="gray"
            size="lg"
            type="email"
            name="email"
            placeholder="name@mail.com"
            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            labelProps={{
              className: 'hidden',
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">
            <Typography
              variant="small"
              className="mb-2 block font-medium text-gray-900"
            >
              Password
            </Typography>
          </label>
          <Input
            size="lg"
            placeholder="********"
            labelProps={{
              className: 'hidden',
            }}
            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            type={passwordShown ? 'text' : 'password'}
            icon={
              <i onClick={togglePasswordVisiblity}>
                {passwordShown ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </i>
            }
          />
        </div>
        <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth>
          sign in
        </Button>
        <div className="flex justify-between gap-4 mx-0 md:mx-6">
          <Button
            onClick={handleGoogleLogin}
            variant="outlined"
            size="md"
            className="mt-4 flex  items-center justify-center gap-2"
            fullWidth
          >
            <FaGoogle className="text-lg" />
            google
          </Button>
          <Button
            onClick={handleGithubLogin}
            variant="outlined"
            size="md"
            className="mt-4 flex  items-center justify-center gap-2"
            fullWidth
          >
            <FaGithub className="text-lg" />
            Github
          </Button>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Not registered?{' '}
          <Link to="/register" className="font-medium text-gray-900">
            Create account
          </Link>
        </Typography>
      </form>
    </section>
  );
}

export default SignIn;