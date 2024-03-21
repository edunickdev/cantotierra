import { useEffect } from "react";
import CarouselComponent from "../components/carousel/CarouselComponent";
import MisionVision from "../components/section/Inicio/MisionVision";
import QuienesSomos from "../components/section/Inicio/QuienesSomos";
import Section from "../components/section/Section";
import LoQueHacemos from "../components/section/Inicio/LoQueHacemos";
import Destacados from "../components/section/Inicio/Destacados";
import Contacto from "../components/section/Inicio/Contacto";

const HomePage = () => {

  useEffect(() => {
    fetch("https://canto-de-la-tierra.prismic.io/api/v2/")
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("ref", data.refs[0].ref);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  , []);

  return (
    <>
      <CarouselComponent />
      <Section childrens={<QuienesSomos />} name={"Quienes somos"} />
      <Section
        childrens={<MisionVision />}
        name={"Mision y Vision"}
        heightvh="50vh"
      />
      <Section
        childrens={<LoQueHacemos />}
        name={"Lo que hacemos"}
        heightvh="50vh"
      />
      <Section childrens={<Destacados />} name={"Impacto"} />
      <Section childrens={<Contacto />} name={"Contacto"} heightvh="60vh" />
    </>
  );
};

export default HomePage;
