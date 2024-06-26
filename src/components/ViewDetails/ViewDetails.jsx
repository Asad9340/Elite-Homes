import { FaLocationDot } from 'react-icons/fa6';
import { TbAirConditioning } from 'react-icons/tb';
import { BsPeopleFill } from 'react-icons/bs';
import { IoWifi } from 'react-icons/io5';
import { IoMdPricetag } from 'react-icons/io';
import { useParams, useLoaderData } from 'react-router-dom';
import { GrStatusInfo } from 'react-icons/gr';
import { BiSolidArea } from 'react-icons/bi';
import { Helmet } from 'react-helmet';
function ViewDetails() {
  const { id } = useParams();
  const userData = useLoaderData();
  const specificData = userData.filter(item => item.id === id);
  console.log(specificData);
  const [
    {
      image,
      title,
      name,
      description,
      people_capacity,
      contact_number,
      location,
      facilities,
      price,
      status,
      area,
      caution_note,
    },
  ] = specificData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elite Homes | Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2
        data-aos="fade-down"
        data-aos-duration="500"
        className="sticky z-50 top-0 text-2xl md:text-3xl lg:text-4xl font-medium  lg:font-semibold text-center mb-4 bg-[#353358] text-white py-10 md:py-10 rounded-b-lg"
      >
        {title}
      </h2>
      <div className="mb-10">
        <img
          className="rounded-lg h-[400px] lg:h-[500px] w-full"
          src={image}
          alt=""
        />
        <div className="mt-4 md:mt-8 grid gap-4 grid-cols-1 md:grid-cols-3 px-4 md:px-8">
          <div className="col-span-2">
            <h2
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-xl font-semibold"
            >
              Category: {name}
            </h2>
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              className="text-lg font-medium text-gray-800"
            >
              <span className="underline font-semibold">Overview</span>:{' '}
              {description}
            </h2>
            <p
              data-aos="fade-down"
              data-aos-duration="1000"
              className="mt-6 md:mt-10 text-lg  md:text-xl font-semibold underline"
            >
              Facilities
            </p>
            {facilities.map((item, index) => (
              <li
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-lg font-medium text-gray-800"
                key={index}
              >
                {item}
              </li>
            ))}
            <div>
              <h2
                data-aos="fade-down"
                data-aos-duration="1200"
                className="mt-6 md:mt-10 text-lg  md:text-xl font-semibold underline"
              >
                Property Details:
              </h2>
              <div
                data-aos="fade-up"
                data-aos-duration="1400"
                className="mt-3 space-y-2"
              >
                <p className="flex gap-2 items-center">
                  <IoMdPricetag />
                  Price: {price}
                </p>
                <p className="flex gap-2 items-center">
                  <GrStatusInfo />
                  Sale Status:{status}
                </p>
                <p className="flex gap-2 items-center">
                  <BiSolidArea />
                  Area: {area}
                </p>
              </div>
            </div>
            <div>
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                className="mt-6 md:mt-10 text-lg  md:text-xl font-semibold underline"
              >
                Caution Note
              </p>
              {caution_note.map((item, index) => (
                <li
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  className="text-lg font-medium text-gray-800"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </div>
          </div>
          <div className="border border-secondary h-min rounded-md">
            <h2
              data-aos="fade--down"
              data-aos-duration="800"
              className="text-xl underline text-center mt-4 md:mt-6 font-semibold"
            >
              Amenities
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="mx-4 md:mx-8 mt-3 space-y-2"
            >
              <p className="flex gap-2 items-center">
                {' '}
                <TbAirConditioning className="border rounded-full p-1 text-2xl" />{' '}
                Air Conditioner{' '}
              </p>
              <p className="flex gap-2 items-center">
                {' '}
                <BsPeopleFill className="border rounded-full p-1 text-2xl" />
                {people_capacity} People
              </p>
              <p className="flex gap-2 items-center">
                {' '}
                <IoWifi className="border rounded-full p-1 text-2xl" />
                Wi-fi
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              className=" rounded-b-md p-3 text-center text-textSecondary mt-3 space-y-2 bg-secondary text-lg md:text-xl font-medium lg:font-semibold"
            >
              <h3>To book, Call us: </h3>
              <h4>{contact_number}</h4>
              <p className="flex gap-2 items-center text-base justify-center text-textPrimary">
                <FaLocationDot />
                {location}{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDetails;
