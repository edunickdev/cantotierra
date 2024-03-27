import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useGetDataByType } from "../../../services/useGetDataByType";
import CustomSlider from "../../slider/CustomSlider";
import { images } from "../../../config/statics";

const Procesos = () => {
  const ref = sessionStorage.getItem("ref");
  const { data, loading } = useGetDataByType("galeria", ref && ref);

  const settings = {
    className: "center col-span-6",
    AnimationEffect: "fade",
    infinite: true,
    centerPadding: "60px",
    lazyLoad: true,
    slidesToShow: 2,
    swipeToSlide: true,
  };

  const child =
    data &&
    data.map((index) => {
      const url = index.data.urlimage.url;

      return (
        <div key={index} className="p-14">
          <Card radius="none">
            <CardBody className="p-0 overflow-hidden h-72">
              <Image src={url} width="100%" radius="none" />
              <Image src={images.logo2} width={50} height={50} className="relative inset-0 bottom-7 z-10" />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <div className="flex flex-col">
                <h3 className="text-primary text-3xl py-5 px-4">Lorem</h3>
                <span className="px-4 pb-5">
                  Pariatur pariatur consectetur officia pariatur incididunt
                  excepteur aliqua nulla ea dolore ullamco. Enim anim elit
                  laborum veniam pariatur irure laboris excepteur tempor velit
                  amet occaecat.
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      );
    });

  return (
    <>
      <h2 className="col-span-12 text-primary text-3xl text-left pt-[70px] px-44">
        Procesos en los que hemos participado
      </h2>
      <div className="col-span-12 grid grid-cols-12 px-14">
        <CustomSlider settings={settings} loading={loading} child={child} />
      </div>
    </>
  );
};

export default Procesos;
