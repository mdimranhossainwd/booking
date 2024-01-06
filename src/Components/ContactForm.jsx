const ContactForm = () => {
  return (
    <div>
      <div className=" bg-base-200 mt-10 pt-10 pb-6">
        <div>
          <h2 className="text-center font-bold text-4xl text-[#ff3363]">
            Contact Us
          </h2>
        </div>
        <div className="hero-content container mx-auto justify-between flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/pfddp4h/call-customer-phone-support-service-help-abstract-concept-graphic-design-illustration-133260-6390-re.png"
            alt=""
          />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-6 py-8">
            <form>
              <input
                className="block py-3 border px-4 w-full mb-3"
                type="Your Name"
                placeholder="Your Name"
              />
              <input
                className="block py-3 border px-4 w-full mb-3"
                type="Your Name"
                placeholder="Your Email"
              />
              <textarea
                className="w-full block px-4 py-2"
                name=""
                id=""
                cols="30"
                placeholder="Type yor message here ...."
                rows="5"
              ></textarea>
              <div className="form-control mt-6">
                <button className="border rounder-full text-black px-8 py-3 text-md font-semibold  hover:bg-[#FF3364] hover:border-none hover:text-white rounded-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
