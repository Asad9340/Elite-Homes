import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { HiCurrencyDollar } from 'react-icons/hi2';

function Estates({ estate }) {
  const {id, image, title, name, location, price, area, status } = estate;
  return (
    <div className="relative mb-10">
      <img className="rounded-lg z-10 h-[400px] w-full" src={image} alt="" />
      <div className="-mt-4 hover:absolute hover:-mt-20 duration-300 bg-secondary text-textSecondary hover:bg-red-500 z-40 w-full px-4 md:px-6 py-6 md:py-8 rounded-b-lg">
        <h2 className="text-xl md:text-2xl font-medium md:font-semibold text-center">
          {title}
        </h2>{' '}
        <hr className="mx-10 bg-black" />
        <p className="mt-3">Name: {name}</p>
        <div className="flex justify-between pr-6 ">
          <p className="flex gap-1 items-center">
            <FaLocationDot />
            Location:
            {location}
          </p>
          <p>Status:{status}</p>
        </div>
        <div className="flex justify-between pr-6 ">
          <p className="flex gap-1 items-center">
            <HiCurrencyDollar /> Price: {price}
          </p>
          <p>Area: {area}</p>
        </div>
        <div className="text-center mt-4">
          <Link to={`/details/${id}`}>
            <Button color="indigo">View Property</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Estates;
