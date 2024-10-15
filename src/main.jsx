import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import * as Icon from "react-bootstrap-icons";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// scrollTo aos

// const ScrollToComponent = () => {
//     const scrollToSection = (id) => {
//         const element = document.getElementById(id);
//         element.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <div>
//             <a href="#" onClick={() => scrollToSection('section1')}>Scroll to Section 1</a>
//             <div id="section1">Section 1 Content</div>
//         </div>
//     );
// };

// export default ScrollToComponent;

// html {
//   scroll-behavior: smooth;
// }
