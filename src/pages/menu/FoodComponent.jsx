import { useState } from "react";
import { Row, Col, Figure, Modal } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import spinachSalad from "../../assets/img/menu/spinach-salad.jpg";
import LobsterBisque from "../../assets/img/menu/lobster-bisque.jpg";
import CrabCake from "../../assets/img/menu/cake.jpg";
import tuscanGrilled from "../../assets/img/menu/tuscan-grilled.jpg";
import GreekSalad from "../../assets/img/menu/greek-salad.jpg";
import LobsterRoll from "../../assets/img/menu/lobster-roll.jpg";
import BreadBarrel from "../../assets/img/menu/bread-barrel.jpg";
import CaesarSelections from "../../assets/img/menu/caesar.jpg";
import MozzarellaStick from "../../assets/img/menu/mozzarella.jpg";
import styled from "./Menu.module.css";

// eslint-disable-next-line react/prop-types
export default function FoodsComponent({ activeFilter }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  console.log("🚀 ~ FoodsComponent ~ isDesktop:", isDesktop);

  const menuItems = [
    {
      name: "Lobster Bisque",
      description: "Lorem, deren, trataro, filede, nerada",
      category: "filterStarters",
      price: "$5.95",
      image: LobsterBisque,
    },
    {
      name: "Crab Cake",
      description:
        "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
      category: "filterStarters",
      price: "$7.95",
      image: CrabCake,
    },
    {
      name: "Tuscan Grilled",
      description:
        "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
      category: "filterSpecialty",
      price: "$9.95",
      image: tuscanGrilled,
    },
    {
      name: "Greek Salad",
      description: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
      category: "filterSalads",
      price: "$9.95",
      image: GreekSalad,
    },
    {
      name: "Lobster Roll",
      description:
        "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
      category: "filterSpecialty",
      price: "$12.95",
      image: LobsterRoll,
    },
    {
      name: "Bread Barrel",
      description: "Lorem, deren, trataro, filede, nerada",
      category: "filterStarters",
      price: "$6.95",
      image: BreadBarrel,
    },
    {
      name: "Caesar Selections",
      description: "Lorem, deren, trataro, filede, nerada",
      category: "filterSalads",
      price: "$8.95",
      image: CaesarSelections,
    },
    {
      name: "Mozzarella Stick",
      description: "Lorem, deren, trataro, filede, nerada",
      category: "filterStarters",
      price: "$4.95",
      image: MozzarellaStick,
    },
    {
      name: "Spinach Salad",
      description:
        "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
      category: "filterSalads",
      price: "$9.95",
      image: spinachSalad,
    },
  ];

  const filteredItems =
    activeFilter === "*"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  const handleShowModal = (item) => {
    if (isDesktop) {
      setSelectedItem(item);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="container">
      <Row className="g-5">
        {filteredItems.map((item, index) => (
          <Col key={index} sm={12} md={3}>
            <Figure className={`${styled.menuItems}`}>
              <Figure.Image
                roundedCircle
                thumbnail
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
                className={`${styled.menuImg}`}
                onClick={() => handleShowModal(item)}
              />
              <Figure.Caption className={``}>
                <p
                  className={`d-inline-block fs-5 fw-bold mb-2 ${styled.menuItemName}`}
                >
                  {item.name}
                </p>
                <p className={`mb-2 ${styled.menuItemDescription}`}>
                  {item.description}
                </p>
                <p className={`fs-5 text-white fw-bold`}>{item.price}</p>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered className="">
        {selectedItem && (
          <>
            <Modal.Body className="bg-dark ">
              <Modal.Title className=" my-1 text-white">
                {selectedItem.name}
              </Modal.Title>
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="img-fluid"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <p className="my-2 text-white">{selectedItem.description}</p>
              <p className=" text-white">{selectedItem.price}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}
