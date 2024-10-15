import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../../components/Section title/SectionTitle";
import Event from "../../../components/Events/Event";
import eventBirthday from "../../../assets/img/eventBirthday.jpg";
import eventPrivate from "../../../assets/img/eventPrivate.jpg";
import eventCustom from "../../../assets/img/eventCustom.jpg";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./Events.module.css";

const eventsData = [
  {
    image: eventBirthday,
    title: "Birthday Parties",
    price: "$189",
    firstText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    lastText:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    options: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    image: eventPrivate,
    title: "Private Parties",
    price: "$290",
    firstText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    lastText:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    options: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    image: eventCustom,
    title: "Custom Parties",
    price: "$99",
    firstText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    lastText:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    options: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
];

export default function Events() {
  return (
    <section className={styles.back}>
      <Container>
        <Row>
          <Col>
            <SectionTitle
              title="Events"
              subTitle="Organize Your Events in our Restaurant"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Swiper
              speed={2000}
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}  "></span>`;
                },
              }}
              autoplay={{ delay: 5000 }}
              keyboard={{ enabled: true }}
            >
              {eventsData.map((event, index) => (
                <SwiperSlide key={index}>
                  <Event
                    image={event.image}
                    title={event.title}
                    price={event.price}
                    firstText={event.firstText}
                    lastText={event.lastText}
                    option1={event.options[0]}
                    option2={event.options[1]}
                    option3={event.options[2]}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
