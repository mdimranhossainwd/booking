import { Link } from "react-router-dom";

const AssainmentsCard = ({ items }) => {
  const { _id, img, marks, select, name, email, details, date } = items || {};
  console.log(items);
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
          <img src={img} className="object-cover w-full h-[220px]" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="block  text-xl  antialiased font-semibold leading-relaxed text-blue-gray-900">
              {name}
            </h3>
          </div>
          <p className="block font-sans mb-5 text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            Date: {date}
          </p>
        </div>
        <div className="px-6 mb-2 pt-0">
          <Link
            to={`/updateform/${_id}`}
            className="block w-full select-none rounded-lg bg-[#FF3363] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Update
          </Link>
        </div>
        <div className="p-6 pt-0">
          <Link
            to={`/viewdetails/${_id}`}
            className="block w-full select-none rounded-lg bg-[#FF3363] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssainmentsCard;
