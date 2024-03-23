import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { images } from "../../../config/statics";
import { CircularProgress, Image } from "@nextui-org/react";
import { useGetDataByType } from "../../../services/useGetDataByType";

const Destacados = () => {
  const sliderRef = useRef(null);

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
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <h2 className="col-span-12 text-primary text-5xl text-center pt-36 px-32">
        Galeria Audiovisual
      </h2>
      <div className="col-span-12 grid grid-cols-12 items-center px-32">
        <div className="col-span-12 grid grid-cols-12 items-center">
          <Image
            className="col-span-1 self-end cursor-pointer"
            src={images.flecha2}
            onClick={previousSlide}
          />
          <div className="col-span-10 items-center">
            <Slider ref={sliderRef} {...settings}>
              {loading && (
                <CircularProgress
                  className="min-w-full flex justify-center items-center"
                  aria-label="Cargando..."
                />
              )}
              {data.map((index) => {
                return (
                  <div key={index} className="p-3">
                    <div className="p-10">
                      <Image
                        radius="none"
                        src={index.data.urlimage.url}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <Image
            className="col-span-1 self-start cursor-pointer"
            src={images.flecha1}
            onClick={nextSlide}
          />
        </div>
      </div>
    </>
  );
};

export default Destacados;
