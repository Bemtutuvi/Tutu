import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Oferta from "./Oferta";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Carousel
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      dynamicHeight
    >
      <div>
        <img
          src="https://cdn.dooca.store/29610/products/0p25vheceluolovfymlzaondbdu5ldpmzjvp_640x640.jpg?v=1661350192&webp=0"
          alt="Pelúcia de elefante e pelúcia de leão"
        />
      </div>
      <div>
        <img
          src="https://global.cdn.magazord.com.br/apaixonadosporpelucia/img/2023/08/produto/3532/ap1104-1novo.jpg?ims=400x400"
          alt="Pelúcia de elefante, pelúcia de leão e pelúcia de girafa"
        />
      </div>
      <div>
        <img
          src="https://global.cdn.magazord.com.br/apaixonadosporpelucia/img/2018/12/produto/1167/1g1m1p-2.jpg?ims=800x800"
          alt="Pelúcias de urso branco"
        />
      </div>
    </Carousel>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oferta" element={<Oferta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
