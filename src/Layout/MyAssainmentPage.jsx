import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import MyAssainmentCard from "../Components/MyAssainment/MyAssainmentCard";

const MyAssainmentPage = () => {
  const loaderData = useLoaderData();
  const [isData, setIsData] = useState(loaderData);
  const { _id } = loaderData;

  console.log(isData);

  const handleDelete = (_id) => {
    console.log("Delete This Items ", _id);
    toast.success("Delete Successfully");
    fetch(
      `https://b8a11-server-side-mdimranhossainwd-master-jn8bazyv9.vercel.app/myassainments/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaing = isData.filter((users) => users._id !== _id);
        setIsData(remaing);
      });
  };

  return (
    <div className="container mx-auto pt-14 pb-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-12">
          Here is <span className="text-[#FF3353]">My Assainments</span>{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        {isData.map((item) => (
          <MyAssainmentCard
            item={item}
            handleDelete={handleDelete}
            key={item._id}
          ></MyAssainmentCard>
        ))}
      </div>
    </div>
  );
};

export default MyAssainmentPage;
