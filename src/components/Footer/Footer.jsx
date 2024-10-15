import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaLinkedin,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerTop}>
        <Container>
          <Row
            className={`gap-1 justify-content-evenly d-flex ${styles.footer}`}
          >
            <Col lg={3} md={4} sm={12} className={`mb-4 ${styles.footerInfo}`}>
              <h3>RESTAURANTLY</h3>
              <p>
                A108 Adam Street <br />
                NY 535022, USA <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55 <br />
                <strong>Email:</strong> info@example.com <br />
              </p>
              <Row className={`py-4 px-2 text-center ${styles.socialLinks}`}>
                <a href="#">
                  <FaTwitter size={18} />
                </a>
                <a href="#">
                  <FaFacebook size={18} />
                </a>
                <a href="#">
                  <FaInstagram size={18} />
                </a>
                <a href="#">
                  <FaSkype size={18} />
                </a>
                <a href="#">
                  <FaLinkedin size={18} />
                </a>
              </Row>
            </Col>

            <Col lg={2} md={4} className={` ${styles.footerLinks}`}>
              <h4 className={`mt-4 mb-2 mt-md-0 ${styles.footerTitle}`}>
                Our Services
              </h4>
              <ul className="d-flex flex-column p-0 m-0 list-unstyled">
                <li className={`d-flex my-2 align-items-center`}>
                  <FaChevronRight className={`mx-2  ${styles.icon}`} />
                  <a href="#">Web Design</a>
                </li>
                <li className={`d-flex my-3 align-items-center`}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">Web Development</a>
                </li>
                <li className={`d-flex my-2 align-items-center `}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">Product Management</a>
                </li>
                <li className={`d-flex my-3 align-items-center `}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">Marketing</a>
                </li>
                <li className={`d-flex my-2 align-items-center`}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </Col>

            <Col lg={2} md={3} className={`${styles.footerLinks}`}>
              <h4 className={`mt-4 mb-2 mt-md-0  ${styles.footerTitle}`}>
                Useful Links
              </h4>
              <ul className="d-flex flex-column p-0 m-0 list-unstyled">
                <li className={`d-flex my-2 align-items-center`}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">Home</a>
                </li>
                <li className={`d-flex my-3 align-items-center`}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">About us</a>
                </li>
                <li className={`d-flex my-2 align-items-center `}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">Services</a>
                </li>
                <li className={`d-flex my-3 align-items-center `}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">Terms of service</a>
                </li>
                <li className={`d-flex my-2 align-items-center`}>
                  <FaChevronRight className={`mx-2 ${styles.icon}`} />
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </Col>

            <Col lg={4} md={8} className={styles.footerNewsletter}>
              <h4 className={`mt-4 mb-2 mt-lg-0 ${styles.footerTitle}`}>
                Our Newsletter
              </h4>
              <p className="my-3">
                Tamen quem nulla quae legam multos aute sint culpa legam nostrud
                magna.
              </p>
              <form className={styles.footerNewsletterForm}>
                <input
                  type="email"
                  name="email"
                  className={styles.footerNewsletterInput}
                  placeholder="Enter your email"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className={styles.footerNewsletterSubmit}
                />
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className={`mb-4 ${styles.credits}`}>
          <Col className={styles.copyright}>
            <pre>
              &copy; Copyright <strong>Restaurantly</strong>. All Rights
              Reserved
            </pre>
            <p>
              Designed by <strong>MAHYA MOFRAD</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
