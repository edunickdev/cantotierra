import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetDataByType } from "../../../services/useGetDataByType";
import CustomSlider from "../../slider/CustomSlider";
import { Image } from "@nextui-org/react";

const Destacados = () => {
  const ref = sessionStorage.getItem("ref");
  const { data, loading } = useGetDataByType("galeria", ref && ref);

  const settings = {
    className: "center col-span-2",
    AnimationEffect: "fade",
    infinite: true,
    centerPadding: "60px",
    lazyLoad: true,
    slidesToShow: 3,
    swipeToSlide: true,
  };

  const child = data && data.map((index) => {
    const url = index.data.urlimage.url;

    return (
      <div key={index} className="p-3">
        <div className="p-3">
          <Image radius="none" src={url} />
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 className="col-span-12 text-primary text-5xl text-center pt-36 px-32">
        Galeria Audiovisual
      </h2>
      <div className="col-span-12 grid grid-cols-12 items-center px-32">
        <CustomSlider
          settings={settings}
          loading={loading}
          child={child}
        />
      </div>
    </>
  );
};

export default Destacados;
