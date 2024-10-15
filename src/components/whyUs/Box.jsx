import styled from "./Box.module.css";
import "animate.css";
import PropTypes from "prop-types";

Box.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Box(props) {
  return (
    <div className={props.className}>
      <div className={`row animate__animated animate__zoomIn`}>
        <div className={``}>
          <div
            className={`${styled.box}  `}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <span>{props.number}</span>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
