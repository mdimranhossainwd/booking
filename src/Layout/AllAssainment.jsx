import { useEffect, useState } from "react";
import AssainmentBanner from "../Components/Page/AssainmentBanner";
import AssainmentsCard from "../Components/Page/AssainmentsCard";

const AllAssainment = () => {
  const [itemData, setIsData] = useState([]);
  useEffect(() => {
    fetch(
      "https://b8a11-server-side-mdimranhossainwd-master-jn8bazyv9.vercel.app/assainment-collections"
    )
      .then((res) => res.json())
      .then((data) => setIsData(data));
  }, []);
  console.log(itemData);
  return (
    <div>
      <AssainmentBanner></AssainmentBanner>
      <div className="text-center pt-12">
        <h2 className="text-4xl font-bold text-[#000] mb-8">
          All Classes Here
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {itemData.map((item) => (
          <AssainmentsCard items={item} key={item._id}></AssainmentsCard>
        ))}
      </div>
    </div>
  );
};

export default AllAssainment;
