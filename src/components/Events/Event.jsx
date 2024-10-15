import styles from "../../pages/Home/Events/Events.module.css";

import { Row, Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";

Event.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  firstText: PropTypes.string.isRequired,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  lastText: PropTypes.string.isRequired,
};

export default function Event(props) {
  const {
    image,
    title,
    price,
    firstText,
    option1,
    option2,
    option3,
    lastText,
  } = props;

  return (
    <Row data-aos="fade-up" data-aos-delay="100">
      <Col lg={6} className={styles.eventImg}>
        <Card.Img
          variant="top"
          src={image}
          alt="event-birthday"
          className="img-fluid"
        />
      </Col>
      <Col lg={6} className={`pt-4 pt-lg-0 ${styles.eventText}`}>
        <Card className={styles.customCard}>
          <Card.Body>
            <Card.Title className={styles.title}>{title}</Card.Title>
            <Card.Text className={styles.price}>
              <strong>{price}</strong>
            </Card.Text>
            <Card.Text className="fst-italic">{firstText}</Card.Text>
            <ul className="list-unstyled">
              <li>{option1}</li>
              <li>{option2}</li>
              <li>{option3}</li>
            </ul>
            <Card.Text>{lastText}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
