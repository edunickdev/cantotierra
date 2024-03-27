import CarouselComponent from "../components/carousel/CarouselComponent";
import Footer from "../components/footer/footer";
import Section from "../components/section/Section";
import Programs from "../components/section/impacto/Artes";
import Contents from "../components/section/impacto/Contenidos";
import Counts from "../components/section/impacto/Conteos";
import Procesos from "../components/section/impacto/procesos";

const ImpactoPage = () => {

  return (
    <>
      <CarouselComponent group={"carrusel-impacto"} />
      <Section childrens={<Procesos />} name={"procesos"} heightvh="90vh" />
      <Section childrens={<Counts />} name={"conteos"} heightvh="30vh" />
      <Section childrens={<Contents />} name={"conteos"} />
      <Section childrens={<Programs />} name={"Contacto"} heightvh="60vh" />
      <Section childrens={<Footer />} name={"Contacto"} heightvh="60vh" />
    </>
  );
};

export default ImpactoPage;
