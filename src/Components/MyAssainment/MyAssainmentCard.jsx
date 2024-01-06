import { Link } from "react-router-dom";

const MyAssainmentCard = ({ item, handleDelete }) => {
  const { _id, pdf, name, marks, date, details, descriptions, email } = item;
  return (
    <div>
      <div className="relative text-gray-700  bg-base-100 border w-96 rounded-xl bg-clip-border">
        <div className="p-6 text-center">
          <a
            className="text-lg font-bold"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            download="download"
          >
            Download Pdf
          </a>
          {/* <Link>{pdf}</Link> */}
          <h5 className="block mb-2  font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h5>
          <p className="block mb-6 font-sans text-base antialiased font-light leading-relaxed text-inherit">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life
            in Barcelona.
          </p>
          <span>Marks : {marks}</span>
        </div>
        <div className="p-6 pt-0">
          <Link>
            <div
              onClick={() => handleDelete(_id)}
              className="bg-[#FF3364] rounded-lg mb-3 py-2 px-4 text-center text-white"
            >
              Delete
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAssainmentCard;
