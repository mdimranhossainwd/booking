const Faq = () => {
  return (
    <div className="pt-12 pb-8 container px-3 md:px-0 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold  text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="md:w-[770px] text-md mx-auto">
          "Explore our Frequently Asked Questions (FAQ) to find quick answers to
          common queries. Whether you're wondering about enrollment procedures,
          course availability, payment options, or technical support."
        </p>
      </div>
      <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 items-center justify-between gap-8">
        <div>
          <img
            className="w-full"
            src="https://i.ibb.co/XXr6Zvm/people-asking-questions-illustration-flat-style-57801-686-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              About to the our Study HOme
            </div>
            <div className="collapse-content">
              <p>
                "Explore our Frequently Asked Questions (FAQ) to find quick
                answers to common queries. Whether you're wondering about
                enrollment procedures, course availability, payment options, or
                technical support."
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>
                "Explore our Frequently Asked Questions (FAQ) to find quick
                answers to common queries. Whether you're wondering about
                enrollment procedures, course availability, payment options, or
                technical support."
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>
                "Explore our Frequently Asked Questions (FAQ) to find quick
                answers to common queries. Whether you're wondering about
                enrollment procedures, course availability, payment options, or
                technical support."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
