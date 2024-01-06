import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  const { _id, date, details, img, marks, name, email } = data;

  const takeAssainment = (_id) => {
    _id.preventDefault();
    const form = _id.target;
    const name = form.name.value;
    const marks = form.marks.value;

    const pdf = form.pdf.value;
    const select = form.select.value;
    const email = form.email.value;
    const date = form.date.value;
    const details = form.details.value;

    const formAllValue = { name, pdf, marks, select, email, date, details };

    console.log(formAllValue);

    toast.success("Add to my Assainemt");

    fetch(
      "https://b8a11-server-side-mdimranhossainwd-master-jn8bazyv9.vercel.app",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formAllValue),
      }
    );
  };

  return (
    <div className="container mx-auto pt-16 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
        <img className="w-full" src={img} alt="" />

        <div>
          <h2 className="text-4xl font-bold text-[#FF3363] mb-2">{name}</h2>
          <span className="text-lg font-semibold text-balck mb-5 block">
            {date}
          </span>
          <p className="mb-12">
            {details} Certainly! To provide you with relevant descriptions and
            paragraphs for your project, I'll need more information about the
            specific topic or subject matter of your project., I'll need more
            information about the specific topic or subject matter of your
            project. Please let me know the subject or theme of your project,
            Please let me know the subject or theme of your project, and any
            particular aspects you want to include in the descriptions. This
            will help me tailor the content to your needs.
          </p>

          {/* <Link> */}
          {/* <button
              onClick={() => takeAssainment(_id)}
              className="px-6 py-2 bg-[#FF3363] text-white rounded-md border-none"
            >
              Add To Assainment
            </button> */}

          <div>
            <button
              className="px-6 py-2 bg-[#FF3363] text-white rounded-md border-none"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Submit Assainments
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div>
                  <h2 className="text-4xl mb-12 mt-6 font-bold text-center">
                    Submit Your{" "}
                    <span className="text-[#FF3364]">Assainments</span>
                  </h2>
                </div>
                <form onSubmit={takeAssainment}>
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
                          PDF Link
                        </span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="pdf"
                          placeholder="PDF link Generate Here ...."
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
                        <span className="label-text text-lg font-medium">
                          Date
                        </span>
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
                          Email
                        </span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Assainments Descriptions Here..."
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="form-control w-full mb-8">
                    <label className="label">
                      <span className="label-text text-lg font-medium">
                        Descriptions
                      </span>
                    </label>
                    <label className="input-group">
                      <textarea
                        name="details"
                        id=""
                        cols=""
                        className="w-full border px-8 py-5"
                        placeholder="Assinemts Some Descriptions .... "
                        rows="10"
                      ></textarea>
                    </label>
                  </div>

                  <input
                    type="submit"
                    value="Submit Assainment"
                    className="py-3 btn-block bg-[#FF3363] text-white"
                  />

                  {/* form Photo url row */}
                </form>
                <div className="modal-action">
                  <form method="dialog" className="flex justify-around gap-6">
                    <button
                      onClick={() => takeAssainment(_id)}
                      className="px-6 py-2 bg-[#FF3363] text-white rounded-md border-none"
                    >
                      Add To Assainment
                    </button>
                    <button className="px-6 py-2 border border-[#FF3364]  rounded-md text-lg font-semibold">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
