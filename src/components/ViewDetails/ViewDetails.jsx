import { useParams, useLoaderData } from 'react-router-dom';
function ViewDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  const specificData = data.filter(item => item.id === id);
  const [{ image, title, name,description }] = specificData;

  return (
    <div className="mt-10 px-6 md:px-14 lg:px-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium  lg:font-semibold text-center mb-4">
        {title}
      </h2>
      <img className="rounded-lg h-[500px] w-full" src={image} alt="" />
      <div className="mt-4 md:mt-8 grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <h2 className="text-lg font-medium text-gray-800">
            <span className="underline font-semibold">Overview</span>:{' '}
            {description}
          </h2>
        </div>
        <div className="border">
          <h2 className='text-xl underline text-center mt-4 md:mt-6 font-semibold'>Amenities</h2>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
