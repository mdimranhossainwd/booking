import Banner from "../Components/Banner/Banner";
import ContactForm from "../Components/ContactForm";
import Faq from "../Components/FAQ/Faq";
import Features from "../Components/Features/Features";

const HomeLayout = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <ContactForm></ContactForm>
      <Faq></Faq>
    </div>
  );
};

export default HomeLayout;
