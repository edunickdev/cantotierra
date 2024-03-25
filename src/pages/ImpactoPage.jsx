import CarouselComponent from "../components/carousel/CarouselComponent";
import Footer from "../components/footer/footer";
import Section from "../components/section/Section";

const ImpactoPage = () => {

  return (
    <>
      <CarouselComponent group={"carrusel-impacto"} />
      <Section childrens={""} />
      <Section childrens={<Footer />} name={"Contacto"} heightvh="60vh" />
    </>
  );
};

export default ImpactoPage;
