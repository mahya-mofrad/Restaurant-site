import styled from "./Tapbar.module.css";
// import * as Icon from "../../../node_modules/bootstrap-icons/icons";
function TopBar() {
  return (
    <div
      className={`d-flex align-items-center container-fluid fixed-top ${styled.topbar}`}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div
        className={`container d-flex justify-content-center justify-content-md-between`}
      >
        <div className={`d-flex align-items-cente ${styled.contactInfo}`}>
          <i className="d-flex align-items-center">
            {/* <Icon.phone color="green" size={30} /> */}
            <span>+1 5589 55488 55</span>
          </i>
          <i className="d-flex align-items-center ms-4">
            <span> Mon-Sat: 11AM - 23PM</span>
          </i>
        </div>
        <div
          className={`d-none d-md-flex align-items-center ${styled.languages} `}
        >
          <ul>
            <li>En</li>
            <li>
              <a href="#">De</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
