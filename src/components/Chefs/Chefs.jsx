import SectionTitle from "../Section title/SectionTitle";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Chefs.module.css";
import chefs1 from "../../assets/img/chefs/chefs1.jpg";
import chefs2 from "../../assets/img/chefs/chefs2.jpg";
import chefs3 from "../../assets/img/chefs/chefs3.jpg";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Chefs() {
  const chefs = [
    {
      id: 1,
      name: "Walter White",
      role: "Master Chef",
      image: chefs1,
      delay: 100,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "pastry maker",
      image: chefs2,
      delay: 200,
    },
    {
      id: 3,
      name: "William Anderson",
      role: "Cook",
      image: chefs3,
      delay: 300,
    },
  ];

  return (
    <section className={styles.chefs}>
      <Container data-aos="fade-up">
        <SectionTitle title="chefs" subTitle="Our Professional Chefs" />
        <Row>
          {chefs.map((chef) => (
            <Col lg={4} md={6} key={chef.id} className="mb-4">
              <div
                className={styles.member}
                data-aos="zoom-in"
                data-aos-delay={chef.delay}
              >
                <img
                  src={chef.image}
                  className="img-fluid"
                  alt={`${chef.name} - ${chef.role}`}
                />
                <div className={styles.memberInfo}>
                  <div className={styles.memberInfoContent}>
                    <h4>{chef.name}</h4>
                    <span>{chef.role}</span>
                  </div>
                  <div className={styles.social}>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Chefs;
