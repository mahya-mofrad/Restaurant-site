import Navbar from "../../components/navbar/Navbar";
// import TopBar from "../../components/top bar/TopBar";
import styled from "./About.module.css";
import AboutComponent from "../../components/aboutUs/AboutComponent";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <div className={`${styled.aboutBg}`}>
      {/* <TopBar /> */}
      <Navbar />
      <AboutComponent />
      <Footer />
    </div>
  );
}
