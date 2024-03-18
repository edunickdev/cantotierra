import CarouselComponent from "../components/carousel/CarouselComponent";
import MisionVision from "../components/section/Inicio/MisionVision";
import QuienesSomos from "../components/section/Inicio/QuienesSomos";
import Section from "../components/section/Section";

const HomePage = () => {

  return (
    <>
      <CarouselComponent />
      <Section childrens={<QuienesSomos />} name={"Quienes somos"} />
      <Section
        childrens={<MisionVision />}
        name={"Mision y Vision"}
        heightvh="50vh"
      />
    </>
  );
};

export default HomePage;
