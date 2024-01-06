const Banner = () => {
  return (
    <div>
      <div
        className="min-h-[80vh] flex items-center object-cover  bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=1476&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div>
          <div className="text-center md:w-3/5 mx-auto">
            <h1 className="mb-8 md:text-3xl lg:text-[42px] text-white font-bold">
              A Collaborative <span className="text-[#FF3364]">Learning</span>{" "}
              Experience
            </h1>
            <p className="mb-9 text-white px-3 md:px-0">
              "Welcome to StudyHub, where learning becomes a collaborative
              journey! Embrace the power of shared knowledge and connect with
              your friends for a unique and engaging learning experience. With
              StudyHub, you can create assignments, complete them, and grade
              your friends' assignments in a fun and interactive way. Whether
              you're working on a project, preparing for exams, or simply
              exploring new subjects, StudyHub is your one-stop destination for
              shared knowledge and academic success. Join us today and embark on
              a learning adventure with your friends!"
            </p>
            <button className="border rounder-full text-white px-8 py-3 text-md font-semibold  hover:bg-[#FF3364] hover:border-none hover:text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
