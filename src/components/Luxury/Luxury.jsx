import Estates from '../Estates/Estates';
import useEstateData from './../../Hooks/useEstateData';
function Luxury() {
  const { data } = useEstateData();
  return (
    <div className="my-4 md:my-8 lg:my-10">
      <div className="border p-4 bg-primary rounded-md">
        <h2 className="text-3xl md:text-5xl font-semibold md:font-bold text-center text-textSecondary animate__animated animate__bounce">
          Luxury
        </h2>
      </div>
      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
        {data.map(estate => (
          <Estates key={estate.id} estate={estate} />
        ))}
      </div>
    </div>
  );
}

export default Luxury;
