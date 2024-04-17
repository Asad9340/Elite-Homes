import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { HiCurrencyDollar } from 'react-icons/hi2';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Estates({ estate }) {
  const { id, image, title, name, location, price, area, status } = estate;
  return (
    <div className="relative mb-52 md:mb-48">
      <img
        data-aos="zoom-in"
        data-aos-duration="500"
        className="rounded-t-lg z-10 h-[350px] md:h-[400px] w-full"
        src={image}
        alt=""
      />
      <div className="text-xs  rounded-xl flex flex-col items-center justify-center absolute top-12 -left-1 px-6 py-3 bg-primary text-textSecondary -rotate-45">
        <p>www.elitehomes.com</p>
        <span data-aos="zoom-in" data-aos-duration="500" className="text-lg">
          For <span className="text-2xl font-semibold ">{status}</span>
        </span>
      </div>
      <div>
        <div className=" absolute  hover:-mt-10 hover:space-y-2.5 duration-300 bg-secondary text-textSecondary hover:bg-red-500 z-40 w-full px-4 md:px-6 py-4 rounded-b-lg">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-xl md:text-2xl font-medium md:font-semibold text-center"
          >
            {title}
          </h2>{' '}
          <hr
            data-aos="fade-up"
            data-aos-duration="1200"
            className="mx-10 bg-black"
          />
          <p data-aos="fade-up" data-aos-duration="1000" className="mt-2">
            Name: {name}
          </p>
          <div
            data-aos="fade-down"
            data-aos-duration="1400"
            className="flex justify-between pr-6  text-sm md:text-lg"
          >
            <p className="flex gap-1 items-center">
              <FaLocationDot />
              Location:
              {location}
            </p>
            <p data-aos="fade-down" data-aos-duration="1400">
              Status:{status}
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            className="flex justify-between pr-6  text-sm md:text-lg"
          >
            <p className="flex gap-1 items-center ">
              <HiCurrencyDollar /> Price: {price}
            </p>
            <p className="animate__animated animate__backInRight animate__delay-1s">
              Area: {area}
            </p>
          </div>
          <div className="text-center mt-2">
            <Link to={`/details/${id}`}>
              <Button data-aos="fade-up" data-aos-duration="500" color="indigo">
                View Property
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estates;
