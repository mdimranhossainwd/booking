import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateForm = () => {
  const updateData = useLoaderData();
  const { _id, name, marks, img, email, date, details } = updateData;

  const updateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const marks = form.marks.value;
    const img = form.img.value;
    const select = form.select.value;
    const email = form.email.value;
    const date = form.date.value;
    const details = form.details.value;

    const formAllValue = { name, marks, img, select, email, date, details };

    fetch(
      `https://b8a11-server-side-mdimranhossainwd-master-jn8bazyv9.vercel.app/createassainment/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formAllValue),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Assainment Update Successfully ! ");
      });
  };

  return (
    <div>
      <div>
        <div className="container mx-auto mb-12 mt-6">
          <div className="bg-[#F3F4F8] p-12">
            <div className="text-center pb-3">
              <h2 className="text-4xl mb-6 font-bold">
                Update <span className="text-[#FF3364]">Assainment</span> Here
                ...
              </h2>
              <p className="w-3/4 mb-8 mx-auto">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <form onSubmit={updateProduct}>
              {/* form name and quantity row */}
              <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Assainment-Title
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Marks
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="marks"
                      defaultValue={marks}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form supplier row */}
              <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Image URL
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="img"
                      defaultValue={img}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <div className="from-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">
                        Select
                      </span>
                    </label>
                    <label className="input-group">
                      <select
                        name="select"
                        className="input input-bordered w-full"
                      >
                        <option value="volvo">Select Any Assainment</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              {/* form category and details row */}
              <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-lg font-medium">Date</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="date"
                      name="date"
                      defaultValue={date}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text text-lg font-medium">
                      Descriptions
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="details"
                      defaultValue={details}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="form-control md:w-1/2 mb-8">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    User's Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="email"
                    defaultValue={email}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              {/* form Photo url row */}
              <input
                type="submit"
                value="Update Assainment"
                className="py-3 btn-block bg-[#FF3363] text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
