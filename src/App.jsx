// import "./App.css";

import { useRef } from "react";
import About from "./pages/aboutUs/About.jsx";
import Home from "./pages/Home/Home.jsx";
import MenuPage from "./pages/menu/Menu.jsx";
import NavigationBar from "./components/navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const bookTableRef = useRef(null);

  const scrollToBookTable = () => {
    if (bookTableRef.current) {
      bookTableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BrowserRouter>
      <NavigationBar scrollToBookTable={scrollToBookTable} />
      <Routes>
        <Route path="/" element={<Home bookTableRef={bookTableRef} />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
