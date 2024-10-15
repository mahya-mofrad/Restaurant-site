import Navbar from "../../../components/navbar/Navbar";
// import TopBar from "../../../components/top bar/TopBar";
import Welcome from "../../../components/welcome/Welcome";
import styled from "../Header/header.module.css";

function Header() {
  return (
    <div className={`${styled.bgHead}`}>
      {/* <TopBar /> */}
      <Navbar />
      <Welcome />
    </div>
  );
}
export default Header;
