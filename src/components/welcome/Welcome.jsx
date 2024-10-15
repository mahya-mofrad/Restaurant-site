import styled from "./Welcome.module.css";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
export default function Welcome() {
  return (
    <>
      <section class="d-flex align-items-center">
        <div
          class={`container position-relative text-center text-lg-start animate__animated animate__zoomIn ${styled.container} ${styled.hero}`}
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                Welcome to <span>Restaurantly</span>
              </h1>
              <h2>Delivering great food for more than 18 years!</h2>
            </div>

            <div className={`${styled.btns}`}>
              <Link to="/book-a-table" className={`  ${styled.btnMenu}`}>
                our menu
              </Link>
              <Link to="/book-a-table" className={`  ${styled.btnBook}`}>
                book a tabel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
