import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "./Navbar.module.css";

export default function NavigationBar(scrollToBookTable) {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`animate__animated animate__slideInDown ${styled.header}`}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className={styled.logo}>
          Restaurantly
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarNav"
          className={styled.mobileNavToggle}
        />

        <Navbar.Collapse id="navbarNav">
          <Nav className={`m-auto ${styled.navbar} ${styled.insideNav}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styled.navLink} ${styled.activeLink}`
                  : styled.navLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive
                  ? `${styled.navLink} ${styled.activeLink}`
                  : styled.navLink
              }
            >
              About
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? `${styled.navLink} ${styled.activeLink}`
                  : styled.navLink
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/specials"
              className={({ isActive }) =>
                isActive
                  ? `${styled.navLink} ${styled.activeLink}`
                  : styled.navLink
              }
            >
              Specials
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${styled.navLink} ${styled.activeLink}`
                  : styled.navLink
              }
            >
              Contact
            </NavLink>
          </Nav>

          <div>
            <NavLink
              to="/"
              onClick={scrollToBookTable}
              className={`rounded-pill ${styled.bookTableBtn}`}
            >
              Book a Table
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
