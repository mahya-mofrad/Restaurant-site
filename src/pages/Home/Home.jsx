import BookTableForm from "../../components/BookTable/BookTable";
import Chefs from "../../components/Chefs/Chefs";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import WhyUsSection from "../../components/whyUs/WhyUsSection";
import Events from "./Events/Events";
import Header from "./Header/Header";

export default function Home(bookTableRef) {
  return (
    <>
      <Header />
      <WhyUsSection />
      <Events />
      <div>
        <BookTableForm ref={bookTableRef} />
      </div>
      <Gallery />
      <Chefs />
      <Footer />
    </>
  );
}
