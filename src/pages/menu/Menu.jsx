import SectionTitle from "../../components/Section title/SectionTitle";
import Navbar from "../../components/navbar/Navbar";
import FoodComponent from "./FoodComponent";
import Footer from "../../components/Footer/Footer";
import styled from "./Menu.module.css";
import { useState } from "react";

function MenuFilters() {
  const [activeFilter, setActiveFilter] = useState("*");
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <Navbar />
      <section className="container mt-5 " data-aos="fade-up">
        <SectionTitle title="menu" subTitle="Check Our Tasty Menu" />
        <ul className="d-flex justify-content-center align-items-center gap-4 p-0">
          <li
            onClick={() => handleFilterClick("*")}
            className={`${styled.filters} ${
              activeFilter === "*" ? styled.filterActive : ""
            }`}
          >
            All
          </li>
          <li
            onClick={() => handleFilterClick("filterStarters")}
            className={`${styled.filters} ${
              activeFilter === "filterStarters" ? styled.filterActive : ""
            }`}
          >
            Starters
          </li>
          <li
            onClick={() => handleFilterClick("filterSalads")}
            className={`${styled.filters} ${
              activeFilter === "filterSalads" ? styled.filterActive : ""
            }`}
          >
            Salads
          </li>
          <li
            onClick={() => handleFilterClick("filterSpecialty")}
            className={` ${styled.filters} ${
              activeFilter === "filterSpecialty" ? styled.filterActive : ""
            }`}
          >
            Specially
          </li>
        </ul>
      </section>
      <FoodComponent activeFilter={activeFilter} />
      <section>
        <Footer />
      </section>
    </>
  );
}
export default MenuFilters;
