import axios from "axios";
import toast from "react-hot-toast";

const Create = () => {
  const createSubmite = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const marks = form.marks.value;
    const img = form.img.value;
    const select = form.select.value;
    const email = form.email.value;
    const date = form.date.value;
    const details = form.details.value;

    const formAllValue = { name, marks, img, select, email, date, details };

    try {
      const response = await axios.post(
        "https://assainment-server.vercel.app/my-assainments",
        formAllValue,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.data?.acknowledged) {
        toast.success("Successfully toasted!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className="container mx-auto mb-12 mt-6">
          <div className="bg-[#F3F4F8] p-12">
            <div className="text-center pb-3">
              <h2 className="text-4xl mb-6 font-bold">
                Create <span className="text-[#FF3364]">Assainment</span> Here
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
            <form onSubmit={createSubmite}>
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
                      placeholder="Add Assainment Name"
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
                      placeholder="Assianments-Marks"
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
                      placeholder="Image URL"
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
                      placeholder="Assainment Submit Date.."
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
                      placeholder="Assainments Descriptions Here..."
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
                    placeholder="User's Email Here...."
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              {/* form Photo url row */}
              <input
                type="submit"
                value="Add Assainment"
                className="py-3 btn-block bg-[#FF3363] text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
