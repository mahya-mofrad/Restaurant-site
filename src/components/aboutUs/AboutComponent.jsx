import about from "../../assets/img/about.jpg";
import styled from "./AboutComponent.module.css";
export default function AboutComponent() {
  return (
    <>
      <section className={`container d-flex ${styled.about}`}>
        <div
          className={`row  d-flex  align-items-center justify-contetnt-center`}
          data-aos="fade-up"
        >
          <div
            class={`col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 ${styled.content}`}
          >
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="d-flex flex-column">
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. in
              voluptate eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </p>
          </div>

          <div
            className={`col col-lg-6 order-1 order-lg-2`}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <figure className={`${styled.aboutImg}`}>
              <img src={about} alt="about us picther" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
